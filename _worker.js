const forms={"member":{"title":"委员自荐 / 推荐","intro":"选择为主，简要介绍一项真实经历即可。欢迎具有专业能力、产业经验及协作意愿的校友了解申请；当前为试填，尚不接收正式申请。","steps":[["基本信息",[["mode","填报方式","select",["本人申请","推荐他人，已初步沟通","推荐他人，尚未沟通"]],["recommender","推荐人姓名、联系方式及与候选人的关系","text",null,{"conditional":"recommended"}],["name","候选人姓名","text"],["org","企业 / 机构名称","text"],["job","职务 / 角色","text"],["contact","联系手机 / 微信","text"],["relation","与岭南学院的关系","select",["校友","在校学生","教师 / 科研人员","其他"]],["cohort","入学年份与专业（选填）","text",null,{"required":false}]]],["专业与协作",[["industry","所在机构主行业","select",["生物医药","新能源","低空经济","金融投资","AI与数字化","科技成果转化","跨境电商出海","其他"]],["direction","专业方向（最多3项）","checks",["生物医药","新能源","低空经济","金融投资","AI与数字化","科技成果转化","跨境电商出海","其他"],{"max":3}],["foundation","机构与产业背景（可多选）","checks",["上市公司","国家级专精特新“小巨人”","制造业单项冠军 / 产业链关键企业","国家高新技术企业","行业头部 / 细分市场领先","高校科研 / 科技成果转化","金融投资机构","具企业交付经验的AI / 数字科技企业","其他"]],["offer","可提供的支持（最多3项）","checks",["行业经验","企业参访","技术方案","AI应用","科研成果转化","人才培养","市场渠道","投融资对接","品牌传播","其他"],{"max":3}],["need","希望获得的支持（选填，最多3项）","checks",["行业经验","企业参访","技术方案","AI应用","科研成果转化","人才培养","市场渠道","投融资对接","品牌传播","其他","暂时没有"],{"required":false,"max":3}],["participation","希望参与的工作（最多3项）","checks",["企业参访","主题分享","需求对接","案例研究","项目协作","人才培养"],{"max":3}],["time","方便参与的频率","select",["每月一次","每季度一次","按专题或项目参与","需结合任务商议"]],["achievement","一项代表性经历或成果（简要填写）","textarea"],["note","其他补充（选填）","textarea",null,{"required":false}]]]]},"secretary":{"title":"秘书处兼职秘书申请","intro":"公益兼职，面向岭南学院数字经济专业硕士2024、2025、2026级在读校友。选择擅长的工作与方便的时间，再简要介绍一项实际经历；不影响本职工作与学习。当前仅供试填。","steps":[["基本信息",[["name","姓名","text"],["org","现工作单位","text"],["job","职务 / 角色","text"],["contact","联系手机 / 微信","text"],["cohort","在读年级","select",["2024级数字经济专业硕士","2025级数字经济专业硕士","2026级数字经济专业硕士"]],["experience","工作年限","select",["3年以下","3–5年","5–10年","10–15年","15年以上"]]]],["能力与时间",[["direction","熟悉的行业（最多3项）","checks",["生物医药","新能源","低空经济","金融投资","AI与数字化","科技成果转化","跨境电商出海","其他"],{"max":3}],["tasks","愿意承担的工作（最多3项）","checks",["产业研究","需求分析","进度跟进","会议资料","沟通协调","活动执行","AI工具与数据协作","其他"],{"max":3}],["time","每周预计可投入时间","select",["2小时以内","2–4小时","4–6小时","6小时以上","需结合任务商议"]],["slots","方便参与的时间段（可多选）","checks",["工作日白天","工作日晚间","周末","按任务商议"]],["achievement","一项真实项目经历：您的角色与成果","textarea"],["note","其他条件或补充（选填）","textarea",null,{"required":false}]]]]},"profile":{"title":"现任成员资料完善 · 试填","intro":"核对已有资料后，以选择为主补充专业和协作意愿。手机验证与保存后台尚未启用，此处仅展示字段，不会修改公开资料。","defaults":{"visibility":"仅秘书处可见"},"steps":[["资料核对",[["name","姓名","text"],["org","企业 / 机构名称","text"],["job","职务 / 角色（选填）","text",null,{"required":false}],["cohort","入学年份与专业 / 学院关系","text"]]],["专业与协作",[["industry","所属主行业","select",["生物医药","新能源","低空经济","金融投资","AI与数字化","科技成果转化","跨境电商出海","其他"]],["direction","专业所长（最多3项）","checks",["企业经营","技术研发","AI应用","数字化转型","科研转化","金融投资","市场渠道","品牌传播","组织与人才","其他"],{"max":3}],["offer","能提供的支持（选填，最多3项）","checks",["行业经验","企业参访","技术方案","AI应用","科研成果转化","人才培养","市场渠道","投融资对接","品牌传播","其他"],{"required":false,"max":3}],["need","希望获得的支持（选填，最多3项）","checks",["行业经验","企业参访","技术方案","AI应用","科研成果转化","人才培养","市场渠道","投融资对接","品牌传播","其他","暂时没有"],{"required":false,"max":3}],["participation","希望参与的工作（选填，最多3项）","checks",["企业参访","主题分享","需求对接","案例研究","项目协作","人才培养"],{"required":false,"max":3}],["visibility","信息公开范围","select",["仅秘书处可见","专委会成员可见","本人确认后可在官网公开"]],["bio","个人简介（选填，建议100字以内）","textarea",null,{"required":false}],["note","当前最希望推进的一件事（选填）","textarea",null,{"required":false}]]]]},"resource":{"title":"我的供给与需求 · 试填","intro":"选择方向与合作方式，具体事项用一句话补充。请勿填写商业秘密或他人个人信息；当前不提交、不保存。","defaults":{"visibility":"仅秘书处可见"},"steps":[["基本信息",[["name","姓名","text"],["org","企业 / 机构名称","text"],["job","职务 / 角色（选填）","text",null,{"required":false}],["contact","联系手机 / 微信","text"]]],["供需与参与",[["direction","相关方向（最多3项）","checks",["生物医药","新能源","低空经济","金融投资","AI与数字化","科技成果转化","跨境电商出海","其他"],{"max":3}],["offer","我能提供（选填，最多3项）","checks",["行业经验","企业参访","技术方案","AI应用","科研成果转化","人才培养","市场渠道","投融资对接","品牌传播","其他"],{"required":false,"max":3}],["need","我希望获得（选填，最多3项）","checks",["行业经验","企业参访","技术方案","AI应用","科研成果转化","人才培养","市场渠道","投融资对接","品牌传播","其他","暂时没有"],{"required":false,"max":3}],["participation","希望参与的方式（选填，最多3项）","checks",["企业参访","主题分享","需求对接","案例研究","项目协作","人才培养"],{"required":false,"max":3}],["visibility","信息公开范围","select",["仅秘书处可见","专委会成员可见","本人确认后可在官网公开"]],["note","具体事项说明（选填）","textarea",null,{"required":false}]]]]}};

