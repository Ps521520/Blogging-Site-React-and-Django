(this.webpackJsonpblogsite=this.webpackJsonpblogsite||[]).push([[0],{37:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(30),l=c.n(r),o=c(4),i=(c(37),c(3));var j=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"navbar navbar-inverse",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("div",{className:"navbar-header",children:[Object(a.jsxs)("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar",children:[Object(a.jsx)("span",{class:"icon-bar"}),Object(a.jsx)("span",{class:"icon-bar"}),Object(a.jsx)("span",{class:"icon-bar"})]}),Object(a.jsx)(i.b,{className:"navbar-brand",to:"/",children:"FreshBlogs"})]}),Object(a.jsxs)("div",{class:"collapse navbar-collapse",id:"myNavbar",children:[Object(a.jsxs)("ul",{className:"nav navbar-nav",children:[Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/category",children:"Cateogry"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/aboutus",children:"About Us"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/contactus",children:"Contact Us"})})]}),Object(a.jsxs)("ul",{className:"nav navbar-nav navbar-right",id:"logreg",children:[Object(a.jsx)("li",{children:Object(a.jsxs)(i.b,{to:"/register",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-user"})," Sign Up"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(i.b,{to:"/login",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-log-in"})," Login"]})})]})]})]})})})},b=c(2),d=c.n(b),u=c(8),h=c(6),x=c.n(h),m=function(){var e,t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1],l=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("http://localhost:8000/api/blog/");case 3:return t=e.sent,e.next=6,t.data;case 6:c=e.sent,console.log(c),r(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"content",children:(e=s,void 0===e?null:e.map((function(e){return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("label",{className:"lbl",children:["Author Name:",e.author]}),Object(a.jsxs)("label",{className:"lbl",children:["Date and Time of Publish:",e.date]}),Object(a.jsx)("h5",{children:e.text})]},e.id)})))})})]})},p=Object(n.createContext)(null),O=function(){var e=Object(n.useContext)(p),t=e.log,c=e.setLog;return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"navbar navbar-inverse",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("div",{className:"navbar-header",children:[Object(a.jsxs)("button",{type:"button",class:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar",children:[Object(a.jsx)("span",{class:"icon-bar"}),Object(a.jsx)("span",{class:"icon-bar"}),Object(a.jsx)("span",{class:"icon-bar"})]}),Object(a.jsx)(i.b,{className:"navbar-brand",to:"/admin",children:"FreshBlogs"})]}),Object(a.jsxs)("div",{class:"collapse navbar-collapse",id:"myNavbar",children:[Object(a.jsxs)("ul",{className:"nav navbar-nav",children:[Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/admin",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/category",children:"Cateogry"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/aboutus",children:"About Us"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/contactus",children:"Contact Us"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/createblog",children:"Create Blog"})})]}),Object(a.jsxs)("ul",{className:"nav navbar-nav navbar-right",id:"logreg",children:[Object(a.jsx)("li",{children:Object(a.jsxs)(i.b,{to:"/logout",onClick:function(){c({id:"",firstname:"",lastname:"",email:"",password:"",mobileno:""})},children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-log-out"})," Logout"]})}),Object(a.jsxs)("li",{children:[Object(a.jsxs)(i.b,{to:"/profile",children:[Object(a.jsx)("span",{className:"glyphicon glyphicon-log-in"}),"Profile ",t.firstname," "]})," "]})]})]})]})})})},f=function(){var e=Object(n.useContext)(p),t=e.log;e.setLog;return""==t.id?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j,{})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(O,{})})},v=c(5),g=function(){var e=Object(n.useContext)(p),t=e.log,c=e.setLog,s=Object(n.useState)(""),r=Object(o.a)(s,2),l=r[0],i=r[1],b=Object(n.useState)(""),h=Object(o.a)(b,2),m=h[0],O=h[1],f=Object(v.g)(),g=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.a.get("http://localhost:8000/api/employee/");case 4:return a=e.sent,e.next=7,a.data;case 7:n=e.sent,(s=n.filter((function(e){if(e.email===l&&e.password===m)return e}))).length>0?(console.log(s[0]),c(s[0]),f.push("/admin")):(alert("incorrect user name or password"),f.push("/")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:i(""),O("");case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return""!=t.id?Object(a.jsx)(a.Fragment,{children:f.push("/admin")}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{children:"Login Form"}),Object(a.jsxs)("form",{onSubmit:g,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"email",className:"form-control",value:l,onChange:function(e){i(e.target.value)},id:"email",placeholder:"Enter email",name:"email",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",className:"form-control",value:m,onChange:function(e){O(e.target.value)},id:"pwd",placeholder:"Enter password",name:"pwd",required:!0})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})]})},N=c(14),y=c(15);x.a.defaults.xsrfHeaderName="X-CSRFTOKEN",x.a.defaults.xsrfCookieName="csrftoken";var w=function(){var e=Object(n.useState)({firstname:"",lastname:"",mobileno:"",email:"",password:""}),t=Object(o.a)(e,2),c=t[0],s=t[1],r=function(e){var t=e.target,c=t.name,a=t.value;s((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(N.a)({},c,a))}))},l=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(c),e.next=5,x.a.post("http://localhost:8000/api/employee/",c);case 5:a=e.sent,console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:s({firstname:"",lastname:"",mobileno:"",email:"",password:""});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{children:"Registration Form"}),Object(a.jsxs)("form",{onSubmit:l,method:"post",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"First Name:"}),Object(a.jsx)("input",{type:"text",className:"form-control",value:c.firstname,onChange:r,id:"firstname",placeholder:"Enter First Name",name:"firstname",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Last Name:"}),Object(a.jsx)("input",{type:"text",className:"form-control",value:c.lastname,onChange:r,id:"lastname",placeholder:"Enter Last Name",name:"lastname",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Mobile Number:"}),Object(a.jsx)("input",{type:"number",className:"form-control",value:c.mobileno,onChange:r,id:"mobileno",placeholder:"Enter Mobile Number",name:"mobileno",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"email",className:"form-control",value:c.email,onChange:r,id:"email",placeholder:"Enter email",name:"email",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",className:"form-control",value:c.password,onChange:r,id:"pwd",placeholder:"Enter password",name:"password",required:!0})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})]})},C=function(){var e=Object(n.useContext)(p),t=e.log;e.setLog;return""==t.id?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j,{})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(O,{})})},F=function(){var e=Object(n.useContext)(p),t=e.log;e.setLog;return""==t.id?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j,{})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(O,{})})},S=function(){var e,t=Object(v.g)(),c=Object(n.useState)([]),s=Object(o.a)(c,2),r=s[0],l=s[1],j=Object(n.useContext)(p),b=j.log,h=(j.setLog,"http://localhost:8000/api/blog/"),m=function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("".concat(h).concat(t,"/"));case 3:c=e.sent,console.log(c),console.log("deleted"),f(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(h);case 3:return t=e.sent,e.next=6,t.data;case 6:c=e.sent,a=c.filter((function(e){if(e.writer===parseInt(b.id))return e})),console.log(a),console.log(b),l(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),""==b.id?Object(a.jsx)(a.Fragment,{children:t.push("/")}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"content",children:(e=r,void 0===e?null:e.map((function(e){return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("label",{className:"lbl",children:["Author Name:",e.author]}),Object(a.jsxs)("label",{className:"lbl",children:["Date and Time of Publish:",e.date]}),Object(a.jsx)("h5",{children:e.text}),Object(a.jsx)(i.b,{to:"/updateblog/".concat(e.id),className:"btn btn-success mr-2",id:"update",style:{marginRight:"10px"},children:"Update"}),Object(a.jsx)("button",{onClick:function(){m(e.id)},className:"btn btn-danger",id:"delete",children:"Delete"})]},e.id)})))})})]})},k=function(){var e=Object(v.g)(),t=Object(n.useContext)(p),c=t.log,s=(t.setLog,Object(n.useState)("")),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),h=b[0],m=b[1],f=Object(n.useState)(""),g=Object(o.a)(f,2),N=g[0],y=g[1],w=Object(n.useState)(""),C=Object(o.a)(w,2),F=C[0],S=C[1],k=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.a.post("http://localhost:8000/api/blog/",{title:l,author:h,text:N,writer:parseInt(c.id)});case 4:a=e.sent,console.log(a),i(""),m(""),y(""),S(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return""==c.id?Object(a.jsx)(a.Fragment,{children:e.push("/")}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("form",{onSubmit:k,method:"post",children:[Object(a.jsxs)("table",{className:"table table-bordered",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Fields"}),Object(a.jsx)("th",{children:"Data"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Title"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",value:l,placeholder:"Enter Title Here",className:"inpt",onChange:function(e){i(e.target.value)},required:!0})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Created By"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",value:h,placeholder:"Enter Author Name Here",className:"inpt",onChange:function(e){m(e.target.value)},required:!0})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Date"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"date",value:F,placeholder:"Select Date Field",className:"inpt",onChange:function(e){S(e.target.value)}})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Text"}),Object(a.jsx)("td",{children:Object(a.jsx)("textarea",{typeof:"text",value:N,placeholder:"write text here",className:"inpt",onChange:function(e){y(e.target.value)},required:!0})})]})]})]}),Object(a.jsx)("center",{children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})})]})})})]})},E=function(){var e=Object(n.useContext)(p),t=e.log,c=(e.setLog,Object(v.h)().id),s="http://localhost:8000/api/blog/".concat(c,"/"),r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],j=l[1],b=Object(n.useState)(""),h=Object(o.a)(b,2),m=h[0],f=h[1],g=Object(n.useState)(""),N=Object(o.a)(g,2),y=N[0],w=N[1],C=Object(n.useState)(""),F=Object(o.a)(C,2),S=F[0],k=F[1],E=Object(v.g)(),q=function(){var e=Object(u.a)(d.a.mark((function e(c){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,x.a.put(s,{title:i,author:m,text:y,writer:t.id});case 4:a=e.sent,console.log(a),j(""),f(""),w(""),k(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:E.push("/admin");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(s);case 3:return t=e.sent,e.next=6,t.data;case 6:c=e.sent,j(c.title),f(c.author),w(c.text),console.log(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){L()}),[]),""==t.id?Object(a.jsx)(a.Fragment,{children:E.push("/")}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("form",{onSubmit:q,method:"post",children:[Object(a.jsxs)("table",{className:"table table-bordered",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Fields"}),Object(a.jsx)("th",{children:"Data"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Title"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",value:i,placeholder:"Enter Title Here",className:"inpt",onChange:function(e){j(e.target.value)},required:!0})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Created By"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",value:m,placeholder:"Enter Author Name Here",className:"inpt",onChange:function(e){f(e.target.value)},required:!0})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Date"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"date",value:S,placeholder:"Select Date Field",className:"inpt",onChange:function(e){k(e.target.value)}})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Text"}),Object(a.jsx)("td",{children:Object(a.jsx)("textarea",{typeof:"text",value:y,placeholder:"write text here",className:"inpt",onChange:function(e){w(e.target.value)},required:!0})})]})]})]}),Object(a.jsx)("center",{children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success",children:"Submit"})})]})})})]})};x.a.defaults.xsrfHeaderName="X-CSRFTOKEN",x.a.defaults.xsrfCookieName="csrftoken";var q=function(){var e=Object(n.useContext)(p),t=e.log,c=(e.setLog,Object(v.g)()),s=Object(n.useState)({id:"",firstname:"",lastname:"",mobileno:"",email:"",password:""}),r=Object(o.a)(s,2),l=r[0],i=r[1],j="http://localhost:8000/api/employee/".concat(t.id,"/"),b=function(e){var t=e.target,c=t.name,a=t.value;i((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(N.a)({},c,a))}))},h=function(){var e=Object(u.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(l),e.next=5,x.a.put(j,l);case 5:a=e.sent,console.log(a),c.push("/admin"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:i({firstname:"",lastname:"",mobileno:"",email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(d.a.mark((function e(){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==t.id){e.next=15;break}return e.prev=1,e.next=4,x.a.get(j);case 4:return c=e.sent,e.next=7,c.data;case 7:a=e.sent,i(a),console.log(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[]),""==t.id?Object(a.jsx)(a.Fragment,{children:c.push("/")}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{children:"Registration Updation Form"}),Object(a.jsxs)("form",{onSubmit:h,method:"post",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"First Name:"}),Object(a.jsx)("input",{type:"text",className:"form-control",value:l.firstname,onChange:b,id:"firstname",placeholder:"Enter First Name",name:"firstname",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Last Name:"}),Object(a.jsx)("input",{type:"text",className:"form-control",value:l.lastname,onChange:b,id:"lastname",placeholder:"Enter Last Name",name:"lastname",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Mobile Number:"}),Object(a.jsx)("input",{type:"number",className:"form-control",value:l.mobileno,onChange:b,id:"mobileno",placeholder:"Enter Mobile Number",name:"mobileno",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email:"}),Object(a.jsx)("input",{type:"email",className:"form-control",value:l.email,onChange:b,id:"email",placeholder:"Enter email",name:"email",autoComplete:"off",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password:"}),Object(a.jsx)("input",{type:"password",className:"form-control",value:l.password,onChange:b,id:"pwd",placeholder:"Enter password",name:"password",required:!0})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})]})]})})]})};var L=function(){var e=Object(n.useState)({id:"",firstname:"",lastname:"",email:"",password:"",mobileno:""}),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.d,{children:Object(a.jsxs)(p.Provider,{value:{log:c,setLog:s},children:[Object(a.jsx)(v.b,{exact:!0,path:"/",component:m}),Object(a.jsx)(v.b,{exact:!0,path:"/category",component:f}),Object(a.jsx)(v.b,{exact:!0,path:"/aboutus",component:C}),Object(a.jsx)(v.b,{exact:!0,path:"/contactus",component:F}),Object(a.jsx)(v.b,{exact:!0,path:"/login",component:g}),Object(a.jsx)(v.b,{exact:!0,path:"/register",component:w}),Object(a.jsx)(v.b,{exact:!0,path:"/createblog",component:k}),Object(a.jsx)(v.b,{exact:!0,path:"/updateblog/:id",component:E}),Object(a.jsx)(v.b,{exact:!0,path:"/account/:user",component:m}),Object(a.jsx)(v.b,{exact:!0,path:"/admin",component:S}),Object(a.jsx)(v.b,{exact:!0,path:"/profile",component:q}),Object(a.jsx)(v.b,{path:"/logout",render:function(){return Object(a.jsx)(v.a,{to:"/"})}})]})})})};l.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(L,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.de7d1349.chunk.js.map