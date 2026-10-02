export const MAX_FILE_BYTES = 4 * 1024 * 1024;
export function safeUrl(value) {
  try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol) && !u.username && !u.password ? u.href : null; } catch { return null; }
}
function unquoted(text) {
  return text.replace(/```[\s\S]*?```/g, '').split('\n').filter(line => !/^\s*>/.test(line)).join('\n');
}
function signal(text) {
  const t = unquoted(text).toLowerCase();
  const reopen = /\b(?:reopened|reopening|open again)\b|重新开放|重新招募|恢复招募/.test(t);
  const closed = /该任务已完结|需求已结束|任务已结束|已找到(?:合适的)?人|已招到|\b(?:this (?:task|issue|bounty|request) (?:has been |is )?(?:completed|closed)|no longer accepting|position (?:has been |is )?filled)\b/.test(t);
  const negated = /\b(?:not (?:yet )?(?:closed|completed|filled)|has not been completed)\b|尚未(?:结束|完结)|未(?:结束|完结)|没有(?:结束|完结)/.test(t);
  const assigned = /\b(?:assigned to|reserved for)\s+\S+|已分配给|已预留给/.test(t);
  return reopen ? 'reopened' : closed && !negated ? 'closed' : assigned ? 'reserved' : null;
}
export function validateThread(thread) {
  if (!thread || typeof thread !== 'object' || Array.isArray(thread)) throw Error('Each thread must be an object.');
  for (const key of ['title','owner','body']) if (typeof thread[key] !== 'string' || !thread[key].trim() && key !== 'body') throw Error(`Missing or invalid ${key}.`);
  if (!Array.isArray(thread.replies) || thread.replies.length > 2000) throw Error('Replies must be an array of at most 2,000 records.');
  if (!Number.isInteger(thread.expectedReplies) || thread.expectedReplies < 0 || thread.expectedReplies > 100000) throw Error('Expected reply count is required.');
  const seen = new Set();
  for (const r of thread.replies) {
    if (!r || !Number.isInteger(r.number) || r.number < 1 || typeof r.author !== 'string' || !r.author.trim() || typeof r.text !== 'string') throw Error('Each reply needs a positive number, author and text.');
    if (r.decisionText !== undefined && typeof r.decisionText !== 'string') throw Error('Invalid decision text.');
    if (seen.has(r.number)) throw Error('Duplicate reply numbers make this snapshot ambiguous.');
    seen.add(r.number);
  }
  return thread;
}
export function audit(thread) {
  validateThread(thread);
  const replies = [...thread.replies].sort((a,b)=>a.number-b.number);
  const complete = replies.length === thread.expectedReplies && replies.every((r,i)=>r.number === i+1);
  const ownerEvidence = [{number:0,author:thread.owner,text:thread.body},...replies.filter(r=>r.author === thread.owner)];
  let decisive = null;
  for (const r of ownerEvidence) {
    const kind = signal(r.decisionText ?? r.text);
    if (kind) decisive = {...r,kind};
  }
  const cashText = ownerEvidence.map(r=>unquoted(r.decisionText ?? r.text)).join('\n');
  const noCash = /points only|no monetary payment|credit only|zero-bounty|\$0\b|仅积分|没有现金报酬/i.test(cashText);
  let status = decisive?.kind === 'closed' ? 'closed' : decisive?.kind === 'reserved' ? 'reserved' : noCash ? 'no-cash' : 'confirm';
  if (!complete) status = 'incomplete';
  return {status,complete,found:replies.length,expected:thread.expectedReplies,decisive,noCash,
    warning: 'Rules detect selected explicit phrases, not every meaning. A snapshot is not proof of current availability or guaranteed payment.',
    capturedAt:thread.capturedAt ?? null,sourceUrl:safeUrl(thread.sourceUrl),replies};
}
export function parseV2ex(doc) {
  const title = doc.querySelector('h1')?.textContent.trim();
  const header = doc.querySelector('h1')?.parentElement;
  const owner = header?.querySelector('small a[href^="/member/"]')?.textContent.trim();
  const body = doc.querySelector('.topic_content')?.textContent.trim();
  const countMatch = doc.body.textContent.match(/(\d+)\s+repl(?:y|ies)\b/i);
  const noReplies = Boolean(doc.querySelector('#no-comments-yet'));
  if (!title || !owner || body === undefined || !countMatch && !noReplies) throw Error('This file is not a complete recognizable V2EX topic snapshot. Save the original topic HTML.');
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href');
  const sourceUrl = safeUrl(canonical);
  const replies = [...doc.querySelectorAll('[id^="r_"]')].map(cell=>{
    const content = cell.querySelector('.reply_content');
    if (!content) return null;
    const copy = content.cloneNode(true);
    copy.querySelectorAll('blockquote,pre,code').forEach(n=>n.remove());
    const textOf = el => { const c=el.cloneNode(true); c.querySelectorAll('br').forEach(n=>n.replaceWith('\n')); return c.textContent.trim(); };
    return {number:Number(cell.querySelector('.no')?.textContent),author:cell.querySelector('strong a[href^="/member/"]')?.textContent.trim(),text:textOf(content),decisionText:textOf(copy),url:sourceUrl ? sourceUrl+'#'+cell.id : null};
  }).filter(Boolean);
  return validateThread({title,owner,body,replies,expectedReplies:countMatch ? Number(countMatch[1]) : 0,sourceUrl,capturedAt:null,demo:false});
}
