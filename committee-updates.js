(() => {
 const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const url=n=>n.forumId?`index.html#event/${n.forumId}`:`committee-news.html?id=${n.id}`;
 const placeholder=(caption='现场照片待补充')=>`<div class="news-photo-slot" role="img" aria-label="${escape(caption)}"><span aria-hidden="true">＋</span><p>${escape(caption)}</p><small>照片补充后将在此展示</small></div>`;
 const photo=(image,hero=false)=>`<figure class="${hero?'news-cover':'news-gallery-item'}"><a href="${escape(image.src)}" target="_blank" rel="noopener" aria-label="查看原图：${escape(image.label)}"><img ${hero?'fetchpriority="high"':'loading="lazy"'} src="${escape(image.src)}" alt="${escape(image.label)}"></a><figcaption>${escape(image.label)} · 点击查看原图</figcaption></figure>`;
 const section=s=>`<section class="news-detail-section ${s.speaker?'news-speaker':''} ${s.group?'news-group-heading':''}"><${s.speaker?'h3':'h2'}>${escape(s.heading)}</${s.speaker?'h3':'h2'}>${s.images?`<div class="${s.gallery?'news-gallery':'news-inline-photos'}">${s.images.map(i=>photo(i)).join('')}</div>`:''}${(s.paragraphs||[]).map(t=>`<p>${escape(t)}</p>`).join('')}${s.bullets?`<ul>${s.bullets.map(t=>`<li>${escape(t)}</li>`).join('')}</ul>`:''}</section>`;
 const page=document.querySelector('#committee-article');
 if(page){
  const n=COMMITTEE_NEWS.find(x=>x.id===new URLSearchParams(location.search).get('id'));
  if(!n){page.innerHTML='<div class="cm-wrap cm-section"><h1>未找到这篇活动简讯</h1><a href="committee.html#news">返回活动与动态 →</a></div>';return;}
  document.title=n.title+' · 专委会动态';
  if(n.forumId){page.innerHTML=`<div class="cm-wrap cm-section"><h1>${escape(n.title)}</h1><p>${escape(n.summary)}</p><a class="cm-button navy" href="${url(n)}">阅读论坛报道 →</a></div>`;return;}
  const related=committeePeople.filter(p=>n.people.includes(p.name));
  page.innerHTML=`<article class="cm-wrap news-article"><a class="meta" href="committee.html#news">← 活动与动态</a><p class="cm-kicker">${escape(n.category)} / ${n.date}</p><h1>${escape(n.title)}</h1><p class="news-place">${escape(n.place)}</p><p class="news-lead">${escape(n.summary)}</p>${n.cover?photo(n.images.find(i=>i.src===n.cover),true):placeholder()}<div class="news-body">${n.paragraphs.map(t=>`<p>${escape(t)}</p>`).join('')}</div>${n.sections?`<div class="news-detailed-report">${n.sections.map(section).join('')}</div>`:''}${n.byline?`<p class="news-byline" style="text-align:right;font-size:13px;line-height:2">${escape(n.byline)}</p>`:''}${n.images&&!n.sections?`<section class="news-gallery-section" aria-label="活动现场图集"><h2>现场图集</h2><div class="news-gallery">${n.images.filter(i=>i.src!==n.cover).map(i=>photo(i)).join('')}</div></section>`:''}<p class="news-source">来源：${n.sourceNote?escape(n.sourceNote):`专委会秘书处前期工作情况汇总。${n.images?'活动照片由秘书处补充。':'本文为活动简讯，现场照片及进一步资料待补充。'}`}</p>${related.length?`<div class="related-people"><span>相关成员</span>${related.map(p=>`<a href="committee.html?person=${encodeURIComponent(p.name)}#people">${escape(p.name)} ↗</a>`).join('')}</div>`:''}<a class="cm-inline" href="committee.html#news">返回专委会活动与动态 →</a></article>`;
  return;
 }
 const list=document.querySelector('#committee-news-list');
 if(list) list.innerHTML=COMMITTEE_NEWS.map(n=>{
  const e=n.forumId&&window.FORUMS.find(e=>e.id===n.forumId);
  return `<article class="timeline-card"><a class="news-visual" href="${url(n)}" aria-label="阅读：${escape(n.title)}">${e||n.cover?`<img loading="lazy" src="${escape(e?e.cover:n.cover)}" alt="${escape(n.title)}活动现场">`:placeholder()}</a><div class="timeline-copy"><div class="news-date"><time datetime="${n.date.replaceAll('.','-')}">${n.date}</time><span>${escape(n.category)}</span></div><h3><a href="${url(n)}">${escape(n.title)}</a></h3><p>${escape(n.summary)}</p><a class="text-button" href="${url(n)}">${n.forumId?'阅读论坛报道':'阅读全文'} →</a>${n.forumId?'<small class="shared-event">论坛与专委会关联活动 · 同一篇报道</small>':''}</div></article>`;
 }).join('');
 const notices=document.querySelector('#committee-notices');
 if(notices)notices.innerHTML=COMMITTEE_NOTICES.map((n,i)=>`<article><span class="cm-kicker">参与信息 · 正式提交待启用</span><h3>${escape(n.title)}</h3><p>${escape(n.summary)}</p><button class="text-button" data-apply="${i?'secretary':'member'}">查看条件并试填 →</button></article>`).join('');
 const params=new URLSearchParams(location.search);
 if(params.has('person')){const btn=[...document.querySelectorAll('[data-person]')].find(b=>b.dataset.person===params.get('person'));if(btn)btn.click();}
 if(['member','secretary','resource'].includes(params.get('apply'))){const btn=document.querySelector(`[data-apply="${params.get('apply')}"]`);if(btn)btn.click();}
})();
