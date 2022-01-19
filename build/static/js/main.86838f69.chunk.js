(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),o=(a(50),a(11)),l=a(16),i=a(3),u=a(6),d=a.n(u),b=a(13),j=a(15),p=a(4),h=a(5),m=a(38),O=a.n(m),x="FETCH_POST",A="CREATE_POST",g="UPDATE_ID",f="UPDATE_POST",v="DELETE_POST",y="LIKE_POST",N="AUTH",S="LOG_OUT",k="SIGN_UP",w="SIGN_IN",T=a(39),C=a.n(T).a.create({baseURL:"https://mohkabir-memory-app.herokuapp.com"});C.interceptors.request.use((function(e){return localStorage.getItem("auth")&&(e.headers.Autorization="Bearer ".concat(JSON.parse(localStorage.getItem("auth")).token)),e}));var R=function(e){return C.post("/posts",e)},J=function(e,t){return function(t){try{t({type:N,payload:e}),window.location.reload()}catch(a){console.log(a)}}},I=a(1),E=function(){var e,t=Object(h.b)(),a=Object(i.g)(),c=(Object(h.c)((function(e){return e.auth.authdata})),Object(n.useState)(!0)),r=Object(o.a)(c,2),s=r[0],l=r[1],u=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),m=Object(o.a)(u,2),x=m[0],A=m[1];Object(n.useEffect)((function(){}),[J]);var g=function(e){A(Object(p.a)(Object(p.a)({},x),{},Object(j.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(b.a)(d.a.mark((function e(a){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===a||void 0===a?void 0:a.profileObj,c=null===a||void 0===a?void 0:a.tokenId,t(J({profile:n,token:c}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){A({firstName:"",lastName:"",email:"",password:""})};return Object(I.jsxs)("form",{onSubmit:function(e){var n;e.preventDefault(),t(s?(n=x,function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r=n,C.post("/users/signin",r);case 3:a=e.sent,c=a.data,t({type:w,payload:c}),console.log("successful",c),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("log in error",e.t0.msg);case 13:case"end":return e.stop()}var r}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(b.a)(d.a.mark((function a(n){var c,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,s=e,C.post("/users/signup",s);case 3:c=a.sent,r=c.data,console.log(r),n({type:k}),t.push("/"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}var s}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()}(x,a)),v()},className:"loginform",children:[Object(I.jsx)("h2",{className:"text-center my-4",children:s?"LOG IN":"SIGN UP"}),!s&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("input",{type:"text",placeholder:"First name",name:"firstName",onChange:g,className:"block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white",required:!0,value:x.firstName}),Object(I.jsx)("input",(e={type:"text",placeholder:"Last name",name:"lastName"},Object(j.a)(e,"type","text"),Object(j.a)(e,"onChange",g),Object(j.a)(e,"className","block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white"),Object(j.a)(e,"required",!0),Object(j.a)(e,"value",x.lastName),e))]}),Object(I.jsx)("input",{type:"email",placeholder:"Email",name:"email",onChange:g,className:"block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white",required:!0,value:x.email}),Object(I.jsx)("input",{type:"password",placeholder:"Password",name:"password",onChange:g,className:"block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full text-white",required:!0,value:x.password}),Object(I.jsx)("input",{type:"submit",value:s?"log in":"sign up",className:"btn_submit"}),Object(I.jsx)(O.a,{clientId:"443686113017-oa54qgtkmlpn73lpr5dsggkjpksme35p.apps.googleusercontent.com",render:function(e){return Object(I.jsxs)("button",{onClick:e.onClick,disabled:e.disabled,className:"google font-weight-bolder d-block w-100 bg-white rounded text-black my-2 p-1",children:[Object(I.jsx)("img",{className:"googlelogo",src:"data:image/jpeg;base64,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",alt:""}),Object(I.jsxs)("span",{className:"text-black font-weight-bolder",children:[" ",s?"log in":"sign up"," with google"]})]})},onSuccess:f,onFailure:function(e){console.log(e)},cookiePolicy:"single_host_origin"}),Object(I.jsx)("p",{className:" cursor text-center",children:Object(I.jsxs)("small",{onClick:function(){l(!s)},children:[s?"dont have an account ? sign up":"Already have an account ? Log in"," "]})})]})},z=function(){var e,t,a,c=Object(h.b)(),r=(Object(i.g)(),Object(i.h)()),s=Object(h.c)((function(e){return e.auth})),u=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):null,d=Object(n.useState)(u),b=Object(o.a)(d,2),j=b[0],p=b[1];console.log(u,"userdata log");return Object(n.useEffect)((function(){p(JSON.parse(localStorage.getItem("auth")))}),[s,r]),Object(I.jsx)("div",{className:"head p-1 py-md-3",children:Object(I.jsxs)("div",{className:"wrapper p-md-2  d-flex justify-content-between flex-column flex-md-row my-0 mx-auto align-items-center",children:[Object(I.jsx)("h2",{children:Object(I.jsx)(l.b,{to:"/",children:Object(I.jsx)("span",{className:"px-md-2  text-white text-center",children:"Memories App"})})}),Object(I.jsxs)("div",{children:[j?Object(I.jsxs)("div",{className:"cursor-pointer",children:[Object(I.jsxs)("span",{children:[(null===j||void 0===j||null===(e=j.profile)||void 0===e?void 0:e.givenName)?null===j||void 0===j||null===(t=j.profile)||void 0===t?void 0:t.givenName:u.result.name," "]}),Object(I.jsx)("img",{className:"inline",style:{borderRadius:"50px",width:"50px"},src:(null===(a=j.profile)||void 0===a?void 0:a.imageUrl)?j.profile.imageUrl:"data:image/png;base64,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",alt:null===j||void 0===j?void 0:j.givenName})]}):"",Object(I.jsx)("div",{children:j?Object(I.jsx)("p",{className:"cursor-pointer",onClick:function(){c({type:S}),window.location.reload()},style:{cursor:"pointer"},children:"Log out"}):Object(I.jsx)(l.b,{to:"/auth",children:Object(I.jsx)("p",{className:"text-light",children:"Log in"})})})]})]})})},V=a(80),P=function(e){return console.log("updated id"),{type:g,payload:e}},Q=a(40),G=a.n(Q),H=function(e){var t=e.post,a=Object(h.b)();return Object(I.jsxs)("div",{className:"col-12 col-md-6 col-lg-3 card_custom m-2",children:[Object(I.jsxs)("div",{className:"box1",children:[Object(I.jsx)("img",{src:t.selectedFile,alt:"img",className:"w-100 h-100"}),Object(I.jsxs)("div",{className:"thumbnail",children:[Object(I.jsx)("small",{children:G()(t.createdAt).fromNow()}),Object(I.jsx)("span",{className:"",onClick:function(){a(P(t._id))},children:Object(I.jsx)("i",{class:"fas fa-edit"})})]})]}),Object(I.jsxs)("div",{className:"box2",children:[Object(I.jsxs)("small",{className:" block",children:[Object(I.jsx)("span",{className:"text-xs",children:"Created by"})," ",Object(I.jsx)("span",{className:"uppercase",children:t.creator})]}),Object(I.jsxs)("p",{className:"text-sm",children:["Title: ",t.title]}),Object(I.jsx)("p",{className:"text-xs",children:Object(I.jsxs)("small",{children:["Description: ",t.message]})}),Object(I.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(I.jsxs)("div",{style:{cursor:"pointer"},className:" rounded text-xs",onClick:function(){return a((e=t._id,function(){var t=Object(b.a)(d.a.mark((function t(a){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r=e,C.patch("/posts/".concat(r,"/like"));case 3:n=t.sent,c=n.data,a({type:y,payload:c}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),console.log("front wned");case 12:case"end":return t.stop()}var r}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(I.jsx)("i",{class:"fa fa-thumbs-up",style:{color:"blue"},"aria-hidden":"true"}),Object(I.jsxs)("small",{children:[" Like ",t.likes.length]})]}),Object(I.jsxs)("small",{class:"text-red-500 pointer text-xs",onClick:function(){return a((e=t._id,function(){var t=Object(b.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n=e,C.delete("/posts/".concat(n));case 3:a({type:v}),console.log("deleted"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(I.jsx)("i",{class:"far fa-trash-alt",style:{color:"red"}})," Delete"]})]})]})]})},W=function(){var e=Object(h.c)((function(e){return e.posts}));return Object(I.jsx)("div",{className:"home_box1",children:0===e.length?Object(I.jsx)(V.a,{animation:"border",role:"status",children:Object(I.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(I.jsx)("div",{className:"row w-100 p-0",children:e.map((function(e,t){return Object(I.jsx)(H,{post:e},t)}))})})},L=a(42),q=a.n(L),D=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.postsId})),a=Object(h.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),c=Object(n.useState)({creator:"",message:"",selectedFile:"",title:""}),r=Object(o.a)(c,2),s=r[0],l=r[1],i=Object(n.useState)(null),u=Object(o.a)(i,2),j=u[0],m=u[1];Object(n.useEffect)((function(){if(!t)return null;l(a)}),[t]);var O=function(){e(P(null)),l({creator:"",message:"",selectedFile:"",title:""}),m(null)};return Object(I.jsx)("div",{className:"home_box2",children:Object(I.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e(t?function(e,t){return function(){var a=Object(b.a)(d.a.mark((function a(n){var c,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,s=e,o=t,C.patch("/posts/".concat(s),o);case 3:c=a.sent,r=c.data,n({type:f,payload:r}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}var s,o}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,s):function(e){return function(){var t=Object(b.a)(d.a.mark((function t(a){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:n=t.sent,c=n.data;try{a({type:A,payload:c})}catch(r){console.log(r)}case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(s)),O()},className:"memory_form text-center",children:[Object(I.jsxs)("h5",{className:"text-center",children:[t?"Update":"Create"," Memory"]}),Object(I.jsx)("input",{type:"text",placeholder:"Creator",className:"block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full",onChange:function(e){return l(Object(p.a)(Object(p.a)({},s),{},{creator:e.target.value}))},value:s.creator,required:!0}),Object(I.jsx)("input",{type:"text",placeholder:"Title",className:"block my-2 outline-none bg-black border-2 rounded border-white p-1 w-full",onChange:function(e){return l(Object(p.a)(Object(p.a)({},s),{},{title:e.target.value}))},value:s.title,required:!0}),Object(I.jsx)("textarea",{className:"block my-2 outline-none bg-black border-2 rounded p-1 border-white h-24 w-full",placeholder:"Message",onChange:function(e){return l(Object(p.a)(Object(p.a)({},s),{},{message:e.target.value}))},value:s.message,required:!0}),Object(I.jsxs)("div",{className:"position-relative border border-2 my-1 py-2",style:{background:"#5FC2FF",color:"black",fontWeight:"600"},children:[Object(I.jsxs)("span",{className:"w-full block p-2 text-center text-xs",children:[j||"Select Memory Image"," "]}),Object(I.jsx)("div",{className:"position-absolute fixed-top opacity_none",children:Object(I.jsx)(q.a,{multiple:!1,onDone:function(e){l(Object(p.a)(Object(p.a)({},s),{},{selectedFile:e.base64})),m(e.name),console.log(e)}})})]}),Object(I.jsx)("input",{type:"submit",value:"submit",className:"submit block rounded py-1 px-2 my-2 "})]})})};var K=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.posts}));return Object(n.useEffect)((function(){e(function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.get("/posts");case 3:a=e.sent,n=a.data,t({type:x,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t,e]),Object(I.jsxs)("div",{className:"w-full d-flex justify-content-between flex-column-reverse flex-md-row my-4 ",children:[Object(I.jsx)(W,{}),Object(I.jsx)(D,{})]})},F=a.p+"static/media/unsplash1.d46d1292.jpg",U=function(){var e=Object(n.useState)(localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):null),t=Object(o.a)(e,2),a=t[0];t[1];return Object(I.jsxs)("div",{className:"landingpage text-center py-3",children:[Object(I.jsx)("h2",{className:"my-md-3",children:"Welcome To The Memory Creation App"}),Object(I.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between align-items-center",children:[Object(I.jsx)("img",{className:"hero",src:F,alt:"hero"}),Object(I.jsxs)("div",{className:"hero_text",children:[Object(I.jsx)("h3",{className:"mt-md-5",children:"You Can Simply Create a Memory And Save."}),Object(I.jsxs)("div",{class:"alert alert-info text-left",children:[Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"Note:"})," you can either sign up with a new account or make use of this login details for testing purpose"]}),Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"username:"})," test@gmail.com"]}),Object(I.jsxs)("p",{children:[Object(I.jsx)("strong",{children:"password:"})," test"]})]}),Object(I.jsx)("button",{className:"btn",children:Object(I.jsx)(l.b,{to:a?"/home":"/auth",className:"p-2 rounded text-white text-decoration-none",children:"Get Started..."})})]})]})]})};var M=function(e){var t=Object(n.useState)(localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):null),a=Object(o.a)(t,2),c=a[0];return a[1],Object(I.jsx)("div",{className:"app",children:Object(I.jsxs)(l.a,{children:[Object(I.jsx)(z,{}),Object(I.jsx)(i.d,{children:Object(I.jsxs)("div",{className:"wrapper",children:[Object(I.jsx)(i.b,{exact:!0,path:"/",component:U}),Object(I.jsx)(i.b,{exact:!0,path:"/home",component:function(){return c?Object(I.jsx)(K,{}):Object(I.jsx)(i.a,{to:"/auth"})}}),Object(I.jsx)(i.b,{exact:!0,path:"/auth",component:function(){return c?Object(I.jsx)(i.a,{to:"/home"}):Object(I.jsx)(E,{})}})]})})]})})},Z=(a(77),a(14)),X=a(43),B=a(45),Y=Object(Z.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return e.filter((function(e){return e._id!==t.payload}));case x:return t.payload;case f:case y:return e.map((function(e){return e._id===t.payload?t.payload:e}));case A:return[].concat(Object(B.a)(e),[t.payload]);default:return e}},postsId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.payload;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authdata:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return localStorage.setItem("auth",JSON.stringify(null===t||void 0===t?void 0:t.payload)),Object(p.a)(Object(p.a)({},e),{},{athdata:"loggedIn"});case S:return localStorage.clear(),Object(p.a)(Object(p.a)({},e),{},{authdata:null});case w:return localStorage.setItem("auth",JSON.stringify(null===t||void 0===t?void 0:t.payload)),Object(p.a)(Object(p.a)({},e),{},{authdata:null===t||void 0===t?void 0:t.payload});case k:return Object(p.a)(Object(p.a)({},e),{},{athdata:"signedUp"});default:return e}}}),_=a(44),$=Object(Z.createStore)(Y,Object(_.composeWithDevTools)(Object(Z.compose)(Object(Z.applyMiddleware)(X.a))));s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(h.a,{store:$,children:Object(I.jsx)(M,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.86838f69.chunk.js.map