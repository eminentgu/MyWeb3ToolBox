"use strict";(self["webpackChunkwinktool"]=self["webpackChunkwinktool"]||[]).push([[495],{3203:function(e,t,n){n.d(t,{No:function(){return i},Rt:function(){return c},gS:function(){return s},mp:function(){return a},s:function(){return d},tL:function(){return r},xJ:function(){return l}});var o=n(4054);function l(e){return o.Z.post("/nftkit-web-account-server/index/signin",e)}function r(e){return o.Z.get("/nftkit-web-account-server/index/twitterLogin",e)}function a(e){return o.Z.post("/nftkit-web-account-server/index/twitterLoginCallback",e)}function s(e){return o.Z.get("/nftkit-web-account-server/index/userInfo",e)}function i(e){return o.Z.get("/nftkit-web-account-server/index/twitterDisconnect",e)}function d(e){return o.Z.post("/nftkit-web-account-server/index/email",e)}function c(e){return o.Z.post("/nftkit-web-account-server/index/notification",e)}},4054:function(e,t,n){var o=n(9669),l=n.n(o),r=n(3824),a=n(5982);const s=(0,a.Z)(),i=l().create({baseURL:"https://www.winktool.com",timeout:6e4,responseType:"json"});i.interceptors.request.use((e=>{const t=s.token,n=s.refreshToken;return t&&(e.headers["x-web-token"]=t),n&&(e.headers["x-web-refresh-token"]=n),e}),(e=>Promise.reject(e))),i.interceptors.response.use((e=>(console.log("res",e),401===e.data.status&&(console.log("需要登录"),r.Z.push("/account/signin")),e.data)),(e=>{console.log("onError",e.response);const t=parseInt(e.response&&e.response.status);e.response&&e.response.data&&e.response.data.data;return 401!==t&&20001!==t||(console.log("需要登录",r.Z),r.Z.push("/account/signin")),Promise.reject(e)})),t["Z"]=i},3744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[o,l]of t)n[o]=l;return n}},5495:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(8222),l=n(1348),r=n(2201),a=n(5982),s=n(3203);const i=e=>((0,o.pushScopeId)("data-v-14e3e955"),e=e(),(0,o.popScopeId)(),e),d=(0,o.createStaticVNode)('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 33" data-v-14e3e955><path fill="#E17726" stroke="#E17726" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M32.96 1l-13.14 9.72 2.45-5.73L32.96 1z" data-v-14e3e955></path><path fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M2.66 1l13.02 9.8L13.35 5 2.66 1zm25.57 22.53l-3.5 5.34 7.49 2.06 2.14-7.28-6.13-.12zm-26.96.12l2.13 7.28 7.47-2.06-3.48-5.34-6.12.12z" data-v-14e3e955></path><path fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M10.47 14.51l-2.08 3.14 7.4.34-.24-7.97-5.08 4.5zm14.68.01l-5.16-4.6-.17 8.07 7.4-.34-2.07-3.13zM10.87 28.87l4.49-2.16-3.86-3-.63 5.16zm9.4-2.17l4.46 2.17-.6-5.17-3.86 3z" data-v-14e3e955></path><path fill="#D5BFB2" stroke="#D5BFB2" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M24.73 28.87l-4.46-2.16.36 2.9-.04 1.23 4.14-1.97zm-13.86 0l4.16 1.97-.03-1.23.36-2.9-4.49 2.16z" data-v-14e3e955></path><path fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M15.1 21.78l-3.7-1.08 2.62-1.2 1.09 2.28zm5.41 0l1.1-2.29 2.63 1.2-3.73 1.1z" data-v-14e3e955></path><path fill="#CC6228" stroke="#CC6228" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M10.87 28.87l.65-5.34-4.13.12 3.48 5.22zm13.23-5.34l.63 5.34 3.5-5.22-4.13-.12zm3.13-5.88l-7.4.34.68 3.8 1.1-2.3 2.63 1.2 2.99-3.04zM11.4 20.7l2.62-1.2 1.09 2.28.69-3.8-7.4-.33 3 3.05z" data-v-14e3e955></path><path fill="#E27525" stroke="#E27525" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M8.4 17.65l3.1 6.05-.1-3-3-3.05zm15.84 3.05l-.12 3 3.1-6.05-2.98 3.05zm-8.44-2.71l-.7 3.8.88 4.48.2-5.91-.38-2.37zm4.02 0l-.36 2.36.18 5.92.87-4.49-.69-3.8z" data-v-14e3e955></path><path fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M20.51 21.78l-.87 4.49.63.44 3.85-3 .12-3.01-3.73 1.08zM11.4 20.7l.1 3 3.86 3 .62-.43-.87-4.49-3.72-1.08z" data-v-14e3e955></path><path fill="#C0AC9D" stroke="#C0AC9D" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M20.6 30.84l.03-1.23-.34-.28h-4.96l-.33.28.03 1.23-4.16-1.97 1.46 1.2 2.95 2.03h5.05l2.96-2.04 1.44-1.19-4.14 1.97z" data-v-14e3e955></path><path fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M20.27 26.7l-.63-.43h-3.66l-.62.44-.36 2.9.33-.28h4.96l.34.28-.36-2.9z" data-v-14e3e955></path><path fill="#763E1A" stroke="#763E1A" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M33.52 11.35L34.62 6l-1.66-5-12.7 9.4 4.89 4.11 6.9 2.01 1.52-1.77-.66-.48 1.05-.96-.8-.62 1.05-.8-.7-.54zM1 5.99l1.12 5.36-.72.53 1.07.8-.8.63 1.04.96-.66.48 1.52 1.77 6.9-2 4.89-4.13L2.66 1 1 5.99z" data-v-14e3e955></path><path fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round" stroke-width=".25" d="M32.05 16.52l-6.9-2 2.08 3.13-3.1 6.05 4.1-.05h6.13l-2.31-7.13zm-21.58-2.01l-6.9 2.01-2.3 7.13H7.4l4.1.05-3.1-6.05 2.08-3.14zm9.35 3.48l.45-7.6 2-5.4h-8.92l2 5.4.45 7.6.17 2.38v5.9h3.67l.02-5.9.16-2.38z" data-v-14e3e955></path></svg>',1),c=[d],h=i((()=>(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("span",{class:"signin-title"},"Connect your wallet"),(0,o.createElementVNode)("p",{class:"signin-description"}," 链接你的钱包并进行签名。此签名仅用于验证用户真实性，不会产生Gas费用。如用户存在则登陆，不存在则进行注册。 ")],-1))),u={class:"signin-operation"},p=i((()=>(0,o.createElementVNode)("svg",{width:"29",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.createElementVNode)("path",{d:"m8.51 22.98 3.67.972V22.68l.299-.3h2.096v2.545h-2.246l-2.77-1.197-1.048-.749Z",fill:"#CDBDB2"}),(0,o.createElementVNode)("path",{d:"m20.49 22.98-3.594.972V22.68l-.3-.3H14.5v2.545h2.246l2.77-1.197.973-.749Z",fill:"#CDBDB2"}),(0,o.createElementVNode)("path",{d:"m12.479 20.21-.3 2.47.374-.3h3.893l.45.3-.3-2.47-.599-.375-2.994.075-.524.3Z",fill:"#393939"}),(0,o.createElementVNode)("path",{d:"m10.457 3.518 1.797 4.192.824 12.2h2.92l.898-12.2 1.647-4.192h-8.086Z",fill:"#F89C35"}),(0,o.createElementVNode)("path",{d:"M2.596 12.725.5 18.787l5.24-.299h3.37v-2.62l-.15-5.389-.749.599-5.615 1.647Z",fill:"#F89D35"}),(0,o.createElementVNode)("path",{d:"m6.564 13.398 6.14.15-.674 3.144-2.92-.749-2.546-2.545Z",fill:"#D87C30"}),(0,o.createElementVNode)("path",{d:"m6.564 13.473 2.546 2.395v2.396l-2.546-4.79Z",fill:"#EA8D3A"}),(0,o.createElementVNode)("path",{d:"m9.11 15.943 2.994.749.974 3.219-.675.374-3.293-1.946v-2.396Z",fill:"#F89D35"}),(0,o.createElementVNode)("path",{d:"m9.11 18.338-.6 4.641 3.969-2.77-3.37-1.87Z",fill:"#EB8F35"}),(0,o.createElementVNode)("path",{d:"m12.703 13.548.375 6.362-1.123-3.256.748-3.106Z",fill:"#EA8E3A"}),(0,o.createElementVNode)("path",{d:"m5.666 18.413 3.444-.075-.6 4.641-2.844-4.566Z",fill:"#D87C30"}),(0,o.createElementVNode)("path",{d:"m2.147 25 6.364-2.021-2.845-4.566-5.166.374L2.147 25Z",fill:"#D87C30"}),(0,o.createElementVNode)("path",{d:"m12.254 7.71-3.22 2.694-2.47 2.994 6.14.225-.45-5.914Z",fill:"#E8821E"}),(0,o.createElementVNode)("path",{d:"m8.51 22.98 3.969-2.77-.3 2.395v1.348l-2.695-.524-.973-.45ZM20.49 22.98l-3.894-2.77.3 2.395v1.348l2.695-.524.898-.45Z",fill:"#DFCEC3"}),(0,o.createElementVNode)("path",{d:"m11.056 14.896.824 1.72-2.92-.748 2.096-.973Z",fill:"#393939"}),(0,o.createElementVNode)("path",{d:"m2.072 0 10.182 7.71-1.721-4.192L2.073 0Z",fill:"#E88F35"}),(0,o.createElementVNode)("path",{d:"M2.072 0 .725 4.116l.748 4.492-.524.299.749.674-.6.524.824.748-.523.449 1.198 1.497 5.615-1.721s4.117-3.293 4.043-3.368C12.18 7.635 2.072 0 2.072 0Z",fill:"#8E5A30"}),(0,o.createElementVNode)("path",{d:"m26.404 12.725 2.096 6.062-5.24-.299h-3.37v-2.62l.15-5.389.749.599 5.615 1.647Z",fill:"#F89D35"}),(0,o.createElementVNode)("path",{d:"m22.436 13.398-6.14.15.675 3.144 2.92-.749 2.545-2.545Z",fill:"#D87C30"}),(0,o.createElementVNode)("path",{d:"m22.436 13.473-2.546 2.395v2.396l2.546-4.79Z",fill:"#EA8D3A"}),(0,o.createElementVNode)("path",{d:"m19.89 15.943-2.994.749-.974 3.219.675.374 3.293-1.946v-2.396Z",fill:"#F89D35"}),(0,o.createElementVNode)("path",{d:"m19.89 18.338.6 4.641-3.894-2.694 3.294-1.947Z",fill:"#EB8F35"}),(0,o.createElementVNode)("path",{d:"m16.297 13.548-.375 6.362 1.123-3.256-.748-3.106Z",fill:"#EA8E3A"}),(0,o.createElementVNode)("path",{d:"m23.334 18.413-3.444-.075.6 4.641 2.844-4.566Z",fill:"#D87C30"}),(0,o.createElementVNode)("path",{d:"m26.853 25-6.364-2.021 2.845-4.566 5.166.374L26.853 25Z",fill:"#D87C30"}),(0,o.createElementVNode)("path",{d:"m16.746 7.71 3.22 2.694 2.47 2.994-6.14.225.45-5.914Z",fill:"#E8821E"}),(0,o.createElementVNode)("path",{d:"m17.944 14.896-.824 1.72 2.92-.748-2.096-.973Z",fill:"#393939"}),(0,o.createElementVNode)("path",{d:"M26.928 0 16.746 7.71l1.722-4.192L26.928 0Z",fill:"#E88F35"}),(0,o.createElementVNode)("path",{d:"m26.928 0 1.347 4.116-.748 4.492.524.299-.749.674.6.524-.825.748.524.449-1.198 1.497-5.615-1.721s-4.117-3.293-4.043-3.368C16.82 7.635 26.928 0 26.928 0Z",fill:"#8E5A30"})],-1))),m=i((()=>(0,o.createElementVNode)("span",{class:"button-text"}," MetaMask",-1))),f={key:0,class:"buy-btn"},k=(0,o.createTextVNode)("购买PASS卡");var E=(0,o.defineComponent)({__name:"index",setup(e){const t=(0,r.tv)(),n=((0,r.yj)(),(0,a.Z)());function i(){chrome.windows.create({url:`chrome-extension://${n.metamaskId}/home.html`,position:"center",width:730,height:700})}const d=(0,o.ref)(!1),E=((0,o.ref)([]),window.ethereum);async function w(){if(E){if(!E._state.isConnected)return void setTimeout((()=>{let e=nw.Window.get();e.reload()}),1e3);let o=[];try{E.on("accountsChanged",(function(e){console.log("safdasdsadasdsadsa")})),o=await E.request({method:"eth_requestAccounts"}),console.log("accounts",o)}catch(e){console.log("error",e),-32002==e.code&&chrome.windows.create({url:`chrome-extension://${n.metamaskId}/home.html`,position:"center",width:730,height:700})}const r=await E.request({method:"eth_chainId"});console.log("chainId",r);const a="Signin",i=o[0],c=await E.request({method:"personal_sign",params:[a,i]});console.log("signature",c);const h=await(0,s.xJ)({address:i,signature:c});console.log("response",h),0===h.code?(console.log("response.data.token",h.data.token),n.set_token(h.data.token),n.set_refreshToken(h.data.refreshToken),n.set_userInfo(h.data.userInfo),t.push("/premint/list")):(d.value=!0,(0,l.z8)({type:"error",message:h.message}))}}async function v(){nw.Shell.openExternal("https://opensea.io/collection/longzu-pass")}return(0,o.onBeforeMount)((()=>{console.log("onBeforeMount")})),(0,o.onMounted)((async()=>{console.log("onMounted"),setTimeout((()=>{if(!E._state.isConnected){let e=nw.Window.get();e.reload()}}),1e3),n.token&&n.refreshToken&&t.push("/account/profile")})),(e,t)=>{const n=(0,o.resolveComponent)("el-button"),l=(0,o.resolveComponent)("el-card");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",{class:"metamask",onClick:i},c),(0,o.createVNode)(l,{shadow:"never",class:"main-container"},{default:(0,o.withCtx)((()=>[h,(0,o.createElementVNode)("div",u,[(0,o.createVNode)(n,{class:"signin-button",size:"large",onClick:w},{default:(0,o.withCtx)((()=>[p,m])),_:1}),d.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",f,[(0,o.createVNode)(n,{type:"primary",onClick:v},{default:(0,o.withCtx)((()=>[k])),_:1})])):(0,o.createCommentVNode)("",!0)])])),_:1})])}}}),w=n(3744);const v=(0,w.Z)(E,[["__scopeId","data-v-14e3e955"]]);var g=v}}]);