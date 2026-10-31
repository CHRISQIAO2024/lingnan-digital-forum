(() => {
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const related=new Map(COMMITTEE_NEWS.filter(n=>n.forumId).map(n=>[n.forumId,n]));
 const catalog=[
 {type:'活动与文章',title:'2006级国际贸易班入学20周年值年活动',url:'index.html#anniversary',date:'2026',summary:'岭南学院2006级国际经济与贸易专业（专升本）部分同学相聚中山大学深圳校区，在图书馆及校园合影留念。',body:'值年庆 入学20周年 校友 同学 合影 活动花絮 国际贸易 2006 国际经济与贸易 专升本 深圳 图书馆',label:'论坛活动花絮 · 值年庆'},
 ...FORUMS.map(e=>{const n=related.get(e.id);return {type:'活动与文章',title:e.title,url:`index.html#event/${e.id}`,date:e.date,summary:n?.summary||e.summary,body:[e.summary,...e.article,...e.keynote.flatMap(p=>[p.name,p.role]),...e.panel.flatMap(p=>[p.name,p.role]),n?.title||'',...(n?.people||[])].join(' '),label:n?'论坛 · 专委会关联活动':'岭南数字论坛'};}),
 ...COMMITTEE_NEWS.filter(n=>!n.forumId).map(n=>({type:'活动与文章',title:n.title,url:`committee-news.html?id=${n.id}`,date:n.date,summary:n.summary,body:[n.place,...n.people,...n.paragraphs,...(n.sections||[]).flatMap(s=>[s.heading,...(s.paragraphs||[]),...(s.bullets||[])])].join(' '),label:'专委会动态'})),
 ...committeePeople.map(p=>({type:'成员',title:p.name,url:`committee.html?person=${encodeURIComponent(p.name)}#people`,summary:`${p.role} · ${p.cohort} · ${p.org}`,body:[p.name,p.role,p.group,p.cohort,p.org,p.job,p.qualifications,p.appointments,p.honors,p.bio].filter(Boolean).join(' '),label:'专委会成员'})),
 ...COMMITTEE_NOTICES.map(n=>({type:'通知',title:n.title,url:n.url,summary:n.summary,body:n.summary,label:'参与信息 · 试填'}))
 ];
 const input=document.querySelector('#global-query'),results=document.querySelector('#search-results'),status=document.querySelector('#search-status');
 let kind='全部';
 const tokens=q=>q.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 function highlight(t,terms){let parts=[{text:String(t),marked:false}];for(const term of terms){parts=parts.flatMap(part=>{if(part.marked)return [part];const value=part.text,lower=value.toLocaleLowerCase(),out=[];let start=0,index;while((index=lower.indexOf(term,start))!==-1){if(index>start)out.push({text:value.slice(start,index),marked:false});out.push({text:value.slice(index,index+term.length),marked:true});start=index+term.length;}if(start<value.length)out.push({text:value.slice(start),marked:false});return out;});}return parts.map(p=>p.marked?`<mark>${esc(p.text)}</mark>`:esc(p.text)).join('');}
 function snippet(e,terms){const text=e.summary+' '+e.body;let first=text.length;for(const t of terms){const n=text.toLocaleLowerCase().indexOf(t);if(n>=0)first=Math.min(first,n);}const start=Math.max(0,first-32);return (start?'…':'')+text.slice(start,start+135)+(text.length>start+135?'…':'');}
 function render(update=true){const q=input.value.slice(0,100),terms=tokens(q);if(update){const u=new URL(location.href);if(q.trim())u.searchParams.set('q',q.trim());else u.searchParams.delete('q');if(kind!=='全部')u.searchParams.set('type',kind);else u.searchParams.delete('type');history.replaceState(null,'',u.pathname+u.search);}
 const matches=terms.length?catalog.filter(e=>terms.every(t=>(e.title+' '+e.body+' '+e.summary).toLocaleLowerCase().includes(t))).sort((a,b)=>{const score=e=>terms.reduce((s,t)=>s+(e.title.toLocaleLowerCase().includes(t)?10:0),0);return score(b)-score(a)||(b.date||'').localeCompare(a.date||'');}):[];
 document.querySelectorAll('[data-search-type]').forEach(b=>{const type=b.dataset.searchType,count=type==='全部'?matches.length:matches.filter(e=>e.type===type).length;b.classList.toggle('is-active',type===kind);b.setAttribute('aria-pressed',String(type===kind));b.querySelector('small').textContent=terms.length?count:'';});
 const visible=matches.filter(e=>kind==='全部'||e.type===kind);status.textContent=terms.length?`“${q.trim()}” · 找到 ${matches.length} 条结果${kind==='全部'?'':`，当前分类 ${visible.length} 条`}`:'可按姓名、企业、活动或具体议题检索。';
 if(!terms.length){results.innerHTML='<div class="search-empty"><h2>从一个名字或问题开始</h2><p>例如：明珞、刘铭文、AI转型、金域医学。</p><p>搜索覆盖公开活动、成员资料和参与信息；私人联系方式不纳入检索。</p></div>';return;}
 results.innerHTML=visible.map(e=>`<article class="search-result"><div class="meta">${esc(e.type)} · ${esc(e.label)}${e.date?' / '+e.date:''}</div><h2><a href="${esc(e.url)}">${highlight(e.title,terms)} ↗</a></h2><p>${highlight(snippet(e,terms),terms)}</p></article>`).join('')||'<div class="search-empty"><h2>暂未找到相关内容</h2><p>可以减少关键词，或切换到“全部”。供需信息尚未正式发布，后续经本人确认公开后纳入检索。</p></div>';
 }
 const params=new URLSearchParams(location.search);input.value=(params.get('q')||'').slice(0,100);if(['成员','活动与文章','通知','供需信息'].includes(params.get('type')))kind=params.get('type');
 document.querySelector('#global-search-form').addEventListener('submit',e=>{e.preventDefault();render();});
 input.addEventListener('input',()=>render());
 document.querySelectorAll('[data-search-type]').forEach(b=>b.onclick=()=>{kind=b.dataset.searchType;render();});
 document.querySelectorAll('[data-suggestion]').forEach(b=>b.onclick=()=>{input.value=b.dataset.suggestion;kind='全部';render();});
 addEventListener('popstate',()=>{const p=new URLSearchParams(location.search);input.value=(p.get('q')||'').slice(0,100);kind=p.get('type')||'全部';render(false);});
 render(false);
})();