const enc=new TextEncoder();
const bytes=x=>typeof x==='string'?enc.encode(x):x;
const hex=b=>Array.from(new Uint8Array(b),n=>n.toString(16).padStart(2,'0')).join('');
async function sha(value){return hex(await crypto.subtle.digest('SHA-256',bytes(value)));}
async function sign(key,value){const k=await crypto.subtle.importKey('raw',bytes(key),{name:'HMAC',hash:'SHA-256'},false,['sign']);return new Uint8Array(await crypto.subtle.sign('HMAC',k,bytes(value)));}
async function mac(key,value){return hex(await sign(key,value));}
function smsReady(env){return ['SMS_SECRET_ID','SMS_SECRET_KEY','SMS_APP_ID','SMS_SIGN_NAME','SMS_TEMPLATE_ID'].every(k=>!!env[k]);}
function mailReady(env){return !!(env.RESEND_API_KEY&&env.MAIL_FROM&&env.NOTIFY_TO);}
async function sendSms(env,phone,code){
 if(!smsReady(env))throw new Error('sms_not_configured');
 const host='sms.tencentcloudapi.com',timestamp=Math.floor(Date.now()/1000),date=new Date(timestamp*1000).toISOString().slice(0,10);
 const payload=JSON.stringify({PhoneNumberSet:['+86'+phone],SmsSdkAppId:env.SMS_APP_ID,SignName:env.SMS_SIGN_NAME,TemplateId:env.SMS_TEMPLATE_ID,TemplateParamSet:[code]});
 const headers='content-type:application/json; charset=utf-8\nhost:'+host+'\n';
 const canonical='POST\n/\n\n'+headers+'\ncontent-type;host\n'+await sha(payload);
 const scope=date+'/sms/tc3_request';
 const stringToSign='TC3-HMAC-SHA256\n'+timestamp+'\n'+scope+'\n'+await sha(canonical);
 const secretDate=await sign('TC3'+env.SMS_SECRET_KEY,date),secretService=await sign(secretDate,'sms'),secretSigning=await sign(secretService,'tc3_request');
 const signature=hex(await sign(secretSigning,stringToSign));
 const response=await fetch('https://'+host,{method:'POST',signal:AbortSignal.timeout(12000),headers:{'Content-Type':'application/json; charset=utf-8','X-TC-Action':'SendSms','X-TC-Version':'2021-01-11','X-TC-Region':env.SMS_REGION||'ap-guangzhou','X-TC-Timestamp':String(timestamp),'Authorization':`TC3-HMAC-SHA256 Credential=${env.SMS_SECRET_ID}/${scope}, SignedHeaders=content-type;host, Signature=${signature}`},body:payload});
 const data=await response.json();
 if(!response.ok||data.Response?.Error||data.Response?.SendStatusSet?.[0]?.Code!=='Ok')throw new Error('sms_delivery_failed');
}
async function sendMail(env,job){
 if(!mailReady(env))throw new Error('mail_not_configured');
 const response=await fetch('https://api.resend.com/emails',{method:'POST',signal:AbortSignal.timeout(12000),headers:{Authorization:'Bearer '+env.RESEND_API_KEY,'Content-Type':'application/json','Idempotency-Key':job.id},body:JSON.stringify({from:env.MAIL_FROM,to:[env.NOTIFY_TO],subject:'【专委会新申请】'+job.kind+'｜'+job.name,text:`收到一份${job.kind}申请。\n申请编号：${job.applicationId}\n姓名：${job.name}\n单位：${job.org}\n\n请登录秘书处后台查看并处理：${env.SITE_ORIGIN}/committee-admin.html\n\n完整联系方式和履历仅在身份验证后的后台展示。`})});
 const data=await response.json();if(!response.ok||!data.id)throw new Error('mail_delivery_failed');return data.id;
}
async function verifyHuman(env,token,action){
 if(typeof token!=='string'||!token||token.length>2048)return false;
 const response=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',signal:AbortSignal.timeout(10000),headers:{'Content-Type':'application/json'},body:JSON.stringify({secret:env.TURNSTILE_SECRET,response:token})});
 const data=await response.json();return !!(response.ok&&data.success&&data.hostname===new URL(env.SITE_ORIGIN).hostname&&data.action===action);
}

