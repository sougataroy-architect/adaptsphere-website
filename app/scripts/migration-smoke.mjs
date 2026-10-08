import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const old=JSON.parse(readFileSync('../docs/preservation/wordpress-url-inventory.json','utf8'));
const results=[];
for(const url of old){const path=new URL(url).pathname;const r=await fetch('http://localhost:3215'+path,{redirect:'manual'});assert.ok([200,308].includes(r.status),path);if(r.status===308){const location=r.headers.get('location');const dest=await fetch(new URL(location,'http://localhost:3215'));assert.equal(dest.status,200,location);}results.push({path,status:r.status,location:r.headers.get('location')});}
for(const path of ['/privacy','/terms','/sitemap.xml','/robots.txt','/opengraph-image']){const r=await fetch('http://localhost:3215'+path);assert.equal(r.status,200,path);results.push({path,status:r.status});}
mkdirSync('output/playwright',{recursive:true});writeFileSync('output/playwright/migration-smoke.json',JSON.stringify(results,null,2));console.log('All 20 WordPress URLs and 5 final endpoints pass.');

