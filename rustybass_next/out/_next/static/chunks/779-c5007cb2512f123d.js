(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{3454:function(t,e,r){"use strict";var i,n;t.exports=(null==(i=r.g.process)?void 0:i.env)&&"object"==typeof(null==(n=r.g.process)?void 0:n.env)?r.g.process:r(7663)},7663:function(t){!function(){var e={229:function(t){var e,r,i,n=t.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===s||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:s}catch(t){e=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var u=[],c=!1,l=-1;function h(){c&&i&&(c=!1,i.length?u=i.concat(u):l=-1,u.length&&d())}function d(){if(!c){var t=a(h);c=!0;for(var e=u.length;e;){for(i=u,u=[];++l<e;)i&&i[l].run();l=-1,e=u.length}i=null,c=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new f(t,e)),1!==u.length||c||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function i(t){var n=r[t];if(void 0!==n)return n.exports;var s=r[t]={exports:{}},o=!0;try{e[t](s,s.exports,i),o=!1}finally{o&&delete r[t]}return s.exports}i.ab="//";var n=i(229);t.exports=n}()},9008:function(t,e,r){t.exports=r(3709)},4205:function(t,e,r){"use strict";r.d(e,{hl:function(){return V},Q1:function(){return k}});var i=r(9979),n=r(241);function s(t){let e=t.toString();return e.match(/[A-Z]/gi)||e.length>1&&"0"===e[0]?e:isNaN(parseFloat(e))||-1!==e.indexOf(":")||-1!==e.indexOf(".")?e:`${e}.0`}var o=r(9402);class a extends o.N{}var u=r(2854),c=r(8089),l=r(1552);class h extends n.a{constructor(t,e,r){super(),this._actionModel={dimensions:{}},this._actionModel.actionType=l.IZ[t]||t,this.addQualifier(new i.q("c",t)),e&&this.width(e),r&&this.height(r)}height(t){return this._actionModel.dimensions.height=t,this.addQualifier(new i.q("h",t))}width(t){return this._actionModel.dimensions.width=t,this.addQualifier(new i.q("w",t))}aspectRatio(t){return t instanceof a?(this._actionModel.dimensions.aspectRatio=`${t}`,this.addQualifier(new i.q("ar",t))):"number"==typeof t||"string"==typeof t?(this._actionModel.dimensions.aspectRatio=s(t),this.addQualifier(new i.q("ar",s(t)))):t instanceof c.A?(this._actionModel.dimensions.aspectRatio=`${t.qualifierValue}`,this.addFlag(t)):void 0}relative(){return this._actionModel.relative=!0,this.addFlag((0,u.Gf)())}regionRelative(){return this._actionModel.regionRelative=!0,this.addFlag((0,u.S7)())}static fromJson(t){let{actionType:e,dimensions:r,relative:i,regionRelative:n}=t,{aspectRatio:s,width:o,height:a}=r,c=new this(l.Q8[e]||e,o,a);return s&&c.aspectRatio("ignore_aspect_ratio"===s?(0,u.og)():s),i&&c.relative(),n&&c.regionRelative(),c}}class d extends i.q{constructor(t){super("g",new o.N(t))}}class f extends d{constructor(){super("auto")}autoFocus(...t){return this.addValue(t),this}}class p extends d{constructor(t){super(t)}fallbackGravity(t){return this.addValue(t.qualifierValue),this}}class g extends d{constructor(t){super(t)}}function m(...t){return new p([...t])}class y extends o.N{constructor(t){super(),this.name=t}toString(){return this.name}}function v(t){return`${t}`.replace("g_","")}function w(t){let e=t.toString().split("_"),r={object:e[0]};return e.length>1&&("avoid"===e[1]?r.avoid=!0:r.weight=+e[1]),r}function _(t){let e="auto"===t?new f:t;return{gravityType:"auto",autoFocus:(`${t}`.startsWith("auto:")?`${t}`.split(":").filter(t=>"auto"!==t):e.qualifierValue.values.filter(t=>"auto"!==t)).map(w)}}class b extends o.N{constructor(t,e){super(),this._weight=e,this.focusOn=t,this.shouldAvoid=!1}static focusOn(t,e){return new b(t,e)}shouldAddWeight(){return"number"==typeof this._weight||"string"==typeof this._weight||this.shouldAvoid}getName(){return this.focusOn.name}getWeight(){return this.shouldAvoid?"avoid":this._weight}toString(){return this.shouldAddWeight()?`${this.getName()}_${this.getWeight()}`:`${this.getName()}`}weight(t){return this._weight=t,this}avoid(){return this.shouldAvoid=!0,this}}b.focusOn;class x extends o.N{constructor(t){super(),this.val=t}toString(){return this.val}}function T(t){let{object:e,weight:r,avoid:i}=t,n=new b(new y(e));return(r||0===r)&&n.weight(r),i&&n.avoid(),n}function A(t){let e=(t.autoFocus||[]).map(T);return new f().autoFocus(...e)}class S extends h{gravity(t){var e;this._actionModel.gravity=["north","center","east","west","south","north_west","south_east","south_west","north_east"].includes(v(e=t))?{compass:v(e),gravityType:"direction"}:"ocr_text"===v(e)?{gravityType:"ocr"}:e&&"auto"===`${e}`.split(":")[0]||"auto"===`${e.qualifierValue}`.split(":")[0]?_(e):function(t){let e=`${t}`.split(":").includes("auto"),r=t.qualifierValue.values,i={gravityType:"object",focusOnObjects:(e?r.slice(0,r.length-1):r).map(t=>`${t}`)};if(e){let t=r[r.length-1].values.slice(1),e=new f().autoFocus(...t);i.fallbackGravity=_(e)}return i}("string"==typeof e?new p(e.split(":").map(t=>new y(t))):e);let r="string"==typeof t?new i.q("g",t):t;return this.addQualifier(r)}static fromJson(t){var e;let r=super.fromJson.apply(this,[t]);return t.gravity&&r.gravity("direction"===(e=t.gravity).gravityType?new g(new x(e.compass)):"ocr"===e.gravityType?m(new y("ocr_text")):"auto"===e.gravityType?A(e):function(t){let e=m(...(t.focusOnObjects||[]).map(t=>new y(t)));if(t.fallbackGravity){let r=A(t.fallbackGravity);e.fallbackGravity(r)}return e}(e)),r}}r(3459);class C extends S{zoom(t){return this._actionModel.zoom=t,this.addQualifier(new i.q("z",t))}static fromJson(t){let e=super.fromJson.apply(this,[t]);return t.zoom&&e.zoom(t.zoom),e}}class $ extends S{x(t){return this._actionModel.x=t,this.addQualifier(new i.q("x",t))}y(t){return this._actionModel.y=t,this.addQualifier(new i.q("y",t))}static fromJson(t){let e=super.fromJson.apply(this,[t]);return t.x&&e.x(t.x),t.y&&e.y(t.y),e}}function V(t,e){return new $("fill",t,e)}function k(t,e){return new C("thumb",t,e)}},241:function(t,e,r){"use strict";r.d(e,{a:function(){return u}});var i=r(8089),n=r(9979),s=r(7633);function o(){var t,e,r;let i=this._actionModel&&Object.keys(this._actionModel).length,n=null===(r=null===(e=null===(t=this._actionModel)||void 0===t?void 0:t.source)||void 0===e?void 0:e.transformation)||void 0===r?void 0:r.error;return n&&n instanceof Error?{error:n}:i?this._actionModel:{error:(0,s.S)(`unsupported action ${this.constructor.name}`)}}class a{constructor(){this._actionModel={}}toJson(){return o.apply(this)}}class u extends a{constructor(){super(...arguments),this.qualifiers=new Map,this.flags=[],this.delimiter=",",this.actionTag=""}prepareQualifiers(){}getActionTag(){return this.actionTag}setActionTag(t){return this.actionTag=t,this}toString(){return this.prepareQualifiers(),(function(t,e){let r=Array.from(t.entries());return e.forEach(t=>{r.push(["fl",t])}),r.sort().map(t=>t[1])})(this.qualifiers,this.flags).join(this.delimiter)}addQualifier(t){if("string"==typeof t){let[e,r]=t.toLowerCase().split("_");"fl"===e?this.flags.push(new i.A(r)):this.qualifiers.set(e,new n.q(e,r))}else this.qualifiers.set(t.key,t);return this}addFlag(t){return"string"==typeof t?this.flags.push(new i.A(t)):t instanceof i.A&&this.flags.push(t),this}addValueToQualifier(t,e){return this.qualifiers.get(t).addValue(e),this}}},1552:function(t,e,r){"use strict";function i(t){let e={};return Object.keys(t).forEach(r=>{e[t[r]]=r}),e}r.d(e,{Q8:function(){return n},IZ:function(){return s},yX:function(){return o}});let n={limitFit:"limit",limitFill:"lfill",minimumFit:"mfit",thumbnail:"thumb",limitPad:"lpad",minimumPad:"mpad",autoPad:"auto_pad"};i({444:"CHROMA_444",420:"CHROMA_420"}),i({noCmyk:"no_cmyk",keepCmyk:"keep_cmyk",tinySrgb:"tinysrgb",srgbTrueColor:"srgb:truecolor"});let s=i(n),o=i({colorSpace:"cs",dpr:"dpr",density:"dn",defaultImage:"d",format:"f",quality:"q"});i({redEye:"redeye",advancedRedEye:"adv_redeye",oilPaint:"oil_paint",unsharpMask:"unsharp_mask",makeTransparent:"make_transparent",generativeRestore:"gen_restore",upscale:"upscale"}),i({autoBest:"auto:best",autoEco:"auto:eco",autoGood:"auto:good",autoLow:"auto:low",jpegminiHigh:"jpegmini:1",jpegminiMedium:"jpegmini:2",jpegminiBest:"jpegmini:0"}),i({fullHd:"full_hd",fullHdWifi:"full_hd_wifi",fullHdLean:"full_hd_lean",hdLean:"hd_lean"})},9979:function(t,e,r){"use strict";r.d(e,{q:function(){return a}});var i=r(9402),n=r(7633);function s(){return this._qualifierModel||{error:(0,n.S)(`unsupported qualifier ${this.constructor.name}`)}}class o{constructor(){this._qualifierModel={}}toJson(){return s.apply(this)}}class a extends o{constructor(t,e){super(),this.delimiter="_",this.key=t,e instanceof i.N?this.qualifierValue=e:(this.qualifierValue=new i.N,this.qualifierValue.addValue(e))}toString(){let{key:t,delimiter:e,qualifierValue:r}=this;return`${t}${e}${r.toString()}`}addValue(t){return this.qualifierValue.addValue(t),this}}},9402:function(t,e,r){"use strict";r.d(e,{N:function(){return i}});class i{constructor(t){this.values=[],this.delimiter=":",this.hasValue(t)&&this.addValue(t)}toString(){return this.values.join(this.delimiter)}hasValue(t){return null!=t&&""!==t}addValue(t){return Array.isArray(t)?this.values=this.values.concat(t):this.values.push(t),this.values=this.values.filter(t=>this.hasValue(t)),this}setDelimiter(t){return this.delimiter=t,this}}},3459:function(t,e,r){"use strict";function i(t){return t&&t.match(/^#/)?`rgb:${t.substr(1)}`:t}r.d(e,{M:function(){return i}})},7633:function(t,e,r){"use strict";r.d(e,{S:function(){return n}});class i extends Error{constructor(t="Unsupported"){super(t)}}function n(t){return new i(t)}},2854:function(t,e,r){"use strict";r.d(e,{Gf:function(){return c},Mw:function(){return s},S7:function(){return u},c5:function(){return a},mC:function(){return o},og:function(){return n}});var i=r(8089);function n(){return new i.A("ignore_aspect_ratio")}function s(){return new i.A("lossy")}function o(){return new i.A("preserve_transparency")}function a(t){return new i.A("progressive",t)}function u(){return new i.A("region_relative")}function c(){return new i.A("relative")}},8089:function(t,e,r){"use strict";r.d(e,{A:function(){return s}});var i=r(9402),n=r(9979);class s extends n.q{constructor(t,e){super("fl",e?new i.N([t,`${e}`]).setDelimiter(":"):t),this.flagValue=e}toString(){return super.toString().replace(/\./g,"%2E")}getFlagValue(){return this.flagValue}}},1182:function(t,e,r){"use strict";r.d(e,{r:function(){return F}});var i=r(241),n=r(9402),s=r(9979),o=r(3459);class a extends i.a{constructor(t){super(),this._actionModel={},this.addQualifier(new s.q("b",new n.N((0,o.M)(t)).setDelimiter("_"))),this._actionModel.color=t,this._actionModel.actionType="backgroundColor"}static fromJson(t){let{color:e}=t;return new this(e)}}var u=r(8089),c=r(7633);class l{constructor(t){this.raw=t}toString(){return this.raw}toJson(){return{error:(0,c.S)(`unsupported action ${this.constructor.name}`)}}}var h=r(2854);class d extends n.N{constructor(t){super(t),this.val=t}getValue(){return this.val}}var f=r(1552);class p extends i.a{constructor(t,e,r){let i;super(),this._actionModel={},i=e instanceof d?e.getValue():e,this._actionModel.actionType=f.yX[t],this._actionModel[r]=i,this.addQualifier(new s.q(t,e))}}class g extends u.A{constructor(t){super("progressive",t)}}class m extends p{constructor(t,e){super(t,e,"formatType")}lossy(){return this._actionModel.lossy=!0,this.addFlag((0,h.Mw)()),this}progressive(t){return t instanceof g?(this._actionModel.progressive={mode:t.getFlagValue()},this.addFlag(t)):(this._actionModel.progressive={mode:t},this.addFlag((0,h.c5)(t))),this}preserveTransparency(){return this._actionModel.preserveTransparency=!0,this.addFlag((0,h.mC)()),this}static fromJson(t){let e;let{formatType:r,lossy:i,progressive:n,preserveTransparency:s}=t;return e=r?new this("f",r):new this("f"),n&&(n.mode?e.progressive(n.mode):e.progressive()),i&&e.lossy(),s&&e.preserveTransparency(),e}}class y{constructor(){this.actions=[]}addAction(t){let e;if("string"==typeof t){if(t.indexOf("/")>=0)throw"addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";e=new l(t)}else e=t;return this.actions.push(e),this}addTransformation(t){return t instanceof y?this.actions=this.actions.concat(t.actions):this.actions.push(new l(t)),this}toString(){return this.actions.map(t=>t.toString()).filter(t=>t).join("/")}animated(t){return this.addAction(t)}border(t){return this.addAction(t)}reshape(t){return this.addAction(t)}resize(t){return this.addAction(t)}quality(t){return this.addAction(new m("q",t)),this}format(t){return this.addAction(new m("f",t)),this}roundCorners(t){return this.addAction(t)}overlay(t){return this.addAction(t)}underlay(t){return t.setLayerType("u"),this.addAction(t)}addVariable(t){return this.addAction(t)}conditional(t){return this.addAction(t)}effect(t){return this.addAction(t)}adjust(t){return this.addAction(t)}rotate(t){return this.addAction(t)}namedTransformation(t){return this.addAction(t)}delivery(t){return this.addAction(t)}backgroundColor(t){return this.addAction(new a(t))}psdTools(t){return this.addAction(t)}extract(t){return this.addAction(t)}addFlag(t){let e=new i.a,r=t;return"string"==typeof t&&(r=new u.A(t)),e.addQualifier(r),this.addAction(e)}customFunction(t){return this.addAction(t)}transcode(t){return this.addAction(t)}videoEdit(t){return this.addAction(t)}toJson(){let t=[];for(let e of this.actions){let r=e.toJson();if("error"in r&&r.error)return r;t.push(r)}return{actions:t}}}class v extends y{}class w{filterOutNonSupportedKeys(t,e){let r=Object.create({});return"object"!=typeof t||t instanceof Array?Object.create({}):(Object.keys(t).forEach(i=>{e.indexOf(i)>=0?r[i]=t[i]:console.warn("Warning - unsupported key provided to configuration: ",i)}),r)}}var _=w;let b=["cname","secureDistribution","privateCdn","signUrl","longUrlSignature","shorten","useRootPath","secure","forceVersion","analytics","queryParams"];class x extends _{constructor(t){super(),Object.assign(this,{secure:!0},this.filterOutNonSupportedKeys(t,b))}extend(t){return new x(Object.assign({},this,this.filterOutNonSupportedKeys(t,b)))}setCname(t){return this.cname=t,this}setSecureDistribution(t){return this.secureDistribution=t,this}setPrivateCdn(t){return this.privateCdn=t,this}setSignUrl(t){return this.signUrl=t,this}setLongUrlSignature(t){return this.longUrlSignature=t,this}setShorten(t){return this.shorten=t,this}setUseRootPath(t){return this.useRootPath=t,this}setSecure(t){return this.secure=t,this}setForceVersion(t){return this.forceVersion=t,this}setQueryParams(t){return this.queryParams=t,this}}function T(t,e,r){let i=e>>0,n=String(void 0!==r?r:" ");return t.length>i?String(t):((i-=t.length)>n.length&&(n+=function(t,e){let r=e,i="";for(;r>0;)i+=t,r--;return i}(n,i/n.length)),n.slice(0,i)+String(t))}let A={},S=0;function C(t){let e="",r=t.split(".").length,i=parseInt((function(t){if(t.split(".").length<2)throw Error("invalid semVer, must have at least two segments");return t.split(".").map(t=>{let e=+t;if(isNaN(e)||e<0)throw"Invalid version number provided";return T(t,2,"0")}).join(".")})(function(t){if(t.split(".").length<2)throw Error("invalid semVer, must have at least two segments");return t.split(".").reverse().join(".")}(t)).split(".").join("")).toString(2);if((i=T(i,6*r,"0")).length%6!=0)throw"Version must be smaller than 43.21.26)";return i.match(/.{1,6}/g).forEach(t=>{e+=A[t]}),e}"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").forEach(t=>{let e=S.toString(2);A[e=T(e,6,"0")]=t,S++});var $=r(3454);function V(t){let e=function(t){let e={sdkSemver:t.sdkSemver,techVersion:t.techVersion,sdkCode:t.sdkCode,product:t.product,feature:"0",osType:t.osType,osVersion:t.osVersion};return t.accessibility&&(e.feature="D"),t.lazyload&&(e.feature="C"),t.responsive&&(e.feature="A"),t.placeholder&&(e.feature="B"),e}(function(t){let e={techVersion:function(){let t="0.0.0";if("undefined"!=typeof window)return t;try{return $.versions.node||t}catch(e){return t}}(),sdkCode:"T",sdkSemver:"1.19.0".split("-")[0],product:"A",osType:"Z",osVersion:"0.0",responsive:!1,placeholder:!1,lazyload:!1,accessibility:!1};return t?Object.assign(Object.assign({},e),t):e}(t));try{let t=function(t){let e=t.split(".");return`${e[0]}.${e[1]}`}(e.techVersion),r=C(e.sdkSemver),i=C(t),n=function(t){let[e,r]=t.split("."),i=parseInt(e).toString(2),n=parseInt(r).toString(2),s=i.padStart(6,"0"),o=n.padStart(6,"0");return A[s]+A[o]}(e.osVersion),s=e.feature,o=e.sdkCode,{product:a,osType:u}=e;return`D${a}${o}${r}${i}${u}${n}${s}`}catch(t){return"E"}}let k={"image/upload":"images","image/private":"private_images","image/authenticated":"authenticated_images","raw/upload":"files","video/upload":"videos"};class q{constructor(t,e={},r){this.setPublicID(t),this.setCloudConfig(e),this.setURLConfig(r)}setURLConfig(t){return this.urlConfig=new x(t),this}setCloudConfig(t){return this.cloudName=t.cloudName,this.apiKey=t.apiKey,this.apiSecret=t.apiSecret,this.authToken=t.authToken,this}setPublicID(t){return this.publicID=t?t.toString():"",this}setDeliveryType(t){return this.deliveryType=t,this}setSuffix(t){return this.suffix=t,this}setSignature(t){return this.signature=t,this}setVersion(t){return t&&(this.version=t),this}setAssetType(t){return t&&(this.assetType=t),this}sign(){return this}toURL(t={}){return this.createCloudinaryURL(null,t.trackedAnalytics)}validateAssetForURLCreation(){if(void 0===this.cloudName)throw"You must supply a cloudName when initializing the asset";let t=this.suffix&&this.suffix.indexOf(".")>=0,e=this.suffix&&this.suffix.indexOf("/")>=0;if(t||e)throw"`suffix`` should not include . or /"}getResourceType(){var t,e;let r=(t=this.assetType)?t:"image",i=(e=this.deliveryType)?e:"upload",n=!!this.suffix,s=`${r}/${i}`,o=k[`${r}/${i}`],a=this.urlConfig.useRootPath,u=this.urlConfig.shorten;if(a){if("image/upload"===s)return"";throw Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${s} instead`)}if(u&&"image/upload"===s)return"iu";if(n){if(o)return o;throw Error(`URL Suffix only supported for ${Object.keys(k).join(", ")}, Provided: ${s} instead`)}return s}getSignature(){return this.signature?`s--${this.signature}--`:""}createCloudinaryURL(t,e){var r,i,n;if(!this.publicID)return"";this.validateAssetForURLCreation();let s=function(t,e){let r=e.secure,i=e.privateCdn,n=e.cname,s=e.secureDistribution;return r||n?r&&!s&&i?`https://${t}-res.cloudinary.com`:r&&!s?`https://res.cloudinary.com/${t}`:r&&s&&i?`https://${s}`:r&&s?`https://${s}/${t}`:!r&&n?`http://${n}/${t}`:"ERROR":`http://res.cloudinary.com/${t}`}(this.cloudName,this.urlConfig),o=t?t.toString():"",a=(r=this.publicID,i=this.version,n=this.urlConfig.forceVersion,i?`v${i}`:r.match(/^v[0-9]+/)||r.match(/^https?:\//)||0>r.indexOf("/")?"":!1!==n?"v1":""),u=this.publicID;if("string"==typeof t)return[s,this.getResourceType(),this.getSignature(),o,a,u.replace(/,/g,"%2C"),this.suffix].filter(t=>t).join("/");{let t=[encodeURI(s),this.getResourceType(),this.getSignature(),encodeURI(o),a,encodeURI(u).replace(/,/g,"%2C"),this.suffix&&encodeURI(this.suffix)].filter(t=>t).join("/").replace(/\?/g,"%3F").replace(/=/g,"%3D"),r=!1!==this.urlConfig.analytics&&!u.includes("?"),i="";if("object"==typeof this.urlConfig.queryParams)try{let t=new URLSearchParams(this.urlConfig.queryParams);r&&t.set("_a",V(e)),i=t.toString()}catch(t){console.error("Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string")}else i=this.urlConfig.queryParams||"",r&&(i+=`${i.length>0?"&":""}_a=${V(e)}`);return i?`${t}?${i}`:t}}}class M extends q{constructor(t,e,r,i){super(t,e,r),this.transformation=i}animated(t){return this.transformation.animated(t),this}border(t){return this.transformation.border(t),this}reshape(t){return this.transformation.reshape(t),this}resize(t){return this.transformation.resize(t),this}quality(t){return this.addAction(new m("q",t)),this}format(t){return this.addAction(new m("f",t)),this}roundCorners(t){return this.transformation.roundCorners(t),this}overlay(t){return this.transformation.overlay(t),this}addVariable(t){return this.transformation.addVariable(t),this}conditional(t){return this.transformation.conditional(t),this}effect(t){return this.transformation.effect(t),this}adjust(t){return this.transformation.adjust(t),this}rotate(t){return this.transformation.rotate(t),this}namedTransformation(t){return this.transformation.namedTransformation(t),this}delivery(t){return this.transformation.delivery(t),this}backgroundColor(t){return this.transformation.backgroundColor(t),this}psdTools(t){return this.transformation.psdTools(t),this}extract(t){return this.transformation.extract(t),this}addFlag(t){return this.transformation.addFlag(t),this}customFunction(t){return this.transformation.customFunction(t),this}addAction(t){return this.transformation.addAction(t),this}addTransformation(t){return this.transformation.addTransformation(t),this}toString(){return this.transformation.toString()}underlay(t){return this.transformation.underlay(t),this}toURL(t={}){return this.createCloudinaryURL(this.transformation,null==t?void 0:t.trackedAnalytics)}}class R extends M{constructor(t,e,r){super(t,e,r,new v)}}class j extends y{}class O extends M{constructor(t,e,r){super(t,e,r,new j),this.assetType="video"}transcode(t){return this.transformation.transcode(t),this}videoEdit(t){return this.transformation.videoEdit(t),this}}class F{constructor(t){t&&(this.cloudinaryConfig=t)}image(t){return new R(t,this.cloudinaryConfig.cloud,this.cloudinaryConfig.url)}video(t){return new O(t,this.cloudinaryConfig.cloud,this.cloudinaryConfig.url)}setConfig(t){return this.cloudinaryConfig=t,this}getConfig(){return this.cloudinaryConfig}extendConfig(){}}}}]);