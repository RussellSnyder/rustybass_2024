(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(1154)}])},5634:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return f},isThenable:function(){return s}});let o="refresh",l="navigate",u="restore",i="server-patch",a="prefetch",c="fast-refresh",f="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7149:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(4648),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(8754),o=n(5893),l=r._(n(7294)),u=n(5203),i=n(298),a=n(1024),c=n(5522),f=n(2208),s=n(5832),d=n(2497),p=n(7283),h=n(7149),b=n(9290),_=n(5634),v=new Set;function g(e,t,n,r,o,l){if(l||(0,i.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(l?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:v,children:m,prefetch:j=null,passHref:x,replace:C,shallow:O,scroll:E,locale:P,onClick:T,onMouseEnter:I,onTouchStart:M,legacyBehavior:R=!1,...N}=e;n=m,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let A=l.default.useContext(s.RouterContext),k=l.default.useContext(d.AppRouterContext),S=null!=A?A:k,L=!A,w=!1!==j,U=null===j?_.PrefetchKind.AUTO:_.PrefetchKind.FULL,{href:F,as:K}=l.default.useMemo(()=>{if(!A){let e=y(a);return{href:e,as:v?y(v):e}}let[e,t]=(0,u.resolveHref)(A,a,!0);return{href:e,as:v?(0,u.resolveHref)(A,v):t||e}},[A,a,v]),H=l.default.useRef(F),D=l.default.useRef(K);R&&(r=l.default.Children.only(n));let V=R?r&&"object"==typeof r&&r.ref:t,[B,G,X]=(0,p.useIntersection)({rootMargin:"200px"}),Y=l.default.useCallback(e=>{(D.current!==K||H.current!==F)&&(X(),D.current=K,H.current=F),B(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[K,V,F,X,B]);l.default.useEffect(()=>{S&&G&&w&&g(S,F,K,{locale:P},{kind:U},L)},[K,F,G,P,w,null==A?void 0:A.locale,S,L,U]);let q={ref:Y,onClick(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,u,a,c,f){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};f?l.default.startTransition(d):d()}(e,S,F,K,C,O,E,P,L)},onMouseEnter(e){R||"function"!=typeof I||I(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(w||!L)&&g(S,F,K,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(w||!L)&&g(S,F,K,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,c.isAbsoluteUrl)(K))q.href=K;else if(!R||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);q.href=t||(0,b.addBasePath)((0,f.addLocale)(K,e,null==A?void 0:A.defaultLocale))}return R?l.default.cloneElement(r,q):(0,o.jsx)("a",{...N,...q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),o=n(9833),l="function"==typeof IntersectionObserver,u=new Map,i=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!l,[f,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(c||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,f,d.current]),[p,f,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1154:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return h}});var r=n(5893),o=n(9008),l=n.n(o),u=n(5675),i=n.n(u),a=n(1664),c=n.n(a);let f=e=>{var t,n;if(!e)return console.error("No media provided"),"";let r="".concat("http://localhost:1337").concat(null===(n=e.attributes.formats)||void 0===n?void 0:null===(t=n.thumbnail)||void 0===t?void 0:t.url),o="".concat("http://localhost:1337").concat(e.attributes.url);return null!=r?r:o};var s=n(4968),d=n.n(s),p=!0;function h(e){let{blogPosts:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Rustybass Blog"}),(0,r.jsx)("meta",{title:"description",content:"This is an example of our blog"})]}),(0,r.jsxs)("div",{className:d().container,children:[(0,r.jsx)("h1",{children:"Blog Post Links:"}),(0,r.jsx)("div",{className:d().card,children:t.map(e=>{var t;return(0,r.jsx)("div",{className:d().flexing,children:(0,r.jsxs)(c(),{href:"/blog/".concat(e.id),children:[(0,r.jsx)("div",{className:d().featuredImageContainer,children:(0,r.jsx)(i(),{src:f(null===(t=e.attributes.featuredImage)||void 0===t?void 0:t.data),alt:e.attributes.featuredImage.data.attributes.alternativeText,priority:!0,className:"".concat(d().thumbnail),width:e.attributes.featuredImage.data.attributes.width,height:e.attributes.featuredImage.data.attributes.height})}),(0,r.jsx)("h2",{children:e.attributes.title}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:e.attributes.description})})]})},e.id)})})]})]})}},4968:function(e){e.exports={container:"blog_container__EYWp4",post:"blog_post__fgrrV",card:"blog_card__M9Pga",flexing:"blog_flexing__A_noU",thumbnail:"blog_thumbnail__hGr4r",featuredImageContainer:"blog_featuredImageContainer__DeSIh"}},1664:function(e,t,n){e.exports=n(5494)}},function(e){e.O(0,[959,888,774,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);