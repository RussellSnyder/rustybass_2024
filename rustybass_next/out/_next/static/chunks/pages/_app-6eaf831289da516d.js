(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(435)}])},5634:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return s},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return f},ACTION_SERVER_ACTION:function(){return i},isThenable:function(){return c}});let l="refresh",o="navigate",u="restore",s="server-patch",a="prefetch",f="fast-refresh",i="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7149:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(4648),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return x}});let r=n(8754),l=n(5893),o=r._(n(7294)),u=n(5203),s=n(298),a=n(1024),f=n(5522),i=n(2208),c=n(5832),d=n(2497),p=n(7283),h=n(7149),y=n(9290),m=n(5634),b=new Set;function _(e,t,n,r,l,o){if(o||(0,s.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let l=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(l))return;b.add(l)}Promise.resolve(o?e.prefetch(t,l):e.prefetch(t,n,r)).catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let x=o.default.forwardRef(function(e,t){let n,r;let{href:a,as:b,children:x,prefetch:v=null,passHref:g,replace:O,shallow:C,scroll:N,locale:E,onClick:P,onMouseEnter:R,onTouchStart:w,legacyBehavior:T=!1,...M}=e;n=x,T&&("string"==typeof n||"number"==typeof n)&&(n=(0,l.jsx)("a",{children:n}));let A=o.default.useContext(c.RouterContext),k=o.default.useContext(d.AppRouterContext),I=null!=A?A:k,S=!A,L=!1!==v,U=null===v?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:F,as:H}=o.default.useMemo(()=>{if(!A){let e=j(a);return{href:e,as:b?j(b):e}}let[e,t]=(0,u.resolveHref)(A,a,!0);return{href:e,as:b?(0,u.resolveHref)(A,b):t||e}},[A,a,b]),K=o.default.useRef(F),D=o.default.useRef(H);T&&(r=o.default.Children.only(n));let V=T?r&&"object"==typeof r&&r.ref:t,[B,X,Y]=(0,p.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(D.current!==H||K.current!==F)&&(Y(),D.current=H,K.current=F),B(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[H,V,F,Y,B]);o.default.useEffect(()=>{I&&X&&L&&_(I,F,H,{locale:E},{kind:U},S)},[H,F,X,E,L,null==A?void 0:A.locale,I,S,U]);let z={ref:q,onClick(e){T||"function"!=typeof P||P(e),T&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,l,u,a,f,i){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,s.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:u,locale:f,scroll:e}):t[l?"replace":"push"](r||n,{scroll:e})};i?o.default.startTransition(d):d()}(e,I,F,H,O,C,N,E,S)},onMouseEnter(e){T||"function"!=typeof R||R(e),T&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!S)&&_(I,F,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)},onTouchStart(e){T||"function"!=typeof w||w(e),T&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!S)&&_(I,F,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)}};if((0,f.isAbsoluteUrl)(H))z.href=H;else if(!T||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(H,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);z.href=t||(0,y.addBasePath)((0,i.addLocale)(H,e,null==A?void 0:A.defaultLocale))}return T?o.default.cloneElement(r,z):(0,l.jsx)("a",{...M,...z,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),l=n(9833),o="function"==typeof IntersectionObserver,u=new Map,s=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,f=a||!o,[i,c]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(f||i)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:l,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let l=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:l},s.push(n),u.set(n,t),t}(n);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),u.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!i){let e=(0,l.requestIdleCallback)(()=>c(!0));return()=>(0,l.cancelIdleCallback)(e)}},[f,n,t,i,d.current]),[p,i,(0,r.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},435:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p},metadata:function(){return d}});var r=n(5893);n(8457);var l=n(1163),o=n(1664),u=n.n(o);let s=e=>{let{className:t}=e,n=(0,l.useRouter)();return(0,r.jsx)("header",{className:"bg-white/50 ".concat(t," flex items-center justify-between"),children:(0,r.jsxs)("nav",{className:"max-w-screen-lg m-auto flex grow justify-between text-lg",children:[(0,r.jsx)("ul",{className:"w-full flex items-center",children:(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/",className:"text-3xl",children:"Rustybass"})})}),(0,r.jsx)("ul",{className:"w-full flex items-center justify-end",children:(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:"/blog",className:"".concat("text-lg px-4 py-10"," ").concat(n.pathname.startsWith("/blog")?"bg-slate-700/20":""),children:"Blog"})})})]})})};n(7294);let a=e=>{let{className:t}=e,n=new Date().getFullYear();return(0,r.jsx)("footer",{className:"".concat(t," bg-indigo-800 md:flex items-center justify-between"),children:(0,r.jsxs)("div",{className:"py-6 max-w-screen-lg m-auto md:flex grow justify-between text-lg",children:[(0,r.jsx)("div",{className:"w-full flex items-center justify-center md:justify-start mb-2 md:mb-0",children:(0,r.jsx)("p",{className:"",children:"The online home of Russell Snyder"})}),(0,r.jsx)("div",{className:"w-full flex items-center justify-center md:justify-end",children:(0,r.jsxs)("p",{children:["\xa9 ",n," Rustybass. All rights reserved."]})})]})})};var f=n(5300),i=n.n(f);function c(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{className:i().header}),(0,r.jsx)("main",{className:"".concat(i().main),children:(0,r.jsx)("div",{className:"max-w-screen-lg m-auto py-8",children:t})}),(0,r.jsx)(a,{className:i().footer})]})}let d={title:"Rustybass",description:"Home of Russell Snyder"};var p=e=>{let{Component:t,pageProps:n}=e;return(0,r.jsx)(c,{children:(0,r.jsx)(t,{...n})})}},8457:function(){},5300:function(e){e.exports={main:"layout_main__teCdZ",footer:"layout_footer__agPsP",header:"layout_header__kmos1"}},1664:function(e,t,n){e.exports=n(5494)},1163:function(e,t,n){e.exports=n(4546)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(4546)}),_N_E=e.O()}]);