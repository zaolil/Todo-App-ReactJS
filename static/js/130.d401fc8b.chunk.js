"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[130],{7130:function(e,n,s){s.r(n),s.d(n,{default:function(){return j}});var t=s(8489),i=s(3032),r=s(3430),o=s(4322),a=s.n(o),l=s(8057),c=s(6871),d=s(3504),m=s(2791),u=s(5978),g=s(6834),h=s(8182),_=s(6960),b=s(5931),p=s(1258),x=s(9652),v=s(184),f=(0,l.QM)({SignIn:{minHeight:"100vh"},signin__title:{fontSize:"5rem",marginBottom:"5rem"},signin__separate:{marginBottom:"2rem",fontSize:"1.5rem",color:"var(--text-color)"},signin__link:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"2rem",color:"var(--text-color)",fontSize:"1.6rem"},signin__link__light:{color:"var(--text-color-light) !important"},signin__input:{fontSize:"1.6rem",marginBottom:"1rem"},signin__error:{color:"red",textAlign:"left",fontSize:"1.3rem",marginBottom:"2rem"},input__mess:{color:"red",textAlign:"left",fontSize:"1.3rem",marginBottom:"2rem",marginLeft:"1.5rem"}});function j(){var e,n,s=f(),o=(0,c.s0)(),l=(0,u.I0)(),j=(0,m.useState)(""),N=(0,r.Z)(j,2),w=N[0],k=N[1],S=(0,g.cI)(),Z=S.register,y=S.handleSubmit,I=S.formState.errors,z=S.setFocus,B=function(){var e=(0,i.Z)(a().mark((function e(n){var s,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.Z)().login({username:n.username,password:n.password});case 3:s=e.sent,localStorage.setItem("user",JSON.stringify(s)),localStorage.setItem("accepted",(new Date).getTime()),k(""),_.Am.success("\ud83e\udd84 Loggin successfully!"),(0,p.Z)(s.token),l(x.Z.actions.setUser(s)),o("/collections"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(0),t=e.t0.response.data.message,k(t),_.Am.error(t);case 18:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,m.useEffect)((function(){z("username")}),[z]),(0,v.jsx)("div",{className:s.SignIn,children:(0,v.jsxs)("div",{className:"content",children:[(0,v.jsx)("h1",{className:s.signin__title,children:"Sign In."}),(0,v.jsxs)("div",{className:"buttons w-100",children:[(0,v.jsxs)("button",{className:"button btn--border btn--hover-border btn--full-width btn--flex btn--hover-trans",children:[(0,v.jsx)("div",{className:"button__icon",children:(0,v.jsx)("ion-icon",{name:"logo-google"})}),(0,v.jsx)("div",{className:"button__text",children:"Continue with Google"})]}),(0,v.jsxs)("button",{className:"button btn--border btn--hover-border btn--full-width btn--flex btn--hover-trans",children:[(0,v.jsx)("div",{className:"button__icon",children:(0,v.jsx)("ion-icon",{name:"logo-facebook"})}),(0,v.jsx)("div",{className:"button__text",children:"Continue with Facebook"})]})]}),(0,v.jsx)("div",{className:s.signin__separate,children:"or"}),(0,v.jsxs)("form",{onSubmit:y(B),className:"w-100",children:[(0,v.jsxs)("div",{className:"inputs",children:[(0,v.jsxs)("div",{className:(0,h.Z)(s.input__group),children:[(0,v.jsx)("input",(0,t.Z)({className:(0,h.Z)(s.signin__input,"input--border input--focus-border btn--full-width",I.username&&"btn--border-error"),type:"text",placeholder:"Username"},Z("username",{required:"This is required.",minLength:{value:4,message:"Min length is 4"}}))),0!==Object.keys(I).length&&(0,v.jsx)("div",{className:(0,h.Z)(s.input__mess),children:null===(e=I.username)||void 0===e?void 0:e.message})]}),(0,v.jsxs)("div",{className:(0,h.Z)(s.input__group),children:[(0,v.jsx)("input",(0,t.Z)({className:(0,h.Z)(s.signin__input,"input--border input--focus-border btn--full-width",I.password&&"btn--border-error"),type:"password",placeholder:"Password"},Z("password",{required:"This is required.",minLength:{value:4,message:"Min length is 4"}}))),0!==Object.keys(I).length&&(0,v.jsx)("div",{className:(0,h.Z)(s.input__mess),children:null===(n=I.password)||void 0===n?void 0:n.message})]})]}),(0,v.jsx)("button",{type:"submit",className:"button btn--bg-pink btn--bb-pink btn--none-border w-100",children:(0,v.jsx)("span",{className:"button__text",children:"Sign In"})}),(0,v.jsx)("div",{className:s.signin__error,children:w})]}),(0,v.jsxs)("div",{className:s.signin__link,children:[(0,v.jsx)("span",{children:"Don't have an account?"}),(0,v.jsx)(d.rU,{to:"/users/signUp",className:s.signin__link__light,children:"Sign up"})]}),(0,v.jsx)("div",{className:(0,h.Z)(s.signin__link,s.signin__link__light),children:"Forgot password?"}),(0,v.jsxs)(d.rU,{to:"/",className:s.signin__link,children:[(0,v.jsx)("ion-icon",{name:"arrow-back-outline"}),(0,v.jsx)("div",{children:"Back to Home"})]})]})})}}}]);
//# sourceMappingURL=130.d401fc8b.chunk.js.map