(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(4682)}])},5634:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return a},isThenable:function(){return s}});let o="refresh",u="navigate",l="restore",i="server-patch",f="prefetch",c="fast-refresh",a="server-action";function s(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7149:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(4648),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5494:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(5203),i=n(298),f=n(1024),c=n(5522),a=n(2208),s=n(5832),d=n(2497),p=n(7283),h=n(7149),_=n(9290),b=n(5634),g=new Set;function v(e,t,n,r,o,u){if(u||(0,i.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let j=u.default.forwardRef(function(e,t){let n,r;let{href:f,as:g,children:j,prefetch:m=null,passHref:x,replace:C,shallow:E,scroll:O,locale:P,onClick:T,onMouseEnter:I,onTouchStart:M,legacyBehavior:N=!1,...R}=e;n=j,N&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let A=u.default.useContext(s.RouterContext),k=u.default.useContext(d.AppRouterContext),w=null!=A?A:k,S=!A,L=!1!==m,U=null===m?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:z,as:F}=u.default.useMemo(()=>{if(!A){let e=y(f);return{href:e,as:g?y(g):e}}let[e,t]=(0,l.resolveHref)(A,f,!0);return{href:e,as:g?(0,l.resolveHref)(A,g):t||e}},[A,f,g]),K=u.default.useRef(z),H=u.default.useRef(F);N&&(r=u.default.Children.only(n));let D=N?r&&"object"==typeof r&&r.ref:t,[X,V,B]=(0,p.useIntersection)({rootMargin:"200px"}),G=u.default.useCallback(e=>{(H.current!==F||K.current!==z)&&(B(),H.current=F,K.current=z),X(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[F,D,z,B,X]);u.default.useEffect(()=>{w&&V&&L&&v(w,z,F,{locale:P},{kind:U},S)},[F,z,V,P,L,null==A?void 0:A.locale,w,S,U]);let Q={ref:G,onClick(e){N||"function"!=typeof T||T(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),w&&!e.defaultPrevented&&function(e,t,n,r,o,l,f,c,a){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==f||f;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};a?u.default.startTransition(d):d()}(e,w,z,F,C,E,O,P,S)},onMouseEnter(e){N||"function"!=typeof I||I(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),w&&(L||!S)&&v(w,z,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)},onTouchStart(e){N||"function"!=typeof M||M(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),w&&(L||!S)&&v(w,z,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:U},S)}};if((0,c.isAbsoluteUrl)(F))Q.href=F;else if(!N||x||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);Q.href=t||(0,_.addBasePath)((0,a.addLocale)(F,e,null==A?void 0:A.defaultLocale))}return N?u.default.cloneElement(r,Q):(0,o.jsx)("a",{...R,...Q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=n(7294),o=n(9833),u="function"==typeof IntersectionObserver,l=new Map,i=[];function f(e){let{rootRef:t,rootMargin:n,disabled:f}=e,c=f||!u,[a,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(c||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!a){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,a,d.current]),[p,a,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4682:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return p}});var r=n(5893),o=n(7410),u=n(9008),l=n.n(u),i=n(1664),f=n.n(i),c=n(1563),a=n(4968),s=n.n(a),d=!0;function p(e){let{blogPosts:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:"Rustybass Blog"}),(0,r.jsx)("meta",{title:"description",content:"This is an example of our blog"})]}),(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)("h1",{children:"Blog Post Links:"}),(0,r.jsx)("div",{className:s().card,children:t.map(e=>(0,r.jsx)("div",{className:s().flexing,children:(0,r.jsxs)(f(),{href:"/blog/".concat(e.id),children:[(0,r.jsx)("div",{className:s().featuredImageContainer,children:(0,r.jsx)(o.pw,{cldImg:(0,c.sX)(e.attributes.imageId)})}),(0,r.jsx)("h2",{children:e.attributes.title}),(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:e.attributes.description})})]})},e.id))})]})]})}},1563:function(e,t,n){"use strict";n.d(t,{NE:function(){return c},Qo:function(){return f},Xz:function(){return i},sX:function(){return a}});var r=n(1182),o=n(4205);let u=new r.r({cloud:{cloudName:"dezn5z2x2"}}),l=e=>{if(!e)throw Error("No imageId provided");return u.image(e)},i=e=>l(e).resize((0,o.hl)().width(1e3).height(250)),f=e=>e.startsWith("**cdn**"),c=e=>l(e.substring(7,e.length)).resize((0,o.hl)().width(500).height(250)),a=e=>l(e).resize((0,o.Q1)().width(200).height(250))},4968:function(e){e.exports={container:"blog_container__EYWp4",post:"blog_post__fgrrV",card:"blog_card__M9Pga",flexing:"blog_flexing__A_noU",thumbnail:"blog_thumbnail__hGr4r",featuredImageContainer:"blog_featuredImageContainer__DeSIh"}},1664:function(e,t,n){e.exports=n(5494)}},function(e){e.O(0,[789,779,888,774,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);