const now=()=>Math.floor(Date.now()/1000),uuid=()=>crypto.randomUUID();
const error=(status,message)=>{throw Object.assign(new Error(message),{status});};
const json=(data,status=200,extra={})=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer',...extra}});
const stmt=(env,sql,...args)=>env.DB.prepare(sql).bind(...args);
const keyReady=e=>typeof e.AUTH_PEPPER==='string'&&e.AUTH_PEPPER.length>=32;
const baseReady=e=>!!(e.DB&&keyReady(e)&&e.SITE_ORIGIN&&e.TURNSTILE_SECRET&&e.TURNSTILE_SITE_KEY);
const applicationsReady=e=>!!(e.DB&&e.SITE_ORIGIN&&e.TURNSTILE_SECRET&&e.TURNSTILE_SITE_KEY);
const features=e=>({applications:applicationsReady(e)&&e.APPLICATIONS_ENABLED==='true',profiles:baseReady(e)&&smsReady(e)&&e.PROFILES_ENABLED==='true'});
function string(v,label,max=240){if(typeof v!=='string'||v.length>max||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(v))error(400,label+'格式不正确');return v.trim();}
function phone(v){const p=string(v,'手机号码',20).replace(/^\+86/,'').replace(/[ -]/g,'');if(!/^1[3-9]\d{9}$/.test(p))error(400,'请填写有效的手机号码');return p;}
async function phoneHash(env,p){return mac(env.AUTH_PEPPER,'phone:'+p);}
function sessionCookie(token,max=1200){return `__Host-ln_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${max}`;}
async function body(request){if(!request.headers.get('Content-Type')?.startsWith('application/json'))error(415,'仅接受JSON提交');let raw='';const reader=request.body?.getReader();if(!reader)error(400,'缺少提交内容');const decoder=new TextDecoder();for(;;){const {done,value}=await reader.read();if(done)break;raw+=decoder.decode(value,{stream:true});if(raw.length>20000){await reader.cancel();error(413,'提交内容过长');}}try{return JSON.parse(raw);}catch{error(400,'提交内容格式不正确');}}
async function rate(env,key,limit,seconds){const t=now(),bucket=await mac(env.AUTH_PEPPER||env.SITE_ORIGIN,'limit:'+key+':'+Math.floor(t/seconds));const result=await stmt(env,'INSERT INTO limits(bucket,count,expires_at) VALUES(?,1,?) ON CONFLICT(bucket) DO UPDATE SET count=count+1 RETURNING count',bucket,t+seconds*2).first();if(result.count>limit)error(429,'操作较频繁，请稍后再试');}
async function session(request,env,admin=false){const token=request.headers.get('Cookie')?.match(/(?:^|;\s*)__Host-ln_session=([a-f0-9]{64})(?:;|$)/)?.[1];if(!token)error(401,'请先验证手机号');const row=await stmt(env,'SELECT s.*,m.name,m.is_admin,m.active FROM sessions s JOIN members m ON m.id=s.member_id WHERE s.token_hash=? AND s.expires_at>?',await sha(token),now()).first();if(!row||!row.active)error(401,'验证已过期，请重新验证');if(admin&&(!row.is_admin||row.purpose!=='admin'))error(403,'无后台管理权限');return row;}
function randomToken(){return Array.from(crypto.getRandomValues(new Uint8Array(32)),n=>n.toString(16).padStart(2,'0')).join('');}
function code(){const values=new Uint32Array(1),cap=4294000000;do{crypto.getRandomValues(values);}while(values[0]>=cap);return String(values[0]%1000000).padStart(6,'0');}
function validate(kind,values){
 const d=forms[kind];if(!d||!values||typeof values!=='object'||Array.isArray(values))error(400,'申请类别或内容不正确');const clean={};
 for(const f of d.steps.flatMap(s=>s[1])){const [id,label,type,options,r={}]=f;const optional=r.required===false||(r.conditional&&!String(values.mode||'').startsWith('推荐'));let value=values[id];
  if(type==='checks'){if(value===undefined)value=[];if(!Array.isArray(value)||value.length>(r.max||options.length)||new Set(value).size!==value.length||value.some(v=>!options.includes(v)))error(400,label+'选项不正确');if(!optional&&!value.length)error(400,'请填写'+label);clean[id]=value;}
  else{if(value===undefined)value='';value=string(value,label,type==='textarea'?(id==='bio'?300:600):240);if(!optional&&!value)error(400,'请填写'+label);if(type==='select'&&value&&!options.includes(value))error(400,label+'选项不正确');clean[id]=value;}
 }
 if(clean.contact)clean.contact=phone(clean.contact);
 if(kind==='resource'&&!clean.offer.length&&!clean.need.some(x=>x!=='暂时没有'))error(400,'请填写至少一项供给或需求');
 return clean;
}
function publicProfile(v){const keys=['org','job','cohort','industry','direction','offer','need','participation','bio'];return Object.fromEntries(keys.filter(k=>v[k]!==undefined).map(k=>[k,v[k]]));}
async function audit(env,actor,action,target){await stmt(env,'INSERT INTO audit VALUES(?,?,?,?,?)',uuid(),actor,action,target,now()).run();}
async function flushNotifications(env){
 const jobs=await stmt(env,"SELECT id FROM notifications WHERE state!='sent' AND attempts<5 AND lease_until<? ORDER BY created_at LIMIT 10",now()).all();
 for(const item of jobs.results){const t=now();const job=await stmt(env,"UPDATE notifications SET state='processing',attempts=attempts+1,lease_until=? WHERE id=? AND state!='sent' AND attempts<5 AND lease_until<? RETURNING *",t+60,item.id,t).first();if(!job)continue;
  try{const app=await stmt(env,'SELECT * FROM applications WHERE id=?',job.application_id).first();const v=JSON.parse(app.payload_json);const providerId=await sendMail(env,{id:job.id,kind:app.kind==='secretary'?'秘书处兼职秘书':app.kind==='member'?'委员':'供需信息',name:v.name,org:v.org,applicationId:app.id});await stmt(env,"UPDATE notifications SET state='sent',provider_id=?,last_error=NULL WHERE id=?",providerId,job.id).run();}
  catch{await stmt(env,"UPDATE notifications SET state='failed',last_error='mail_delivery_failed' WHERE id=?",job.id).run();}
 }
}
async function api(request,env,ctx={waitUntil(){}}){
 const url=new URL(request.url),path=url.pathname.replace(/\/$/,'');
 try{
  if(path==='/api/committee/status'&&request.method==='GET')return json({...features(env),siteKey:env.TURNSTILE_SITE_KEY||'',notice:'正式功能仅在后台配置并启用后可用'});
  if(path==='/api/committee/public-members'&&request.method==='GET'){
   if(!features(env).profiles)return json({members:[]});const rows=await stmt(env,'SELECT id,name,role,public_json,version FROM members WHERE active=1 AND public_json IS NOT NULL').all();return json({members:rows.results.map(r=>({id:r.id,name:r.name,role:r.role,...publicProfile(JSON.parse(r.public_json)),version:r.version}))});
  }
  if(!applicationsReady(env))error(503,'正式后台尚未启用，请稍后再试');
  const mutating=!['GET','HEAD'].includes(request.method);
  if(mutating&&request.headers.get('Origin')!==env.SITE_ORIGIN)error(403,'请求来源不正确');
  if(path==='/api/committee/auth/request'&&request.method==='POST'){
   if(!features(env).profiles)error(503,'手机验证服务尚未启用');const v=await body(request);const name=string(v.name,'姓名',40),p=phone(v.phone),purpose=v.purpose==='admin'?'admin':'profile';
   await rate(env,'sms-ip:'+(request.headers.get('CF-Connecting-IP')||'unknown'),12,3600);await rate(env,'sms-phone:'+p,1,60);await rate(env,'sms-daily:'+p,8,86400);
   if(!await verifyHuman(env,v.humanToken,'committee_auth'))error(400,'请完成人机验证后重试');
   const member=await stmt(env,'SELECT id,is_admin FROM members WHERE name=? AND phone_hash=? AND active=1',name,await phoneHash(env,p)).first();const eligible=member&&(purpose!=='admin'||member.is_admin);const id=uuid(),otp=code();
   await stmt(env,'INSERT INTO challenges(id,member_id,purpose,code_hash,expires_at) VALUES(?,?,?,?,?)',id,eligible?member.id:null,purpose,await mac(env.AUTH_PEPPER,'otp:'+id+':'+otp),now()+300).run();
   if(eligible){try{await sendSms(env,p,otp);}catch{await stmt(env,'UPDATE challenges SET consumed=1 WHERE id=?',id).run();error(503,'验证码服务暂不可用，请稍后重试');}}
   return json({challengeId:id,message:'如姓名与预留手机号匹配，验证码将发送至该手机。若未收到，请联系秘书处核对预留资料。',expiresIn:300});
  }
  if(path==='/api/committee/auth/verify'&&request.method==='POST'){
   if(!features(env).profiles)error(503,'手机验证服务尚未启用');const v=await body(request);const id=string(v.challengeId,'验证请求',50),otp=string(v.code,'验证码',6);if(!/^\d{6}$/.test(otp))error(400,'请输入6位验证码');
   await rate(env,'verify:'+(request.headers.get('CF-Connecting-IP')||'unknown'),40,3600);
   const row=await stmt(env,'UPDATE challenges SET attempts=attempts+1 WHERE id=? AND expires_at>? AND consumed=0 AND attempts<5 RETURNING *',id,now()).first();
   if(!row||!row.member_id||row.code_hash!==await mac(env.AUTH_PEPPER,'otp:'+id+':'+otp))error(401,'验证码不正确、已过期或尝试次数已用尽');
   const consumed=await stmt(env,'UPDATE challenges SET consumed=1 WHERE id=? AND consumed=0 RETURNING id',id).first();if(!consumed)error(401,'验证码已使用，请重新获取');
   const token=randomToken();await stmt(env,'INSERT INTO sessions VALUES(?,?,?,?)',await sha(token),row.member_id,row.purpose,now()+1200).run();await audit(env,row.member_id,'login',row.member_id);return json({ok:true,expiresIn:1200},200,{'Set-Cookie':sessionCookie(token)});
  }
  if(path==='/api/committee/logout'&&request.method==='POST'){const s=await session(request,env);await stmt(env,'DELETE FROM sessions WHERE token_hash=?',s.token_hash).run();return json({ok:true},200,{'Set-Cookie':sessionCookie('',0)});}
  if(path==='/api/committee/me'&&request.method==='GET'){const s=await session(request,env);const m=await stmt(env,'SELECT id,name,role,profile_json,version FROM members WHERE id=?',s.member_id).first();return json({id:m.id,name:m.name,role:m.role,profile:JSON.parse(m.profile_json),version:m.version,isAdmin:!!s.is_admin&&s.purpose==='admin'});}
  if(path==='/api/committee/me/profile'&&request.method==='PUT'){
   if(!features(env).profiles)error(503,'资料维护尚未启用');const s=await session(request,env);const v=await body(request);if(v.consent!==true)error(400,'请确认资料使用说明');const values=validate('profile',{...v.values,name:s.name});if(values.visibility==='本人确认后可在官网公开'&&v.publicConsent!==true)error(400,'请确认公开范围');
   const publicJson=values.visibility==='本人确认后可在官网公开'?JSON.stringify(publicProfile(values)):null;
   const saved=await stmt(env,'UPDATE members SET profile_json=?,public_json=?,version=version+1,updated_at=? WHERE id=? AND version=? AND active=1 RETURNING version',JSON.stringify(values),publicJson,now(),s.member_id,Number(v.version)).first();if(!saved)error(409,'资料已有更新，请重新载入后修改');await audit(env,s.member_id,'update_profile',s.member_id);return json({ok:true,version:saved.version});
  }
  if(path==='/api/committee/applications'&&request.method==='POST'){
   if(!features(env).applications)error(503,'正式申请尚未启用');const v=await body(request);if(v.consent!==true)error(400,'请确认资料使用说明');if(v.website)error(400,'提交未通过验证');if(!['member','secretary','resource'].includes(v.kind))error(400,'申请类别不正确');const values=validate(v.kind,v.values),requestKey=string(v.requestKey,'提交编号',50);if(!/^[0-9a-f-]{36}$/.test(requestKey))error(400,'提交编号不正确');
   const payloadHash=await sha(JSON.stringify([v.kind,values]));const existing=await stmt(env,'SELECT id,payload_hash FROM applications WHERE request_key=?',requestKey).first();if(existing){if(existing.payload_hash!==payloadHash)error(409,'提交编号已用于其他内容');return json({ok:true,id:existing.id,duplicate:true});}
   await rate(env,'apply:'+(request.headers.get('CF-Connecting-IP')||'unknown'),10,3600);if(!await verifyHuman(env,v.humanToken,'committee_apply'))error(400,'请完成人机验证后重试');
   const id='LN-'+uuid(),t=now();try{await env.DB.batch([stmt(env,'INSERT INTO applications(id,request_key,payload_hash,kind,payload_json,created_at,updated_at) VALUES(?,?,?,?,?,?,?)',id,requestKey,payloadHash,v.kind,JSON.stringify(values),t,t),stmt(env,'INSERT INTO notifications(id,application_id,created_at) VALUES(?,?,?)','notice-'+id,id,t)]);}catch(e){const row=await stmt(env,'SELECT id,payload_hash FROM applications WHERE request_key=?',requestKey).first();if(row&&row.payload_hash===payloadHash)return json({ok:true,id:row.id,duplicate:true});throw e;}
   if(mailReady(env))ctx.waitUntil(flushNotifications(env));return json({ok:true,id,message:'申请已保存，待秘书处审核'},201);
  }
  if(path==='/api/committee/admin/applications'&&request.method==='GET'){await session(request,env,true);const offset=Math.max(0,Math.min(100000,Number(url.searchParams.get('offset'))||0));const rows=await stmt(env,'SELECT a.*,n.state AS notification_state,n.attempts AS notification_attempts FROM applications a LEFT JOIN notifications n ON n.application_id=a.id ORDER BY a.created_at DESC LIMIT 50 OFFSET ?',offset).all();return json({applications:rows.results.map(r=>({...r,payload:JSON.parse(r.payload_json),payload_json:undefined,payload_hash:undefined,request_key:undefined})),nextOffset:offset+50});}
  if(path==='/api/committee/admin/status'&&request.method==='PUT'){const s=await session(request,env,true),v=await body(request);if(!['待查看','待沟通','待补充','已通过','暂缓'].includes(v.status))error(400,'审核状态不正确');const saved=await stmt(env,'UPDATE applications SET status=?,updated_at=?,version=version+1 WHERE id=? AND version=? RETURNING id',v.status,now(),string(v.id,'申请编号',60),Number(v.version)).first();if(!saved)error(409,'申请已被更新，请刷新');await audit(env,s.member_id,'application_status',v.id);return json({ok:true,message:'审核状态已保存；职务任命仍须履行相应程序'});}
  if(path==='/api/committee/admin/retry-notifications'&&request.method==='POST'){const s=await session(request,env,true);await rate(env,'retry:'+s.member_id,1,60);await stmt(env,"UPDATE notifications SET attempts=0,lease_until=0 WHERE state='failed'").run();await flushNotifications(env);return json({ok:true});}
  if(path==='/api/committee/admin/maintenance'&&request.method==='POST'){await session(request,env,true);const t=now();await env.DB.batch([stmt(env,'DELETE FROM challenges WHERE expires_at<?',t-86400),stmt(env,'DELETE FROM sessions WHERE expires_at<?',t),stmt(env,'DELETE FROM limits WHERE expires_at<?',t)]);return json({ok:true});}
  error(404,'接口不存在');
 }catch(e){return json({error:e.status?e.message:'服务器暂时无法处理，请稍后重试'},e.status||500);}
}
export default {async fetch(request,env,ctx){if(new URL(request.url).pathname.startsWith('/api/committee/'))return api(request,env,ctx);return env.ASSETS.fetch(request);}};
