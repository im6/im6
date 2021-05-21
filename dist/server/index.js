(()=>{"use strict";const e=require("express"),t=require("react/jsx-runtime"),i=require("react-dom/server"),s=require("mysql"),{SQL_HOST:n,SQL_USERNAME:a,SQL_PASSWORD:d}=process.env,o=e=>new Promise(((t,i)=>{const o=(0,s.createConnection)({host:n,user:a,password:d,database:"baby_log",timezone:"-04:00"});o.query(e,((e,s)=>{e?i(e):t(s)})),o.end()})),c=({children:e,title:i})=>(0,t.jsxs)("html",Object.assign({lang:"en"},{children:[(0,t.jsxs)("head",{children:[(0,t.jsx)("title",{children:i},void 0),(0,t.jsx)("meta",{charSet:"utf-8"},void 0),(0,t.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"},void 0),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},void 0)]},void 0),(0,t.jsxs)("body",{children:[e,(0,t.jsx)("script",{src:"/static/app.js",type:"text/javascript"},void 0)]},void 0)]}),void 0),r=({allData:e,selected:i})=>(0,t.jsx)("div",Object.assign({className:"activity-chkbox-group"},{children:e.map((e=>(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"checkbox",id:`nav-chkbox-option-${e.id}`,name:"activity",value:e.id,defaultChecked:i.includes(e.id)},void 0),(0,t.jsx)("label",Object.assign({className:`badge badge-color-${e.id}`,htmlFor:`nav-chkbox-option-${e.id}`},{children:e.name}),void 0)]},e.id)))}),void 0),l=({allData:e,selected:i})=>(0,t.jsxs)("form",Object.assign({className:"nav-form",action:"/"},{children:[(0,t.jsx)(r,{allData:e,selected:i},void 0),(0,t.jsxs)("div",{children:["      ",(0,t.jsx)("input",{type:"submit",value:"Filter"},void 0)]},void 0),(0,t.jsx)("br",{},void 0)]}),void 0),v=({data:e,activityDef:i})=>{const s=i.reduce(((e,t)=>(e[t.id]=t.name,e)),{});return(0,t.jsxs)("table",Object.assign({className:"activity-table"},{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Time"},void 0),(0,t.jsx)("th",{children:"Event"},void 0)]},void 0),e.map((e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.time},void 0),(0,t.jsx)("td",{children:e.events.map((e=>(0,t.jsx)("span",Object.assign({className:`badge badge-color-${e}`},{children:s[e]}),e)))},void 0)]},e.time)))]}),void 0)},u=({activityDefinition:e,selectedActivity:i,eventList:s})=>(0,t.jsxs)(c,Object.assign({title:"Baby Log"},{children:[(0,t.jsx)("div",{children:(0,t.jsx)("a",Object.assign({href:"/create"},{children:(0,t.jsx)("button",Object.assign({type:"button",className:"create-btn"},{children:"➕ Create Event"}),void 0)}),void 0)},void 0),(0,t.jsxs)("div",Object.assign({className:"activity-layout"},{children:[(0,t.jsx)(l,{allData:e,selected:i},void 0),(0,t.jsx)(v,{data:s,activityDef:e},void 0)]}),void 0)]}),void 0),m=()=>(0,t.jsx)("a",Object.assign({href:"/"},{children:"Back to logs"}),void 0),j=({activityDefinition:e,selectedActivity:i,timeOptions:s})=>(0,t.jsxs)(c,Object.assign({title:"Baby Log"},{children:[(0,t.jsx)(m,{},void 0),(0,t.jsxs)("form",Object.assign({action:"/create-event",method:"post"},{children:[(0,t.jsx)("label",Object.assign({htmlFor:"event-time"},{children:"Time:"}),void 0),s.map((e=>{const i=`time-options-${e.id}`;return(0,t.jsxs)("div",{children:[(0,t.jsx)("input",{type:"radio",id:i,name:"time",value:e.id,defaultChecked:e.isNow},void 0),(0,t.jsx)("label",Object.assign({htmlFor:i},{children:e.name}),void 0)]},i)})),(0,t.jsx)("br",{},void 0),(0,t.jsx)("label",Object.assign({htmlFor:"selected-activity"},{children:"Activity:"}),void 0),(0,t.jsx)(r,{selected:i,allData:e},void 0),(0,t.jsx)("br",{},void 0),(0,t.jsx)("input",{type:"submit",value:"Submit Event"},void 0)]}),void 0)]}),void 0),h=({error:e})=>{const i=e?"failed":"succeed";return(0,t.jsxs)(c,Object.assign({title:i},{children:[(0,t.jsx)(m,{},void 0),(0,t.jsxs)("h4",{children:[(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:e?"&#10060;":"&#9989;"}},void 0),"  Creating event ",i,"."]},void 0)]}),void 0)},x=require("date-fns"),y=(e,t)=>{const i=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,s=e.getMinutes(),n=s<10?`0${s}`:s;return{id:`${i} ${e.getHours()}:${n}:00`,name:`${e.getHours()}:${n}${t?" (now)":""}`,isNow:t}};var p=function(e,t,i,s){return new(i||(i=Promise))((function(n,a){function d(e){try{c(s.next(e))}catch(e){a(e)}}function o(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(d,o)}c((s=s.apply(e,t||[])).next())}))};const g={"app.js":"./dist/client/index.js"},b=e();b.use(e.urlencoded({extended:!0})),b.get("/static/:name",((e,t)=>{t.sendFile(g[e.params.name],{root:process.cwd()})})),b.get("/create",((e,s)=>p(void 0,void 0,void 0,(function*(){const e=(e=>{const t=e.getFullYear(),i=e.getMonth(),s=e.getDate(),n=e.getHours(),a=e.getMinutes(),d=10*Math.floor(a/10),o=d===a,c=(0,x.add)(new Date(t,i,s,n,d,0),{minutes:-30}),r=(0,x.add)(new Date(t,i,s,n,d,0),{minutes:-20}),l=(0,x.add)(new Date(t,i,s,n,d,0),{minutes:-10}),v=new Date(t,i,s,n,d,0),u=new Date(t,i,s,n,a,0),m=(0,x.add)(new Date(t,i,s,n,d,0),{minutes:10}),j=(0,x.add)(new Date(t,i,s,n,d,0),{minutes:20});let h=[y(c,!1),y(r,!1),y(l,!1),y(v,o),y(u,!0),y(m,!1),y(j,!1)];return o&&(h=h.filter(((e,t)=>4!==t))),h})(new Date),n=yield o("select * from activity_def"),a=(0,t.jsx)(j,{activityDefinition:n,selectedActivity:[],timeOptions:e},void 0),d=(0,i.renderToStaticMarkup)(a);s.status(200),s.send(`<!DOCTYPE html>${d}`)})))),b.post("/create-event",((e,s)=>p(void 0,void 0,void 0,(function*(){const{time:n,activity:a}=e.body;if(Array.isArray(a))a.forEach((e=>p(void 0,void 0,void 0,(function*(){const t=`INSERT INTO logs (event_time, activity_id, child_id) VALUES ('${n}', '${e}', 1)`;yield o(t)}))));else{if(!a){const e=(0,t.jsx)(h,{error:!0},void 0),n=(0,i.renderToStaticMarkup)(e);return s.status(500),void s.send(`<!DOCTYPE html>${n}`)}{const e=`INSERT INTO logs (event_time, activity_id, child_id) VALUES ('${n}', '${a}', 1)`;yield o(e)}}const d=(0,t.jsx)(h,{error:!1},void 0),c=(0,i.renderToStaticMarkup)(d);s.status(200),s.send(`<!DOCTYPE html>${c}`)})))),b.get("/",((e,s)=>p(void 0,void 0,void 0,(function*(){const n=yield o("select * from activity_def");let a=null;const{activity:d}=e.query;a=Array.isArray(d)?d.map((e=>parseInt(e))):d?[parseInt(d.toString(),10)]:n.map((e=>e.id));const c=yield o("SELECT * FROM logs ORDER BY event_time DESC"),r=new Set,l=c.reduce(((e,t)=>{const i=(s=t.event_time,(0,x.format)(s,"yyyy-MM-dd HH:mm"));var s;return r.add(i),i in e?e[i].push(t.activity_id):e[i]=[t.activity_id],e}),{}),v=Array.from(r).map((e=>({time:e,events:l[e]}))),m=(0,t.jsx)(u,{eventList:v,activityDefinition:n,selectedActivity:a},void 0),j=(0,i.renderToStaticMarkup)(m);s.status(200),s.send(`<!DOCTYPE html>${j}`)})))),b.listen(3e3,(()=>{console.log("app is running on: http://localhost:3000")}))})();