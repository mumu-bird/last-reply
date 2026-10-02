import http from 'node:http';
import {readFile} from 'node:fs/promises';
const allowed=new Set(['index.html','core.js','app.js','style.css','fixtures.json']);
const types={html:'text/html',js:'text/javascript',css:'text/css',json:'application/json'};
http.createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname;const file=path==='/'?'index.html':path.slice(1);if(!allowed.has(file)){res.writeHead(404);return res.end('Not found');}try{const body=await readFile(new URL(file,import.meta.url));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]+'; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(body);}catch{res.writeHead(500);res.end('Could not read app file');}}).listen(4316,'127.0.0.1',()=>console.log('Last Reply: http://127.0.0.1:4316'));
