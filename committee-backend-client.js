/* Load after committee.js. Fail closed: retain the clearly labelled trial when API is unavailable. */
(async()=>{
 let status;try{const response=await fetch('/api/committee/status',{cache:'no-store'});if(!response.ok)return;status=await response.json();}catch{return;}
 if(status.applications){
  document.querySelectorAll('.preview-banner').forEach(el=>el.textContent='委员与秘书申请已开放 · 提交后由秘书处审核'+(status.profiles?'；现任成员修改资料须先验证预留手机号':'；现任成员资料暂由秘书处统一补充'));
  document.querySelectorAll('[data-apply]').forEach(el=>el.textContent=el.textContent.replace(/试填/g,'填写').replace('正式提交待启用','正式申请'));
  document.querySelectorAll('#committee-notices .cm-kicker').forEach(el=>el.textContent='参与信息 · 正式申请');
  document.querySelectorAll('#committee-notices p').forEach(el=>el.textContent=el.textContent.replace('当前可试填，正式提交通道待启用','可在线提交，由秘书处审核').replace('正式提交通道待启用','可在线提交，由秘书处审核'));
  document.querySelectorAll('footer p').forEach(el=>{if(el.textContent==='活动资料持续补充 · 表单试填版')el.textContent='活动资料持续补充 · 在线申请已开放';});
 }
 document.addEventListener('click',event=>{
  const edit=event.target.closest('[data-edit]'),apply=event.target.closest('[data-apply]');
  if(edit&&status.profiles){event.preventDefault();event.stopImmediatePropagation();location.href='committee-account.html?name='+encodeURIComponent(edit.dataset.edit);}
  else if(apply&&status.applications){event.preventDefault();event.stopImmediatePropagation();location.href='committee-apply.html?kind='+encodeURIComponent(apply.dataset.apply);}
 },true);
 if(!status.profiles)return;
 const maintenance=document.querySelector('.member-maintenance p');if(maintenance)maintenance.textContent='点击自己的成员卡片，使用秘书处预留手机号验证后，可完善或修改本人资料。手机未登记或已更换，请联系秘书处核对。';
 document.addEventListener('click',event=>{if(!event.target.closest('[data-person]'))return;const edit=document.querySelector('#profile-content [data-edit]');if(edit){edit.textContent='验证手机并维护本人资料 →';if(edit.nextElementSibling)edit.nextElementSibling.textContent='仅可使用已登记的本人手机号验证。职务、预留手机号等由秘书处另行核实维护。';}});
 try{
  const response=await fetch('/api/committee/public-members',{cache:'no-store'});if(!response.ok)return;const result=await response.json();
  for(const item of result.members){const old=committeePeople.find(p=>p.name===item.name);if(old){for(const k of ['org','cohort'])if(item[k])old[k]=item[k];}}
  renderPeople();
  document.addEventListener('click',event=>{const target=event.target.closest('[data-person]');if(!target)return;const p=result.members.find(x=>x.name===target.dataset.person);if(!p)return;const content=document.querySelector('#profile-content');const heading=[...content.querySelectorAll('h3')].find(h=>h.textContent==='个人介绍');if(heading?.nextElementSibling)heading.nextElementSibling.textContent=p.bio||'个人简介暂未公开';
   const metadata=content.querySelector('.profile-meta');for(const value of [p.job,p.industry,p.direction?.join('、')])if(value){const paragraph=document.createElement('p');paragraph.textContent=value;metadata?.append(paragraph);}
   const gaps=content.querySelectorAll('.profile-gaps p');if(gaps[0])gaps[0].textContent=p.offer?.join('、')||'暂未公开';if(gaps[1])gaps[1].textContent=p.need?.join('、')||'暂未公开';
  });
 }catch{/* Public archive remains available when API fails. */}
})();
