(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{111:function(e,t,n){e.exports={usersBlock:"Users_usersBlock__3lrGS",pagination:"Users_pagination__3uGS7",usersList:"Users_usersList__B9qt-"}},125:function(e,t,n){e.exports={mainBox:"Friends_mainBox__2_WYY"}},129:function(e,t,n){e.exports={logoBlock:"LoginPage_logoBlock__1jHwz",loginHelper:"LoginPage_loginHelper__1YA7G"}},132:function(e,t,n){e.exports={userBlock:"User_userBlock__5u9Qt",userPhoto:"User_userPhoto__eDSXr"}},136:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return g}));var r=n(25),a=n(7),c=n(5),s=n(15),o=n.n(s),i=n(198),A=n(45),u=n(26),l={posts:[{id:"1",message:"Hello, my name's Ivan",likesCount:5},{id:"2",message:"I'm fine, thanks",likesCount:22},{id:"3",message:"I'm not fine",likesCount:202}],profile:{},status:""},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:Object(i.a)(),message:t.textForNewPost,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}},j=function(e){return{type:"ADD-POST",textForNewPost:e}},b=function(e){return{type:"SET-STATUS",status:e}},p=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.c.getProfile(e);case 3:r=t.sent,n({type:"SET-USER-PROFILE",profile:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(u.e)("Some error occurred getting userProfile"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.b.getStatus(e);case 3:r=t.sent,n(b(r.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(u.e)("Some error occurred getting userStatus"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(b(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(u.e)("Some error occurred updating userStatus"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.b.savePhoto(e);case 3:0===(r=t.sent).data.resultCode&&n({type:"SAVE-PHOTO-SUCCESS",photos:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(Object(u.e)("Some error occurred saving userPhoto"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n,r){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.b.saveProfile(e);case 3:if(0!==t.sent.data.resultCode){t.next=8;break}return a=r().auth.userId,t.next=8,n(p(a));case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(Object(u.e)("Some error occurred saving userProfile"));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(5),a=n(61),c=n(28),s=(n(0),n(30)),o=n(2),i=["isAuth"],A=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(s.b)(A,{})((function(t){var n=t.isAuth,s=Object(a.a)(t,i);return console.log(n),n?Object(o.jsx)(e,Object(r.a)({},s)):Object(o.jsx)(c.a,{to:"login"})}))}},177:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(7),a=n(5),c=n(198),s={messages:[{id:"1",isYou:!1,message:"Hello",img:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"},{id:"2",isYou:!0,message:"Hi, I'm Ivan, I have a proposal for you!",img:"https://www.nicepng.com/png/detail/914-9142519_doge-meme-dog-doggo-funny-sticker-momo-png.png"},{id:"3",isYou:!1,message:"Yea? What's up with a proposal?!",img:"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"}],dialogs:[{id:"1",name:"Sergey"},{id:"2",name:"Mark"},{id:"3",name:"Alexandr"},{id:"4",name:"Mike"},{id:"5",name:"John"},{id:"6",name:"Fill"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if("ADD-NEW-MESSAGE"===t.type){var n={id:Object(c.a)(),isYou:!0,message:t.newMessage,img:"https://www.nicepng.com/png/detail/914-9142519_doge-meme-dog-doggo-funny-sticker-momo-png.png"};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[Object(a.a)({},n)])})}return e},i=function(e){return{type:"ADD-NEW-MESSAGE",newMessage:e}}},219:function(e,t,n){},220:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return p}));var r=n(25),a=n(5),c=n(15),s=n.n(c),o=n(45),i={userId:null,email:null,login:null,isAuth:!1,error:null,captchaUrl:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-ERROR":case"GET-CAPTCHA-URL-SUCCESS":case"AUTH/SET-USER-DATA":return Object(a.a)(Object(a.a)({},e),t.payload);default:return e}},u=function(e,t,n,r){return{type:"AUTH/SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},l=function(e){return{type:"APP/SET-ERROR",payload:{error:e}}},d=function(e){return{type:"GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},j=function(){return function(){var e=Object(r.a)(s.a.mark((function e(t){var n,r,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.me();case 2:n=e.sent;try{0===n.data.resultCode&&(r=n.data.data,a=r.id,c=r.email,i=r.login,t(u(a,c,i,!0))),n.data.messages&&n.data.messages.length>0&&t(l(n.data.messages[0]))}catch(s){t(l("Some error occurred getting user data"))}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,a){return function(){var c=Object(r.a)(s.a.mark((function r(c){var i;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(e,t,n,a);case 2:if(i=r.sent,r.prev=3,0===i.data.resultCode&&c(j()),10!==i.data.resultCode){r.next=8;break}return r.next=8,c(f());case 8:i.data.messages.length&&c(l(i.data.messages[0])),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),c(l("Some error occurred during authorisation"));case 14:case"end":return r.stop()}}),r,null,[[3,11]])})));return function(e){return c.apply(this,arguments)}}()},p=function(){return function(){var e=Object(r.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&t(u(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(r.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.getCaptcha();case 3:n=e.sent,r=n.data.url,t(d(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("Some error occurred related to captcha");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}},348:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(55),s=n.n(c),o=(n(219),n(22)),i=n(23),A=n(31),u=n(32),l=(n(220),n(42)),d=n.n(l),j=n(39),b=n(125),p=n.n(b),f=n(2),h=function(e){return Object(f.jsx)("div",{className:p.a.mainBox,children:Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:p.a.ava,children:[Object(f.jsx)("img",{alt:"",src:e.img}),Object(f.jsx)("p",{children:e.name})]})})})},O=n(30),g=n(443),m=function(){var e=Object(O.d)((function(e){return e.sideBar.friends})).map((function(e){return Object(f.jsx)(h,{name:e.name,img:e.img})}));return Object(f.jsxs)("nav",{className:d.a.nav,children:[Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/profile",className:d.a.link,activeClassName:d.a.activeStyle,children:"Profile"})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/dialogs",className:d.a.link,activeClassName:d.a.activeStyle,children:"Messages"})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{className:d.a.link,to:"/users",activeClassName:d.a.activeStyle,children:"Users"})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{className:d.a.link,to:"/news",activeClassName:d.a.activeStyle,children:"News"})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{className:d.a.link,to:"/music",activeClassName:d.a.activeStyle,children:"Music"})}),Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{className:d.a.link,to:"/settings",activeClassName:d.a.activeStyle,children:"Settings"})}),Object(f.jsx)("div",{className:d.a.friendsBlock,children:Object(f.jsxs)(g.a,{style:{background:"#b68f38"},elevation:4,children:[Object(f.jsx)("h1",{children:"Friends"}),Object(f.jsx)("div",{className:d.a.friendsList,children:e})]})})]})},v=function(e){return Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"100px"},children:Object(f.jsx)("h1",{style:{color:"black"},children:"Just settings"})})},x=function(e){return Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"100px"},children:Object(f.jsx)("h1",{style:{color:"black"},children:"The only truth is music "})})},y=function(e){return Object(f.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"100px"},children:Object(f.jsx)("h1",{style:{color:"black"},children:"News are coming for us"})})},S=n(28),w=n(61),T=n(89),C=n.n(T),N=n(439),P=n(444),E=n(445),k=n(446),L=n.p+"static/media/logoSmaller.9659fc17.jpg",F=["logoutTC"],R=function(e){var t=e.logoutTC,n=Object(w.a)(e,F),r=Object(O.c)();return Object(f.jsx)(P.a,{sx:{flexGrow:1},className:C.a.header,children:Object(f.jsx)(E.a,{position:"static",style:{background:"#34421e"},children:Object(f.jsxs)(k.a,{className:C.a.toolbar,children:[Object(f.jsx)("img",{alt:"\u041b\u043e\u0433\u043e",src:L}),Object(f.jsxs)("div",{className:C.a.loginBlock,children:[n.authState.isAuth?Object(f.jsxs)("div",{className:C.a.loginNameAndLogOut,children:[n.authState.login,Object(f.jsx)(N.a,{variant:"contained",style:{margin:"13px"},onClick:function(){return r(t())},children:"Log out"})]}):Object(f.jsx)(j.b,{to:"/login",children:"Login"})," "]})]})})})},G=n(26),z=function(e){Object(A.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)(R,{authState:this.props.authState,logoutTC:G.d})}}]),n}(a.a.Component),U=Object(O.b)((function(e){return{authState:e.auth}}),{logoutTC:G.d})(z),X=n(5),B=n(51),W=n(436),J=n(440),q=n(425),Q=n(432),V=n(429),K=n(84),I=n(142),Y=n(441),Z=n(129),D=n.n(Z),H=n(442),M=K.b().shape({email:K.c().email("Invalid email address").required("Required"),password:K.c().min(4,"Must be longer than 2 characters").max(20).required("Required"),rememberMe:K.a()}),_=function(e){var t=Object(O.c)(),n=Object(O.d)((function(e){return e.auth.isAuth})),r=Object(O.d)((function(e){return e.auth.captchaUrl})),a=Object(B.e)({resolver:Object(I.a)(M)}),c=a.handleSubmit,s=a.control,o=a.formState.errors,i=function(e){t(Object(G.c)(e.email,e.password,e.rememberMe,e.captchaSymbols))};return n?Object(f.jsx)(S.a,{to:"/profile"}):Object(f.jsx)(W.a,{container:!0,justifyContent:"center",style:{marginTop:"100px"},children:Object(f.jsx)(g.a,{elevation:4,style:{padding:"30px"},children:Object(f.jsxs)(W.a,{item:!0,justifyContent:"center",style:{maxWidth:"450px"},children:[Object(f.jsx)("div",{className:D.a.logoBlock,children:Object(f.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo"})}),Object(f.jsxs)(J.a,{onSubmit:c(i),style:{marginTop:"15px"},children:[Object(f.jsx)(B.a,{name:"email",control:s,render:function(e){var t,n=e.field;return Object(f.jsx)(q.a,Object(X.a)(Object(X.a)({},n),{},{label:"Email",type:"email",margin:"normal",error:!!o.email,helperText:null!==o&&void 0!==o&&o.email?null===o||void 0===o||null===(t=o.email)||void 0===t?void 0:t.message:""}))}}),Object(f.jsx)(B.a,{name:"password",control:s,render:function(e){var t,n=e.field;return Object(f.jsx)(q.a,Object(X.a)(Object(X.a)({},n),{},{type:"password",label:"Password",margin:"normal",error:!!o.password,helperText:null!==o&&void 0!==o&&o.password?null===o||void 0===o||null===(t=o.password)||void 0===t?void 0:t.message:""}))}}),Object(f.jsx)(Q.a,{label:"Remember me",control:Object(f.jsx)(B.a,{name:"rememberMe",control:s,render:function(e){var t=e.field;return Object(f.jsx)(V.a,Object(X.a)({},t))}})}),Object(f.jsx)(N.a,{style:{marginTop:"15px",width:"50%",alignSelf:"center"},variant:"contained",color:"primary",onClick:c(i),children:"Sign in"}),r&&Object(f.jsxs)("div",{style:{marginTop:"15px"},children:[Object(f.jsx)(B.a,{name:"captchaSymbols",control:s,render:function(e){var t=e.field;return Object(f.jsx)(Y.a,Object(X.a)(Object(X.a)({},t),{},{type:"text",placeholder:"Type symbols here"}))}}),Object(f.jsx)("br",{}),Object(f.jsx)("img",{src:r,alt:"captcha"})]}),Object(f.jsx)("div",{className:D.a.loginHelper,children:Object(f.jsxs)(H.a,{children:["To log in get registered ",Object(f.jsx)("a",{href:"https://social-network.samuraijs.com/",children:"here"}),Object(f.jsx)("br",{})," or use common test account credentials: Email: ivanfestina@gmail.com Password: free"]})})]})]})})})},$=n(111),ee=n.n($),te=n(427),ne=n(132),re=n.n(ne),ae=n(437),ce=function(e){e.key;var t,n,r=e.user,a=e.usersPage,c=e.followTC,s=e.unFollowTC;return Object(f.jsxs)("div",{className:re.a.userBlock,children:[Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/profile/"+r.id,children:Object(f.jsx)("img",{src:null!=r.photos.small?r.photos.small:"data:image/png;base64,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",className:re.a.userPhoto,alt:""})})}),Object(f.jsx)("div",{children:r.followed?Object(f.jsx)(ae.a,{variant:"contained",size:"small",disabled:a.followingInProgress.some((function(e){return e===r.id})),onClick:function(){s(r.id)},children:"Unfollow"}):Object(f.jsx)(ae.a,{variant:"contained",size:"small",disabled:a.followingInProgress.some((function(e){return e===r.id})),onClick:function(){c(r.id)},children:"Follow"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:r.name}),Object(f.jsx)("div",{children:r.status})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:null===(t=r.location)||void 0===t?void 0:t.country}),Object(f.jsx)("div",{children:null===(n=r.location)||void 0===n?void 0:n.city})]})]})},se=function(e){var t=e.onPageChanged,n=e.usersPage,r=e.followTC,a=e.unFollowTC,c=Math.ceil(n.totalUsersCount/n.pageSize);return Object(f.jsxs)("div",{className:ee.a.usersBlock,children:[Object(f.jsx)("div",{className:ee.a.pagination,children:Object(f.jsx)(te.a,{count:c,variant:"outlined",color:"primary",onChange:t})}),Object(f.jsx)("div",{className:ee.a.usersList,children:n.users.map((function(e){return Object(f.jsx)(ce,{user:e,usersPage:n,followTC:r,unFollowTC:a},e.id)}))})]})},oe=n(25),ie=n(7),Ae=n(15),ue=n.n(Ae),le=n(45),de={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},je=function(e,t){return{type:"FOLLOW-UNFOLLOW",userID:e,isFollowing:t}},be=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},pe=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},fe=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},he=n(60),Oe=n(141),ge=n(193),me=function(e){return e.usersPage},ve=(Object(ge.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),n(438)),xe=function(e){Object(A.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t,n){e.props.getUsersTC(n,e.props.usersPage.pageSize)},e.render=function(){return Object(f.jsxs)(f.Fragment,{children:[e.props.usersPage.isFetching?Object(f.jsx)(ve.a,{}):null,Object(f.jsx)(se,{usersPage:e.props.usersPage,onPageChanged:e.onPageChanged,followTC:e.props.followTC,unFollowTC:e.props.unFollowTC})]})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTC(this.props.usersPage.currentPage,this.props.usersPage.pageSize)}}]),n}(a.a.Component),ye=Object(he.compose)(Object(O.b)((function(e){return{usersPage:me(e)}}),{setCurrentPageAC:be,getUsersTC:function(e,t){return function(){var n=Object(oe.a)(ue.a.mark((function n(r){var a;return ue.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(pe(!0)),n.prev=1,r(be(e)),n.next=5,le.c.getUsers(e,t);case 5:a=n.sent,r({type:"SET-USERS",users:a.data.items}),r({type:"SET-TOTAL-USERS-COUNT",count:a.data.totalCount}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),r(Object(G.e)("Some error occurred related to pagination"));case 13:return n.prev=13,r(pe(!1)),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[1,10,13,16]])})));return function(e){return n.apply(this,arguments)}}()},followTC:function(e){return function(){var t=Object(oe.a)(ue.a.mark((function t(n){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(fe(!0,e)),t.prev=1,t.next=4,le.c.follow(e);case 4:0===t.sent.data.resultCode&&n(je(e,!0)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(Object(G.e)("error occurred toggling fallow"));case 11:return t.prev=11,n(fe(!1,e)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},unFollowTC:function(e){return function(){var t=Object(oe.a)(ue.a.mark((function t(n){return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(fe(!0,e)),t.prev=1,t.next=4,le.c.unfollow(e);case 4:0===t.sent.data.resultCode&&n(je(e,!1)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(Object(G.e)("error occurred toggling unFallow"));case 11:return t.prev=11,n(fe(!1,e)),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()}}),S.g,Oe.a)(xe),Se=n(426),we=n(431),Te=a.a.forwardRef((function(e,t){return Object(f.jsx)(Se.a,Object(X.a)({elevation:6,ref:t,variant:"filled"},e))}));function Ce(){var e=Object(O.d)((function(e){return e.auth.error})),t=Object(O.c)(),n=function(e,n){"clickaway"!==n&&t(Object(G.e)(null))};return Object(f.jsx)(we.a,{open:null!==e,autoHideDuration:6e3,onClose:n,children:Object(f.jsx)(Te,{onClose:n,severity:"error",sx:{width:"100%"},children:e})})}var Ne=n(189),Pe=n(136),Ee=n(177),ke={friends:[{id:"1",name:"Kate",img:"https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"},{id:"2",name:"Alex",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNnnWBcyIHwEjBSRe4e66_YfVmxzrYi1NwQ&usqp=CAU"},{id:"3",name:"Gregory",img:"https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"}]},Le=n(190),Fe={initialized:!1},Re=Object(he.combineReducers)({profilePage:Pe.d,dialogsPage:Ee.b,sideBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;return t.type,e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-UNFOLLOW":return Object(X.a)(Object(X.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(X.a)(Object(X.a)({},e),{},{followed:t.isFollowing}):e}))});case"SET-USERS":return Object(X.a)(Object(X.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(X.a)(Object(X.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(X.a)(Object(X.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(X.a)(Object(X.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(X.a)(Object(X.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(ie.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:G.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;return"INITIALIZED-SUCCESS"===t.type?Object(X.a)(Object(X.a)({},e),{},{initialized:t.initialized}):e}}),Ge=Object(he.createStore)(Re,Object(Ne.composeWithDevTools)(Object(he.applyMiddleware)(Le.a)));window.store=Ge;var ze=n(91),Ue=n.n(ze),Xe=n.p+"static/media/cat.959920fc.png",Be=function(){return Object(f.jsxs)("div",{className:Ue.a.box,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:Ue.a.child_box1,children:"404"}),Object(f.jsx)("div",{className:Ue.a.child_box2,children:"\u0423\u043f\u0441! \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(f.jsx)("div",{className:Ue.a.child_box2,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]}),Object(f.jsx)("img",{src:Xe,alt:Xe})]})},We=n(435),Je=a.a.lazy((function(){return n.e(4).then(n.bind(null,480))})),qe=a.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,478))})),Qe=function(e){Object(A.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(f.jsx)("div",{children:Object(f.jsxs)(We.a,{container:!0,children:[Object(f.jsx)(Ce,{}),this.props.isAuth&&Object(f.jsx)(We.a,{item:!0,xs:12,children:Object(f.jsx)(U,{})}),this.props.isAuth&&Object(f.jsx)(We.a,{item:!0,xs:3,children:Object(f.jsx)(m,{})}),Object(f.jsx)(We.a,{item:!0,xs:9,className:"rightBar",children:Object(f.jsxs)(S.d,{children:[Object(f.jsx)(S.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(S.a,{to:"/login"})}}),Object(f.jsx)(S.b,{path:"/login",render:function(){return Object(f.jsx)(_,{})}}),Object(f.jsx)(S.b,{path:"/dialogs",render:function(){return Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(ve.a,{}),children:Object(f.jsx)(Je,{})})}}),Object(f.jsx)(S.b,{path:"/profile/:userId?",render:function(){return Object(f.jsx)(r.Suspense,{fallback:Object(f.jsx)(ve.a,{}),children:Object(f.jsx)(qe,{})})}}),Object(f.jsx)(S.b,{path:"/news",component:y}),Object(f.jsx)(S.b,{path:"/music",render:function(){return Object(f.jsx)(x,{})}}),Object(f.jsx)(S.b,{path:"/settings",render:function(){return Object(f.jsx)(v,{})}}),Object(f.jsx)(S.b,{path:"/users",render:function(){return Object(f.jsx)(ye,{})}}),Object(f.jsx)(S.b,{path:"*",render:function(){return Object(f.jsx)(Be,{})}})]})})]})}):Object(f.jsx)(ve.a,{})}}]),n}(a.a.Component),Ve=Object(he.compose)(S.g,Object(O.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{getAuthUserDataTC:G.b,initializeAppTC:function(){return function(){var e=Object(oe.a)(ue.a.mark((function e(t){var n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=t(Object(G.b)()),Promise.all([n]).then((function(){return t({type:"INITIALIZED-SUCCESS",initialized:!0})}))}catch(r){t(Object(G.e)("Initializing Error"))}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setAppErrorAC:G.e}))(Qe),Ke=function(e){return Object(f.jsx)(j.a,{children:Object(f.jsx)(O.a,{store:Ge,children:Object(f.jsx)(Ve,{})})})};s.a.render(Object(f.jsx)(Ke,{}),document.getElementById("root"))},42:function(e,t,n){e.exports={link:"Navbar_link__3zSco",nav:"Navbar_nav__3AAxO",activeStyle:"Navbar_activeStyle__1qYCU",friendsBlock:"Navbar_friendsBlock__3yzJB",friendsList:"Navbar_friendsList__2MVB5"}},45:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(184),a=n.n(r).a.create({withCredentials:!0,headers:{"API-KEY":"a9e10d5c-9ead-42c9-9cb1-b55bfc571047"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?Page=".concat(e,"&count=").concat(t))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object"),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")},getCaptcha:function(){return a.get("/security/get-captcha-url")}}},89:function(e,t,n){e.exports={header:"Header_header__3xlQX",toolbar:"Header_toolbar__1OE6m",loginBlock:"Header_loginBlock__1E9PJ",loginNameAndLogOut:"Header_loginNameAndLogOut__1d-7c"}},91:function(e,t,n){e.exports={box:"Error404_box__10ptO",child_box1:"Error404_child_box1__1OGG9",child_box2:"Error404_child_box2__1GsQy",child_box3:"Error404_child_box3__28eDp"}}},[[348,1,2]]]);
//# sourceMappingURL=main.6cdbf6c7.chunk.js.map