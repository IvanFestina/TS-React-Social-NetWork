(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{452:function(e,s,a){e.exports={dialogsBlock:"Dialogs_dialogsBlock__g3oHU",dialogsItems:"Dialogs_dialogsItems__3Sl67",dialogsContent:"Dialogs_dialogsContent__2UK_r",messages:"Dialogs_messages__2uSEX",typeAndSend:"Dialogs_typeAndSend__3itmK"}},453:function(e,s,a){e.exports={dialogItemBlock:"DialogItem_dialogItemBlock__3uHkC",nav:"DialogItem_nav__O88GV"}},454:function(e,s,a){e.exports={youStyle:"Message_youStyle__2ecPc",theyStyle:"Message_theyStyle__2v_8Y",textMessage:"Message_textMessage__1dBKY"}},480:function(e,s,a){"use strict";a.r(s);var t=a(5),i=a(61),n=a(0),c=a(452),o=a.n(c),l=a(453),r=a.n(l),d=a(39),g=a(2),m=function(e){var s="/dialogs/".concat(" ",e.id);return Object(g.jsx)("div",{className:r.a.dialogItemBlock,children:Object(g.jsx)(d.b,{className:r.a.nav,to:s,children:e.name})})},u=a(454),j=a.n(u),b=function(e){return Object(g.jsxs)("div",{className:e.isYou?j.a.youStyle:j.a.theyStyle,children:[Object(g.jsx)("img",{alt:"",src:e.img}),Object(g.jsx)("p",{className:j.a.textMessage,children:e.message})]})},_=a(84),x=a(51),O=a(142),h=a(440),f=a(425),y=a(439),p=a(435),S=["addNewMessageAC","dialogs","messages"],N=["addNewMessageAC"],v=function(e){var s=e.addNewMessageAC,a=(Object(i.a)(e,N),_.b().shape({message_area:_.c().required("Required")})),c=Object(x.e)({resolver:Object(O.a)(a)}),o=c.handleSubmit,l=c.control,r=c.formState,d=r.errors,m=r.isSubmitSuccessful,u=c.reset;Object(n.useEffect)((function(){u({message_area:""})}),[m,u]);return Object(g.jsx)("div",{style:{textAlign:"center",width:"100%"},children:Object(g.jsx)("form",{onSubmit:o((function(e){s(e.message_area)})),children:Object(g.jsxs)(h.a,{children:[Object(g.jsx)(x.a,{name:"message_area",control:l,render:function(e){var s=e.field;return Object(g.jsx)(f.a,Object(t.a)(Object(t.a)({},s),{},{label:"Type your message here",type:"text",margin:"normal",error:!!d.message_area,defaultValue:""}))}}),Object(g.jsx)(y.a,{style:{width:"100%"},type:"submit",variant:"contained",children:"Send"})]})})})},w=a(30),A=a(60),M=a(28),k=a(141),C=a(177);s.default=Object(A.compose)(M.g,Object(w.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,isAuth:e.auth.isAuth}}),{addNewMessageAC:C.a}),k.a)((function(e){var s=e.addNewMessageAC,a=e.dialogs,t=e.messages,n=(Object(i.a)(e,S),a.map((function(e){return Object(g.jsx)(m,{name:e.name,id:e.id},e.id)}))),c=t.map((function(e){return Object(g.jsx)(b,{message:e.message,img:e.img,isYou:e.isYou},e.id)}));return Object(g.jsxs)(p.a,{container:!0,className:o.a.dialogsBlock,children:[Object(g.jsx)(p.a,{item:!0,xs:2,className:o.a.dialogsItems,children:n}),Object(g.jsxs)(p.a,{item:!0,container:!0,xs:10,className:o.a.dialogsContent,children:[Object(g.jsx)(p.a,{item:!0,xs:12,className:o.a.messages,children:c}),Object(g.jsx)(p.a,{item:!0,xs:12,className:o.a.typeAndSend,children:Object(g.jsx)(v,{addNewMessageAC:s})})]})]})}))}}]);
//# sourceMappingURL=4.2b8d189b.chunk.js.map