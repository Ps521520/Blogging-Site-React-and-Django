(this.webpackJsonpblogsite=this.webpackJsonpblogsite||[]).push([[0],{37:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(30),l=c.n(r),i=c(4),o=(c(37),c(3));var j=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-inverse",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsxs)("div",{className:"navbar-header",children:[Object(n.jsxs)("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar",children:[Object(n.jsx)("span",{class:"icon-bar"}),Object(n.jsx)("span",{class:"icon-bar"}),Object(n.jsx)("span",{class:"icon-bar"})]}),Object(n.jsx)(o.b,{className:"navbar-brand",to:"/",children:"FreshBlogs"})]}),Object(n.jsxs)("div",{class:"collapse navbar-collapse",id:"myNavbar",children:[Object(n.jsxs)("ul",{className:"nav navbar-nav",children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category",children:"Cateogry"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/aboutus",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/contactus",children:"Contact Us"})})]}),Object(n.jsxs)("ul",{className:"nav navbar-nav navbar-right",id:"logreg",children:[Object(n.jsx)("li",{children:Object(n.jsxs)(o.b,{to:"/register",children:[Object(n.jsx)("span",{className:"glyphicon glyphicon-user"})," Sign Up"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(o.b,{to:"/login",children:[Object(n.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Login"]})})]})]})]})})})},b=c(2),d=c.n(b),u=c(7),h=c(5),x=c.n(h),O=function(){var e,t=Object(a.useState)([]),c=Object(i.a)(t,2),s=c[0],r=c[1],l=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("http://localhost:8000/api/blog/");case 3:return t=e.sent,e.next=6,t.data;case 6:c=e.sent,console.log(c),r(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:(e=s,void 0===e?null:e.map((function(e){return Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("label",{className:"lbl",children:["Author Name:",e.author]}),Object(n.jsxs)("label",{className:"lbl",children:["Date and Time of Publish:",e.date]}),Object(n.jsx)("h5",{children:e.text})]},e.id)})))})})]})},m=Object(a.createContext)(null),p=function(){var e=Object(a.useContext)(m),t=e.log,c=e.setLog;return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-inverse",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsxs)("div",{className:"navbar-header",children:[Object(n.jsxs)("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar",children:[Object(n.jsx)("span",{class:"icon-bar"}),Object(n.jsx)("span",{class:"icon-bar"}),Object(n.jsx)("span",{class:"icon-bar"})]}),Object(n.jsx)(o.b,{className:"navbar-brand",to:"/admin",children:"FreshBlogs"})]}),Object(n.jsxs)("div",{class:"collapse navbar-collapse",id:"myNavbar",children:[Object(n.jsxs)("ul",{className:"nav navbar-nav",children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/admin",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/category",children:"Cateogry"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/aboutus",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/contactus",children:"Contact Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/createblog",children:"Create Blog"})})]}),Object(n.jsxs)("ul",{className:"nav navbar-nav navbar-right",id:"logreg",children:[Object(n.jsx)("li",{children:Object(n.jsxs)(o.b,{to:"/logout",onClick:function(){c({id:"",firstname:"",lastname:"",email:"",password:"",mobileno:""})},children:[Object(n.jsx)("span",{className:"glyphicon glyphicon-log-out"})," Logout"]})}),Object(n.jsxs)("li",{children:[Object(n.jsxs)(o.b,{to:"/profile",children:[Object(n.jsx)("span",{className:"glyphicon glyphicon-log-in"}),"Profile ",t.firstname," "]})," "]})]})]})]})})})},f=c(6),v=function(){return Object(n.jsx)("div",{className:"item",children:Object(n.jsx)("h2",{children:"No Items Found! From Your Search.......Search Again"})})},g=function(){var e,t=Object(a.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)([]),b=Object(i.a)(l,2),h=b[0],O=b[1],g=Object(a.useContext)(m),N=g.log,y=(g.setLog,Object(f.g)(),Object(a.useState)([])),C=Object(i.a)(y,2),w=C[0],S=C[1],k="http://localhost:8000/api/blog/",F=function(e){e.preventDefault();var t=w.filter((function(e){if(e.title.includes(s))return e}));console.log(t),console.log(N),O(t)},E=function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("".concat(k).concat(t,"/"));case 3:c=e.sent,console.log(c),console.log("deleted"),D(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c,n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==N.id){e.next=16;break}return e.prev=1,e.next=4,x.a.get(k);case 4:return t=e.sent,e.next=7,t.data;case 7:c=e.sent,S(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:e.next=32;break;case 16:return e.prev=16,e.next=19,x.a.get(k);case 19:return n=e.sent,e.next=22,n.data;case 22:a=e.sent,s=a.filter((function(e){if(e.writer===parseInt(N.id))return e})),console.log(s),console.log(N),S(s),e.next=32;break;case 29:e.prev=29,e.t1=e.catch(16),console.log(e.t1);case 32:case"end":return e.stop()}}),e,null,[[1,11],[16,29]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){D()}),[]),""===N.id?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("form",{onSubmit:F,children:Object(n.jsxs)("div",{class:"input-group",children:[Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Search",name:"search",onChange:function(e){r(e.target.value)}}),Object(n.jsx)("div",{class:"input-group-btn",children:Object(n.jsx)("button",{class:"btn btn-default",type:"submit",children:Object(n.jsx)("i",{class:"glyphicon glyphicon-search"})})})]})}),Object(n.jsx)("div",{className:"content",children:(e=h,void 0===e?null:e.length<=0?Object(n.jsx)(v,{}):e.map((function(e){return Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("label",{className:"lbl",children:["Author Name:",e.author]}),Object(n.jsxs)("label",{className:"lbl",children:["Date and Time of Publish:",e.date]}),Object(n.jsx)("h5",{children:e.text})]},e.id)})))})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("form",{onSubmit:F,children:Object(n.jsxs)("div",{class:"input-group",children:[Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Search",name:"search",onChange:function(e){r(e.target.value)}}),Object(n.jsx)("div",{class:"input-group-btn",children:Object(n.jsx)("button",{class:"btn btn-default",type:"submit",children:Object(n.jsx)("i",{class:"glyphicon glyphicon-search"})})})]})}),Object(n.jsx)("div",{className:"content",children:function(e){return void 0===e?null:e.length<=0?Object(n.jsx)(v,{}):e.map((function(e){return Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("label",{className:"lbl",children:["Author Name:",e.author]}),Object(n.jsxs)("label",{className:"lbl",children:["Date and Time of Publish:",e.date]}),Object(n.jsx)("h5",{children:e.text}),Object(n.jsx)(o.b,{to:"/updateblog/".concat(e.id),className:"btn btn-success mr-2",id:"update",style:{marginRight:"10px"},children:"Update"}),Object(n.jsx)("button",{onClick:function(){E(e.id)},className:"btn btn-danger",id:"delete",children:"Delete"})]},e.id)}))}(h)})]})]})},N=function(){var e=Object(a.useContext)(m),t=e.log,c=e.setLog,s=Object(a.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),O=h[0],p=h[1],v=Object(f.g)(),g=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.a.get("http://localhost:8000/api/employee/");case 4:return n=e.sent,e.next=7,n.data;case 7:a=e.sent,(s=a.filter((function(e){if(e.email===l&&e.password===O)return e}))).length>0?(console.log(s[0]),c(s[0]),v.push("/admin")):(alert("incorrect user name or password"),v.push("/")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:o(""),p("");case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return""!==t.id?Object(n.jsx)(n.Fragment,{children:v.push("/admin")}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h2",{children:"Login Form"}),Object(n.jsxs)("form",{onSubmit:g,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email:"}),Object(n.jsx)("input",{type:"email",className:"form-control",value:l,onChange:function(e){o(e.target.value)},id:"email",placeholder:"Enter email",name:"email",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password:"}),Object(n.jsx)("input",{type:"password",className:"form-control",value:O,onChange:function(e){p(e.target.value)},id:"pwd",placeholder:"Enter password",name:"pwd",required:!0})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})]})},y=c(14),C=c(15);x.a.defaults.xsrfHeaderName="X-CSRFTOKEN",x.a.defaults.xsrfCookieName="csrftoken";var w=function(){var e=Object(a.useState)({firstname:"",lastname:"",mobileno:"",email:"",password:""}),t=Object(i.a)(e,2),c=t[0],s=t[1],r=function(e){var t=e.target,c=t.name,n=t.value;s((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(y.a)({},c,n))}))},l=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(c),e.next=5,x.a.post("http://localhost:8000/api/employee/",c);case 5:n=e.sent,console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:s({firstname:"",lastname:"",mobileno:"",email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h2",{children:"Registration Form"}),Object(n.jsxs)("form",{onSubmit:l,method:"post",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"First Name:"}),Object(n.jsx)("input",{type:"text",className:"form-control",value:c.firstname,onChange:r,id:"firstname",placeholder:"Enter First Name",name:"firstname",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Last Name:"}),Object(n.jsx)("input",{type:"text",className:"form-control",value:c.lastname,onChange:r,id:"lastname",placeholder:"Enter Last Name",name:"lastname",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Mobile Number:"}),Object(n.jsx)("input",{type:"number",className:"form-control",value:c.mobileno,onChange:r,id:"mobileno",placeholder:"Enter Mobile Number",name:"mobileno",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email:"}),Object(n.jsx)("input",{type:"email",className:"form-control",value:c.email,onChange:r,id:"email",placeholder:"Enter email",name:"email",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password:"}),Object(n.jsx)("input",{type:"password",className:"form-control",value:c.password,onChange:r,id:"pwd",placeholder:"Enter password",name:"password",required:!0})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})]})},S=function(){var e=Object(a.useContext)(m),t=e.log;e.setLog;return""==t.id?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h2",{children:"ABOUT US"}),Object(n.jsx)("h4",{children:"Develped By:- B S Prashant"}),Object(n.jsx)("h5",{children:"Mail me on :- ps521520@gmail.com "}),Object(n.jsx)("h5",{children:"Mobile no :- 9534269233 "})]})})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h2",{children:"ABOUT US"}),Object(n.jsx)("h4",{children:"Develped By:- B S Prashant"}),Object(n.jsx)("h5",{children:"Mail me on :- ps521520@gmail.com "}),Object(n.jsx)("h5",{children:"Mobile no :- 9534269233 "})]})})})]})},k=function(){var e=Object(a.useContext)(m),t=e.log;e.setLog;return""===t.id?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h2",{children:"CONTACT US"}),Object(n.jsx)("h4",{children:"Develped By:- B S Prashant"}),Object(n.jsx)("h5",{children:"Mail me on :- ps521520@gmail.com "}),Object(n.jsx)("h5",{children:"Mobile no :- 9534269233 "})]})})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("center",{children:[Object(n.jsx)("h2",{children:"CONTACT US"}),Object(n.jsx)("h4",{children:"Develped By:- B S Prashant"}),Object(n.jsx)("h5",{children:"Mail me on :- ps521520@gmail.com "}),Object(n.jsx)("h5",{children:"Mobile no :- 9534269233 "})]})})})]})},F=function(){var e,t=Object(f.g)(),c=Object(a.useState)([]),s=Object(i.a)(c,2),r=s[0],l=s[1],j=Object(a.useContext)(m),b=j.log,h=(j.setLog,"http://localhost:8000/api/blog/"),O=function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("".concat(h).concat(t,"/"));case 3:c=e.sent,console.log(c),console.log("deleted"),v(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(h);case 3:return t=e.sent,e.next=6,t.data;case 6:c=e.sent,n=c.filter((function(e){if(e.writer===parseInt(b.id))return e})),console.log(n),console.log(b),l(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()}),[]),""==b.id?Object(n.jsx)(n.Fragment,{children:t.push("/login")}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:(e=r,void 0===e?null:e.map((function(e){return Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("label",{className:"lbl",children:["Author Name:",e.author]}),Object(n.jsxs)("label",{className:"lbl",children:["Date and Time of Publish:",e.date]}),Object(n.jsx)("h5",{children:e.text}),Object(n.jsx)(o.b,{to:"/updateblog/".concat(e.id),className:"btn btn-success mr-2",id:"update",style:{marginRight:"10px"},children:"Update"}),Object(n.jsx)("button",{onClick:function(){O(e.id)},className:"btn btn-danger",id:"delete",children:"Delete"})]},e.id)})))})})]})},E=function(){var e=Object(f.g)(),t=Object(a.useContext)(m),c=t.log,s=(t.setLog,Object(a.useState)("")),r=Object(i.a)(s,2),l=r[0],o=r[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),h=b[0],O=b[1],v=Object(a.useState)(""),g=Object(i.a)(v,2),N=g[0],y=g[1],C=Object(a.useState)(""),w=Object(i.a)(C,2),S=w[0],k=w[1],F=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.a.post("http://localhost:8000/api/blog/",{title:l,author:h,text:N,writer:parseInt(c.id)});case 4:n=e.sent,console.log(n),o(""),O(""),y(""),k(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return""===c.id?Object(n.jsx)(n.Fragment,{children:e.push("/login")}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("form",{onSubmit:F,method:"post",children:[Object(n.jsxs)("table",{className:"table table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Fields"}),Object(n.jsx)("th",{children:"Data"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Title"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"text",value:l,placeholder:"Enter Title Here",className:"inpt",onChange:function(e){o(e.target.value)},required:!0})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Created By"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"text",value:h,placeholder:"Enter Author Name Here",className:"inpt",onChange:function(e){O(e.target.value)},required:!0})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Date"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"date",value:S,placeholder:"Select Date Field",className:"inpt",onChange:function(e){k(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Text"}),Object(n.jsx)("td",{children:Object(n.jsx)("textarea",{typeof:"text",value:N,placeholder:"write text here",className:"inpt",onChange:function(e){y(e.target.value)},required:!0})})]})]})]}),Object(n.jsx)("center",{children:Object(n.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})})]})})})]})},D=function(){var e=Object(a.useContext)(m),t=e.log,c=(e.setLog,Object(f.h)().id),s="http://localhost:8000/api/blog/".concat(c,"/"),r=Object(a.useState)(""),l=Object(i.a)(r,2),o=l[0],j=l[1],b=Object(a.useState)(""),h=Object(i.a)(b,2),O=h[0],v=h[1],g=Object(a.useState)(""),N=Object(i.a)(g,2),y=N[0],C=N[1],w=Object(a.useState)(""),S=Object(i.a)(w,2),k=S[0],F=S[1],E=Object(f.g)(),D=function(){var e=Object(u.a)(d.a.mark((function e(c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,x.a.put(s,{title:o,author:O,text:y,writer:t.id});case 4:n=e.sent,console.log(n),j(""),v(""),C(""),F(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:E.push("/admin");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(s);case 3:return t=e.sent,e.next=6,t.data;case 6:c=e.sent,j(c.title),v(c.author),C(c.text),console.log(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){q()}),[]),""===t.id?Object(n.jsx)(n.Fragment,{children:E.push("/")}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("form",{onSubmit:D,method:"post",children:[Object(n.jsxs)("table",{className:"table table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Fields"}),Object(n.jsx)("th",{children:"Data"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Title"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"text",value:o,placeholder:"Enter Title Here",className:"inpt",onChange:function(e){j(e.target.value)},required:!0})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Created By"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"text",value:O,placeholder:"Enter Author Name Here",className:"inpt",onChange:function(e){v(e.target.value)},required:!0})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Date"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"date",value:k,placeholder:"Select Date Field",className:"inpt",onChange:function(e){F(e.target.value)}})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Text"}),Object(n.jsx)("td",{children:Object(n.jsx)("textarea",{typeof:"text",value:y,placeholder:"write text here",className:"inpt",onChange:function(e){C(e.target.value)},required:!0})})]})]})]}),Object(n.jsx)("center",{children:Object(n.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})})]})})})]})};x.a.defaults.xsrfHeaderName="X-CSRFTOKEN",x.a.defaults.xsrfCookieName="csrftoken";var q=function(){var e=Object(a.useContext)(m),t=e.log,c=(e.setLog,Object(f.g)()),s=Object(a.useState)({id:"",firstname:"",lastname:"",mobileno:"",email:"",password:""}),r=Object(i.a)(s,2),l=r[0],o=r[1],j="http://localhost:8000/api/employee/".concat(t.id,"/"),b=function(e){var t=e.target,c=t.name,n=t.value;o((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(y.a)({},c,n))}))},h=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(l),e.next=5,x.a.put(j,l);case 5:n=e.sent,console.log(n),c.push("/admin"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:o({firstname:"",lastname:"",mobileno:"",email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(d.a.mark((function e(){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.id){e.next=15;break}return e.prev=1,e.next=4,x.a.get(j);case 4:return c=e.sent,e.next=7,c.data;case 7:n=e.sent,o(n),console.log(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[]),""===t.id?Object(n.jsx)(n.Fragment,{children:c.push("/")}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsx)("h2",{children:"Registration Updation Form"}),Object(n.jsxs)("form",{onSubmit:h,method:"post",children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"First Name:"}),Object(n.jsx)("input",{type:"text",className:"form-control",value:l.firstname,onChange:b,id:"firstname",placeholder:"Enter First Name",name:"firstname",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Last Name:"}),Object(n.jsx)("input",{type:"text",className:"form-control",value:l.lastname,onChange:b,id:"lastname",placeholder:"Enter Last Name",name:"lastname",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Mobile Number:"}),Object(n.jsx)("input",{type:"number",className:"form-control",value:l.mobileno,onChange:b,id:"mobileno",placeholder:"Enter Mobile Number",name:"mobileno",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email:"}),Object(n.jsx)("input",{type:"email",className:"form-control",value:l.email,onChange:b,id:"email",placeholder:"Enter email",name:"email",autoComplete:"off",required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password:"}),Object(n.jsx)("input",{type:"password",className:"form-control",value:l.password,onChange:b,id:"pwd",placeholder:"Enter password",name:"password",required:!0})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})]})]})})]})},B=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("footer",{className:"bg-dark text-white mt-4",children:Object(n.jsxs)("div",{className:"footer-copyright text-center py-3",children:["\xa9 2020 Copyright:",Object(n.jsx)("p",{children:"Designed and Developed By:- B S Prashant"})]})})})})};var T=function(){var e=Object(a.useState)({id:"",firstname:"",lastname:"",email:"",password:"",mobileno:""}),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(f.d,{children:Object(n.jsxs)(m.Provider,{value:{log:c,setLog:s},children:[Object(n.jsx)(f.b,{exact:!0,path:"/",component:O}),Object(n.jsx)(f.b,{exact:!0,path:"/category",component:g}),Object(n.jsx)(f.b,{exact:!0,path:"/aboutus",component:S}),Object(n.jsx)(f.b,{exact:!0,path:"/contactus",component:k}),Object(n.jsx)(f.b,{exact:!0,path:"/login",component:N}),Object(n.jsx)(f.b,{exact:!0,path:"/register",component:w}),Object(n.jsx)(f.b,{exact:!0,path:"/createblog",component:E}),Object(n.jsx)(f.b,{exact:!0,path:"/updateblog/:id",component:D}),Object(n.jsx)(f.b,{exact:!0,path:"/account/:user",component:O}),Object(n.jsx)(f.b,{exact:!0,path:"/admin",component:F}),Object(n.jsx)(f.b,{exact:!0,path:"/profile",component:q}),Object(n.jsx)(f.b,{path:"/logout",render:function(){return Object(n.jsx)(f.a,{to:"/"})}})]})}),Object(n.jsx)(B,{})]})})};l.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(T,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.3c05f554.chunk.js.map