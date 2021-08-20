(this.webpackJsonpcrud_project=this.webpackJsonpcrud_project||[]).push([[0],{42:function(t,e,n){},56:function(t,e,n){t.exports={loadingIcon:"Preloader_loadingIcon__BbD47",rotateOut:"Preloader_rotateOut__3PtdR"}},92:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(9),s=n.n(a),i=(n(42),n(127)),o=n(25),u=n(129),l=n(126),d=n(128),p=Object(r.createContext)(),j=n(6);function h(t){var e=t.task,n=Object(r.useContext)(p),c=n.checkTask,a=n.deleteTask,s=n.editTask,i=Object(r.useState)(!1),h=Object(o.a)(i,2),b=h[0],x=h[1],f=Object(r.useState)(e.text),O=Object(o.a)(f,2),m=O[0],v=O[1];return Object(j.jsxs)("li",{className:"task",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:Object(j.jsx)(u.a,{checked:e.done,onChange:function(){return c(e)},inputProps:{"aria-label":"primary checkbox"}})}),b?Object(j.jsx)("span",{children:Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),m.trim()&&s(m,e.id),x(!1)},className:"textEditForm",children:Object(j.jsx)(d.a,{id:"textEditForm",defaultValue:e.text,onChange:function(t){return v(t.target.value)},autoFocus:!0,onBlur:function(){return x(!1)}})})}):Object(j.jsxs)("span",{onClick:function(){return x(!0)},children:[" ",e.text," "]})]}),Object(j.jsx)(l.a,{color:"secondary",className:"deleteBtn",style:{fontSize:"2rem",padding:0},onClick:function(){return a(e.id)},children:"\xd7"})]})}var b=n(56),x=n.n(b),f=n.p+"static/media/loading.0c0f9572.svg",O=function(t){return t.isFetching?Object(j.jsx)("div",{className:x.a.loadingIcon,children:Object(j.jsx)("img",{src:f,style:{display:"flex",justifyContent:"center",width:"100px",height:"100px"},alt:"load icon"})}):null};function m(){var t=Object(r.useContext)(p).tasks;return Object(j.jsx)(j.Fragment,{children:t.length?Object(j.jsx)("ul",{className:"taskList",children:t.map((function(t){return Object(j.jsx)(h,{task:t},t.id)}))}):Object(j.jsx)(O,{})})}var v=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(r.useContext)(p).addTask;function s(t){t.preventDefault(),n.trim()&&(a(n),c(""))}return Object(j.jsxs)("form",{style:{width:"100%"},onSubmit:s,className:"inputForm",children:[Object(j.jsx)(d.a,{id:"outlined-basic",variant:"outlined",label:"Task",className:"inputText",value:n,onChange:function(t){return c(t.target.value)}}),Object(j.jsx)(l.a,{variant:"outlined",className:"addBtn",style:{color:"#00c600",border:"2px solid #00c600",marginLeft:"10px"},type:"submit",onClick:s,children:"ADD"})]})},k=n(14),g=n.n(k),w=n(28),y=n(29),C="http://localhost:3001/tasks";function T(t){var e=t.children,n=Object(r.useState)([]),c=Object(o.a)(n,2),a=c[0],s=c[1];function i(){return u.apply(this,arguments)}function u(){return(u=Object(w.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get(C);case 3:e=t.sent,s(e.data),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(){return(l=Object(w.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.patch("".concat(C,"/").concat(e.id),{done:!e.done});case 3:i(),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(w.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.delete("".concat(C,"/").concat(e));case 3:i(),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function h(){return(h=Object(w.a)(g.a.mark((function t(e){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Date,r={id:n.getTime(),text:e,done:!1},t.prev=2,t.next=5,y.post(C,r);case 5:i(),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(2),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}function b(){return(b=Object(w.a)(g.a.mark((function t(e,n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.patch("".concat(C,"/").concat(n),{text:e});case 3:i(),t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){i()}),[]),Object(j.jsx)(p.Provider,{value:{tasks:a,checkTask:function(t){return l.apply(this,arguments)},deleteTask:function(t){return d.apply(this,arguments)},addTask:function(t){return h.apply(this,arguments)},editTask:function(t,e){return b.apply(this,arguments)}},children:e})}var F=function(t){return Object(j.jsx)(T,{children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)(i.a,{className:"taskListWrapper",children:[Object(j.jsx)(v,{}),Object(j.jsx)(m,{})]})})})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),N()}},[[92,1,2]]]);
//# sourceMappingURL=main.0a0e6637.chunk.js.map