function e(e,t,o,i){var r,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s}var t,o;"function"==typeof SuppressedError&&SuppressedError,function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(o||(o={}));var i=["closed","locked","off"],r=function(e,t,o,i){i=i||{},o=null==o?{}:o;var r=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=o,e.dispatchEvent(r),r};function a(e){return void 0!==e&&"none"!==e.action}const s=globalThis,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),l=new WeakMap;let c=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=l.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&l.set(t,e))}return e}toString(){return this.cssText}};const h=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new c(o,e,d)},p=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new c("string"==typeof e?e:e+"",void 0,d))(t)})(e):e,{is:u,defineProperty:b,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:g,getPrototypeOf:v}=Object,_=globalThis,w=_.trustedTypes,y=w?w.emptyScript:"",x=_.reactiveElementPolyfillSupport,$=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},C=(e,t)=>!u(e,t),S={attribute:!0,type:String,converter:k,reflect:!1,useDefault:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&b(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:r}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const a=i?.call(this);r?.call(this,t),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const e=this.properties,t=[...f(e),...g(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(p(e))}else void 0!==e&&t.push(p(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const t=document.createElement("style"),i=s.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:k).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=i;const a=r.fromAttribute(t,e.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,o,i=!1,r){if(void 0!==e){const a=this.constructor;if(!1===i&&(r=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??C)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:r},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,x?.({ReactiveElement:A}),(_.reactiveElementVersions??=[]).push("2.1.2");const E=globalThis,T=e=>e,M=E.trustedTypes,O=M?M.createPolicy("lit-html",{createHTML:e=>e}):void 0,D="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,I="?"+P,z=`<${I}>`,R=document,F=()=>R.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,j="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,Y=/>/g,W=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,q=/"/g,X=/^(?:script|style|textarea|title)$/i,J=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),V=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Z=new WeakMap,G=R.createTreeWalker(R,129);function Q(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(t):t}class ee{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,a=0;const s=e.length-1,n=this.parts,[d,l]=((e,t)=>{const o=e.length-1,i=[];let r,a=2===t?"<svg>":3===t?"<math>":"",s=H;for(let t=0;t<o;t++){const o=e[t];let n,d,l=-1,c=0;for(;c<o.length&&(s.lastIndex=c,d=s.exec(o),null!==d);)c=s.lastIndex,s===H?"!--"===d[1]?s=L:void 0!==d[1]?s=Y:void 0!==d[2]?(X.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=W):void 0!==d[3]&&(s=W):s===W?">"===d[0]?(s=r??H,l=-1):void 0===d[1]?l=-2:(l=s.lastIndex-d[2].length,n=d[1],s=void 0===d[3]?W:'"'===d[3]?q:U):s===q||s===U?s=W:s===L||s===Y?s=H:(s=W,r=void 0);const h=s===W&&e[t+1].startsWith("/>")?" ":"";a+=s===H?o+z:l>=0?(i.push(n),o.slice(0,l)+D+o.slice(l)+P+h):o+P+(-2===l?t:h)}return[Q(e,a+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=ee.createElement(d,o),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=G.nextNode())&&n.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(D)){const t=l[a++],o=i.getAttribute(e).split(P),s=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:s[2],strings:o,ctor:"."===s[1]?ae:"?"===s[1]?se:"@"===s[1]?ne:re}),i.removeAttribute(e)}else e.startsWith(P)&&(n.push({type:6,index:r}),i.removeAttribute(e));if(X.test(i.tagName)){const e=i.textContent.split(P),t=e.length-1;if(t>0){i.textContent=M?M.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],F()),G.nextNode(),n.push({type:2,index:++r});i.append(e[t],F())}}}else if(8===i.nodeType)if(i.data===I)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(P,e+1));)n.push({type:7,index:r}),e+=P.length-1}r++}}static createElement(e,t){const o=R.createElement("template");return o.innerHTML=e,o}}function te(e,t,o=e,i){if(t===V)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl;const a=B(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=te(e,r._$AS(e,t.values),r,i)),t}class oe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??R).importNode(t,!0);G.currentNode=i;let r=G.nextNode(),a=0,s=0,n=o[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new ie(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new de(r,this,e)),this._$AV.push(t),n=o[++s]}a!==n?.index&&(r=G.nextNode(),a++)}return G.currentNode=R,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),B(e)?e===K||null==e||""===e?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=ee.createElement(Q(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new oe(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new ee(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new ie(this.O(F()),this.O(F()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=T(e).nextSibling;T(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,t=this,o,i){const r=this.strings;let a=!1;if(void 0===r)e=te(this,e,t,0),a=!B(e)||e!==this._$AH&&e!==V,a&&(this._$AH=e);else{const i=e;let s,n;for(e=r[0],s=0;s<r.length-1;s++)n=te(this,i[o+s],t,s),n===V&&(n=this._$AH[s]),a||=!B(n)||n!==this._$AH[s],n===K?e=K:e!==K&&(e+=(n??"")+r[s+1]),this._$AH[s]=n}a&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ae extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class se extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class ne extends re{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=te(this,e,t,0)??K)===V)return;const o=this._$AH,i=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==K&&(o===K||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class de{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}}const le={I:ie},ce=E.litHtmlPolyfillSupport;ce?.(ee,ie),(E.litHtmlVersions??=[]).push("3.3.3");const he=globalThis;let pe=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=o?.renderBefore??null;i._$litPart$=r=new ie(t.insertBefore(F(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};pe._$litElement$=!0,pe.finalized=!0,he.litElementHydrateSupport?.({LitElement:pe});const ue=he.litElementPolyfillSupport;ue?.({LitElement:pe}),(he.litElementVersions??=[]).push("4.2.2");const be=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},me={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:C},fe=(e=me,t,o)=>{const{kind:i,metadata:r}=o;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),a.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};function ge(e){return(t,o)=>"object"==typeof o?fe(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}function ve(e){return ge({...e,state:!0,attribute:!1})}const _e=1,we=2,ye=e=>(...t)=>({_$litDirective$:e,values:t});let xe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const $e=ye(class extends xe{constructor(e){if(super(e),e.type!==_e||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return V}}),{I:ke}=le,Ce=e=>e,Se=()=>document.createComment(""),Ae=(e,t,o)=>{const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Se(),r),a=i.insertBefore(Se(),r);o=new ke(t,a,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,s=a!==e;if(s){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||s){let e=o._$AA;for(;e!==t;){const t=Ce(e).nextSibling;Ce(i).insertBefore(e,r),e=t}}}return o},Ee=(e,t,o=e)=>(e._$AI(t,o),e),Te={},Me=(e,t=Te)=>e._$AH=t,Oe=e=>{e._$AR(),e._$AA.remove()},De=(e,t,o)=>{const i=new Map;for(let r=t;r<=o;r++)i.set(e[r],r);return i},Pe=ye(class extends xe{constructor(e){if(super(e),e.type!==we)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const r=[],a=[];let s=0;for(const t of e)r[s]=i?i(t,s):s,a[s]=o(t,s),s++;return{values:a,keys:r}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,i]){const r=(e=>e._$AH)(e),{values:a,keys:s}=this.dt(t,o,i);if(!Array.isArray(r))return this.ut=s,a;const n=this.ut??=[],d=[];let l,c,h=0,p=r.length-1,u=0,b=a.length-1;for(;h<=p&&u<=b;)if(null===r[h])h++;else if(null===r[p])p--;else if(n[h]===s[u])d[u]=Ee(r[h],a[u]),h++,u++;else if(n[p]===s[b])d[b]=Ee(r[p],a[b]),p--,b--;else if(n[h]===s[b])d[b]=Ee(r[h],a[b]),Ae(e,d[b+1],r[h]),h++,b--;else if(n[p]===s[u])d[u]=Ee(r[p],a[u]),Ae(e,r[h],r[p]),p--,u++;else if(void 0===l&&(l=De(s,u,b),c=De(n,h,p)),l.has(n[h]))if(l.has(n[p])){const t=c.get(s[u]),o=void 0!==t?r[t]:null;if(null===o){const t=Ae(e,r[h]);Ee(t,a[u]),d[u]=t}else d[u]=Ee(o,a[u]),Ae(e,r[h],o),r[t]=null;u++}else Oe(r[p]),p--;else Oe(r[h]),h++;for(;u<=b;){const t=Ae(e,d[b+1]);Ee(t,a[u]),d[u++]=t}for(;h<=p;){const e=r[h++];null!==e&&Oe(e)}return this.ut=s,Me(e,d),V}}),Ie="important",ze=" !"+Ie,Re=ye(class extends xe{constructor(e){if(super(e),e.type!==_e||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const i=e[o];return null==i?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(ze);e.includes("-")||t?o.setProperty(e,t?i.slice(0,-11):i,t?Ie:""):o[e]=i}}return V}});function Fe(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},Be.apply(null,arguments)}function Ne(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function je(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(o),!0).forEach(function(t){Fe(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Ne(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function He(e){return He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(e)}function Le(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var Ye=Le(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),We=Le(/Edge/i),Ue=Le(/firefox/i),qe=Le(/safari/i)&&!Le(/chrome/i)&&!Le(/android/i),Xe=Le(/iP(ad|od|hone)/i),Je=Le(/chrome/i)&&Le(/android/i),Ve={capture:!1,passive:!1};function Ke(e,t,o){e.addEventListener(t,o,!Ye&&Ve)}function Ze(e,t,o){e.removeEventListener(t,o,!Ye&&Ve)}function Ge(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function Qe(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function et(e,t,o,i){if(e){o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&Ge(e,t):Ge(e,t))||i&&e===o)return e;if(e===o)break}while(e=Qe(e))}return null}var tt,ot=/\s+/g;function it(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(ot," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(ot," ")}}function rt(e,t,o){var i=e&&e.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}}function at(e,t){var o="";if("string"==typeof e)o=e;else do{var i=rt(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(o)}function st(e,t,o){if(e){var i=e.getElementsByTagName(t),r=0,a=i.length;if(o)for(;r<a;r++)o(i[r],r);return i}return[]}function nt(){var e=document.scrollingElement;return e||document.documentElement}function dt(e,t,o,i,r){if(e.getBoundingClientRect||e===window){var a,s,n,d,l,c,h;if(e!==window&&e.parentNode&&e!==nt()?(s=(a=e.getBoundingClientRect()).top,n=a.left,d=a.bottom,l=a.right,c=a.height,h=a.width):(s=0,n=0,d=window.innerHeight,l=window.innerWidth,c=window.innerHeight,h=window.innerWidth),(t||o)&&e!==window&&(r=r||e.parentNode,!Ye))do{if(r&&r.getBoundingClientRect&&("none"!==rt(r,"transform")||o&&"static"!==rt(r,"position"))){var p=r.getBoundingClientRect();s-=p.top+parseInt(rt(r,"border-top-width")),n-=p.left+parseInt(rt(r,"border-left-width")),d=s+a.height,l=n+a.width;break}}while(r=r.parentNode);if(i&&e!==window){var u=at(r||e),b=u&&u.a,m=u&&u.d;u&&(d=(s/=m)+(c/=m),l=(n/=b)+(h/=b))}return{top:s,left:n,bottom:d,right:l,width:h,height:c}}}function lt(e,t,o){for(var i=bt(e,!0),r=dt(e)[t];i;){if(!(r>=dt(i)[o]))return i;if(i===nt())break;i=bt(i,!1)}return!1}function ct(e,t,o,i){for(var r=0,a=0,s=e.children;a<s.length;){if("none"!==s[a].style.display&&s[a]!==_o.ghost&&(i||s[a]!==_o.dragged)&&et(s[a],o.draggable,e,!1)){if(r===t)return s[a];r++}a++}return null}function ht(e,t){for(var o=e.lastElementChild;o&&(o===_o.ghost||"none"===rt(o,"display")||t&&!Ge(o,t));)o=o.previousElementSibling;return o||null}function pt(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===_o.clone||t&&!Ge(e,t)||o++;return o}function ut(e){var t=0,o=0,i=nt();if(e)do{var r=at(e),a=r.a,s=r.d;t+=e.scrollLeft*a,o+=e.scrollTop*s}while(e!==i&&(e=e.parentNode));return[t,o]}function bt(e,t){if(!e||!e.getBoundingClientRect)return nt();var o=e,i=!1;do{if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var r=rt(o);if(o.clientWidth<o.scrollWidth&&("auto"==r.overflowX||"scroll"==r.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==r.overflowY||"scroll"==r.overflowY)){if(!o.getBoundingClientRect||o===document.body)return nt();if(i||t)return o;i=!0}}}while(o=o.parentNode);return nt()}function mt(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function ft(e,t){return function(){if(!tt){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),tt=setTimeout(function(){tt=void 0},t)}}}function gt(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function vt(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function _t(e,t,o){var i={};return Array.from(e.children).forEach(function(r){var a,s,n,d;if(et(r,t.draggable,e,!1)&&!r.animated&&r!==o){var l=dt(r);i.left=Math.min(null!==(a=i.left)&&void 0!==a?a:1/0,l.left),i.top=Math.min(null!==(s=i.top)&&void 0!==s?s:1/0,l.top),i.right=Math.max(null!==(n=i.right)&&void 0!==n?n:-1/0,l.right),i.bottom=Math.max(null!==(d=i.bottom)&&void 0!==d?d:-1/0,l.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var wt="Sortable"+(new Date).getTime();function yt(){var e,t=[];return{captureAnimationState:function(){(t=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(e){if("none"!==rt(e,"display")&&e!==_o.ghost){t.push({target:e,rect:dt(e)});var o=je({},t[t.length-1].rect);if(e.thisAnimationDuration){var i=at(e,!0);i&&(o.top-=i.f,o.left-=i.e)}e.fromRect=o}})},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o))for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o);return-1}(t,{target:e}),1)},animateAll:function(o){var i=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof o&&o());var r=!1,a=0;t.forEach(function(e){var t=0,o=e.target,s=o.fromRect,n=dt(o),d=o.prevFromRect,l=o.prevToRect,c=e.rect,h=at(o,!0);h&&(n.top-=h.f,n.left-=h.e),o.toRect=n,o.thisAnimationDuration&&mt(d,n)&&!mt(s,n)&&(c.top-n.top)/(c.left-n.left)===(s.top-n.top)/(s.left-n.left)&&(t=function(e,t,o,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*i.animation}(c,d,l,i.options)),mt(n,s)||(o.prevFromRect=s,o.prevToRect=n,t||(t=i.options.animation),i.animate(o,c,n,t)),t&&(r=!0,a=Math.max(a,t),clearTimeout(o.animationResetTimer),o.animationResetTimer=setTimeout(function(){o.animationTime=0,o.prevFromRect=null,o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null},t),o.thisAnimationDuration=t)}),clearTimeout(e),r?e=setTimeout(function(){"function"==typeof o&&o()},a):"function"==typeof o&&o(),t=[]},animate:function(e,t,o,i){if(i){rt(e,"transition",""),rt(e,"transform","");var r=at(this.el),a=r&&r.a,s=r&&r.d,n=(t.left-o.left)/(a||1),d=(t.top-o.top)/(s||1);e.animatingX=!!n,e.animatingY=!!d,rt(e,"transform","translate3d("+n+"px,"+d+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),rt(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),rt(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){rt(e,"transition",""),rt(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},i)}}}}var xt=[],$t={initializeByDefault:!0},kt={mount:function(e){for(var t in $t)$t.hasOwnProperty(t)&&!(t in e)&&(e[t]=$t[t]);xt.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),xt.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=e+"Global";xt.forEach(function(i){t[i.pluginName]&&(t[i.pluginName][r]&&t[i.pluginName][r](je({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](je({sortable:t},o)))})},initializePlugins:function(e,t,o,i){for(var r in xt.forEach(function(i){var r=i.pluginName;if(e.options[r]||i.initializeByDefault){var a=new i(e,t,e.options);a.sortable=e,a.options=e.options,e[r]=a,Be(o,a.defaults)}}),e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);void 0!==a&&(e.options[r]=a)}},getEventProperties:function(e,t){var o={};return xt.forEach(function(i){"function"==typeof i.eventProperties&&Be(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return xt.forEach(function(r){e[r.pluginName]&&r.optionListeners&&"function"==typeof r.optionListeners[t]&&(i=r.optionListeners[t].call(e[r.pluginName],o))}),i}};var Ct=["evt"],St=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,r=function(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;o[i]=e[i]}return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(o,Ct);kt.pluginEvent.bind(_o)(e,t,je({dragEl:Et,parentEl:Tt,ghostEl:Mt,rootEl:Ot,nextEl:Dt,lastDownEl:Pt,cloneEl:It,cloneHidden:zt,dragStarted:Jt,putSortable:Ht,activeSortable:_o.active,originalEvent:i,oldIndex:Rt,oldDraggableIndex:Bt,newIndex:Ft,newDraggableIndex:Nt,hideGhostForTarget:mo,unhideGhostForTarget:fo,cloneNowHidden:function(){zt=!0},cloneNowShown:function(){zt=!1},dispatchSortableEvent:function(e){At({sortable:t,name:e,originalEvent:i})}},r))};function At(e){!function(e){var t=e.sortable,o=e.rootEl,i=e.name,r=e.targetEl,a=e.cloneEl,s=e.toEl,n=e.fromEl,d=e.oldIndex,l=e.newIndex,c=e.oldDraggableIndex,h=e.newDraggableIndex,p=e.originalEvent,u=e.putSortable,b=e.extraEventProperties;if(t=t||o&&o[wt]){var m,f=t.options,g="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||Ye||We?(m=document.createEvent("Event")).initEvent(i,!0,!0):m=new CustomEvent(i,{bubbles:!0,cancelable:!0}),m.to=s||o,m.from=n||o,m.item=r||o,m.clone=a,m.oldIndex=d,m.newIndex=l,m.oldDraggableIndex=c,m.newDraggableIndex=h,m.originalEvent=p,m.pullMode=u?u.lastPutMode:void 0;var v=je(je({},b),kt.getEventProperties(i,t));for(var _ in v)m[_]=v[_];o&&o.dispatchEvent(m),f[g]&&f[g].call(t,m)}}(je({putSortable:Ht,cloneEl:It,targetEl:Et,rootEl:Ot,oldIndex:Rt,oldDraggableIndex:Bt,newIndex:Ft,newDraggableIndex:Nt},e))}var Et,Tt,Mt,Ot,Dt,Pt,It,zt,Rt,Ft,Bt,Nt,jt,Ht,Lt,Yt,Wt,Ut,qt,Xt,Jt,Vt,Kt,Zt,Gt,Qt=!1,eo=!1,to=[],oo=!1,io=!1,ro=[],ao=!1,so=[],no="undefined"!=typeof document,lo=Xe,co=We||Ye?"cssFloat":"float",ho=no&&!Je&&!Xe&&"draggable"in document.createElement("div"),po=function(){if(no){if(Ye)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),uo=function(e,t){var o=rt(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),r=ct(e,0,t),a=ct(e,1,t),s=r&&rt(r),n=a&&rt(a),d=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+dt(r).width,l=n&&parseInt(n.marginLeft)+parseInt(n.marginRight)+dt(a).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&"none"!==s.float){var c="left"===s.float?"left":"right";return!a||"both"!==n.clear&&n.clear!==c?"horizontal":"vertical"}return r&&("block"===s.display||"flex"===s.display||"table"===s.display||"grid"===s.display||d>=i&&"none"===o[co]||a&&"none"===o[co]&&d+l>i)?"vertical":"horizontal"},bo=function(e){function t(e,o){return function(i,r,a,s){var n=i.options.group.name&&r.options.group.name&&i.options.group.name===r.options.group.name;if(null==e&&(o||n))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,r,a,s),o)(i,r,a,s);var d=(o?i:r).options.group.name;return!0===e||"string"==typeof e&&e===d||e.join&&e.indexOf(d)>-1}}var o={},i=e.group;i&&"object"==He(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},mo=function(){!po&&Mt&&rt(Mt,"display","none")},fo=function(){!po&&Mt&&rt(Mt,"display","")};no&&!Je&&document.addEventListener("click",function(e){if(eo)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),eo=!1,!1},!0);var go=function(e){if(Et){var t=function(e,t){var o;return to.some(function(i){var r=i[wt].options.emptyInsertThreshold;if(r&&!ht(i)){var a=dt(i),s=e>=a.left-r&&e<=a.right+r,n=t>=a.top-r&&t<=a.bottom+r;return s&&n?o=i:void 0}}),o}((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[wt]._onDragOver(o)}}},vo=function(e){Et&&Et.parentNode[wt]._isOutsideThisEl(e.target)};function _o(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=Be({},t),e[wt]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return uo(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==_o.supportPointer&&"PointerEvent"in window&&(!qe||Xe),emptyInsertThreshold:5};for(var i in kt.initializePlugins(this,e,o),o)!(i in t)&&(t[i]=o[i]);for(var r in bo(t),this)"_"===r.charAt(0)&&"function"==typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!t.forceFallback&&ho,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?Ke(e,"pointerdown",this._onTapStart):(Ke(e,"mousedown",this._onTapStart),Ke(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(Ke(e,"dragover",this),Ke(e,"dragenter",this)),to.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Be(this,yt())}function wo(e,t,o,i,r,a,s,n){var d,l,c=e[wt],h=c.options.onMove;return!window.CustomEvent||Ye||We?(d=document.createEvent("Event")).initEvent("move",!0,!0):d=new CustomEvent("move",{bubbles:!0,cancelable:!0}),d.to=t,d.from=e,d.dragged=o,d.draggedRect=i,d.related=r||t,d.relatedRect=a||dt(t),d.willInsertAfter=n,d.originalEvent=s,e.dispatchEvent(d),h&&(l=h.call(c,d,s)),l}function yo(e){e.draggable=!1}function xo(){ao=!1}function $o(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}function ko(e){return setTimeout(e,0)}function Co(e){return clearTimeout(e)}_o.prototype={constructor:_o,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(Vt=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,Et):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,r=i.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,n=(s||e).target,d=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||n,l=i.filter;if(function(e){so.length=0;var t=e.getElementsByTagName("input"),o=t.length;for(;o--;){var i=t[o];i.checked&&so.push(i)}}(o),!Et&&!(/mousedown|pointerdown/.test(a)&&0!==e.button||i.disabled)&&!d.isContentEditable&&(this.nativeDraggable||!qe||!n||"SELECT"!==n.tagName.toUpperCase())&&!((n=et(n,i.draggable,o,!1))&&n.animated||Pt===n)){if(Rt=pt(n),Bt=pt(n,i.draggable),"function"==typeof l){if(l.call(this,e,n,this))return At({sortable:t,rootEl:d,name:"filter",targetEl:n,toEl:o,fromEl:o}),St("filter",t,{evt:e}),void(r&&e.preventDefault())}else if(l&&(l=l.split(",").some(function(i){if(i=et(d,i.trim(),o,!1))return At({sortable:t,rootEl:i,name:"filter",targetEl:n,fromEl:o,toEl:o}),St("filter",t,{evt:e}),!0})))return void(r&&e.preventDefault());i.handle&&!et(d,i.handle,o,!1)||this._prepareDragStart(e,s,n)}}},_prepareDragStart:function(e,t,o){var i,r=this,a=r.el,s=r.options,n=a.ownerDocument;if(o&&!Et&&o.parentNode===a){var d=dt(o);if(Ot=a,Tt=(Et=o).parentNode,Dt=Et.nextSibling,Pt=o,jt=s.group,_o.dragged=Et,Lt={target:Et,clientX:(t||e).clientX,clientY:(t||e).clientY},qt=Lt.clientX-d.left,Xt=Lt.clientY-d.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,Et.style["will-change"]="all",i=function(){St("delayEnded",r,{evt:e}),_o.eventCanceled?r._onDrop():(r._disableDelayedDragEvents(),!Ue&&r.nativeDraggable&&(Et.draggable=!0),r._triggerDragStart(e,t),At({sortable:r,name:"choose",originalEvent:e}),it(Et,s.chosenClass,!0))},s.ignore.split(",").forEach(function(e){st(Et,e.trim(),yo)}),Ke(n,"dragover",go),Ke(n,"mousemove",go),Ke(n,"touchmove",go),s.supportPointer?(Ke(n,"pointerup",r._onDrop),!this.nativeDraggable&&Ke(n,"pointercancel",r._onDrop)):(Ke(n,"mouseup",r._onDrop),Ke(n,"touchend",r._onDrop),Ke(n,"touchcancel",r._onDrop)),Ue&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Et.draggable=!0),St("delayStart",this,{evt:e}),!s.delay||s.delayOnTouchOnly&&!t||this.nativeDraggable&&(We||Ye))i();else{if(_o.eventCanceled)return void this._onDrop();s.supportPointer?(Ke(n,"pointerup",r._disableDelayedDrag),Ke(n,"pointercancel",r._disableDelayedDrag)):(Ke(n,"mouseup",r._disableDelayedDrag),Ke(n,"touchend",r._disableDelayedDrag),Ke(n,"touchcancel",r._disableDelayedDrag)),Ke(n,"mousemove",r._delayedDragTouchMoveHandler),Ke(n,"touchmove",r._delayedDragTouchMoveHandler),s.supportPointer&&Ke(n,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(i,s.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Et&&yo(Et),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Ze(e,"mouseup",this._disableDelayedDrag),Ze(e,"touchend",this._disableDelayedDrag),Ze(e,"touchcancel",this._disableDelayedDrag),Ze(e,"pointerup",this._disableDelayedDrag),Ze(e,"pointercancel",this._disableDelayedDrag),Ze(e,"mousemove",this._delayedDragTouchMoveHandler),Ze(e,"touchmove",this._delayedDragTouchMoveHandler),Ze(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?Ke(document,"pointermove",this._onTouchMove):Ke(document,t?"touchmove":"mousemove",this._onTouchMove):(Ke(Et,"dragend",this),Ke(Ot,"dragstart",this._onDragStart));try{document.selection?ko(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(Qt=!1,Ot&&Et){St("dragStarted",this,{evt:t}),this.nativeDraggable&&Ke(document,"dragover",vo);var o=this.options;!e&&it(Et,o.dragClass,!1),it(Et,o.ghostClass,!0),_o.active=this,e&&this._appendGhost(),At({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Yt){this._lastX=Yt.clientX,this._lastY=Yt.clientY,mo();for(var e=document.elementFromPoint(Yt.clientX,Yt.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Yt.clientX,Yt.clientY))!==t;)t=e;if(Et.parentNode[wt]._isOutsideThisEl(e),t)do{if(t[wt]){if(t[wt]._onDragOver({clientX:Yt.clientX,clientY:Yt.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break}e=t}while(t=Qe(t));fo()}},_onTouchMove:function(e){if(Lt){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=Mt&&at(Mt,!0),s=Mt&&a&&a.a,n=Mt&&a&&a.d,d=lo&&Gt&&ut(Gt),l=(r.clientX-Lt.clientX+i.x)/(s||1)+(d?d[0]-ro[0]:0)/(s||1),c=(r.clientY-Lt.clientY+i.y)/(n||1)+(d?d[1]-ro[1]:0)/(n||1);if(!_o.active&&!Qt){if(o&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(Mt){a?(a.e+=l-(Wt||0),a.f+=c-(Ut||0)):a={a:1,b:0,c:0,d:1,e:l,f:c};var h="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");rt(Mt,"webkitTransform",h),rt(Mt,"mozTransform",h),rt(Mt,"msTransform",h),rt(Mt,"transform",h),Wt=l,Ut=c,Yt=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!Mt){var e=this.options.fallbackOnBody?document.body:Ot,t=dt(Et,!0,lo,!0,e),o=this.options;if(lo){for(Gt=e;"static"===rt(Gt,"position")&&"none"===rt(Gt,"transform")&&Gt!==document;)Gt=Gt.parentNode;Gt!==document.body&&Gt!==document.documentElement?(Gt===document&&(Gt=nt()),t.top+=Gt.scrollTop,t.left+=Gt.scrollLeft):Gt=nt(),ro=ut(Gt)}it(Mt=Et.cloneNode(!0),o.ghostClass,!1),it(Mt,o.fallbackClass,!0),it(Mt,o.dragClass,!0),rt(Mt,"transition",""),rt(Mt,"transform",""),rt(Mt,"box-sizing","border-box"),rt(Mt,"margin",0),rt(Mt,"top",t.top),rt(Mt,"left",t.left),rt(Mt,"width",t.width),rt(Mt,"height",t.height),rt(Mt,"opacity","0.8"),rt(Mt,"position",lo?"absolute":"fixed"),rt(Mt,"zIndex","100000"),rt(Mt,"pointerEvents","none"),_o.ghost=Mt,e.appendChild(Mt),rt(Mt,"transform-origin",qt/parseInt(Mt.style.width)*100+"% "+Xt/parseInt(Mt.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,r=o.options;St("dragStart",this,{evt:e}),_o.eventCanceled?this._onDrop():(St("setupClone",this),_o.eventCanceled||((It=vt(Et)).removeAttribute("id"),It.draggable=!1,It.style["will-change"]="",this._hideClone(),it(It,this.options.chosenClass,!1),_o.clone=It),o.cloneId=ko(function(){St("clone",o),_o.eventCanceled||(o.options.removeCloneOnHide||Ot.insertBefore(It,Et),o._hideClone(),At({sortable:o,name:"clone"}))}),!t&&it(Et,r.dragClass,!0),t?(eo=!0,o._loopId=setInterval(o._emulateDragOver,50)):(Ze(document,"mouseup",o._onDrop),Ze(document,"touchend",o._onDrop),Ze(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(o,i,Et)),Ke(document,"drop",o),rt(Et,"transform","translateZ(0)")),Qt=!0,o._dragStartId=ko(o._dragStarted.bind(o,t,e)),Ke(document,"selectstart",o),Jt=!0,window.getSelection().removeAllRanges(),qe&&rt(document.body,"user-select","none"))},_onDragOver:function(e){var t,o,i,r,a=this.el,s=e.target,n=this.options,d=n.group,l=_o.active,c=jt===d,h=n.sort,p=Ht||l,u=this,b=!1;if(!ao){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),s=et(s,n.draggable,a,!0),T("dragOver"),_o.eventCanceled)return b;if(Et.contains(e.target)||s.animated&&s.animatingX&&s.animatingY||u._ignoreWhileAnimating===s)return O(!1);if(eo=!1,l&&!n.disabled&&(c?h||(i=Tt!==Ot):Ht===this||(this.lastPutMode=jt.checkPull(this,l,Et,e))&&d.checkPut(this,l,Et,e))){if(r="vertical"===this._getDirection(e,s),t=dt(Et),T("dragOverValid"),_o.eventCanceled)return b;if(i)return Tt=Ot,M(),this._hideClone(),T("revert"),_o.eventCanceled||(Dt?Ot.insertBefore(Et,Dt):Ot.appendChild(Et)),O(!0);var m=ht(a,n.draggable);if(!m||function(e,t,o){var i=dt(ht(o.el,o.options.draggable)),r=_t(o.el,o.options,Mt),a=10;return t?e.clientX>r.right+a||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>r.bottom+a||e.clientX>i.right&&e.clientY>i.top}(e,r,this)&&!m.animated){if(m===Et)return O(!1);if(m&&a===e.target&&(s=m),s&&(o=dt(s)),!1!==wo(Ot,a,Et,t,s,o,e,!!s))return M(),m&&m.nextSibling?a.insertBefore(Et,m.nextSibling):a.appendChild(Et),Tt=a,D(),O(!0)}else if(m&&function(e,t,o){var i=dt(ct(o.el,0,o.options,!0)),r=_t(o.el,o.options,Mt),a=10;return t?e.clientX<r.left-a||e.clientY<i.top&&e.clientX<i.right:e.clientY<r.top-a||e.clientY<i.bottom&&e.clientX<i.left}(e,r,this)){var f=ct(a,0,n,!0);if(f===Et)return O(!1);if(o=dt(s=f),!1!==wo(Ot,a,Et,t,s,o,e,!1))return M(),a.insertBefore(Et,f),Tt=a,D(),O(!0)}else if(s.parentNode===a){o=dt(s);var g,v,_,w=Et.parentNode!==a,y=!function(e,t,o){var i=o?e.left:e.top,r=o?e.right:e.bottom,a=o?e.width:e.height,s=o?t.left:t.top,n=o?t.right:t.bottom,d=o?t.width:t.height;return i===s||r===n||i+a/2===s+d/2}(Et.animated&&Et.toRect||t,s.animated&&s.toRect||o,r),x=r?"top":"left",$=lt(s,"top","top")||lt(Et,"top","top"),k=$?$.scrollTop:void 0;if(Vt!==s&&(v=o[x],oo=!1,io=!y&&n.invertSwap||w),g=function(e,t,o,i,r,a,s,n){var d=i?e.clientY:e.clientX,l=i?o.height:o.width,c=i?o.top:o.left,h=i?o.bottom:o.right,p=!1;if(!s)if(n&&Zt<l*r){if(!oo&&(1===Kt?d>c+l*a/2:d<h-l*a/2)&&(oo=!0),oo)p=!0;else if(1===Kt?d<c+Zt:d>h-Zt)return-Kt}else if(d>c+l*(1-r)/2&&d<h-l*(1-r)/2)return function(e){return pt(Et)<pt(e)?1:-1}(t);if((p=p||s)&&(d<c+l*a/2||d>h-l*a/2))return d>c+l/2?1:-1;return 0}(e,s,o,r,y?1:n.swapThreshold,null==n.invertedSwapThreshold?n.swapThreshold:n.invertedSwapThreshold,io,Vt===s),0!==g){var C=pt(Et);do{C-=g,_=Tt.children[C]}while(_&&("none"===rt(_,"display")||_===Mt))}if(0===g||_===s)return O(!1);Vt=s,Kt=g;var S=s.nextElementSibling,A=!1,E=wo(Ot,a,Et,t,s,o,e,A=1===g);if(!1!==E)return 1!==E&&-1!==E||(A=1===E),ao=!0,setTimeout(xo,30),M(),A&&!S?a.appendChild(Et):s.parentNode.insertBefore(Et,A?S:s),$&&gt($,0,k-$.scrollTop),Tt=Et.parentNode,void 0===v||io||(Zt=Math.abs(v-dt(s)[x])),D(),O(!0)}if(a.contains(Et))return O(!1)}return!1}function T(n,d){St(n,u,je({evt:e,isOwner:c,axis:r?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:h,fromSortable:p,target:s,completed:O,onMove:function(o,i){return wo(Ot,a,Et,t,o,dt(o),e,i)},changed:D},d))}function M(){T("dragOverAnimationCapture"),u.captureAnimationState(),u!==p&&p.captureAnimationState()}function O(t){return T("dragOverCompleted",{insertion:t}),t&&(c?l._hideClone():l._showClone(u),u!==p&&(it(Et,Ht?Ht.options.ghostClass:l.options.ghostClass,!1),it(Et,n.ghostClass,!0)),Ht!==u&&u!==_o.active?Ht=u:u===_o.active&&Ht&&(Ht=null),p===u&&(u._ignoreWhileAnimating=s),u.animateAll(function(){T("dragOverAnimationComplete"),u._ignoreWhileAnimating=null}),u!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(s===Et&&!Et.animated||s===a&&!s.animated)&&(Vt=null),n.dragoverBubble||e.rootEl||s===document||(Et.parentNode[wt]._isOutsideThisEl(e.target),!t&&go(e)),!n.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function D(){Ft=pt(Et),Nt=pt(Et,n.draggable),At({sortable:u,name:"change",toEl:a,newIndex:Ft,newDraggableIndex:Nt,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ze(document,"mousemove",this._onTouchMove),Ze(document,"touchmove",this._onTouchMove),Ze(document,"pointermove",this._onTouchMove),Ze(document,"dragover",go),Ze(document,"mousemove",go),Ze(document,"touchmove",go)},_offUpEvents:function(){var e=this.el.ownerDocument;Ze(e,"mouseup",this._onDrop),Ze(e,"touchend",this._onDrop),Ze(e,"pointerup",this._onDrop),Ze(e,"pointercancel",this._onDrop),Ze(e,"touchcancel",this._onDrop),Ze(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;Ft=pt(Et),Nt=pt(Et,o.draggable),St("drop",this,{evt:e}),Tt=Et&&Et.parentNode,Ft=pt(Et),Nt=pt(Et,o.draggable),_o.eventCanceled||(Qt=!1,io=!1,oo=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Co(this.cloneId),Co(this._dragStartId),this.nativeDraggable&&(Ze(document,"drop",this),Ze(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),qe&&rt(document.body,"user-select",""),rt(Et,"transform",""),e&&(Jt&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),Mt&&Mt.parentNode&&Mt.parentNode.removeChild(Mt),(Ot===Tt||Ht&&"clone"!==Ht.lastPutMode)&&It&&It.parentNode&&It.parentNode.removeChild(It),Et&&(this.nativeDraggable&&Ze(Et,"dragend",this),yo(Et),Et.style["will-change"]="",Jt&&!Qt&&it(Et,Ht?Ht.options.ghostClass:this.options.ghostClass,!1),it(Et,this.options.chosenClass,!1),At({sortable:this,name:"unchoose",toEl:Tt,newIndex:null,newDraggableIndex:null,originalEvent:e}),Ot!==Tt?(Ft>=0&&(At({rootEl:Tt,name:"add",toEl:Tt,fromEl:Ot,originalEvent:e}),At({sortable:this,name:"remove",toEl:Tt,originalEvent:e}),At({rootEl:Tt,name:"sort",toEl:Tt,fromEl:Ot,originalEvent:e}),At({sortable:this,name:"sort",toEl:Tt,originalEvent:e})),Ht&&Ht.save()):Ft!==Rt&&Ft>=0&&(At({sortable:this,name:"update",toEl:Tt,originalEvent:e}),At({sortable:this,name:"sort",toEl:Tt,originalEvent:e})),_o.active&&(null!=Ft&&-1!==Ft||(Ft=Rt,Nt=Bt),At({sortable:this,name:"end",toEl:Tt,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){St("nulling",this),Ot=Et=Tt=Mt=Dt=It=Pt=zt=Lt=Yt=Jt=Ft=Nt=Rt=Bt=Vt=Kt=Ht=jt=_o.dragged=_o.ghost=_o.clone=_o.active=null;var e=this.el;so.forEach(function(t){e.contains(t)&&(t.checked=!0)}),so.length=Wt=Ut=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":Et&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move");e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)et(e=o[i],a.draggable,this.el,!1)&&t.push(e.getAttribute(a.dataIdAttr)||$o(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(e,t){var r=i.children[t];et(r,this.options.draggable,i,!1)&&(o[e]=r)},this),t&&this.captureAnimationState(),e.forEach(function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return et(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=kt.modifyOption(this,e,t);o[e]=void 0!==i?i:t,"group"===e&&bo(o)},destroy:function(){St("destroy",this);var e=this.el;e[wt]=null,Ze(e,"mousedown",this._onTapStart),Ze(e,"touchstart",this._onTapStart),Ze(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ze(e,"dragover",this),Ze(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),to.splice(to.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!zt){if(St("hideClone",this),_o.eventCanceled)return;rt(It,"display","none"),this.options.removeCloneOnHide&&It.parentNode&&It.parentNode.removeChild(It),zt=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(zt){if(St("showClone",this),_o.eventCanceled)return;Et.parentNode!=Ot||this.options.group.revertClone?Dt?Ot.insertBefore(It,Dt):Ot.appendChild(It):Ot.insertBefore(It,Et),this.options.group.revertClone&&this.animate(Et,It),rt(It,"display",""),zt=!1}}else this._hideClone()}},no&&Ke(document,"touchmove",function(e){(_o.active||Qt)&&e.cancelable&&e.preventDefault()}),_o.utils={on:Ke,off:Ze,css:rt,find:st,is:function(e,t){return!!et(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:ft,closest:et,toggleClass:it,clone:vt,index:pt,nextTick:ko,cancelNextTick:Co,detectDirection:uo,getChild:ct,expando:wt},_o.get=function(e){return e[wt]},_o.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(_o.utils=je(je({},_o.utils),e.utils)),kt.mount(e)})},_o.create=function(e,t){return new _o(e,t)},_o.version="1.15.7";var So,Ao,Eo,To,Mo,Oo,Do=[],Po=!1;function Io(){Do.forEach(function(e){clearInterval(e.pid)}),Do=[]}function zo(){clearInterval(Oo)}var Ro=ft(function(e,t,o,i){if(t.scroll){var r,a=(e.touches?e.touches[0]:e).clientX,s=(e.touches?e.touches[0]:e).clientY,n=t.scrollSensitivity,d=t.scrollSpeed,l=nt(),c=!1;Ao!==o&&(Ao=o,Io(),So=t.scroll,r=t.scrollFn,!0===So&&(So=bt(o,!0)));var h=0,p=So;do{var u=p,b=dt(u),m=b.top,f=b.bottom,g=b.left,v=b.right,_=b.width,w=b.height,y=void 0,x=void 0,$=u.scrollWidth,k=u.scrollHeight,C=rt(u),S=u.scrollLeft,A=u.scrollTop;u===l?(y=_<$&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),x=w<k&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(y=_<$&&("auto"===C.overflowX||"scroll"===C.overflowX),x=w<k&&("auto"===C.overflowY||"scroll"===C.overflowY));var E=y&&(Math.abs(v-a)<=n&&S+_<$)-(Math.abs(g-a)<=n&&!!S),T=x&&(Math.abs(f-s)<=n&&A+w<k)-(Math.abs(m-s)<=n&&!!A);if(!Do[h])for(var M=0;M<=h;M++)Do[M]||(Do[M]={});Do[h].vx==E&&Do[h].vy==T&&Do[h].el===u||(Do[h].el=u,Do[h].vx=E,Do[h].vy=T,clearInterval(Do[h].pid),0==E&&0==T||(c=!0,Do[h].pid=setInterval(function(){i&&0===this.layer&&_o.active._onTouchMove(Mo);var t=Do[this.layer].vy?Do[this.layer].vy*d:0,o=Do[this.layer].vx?Do[this.layer].vx*d:0;"function"==typeof r&&"continue"!==r.call(_o.dragged.parentNode[wt],o,t,e,Mo,Do[this.layer].el)||gt(Do[this.layer].el,o,t)}.bind({layer:h}),24))),h++}while(t.bubbleScroll&&p!==l&&(p=bt(p,!1)));Po=c}},30),Fo=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,s=e.hideGhostForTarget,n=e.unhideGhostForTarget;if(t){var d=o||r;s();var l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,c=document.elementFromPoint(l.clientX,l.clientY);n(),d&&!d.el.contains(c)&&(a("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function Bo(){}function No(){}Bo.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=ct(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:Fo},Be(Bo,{pluginName:"revertOnSpill"}),No.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:Fo},Be(No,{pluginName:"removeOnSpill"}),_o.mount(new function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?Ke(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Ke(document,"pointermove",this._handleFallbackAutoScroll):t.touches?Ke(document,"touchmove",this._handleFallbackAutoScroll):Ke(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?Ze(document,"dragover",this._handleAutoScroll):(Ze(document,"pointermove",this._handleFallbackAutoScroll),Ze(document,"touchmove",this._handleFallbackAutoScroll),Ze(document,"mousemove",this._handleFallbackAutoScroll)),zo(),Io(),clearTimeout(tt),tt=void 0},nulling:function(){Mo=Ao=So=Po=Oo=Eo=To=null,Do.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var o=this,i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=document.elementFromPoint(i,r);if(Mo=e,t||this.options.forceAutoScrollFallback||We||Ye||qe){Ro(e,this.options,a,t);var s=bt(a,!0);!Po||Oo&&i===Eo&&r===To||(Oo&&zo(),Oo=setInterval(function(){var a=bt(document.elementFromPoint(i,r),!0);a!==s&&(s=a,Io()),Ro(e,o.options,a,t)},10),Eo=i,To=r)}else{if(!this.options.bubbleScroll||bt(a,!0)===nt())return void Io();Ro(e,this.options,bt(a,!1),!1)}}},Be(e,{pluginName:"scroll",initializeByDefault:!0})}),_o.mount(No,Bo);const jo=(e,t,o,a)=>{const s=o?.action;if(o&&s&&"none"!==s)switch(s){case"toggle":{const e=o.entity??a;e&&t.states[e]&&function(e,t){(function(e,t,o){void 0===o&&(o=!0);var i,r=function(e){return e.substr(0,e.indexOf("."))}(t),a="group"===r?"homeassistant":r;switch(r){case"lock":i=o?"unlock":"lock";break;case"cover":i=o?"open_cover":"close_cover";break;default:i=o?"turn_on":"turn_off"}e.callService(a,i,{entity_id:t})})(e,t,i.includes(e.states[t].state))}(t,e);break}case"more-info":{const t=o.entity??a;t&&r(e,"hass-more-info",{entityId:t});break}case"navigate":o.navigation_path&&function(e,t,o){void 0===o&&(o=!1),o?history.replaceState(null,"",t):history.pushState(null,"",t),r(window,"location-changed",{replace:o})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"assist":{const i=t.auth?.external;if(i?.config?.hasAssist&&"function"==typeof i.fireMessage){i.fireMessage({type:"assist/show",payload:{pipeline_id:o.pipeline_id,start_listening:o.start_listening??!0}});break}r(e,"show-dialog",{dialogTag:"ha-voice-command-dialog",dialogImport:()=>customElements.whenDefined("ha-voice-command-dialog"),dialogParams:{pipeline_id:o.pipeline_id,start_listening:o.start_listening??!1}});break}case"call-service":{if(!o.service)break;const[e,i]=o.service.split(".",2),r=o.entity?{entity_id:o.entity}:void 0;t.callService(e,i,o.data,r);break}}},Ho=(e,t,o="dashboard-sidebar")=>{const i=customElements.get("card-mod");if("function"!=typeof i?.applyToElement)return!1;try{return i.applyToElement(e,o,t),!0}catch(e){return console.warn("[dashboard-sidebar] card-mod failed:",e),!1}},Lo="dashboard_sidebar",Yo=240,Wo="dashboard-sidebar-toggle",Uo="dashboard-sidebar-edit",qo="dashboard-sidebar-preview-select",Xo="dashboard-sidebar-preview-reorder",Jo=e=>String(e).padStart(2,"0"),Vo=(e,t,o)=>new Intl.DateTimeFormat(t,o).format(e),Ko=(e,t)=>{if(!t)return e;try{const o=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(e),i=e=>Number(o.find(t=>t.type===e)?.value);return new Date(i("year"),i("month")-1,i("day"),i("hour"),i("minute"),i("second"))}catch{return e}},Zo=(e,t,o,i)=>{const r=(e.getHours()+11)%12+1;return t.replace(/%(-?)([A-Za-z%])/g,(t,a,s)=>{if(i&&!i.has(s))return t;const n=e=>"-"===a?String(e):Jo(e);switch(s){case"Y":return String(e.getFullYear());case"y":return Jo(e.getFullYear()%100);case"m":return n(e.getMonth()+1);case"B":return Vo(e,o,{month:"long"});case"b":case"h":return Vo(e,o,{month:"short"});case"d":return n(e.getDate());case"e":return String(e.getDate()).padStart(2," ");case"A":return Vo(e,o,{weekday:"long"});case"a":return Vo(e,o,{weekday:"short"});case"j":return String((e=>{const t=new Date(e.getFullYear(),0,0),o=e.getTime()-t.getTime();return Math.floor(o/864e5)})(e)).padStart(3,"0");case"H":return n(e.getHours());case"I":return n(r);case"M":return n(e.getMinutes());case"S":return n(e.getSeconds());case"p":return e.getHours()<12?"AM":"PM";case"P":return e.getHours()<12?"am":"pm";case"z":return(e=>{const t=-e.getTimezoneOffset(),o=t>=0?"+":"-",i=Math.abs(t);return`${o}${Jo(Math.floor(i/60))}${Jo(i%60)}`})(e);case"Z":return((e,t)=>{const o=new Intl.DateTimeFormat(t,{timeZoneName:"short"}).formatToParts(e);return o.find(e=>"timeZoneName"===e.type)?.value??""})(e,o);case"%":return"%";default:return t}})},Go=new Set(["H","I","M","S","p","P","z","Z","%"]),Qo=new Set(["Y","y","m","B","b","h","d","e","A","a","j","%"]),ei={iso:"%H:%M:%S","24h":"%H:%M","12h":"%-I:%M %p"},ti={iso:"%Y-%m-%d"},oi=(e,t,o)=>t&&"locale"!==t?Zo(e,ei[t]??t,o,Go):e.toLocaleTimeString(o),ii=(e,t,o)=>t&&"locale"!==t?Zo(e,ti[t]??t,o,Qo):e.toLocaleDateString(o),ri=(e,t)=>{if(t){return`${(e.getHours()+11)%12+1}:${Jo(e.getMinutes())}`}return`${Jo(e.getHours())}:${Jo(e.getMinutes())}`},ai=e=>`${e.getMonth()+1}-${e.getDate()}`,si=e=>{const t=e.trim().split(/\s+/).filter(Boolean);return 0===t.length?"":1===t.length?t[0].slice(0,2):t[0][0]+t[1][0]},ni=/\{\{|\{%|\{#/,di=e=>"string"==typeof e&&ni.test(e);class li{constructor(e){this._subs=new Map,this._onChange=e}setHass(e){const t=!this._hass;this._hass=e,t&&e?.connection&&this._flush()}collect(e){this.clear();const t=e=>{di(e)&&!this._subs.has(e)&&this._subs.set(e,{value:""})},o=e=>{t(e.title),t(e.icon),t(e.text_color),t(e.icon_color)},i=e=>{switch(e.type){case"title":t(e.text),t(e.text_color);break;case"clock":case"date":case"markdown":t(e.text_color);break;case"divider":t(e.color);break;case"item":o(e);break;case"category":t(e.title),t(e.icon),t(e.text_color),t(e.icon_color),e.items.forEach(o)}};(e.header??[]).forEach(i),(e.body??[]).forEach(i),(e.footer?.buttons??[]).forEach(e=>{t(e.icon),t(e.icon_color),t(e.title)}),t(e.footer?.markdown_color),this._flush()}resolve(e){return void 0===e?"":di(e)?this._subs.get(e)?.value??"":e}clear(){this._subs.forEach(e=>{e.unsub?.then(e=>e()).catch(()=>{})}),this._subs.clear()}_flush(){const e=this._hass;e?.connection&&this._subs.forEach((t,o)=>{t.unsub||(t.unsub=e.connection.subscribeMessage(e=>{const t=this._subs.get(o);t&&(t.value=e.result,this._onChange())},{type:"render_template",template:o}))})}}const ci=["left","center","right"],hi=["left","right"],pi=new Set(ci),ui=new Set(["position","width","start_collapsed","overlay","on_desktop","on_mobile","breakpoint","users","background","header","body","footer","mobile","card_mod"]),bi=["hour_format","collapsed_format"],mi=Object.fromEntries(Object.entries({title:["type","text","align","text_color","tap_action","hold_action","double_tap_action","active_highlight","class","id","card_mod"],clock:["type","format","timezone","align","text_color","tap_action","hold_action","double_tap_action","active_highlight","class","id","card_mod"],date:["type","format","timezone","align","text_color","tap_action","hold_action","double_tap_action","active_highlight","class","id","card_mod"],divider:["type","color","class","id","card_mod"],item:["type","title","icon","abbr","text_color","icon_color","entity","tap_action","hold_action","double_tap_action","active_highlight","class","id","card_mod"],category:["type","title","icon","abbr","text_color","icon_color","start_collapsed","guide_line","items","class","id","card_mod"],markdown:["type","content","align","text_color","class","id","card_mod"],card:["type","card","align","background","class","id","card_mod"]}).map(([e,t])=>[e,new Set("clock"===e?[...t,...bi]:t)])),fi=new Set(["divider","buttons","card","markdown","markdown_color","tap_action","hold_action","double_tap_action"]),gi=new Set(["icon","icon_color","title","entity","tap_action","hold_action","double_tap_action","active_highlight","class","id","card_mod"]),vi=(e,t,o,i)=>{Object.keys(e).forEach(e=>{t.has(e)||i.push(`${o}: unknown option "${e}"`)})},_i=(e,t,o)=>{void 0!==e&&"boolean"!=typeof e&&o.push(`${t}: must be true or false`)},wi=(e,t,o)=>{void 0===e||"string"==typeof e&&pi.has(e)||o.push(`${t}: must be left, center, or right`)},yi=(e,t,o)=>{void 0!==e&&"string"!=typeof e&&o.push(`${t}: must be a string`)},xi=(e,t,o,i)=>{yi(e,`${o}.abbr`,i),void 0!==e&&void 0!==t&&i.push(`${o}: abbr is only allowed when icon is not set`)},$i=(e,t,o)=>{void 0===e||"object"==typeof e&&null!==e&&!Array.isArray(e)||o.push(`${t}: must be a mapping`)},ki=(e,t,o)=>{const i=e;yi(i.class,`${t}.class`,o),yi(i.id,`${t}.id`,o),$i(i.card_mod,`${t}.card_mod`,o)},Ci=(e,t,o)=>{vi(e,mi.item,t,o),void 0!==e.type&&"item"!==e.type&&o.push(`${t}: expected an item`),"string"!=typeof e.title&&o.push(`${t}: needs a title`),e.tap_action||o.push(`${t}: needs a tap_action`),xi(e.abbr,e.icon,t,o),ki(e,t,o),_i(e.active_highlight,`${t}.active_highlight`,o)},Si=(e,t,o)=>{if(!e||"object"!=typeof e)return void o.push(`${t}: must be a mapping`);const i=e.type;if("string"==typeof i&&i in mi)switch(vi(e,mi[i],t,o),"item"!==i&&(ki(e,t,o),_i(e.active_highlight,`${t}.active_highlight`,o)),i){case"title":"string"!=typeof e.text&&o.push(`${t}: title needs text`),wi(e.align,`${t}.align`,o);break;case"clock":{const i=e;for(const e of["hour_format","collapsed_format"]){const r=i[e];void 0===r||["12h","24h"].includes(String(r))||o.push(`${t}.${e}: must be "12h" or "24h"`)}wi(i.align,`${t}.align`,o);break}case"date":wi(e.align,`${t}.align`,o);break;case"divider":break;case"item":Ci(e,t,o);break;case"category":"string"!=typeof e.title&&o.push(`${t}: category needs a title`),_i(e.start_collapsed,`${t}.start_collapsed`,o),_i(e.guide_line,`${t}.guide_line`,o),xi(e.abbr,e.icon,t,o);{const i=e.items;Array.isArray(i)&&0!==i.length?i.forEach((e,i)=>{const r=e?.type;"category"===r||"divider"===r?o.push(`${t}.items[${i}]: a category can only contain items`):Ci(e,`${t}.items[${i}]`,o)}):o.push(`${t}: category needs a non-empty items list`)}break;case"markdown":wi(e.align,`${t}.align`,o),"string"!=typeof e.content&&o.push(`${t}: markdown needs content`);break;case"card":wi(e.align,`${t}.align`,o),void 0===e.card&&o.push(`${t}: card needs a card config`)}else o.push(`${t}: needs a valid type (${Object.keys(mi).join(", ")})`)},Ai=(e,t,o)=>{void 0!==e&&(Array.isArray(e)?e.forEach((e,i)=>Si(e,`${t}[${i}]`,o)):o.push(`${t}: must be a list`))},Ei=(e,t,o)=>{if(void 0===e)return;if(!e||"object"!=typeof e||Array.isArray(e))return void o.push(`${t}: must be a mapping`);vi(e,fi,t,o);const i=e;_i(i.divider,`${t}.divider`,o);const r=[i.buttons,i.card,i.markdown].filter(e=>void 0!==e).length;r>1&&o.push(`${t}: set only one of buttons, card, or markdown`),void 0!==i.markdown&&yi(i.markdown,`${t}.markdown`,o),void 0!==i.buttons&&(Array.isArray(i.buttons)?i.buttons.forEach((e,i)=>Ti(e,`${t}.buttons[${i}]`,o)):o.push(`${t}.buttons: must be a list`))},Ti=(e,t,o)=>{e&&"object"==typeof e?(vi(e,gi,t,o),"string"!=typeof e.icon&&o.push(`${t}: needs an icon`),e.tap_action||o.push(`${t}: needs a tap_action`),ki(e,t,o),_i(e.active_highlight,`${t}.active_highlight`,o)):o.push(`${t}: must be a mapping`)},Mi=new Set(["mode","items","menu","footer","position","labels","background","card_mod"]),Oi=new Set(["mirror","custom"]),Di=e=>{const t=[];if(!e||"object"!=typeof e)return["dashboard_sidebar: config must be a mapping"];const o=e;return vi(e,new Set([...ui,"hide_on_mobile","hide_on_desktop"]),"dashboard_sidebar",t),void 0!==e.position&&"left"!==e.position&&"right"!==e.position&&t.push('position: must be "left" or "right"'),void 0!==e.width&&"number"!=typeof e.width&&t.push("width: must be a number"),_i(o.start_collapsed,"start_collapsed",t),_i(o.overlay,"overlay",t),void 0!==e.on_desktop&&"sidebar"!==e.on_desktop&&"hidden"!==e.on_desktop&&t.push('on_desktop: must be "sidebar" or "hidden"'),void 0!==e.on_mobile&&"sidebar"!==e.on_mobile&&"bar"!==e.on_mobile&&"hidden"!==e.on_mobile&&t.push('on_mobile: must be "sidebar", "bar", or "hidden"'),void 0!==e.mobile&&void 0!==e.on_mobile&&"bar"!==e.on_mobile&&t.push('on_mobile: a `mobile` bar config is only used when on_mobile is "bar"'),"hidden"===e.on_desktop&&"hidden"===e.on_mobile&&t.push("on_desktop: hidden on desktop and mobile means nothing would ever render"),void 0!==e.breakpoint&&("number"!=typeof e.breakpoint||e.breakpoint<=0)&&t.push("breakpoint: must be a positive number of pixels"),void 0!==e.users&&(Array.isArray(e.users)?0===e.users.length?t.push("users: an empty list hides the sidebar from everyone; remove the key instead"):e.users.forEach((e,o)=>{"string"==typeof e&&""!==e.trim()||t.push(`users[${o}]: must be a non-empty user id or name`)}):t.push("users: must be a list of user ids or names")),void 0!==o.hide_on_mobile&&t.push("hide_on_mobile: replaced by `on_mobile: hidden`"),void 0!==o.hide_on_desktop&&t.push("hide_on_desktop: replaced by `on_desktop: hidden`"),$i(o.card_mod,"card_mod",t),Ai(e.header,"header",t),Ai(e.body,"body",t),void 0===e.header&&void 0===e.body&&t.push("dashboard_sidebar: needs a header or body with at least one block"),Ei(e.footer,"footer",t),((e,t)=>{const o=e.mobile;if(void 0===o)return;if(!o||"object"!=typeof o||Array.isArray(o))return void t.push("mobile: must be a mapping");vi(o,new Set([...Mi,"breakpoint"]),"mobile",t),void 0===o.mode||Oi.has(o.mode)||t.push('mobile.mode: must be "mirror" or "custom"');const i="custom"===o.mode;if(!i)for(const e of["items","menu","footer"])void 0!==o[e]&&t.push(`mobile.${e}: not part of a mirrored bar; set \`mode: custom\` to spell the bar out, or remove it`);if(void 0!==o.breakpoint&&t.push("mobile.breakpoint: moved to the top-level `breakpoint` option"),_i(o.labels,"mobile.labels",t),void 0!==o.position&&"top"!==o.position&&"bottom"!==o.position&&t.push('mobile.position: must be "top" or "bottom"'),yi(o.background,"mobile.background",t),$i(o.card_mod,"mobile.card_mod",t),i&&void 0!==o.items){if(!Array.isArray(o.items))return void t.push("mobile.items: must be a list");o.items.forEach((e,o)=>{const i=`mobile.items[${o}]`;if(!e||"object"!=typeof e||Array.isArray(e))return void t.push(`${i}: must be a mapping`);const r=e.type;void 0===r||"item"===r?Ci(e,i,t):["category","divider","clock","date"].includes(r)?Si(e,i,t):t.push(`${i}: type "${r}" is not bar-eligible (items, categories, dividers, clocks, dates)`)})}if(void 0!==o.footer&&Ei(o.footer,"mobile.footer",t),void 0!==o.menu){if(!Array.isArray(o.menu))return void t.push("mobile.menu: must be a list");o.menu.forEach((e,o)=>{const i=`mobile.menu[${o}]`;if(!e||"object"!=typeof e||Array.isArray(e))return void t.push(`${i}: must be a mapping`);const r=e.type;void 0===r||"item"===r?Ci(e,i,t):Si(e,i,t)})}})(e,t),t},Pi=e=>e.map(e=>e.replace(/^element[.:]?\s*/,"")),Ii=e=>{const t=[];return Si(e,"element",t),Pi(t)},zi=e=>{const t=[],o=e?.type;return"category"===o||"divider"===o?t.push("a category can only contain items"):Ci(e,"element",t),Pi(t)},Ri=e=>{const t=[];return Ti(e,"element",t),Pi(t)},Fi=[h`
  :host {
    /* Surfaces and text. The panel deliberately takes the card background
       rather than the nav sidebar's: themes commonly paint that rail the same
       color as the page behind it, which leaves this sidebar with no visible
       edge against the view it docks to. */
    --dashboard-sidebar-background: var(
      --card-background-color,
      var(--primary-background-color, #fff)
    );
    --dashboard-sidebar-surface-background: var(--dashboard-sidebar-background);
    --dashboard-sidebar-text-color: var(--sidebar-text-color, var(--primary-text-color, #000));
    --dashboard-sidebar-icon-color: var(
      --sidebar-icon-color,
      var(--paper-item-icon-color, var(--primary-text-color, #000))
    );
    --dashboard-sidebar-divider-color: var(--divider-color, rgb(0 0 0 / 12%));
    --dashboard-sidebar-hover-background: var(--divider-color, rgb(0 0 0 / 8%));

    /* The active/selected accent, and readable text on top of it. */
    --dashboard-sidebar-accent-color: var(
      --sidebar-selected-icon-color,
      var(--primary-color, #03a9f4)
    );
    --dashboard-sidebar-accent-text-color: var(
      --sidebar-selected-text-color,
      var(--dashboard-sidebar-accent-color)
    );
    --dashboard-sidebar-on-accent-color: var(--text-primary-color, #fff);

    /* Geometry: rows and floating surfaces follow the theme's card radius. */
    --dashboard-sidebar-item-radius: var(--ha-card-border-radius, 10px);
    --dashboard-sidebar-radius: var(--ha-card-border-radius, 12px);
    --dashboard-sidebar-tooltip-radius: var(--ha-card-border-radius, 6px);
    --dashboard-sidebar-border: var(--ha-card-border-width, 1px) solid
      var(--ha-card-border-color, var(--dashboard-sidebar-divider-color));

    /* Elevation. A theme that flattens its cards flattens these too; the
       popover keeps its border so it still reads as a separate surface. */
    --dashboard-sidebar-popover-shadow: var(--ha-card-box-shadow, 0 4px 16px rgb(0 0 0 / 30%));
    --dashboard-sidebar-tooltip-shadow: var(--ha-card-box-shadow, 0 2px 8px rgb(0 0 0 / 30%));
    --dashboard-sidebar-toggle-shadow: var(--ha-card-box-shadow, 0 1px 4px rgb(0 0 0 / 25%));

    display: block;
    height: 100%;
    box-sizing: border-box;
    color: var(--dashboard-sidebar-text-color);
    background: var(--dashboard-sidebar-background);
    /* Append color-emoji fonts so emoji render regardless of the inherited font
       stack (the editor preview's context otherwise lacks an emoji fallback). */
    font-family:
      var(--ha-font-family-body, inherit), 'Apple Color Emoji', 'Segoe UI Emoji',
      'Noto Color Emoji', sans-serif;
  }

  .sidebar {
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 16px 12px;
    overflow: visible;
  }

  /* A title/clock/date with a tap action shows it is interactive. */
  .clickable {
    cursor: pointer;
  }

  /* An element whose navigate action targets the current page is highlighted
     with the theme accent (rows/buttons also get a tinted pill). */
  .nav-active {
    color: var(--dashboard-sidebar-accent-text-color);
  }

  .row.nav-active,
  .footer-btn.nav-active {
    background: color-mix(in srgb, var(--dashboard-sidebar-accent-color) 14%, transparent);
    border-radius: var(--dashboard-sidebar-item-radius);
  }

  .nav-active ha-icon,
  .nav-active .dashboard-sidebar-item-icon {
    color: var(--dashboard-sidebar-accent-color);
  }

  /* Inert single-block preview embedded in the editor: no host box, no
     interaction, sized to its content. */
  :host([preview]) {
    height: auto;
    background: transparent;
  }

  :host([preview]) .sidebar,
  :host([preview]) .sidebar.preview {
    height: auto;
    /* Keep the real horizontal inset so content sits where it will in the live
       sidebar, but no vertical padding so stacked previews stay compact. */
    padding: 0 12px;
  }

  /* Collapsed preview sits in a narrow icon-strip frame, so drop the inset. */
  :host([preview]) .sidebar.collapsed {
    padding: 0;
  }

  /* Every element in a preview is clickable to select and draggable to reorder,
     so show a pointer and mark the selected one with an outline. */
  :host([preview]) .row,
  :host([preview]) .app-title,
  :host([preview]) .clock,
  :host([preview]) .date,
  :host([preview]) .entry-divider,
  :host([preview]) .content,
  :host([preview]) .footer-btn {
    cursor: pointer;
  }

  /* Give the divider a taller hit area so it can be selected and dragged, while
     the visible line stays 1px like live: the vertical margin becomes padding
     (same footprint) and the background paints only the 1px content strip. */
  :host([preview]) .entry-divider {
    box-sizing: content-box;
    min-height: 1px;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    background-clip: content-box;
  }

  :host([preview]) .sb-selected {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: 1px;
    border-radius: 8px;
  }

  :host([preview]) .sortable-ghost {
    opacity: 0.4;
  }

  :host([preview]) .region-header {
    margin-bottom: 0;
  }

  :host([preview]) .region-body {
    overflow: visible;
  }

  :host([preview]) .footer {
    margin-top: 0;
  }

  /* Whole-sidebar preview (the Settings tab): fill the flex-column preview frame
     all the way down — host, then sidebar — via flex (not a percentage height,
     which does not resolve reliably through the frame's flex item) so the body
     grows and the footer pins to the bottom, mirroring the live sidebar. */
  :host([preview][full]) {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
  }

  :host([preview][full]) .sidebar {
    flex: 1 1 auto;
    min-height: 0;
    height: auto;
  }

  :host([preview][full]) .region-body {
    overflow-y: auto;
  }

  :host([preview][full]) .footer {
    margin-top: 8px;
  }

  .sidebar.collapsed {
    align-items: center;
    padding: 16px 6px;
  }

  .toggle {
    position: absolute;
    top: 16px;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid var(--dashboard-sidebar-divider-color);
    border-radius: 50%;
    background: var(--dashboard-sidebar-surface-background);
    color: var(--dashboard-sidebar-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 6;
    box-shadow: var(--dashboard-sidebar-toggle-shadow);
  }

  .pos-left .toggle {
    right: -13px;
  }

  .pos-right .toggle {
    left: -13px;
  }

  .toggle ha-icon {
    --mdc-icon-size: 18px;

    transition: transform 0.2s ease;
  }

  .pos-right .toggle ha-icon {
    transform: rotate(180deg);
  }

  .collapsed.pos-left .toggle ha-icon {
    transform: rotate(180deg);
  }

  .collapsed.pos-right .toggle ha-icon {
    transform: rotate(0deg);
  }

  .edit-btn {
    position: absolute;
    top: 16px;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid var(--dashboard-sidebar-divider-color);
    border-radius: 50%;
    background: var(--dashboard-sidebar-surface-background);
    color: var(--dashboard-sidebar-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 6;
  }

  .pos-left .edit-btn {
    left: 8px;
  }

  .pos-right .edit-btn {
    right: 8px;
  }

  .edit-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  ha-icon {
    color: var(--dashboard-sidebar-icon-color);
  }

  .tooltip {
    position: fixed;
    transform: translateY(-50%);
    padding: 4px 8px;
    border-radius: var(--dashboard-sidebar-tooltip-radius);
    background: var(--dashboard-sidebar-surface-background);
    color: var(--dashboard-sidebar-text-color);
    box-shadow: var(--dashboard-sidebar-tooltip-shadow);
    font-size: var(--ha-font-size-m, 0.85rem);
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
  }

  /* Placed above its control rather than beside it: anchored by its bottom
     edge, so the half-height shift the beside placement needs would push it
     out of place. */
  .tooltip.above {
    transform: none;
  }
`,h`
  .region {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    box-sizing: border-box;
  }

  .region-header {
    flex: 0 0 auto;
    margin-bottom: 8px;
  }

  .region-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
  }

  .collapsed .region {
    align-items: center;
  }
`,h`
  /* Keep header text on one line and clip it, so it never wraps and grows the
     block while the sidebar width animates during a collapse/expand. */
  .app-title,
  .clock,
  .date {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .app-title {
    font-size: var(--ha-font-size-xl, 1.25rem);
    font-weight: var(--ha-font-weight-medium, 500);
    padding: 2px 12px;
  }

  .clock {
    font-size: var(--ha-font-size-2xl, 1.5rem);
    font-weight: var(--ha-font-weight-light, 300);
    font-variant-numeric: tabular-nums;
    padding: 0 12px;
  }

  .collapsed .clock {
    font-size: var(--ha-font-size-m, 0.85rem);
    padding: 0;
  }

  .date {
    font-size: var(--ha-font-size-m, 0.9rem);
    opacity: 0.75;
    font-variant-numeric: tabular-nums;
    padding: 0 12px;
  }

  .collapsed .date {
    font-size: var(--ha-font-size-s, 0.7rem);
    padding: 0;
  }
`,h`
  .content {
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  }

  /* An object manual card fills the sidebar width. Force the card element to
     full width so it does not shrink to its intrinsic content size. */
  .content.card-fill > * {
    width: 100%;
    box-sizing: border-box;
  }

  /* The footer's single card/markdown fills the footer bar width (the bar is a
     flex row, which would otherwise size it to its content) and drops the
     block spacing below it (the footer is already pinned to the bottom). */
  .footer .content {
    width: 100%;
    margin-bottom: 0;
  }

  .collapsed .content {
    display: none;
  }
`,h`
  .row {
    display: flex;
    /* Rows are flex children of the scrolling region. Without this they shrink
       to absorb an over-full body instead of letting it scroll, so a long
       sidebar silently squashes its rows. */
    flex: 0 0 auto;
    /* Never wrap the icon/label onto a second line — during a collapse/expand
       the width animates through intermediate sizes, and wrapping made rows
       reflow/grow for a frame. Clip instead. */
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 10px 12px;
    border: none;
    border-radius: var(--dashboard-sidebar-item-radius);
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  .row:hover {
    background: var(--dashboard-sidebar-hover-background);
  }

  .row .label {
    flex: 1;
    /* Shrink below content width and clip to one line with an ellipsis rather
       than wrapping while the sidebar animates. */
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--ha-font-size-l, 1rem);
  }

  .collapsed-row {
    width: 44px;
    height: 44px;
    justify-content: center;
    padding: 0;
    gap: 0;
  }

  .collapsed-row.active {
    background: var(--dashboard-sidebar-accent-color);
    color: var(--dashboard-sidebar-on-accent-color);
  }

  .initials {
    font-size: var(--ha-font-size-m, 0.85rem);
    font-weight: var(--ha-font-weight-bold, 600);
  }

  .category {
    margin: 4px 0;
  }

  .category-header {
    font-weight: var(--ha-font-weight-bold, 600);
    opacity: 0.85;
  }

  .chevron {
    --mdc-icon-size: 20px;

    flex: 0 0 auto;
    opacity: 0.7;
    transition: transform 0.2s ease;
  }

  .chevron:not(.open) {
    transform: rotate(-90deg);
  }

  .category-items {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 8px;
    border-left: 1px solid var(--dashboard-sidebar-divider-color);
    margin-left: 18px;
  }

  .category-items.no-line {
    border-left: none;
  }

  .category-anchor {
    position: relative;
  }

  .popover {
    position: fixed;
    min-width: 180px;
    padding: 8px;
    border: var(--dashboard-sidebar-border);
    border-radius: var(--dashboard-sidebar-radius);
    background: var(--dashboard-sidebar-surface-background);
    box-shadow: var(--dashboard-sidebar-popover-shadow);
    z-index: 9;
  }

  .popover-title {
    font-weight: var(--ha-font-weight-bold, 600);
    padding: 4px 12px 8px;
  }

  .entry-divider {
    flex: none;
    align-self: stretch;
    height: 1px;
    min-height: 1px;
    margin: 6px 4px;
    background: var(--dashboard-sidebar-divider-color);
  }

  .collapsed .entry-divider {
    width: 60%;
    margin: 6px auto;
  }
`,h`
  .footer {
    display: flex;
    /* The footer is a flex child of the sidebar column. Without this it shrinks
       to absorb an over-full body, and since it clips its overflow (below) the
       buttons lose their bottoms rather than the body scrolling for them. */
    flex: 0 0 auto;
    /* Keep the buttons on one row and clip any that don't fit rather than
       wrapping — during a collapse/expand the width animates through
       intermediate sizes, and wrapping made the buttons stack vertically for a
       frame before settling. The overflow menu already handles the real count. */
    flex-wrap: nowrap;
    overflow: hidden;
    gap: 4px;
    align-items: center;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--dashboard-sidebar-divider-color);
  }

  .collapsed .footer {
    justify-content: center;
  }

  .footer.no-divider {
    border-top: none;
    padding-top: 0;
  }

  .footer-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: var(--dashboard-sidebar-item-radius);
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .footer-btn:hover,
  .footer-btn.active {
    background: var(--dashboard-sidebar-hover-background);
  }

  .footer-popover {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    min-width: 0;
    width: max-content;
    max-width: 220px;
  }
`,h`
  .config-error {
    margin: 12px;
    padding: 12px;
    border: 1px solid var(--error-color, #db4437);
    border-radius: var(--dashboard-sidebar-item-radius);
    background: color-mix(in srgb, var(--error-color, #db4437) 12%, transparent);
    color: var(--dashboard-sidebar-text-color);
    font-size: var(--ha-font-size-m, 0.85rem);
    overflow-y: auto;
  }

  .config-error-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: var(--ha-font-weight-bold, 600);
    margin-bottom: 8px;
  }

  .config-error-title ha-icon {
    color: var(--error-color, #db4437);
  }

  .config-error ul {
    margin: 0;
    padding-left: 18px;
  }

  .config-error li {
    margin: 4px 0;
  }
`],Bi={left:"flex-start",center:"center",right:"flex-end"},Ni={"--ha-card-background":"transparent","--ha-card-box-shadow":"none","--ha-card-border-width":"0px"};let ji=class extends pe{constructor(){super(...arguments),this.editMode=!1,this.preview=!1,this.previewCollapsed=!1,this.previewInteractive=!0,this.previewFull=!1,this._collapsed=!1,this._now=new Date,this._path=window.location.pathname,this._openCategory=null,this._popoverAnchor=null,this._pinnedAnchor=null,this._footerOpen=!1,this._footerBarWidth=0,this._tooltip=null,this._collapsedCats=new Set,this._errors=[],this._templates=new li(()=>this.requestUpdate()),this._cards=new Map,this._chromelessCards=new Set,this._compactMarkdownScheduled=!1,this._cardModApplied=!1,this._elementCardModSigs=new WeakMap,this._held=!1,this._keys=new WeakMap,this._keySeq=0,this._sortables=new WeakSet,this._scrollRaf=0,this._scrollTargets=[],this._onDocumentClick=e=>{null===this._openCategory&&!this._footerOpen||e.composedPath().includes(this)||this._closePopovers()},this._onScroll=()=>{this._scrollRaf||(this._scrollRaf=requestAnimationFrame(()=>{this._scrollRaf=0,(null!==this._openCategory||this._footerOpen)&&this._popoverAnchorEl&&(this._popoverAnchor=this._popoverAnchorEl.getBoundingClientRect()),this._updatePinnedAnchor()}))},this._onLocationChange=()=>{window.location.pathname!==this._path&&(this._path=window.location.pathname)},this._cancelHold=()=>{window.clearTimeout(this._holdTimer)}}_bindScroll(){this._unbindScroll();const e=[window];let t=this.parentNode??this.getRootNode()?.host??null;for(;t;){e.push(t);t=t.parentNode??(t instanceof ShadowRoot?t.host:null)}e.forEach(e=>e.addEventListener("scroll",this._onScroll,{passive:!0})),this._scrollTargets=e}_unbindScroll(){this._scrollTargets.forEach(e=>e.removeEventListener("scroll",this._onScroll)),this._scrollTargets=[]}_navActive(e){const t=e.tap_action;if(!1===e.active_highlight||"navigate"!==t?.action||!t.navigation_path)return!1;const o=t.navigation_path.split(/[?#]/)[0].replace(/\/+$/,""),i=this._path.replace(/\/+$/,"");return""!==o&&(i===o||i.startsWith(`${o}/`))}_navClass(e){return this._navActive(e)?" nav-active":""}_closePopovers(){this._openCategory=null,this._footerOpen=!1,this._popoverAnchor=null,this._popoverAnchorEl=void 0}setConfig(e){if(this._errors=this.preview?[]:Di(e),this._config=e,this._cardModApplied=!1,this._errors.length>0)return void console.warn(`[dashboard-sidebar] config errors:\n- ${this._errors.join("\n- ")}`);this._collapsed=!this.preview&&(this._readStored()??Boolean(e.start_collapsed));const t=new Set;this.preview||this._eachBlock((e,o,i)=>{"category"===e.type&&(e.start_collapsed??1)&&t.add(`${o}-${i}`)}),this._collapsedCats=t,this._templates.collect(e),this._restartTick(),this._buildCards()}_eachBlock(e){(this._config?.header??[]).forEach((t,o)=>e(t,"header",o)),(this._config?.body??[]).forEach((t,o)=>e(t,"body",o))}_hookClass(e){return e.class?` ${e.class}`:""}async _buildCards(){const e=this._config,t=[];if(this._chromelessCards.clear(),this._eachBlock((e,o,i)=>{"card"===e.type?t.push([`${o}-${i}`,e.card]):"markdown"===e.type&&(t.push([`${o}-${i}`,{type:"markdown",content:e.content}]),this._chromelessCards.add(`${o}-${i}`))}),void 0!==e?.footer?.card?t.push(["footer",e.footer.card]):void 0!==e?.footer?.markdown&&(t.push(["footer",{type:"markdown",content:e.footer.markdown}]),this._chromelessCards.add("footer")),0===t.length)return void(this._cards=new Map);const o=await(window.loadCardHelpers?.());if(!o)return;const i=new Map;t.forEach(([e,t])=>{const r="string"==typeof t?{type:"markdown",content:t}:t,a=o.createCardElement(r);a.hass=this.hass,i.set(e,a)}),this._cards=i,this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.preview||window.addEventListener("click",this._onDocumentClick),this._bindScroll(),window.addEventListener("location-changed",this._onLocationChange),window.addEventListener("popstate",this._onLocationChange),this._onLocationChange(),this._restartTick(),this._config&&0===this._errors.length&&this._templates.collect(this._config)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("click",this._onDocumentClick),window.removeEventListener("location-changed",this._onLocationChange),window.removeEventListener("popstate",this._onLocationChange),this._unbindScroll(),this._scrollRaf&&(cancelAnimationFrame(this._scrollRaf),this._scrollRaf=0),this._stopTick(),this._cancelPopoverClose(),this._templates.clear(),this._footerResize?.disconnect(),this._observedFooter=void 0}updated(e){e.has("_collapsed")&&this.dispatchEvent(new CustomEvent(Wo,{detail:{collapsed:this._collapsed,side:this._side},bubbles:!0,composed:!0})),e.has("hass")&&(this._templates.setHass(this.hass),this._cards.forEach(e=>{e.hass=this.hass})),this._applyCardMod(),this._wirePreviewSort(),this._observeFooter(),this._updatePinnedAnchor(),this._compactMarkdown()}_compactMarkdown(){let e=!1;this._chromelessCards.forEach(t=>{const o=this._cards.get(t);if(!o)return;const i=this._deepQuery(o,"ha-markdown");i?i.style.padding="0":e=!0}),e&&!this._compactMarkdownScheduled&&(this._compactMarkdownScheduled=!0,requestAnimationFrame(()=>{this._compactMarkdownScheduled=!1,this._compactMarkdown()}))}_deepQuery(e,t){const o=[e];for(;o.length;){const e=o.shift(),i=e.querySelector?.(t);if(i)return i;e.querySelectorAll?.("*").forEach(e=>{const t=e.shadowRoot;t&&o.push(t)})}return null}_pinnedCategoryLoc(){const e=this.previewSelected;return this.preview&&this.previewCollapsed&&e&&e.includes(".")?e.slice(0,e.indexOf(".")):null}_footerPinned(){return this.preview&&this.previewCollapsed&&(this.previewSelected?.startsWith("footer:btn:")??!1)}_updatePinnedAnchor(){const e=this._pinnedCategoryLoc(),t=e?`.collapsed-row[data-loc="${e}"]`:this._footerPinned()?".dashboard-sidebar-footer-more":null,o=t?this.renderRoot.querySelector(t):null;if(!o)return void(this._pinnedAnchor&&(this._pinnedAnchor=null));const i=o.getBoundingClientRect(),r=this._pinnedAnchor;r&&r.top===i.top&&r.left===i.left&&r.width===i.width&&r.height===i.height||(this._pinnedAnchor=i)}_observeFooter(){if(!this.preview)return;const e=this.renderRoot.querySelector(".footer.dashboard-sidebar-footer");e?(this._footerResize||(this._footerResize=new ResizeObserver(()=>this._measureFooter())),this._observedFooter!==e&&(this._footerResize.disconnect(),this._footerResize.observe(e),this._observedFooter=e),this._measureFooter()):this._observedFooter=void 0}_measureFooter(){const e=this._observedFooter;if(!e)return;const t=this.renderRoot.querySelector(".sidebar"),o=t?Math.round(t.offsetWidth)-24:Math.round(e.clientWidth);o>0&&o!==this._footerBarWidth&&(this._footerBarWidth=o)}_wirePreviewSort(){if(!this.preview||this.previewCollapsed||!this.previewInteractive)return;const e=this.renderRoot;["header","body"].forEach(t=>{const o=e.querySelector(`.region-${t}`);o&&this._wireSort(o,t),e.querySelectorAll(`.region-${t} .category-items`).forEach(e=>this._wireSort(e,t))});const t=e.querySelector('.footer[data-container="footer"]');t&&this._wireSort(t,"footer")}_applyCardMod(){const e=this._config?.card_mod;e&&!this._cardModApplied&&0===this._errors.length&&(this._cardModApplied=Ho(this,e)),this._applyElementCardMods()}_applyElementCardMods(){this._errors.length>0||this.renderRoot.querySelectorAll("[data-loc]").forEach(e=>{const t=e.getAttribute("data-loc")??"",o=this._cardModAt(t),i=o?JSON.stringify(o):"";this._elementCardModSigs.get(e)!==i&&(this._elementCardModSigs.set(e,i),o&&Ho(e,this._scopeElementCardMod(o,t),`dashboard-sidebar:${t}`))})}_scopeElementCardMod(e,t){const o=e.style;if("string"!=typeof o||""===o.trim())return e;const i=((e,t)=>{let o;try{o=new CSSStyleSheet,o.replaceSync(e)}catch{return null}const i=e=>{for(const o of Array.from(e))if(o instanceof CSSStyleRule){const e=o.selectorText;o.selectorText=`${t}:is(${e}), ${t} :is(${e})`}else{const e=o;e.cssRules&&i(e.cssRules)}};return i(o.cssRules),Array.from(o.cssRules).map(e=>e.cssText).join("\n")})(o,`[data-loc="${t.replace(/["\\]/g,"\\$&")}"]`);return null===i?e:{...e,style:i}}_cardModAt(e){const t=this._config;if(!t)return;const o=/^footer:btn:(\d+)$/.exec(e);if(o)return t.footer?.buttons?.[Number(o[1])]?.card_mod;const[i,r]=e.split(":");if("header"!==i&&"body"!==i||void 0===r)return;const[a,s]=r.split("."),n=t[i]?.[Number(a)];return n?void 0!==s?"category"===n.type?n.items?.[Number(s)]?.card_mod:void 0:n.card_mod:void 0}get _side(){return"right"===this._config?.position?"right":"left"}get _locale(){return this.hass?.locale?.language??navigator.language}_storageKey(){return`dashboard-sidebar-collapsed:${window.location.pathname}:${this._side}`}_readStored(){try{const e=window.localStorage.getItem(this._storageKey());return null===e?null:"1"===e}catch{return null}}_timeKinds(){let e=!1,t=!1;return this._eachBlock(o=>{"clock"===o.type&&(e=!0),"date"===o.type&&(t=!0)}),{clock:e,date:t}}_restartTick(){this._stopTick();const{clock:e,date:t}=this._timeKinds();if(!e&&!t)return;const o=e?1e3:6e4;this._tick=window.setInterval(()=>{this._now=new Date},o)}_stopTick(){void 0!==this._tick&&(window.clearInterval(this._tick),this._tick=void 0)}_openEditor(){this.dispatchEvent(new CustomEvent(Uo,{bubbles:!0,composed:!0}))}_toggleCollapse(){this._collapsed=!this._collapsed,this._tooltip=null,this._closePopovers();try{window.localStorage.setItem(this._storageKey(),this._collapsed?"1":"0")}catch{}}_fireAction(e,t){if(this.preview||!this.hass)return;const o="hold"===t?e.hold_action:"double_tap"===t?e.double_tap_action:e.tap_action,i=document.querySelector("home-assistant")?.hass??this.hass;jo(this,i,o,e.entity),this._closePopovers()}_onActionDown(e){this.preview||(this._held=!1,window.clearTimeout(this._holdTimer),a(e.hold_action)&&(this._holdTimer=window.setTimeout(()=>{this._held=!0,this._fireAction(e,"hold")},500)))}_onActionClick(e){this.preview||(window.clearTimeout(this._holdTimer),this._held?this._held=!1:a(e.double_tap_action)?this._tapTimer?(window.clearTimeout(this._tapTimer),this._tapTimer=void 0,this._fireAction(e,"double_tap")):this._tapTimer=window.setTimeout(()=>{this._tapTimer=void 0,this._fireAction(e,"tap")},250):this._fireAction(e,"tap"))}_actionable(e){return a(e.tap_action)||a(e.hold_action)||a(e.double_tap_action)}_toggleFooter(e){this._footerOpen?this._closePopovers():(this._openCategory=null,this._footerOpen=!0,this._tooltip=null,this._popoverAnchorEl=e.currentTarget,this._popoverAnchor=this._popoverAnchorEl.getBoundingClientRect())}_popoverStyle(e,t){const o={};if(window.innerWidth-e.right>=e.left){const t=e.right+8;o.left=`${t}px`,o["max-width"]=`${Math.max(120,window.innerWidth-t-8)}px`}else o.right=window.innerWidth-e.left+8+"px",o["max-width"]=`${Math.max(120,e.left-16)}px`;return t?o.bottom=window.innerHeight-e.bottom+"px":o.top=`${e.top}px`,o}_showTip(e,t){if(!t)return;const o=e.currentTarget,i=Boolean(o.closest(".footer"));this._tooltip={text:t,rect:o.getBoundingClientRect(),above:i}}_hideTip(){this._tooltip&&(this._tooltip=null)}_tipStyle(e,t){const o=window.innerWidth-e.right>=e.left;if(!t){const t={top:`${e.top+e.height/2}px`};return o?t.left=`${e.right+8}px`:t.right=window.innerWidth-e.left+8+"px",t}const i={bottom:window.innerHeight-e.top+8+"px"};return o?i.left=`${e.left}px`:i.right=window.innerWidth-e.right+"px",i}_hoverCategory(e,t){this._cancelPopoverClose(),this._footerOpen=!1,this._tooltip=null,this._openCategory=e,this._popoverAnchorEl=t.currentTarget,this._popoverAnchor=this._popoverAnchorEl.getBoundingClientRect()}_cancelPopoverClose(){void 0!==this._previewPopoverTimer&&(window.clearTimeout(this._previewPopoverTimer),this._previewPopoverTimer=void 0)}_schedulePopoverClose(){this._cancelPopoverClose(),this._previewPopoverTimer=window.setTimeout(()=>{this._closePopovers(),this._previewPopoverTimer=void 0},140)}_toggleCategory(e,t){if(this._openCategory===e)return this._openCategory=null,void(this._popoverAnchor=null);this._footerOpen=!1,this._openCategory=e,this._tooltip=null,this._popoverAnchorEl=t.currentTarget,this._popoverAnchor=this._popoverAnchorEl.getBoundingClientRect()}_keyFor(e){let t=this._keys.get(e);return t||(this._keySeq+=1,t=`k${this._keySeq}`,this._keys.set(e,t)),t}_selClass(e){return this.preview&&this.previewSelected===e?" sb-selected":""}_onPreviewClick(e){const t=e.target,o=t?.closest?.("[data-loc]");o&&(e.stopPropagation(),this.dispatchEvent(new CustomEvent(qo,{detail:{loc:o.getAttribute("data-loc")},bubbles:!0,composed:!0})))}_wireSort(e,t){if(this._sortables.has(e))return;this._sortables.add(e);const o=!e.classList.contains("region-body")&&!e.classList.contains("region-header")&&e.classList.contains("category-items");_o.create(e,{group:{name:`sb-${t}`,put:!o||((e,t,o)=>o.classList.contains("dashboard-sidebar-item"))},animation:150,onEnd:e=>{this.dispatchEvent(new CustomEvent(Xo,{detail:{from:e.from.getAttribute("data-container"),to:e.to.getAttribute("data-container"),oldIndex:e.oldIndex,newIndex:e.newIndex},bubbles:!0,composed:!0}))}})}_toggleCategoryCollapse(e){if(this.preview)return;const t=new Set(this._collapsedCats);t.has(e)?t.delete(e):t.add(e),this._collapsedCats=t}render(){if(this._errors.length>0)return this._renderErrors();if(!this._config)return J``;const e=this.preview?this.previewCollapsed:this._collapsed,t=this._config,o={sidebar:!0,"dashboard-sidebar-root":!0,collapsed:e,preview:this.preview,[`pos-${this._side}`]:!0},i=t.background?{background:t.background}:{};return J`
      <div
        class=${$e(o)}
        style=${Re(i)}
        @click=${this.preview&&this.previewInteractive?e=>this._onPreviewClick(e):K}
      >
        ${this.preview?K:J`<button
                  class="toggle dashboard-sidebar-toggle"
                  title=${e?"Expand sidebar":"Collapse sidebar"}
                  @click=${this._toggleCollapse}
                >
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                ${this.editMode?J`<button
                        class="edit-btn dashboard-sidebar-edit"
                        title="Edit sidebar"
                        @click=${this._openEditor}
                      >
                        <ha-icon icon="mdi:pencil"></ha-icon>
                      </button>`:K}`}
        ${this._renderRegion("header",t.header,e,"region-header dashboard-sidebar-header")}
        ${this._renderRegion("body",t.body,e,"region-body dashboard-sidebar-body")}
        ${this._renderFooter(e)} ${this._renderTooltip()}
      </div>
    `}_renderTooltip(){return this._tooltip?J`<div
      class="tooltip dashboard-sidebar-tooltip${this._tooltip.above?" above":""}"
      style=${Re(this._tipStyle(this._tooltip.rect,this._tooltip.above))}
    >
      ${this._tooltip.text}
    </div>`:K}_renderRegion(e,t,o,i){return t?.length?J`
      <div class="region ${i}" data-container=${e}>
        ${Pe(t,e=>this._keyFor(e),(t,i)=>this._renderBlock(t,e,i,o))}
      </div>
    `:K}_renderBlock(e,t,o,i){const r=`${t}:${o}`;switch(e.type){case"title":return this._renderTitle(e,i,r);case"clock":return this._renderClock(e,i,r);case"date":return this._renderDate(e,i,r);case"divider":return J`<div
          class="entry-divider dashboard-sidebar-divider${this._hookClass(e)}${this._selClass(r)}"
          id=${e.id??K}
          data-loc=${r}
          style=${Re(e.color?{"background-color":this._templates.resolve(e.color)}:{})}
        ></div>`;case"item":return this._renderItemRow(e,i,r);case"category":return this._renderCategory(e,t,o,i);case"markdown":return this._renderMarkdown(e,`${t}-${o}`,i,r);case"card":return this._renderCardBlock(e,`${t}-${o}`,i,r);default:return K}}_renderTitle(e,t,o){if(t)return K;const i=this._templates.resolve(e.text),r={"text-align":e.align??"center",color:e.text_color?this._templates.resolve(e.text_color):""},a=this._actionable(e)?" clickable":"";return J`<div
      class="app-title dashboard-sidebar-title${a}${this._navClass(e)}${this._hookClass(e)}${this._selClass(o)}"
      id=${e.id??K}
      data-loc=${o}
      style=${Re(r)}
      @pointerdown=${()=>this._onActionDown(e)}
      @pointerup=${this._cancelHold}
      @pointercancel=${this._cancelHold}
      @click=${()=>this._onActionClick(e)}
    >
      ${i}
    </div>`}_renderClock(e,t,o){const i={"text-align":e.align??"center",color:e.text_color?this._templates.resolve(e.text_color):""},r=e,a="string"==typeof r.format?r.format.trim():"";let s,n;if(""!==a&&"12h"!==a&&"24h"!==a)s=a,n=/%-?[Il]|%p|%P/.test(a);else{n="12h"===("12h"===a||"24h"===a?a:r.hour_format??r.collapsed_format??"24h");const e=r.show_seconds??!1;s=n?e?"%-I:%M:%S %p":"%-I:%M %p":e?"%H:%M:%S":"%H:%M"}const d=Ko(this._now,e.timezone??""),l=this._actionable(e)?" clickable":"";return J`<div
      class="clock dashboard-sidebar-clock${l}${this._navClass(e)}${this._hookClass(e)}${this._selClass(o)}"
      id=${e.id??K}
      data-loc=${o}
      style=${Re(i)}
      @pointerdown=${()=>this._onActionDown(e)}
      @pointerup=${this._cancelHold}
      @pointercancel=${this._cancelHold}
      @click=${()=>this._onActionClick(e)}
    >
      ${t?ri(d,n):oi(d,s,this._locale)}
    </div>`}_renderDate(e,t,o){const i={"text-align":e.align??"center",color:e.text_color?this._templates.resolve(e.text_color):""},r=("string"==typeof e.format?e.format:"").trim()||"locale",a=Ko(this._now,e.timezone??""),s=this._actionable(e)?" clickable":"";return J`<div
      class="date dashboard-sidebar-date${s}${this._navClass(e)}${this._hookClass(e)}${this._selClass(o)}"
      id=${e.id??K}
      data-loc=${o}
      style=${Re(i)}
      @pointerdown=${()=>this._onActionDown(e)}
      @pointerup=${this._cancelHold}
      @pointercancel=${this._cancelHold}
      @click=${()=>this._onActionClick(e)}
    >
      ${t?ai(a):ii(a,r,this._locale)}
    </div>`}_renderMarkdown(e,t,o,i){if(o)return K;const r=this._cards.get(t);if(!r)return K;const a=e.align??"left",s=e.text_color?this._templates.resolve(e.text_color):"",n={"align-items":Bi[a],"text-align":a,...s?{color:s,"--primary-text-color":s}:{},...Ni};return J`<div
      class="content dashboard-sidebar-markdown${this._hookClass(e)}${this._selClass(i)}"
      id=${e.id??K}
      data-loc=${i}
      style=${Re(n)}
    >
      ${r}
    </div>`}_renderCardBlock(e,t,o,i){if(o)return K;const r=this._cards.get(t);if(!r)return K;const a="string"==typeof e.card,s=e.align??"left",n={"align-items":a?Bi[s]:"stretch",...a?{"text-align":s,...Ni}:{},...e.background?{background:e.background,padding:"8px","border-radius":"var(--dashboard-sidebar-item-radius)"}:{}};return J`<div
      class="content dashboard-sidebar-content${a?"":" card-fill"}${this._hookClass(e)}${this._selClass(i)}"
      id=${e.id??K}
      data-loc=${i}
      style=${Re(n)}
    >
      ${r}
    </div>`}_renderCategory(e,t,o,i){const r=`${t}-${o}`,a=`${t}:${o}`;return i?this._renderCollapsedCategory(e,r,a):this._renderExpandedCategory(e,r,a)}_renderItemRow(e,t,o){const i=this._templates.resolve(e.title),r=e.icon?this._templates.resolve(e.icon):"",a=e.text_color?this._templates.resolve(e.text_color):"",s=e.icon_color?this._templates.resolve(e.icon_color):"";return t?J`
        <button
          class="row item collapsed-row dashboard-sidebar-item${this._navClass(e)}${this._hookClass(e)}${this._selClass(o)}"
          id=${e.id??K}
          data-loc=${o}
          aria-label=${i}
          @mouseenter=${e=>this._showTip(e,i)}
          @mouseleave=${this._hideTip}
          @pointerdown=${()=>this._onActionDown(e)}
          @pointerup=${this._cancelHold}
          @pointercancel=${this._cancelHold}
          @click=${()=>this._onActionClick(e)}
        >
          ${r?J`<ha-icon
                  class="dashboard-sidebar-item-icon"
                  icon=${r}
                  style=${Re({color:s})}
                ></ha-icon>`:J`<span class="initials dashboard-sidebar-initials"
                  >${e.abbr??si(i)}</span
                >`}
        </button>
      `:J`
      <button
        class="row item dashboard-sidebar-item${this._navClass(e)}${this._hookClass(e)}${this._selClass(o)}"
        id=${e.id??K}
        data-loc=${o}
        @pointerdown=${()=>this._onActionDown(e)}
        @pointerup=${this._cancelHold}
        @pointercancel=${this._cancelHold}
        @click=${()=>this._onActionClick(e)}
      >
        ${r?J`<ha-icon
                class="dashboard-sidebar-item-icon"
                icon=${r}
                style=${Re({color:s})}
              ></ha-icon>`:K}
        <span class="label dashboard-sidebar-item-label" style=${Re({color:a})}
          >${i}</span
        >
      </button>
    `}_renderExpandedCategory(e,t,o){const i=this._templates.resolve(e.title),r=e.icon?this._templates.resolve(e.icon):"",a=e.text_color?this._templates.resolve(e.text_color):"",s=e.icon_color?this._templates.resolve(e.icon_color):"",n=this.preview?this.previewCollapsedCats?.includes(o)??!1:this._collapsedCats.has(t);return J`
      <div
        class="category dashboard-sidebar-category${this._hookClass(e)}"
        id=${e.id??K}
      >
        <button
          class="row category-header dashboard-sidebar-category-header${this._selClass(o)}"
          data-loc=${o}
          @click=${()=>this._toggleCategoryCollapse(t)}
        >
          ${r?J`<ha-icon icon=${r} style=${Re({color:s})}></ha-icon>`:K}
          <span class="label" style=${Re({color:a})}>${i}</span>
          <ha-icon
            class="chevron dashboard-sidebar-chevron ${n?"":"open"}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </button>
        ${n?K:J`<div
                class="category-items dashboard-sidebar-category-items ${!1===e.guide_line?"no-line":""}"
                data-container=${o}
              >
                ${Pe(e.items,e=>this._keyFor(e),(e,t)=>this._renderItemRow(e,!1,`${o}.${t}`))}
              </div>`}
      </div>
    `}_renderCollapsedCategory(e,t,o){const i=this._templates.resolve(e.title),r=e.icon?this._templates.resolve(e.icon):"",a=e.icon_color?this._templates.resolve(e.icon_color):"",s=this._openCategory===t,n=this._pinnedCategoryLoc()===o;return J`
      <div
        class="category-anchor dashboard-sidebar-category${this._hookClass(e)}"
        id=${e.id??K}
      >
        <button
          class="row item collapsed-row dashboard-sidebar-item ${s?"active":""}${this._selClass(o)}"
          data-loc=${o}
          aria-label=${i}
          @mouseenter=${this.preview?e=>this._hoverCategory(t,e):e=>{s||this._showTip(e,i)}}
          @mouseleave=${this.preview?()=>this._schedulePopoverClose():this._hideTip}
          @click=${this.preview?K:e=>{e.stopPropagation(),this._toggleCategory(t,e)}}
        >
          ${r?J`<ha-icon
                  class="dashboard-sidebar-item-icon"
                  icon=${r}
                  style=${Re({color:a})}
                ></ha-icon>`:J`<span class="initials dashboard-sidebar-initials"
                  >${e.abbr??si(i)}</span
                >`}
        </button>
        ${s&&this._popoverAnchor?this._renderPopover(e,this._popoverAnchor,o):n&&this._pinnedAnchor?this._renderPopover(e,this._pinnedAnchor,o):K}
      </div>
    `}_renderPopover(e,t,o){return J`
      <div
        class="popover dashboard-sidebar-popover"
        style=${Re(this._popoverStyle(t,!1))}
        @click=${this.preview?K:e=>e.stopPropagation()}
        @mouseenter=${this.preview?()=>this._cancelPopoverClose():K}
        @mouseleave=${this.preview?()=>this._schedulePopoverClose():K}
      >
        <div
          class="popover-title dashboard-sidebar-popover-title"
          style=${Re(e.text_color?{color:this._templates.resolve(e.text_color)}:{})}
        >
          ${this._templates.resolve(e.title)}
        </div>
        ${e.items.map((e,t)=>this._renderItemRow(e,!1,`${o}.${t}`))}
      </div>
    `}_renderFooter(e){const t=this._config?.footer;if(!t)return K;const o={footer:!0,"dashboard-sidebar-footer":!0,"collapsed-footer":e,"no-divider":!1===t.divider};if(void 0!==t.card||void 0!==t.markdown){const i=e?void 0:this._cards.get("footer");if(!i)return K;const r=void 0!==t.markdown,a=r&&t.markdown_color?this._templates.resolve(t.markdown_color):"",s={...r||"string"==typeof t.card?Ni:{},...a?{color:a,"--primary-text-color":a}:{}},n=r?"footer:markdown":"footer:card",d=r?{tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action}:{},l=r&&this._actionable(d),c=r||"string"==typeof t.card?"":" card-fill";return J`<div class=${$e(o)}>
        <div
          class="content dashboard-sidebar-content${c}${l?" clickable":""}${this._selClass(n)}"
          data-loc=${n}
          style=${Re(s)}
          @pointerdown=${l?()=>this._onActionDown(d):K}
          @pointerup=${l?this._cancelHold:K}
          @pointercancel=${l?this._cancelHold:K}
          @click=${l?()=>this._onActionClick(d):K}
        >
          ${i}
        </div>
      </div>`}const i=t.buttons??[];if(0===i.length)return K;const r=this._popoverAnchor;if(e){const e=this._footerPinned(),t=this._footerOpen&&r||e&&this._pinnedAnchor,a=this._footerOpen&&r?r:this._pinnedAnchor;return J`
        <div class=${$e(o)}>
          ${this._renderDots("row item collapsed-row dashboard-sidebar-item dashboard-sidebar-footer-more")}
          ${t&&a?this._renderFooterPopover(i,a,0):K}
        </div>
      `}const a=this.preview?"footer":K,s=this.preview&&this._footerBarWidth||(this._config?.width??240)-24,n=Math.max(1,Math.floor((s+4)/44));if(i.length<=n)return J`<div class=${$e(o)} data-container=${a}>
        ${Pe(i,e=>this._keyFor(e),(e,t)=>this._renderFooterButton(e,t))}
      </div>`;const d=i.slice(0,n-1),l=i.slice(n-1);return J`
      <div class=${$e(o)} data-container=${a}>
        ${Pe(d,e=>this._keyFor(e),(e,t)=>this._renderFooterButton(e,t))}
        ${this._renderDots("footer-btn dashboard-sidebar-footer-btn dashboard-sidebar-footer-more")}
        ${this._footerOpen&&r?this._renderFooterPopover(l,r,n-1):K}
      </div>
    `}_renderDots(e){return J`
      <button
        class="${e} ${this._footerOpen?"active":""}"
        aria-label="More"
        @mouseenter=${e=>{this._footerOpen||this._showTip(e,"More")}}
        @mouseleave=${this._hideTip}
        @click=${e=>{e.stopPropagation(),this._toggleFooter(e)}}
      >
        <ha-icon icon="mdi:dots-vertical"></ha-icon>
      </button>
    `}_renderFooterPopover(e,t,o){return J`
      <div
        class="popover footer-popover dashboard-sidebar-popover dashboard-sidebar-footer-popover"
        style=${Re(this._popoverStyle(t,!0))}
        @click=${this.preview?K:e=>e.stopPropagation()}
      >
        ${e.map((e,t)=>this._renderFooterButton(e,o+t))}
      </div>
    `}_renderFooterButton(e,t){const o=this._templates.resolve(e.icon),i=e.icon_color?this._templates.resolve(e.icon_color):"",r=e.title?this._templates.resolve(e.title):"",a=`footer:btn:${t}`;return J`
      <button
        class="footer-btn dashboard-sidebar-footer-btn${this._navClass(e)}${this._hookClass(e)}${this._selClass(a)}"
        id=${e.id??K}
        data-loc=${a}
        aria-label=${r}
        @mouseenter=${e=>this._showTip(e,r)}
        @mouseleave=${this._hideTip}
        @pointerdown=${()=>this._onActionDown(e)}
        @pointerup=${this._cancelHold}
        @pointercancel=${this._cancelHold}
        @click=${()=>this._onActionClick(e)}
      >
        <ha-icon
          class="dashboard-sidebar-footer-icon"
          icon=${o}
          style=${Re({color:i})}
        ></ha-icon>
      </button>
    `}_renderErrors(){return J`
      <div class="config-error">
        <div class="config-error-title">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          <span>dashboard_sidebar config</span>
        </div>
        <ul>
          ${this._errors.map(e=>J`<li>${e}</li>`)}
        </ul>
      </div>
    `}};ji.styles=Fi,e([ge({attribute:!1})],ji.prototype,"hass",void 0),e([ge({attribute:!1})],ji.prototype,"editMode",void 0),e([ge({type:Boolean,reflect:!0})],ji.prototype,"preview",void 0),e([ge({attribute:!1})],ji.prototype,"previewCollapsed",void 0),e([ge({attribute:!1})],ji.prototype,"previewSelected",void 0),e([ge({attribute:!1})],ji.prototype,"previewInteractive",void 0),e([ge({type:Boolean,reflect:!0,attribute:"full"})],ji.prototype,"previewFull",void 0),e([ge({attribute:!1})],ji.prototype,"previewCollapsedCats",void 0),e([ve()],ji.prototype,"_config",void 0),e([ve()],ji.prototype,"_collapsed",void 0),e([ve()],ji.prototype,"_now",void 0),e([ve()],ji.prototype,"_path",void 0),e([ve()],ji.prototype,"_openCategory",void 0),e([ve()],ji.prototype,"_popoverAnchor",void 0),e([ve()],ji.prototype,"_pinnedAnchor",void 0),e([ve()],ji.prototype,"_footerOpen",void 0),e([ve()],ji.prototype,"_footerBarWidth",void 0),e([ve()],ji.prototype,"_tooltip",void 0),e([ve()],ji.prototype,"_collapsedCats",void 0),e([ve()],ji.prototype,"_errors",void 0),ji=e([be("dashboard-sidebar")],ji);const Hi=e=>e.on_desktop??"sidebar",Li=e=>e.on_mobile??(e.mobile?"bar":"sidebar"),Yi=e=>e.mobile?.mode??"mirror",Wi=(e,t)=>Array.isArray(e)?e.map(e=>({source:"inline",kind:t??e.type??"item",element:{...e}})):[],Ui=e=>{const t="bar"===Li(e)?e.mobile??{}:void 0;if(!t)return{slots:[],menu:[],extras:[],footer:[]};if("mirror"===Yi(e)){const t=[];for(const o of[...e.header??[],...e.body??[]]){const e=o.type??"item";if("category"===e){const e=o;t.push({source:"derived",kind:"category",element:{...e,items:(e.items??[]).map(e=>({...e}))}})}else"item"!==e&&"divider"!==e&&"clock"!==e&&"date"!==e||t.push({source:"derived",kind:e,element:{...o}})}return{slots:t,menu:(e.footer?.buttons??[]).map(e=>({source:"derived",kind:"button",element:{...e}})),extras:[],footer:[]}}return{slots:(t.items??[]).map(e=>({source:"inline",kind:e.type??"item",element:{...e}})),menu:[],extras:Wi(t.menu),footer:Wi(t.footer?.buttons,"button")}},qi=h`
  :host([data-position='top']) {
    inset: 0 0 auto;
  }

  .dashboard-sidebar-bar-sheet-rowgroup {
    display: flex;
    flex-direction: column;
  }

  /* Editor preview: everything joins normal flow so the frame hugs the
     content: the sheet sits above the bar (below it when top-docked) and
     there is no scrim to dim. */
  :host([preview]) {
    position: static;
    z-index: auto;
    display: flex;
    flex-direction: column;

    /* Anchor content to the docked edge (flex-end is the bottom in column
       flow and the top in the top-dock's column-reverse), so a stretched
       host keeps the bar pinned while the sheet grows over the page area. */
    justify-content: flex-end;
    width: 100%;
    inset: auto;
  }

  :host([preview][data-position='top']) {
    flex-direction: column-reverse;
    inset: auto;
  }

  :host([preview]) .dashboard-sidebar-bar-sheet-scrim {
    display: none;
  }

  :host([preview]) .dashboard-sidebar-bar-sheet {
    position: static;
    max-height: 320px;
  }

  :host {
    position: fixed;
    inset: auto 0 0;
    z-index: 6;

    /* The same accent chain the sidebar uses, so the bar's active treatment
       matches the desktop nav-active look under any theme. */
    --dashboard-sidebar-accent-color: var(
      --sidebar-selected-icon-color,
      var(--primary-color, #03a9f4)
    );
    --dashboard-sidebar-accent-text-color: var(
      --sidebar-selected-text-color,
      var(--dashboard-sidebar-accent-color)
    );
    --dashboard-sidebar-item-radius: var(--ha-card-border-radius, 10px);
    --dashboard-sidebar-hover-background: var(--divider-color, rgb(0 0 0 / 8%));
    --dashboard-sidebar-on-accent-color: var(--text-primary-color, #fff);
    --dashboard-sidebar-divider-color: var(--divider-color, rgb(0 0 0 / 12%));
    --dashboard-sidebar-background: var(
      --card-background-color,
      var(--primary-background-color, #fff)
    );
  }

  .dashboard-sidebar-bar {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
    width: 100%;
    min-height: var(--dashboard-sidebar-bar-height, 56px);
    /* The iOS home-indicator chin, trimmed: the full inset looks tall, so
       keep just enough to clear the gesture zone. Override the whole value
       with --dashboard-sidebar-bar-safe-area. */
    padding: 0 max(var(--dashboard-sidebar-bar-padding, 12px), env(safe-area-inset-right, 0px))
      var(
        --dashboard-sidebar-bar-safe-area,
        max(0px, calc(env(safe-area-inset-bottom, 0px) - 14px))
      )
      max(var(--dashboard-sidebar-bar-padding, 12px), env(safe-area-inset-left, 0px));
    background: var(
      --dashboard-sidebar-bar-background,
      var(--ha-card-background, var(--card-background-color, #fff))
    );
    border-top: 1px solid var(--divider-color, rgb(127 127 127 / 20%));
  }

  :host([data-position='top']) .dashboard-sidebar-bar {
    padding-top: env(safe-area-inset-top, 0);
    padding-bottom: 0;
    border-top: none;
    border-bottom: 1px solid var(--divider-color, rgb(127 127 127 / 20%));
  }

  :host([data-position='top']) .dashboard-sidebar-bar-flyout {
    top: calc(100% + 8px);
    bottom: auto;
  }

  :host([data-position='top']) .dashboard-sidebar-bar-sheet {
    top: 100%;
    bottom: auto;
    border-top: none;
    border-bottom: 1px solid var(--divider-color, rgb(127 127 127 / 20%));
    border-radius: 0 0 var(--dashboard-sidebar-bar-sheet-radius, 16px)
      var(--dashboard-sidebar-bar-sheet-radius, 16px);
    box-shadow: 0 4px 16px rgb(0 0 0 / 25%);
    transform: translateY(-100%);
  }

  :host([data-position='top']) .dashboard-sidebar-bar-sheet.open {
    transform: translateY(0);
  }

  /* The edit-mode pencil, floating just off the bar on its page side,
     matching the desktop sidebar's circular edit button. */
  .dashboard-sidebar-bar-edit {
    position: absolute;
    top: -36px;
    right: 10px;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid var(--dashboard-sidebar-divider-color);
    border-radius: 50%;
    background: var(
      --dashboard-sidebar-bar-background,
      var(--ha-card-background, var(--card-background-color, #fff))
    );
    color: var(--primary-text-color);
    cursor: pointer;
  }

  .dashboard-sidebar-bar-edit ha-icon {
    --mdc-icon-size: 16px;
  }

  :host([data-position='top']) .dashboard-sidebar-bar-edit {
    top: auto;
    bottom: -36px;
  }

  .dashboard-sidebar-bar-slots {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    align-items: stretch;
    gap: var(--dashboard-sidebar-bar-gap, 8px);
  }

  .dashboard-sidebar-bar-slot {
    display: flex;
    flex: 1 1 0;
    min-width: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 6px 0;
    border: none;
    background: none;
    color: var(--primary-text-color);
    font: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .dashboard-sidebar-bar-slot:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }

  .dashboard-sidebar-bar-icon {
    --mdc-icon-size: var(--dashboard-sidebar-bar-icon-size, 28px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    border-radius: var(--dashboard-sidebar-item-radius);
  }

  .dashboard-sidebar-bar-abbr {
    font-size: 15px;
    font-weight: 600;
    line-height: var(--dashboard-sidebar-bar-icon-size, 28px);
  }

  .dashboard-sidebar-bar-label {
    max-width: 100%;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* Clock and date slots use the desktop sidebar's collapsed compact text. */
  .dashboard-sidebar-bar-time {
    padding: 0 8px;
    border-radius: var(--dashboard-sidebar-item-radius);
    font-size: var(--ha-font-size-m, 0.85rem);
    font-variant-numeric: tabular-nums;

    /* Match the icon box height so time, date, and icons share one center
       line and the two texts sit on a common baseline. */
    line-height: calc(var(--dashboard-sidebar-bar-icon-size, 28px) + 4px);
    white-space: nowrap;
  }

  .dashboard-sidebar-bar-slot-date .dashboard-sidebar-bar-time {
    font-size: var(--ha-font-size-s, 0.7rem);
    opacity: 0.75;
  }

  /* An element whose navigate action targets the current page gets the same
     treatment as the desktop sidebar's nav-active: accent text plus a tinted
     pill behind the icon or time. Inline icon colors still win, as they do
     on desktop. */
  .dashboard-sidebar-bar-slot-active {
    color: var(--dashboard-sidebar-bar-active-color, var(--dashboard-sidebar-accent-text-color));
  }

  .dashboard-sidebar-bar-slot-active .dashboard-sidebar-bar-icon {
    background: color-mix(
      in srgb,
      var(--dashboard-sidebar-bar-active-color, var(--dashboard-sidebar-accent-color)) 14%,
      transparent
    );
  }

  @media (hover: hover) {
    .dashboard-sidebar-bar-slot:hover .dashboard-sidebar-bar-icon {
      background: var(--dashboard-sidebar-hover-background);
    }
  }

  /* An open category or menu trigger matches the desktop collapsed rail's
     open state: a solid accent pill with on-accent text. */
  .dashboard-sidebar-bar-slot-open {
    color: var(--dashboard-sidebar-on-accent-color);
  }

  .dashboard-sidebar-bar-slot-open .dashboard-sidebar-bar-icon {
    background: var(--dashboard-sidebar-accent-color);
  }

  .dashboard-sidebar-bar-divider {
    flex: 0 0 1px;
    align-self: stretch;
    margin: 10px 0;
    background: var(--divider-color, rgb(127 127 127 / 30%));
  }

  .dashboard-sidebar-bar-flyout {
    position: absolute;
    bottom: calc(100% + 8px);
    display: flex;
    flex-direction: column;
    width: var(--dashboard-sidebar-bar-flyout-width, 200px);
    max-height: 60vh;
    padding: 6px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--divider-color, rgb(127 127 127 / 40%)) transparent;

    /* Composite the theme surface over an opaque base: themes commonly give
       card backgrounds alpha, which would let the page bleed through. */
    background:
      linear-gradient(
        var(--dashboard-sidebar-bar-sheet-background, var(--dashboard-sidebar-background)),
        var(--dashboard-sidebar-bar-sheet-background, var(--dashboard-sidebar-background))
      ),
      var(--primary-background-color, #111);
    border: 1px solid var(--divider-color, rgb(127 127 127 / 20%));
    border-radius: 12px;
    box-shadow: 0 4px 16px rgb(0 0 0 / 25%);
  }

  .dashboard-sidebar-bar-flyout-row {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: none;
    color: var(--primary-text-color);
    font: inherit;
    text-align: left;
    cursor: pointer;
  }

  .dashboard-sidebar-bar-flyout-row:hover,
  .dashboard-sidebar-bar-flyout-row:focus-visible {
    background: rgb(127 127 127 / 12%);
  }

  .dashboard-sidebar-bar-flyout-row .dashboard-sidebar-bar-icon {
    padding: 0;
  }

  .dashboard-sidebar-bar-flyout-row-active {
    color: var(--dashboard-sidebar-bar-active-color, var(--dashboard-sidebar-accent-text-color));
    background: color-mix(
      in srgb,
      var(--dashboard-sidebar-bar-active-color, var(--dashboard-sidebar-accent-color)) 14%,
      transparent
    );
  }

  .dashboard-sidebar-bar-sheet-scrim {
    position: fixed;
    inset: 0;
    z-index: 0;
    background: var(--dashboard-sidebar-bar-scrim-color, rgb(0 0 0 / 32%));
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .dashboard-sidebar-bar-sheet-scrim.open {
    opacity: 1;
  }

  .dashboard-sidebar-bar-sheet {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    padding: 8px;
    /* Composited over an opaque base like the flyout, for alpha themes. */
    background:
      linear-gradient(
        var(--dashboard-sidebar-bar-sheet-background, var(--dashboard-sidebar-background)),
        var(--dashboard-sidebar-bar-sheet-background, var(--dashboard-sidebar-background))
      ),
      var(--primary-background-color, #111);
    border-top: 1px solid var(--divider-color, rgb(127 127 127 / 20%));
    border-radius: var(--dashboard-sidebar-bar-sheet-radius, 16px)
      var(--dashboard-sidebar-bar-sheet-radius, 16px) 0 0;
    box-shadow: 0 -4px 16px rgb(0 0 0 / 25%);

    /* The same slide the sidebar uses when collapsing/expanding (0.25s ease):
       the sheet slides out from behind the bar, which stacks above it. A
       transition rather than keyframes, because WebKit does not reliably
       resolve @keyframes from shadow-DOM constructed stylesheets. */
    transform: translateY(100%);
    transition: transform 0.25s ease;
  }

  .dashboard-sidebar-bar-sheet.open {
    transform: translateY(0);
  }

  .dashboard-sidebar-bar-sheet.closing,
  .dashboard-sidebar-bar-sheet-scrim.closing {
    pointer-events: none;
  }

  @keyframes dashboard-sidebar-bar-fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  /* Reduced motion: swap the slide for a short crossfade rather than
     removing feedback entirely. */
  @media (prefers-reduced-motion: reduce) {
    .dashboard-sidebar-bar-sheet {
      opacity: 0;
      transform: none;
      transition: opacity 0.15s ease;
    }

    .dashboard-sidebar-bar-sheet.open {
      opacity: 1;
      transform: none;
    }
  }

  .dashboard-sidebar-bar-sheet-rows {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--divider-color, rgb(127 127 127 / 40%)) transparent;
  }

  .dashboard-sidebar-bar-sheet-row {
    display: flex;
    flex: 0 0 auto;
    gap: 12px;
    align-items: center;
    padding: 10px 12px;
    border: none;
    border-radius: var(--dashboard-sidebar-item-radius);
    background: transparent;
    color: var(--primary-text-color);
    font: inherit;
    text-align: left;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .dashboard-sidebar-bar-sheet-row:hover,
  .dashboard-sidebar-bar-sheet-row:focus-visible {
    background: var(--dashboard-sidebar-hover-background);
  }

  /* Category headers match the desktop expanded sidebar: bold, slightly
     dimmed, with the chevron rotating shut. */
  .dashboard-sidebar-bar-sheet-category {
    font-weight: var(--ha-font-weight-bold, 600);
    opacity: 0.85;
  }

  .dashboard-sidebar-bar-sheet-row .dashboard-sidebar-bar-icon {
    padding: 0;
  }

  .dashboard-sidebar-bar-sheet-row-active {
    color: var(--dashboard-sidebar-bar-active-color, var(--dashboard-sidebar-accent-text-color));
    background: color-mix(
      in srgb,
      var(--dashboard-sidebar-bar-active-color, var(--dashboard-sidebar-accent-color)) 14%,
      transparent
    );
  }

  .dashboard-sidebar-bar-sheet-label {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: var(--ha-font-size-l, 1rem);
  }

  .dashboard-sidebar-bar-sheet-chevron {
    --mdc-icon-size: 20px;

    flex: 0 0 auto;
    opacity: 0.7;
    transition: transform 0.2s ease;
  }

  .dashboard-sidebar-bar-sheet-chevron:not(.open) {
    transform: rotate(-90deg);
  }

  /* Children hang off the desktop guide line. */
  .dashboard-sidebar-bar-sheet-children {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 8px;
    border-left: 1px solid var(--dashboard-sidebar-divider-color);
    margin-left: 18px;
  }

  /* Curated titles follow the desktop app-title treatment. */
  .dashboard-sidebar-bar-sheet-title {
    padding: 10px 12px 4px;
    overflow: hidden;
    font-size: var(--ha-font-size-xl, 1.25rem);
    font-weight: var(--ha-font-weight-medium, 500);
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dashboard-sidebar-bar-sheet-title.clickable {
    cursor: pointer;
  }

  .dashboard-sidebar-bar-sheet-card {
    flex: 0 0 auto;
    min-width: 0;
  }

  .dashboard-sidebar-bar-sheet-time {
    cursor: default;
    font-variant-numeric: tabular-nums;
  }

  .dashboard-sidebar-bar-sheet-divider {
    flex: 0 0 1px;
    margin: 6px 10px;
    background: var(--divider-color, rgb(127 127 127 / 30%));
  }

  /* The pinned button row follows the desktop footer's styling. */
  .dashboard-sidebar-bar-sheet-footer {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--dashboard-sidebar-divider-color);
  }

  .dashboard-sidebar-bar-sheet-footer.no-divider {
    border-top: none;
    padding-top: 0;
  }

  .dashboard-sidebar-bar-sheet-footer-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: var(--dashboard-sidebar-item-radius);
    background: transparent;
    color: var(--primary-text-color);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .dashboard-sidebar-bar-sheet-footer-btn:hover,
  .dashboard-sidebar-bar-sheet-footer-btn:focus-visible {
    background: var(--dashboard-sidebar-hover-background);
  }

  .dashboard-sidebar-bar-sheet-footer-btn .dashboard-sidebar-bar-icon {
    padding: 0;
  }

  .dashboard-sidebar-bar-sheet-footer-content {
    flex: 1 1 auto;
    min-width: 0;
  }

  .dashboard-sidebar-bar-sheet-footer-content.clickable {
    cursor: pointer;
  }

  .dashboard-sidebar-bar-flyout-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;let Xi=class extends pe{constructor(){super(...arguments),this.preview=!1,this.editMode=!1,this.previewSheetOpen=!1,this._resolved={slots:[],menu:[],extras:[],footer:[]},this._path=window.location.pathname,this._capacity=1/0,this._open=null,this._anchorX=0,this._extraCards=new Map,this._expanded=new Set,this._sheetClosing=!1,this._sheetShown=!1,this._now=new Date,this._templates=new li(()=>this.requestUpdate()),this._resize=new ResizeObserver(()=>this._measure(!0)),this._onLocationChange=()=>{this._path=window.location.pathname,this._close()},this._onOutsideClick=e=>{this.preview||null===this._open||e.composedPath().includes(this)||this._close()},this._measuredWidth=0}set hass(e){this._hass=e,this._templates.setHass(e),this._footerCard&&(this._footerCard.hass=e);for(const t of this._extraCards.values())t.hass=e}get hass(){return this._hass}_close(){"menu"===this._open&&(this._sheetClosing=!0,this._sheetShown=!1,window.setTimeout(()=>{this._sheetClosing=!1},400)),this._open=null,this._expanded=new Set}setConfig(e){this._config=e,this._resolved=Ui(e),this.setAttribute("data-position",e.mobile?.position??"bottom");const t=[],o=[];for(const e of[...this._resolved.slots,...this._resolved.menu,...this._resolved.extras,...this._resolved.footer])"button"===e.kind?o.push(e.element):t.push(e.element);this._templates.collect({body:t,footer:{...e.footer??{},buttons:o}}),this._templates.setHass(this._hass),this._restartTimer(),this._buildCards()}_effectiveFooter(){if(this._config)return"mirror"===Yi(this._config)?this._config.footer:this._config.mobile?.footer}_footerHasContent(){const e=this._effectiveFooter();return void 0!==e&&(void 0!==e.card||void 0!==e.markdown)}async _buildCards(){const e=this._effectiveFooter(),t=new Map;if(this._resolved.extras.forEach((e,o)=>{"card"===e.kind?t.set(o,e.element.card):"markdown"===e.kind&&t.set(o,{type:"markdown",content:e.element.content})}),!this._footerHasContent()&&0===t.size)return this._footerCard=void 0,void(this._extraCards=new Map);const o=await(window.loadCardHelpers?.());if(!o)return;const i=e=>{const t="string"==typeof e?{type:"markdown",content:e}:e,i=o.createCardElement(t);return i.hass=this._hass,i};if(this._footerHasContent()){const t=void 0!==e?.card?e.card:{type:"markdown",content:e?.markdown};this._footerCard=i(t)}else this._footerCard=void 0;const r=new Map;for(const[e,o]of t)r.set(e,i(o));this._extraCards=r}_restartTimer(){window.clearInterval(this._timer),this._timer=void 0;const e=new Set(this._resolved.slots.map(e=>e.kind));(e.has("clock")||e.has("date"))&&(this._now=new Date,this._timer=window.setInterval(()=>{this._now=new Date},e.has("clock")?1e3:6e4))}connectedCallback(){super.connectedCallback(),window.addEventListener("location-changed",this._onLocationChange),window.addEventListener("click",this._onOutsideClick,!0),this._resize.observe(this),this._measure(),this._restartTimer()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("location-changed",this._onLocationChange),window.removeEventListener("click",this._onOutsideClick,!0),this._resize.disconnect(),this._templates.clear(),window.clearInterval(this._timer),this._timer=void 0}willUpdate(e){e.has("previewSheetOpen")&&this.preview&&(this._open=this.previewSheetOpen?"menu":null,this._sheetClosing=!1)}updated(){const e=this._config?.mobile?.card_mod;e&&Ho(this,e,"dashboard-sidebar-bar")}_measure(e=!1){const t=this.clientWidth||window.innerWidth;if(t===this._measuredWidth)return;this._measuredWidth=t;const o=()=>{this._capacity=Math.max(1,Math.floor(t/64))};e?requestAnimationFrame(o):o()}_layout(){const{slots:e,menu:t}=this._resolved;if(0===t.length&&0===this._resolved.extras.length&&0===this._resolved.footer.length&&!this._footerHasContent()&&e.length<=this._capacity)return{visible:e,menu:[]};const o=Math.max(1,this._capacity-1);return{visible:e.slice(0,o),menu:[...e.slice(o),...t]}}_navActive(e){const t=e.element;if(!1===t.active_highlight)return!1;const o=t.tap_action;if("navigate"!==o?.action||!o.navigation_path)return!1;const i=String(o.navigation_path).split(/[?#]/)[0].replace(/\/+$/,""),r=this._path.replace(/\/+$/,"");return""!==i&&(r===i||r.startsWith(`${i}/`))}_run(e){this.preview||this._hass&&jo(this,this._hass,e.tap_action,e.entity)}_onSlotTap(e,t,o){"category"!==e.kind?(this._close(),this._run(e.element)):this._toggleFlyout(String(t),o)}_toggleFlyout(e,t){if(this._open===e)return void this._close();const o=t.currentTarget.getBoundingClientRect();this._anchorX=o.left+o.width/2,this._open=e,this._sheetClosing=!1,"menu"===e&&this.preview&&this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("bar-preview-sheet-open",{bubbles:!0,composed:!0}))})}),"menu"===e&&(this._sheetShown=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{"menu"===this._open&&(this._sheetShown=!0)})}))}_label(e){return this._config?.mobile?.labels?this._title(e):void 0}_title(e){const t=e.element;return this._templates.resolve(t.title??t.title)}_timeText(e){const t=e.element,o=Ko(this._now,t.timezone??"");if("date"===e.kind)return ai(o);const i="string"==typeof t.format?t.format.trim():"";let r;if(""!==i&&"12h"!==i&&"24h"!==i)r=/%-?[Il]|%p|%P/.test(i);else{r="12h"===("12h"===i||"24h"===i?i:t.hour_format??t.collapsed_format??"24h")}return ri(o,r)}_renderIcon(e){const t=e.element,o=this._templates.resolve(t.icon),i=this._templates.resolve(t.icon_color),r=this._title(e),a=t.abbr||r.split(/\s+/).map(e=>e[0]??"").join("").slice(0,2);return J`
      <span class="dashboard-sidebar-bar-icon" style=${i?`color:${i}`:""}>
        ${o?J`<ha-icon icon=${o}></ha-icon>`:J`<span class="dashboard-sidebar-bar-abbr">${a}</span>`}
      </span>
    `}_renderSlot(e,t){if("divider"===e.kind)return J`<span class="dashboard-sidebar-bar-divider"></span>`;const o=e.element,i="clock"===e.kind||"date"===e.kind,r=this._navActive(e),a=i?void 0:this._label(e),s=this._title(e),n=i?this._templates.resolve(e.element.text_color):"",d=["dashboard-sidebar-bar-slot",`dashboard-sidebar-bar-slot-${e.kind}`,r?"dashboard-sidebar-bar-slot-active":"",this._open===String(t)?"dashboard-sidebar-bar-slot-open":"",o.class??""].filter(Boolean).join(" ");return J`
      <button
        class=${d}
        id=${o.id??`bar-slot-${t}`}
        aria-label=${s||(i?e.kind:"bar item")}
        aria-current=${r?"page":K}
        style=${n?`color:${n}`:""}
        @click=${o=>this._onSlotTap(e,t,o)}
      >
        ${i?J`<span class="dashboard-sidebar-bar-time">${this._timeText(e)}</span>`:this._renderIcon(e)}
        ${a?J`<span class="dashboard-sidebar-bar-label">${a}</span>`:K}
      </button>
    `}_renderFlyoutRow(e){const t=e.element,o=this._navActive(e);return J`
      <button
        class="dashboard-sidebar-bar-flyout-row ${o?"dashboard-sidebar-bar-flyout-row-active":""} ${t.class??""}"
        @click=${()=>{this._close(),this._run(t)}}
      >
        ${"clock"===e.kind||"date"===e.kind?K:this._renderIcon(e)}
        <span class="dashboard-sidebar-bar-flyout-label">
          ${"clock"===e.kind||"date"===e.kind?this._timeText(e):this._title(e)}
        </span>
      </button>
    `}_flyoutEntries(e){if(null===this._open||"menu"===this._open)return null;const t=Number(this._open),o=Number.isInteger(t)?[...this._resolved.slots,...e][t]:void 0;return o&&"category"===o.kind?(o.element.items??[]).map(e=>({source:"derived",kind:"item",element:e})):null}_toggleExpand(e){const t=new Set(this._expanded);t.has(e)?t.delete(e):t.add(e),this._expanded=t}_renderSheetRow(e,t){if("divider"===e.kind)return J`<span class="dashboard-sidebar-bar-sheet-divider"></span>`;if("clock"===e.kind||"date"===e.kind)return J`
        <div class="dashboard-sidebar-bar-sheet-row dashboard-sidebar-bar-sheet-time">
          ${this._timeText(e)}
        </div>
      `;if("category"===e.kind){const o=e.element,i=this._expanded.has(t),r=(o.items??[]).map(t=>({source:e.source,kind:"item",element:t}));return J`
        <button
          class="dashboard-sidebar-bar-sheet-row dashboard-sidebar-bar-sheet-category ${o.class??""}"
          aria-expanded=${i?"true":"false"}
          @click=${()=>this._toggleExpand(t)}
        >
          ${this._renderIcon(e)}
          <span class="dashboard-sidebar-bar-sheet-label">${this._title(e)}</span>
          <ha-icon
            class="dashboard-sidebar-bar-sheet-chevron ${i?"open":""}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </button>
        ${i?J`
                <div class="dashboard-sidebar-bar-sheet-children">
                  ${r.map((e,o)=>this._renderSheetRow(e,`${t}:${o}`))}
                </div>
              `:K}
      `}const o=e.element,i=this._navActive(e);return J`
      <button
        class="dashboard-sidebar-bar-sheet-row ${i?"dashboard-sidebar-bar-sheet-row-active":""} ${o.class??""}"
        aria-current=${i?"page":K}
        @click=${()=>{this._close(),this._run(o)}}
      >
        ${this._renderIcon(e)}
        <span class="dashboard-sidebar-bar-sheet-label">${this._title(e)}</span>
      </button>
    `}_renderSheetButton(e){const t=e.element,o=this._navActive(e);return J`
      <button
        class="dashboard-sidebar-bar-sheet-footer-btn ${o?"dashboard-sidebar-bar-sheet-row-active":""} ${t.class??""}"
        aria-label=${this._title(e)||"footer button"}
        @click=${()=>{this._close(),this._run(t)}}
      >
        ${this._renderIcon(e)}
      </button>
    `}_renderSheetFooterContent(){const e=this._effectiveFooter(),t=this._footerCard;if(!e||!t)return K;const o=void 0!==e.markdown,i=o&&e.markdown_color?this._templates.resolve(e.markdown_color):"",r=[o||"string"==typeof e.card?"--ha-card-background:transparent;--ha-card-box-shadow:none;--ha-card-border-width:0px":"",i?`color:${i};--primary-text-color:${i}`:""].filter(Boolean).join(";"),a=o?e.tap_action:void 0;return J`
      <div
        class="dashboard-sidebar-bar-sheet-footer-content ${a?"clickable":""}"
        style=${r}
        @click=${a?()=>{this._close(),this._hass&&jo(this,this._hass,a,void 0)}:K}
      >
        ${t}
      </div>
    `}_renderSheetExtra(e,t){if("title"===e.kind){const t=e.element,o=this._templates.resolve(t.text_color),i=[t.align?`text-align:${t.align}`:"",o?`color:${o}`:""].filter(Boolean).join(";");return J`
        <div
          class="dashboard-sidebar-bar-sheet-title ${t.tap_action?"clickable":""}"
          style=${i}
          @click=${t.tap_action?()=>{this._close(),this._run(e.element)}:K}
        >
          ${this._templates.resolve(t.text)}
        </div>
      `}if("card"===e.kind||"markdown"===e.kind){const o=this._extraCards.get(t);if(!o)return K;const i=e.element,r="markdown"===e.kind||"string"==typeof i.card,a="markdown"===e.kind?this._templates.resolve(i.text_color):"",s=[r?"--ha-card-background:transparent;--ha-card-box-shadow:none;--ha-card-border-width:0px":"",a?`color:${a};--primary-text-color:${a}`:""].filter(Boolean).join(";");return J` <div class="dashboard-sidebar-bar-sheet-card" style=${s}>${o}</div> `}return this._renderSheetRow(e,`extra:${t}`)}_renderSheet(e){const t=this._renderSheetFooterContent(),o=this._resolved.extras;if(!("menu"===this._open||this._sheetClosing)||0===e.length&&0===o.length&&0===this._resolved.footer.length&&t===K)return K;const i=(this._sheetClosing?" closing":"")+(this._sheetShown&&"menu"===this._open?" open":""),r=this._resolved.footer,a=r.length>0?K:t,s=r.length>0?r:a===K?e.filter(e=>"button"===e.kind):[],n=e.filter(e=>"button"!==e.kind);return J`
      <div class="dashboard-sidebar-bar-sheet-scrim${i}" @click=${()=>this._close()}></div>
      <div
        class="dashboard-sidebar-bar-sheet${i}"
        role="menu"
        aria-label="More"
        style=${this._config?.background?`background:${this._config.background}`:""}
        @transitionend=${()=>{this._sheetClosing&&(this._sheetClosing=!1)}}
      >
        ${n.length>0||o.length>0?J`
                <div class="dashboard-sidebar-bar-sheet-rows">
                  <div class="dashboard-sidebar-bar-sheet-rowgroup">
                    ${n.map((e,t)=>this._renderSheetRow(e,`row:${t}`))}
                  </div>
                  <div class="dashboard-sidebar-bar-sheet-rowgroup">
                    ${o.map((e,t)=>this._renderSheetExtra(e,t))}
                  </div>
                </div>
              `:K}
        ${s.length>0||t!==K?J`
                <div
                  class="dashboard-sidebar-bar-sheet-footer ${!1===this._effectiveFooter()?.divider?"no-divider":""}"
                >
                  ${a!==K?a:s.map(e=>this._renderSheetButton(e))}
                </div>
              `:K}
      </div>
    `}_renderFlyout(e){const t=this._flyoutEntries(e);if(!t||0===t.length)return K;const o=Math.round(this._anchorX);return J`
      <div
        class="dashboard-sidebar-bar-flyout"
        style="left: clamp(8px, calc(${o}px - var(--dashboard-sidebar-bar-flyout-width, 200px) / 2), calc(100vw - var(--dashboard-sidebar-bar-flyout-width, 200px) - 8px))"
      >
        ${t.map(e=>this._renderFlyoutRow(e))}
      </div>
    `}render(){const e=this._config&&"bar"===Li(this._config)?this._config.mobile??{}:void 0;if(!e||this._resolved.slots.length+this._resolved.menu.length===0)return K;const{visible:t,menu:o}=this._layout(),i=e.background??this._config?.background;return J`
      ${this._renderSheet(o)}
      <nav
        class="dashboard-sidebar-bar"
        data-labels=${e.labels?"true":"false"}
        data-overflowing=${o.length>0?"true":"false"}
        style=${i?`background:${i}`:""}
        aria-label="Dashboard bar"
      >
        ${this._renderFlyout(o)}
        ${this.editMode&&!this.preview?J`<button
                class="dashboard-sidebar-bar-edit"
                title="Edit sidebar"
                @click=${()=>{this.dispatchEvent(new CustomEvent(Uo,{bubbles:!0,composed:!0}))}}
              >
                <ha-icon icon="mdi:pencil"></ha-icon>
              </button>`:K}
        <div class="dashboard-sidebar-bar-slots">
          ${t.map((e,t)=>this._renderSlot(e,t))}
          ${o.length>0||this._resolved.extras.length>0||this._resolved.footer.length>0||this._footerHasContent()?J`
                  <button
                    class="dashboard-sidebar-bar-slot dashboard-sidebar-bar-slot-overflow ${"menu"===this._open?"dashboard-sidebar-bar-slot-open":""}"
                    aria-label="More"
                    aria-expanded=${"menu"===this._open?"true":"false"}
                    @click=${e=>this._toggleFlyout("menu",e)}
                  >
                    <span class="dashboard-sidebar-bar-icon">
                      <ha-icon icon="mdi:dots-horizontal"></ha-icon>
                    </span>
                  </button>
                `:K}
        </div>
      </nav>
    `}};Xi.styles=qi,e([ge({type:Boolean,reflect:!0})],Xi.prototype,"preview",void 0),e([ge({attribute:!1})],Xi.prototype,"editMode",void 0),e([ge({attribute:!1})],Xi.prototype,"previewSheetOpen",void 0),e([ge({attribute:!1})],Xi.prototype,"hass",null),e([ve()],Xi.prototype,"_config",void 0),e([ve()],Xi.prototype,"_resolved",void 0),e([ve()],Xi.prototype,"_path",void 0),e([ve()],Xi.prototype,"_capacity",void 0),e([ve()],Xi.prototype,"_open",void 0),e([ve()],Xi.prototype,"_anchorX",void 0),e([ve()],Xi.prototype,"_footerCard",void 0),e([ve()],Xi.prototype,"_extraCards",void 0),e([ve()],Xi.prototype,"_expanded",void 0),e([ve()],Xi.prototype,"_sheetClosing",void 0),e([ve()],Xi.prototype,"_sheetShown",void 0),e([ve()],Xi.prototype,"_now",void 0),Xi=e([be("dashboard-sidebar-bar")],Xi);const Ji={},Vi=ye(class extends xe{constructor(){super(...arguments),this.ot=Ji}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return V}else if(this.ot===t)return V;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}}),Ki=ye(class extends xe{constructor(){super(...arguments),this.key=K}render(e,t){return this.key=e,t}update(e,[t,o]){return t!==this.key&&(Me(e),this.key=t),o}}),Zi=e=>J`
  <div class="confirm-scrim">
    <div class="confirm" role="alertdialog" aria-label=${e.label}>
      <p>${e.message}</p>
      <div class="confirm-actions">
        <button class="danger-btn" @click=${e.onConfirm}>${e.confirmLabel}</button>
        <button @click=${e.onKeep}>${e.keepLabel}</button>
      </div>
    </div>
  </div>
`,Gi=(e,t)=>{const o=window.innerHeight-e.bottom,i=e.top,r=o>=i,a=Math.max(120,(r?o:i)-8-4);return`${r?`top: ${e.bottom+4}px`:`bottom: ${window.innerHeight-e.top+4}px`}; ${"right"===t?`right: ${Math.max(8,window.innerWidth-e.right)}px`:`left: ${Math.max(8,e.left)}px`}; max-height: ${a}px`};class Qi{constructor(e){this._addOpen=!1,this._elementOpen=!1,this._tabOpen=!1,this._tabSubmenuOpen=!1,this.addRect=null,this.addItems=[],this.elementRect=null,this.tabRect=null,this.host=e,e.addController(this)}hostConnected(){}get addOpen(){return this._addOpen}set addOpen(e){this._addOpen=e,this.host.requestUpdate()}get elementOpen(){return this._elementOpen}set elementOpen(e){this._elementOpen=e,this.host.requestUpdate()}get tabOpen(){return this._tabOpen}set tabOpen(e){this._tabOpen=e,this.host.requestUpdate()}get tabSubmenuOpen(){return this._tabSubmenuOpen}set tabSubmenuOpen(e){this._tabSubmenuOpen=e,this.host.requestUpdate()}}const er=e=>J`
    <div class="pv-ghost fade-${e}">
      ${[72,54,84,48,66,60,78,50].map(e=>J`<div class="ghost-row">
            <span class="ghost-icon"></span><span class="ghost-bar" style="width: ${e}%"></span>
          </div>`)}
    </div>
  `,tr=e=>J`
    <div class="pv-ghost-cards fade-${e}">
      <div class="ghost-card">
        <div class="ghost-subgrid">
          <span class="ghost-sub" style="height: 36px"></span>
          <span class="ghost-sub" style="height: 36px"></span>
          <span class="ghost-sub" style="height: 36px"></span>
          <span class="ghost-sub" style="height: 36px"></span>
        </div>
        <span class="ghost-sub ghost-sub-fill"></span>
      </div>
      <div class="ghost-card">
        <span class="ghost-sub" style="height: 30px"></span>
        <span class="ghost-sub" style="height: 30px"></span>
        <span class="ghost-sub" style="height: 30px"></span>
      </div>
      <div class="ghost-card wide">
        <div class="ghost-subrow">
          <span class="ghost-sub" style="height: 44px"></span>
          <span class="ghost-sub" style="height: 44px"></span>
          <span class="ghost-sub" style="height: 44px"></span>
          <span class="ghost-sub" style="height: 44px"></span>
        </div>
        <span class="ghost-sub ghost-sub-fill"></span>
      </div>
    </div>
  `,or=e=>J`
  <div class="empty-state">
    <p class="empty-msg">Add your first element for this area to show up.</p>
    ${e}
  </div>
`,ir=h`
  :host {
    position: fixed;
    inset: 0;
    z-index: 100;
    /* Center via flexbox rather than a transform on the panel: a transformed
         ancestor would become the containing block for the preview's
         fixed-position popovers and tooltips, throwing off their placement. */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ha-font-family-body, sans-serif);
    color: var(--primary-text-color, #212121);

    /* A subtly distinct surface shared by the active tab and the content
         area, so the two read as one region against the modal background. */
    --dashboard-sidebar-surface: color-mix(
      in srgb,
      var(--primary-text-color, #212121) 6%,
      transparent
    );
  }

  /* No focus/selection outlines on the modal's own controls. */
  :focus,
  :focus-visible {
    outline: none;
  }

  .backdrop {
    position: absolute;
    inset: 0;
    background: rgb(0 0 0 / 45%);
  }

  .panel {
    position: relative;
    z-index: 1;
    width: min(820px, 94vw);
    height: 75vh;
    display: flex;
    flex-direction: column;
    /* Composite the (often translucent) card color over an opaque base so the
         dashboard never shows through the modal, plus the surface tint on top so
         the modal is the tinted colour and the tab/content area is the base. */
    background-color: var(--primary-background-color, #fff);
    background-image:
      linear-gradient(var(--dashboard-sidebar-surface), var(--dashboard-sidebar-surface)),
      linear-gradient(var(--card-background-color, #fff), var(--card-background-color, #fff));
    border-radius: 12px;
    box-shadow: 0 8px 40px rgb(0 0 0 / 40%);
    overflow: hidden;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 12px 2px;
  }

  header h2 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  .content {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    padding: 12px;
    /* Clip here; the columns inside scroll independently. */
    overflow: hidden;
    background-color: var(--primary-background-color, #fff);
    background-image: linear-gradient(
      var(--card-background-color, #fff),
      var(--card-background-color, #fff)
    );
  }

  .tabs {
    display: flex;
    gap: 4px;
    padding: 2px 12px 0;
    flex-wrap: wrap;
  }

  .tab {
    font: inherit;
    padding: 6px 12px;
    border: none;
    border-radius: 8px 8px 0 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    opacity: 0.7;
  }

  .tab:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: auto;
  }

  .tab.active {
    background-color: var(--primary-background-color, #fff);
    background-image: linear-gradient(
      var(--card-background-color, #fff),
      var(--card-background-color, #fff)
    );
    opacity: 1;
    font-weight: 600;
  }

  .settings {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
  }

  .icon-choice {
    display: flex;
    gap: 6px;
  }

  .choice {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px 18px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 20%));
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .choice ha-icon {
    --mdc-icon-size: 24px;
  }

  .choice-label {
    font-size: 0.75rem;
  }

  .choice.sel {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    border-color: transparent;
  }

  /* When open, space the fields inside the section like the top-level form.
       In browsers that wrap the content in ::details-content, the fields are
       inside that box, so it must carry the gap too (the details-level flex
       there only spaces the summary from the content box). */
  .advanced[open] {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* stylelint-disable-next-line selector-pseudo-element-no-unknown */
  .advanced[open]::details-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .advanced {
    margin-top: 4px;
  }

  .advanced summary {
    cursor: pointer;
    font-size: 0.8rem;
    opacity: 0.7;
  }

  .region {
    margin-bottom: 16px;
  }

  /* The editor fills the width; the preview shrinks to just the sidebar frame
       so it never reserves half the modal. Stacks on mobile via the media query
       below. */
  .split {
    display: flex;
    gap: 20px;
    align-items: stretch;
    flex: 1 1 auto;
    min-height: 0;
  }

  .editor,
  .preview {
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  /* Shrink to the framed preview's own (capped) width. */
  .preview {
    flex: 0 0 auto;
  }

  /* Fill the space left of the preview. */
  .editor {
    flex: 1 1 auto;
    gap: 10px;
    /* Scrolls independently of the preview. Inset the content on the right so
         an overlay scrollbar (macOS "show when scrolling") sits clear of the
         form controls instead of over them, plus a thin styled bar. */
    overflow-y: auto;
    padding-right: 12px;
    scrollbar-width: thin;
    scrollbar-color: var(--divider-color, rgb(0 0 0 / 30%)) transparent;
  }

  .editor::-webkit-scrollbar {
    width: 6px;
  }

  .editor::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: var(--divider-color, rgb(0 0 0 / 30%));
  }

  .editor::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Collapsed (non-mobile): the editor grows to fill and the preview shrinks
       to just what the icon strip needs, pinned to the modal's right edge. No
       flex-wrap, so it never drops below. */
  .split.pv-collapsed .editor {
    flex: 1 1 auto;
  }

  .split.pv-collapsed .preview {
    flex: 0 0 auto;
  }

  .split.pv-collapsed .preview-head {
    justify-content: flex-end;
    gap: 8px;
  }

  .preview-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    /* Pin the Preview label + collapse toggle so they stay in view when the
         whole content scrolls as one (stacked layout). A no-op on wide layouts,
         where the preview column already sits above its own scroll frame. */
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: var(--primary-background-color, #fff);
    background-image: linear-gradient(
      var(--card-background-color, #fff),
      var(--card-background-color, #fff)
    );
  }

  .preview-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.6;
  }

  .pv-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    opacity: 0.7;
  }

  .pv-toggle:hover {
    opacity: 1;
    background: var(--secondary-background-color, rgb(0 0 0 / 6%));
  }

  .pv-toggle ha-icon {
    --mdc-icon-size: 18px;
  }

  /* Expanded preview width: capped to the configured width and to a fraction
       under half the modal so it never dominates the side-by-side layout. The
       380px / 42vw caps must match PREVIEW_CAP_PX / PREVIEW_CAP_VW. */
  .pv-frame:not(.collapsed) {
    width: min(var(--pv-w, 100%), 380px, 42vw);
  }

  .pv-frame {
    box-sizing: border-box;
    /* A little vertical room so the first/last element's selection outline is
         not clipped by the scroll container's edge. */
    padding: 4px 0;
    /* Draw the frame edge with an inset outline, not a border, so it takes no
         layout width: the inner sidebar then gets the full configured width and
         the footer's button-overflow count matches live exactly. */
    outline: 1px solid var(--divider-color, rgb(0 0 0 / 15%));
    outline-offset: -1px;
    background: var(--card-background-color, #fff);
    /* Fill the preview height and scroll on its own, below the fixed heading. */
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    /* Hide the scrollbar so it reserves no width (which would shrink the
         content below the live width and change the footer overflow count);
         wheel/trackpad scrolling still works. */
    scrollbar-width: none;
  }

  /* The mobile tab stacks the form above the preview: the bar is a
     horizontal strip, so it gets the modal's full width below the controls,
     capped at the breakpoint and drag-narrowable from there. */
  .mobile-stack {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 12px;
    min-height: 0;
    overflow-y: auto;

    /* Reserve the gutter permanently: a scrollbar that appears and vanishes
       as the sheet refolds would oscillate the measured available width
       against the fold in a ResizeObserver loop. */
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: var(--divider-color, rgb(0 0 0 / 30%)) transparent;
  }

  .mobile-stack .editor {
    flex: 0 0 auto;
    overflow: visible;
  }

  .mobile-stack .preview {
    flex: 0 0 auto;
  }

  /* The mobile tab's preview label scrolls with the content; the shared
     sticky treatment only causes the frame to slide underneath it here. */
  .mobile-stack .preview-head {
    position: static;
    background: none;
  }

  /* The tab-note row's overflow trigger hugs the right edge. */
  .tab-notes .tab-notes-tool {
    margin-left: auto;
  }

  .mobile-pv-hint {
    display: block;
    margin-top: 6px;
  }

  /* The heading lives on the stack itself so it sticks for the whole tab
     scroll, above the preview chrome. */
  .mobile-stack .form-head {
    flex: 0 0 auto;
    z-index: 6;

    /* Match the Settings heading's height, whose dots button sets a 29px
       content row that the title centers in. */
    min-height: 29px;
  }

  /* Position's two buttons share a fixed width sized to "Bottom". */
  .mobile-position .icon-choice .choice {
    width: 96px;
    box-sizing: border-box;
  }

  .add-menu-header {
    padding: 8px 12px 4px;
    font-size: 0.7rem;
    letter-spacing: 1px;
    opacity: 0.6;
    text-transform: uppercase;
  }

  .add-menu-header:not(:first-child) {
    margin-top: 4px;
    border-top: 1px solid var(--divider-color, rgb(0 0 0 / 12%));
  }

  .mobile-pv-wrap {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-start;
    min-width: 0;
    min-height: 0;
    /* Room for the drag arrow + caption floating above the bar. */
    margin-top: 24px;
  }

  /* The resize handle rides the frame's right edge as a thin rail with the
     direction arrows at its top; being absolute it takes no layout width. */
  .mobile-pv-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    width: 16px;
    align-items: flex-start;
    justify-content: center;
    transform: translateX(-50%);
    color: var(--secondary-text-color, #888);
    cursor: ew-resize;
    touch-action: none;
    user-select: none;
  }

  .mobile-pv-handle::before {
    content: '';
    position: absolute;

    /* Reach up through the caption row so the rail visually attaches to the
       drag arrow. */
    top: -24px;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: currentcolor;
    opacity: 0.6;
    transform: translateX(-50%);
  }

  /* The direction arrows float above the bar, centered on the rail: both
     sides mid-drag, only the available side at the extremes. The caption
     hangs to their right. All share the handle's drag behavior. */
  .mobile-pv-arrows {
    position: absolute;
    top: -23px;
    left: 50%;
    z-index: 1;
    display: flex;
    height: 14px;
    align-items: center;
  }

  .mobile-pv-arrows ha-icon {
    --mdc-icon-size: 14px;

    display: flex;

    /* Match the rail, which draws at 60% of the same color. */
    opacity: 0.6;
  }

  .mobile-pv-arrows.mid {
    transform: translateX(-50%);
    gap: 0;
  }

  /* At full width only shrinking (leftward) remains; at minimum only
     expanding (rightward). The lone arrow sits on the side it points to. */
  .mobile-pv-arrows.max {
    transform: translateX(-100%);
  }

  .mobile-pv-arrows.min {
    margin-left: 0;
  }

  /* The width caption sits at the frame's left edge, above the bar. */
  .mobile-pv-caption {
    position: absolute;
    top: -23px;
    left: 0;
    z-index: 1;
    line-height: 14px;
    white-space: nowrap;
  }

  .mobile-pv-handle:hover {
    color: var(--primary-text-color, #000);
  }

  .mobile-pv-frame {
    /* Pin to the inline width: the base pv-frame flex-grow would otherwise
       stretch the frame to the wrap and defeat the drag handle. The ghost
       strip is a backdrop layer and min-height reserves its space: an
       opening sheet covers the ghosts first and only grows the frame once
       it is taller than that reserve. The edge draws as a zero-layout
       overlay (below) so the bar inside is exactly the advertised width. */
    flex: 0 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: auto;
    min-height: 230px;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0;
    outline: none;
    overflow: hidden;
  }

  .mobile-pv-frame:has(dashboard-sidebar-bar[data-position='top']) {
    justify-content: flex-start;
  }

  .mobile-pv-frame dashboard-sidebar-bar {
    z-index: 1;
  }

  /* A short strip of ghost dashboard cards on the page side of the bar. */
  .pv-ghost-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-content: start;
    padding: 10px 14px;
    overflow: hidden;
    pointer-events: none;
  }

  .pv-ghost-cards.fade-up {
    align-content: end;
    mask-image: linear-gradient(to top, #000 15%, transparent 95%);
  }

  .pv-ghost-cards.fade-down {
    mask-image: linear-gradient(to bottom, #000 15%, transparent 95%);
  }

  .ghost-card {
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px;
    min-height: 96px;
    border-radius: 10px;
    background: rgb(127 127 127 / 10%);
  }

  .ghost-card.wide {
    grid-column: span 2;
  }

  /* Sub-cards standing in for the tiles real dashboard cards contain. */
  .ghost-sub {
    display: block;
    border-radius: 8px;
    background: var(--divider-color, rgb(0 0 0 / 15%));
  }

  .ghost-subgrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .ghost-subrow {
    display: flex;
    gap: 8px;
  }

  .ghost-subrow .ghost-sub {
    flex: 1 1 0;
  }

  /* Fills whatever card height remains below its siblings. */
  .ghost-sub-fill {
    flex: 1 1 auto;
    min-height: 26px;
  }

  .mobile-pv-frame .pv-ghost-cards {
    position: absolute;
    z-index: 0;
    inset: 0;
    align-content: end;
    padding-bottom: 80px;
    opacity: 0.35;
  }

  .mobile-pv-frame:has(dashboard-sidebar-bar[data-position='top']) .pv-ghost-cards {
    align-content: start;
    padding-top: 80px;
    padding-bottom: 10px;
  }

  .mobile-pv-frame::after {
    content: '';
    position: absolute;
    z-index: 5;
    inset: 0;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 15%));
    pointer-events: none;
  }

  .pv-frame::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Collapsed preview: narrow to the icon-strip width, pinned to the right
       edge of the (content-sized) preview column. */
  .pv-frame.collapsed {
    width: 76px;
    align-self: flex-end;
  }

  /* Column frame used by the header/footer previews so the region can be
       pinned to one edge with a faded placeholder filling the rest. */
  .pv-frame.pv-col {
    display: flex;
    flex-direction: column;
  }

  /* The whole-sidebar Settings preview fills its frame with an opaque
     surface that paints over the base outline. A border would eat 2px of
     layout width and skew the footer overflow count, so draw the edge as a
     zero-layout overlay above the content instead. */
  .pv-frame.settings-pv-frame {
    position: relative;
    outline: none;
  }

  .pv-frame.settings-pv-frame::after {
    content: '';
    position: absolute;
    z-index: 5;
    inset: 0;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 15%));
    pointer-events: none;
  }

  /* Skeleton placeholder rows standing in for the content beside a pinned
       region, faded out toward the far edge. */
  .pv-ghost {
    flex: 1 1 auto;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px 16px;
    overflow: hidden;
    pointer-events: none;
  }

  .pv-ghost.fade-up {
    justify-content: flex-end;
    mask-image: linear-gradient(to top, #000 15%, transparent 95%);
  }

  .pv-ghost.fade-down {
    justify-content: flex-start;
    mask-image: linear-gradient(to bottom, #000 15%, transparent 95%);
  }

  .ghost-row {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 10px;
  }

  .ghost-icon {
    flex: 0 0 auto;
    width: 22px;
    height: 22px;
    border-radius: 6px;
    background: var(--divider-color, rgb(0 0 0 / 15%));
  }

  .ghost-bar {
    height: 12px;
    border-radius: 6px;
    background: var(--divider-color, rgb(0 0 0 / 15%));
  }

  /* Collapsed preview shows a single centered column of icons, so the ghost
       drops its text bars and centers the icon placeholders to match. */
  .split.pv-collapsed .ghost-bar {
    display: none;
  }

  .split.pv-collapsed .ghost-row {
    justify-content: center;
  }

  /* The region preview renders at its natural height instead of filling the
       frame, so a short region does not stretch. */
  .pv-frame dashboard-sidebar {
    display: block;
    height: auto;
  }

  /* The whole-sidebar (Settings) preview instead fills the flex-column frame,
       so its body flexes and the footer pins to the bottom, like live. This is
       set in the outer scope because host-targeting page rules win over the
       sidebar's own :host([preview][full]) rules. */
  .pv-frame.pv-col dashboard-sidebar[full] {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
    height: auto;
  }

  @media (width < 640px) {
    /* Full-screen modal on mobile. */
    .panel {
      width: 100vw;
      height: 100vh;
      border-radius: 0;
    }

    /* Stacked: scroll the whole content as one instead of per-column. */
    .content {
      overflow-y: auto;
    }

    .split {
      flex-direction: column;
      flex: 0 0 auto;
    }

    .editor,
    .preview,
    .pv-frame {
      width: 100%;
      flex: 0 0 auto;
    }

    /* Stacked: the preview shows at its configured width but never wider than
         the modal, right-aligned in the preview column to match the collapsed
         view (which pins to the right). */
    .pv-frame:not(.collapsed) {
      width: min(var(--pv-w, 100%), 100%);
      align-self: flex-end;
    }

    .editor,
    .pv-frame {
      overflow: visible;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* The form header row: the element-setting label plus the move/overflow
       tools aligned to the right. Pinned to the top so it stays in view as the
       form scrolls (UI and YAML mode alike); the opaque backdrop matches
       .content so fields pass cleanly underneath. */
  .form-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    position: sticky;
    top: 0;
    z-index: 3;
    padding-bottom: 8px;
    background-color: var(--primary-background-color, #fff);
    background-image: linear-gradient(
      var(--card-background-color, #fff),
      var(--card-background-color, #fff)
    );
    border-bottom: 1px solid var(--divider-color, rgb(0 0 0 / 12%));
  }

  /* Matches the PREVIEW label so the two columns' headers read as a pair. */
  .form-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.6;
  }

  .form-tools {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 0 0 auto;
  }

  .tool {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 0;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .tool:hover:not([disabled]) {
    background: var(--secondary-background-color, rgb(0 0 0 / 8%));
  }

  .tool[disabled] {
    opacity: 0.3;
    cursor: default;
  }

  .tool ha-icon {
    --mdc-icon-size: 18px;
  }

  .menu-empty {
    margin: 0;
    padding: 8px 12px;
    opacity: 0.6;
    font-size: 0.85rem;
  }

  /* Borderless call-to-action shown instead of a preview when a region has no
       elements, so an empty area is not made to look as if it renders. */
  .empty-state {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 32px 16px;
    text-align: center;
  }

  .empty-msg {
    margin: 0;
    max-width: 32ch;
    opacity: 0.7;
  }

  .empty-icon {
    --mdc-icon-size: 40px;

    opacity: 0.35;
  }

  .danger {
    color: var(--error-color, #db4437);
  }

  .icon {
    border: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    padding: 2px 6px;
    border-radius: 6px;
    font: inherit;
  }

  .icon:hover:not([disabled]) {
    background: var(--divider-color, rgb(0 0 0 / 10%));
  }

  .icon[disabled] {
    opacity: 0.3;
    cursor: default;
  }

  .icon.danger:hover {
    color: var(--error-color, #db4437);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 0.85rem;
  }

  .field-inline {
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
  }

  .check-label {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .field-desc {
    font-size: 0.75rem;
    opacity: 0.6;
    line-height: 1.3;
  }

  .field-desc a {
    color: var(--primary-color, #03a9f4);
  }

  /* The card-mod install prompt shown when the integration is absent. */
  .card-mod-missing .field-desc {
    opacity: 0.8;
  }

  /* Collapsed reference of targetable CSS classes under the Card Mod field. */
  .class-ref-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 8px;
  }

  .class-ref-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 4px 10px;
  }

  .class-ref-row code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.78rem;
    color: var(--primary-color, #03a9f4);
    white-space: nowrap;
  }

  .class-ref-row span {
    font-size: 0.78rem;
    opacity: 0.7;
  }

  /* The docs link closing the mobile YAML reference. */
  .class-ref-link a {
    color: var(--primary-color, #03a9f4);
  }

  /* A resolved entity/service replaces the input with a card: the id over its
       friendly name, and a clear button. Matches the inputs' bordered box. */
  .field-picked {
    display: flex;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    width: 100%;
    /* Left/right padding matches the inputs (8px) so the text left-aligns with
         other fields and the clear button lines up with the select arrows. */
    padding: 8px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 20%));
    border-radius: 6px;
    background: var(--card-background-color, #fff);
  }

  .field-picked-text {
    display: flex;
    flex: 1 1 auto;
    min-width: 0;
    flex-direction: column;
    gap: 2px;
  }

  .field-picked-id,
  .field-picked-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .field-picked-name {
    font-size: 0.8rem;
    color: var(--secondary-text-color, #666);
  }

  .field-picked-clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: var(--primary-text-color, #000);
    font-size: 1rem;
    cursor: pointer;
  }

  .field-picked-clear:hover {
    background: var(--secondary-background-color, rgb(0 0 0 / 8%));
  }

  /* Non-blocking advisory (e.g. an out-of-range width): amber, not red. */
  .field-warn {
    font-size: 0.75rem;
    line-height: 1.3;
    color: var(--warning-color, #e8a33d);
  }

  /* Format field: the label row with an info disclosure that reveals the
       supported strftime tokens in a floating list. */
  .field-head {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .format-help {
    position: relative;
    display: inline-flex;
  }

  .format-help > summary {
    display: inline-flex;
    align-items: center;
    list-style: none;
    cursor: pointer;
    opacity: 0.6;
  }

  .format-help > summary::-webkit-details-marker {
    display: none;
  }

  .format-help[open] > summary,
  .format-help > summary:hover {
    opacity: 1;
  }

  .format-help ha-icon {
    --mdc-icon-size: 16px;
  }

  .format-help-pop {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: max-content;
    max-width: 18rem;
    max-height: 15rem;
    overflow-y: auto;
    padding: 8px 10px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 15%));
    border-radius: 8px;
    background-color: var(--primary-background-color, #fff);
    background-image: linear-gradient(
      var(--card-background-color, #fff),
      var(--card-background-color, #fff)
    );
    box-shadow: 0 4px 16px rgb(0 0 0 / 40%);
    font-size: 0.8rem;
    font-weight: 400;
  }

  .format-token {
    display: flex;
    gap: 10px;
  }

  .format-token code {
    flex: 0 0 auto;
    min-width: 2.4em;
    color: var(--primary-color, #03a9f4);
    font-family: var(--ha-font-family-code, monospace);
  }

  .format-token span {
    opacity: 0.85;
  }

  .color-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .color-row input[type='text'] {
    flex: 1;
    min-width: 0;
  }

  .color-swatch {
    width: 40px;
    height: 34px;
    flex: 0 0 auto;
    padding: 2px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 20%));
    border-radius: 6px;
    cursor: pointer;
  }

  .field input[type='text'],
  .field select,
  .field textarea {
    box-sizing: border-box;
    width: 100%;
    font: inherit;
    padding: 6px 8px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 20%));
    border-radius: 6px;
    background: var(--card-background-color, #fff);
    color: inherit;
  }

  /* Monospace variant for code-ish content (e.g. Service Data JSON). */
  .field textarea.mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    line-height: 1.4;
  }

  /* Grow to fit the content, with the rows attribute as the minimum. */
  .field textarea.autosize {
    /* stylelint-disable-next-line property-no-unknown */
    field-sizing: content;
    resize: none;
  }

  /* Match the select's height to the text inputs (native selects render
       shorter otherwise). */
  .field input[type='text'],
  .field select {
    height: 34px;
  }

  .field.invalid input[type='text'],
  .field.invalid textarea {
    border-color: var(--error-color, #db4437);
  }

  /* Clearly show a disabled control (e.g. Format while a custom format is set). */
  .field select:disabled,
  .field input:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    background: var(--divider-color, rgb(0 0 0 / 6%));
  }

  .field-inline input:disabled ~ .check-label {
    opacity: 0.4;
  }

  /* HA's code editor field: wrap it in the same bordered box as the other
       inputs. Keep overflow visible so the CodeMirror autocomplete popup is not
       clipped by the field box. */
  .code-field ha-code-editor {
    display: block;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 20%));
    border-radius: 6px;
    --code-editor-background-color: var(--card-background-color, transparent);
    --code-mirror-max-height: 160px;
  }

  .code-field.invalid ha-code-editor {
    border-color: var(--error-color, #db4437);
  }

  /* In element YAML mode, the form fills the editor column and the YAML editor
       grows to take all the height left above the buttons. */
  .form.yaml-mode {
    flex: 1 1 auto;
    min-height: 0;
  }

  .yaml-fill {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  .yaml-fill ha-yaml-editor {
    flex: 1 1 auto;
    min-height: 0;
    --code-mirror-max-height: 100%;
  }

  .yaml-fill textarea {
    flex: 1 1 auto;
    min-height: 0;
  }

  /* Invalid-YAML notice carried back to the UI form. */
  .yaml-banner {
    padding: 8px 10px;
    border: 1px solid var(--error-color, #db4437);
    border-radius: 6px;
    color: var(--error-color, #db4437);
    font-size: 0.8rem;
    background: color-mix(in srgb, var(--error-color, #db4437) 10%, transparent);
  }

  /* HA's YAML editor field (manual card): match the bordered input box. */
  .yaml-field ha-yaml-editor {
    display: block;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 20%));
    border-radius: 6px;
    overflow: hidden;
    --code-editor-background-color: var(--card-background-color, transparent);
    --code-mirror-max-height: 220px;
  }

  .field-error {
    color: var(--error-color, #db4437);
    font-size: 0.75rem;
  }

  .hint {
    font-size: 0.8rem;
    opacity: 0.6;
    margin: 4px 0;
  }

  .tab-notes {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--divider-color, rgb(0 0 0 / 15%));
  }

  .tab-notes .tab-note {
    flex: 1 1 auto;
  }

  /* The options button must not tallen the notes row past its text, so the
       footer notes line up exactly with the other tabs: cap its box to the
       note's line height (0.95rem * 1.4) while keeping the icon centered. */
  .tab-notes .tool {
    height: calc(0.95rem * 1.4);
    margin-block: 0;
  }

  .tab-note {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;
    opacity: 0.85;
  }

  .editor-note {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 0 0 12px;
    padding: 10px 12px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 15%));
    border-left: 3px solid var(--info-color, #2196f3);
    border-radius: 8px;
    background: color-mix(in srgb, var(--info-color, #2196f3) 8%, transparent);
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .editor-note ha-icon {
    --mdc-icon-size: 22px;

    flex: 0 0 auto;
    color: var(--info-color, #2196f3);
  }

  /* Dashed "dropzone" add trigger, used for empty-area call-to-actions. */
  .add {
    font: inherit;
    margin-top: 4px;
    padding: 6px 10px;
    border: 1px dashed var(--divider-color, rgb(0 0 0 / 25%));
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  /* Solid (filled) form action buttons: add-after, add child, delete. */
  /* The form's bottom actions (Add / Delete) sit in one equal-width row. */
  .form-actions {
    display: flex;
    gap: 8px;
    margin-top: 4px;
  }

  .form-actions > * {
    flex: 1 1 0;
    min-width: 0;
    margin-top: 0;
    text-align: center;
  }

  .add-btn,
  .add.solid {
    font: inherit;
    margin-top: 4px;
    padding: 8px 12px;
    border: 1px solid transparent;
    border-radius: 8px;
    /* A tint of the text color reads as a solid button in both light and dark
         themes, unlike the near-invisible secondary background. */
    background: color-mix(in srgb, var(--primary-text-color, #000) 14%, transparent);
    color: inherit;
    cursor: pointer;
  }

  .add-btn:hover,
  .add.solid:hover {
    background: color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent);
  }

  /* Delete is a solid red button. */
  .add-btn.danger {
    background: var(--error-color, #db4437);
    color: var(--text-primary-color, #fff);
  }

  .add-btn.danger:hover {
    background: color-mix(in srgb, var(--error-color, #db4437) 85%, #000);
  }

  .errors {
    margin: 0;
    padding: 8px 24px;
    color: var(--error-color, #db4437);
    font-size: 0.8rem;
    background: color-mix(in srgb, var(--error-color, #db4437) 10%, transparent);
  }

  footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 10px 12px;
  }

  footer button {
    font: inherit;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: color-mix(in srgb, var(--primary-text-color, #000) 14%, transparent);
    color: inherit;
    cursor: pointer;
  }

  footer button:not(.primary):hover {
    background: color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent);
  }

  .primary {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    border-color: transparent;
  }

  .primary[disabled] {
    opacity: 0.45;
    cursor: default;
  }

  .confirm-scrim {
    position: absolute;
    z-index: 20;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(0 0 0 / 45%);
    border-radius: 12px;
  }

  .confirm {
    max-width: 320px;
    margin: 16px;
    padding: 16px;
    border-radius: 12px;
    background-color: var(--primary-background-color, #fff);
    background-image: linear-gradient(
      var(--card-background-color, #fff),
      var(--card-background-color, #fff)
    );
    box-shadow: 0 8px 40px rgb(0 0 0 / 40%);
  }

  .confirm p {
    margin: 0 0 14px;
  }

  /* Every confirm stacks its options as full-width rows, dismiss last. */
  .confirm-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .confirm-actions button {
    width: 100%;
    font: inherit;
    padding: 8px 14px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 20%));
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .danger-btn {
    background: var(--error-color, #db4437);
    color: var(--text-primary-color, #fff);
    border-color: transparent;
  }

  /* Custom add-element type menu (fixed so it escapes the modal clipping). */
  .menu-scrim {
    position: fixed;
    inset: 0;
    z-index: 1;
  }

  .add-menu {
    position: fixed;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: max-content;
    min-width: 150px;
    max-width: calc(100vw - 16px);
    height: min-content;
    max-height: 60vh;
    overflow-y: auto;
    padding: 4px;
    border: 1px solid var(--divider-color, rgb(0 0 0 / 15%));
    border-radius: 8px;
    background-color: var(--primary-background-color, #fff);
    background-image: linear-gradient(
      var(--card-background-color, #fff),
      var(--card-background-color, #fff)
    );
    box-shadow: 0 4px 16px rgb(0 0 0 / 40%);
  }

  .add-menu-item {
    font: inherit;
    text-align: left;
    padding: 8px 12px;
    border: none;
    border-radius: 6px;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .add-menu-item:hover {
    background: var(--secondary-background-color, rgb(0 0 0 / 8%));
  }

  /* A nested "Change to" choice, indented under its parent item. */
  .add-menu-item.submenu-item {
    padding-left: 26px;
    opacity: 0.85;
  }
`,rr={action:"none"},ar=e=>{switch(e){case"title":return{type:"title",text:"Title"};case"clock":return{type:"clock"};case"date":return{type:"date"};case"divider":return{type:"divider"};case"item":return{type:"item",title:"Item",tap_action:rr};case"category":return{type:"category",title:"Category",items:[{type:"item",title:"Item",tap_action:rr}]};case"markdown":return{type:"markdown",content:"Markdown **content**"};default:return{type:"card",card:{type:"markdown",content:"Card content"}}}},sr=()=>({icon:"mdi:star",tap_action:rr}),nr=e=>{const t=e.trim();return t?/^[a-z_]+\.[a-z0-9_]+$/i.test(t)?null:"Use the form domain.service":null},dr=e=>{const t=e.trim();if(!t)return null;try{return JSON.parse(t),null}catch{return"Invalid JSON"}},lr=e=>{const t=e.trim();if(!t)return null;const o=Number(t);return Number.isInteger(o)&&o>0?null:"Must be a positive number"},cr=(e,t,o)=>{if(e)return{error:e.errorFor(t),onBlur:i=>e.onBlur(t,i,o)}},hr=[...ci],pr=[{value:"none",label:"None"},{value:"toggle",label:"Toggle"},{value:"more-info",label:"More Info"},{value:"navigate",label:"Navigate"},{value:"url",label:"URL"},{value:"call-service",label:"Call Service"},{value:"assist",label:"Assist"}],ur={none:"Nothing happens when this is tapped.",toggle:"Toggles the target entity on or off.","more-info":"Opens the entity's more-info dialog.",navigate:"Navigates to another dashboard path.",url:"Opens a web address in a new tab.","call-service":"Calls a Home Assistant service.",assist:"Opens the Assist voice dialog."},br="Entity targeted by the toggle and more-info actions.",mr=(e,t,o,i,r)=>J`<label class="field ${""}">
    <span>${e}</span>
    <input
      type="text"
      .value=${t??""}
      @input=${e=>o(e.target.value)}
      @blur=${e=>i?.onBlur?.(e.target.value)}
    />
    ${K}
    ${r?J`<small class="field-desc">${r}</small>`:K}
  </label>`,fr=[{code:"%H",desc:"Hour, 24-hour (00-23)"},{code:"%I",desc:"Hour, 12-hour (01-12)"},{code:"%M",desc:"Minute (00-59)"},{code:"%S",desc:"Second (00-59)"},{code:"%p",desc:"AM or PM"},{code:"%P",desc:"am or pm (lowercase)"},{code:"%Z",desc:"Time zone name"},{code:"%z",desc:"UTC offset (+0100)"},{code:"%-",desc:"Prefix to drop leading zero (%-I)"},{code:"%%",desc:"A literal percent sign"}],gr=["","%Y-%m-%d","%-m/%-d/%Y","%-d/%-m/%Y","%-d.%-m.%Y","%b %-d","%a, %b %-d","%B %-d, %Y","%-d %B %Y","%A, %B %-d, %Y","%A, %-d %B %Y"],vr=new Set(gr.filter(Boolean)),_r="%H:%M",wr=["%-I:%M %p","%H:%M","%-I:%M:%S %p","%H:%M:%S"],yr=new Set(wr),xr=[{code:"%Y",desc:"Year, 4-digit (2026)"},{code:"%y",desc:"Year, 2-digit (26)"},{code:"%m",desc:"Month number (01-12)"},{code:"%B",desc:"Month name (July)"},{code:"%b",desc:"Month, short (Jul)"},{code:"%d",desc:"Day of month (01-31)"},{code:"%e",desc:"Day of month, space-padded"},{code:"%A",desc:"Weekday name (Monday)"},{code:"%a",desc:"Weekday, short (Mon)"},{code:"%j",desc:"Day of year (001-366)"},{code:"%-",desc:"Prefix to drop leading zero (%-d)"},{code:"%%",desc:"A literal percent sign"}],$r=(e,t,o,i,r)=>{const a=r?.description?J`<small class="field-desc">${r.description}</small>`:K,s=r?.error?J`<span class="field-error">${r.error}</span>`:K;return i&&customElements.get("ha-code-editor")?J`<div class="field code-field ${r?.error?"invalid":""}">
      <span>${e}</span>
      <ha-code-editor
        .hass=${i}
        .value=${t??""}
        .mode=${r?.mode??"jinja2"}
        .autocompleteEntities=${r?.entities??!1}
        .autocompleteIcons=${r?.icons??!1}
        dir="ltr"
        @value-changed=${e=>o(e.detail.value)}
      ></ha-code-editor>
      ${s}${a}
    </div>`:J`<label class="field ${r?.error?"invalid":""}">
    <span>${e}</span>
    <input
      type="text"
      .value=${t??""}
      @input=${e=>o(e.target.value)}
    />
    ${s}${a}
  </label>`},kr="Use Home Assistant Jinja templates to interpolate values from HA.",Cr="Use Home Assistant markdown with Jinja to interpolate values from HA.",Sr="dashboard-sidebar-entity-options",Ar=(e,t,o,i,r)=>{const a=(t??"").trim(),s=a?(i?.states??{})[a]:void 0;return s?Er(e,a,s.attributes?.friendly_name,()=>o(""),r):J`<label class="field">
    <span>${e}</span>
    <input
      type="text"
      list=${Sr}
      autocomplete="off"
      spellcheck="false"
      placeholder="domain.entity"
      .value=${t??""}
      @input=${e=>o(e.target.value)}
    />
    ${r?J`<small class="field-desc">${r}</small>`:K}
  </label>`},Er=(e,t,o,i,r)=>J`<div class="field">
    <span>${e}</span>
    <div class="field-picked">
      <div class="field-picked-text">
        <span class="field-picked-id">${t}</span>
        ${o?J`<span class="field-picked-name">${o}</span>`:K}
      </div>
      <button
        type="button"
        class="field-picked-clear"
        title="Clear"
        aria-label="Clear"
        @click=${i}
      >
        ✕
      </button>
    </div>
    ${r?J`<small class="field-desc">${r}</small>`:K}
  </div>`,Tr="dashboard-sidebar-service-options",Mr=(e,t,o)=>{const i=e?.localize?.(`component.${t}.services.${o}.description`),r=e?.services?.[t]?.[o];return i||r?.description||r?.name||void 0},Or=(e,t,o,i,r)=>$r(e,t,o,i,{icons:!0,description:r}),Dr=(e,t,o,i,r)=>{const a=r?.minRows??4,s=[r?.mono?"mono":"",r?.autosize?"autosize":""].filter(Boolean).join(" "),n=r?.autosize?`min-height: calc(${a}lh + 14px)`:void 0;return J`<label class="field ${i?.error?"invalid":""}">
    <span>${e}</span>
    <textarea
      class=${s||K}
      rows=${a}
      style=${n??K}
      .value=${t}
      @input=${e=>o(e.target.value)}
      @blur=${e=>i?.onBlur?.(e.target.value)}
    ></textarea>
    ${i?.error?J`<span class="field-error">${i.error}</span>`:K}
    ${r?.description?J`<small class="field-desc">${r.description}</small>`:K}
  </label>`},Pr=(e,t,o)=>customElements.get("ha-yaml-editor")?J`<div class="field yaml-field">
      <span>${e}</span>
      <ha-yaml-editor
        .defaultValue=${t}
        @value-changed=${e=>{e.detail.isValid&&o(e.detail.value)}}
      ></ha-yaml-editor>
    </div>`:Dr(e,void 0===t?"":JSON.stringify(t,null,2),e=>{const t=e.trim();if(t)try{o(JSON.parse(t))}catch{}else o(void 0)}),Ir=(e,t,o,i,r)=>J`<label class="field">
    <span>${e}</span>
    <select
      ?disabled=${r?.disabled??!1}
      @change=${e=>{const t=e.target;t.blur(),i(t.value)}}
    >
      ${o.map(e=>{const o=(e=>"string"==typeof e?{label:Rr(e),value:e}:e)(e);return J`<option value=${o.value} ?selected=${o.value===t}>${o.label}</option>`})}
    </select>
    ${r?.description?J`<small class="field-desc">${r.description}</small>`:K}
  </label>`,zr=(e,t,o,i,r)=>J`<label class="field field-inline">
    <input
      type="checkbox"
      .checked=${t}
      ?disabled=${!1}
      @change=${e=>o(e.target.checked)}
    />
    <span class="check-label">
      <span>${e}</span>
      ${i?J`<small class="field-desc">${i}</small>`:K}
    </span>
  </label>`,Rr=e=>e.charAt(0).toUpperCase()+e.slice(1),Fr={},Br=e=>Fr[e]??Rr(e),Nr=(e,t,o,i,r,a)=>J`<label class="field ${i?.error?"invalid":""}">
    <span>${e}</span>
    <input
      type="text"
      inputmode="numeric"
      .value=${null!=t?String(t):""}
      @input=${e=>{const t=e.target,i=t.value.replace(/[^0-9]/g,"");t.value=i,o(""===i?void 0:Number(i))}}
      @blur=${e=>i?.onBlur?.(e.target.value)}
    />
    ${i?.error?J`<span class="field-error">${i.error}</span>`:K}
    ${a?J`<small class="field-warn">${a}</small>`:K}
    ${r?J`<small class="field-desc">${r}</small>`:K}
  </label>`,jr=(e,t,o,i)=>{const r=/^#[0-9a-fA-F]{6}$/.test(t??"")?t:"#000000";return J`<div class="field">
    <span>${e}</span>
    <div class="color-row">
      <input
        class="color-swatch"
        type="color"
        aria-label="Pick a color"
        .value=${r}
        @click=${e=>{const t=e.currentTarget;"function"==typeof t.showPicker&&(e.preventDefault(),t.showPicker())}}
        @input=${e=>o(e.target.value)}
      />
      <input
        type="text"
        .value=${t??""}
        @input=${e=>o(e.target.value)}
      />
    </div>
    ${i?J`<small class="field-desc">${i}</small>`:K}
  </div>`},Hr=(e,t,o,i)=>$r(e,t,o,i,{entities:!0,description:"Any CSS color (hex, rgb, var(--…)); a Jinja template also works."}),Lr=(e,t,o,i)=>J`<div class="field">
    <span>${e}</span>
    <div class="icon-choice">
      ${o.map(e=>J`<button
            type="button"
            class="choice ${e.value===t?"sel":""}"
            title=${e.title}
            aria-label=${e.title}
            @click=${()=>i(e.value)}
          >
            <ha-icon icon=${e.icon}></ha-icon>
            <span class="choice-label">${e.title}</span>
          </button>`)}
    </div>
  </div>`,Yr=(e,t,o,i,r,a,s)=>{const n=e?.action??"none",d=o=>t({[r]:{...e,action:n,...o}}),l=void 0!==i&&(("toggle"===n||"more-info"===n)&&!!(e.entity??s)||"call-service"===n&&!!e.service);return J`<details class="advanced">
    <summary>${a}</summary>
    ${Ir("Action Type",n,pr,o=>t({[r]:{...e,action:o}}),{description:ur[n]})}
    ${"navigate"===n?mr("Navigation Path",e.navigation_path,e=>d({navigation_path:e}),void 0,"Dashboard path to open, e.g. /lovelace/home."):K}
    ${"url"===n?mr("URL",e.url_path,e=>d({url_path:e}),void 0,"Web address to open in a new tab."):K}
    ${"assist"===n?J`
            ${mr("Pipeline ID",e.pipeline_id,e=>d({pipeline_id:e||void 0}),void 0,"Voice pipeline to use; empty uses the last one.")}
            ${zr("Start Listening",e.start_listening??!1,e=>d({start_listening:!!e||void 0}),"Open Assist already listening for a command.")}
          `:K}
    ${"toggle"===n||"more-info"===n?Ar("Entity",e.entity,e=>d({entity:e||void 0}),i,br):K}
    ${"call-service"===n?J`
            ${((e,t,o,i,r,a)=>{const s=(t??"").trim(),[n,d]=s.split("."),l=r?.services??{};return(n&&d?l[n]?.[d]:void 0)?Er(e,s,Mr(r,n,d),()=>o(""),a):J`<label class="field ${i?.error?"invalid":""}">
    <span>${e}</span>
    <input
      type="text"
      list=${Tr}
      autocomplete="off"
      spellcheck="false"
      placeholder="domain.service"
      .value=${t??""}
      @input=${e=>o(e.target.value)}
      @blur=${e=>i?.onBlur?.(e.target.value)}
    />
    ${i?.error?J`<span class="field-error">${i.error}</span>`:K}
    ${J`<small class="field-desc">${a}</small>`}
  </label>`})("Service",e.service,e=>d({service:e}),cr(o,`${r}.service`,nr),i,"The service to call, written as domain.service.")}
            ${Ar("Target Entity",e.entity,e=>d({entity:e||void 0}),i,"Entity the service is called on.")}
            ${Dr("Service Data",e.data?JSON.stringify(e.data,null,2):"",e=>{if(!e.trim())return void d({data:void 0});const t=(e=>{const t=e.trim();if(t)try{return JSON.parse(t)}catch{return}})(e);void 0!==t&&d({data:t})},cr(o,`${r}.data`,dr),{description:"Must be valid JSON.",mono:!0,autosize:!0,minRows:3})}
          `:K}
    ${l?J`<button
            type="button"
            class="add-btn"
            @click=${t=>jo(t.currentTarget,i,e,s)}
          >
            Test Action
          </button>`:K}
  </details>`},Wr=(e,t)=>{const o="clock"===e.type,i=(e.format??"").trim(),r=""!==i&&!(o?yr:vr).has(i);return J`
    ${((e,t)=>{const o=Intl.supportedValuesOf,i=[{label:"System Timezone",value:""},...("function"==typeof o?o("timeZone"):[]).map(e=>({label:e,value:e}))];return Ir("Timezone",e??"",i,t)})(e.timezone,e=>t({timezone:e||void 0}))}
    ${a="Custom Format",s=r?i:"",n=e=>t({format:e.trim()||void 0}),d=void 0,l=o?fr:xr,c=o?"Optional strftime pattern; overrides the Format dropdown, e.g. %-I:%M:%S %p.":"Optional strftime pattern; overrides the Format dropdown, e.g. %A, %B %-d.",J`<div class="field format-field ${""}">
    <span class="field-head">
      ${a}
      <details class="format-help">
        <summary title="Format tokens" aria-label="Format tokens">
          <ha-icon icon="mdi:information-outline"></ha-icon>
        </summary>
        <div class="format-help-pop">
          ${l.map(e=>J`<div class="format-token"><code>${e.code}</code><span>${e.desc}</span></div>`)}
        </div>
      </details>
    </span>
    <input
      type="text"
      .value=${s??""}
      @input=${e=>n(e.target.value)}
      @blur=${e=>d?.onBlur?.(e.target.value)}
    />
    ${K}
    <small class="field-desc">${c}</small>
  </div>`}
  `;var a,s,n,d,l,c},Ur=(e,t)=>"navigate"!==e.tap_action?.action?K:zr("Highlight When Active",e.active_highlight??!0,e=>t({active_highlight:!!e&&void 0}),"Highlight this while its navigate target is the current page."),qr={title:[{sel:".dashboard-sidebar-title",desc:"The title element"}],clock:[{sel:".dashboard-sidebar-clock",desc:"The clock element"}],date:[{sel:".dashboard-sidebar-date",desc:"The date element"}],divider:[{sel:".dashboard-sidebar-divider",desc:"The divider line"}],item:[{sel:".dashboard-sidebar-item",desc:"The item row"},{sel:".dashboard-sidebar-item-icon",desc:"The item icon"},{sel:".dashboard-sidebar-item-label",desc:"The item label text"},{sel:".dashboard-sidebar-initials",desc:"The collapsed glyph (icon-less)"}],category:[{sel:".dashboard-sidebar-category",desc:"The category group"},{sel:".dashboard-sidebar-category-header",desc:"The category header row"},{sel:".dashboard-sidebar-category-items",desc:"The items list"},{sel:".dashboard-sidebar-chevron",desc:"The expand chevron"},{sel:".dashboard-sidebar-item",desc:"A child item row"},{sel:".dashboard-sidebar-popover",desc:"The collapsed popover"}],markdown:[{sel:".dashboard-sidebar-markdown",desc:"The text (markdown) block"}],card:[{sel:".dashboard-sidebar-content",desc:"The manual card wrapper"}],"footer-button":[{sel:".dashboard-sidebar-footer-btn",desc:"The footer button"},{sel:".dashboard-sidebar-footer-icon",desc:"The footer button icon"}]},Xr=e=>{const t=qr[e];return t?J`<details class="advanced class-ref">
    <summary>Targetable CSS classes</summary>
    <div class="class-ref-list">
      ${t.map(e=>J`<div class="class-ref-row"><code>${e.sel}</code><span>${e.desc}</span></div>`)}
    </div>
  </details>`:J``},Jr="Scoped to this element. Target it directly with its class (e.g. .dashboard-sidebar-title) or :scope.",Vr=()=>!!customElements.get("card-mod"),Kr=(e,t,o)=>{const i=J`<a href=${"https://github.com/thomasloven/lovelace-card-mod"} target="_blank" rel="noopener noreferrer">card-mod</a>`;if(!customElements.get("card-mod"))return J`<div class="field card-mod-missing">
      <span>Card Mod YAML</span>
      <small class="field-desc">
        Install ${i} (available in HACS) to customize styles with CSS.
      </small>
    </div>`;const r=(e=>void 0===e?null:"object"!=typeof e||null===e||Array.isArray(e)?'Card Mod must be a mapping, e.g. "style: |".':null)(e);return J`
    ${Pr("Card Mod YAML",e,e=>t(e))}
    ${r?J`<span class="field-error">${r}</span>`:K}
    <small class="field-desc card-mod-hint">
      Customize styles with CSS via ${i}. ${o??""}
    </small>
  `},Zr=new Set(["title","clock","date","item"]),Gr=[{key:"tap_action",summary:"Tap Action"},{key:"hold_action",summary:"Hold Action"},{key:"double_tap_action",summary:"Double Tap Action"}],Qr=(e,t,o,i)=>{const r="string"==typeof e.entity?e.entity:void 0;return J`${Gr.map(({key:a,summary:s})=>Yr(e[a]??{},t,o,i,a,s,r))}`},ea=(e,t,o,i)=>{const r="item"===e.type||"category"===e.type,a=Zr.has(e.type??"")?Qr(e,t,o,i):K,s="clock"===e.type||"date"===e.type?Wr(e,t):K;return J`${ta(e,t,i)}${a}${((e,t,o,i=K)=>J`<details class="advanced">
    <summary>Advanced</summary>
    ${i} ${Ur(e,t)}
    ${o?mr("Abbreviation",e.abbr,e=>t({abbr:e||void 0}),void 0,"The glyph shown in the collapsed view, used only when no icon is set."):K}
    ${Kr(e.card_mod,e=>t({card_mod:e}),Jr)}
    ${Vr()?Xr(e.type??"item"):K}
  </details>`)(e,t,r,s)}`},ta=(e,t,o)=>{switch(e.type){case"title":return J`
        ${$r("Text Template",e.text,e=>t({text:e}),o,{entities:!0,icons:!0,description:kr})}
        ${Ir("Align",e.align,hr,e=>t({align:e}))}
        ${Hr("Text Color Template",e.text_color,e=>t({text_color:e||void 0}),o)}
      `;case"clock":{const i=(e.format??"").trim(),r=""!==i&&!yr.has(i);return J`
        ${Ir("Format",r?_r:i||_r,(()=>{const e=new Date,t=navigator.language;return wr.map(o=>({value:o,label:oi(e,o,t)}))})(),e=>t({format:e}),{disabled:r})}
        ${Ir("Align",e.align,hr,e=>t({align:e}))}
        ${Hr("Text Color Template",e.text_color,e=>t({text_color:e||void 0}),o)}
      `}case"date":{const i=(e.format??"").trim(),r=""!==i&&!vr.has(i);return J`
        ${Ir("Format",r?"":i,(()=>{const e=new Date,t=navigator.language;return gr.map(o=>({value:o,label:ii(e,o||"locale",t)}))})(),e=>t({format:e||void 0}),{disabled:r})}
        ${Ir("Align",e.align,hr,e=>t({align:e}))}
        ${Hr("Text Color Template",e.text_color,e=>t({text_color:e||void 0}),o)}
      `}case"divider":return J`
        ${Hr("Color Template",e.color,e=>t({color:e||void 0}),o)}
      `;case"item":return J`
        ${$r("Title Template",e.title,e=>t({title:e}),o,{entities:!0,icons:!0,description:kr})}
        ${Or("Icon Template",e.icon,e=>t({icon:e||void 0}),o,kr)}
        ${Ar("Entity",e.entity,e=>t({entity:e||void 0}),o,br)}
        ${Hr("Text Color Template",e.text_color,e=>t({text_color:e||void 0}),o)}
        ${Hr("Icon Color Template",e.icon_color,e=>t({icon_color:e||void 0}),o)}
      `;case"category":return J`
        ${$r("Title Template",e.title,e=>t({title:e}),o,{entities:!0,icons:!0,description:kr})}
        ${Or("Icon Template",e.icon,e=>t({icon:e||void 0}),o,kr)}
        ${Hr("Text Color Template",e.text_color,e=>t({text_color:e||void 0}),o)}
        ${Hr("Icon Color Template",e.icon_color,e=>t({icon_color:e||void 0}),o)}
        ${zr("Start Collapsed",e.start_collapsed??!0,e=>t({start_collapsed:!!e&&void 0}),"Start this group collapsed; its items stay hidden under the header until it's expanded.")}
        ${zr("Guide Line",e.guide_line??!0,e=>t({guide_line:!!e&&void 0}),"Draw a vertical line beside the group's items to visually connect them.")}
      `;case"markdown":return J`
        ${$r("Content Template",e.content,e=>t({content:e}),o,{entities:!0,icons:!0,description:Cr})}
        ${Ir("Align",e.align,hr,e=>t({align:e}))}
        ${Hr("Text Color Template",e.text_color,e=>t({text_color:e||void 0}),o)}
      `;case"card":return J`${Pr("YAML Config",e.card,e=>t({card:e}))}`;default:return J``}};var oa;const ia=[{sel:":host",desc:"The whole sidebar"},{sel:".dashboard-sidebar-root",desc:"Outer sidebar container"},{sel:".dashboard-sidebar-header",desc:"Pinned header region"},{sel:".dashboard-sidebar-body",desc:"Scrolling body region"},{sel:".dashboard-sidebar-footer",desc:"Footer bar"},{sel:".dashboard-sidebar-toggle",desc:"Collapse toggle button"},{sel:".dashboard-sidebar-title",desc:"Title element"},{sel:".dashboard-sidebar-clock",desc:"Clock element"},{sel:".dashboard-sidebar-date",desc:"Date element"},{sel:".dashboard-sidebar-divider",desc:"Divider line"},{sel:".dashboard-sidebar-item",desc:"Item row"},{sel:".dashboard-sidebar-item-icon",desc:"Item icon"},{sel:".dashboard-sidebar-item-label",desc:"Item label text"},{sel:".dashboard-sidebar-initials",desc:"Collapsed item/category glyph"},{sel:".dashboard-sidebar-category",desc:"Category group"},{sel:".dashboard-sidebar-category-header",desc:"Category header row"},{sel:".dashboard-sidebar-category-items",desc:"Category items list"},{sel:".dashboard-sidebar-chevron",desc:"Category expand chevron"},{sel:".dashboard-sidebar-markdown",desc:"Text (markdown) block"},{sel:".dashboard-sidebar-content",desc:"Manual card wrapper"},{sel:".dashboard-sidebar-footer-btn",desc:"Footer button"},{sel:".dashboard-sidebar-footer-icon",desc:"Footer button icon"},{sel:".dashboard-sidebar-footer-more",desc:"Footer overflow (⋮) button"},{sel:".dashboard-sidebar-popover",desc:"Collapsed category popover"},{sel:".dashboard-sidebar-popover-title",desc:"Popover title"},{sel:".dashboard-sidebar-footer-popover",desc:"Footer overflow popover"},{sel:".dashboard-sidebar-tooltip",desc:"Collapsed hover tooltip"}],ra="https://deconstructionalism.github.io/homeassistant-dashboard-sidebar/reference/",aa=[{key:"mode: custom",desc:"Required here. `mirror` follows the desktop instead."},{key:"items:",desc:"The bar itself, as a list of inline elements."},{key:"  - type:",desc:"item, category, divider, clock or date"},{key:"menu:",desc:"Extra blocks in the dots sheet. Any kind, titles and cards included."},{key:"footer:",desc:"The sheet's pinned footer. Same shape as the desktop footer:"},{key:"  buttons:",desc:"a list of icon buttons, or"},{key:"  card:",desc:"a manual Lovelace card, or"},{key:"  markdown:",desc:"markdown text, with markdown_color and tap_action"},{key:"  divider:",desc:"false to drop the strip top rule"},{key:"position:",desc:"top or bottom (default bottom)"},{key:"labels:",desc:"true to show titles under the bar icons"},{key:"background:",desc:"any CSS background (defaults to the sidebar's)"},{key:"card_mod:",desc:"card-mod config for the bar"}],sa=[{sel:"dashboard-sidebar-bar",desc:"The mobile bar element"},{sel:".dashboard-sidebar-bar-slots",desc:"The mobile bar slot row"},{sel:".dashboard-sidebar-bar-slot",desc:"One mobile bar slot"},{sel:".dashboard-sidebar-bar-slot-active",desc:"Mobile bar slot for the current page"},{sel:".dashboard-sidebar-bar-slot-open",desc:"Open category/menu trigger on the mobile bar"},{sel:".dashboard-sidebar-bar-slot-overflow",desc:"The mobile bar dots slot"},{sel:".dashboard-sidebar-bar-icon",desc:"Mobile bar slot icon pill"},{sel:".dashboard-sidebar-bar-time",desc:"Mobile bar clock/date text"},{sel:".dashboard-sidebar-bar-label",desc:"Mobile bar slot label"},{sel:".dashboard-sidebar-bar-divider",desc:"Divider rule on the mobile bar"},{sel:".dashboard-sidebar-bar-flyout",desc:"Mobile category flyout panel"},{sel:".dashboard-sidebar-bar-flyout-row",desc:"One mobile flyout row"},{sel:".dashboard-sidebar-bar-sheet",desc:"The mobile menu sheet"},{sel:".dashboard-sidebar-bar-sheet-scrim",desc:"Scrim behind the open mobile menu"},{sel:".dashboard-sidebar-bar-sheet-rows",desc:"The mobile menu list region"},{sel:".dashboard-sidebar-bar-sheet-row",desc:"One mobile menu row"},{sel:".dashboard-sidebar-bar-sheet-row-active",desc:"Mobile menu row for the current page"},{sel:".dashboard-sidebar-bar-sheet-category",desc:"Mobile menu accordion header"},{sel:".dashboard-sidebar-bar-sheet-children",desc:"Mobile menu accordion children"},{sel:".dashboard-sidebar-bar-sheet-title",desc:"Curated title in the mobile menu"},{sel:".dashboard-sidebar-bar-sheet-card",desc:"Curated card/markdown in the mobile menu"},{sel:".dashboard-sidebar-bar-sheet-footer",desc:"Mobile menu pinned footer strip"},{sel:".dashboard-sidebar-bar-sheet-footer-btn",desc:"One mobile menu footer button"},{sel:".dashboard-sidebar-bar-sheet-footer-content",desc:"Card/markdown footer in the mobile menu"}],na=["title","clock","date","divider","item","category","markdown","card"],da=[{id:"settings",label:"Settings"},{id:"header",label:"Header"},{id:"body",label:"Body"},{id:"footer",label:"Footer"},{id:"mobile",label:"Mobile Bar"}],la=320,ca=[{value:"bottom",icon:"mdi:dock-bottom",title:"Bottom"},{value:"top",icon:"mdi:dock-top",title:"Top"}],ha={left:{value:"left",icon:"mdi:dock-left",title:"Left"},right:{value:"right",icon:"mdi:dock-right",title:"Right"}};let pa=oa=class extends pe{constructor(){super(...arguments),this._tab="settings",this._selected=null,this._tabSelection={},this._fieldErrors={},this._users=null,this._confirmingClose=!1,this._confirmingDelete=!1,this._collapsedTabs=new Set,this._previewCollapsedCats=new Set,this._menus=new Qi(this),this._yamlEditId=null,this._settingsYaml=!1,this._confirmingCustomSwitch=!1,this._confirmingMirrorSwitch=!1,this._yamlError=null,this._cardError=null,this._cardToken=0,this._lastCardSig="",this._footerYaml=!1,this._errors=[],this._initialJson="{}",this._working={},this._ids=new WeakMap,this._idSeq=0,this._previews=new Map,this._mobilePreviewWidth=null,this._mobileAvail=null,this._availObserver=new ResizeObserver(()=>this._measureMobileAvail()),this._mobileDragPending=null,this._mobileDragRaf=!1,this._barPreviewCfg="",this._previewCfg=new WeakMap,this._compactedEditors=new WeakSet,this._compactScheduled=!1}willUpdate(e){e.has("config")&&(this._working=this.config?structuredClone(this.config):{},this._migrateConfig(this._working),this._initialJson=JSON.stringify(this._working),this._fieldErrors={},this._selected=null,this._confirmingClose=!1,this._collapsedTabs=new Set,this._previewCollapsedCats=new Set,this._menus.addOpen=!1,this._menus.elementOpen=!1,this._menus.tabOpen=!1)}_migrateConfig(e){const t=e=>{e?.forEach(e=>{const t=e;"clock"===e.type?(e=>{const t="string"==typeof e.custom_format?e.custom_format.trim():"",o="string"==typeof e.format?e.format.trim():"",i=e.hour_format??e.collapsed_format,r=!0===e.show_seconds;let a="";if(t)a=t;else if(o.includes("%"))a=o;else{const e="12h"===o||"24h"===o?o:"12h"===i||"24h"===i?i:"";"12h"===e?a=r?"%-I:%M:%S %p":"%-I:%M %p":"24h"===e?a=r?"%H:%M:%S":"%H:%M":r&&(a="%H:%M:%S")}a?e.format=a:delete e.format,delete e.custom_format,delete e.show_seconds,delete e.hour_format,delete e.collapsed_format})(t):"date"===e.type?(e=>{const t="string"==typeof e.custom_format?e.custom_format.trim():"";t&&(e.format=t),delete e.custom_format})(t):"card"===e.type&&(e=>{"string"==typeof e.card&&(e.type="markdown",e.content=e.card,delete e.card,delete e.background)})(t)})};t(e.header),t(e.body);const o=e.footer;o&&"string"==typeof o.card&&(o.markdown=o.card,delete o.card)}firstUpdated(){this._ensureCodeEditor(),customElements.get("ha-yaml-editor")||customElements.whenDefined("ha-yaml-editor").then(()=>this.requestUpdate()),this._loadServiceTranslations(),this._loadUsers()}_loadUsers(){const e=this.hass?.callWS;"function"==typeof e&&Promise.resolve(e.call(this.hass,{type:"config/auth/list"})).then(e=>{Array.isArray(e)&&(this._users=e.filter(e=>e&&"string"==typeof e.id&&!e.system_generated).map(e=>({id:e.id,name:e.name||e.id})).sort((e,t)=>e.name.localeCompare(t.name)))}).catch(()=>{})}static _entryMatches(e,t){const o=e.trim().toLowerCase();return o===t.id.toLowerCase()||o===t.name.trim().toLowerCase()}_toggleUser(e,t){const o=(this._working.users??[]).filter(t=>!oa._entryMatches(t,e));t&&o.push(e.id),this._patchConfig({users:o.length?o:void 0})}_renderUsersField(){const e=this._working.users??[],t=this._users;if(!t)return J`<div class="field">
        <span>Visible To</span>
        <small class="field-desc">
          ${e.length?`Restricted to: ${e.join(", ")}.`:"All users."} The user
          list could not be loaded; edit the users key in YAML.
        </small>
      </div>`;const o=e.filter(e=>!t.some(t=>oa._entryMatches(e,t)));return J`<div class="field">
      <span>Visible To</span>
      <small class="field-desc">
        Tick the users who see this sidebar. Leave all unticked to show it to everyone. While
        editing the dashboard it is always shown.
      </small>
      ${t.map(t=>zr(t.name,e.some(e=>oa._entryMatches(e,t)),e=>this._toggleUser(t,e)))}
      ${o.map(t=>zr(t,!0,()=>this._patchConfig({users:e.filter(e=>e!==t).length?e.filter(e=>e!==t):void 0}),"No user with this id or name exists. Untick to remove it."))}
    </div>`}_loadServiceTranslations(){const e=this.hass?.loadBackendTranslation;"function"==typeof e&&Promise.resolve(e.call(this.hass,"services")).then(e=>{this.hass&&"function"==typeof e&&(this.hass={...this.hass,localize:e})}).catch(()=>{})}updated(){this._compactEditors(),this._maybeValidateCard(),this._observeMobileWrap()}_observeMobileWrap(){const e=this.shadowRoot?.querySelector(".mobile-pv-wrap")??void 0;e!==this._observedWrap&&(this._observedWrap&&this._availObserver.unobserve(this._observedWrap),this._observedWrap=e,e&&this._availObserver.observe(e))}_maybeValidateCard(){const e=this._locate(this._selected),t="block"===e?.kind&&"card"===e.block.type?e.block.card:"card"===this._footerMode()?this._working.footer?.card:void 0,o=void 0===t?"":JSON.stringify(t);if(o===this._lastCardSig)return;if(this._lastCardSig=o,window.clearTimeout(this._cardTimer),void 0===t)return void(this._cardError=null);const i=++this._cardToken;this._cardTimer=window.setTimeout(()=>{this._validateCard(t,i)},400)}async _validateCard(e,t){const o=e=>{t===this._cardToken&&(this._cardError=e)};if(!e||"object"!=typeof e||Array.isArray(e))return void o("The card config must be a mapping.");const i=e.type;if("string"!=typeof i||!i)return void o('The card needs a "type".');const r=window.loadCardHelpers;if("function"!=typeof r)return void o(null);let a;try{a=await r()}catch{return void o(null)}if(t===this._cardToken)if(a){if(i.startsWith("custom:")){const e=i.slice(7);if(!customElements.get(e)){const i=await Promise.race([customElements.whenDefined(e).then(()=>!0),new Promise(e=>window.setTimeout(()=>e(!1),3e3))]);if(t!==this._cardToken)return;if(!i)return void o(`Custom card "${e}" is not installed on this instance.`)}}try{const i=a.createCardElement(e);if(t!==this._cardToken)return;"hui-error-card"===i.tagName.toLowerCase()?o(i._config?.error??"Invalid card configuration."):o(null)}catch(e){o(e instanceof Error?e.message:String(e))}}else o(null)}_compactEditors(){let e=!1;const t=[...this.renderRoot.querySelectorAll(".code-field ha-code-editor")],o=new Set;this.renderRoot.querySelectorAll(".yaml-field ha-yaml-editor").forEach(i=>{const r=i.shadowRoot?.querySelector("ha-code-editor");r?(t.push(r),i.closest(".yaml-fill")&&(o.add(r),this._fillYamlEditor(i))):e=!0}),t.forEach(t=>{if(this._compactedEditors.has(t))return;if(!t.shadowRoot?.querySelector(".cm-editor"))return void(e=!0);this._compactedEditors.add(t);const i=document.createElement("style"),r=o.has(t)?".cm-editor{height:100%!important;max-height:100%!important}.cm-scroller{max-height:none!important}":".cm-editor{border-radius:6px!important}";i.textContent='.cm-gutters{display:none!important}.cm-panels{display:none!important}.code-editor-toolbar{display:none!important}.cm-editor{padding-top:0!important}.cm-scroller{padding-top:0!important}.cm-content{border-top-style:none!important;padding:8px 0!important;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji"!important}.cm-activeLine{background-color:transparent!important}'+r,t.shadowRoot.appendChild(i)}),e&&!this._compactScheduled&&(this._compactScheduled=!0,requestAnimationFrame(()=>{this._compactScheduled=!1,this._compactEditors()}))}_fillYamlEditor(e){const t=e.shadowRoot;if(!t||t.querySelector("style[data-fill]"))return;const o=document.createElement("style");o.setAttribute("data-fill",""),o.textContent="ha-code-editor{display:block!important;height:100%!important}",t.appendChild(o)}async _ensureCodeEditor(){if(!customElements.get("ha-code-editor")){try{const e=await(window.loadCardHelpers?.()),t=e?.createCardElement?.({type:"markdown",content:""});await(t?.constructor?.getConfigElement?.())}catch{}customElements.get("ha-code-editor")&&this.requestUpdate()}}get _tabCollapsed(){return this._collapsedTabs.has(this._tab)}get _dirty(){return JSON.stringify(this._working)!==this._initialJson}get _hasFieldErrors(){return Object.keys(this._fieldErrors).length>0}get _canSave(){return this._dirty&&!this._hasFieldErrors}_validateField(e,t,o){const i=o(t),r={...this._fieldErrors};i?r[e]=i:delete r[e],this._fieldErrors=r}_widthWarning(e){if(null!=e)return e<140?"Below ~140px, labels may not fit beside their icons.":e>640?"Above ~640px, this reads more like a panel than a sidebar.":void 0}_ctx(){return{errorFor:e=>this._fieldErrors[e],onBlur:(e,t,o)=>this._validateField(e,t,o)}}_touch(){this._yamlError=null,this.requestUpdate()}_idFor(e){let t=this._ids.get(e);return t||(this._idSeq+=1,t=`r${this._idSeq}`,this._ids.set(e,t)),t}_selectedLoc(){return this._selected?this._locOf(this._selected):void 0}_locOf(e){const t=this._locate(e);if(t)return"block"===t.kind?`${t.region}:${t.index}`:"item"===t.kind?`${t.region}:${t.index}.${t.itemIndex}`:`footer:btn:${t.index}`}_collapsedCatLocs(){return[...this._previewCollapsedCats].map(e=>this._locOf(e)).filter(e=>void 0!==e)}_idForLoc(e){if("footer:card"===e||"footer:markdown"===e)return null;if(e.startsWith("footer:btn:")){const t=this._working.footer?.buttons?.[Number(e.slice(11))];return t?this._idFor(t):null}const[t,o]=e.split(":"),i=o.indexOf("."),r=Number(-1===i?o:o.slice(0,i)),a=this._working[t]?.[r];if(!a)return null;if(-1===i)return this._idFor(a);if("category"===a.type){const e=a.items?.[Number(o.slice(i+1))];return e?this._idFor(e):null}return null}_onPreviewSelect(e){const t=this._idForLoc(e);t&&(t!==this._selected&&(this._fieldErrors={},this._yamlEditId=null,this._yamlError=null),this._selected=t)}_containerArray(e){if("footer"===e)return this._working.footer?.buttons;const[t,o]=e.split(":");return void 0===o?this._working[t]:this._category(t,Number(o))?.items}_applyReorder(e){const{from:t,to:o,oldIndex:i,newIndex:r}=e,a=this._containerArray(t),s=this._containerArray(o);if(!a||!s||void 0===i||void 0===r)return;const[n]=a.splice(i,1);void 0!==n&&(s.splice(r,0,n),this._selected=this._idFor(n),this._previews.delete("footer"===o?"footer":o.split(":")[0]),this._touch())}_locate(e){if(!e)return null;for(const t of["header","body"]){const o=this._working[t]??[];for(let i=0;i<o.length;i+=1){const r=o[i];if(this._ids.get(r)===e)return{kind:"block",region:t,index:i,block:r};if("category"===r.type){const o=r.items??[];for(let r=0;r<o.length;r+=1)if(this._ids.get(o[r])===e)return{kind:"item",region:t,index:i,itemIndex:r,item:o[r]}}}}const t=this._working.footer?.buttons??[];for(let o=0;o<t.length;o+=1)if(this._ids.get(t[o])===e)return{kind:"footer",index:o,btn:t[o]};return null}_visibleCollapsed(e){return"title"!==e.type&&"markdown"!==e.type&&"card"!==e.type}_reselectForCollapse(){const e=this._locate(this._selected);if(!e)return;if("item"===e.kind||"footer"===e.kind||this._visibleCollapsed(e.block))return;const t=this._working[e.region]??[];let o;for(let i=e.index+1;i<t.length&&!o;i+=1)this._visibleCollapsed(t[i])&&(o=t[i]);for(let i=e.index-1;i>=0&&!o;i-=1)this._visibleCollapsed(t[i])&&(o=t[i]);this._selected=o?this._idFor(o):null}_selectedContainer(){const e=this._locate(this._selected);if(!e)return null;if("block"===e.kind){const t=this._working[e.region];return t?{arr:t,index:e.index}:null}if("item"===e.kind){const t=this._working[e.region]?.[e.index];return"category"===t?.type?{arr:t.items,index:e.itemIndex}:null}const t=this._working.footer?.buttons;return t?{arr:t,index:e.index}:null}_moveSelected(e){const t=this._selectedContainer();if(!t)return;const o=t.index+e;if(o<0||o>=t.arr.length)return;const[i]=t.arr.splice(t.index,1);t.arr.splice(o,0,i),this._touch()}_openElementMenu(e){e.stopPropagation(),this._menus.elementRect=e.currentTarget.getBoundingClientRect(),this._menus.elementOpen=!0}_patchConfig(e){Object.assign(this._working,e),this._touch()}_addBlock(e,t){const o=this._working[e]??(this._working[e]=[]),i=ar(t),r=o.findIndex(e=>this._ids.get(e)===this._selected);r>=0?o.splice(r+1,0,i):o.push(i),this._selected=this._idFor(i),this._touch()}_removeBlock(e,t){this._working[e]?.splice(t,1),this._touch()}_patchBlock(e,t,o){const i=this._working[e]?.[t];i&&(Object.assign(i,o),this._touch())}_category(e,t){const o=this._working[e]?.[t];return"category"===o?.type?o:void 0}_addItem(e,t){const o=this._category(e,t);if(o){const e=ar("item"),t=o.items.findIndex(e=>this._ids.get(e)===this._selected);t>=0?o.items.splice(t+1,0,e):o.items.push(e),this._selected=this._idFor(e)}this._touch()}_removeItem(e,t,o){this._category(e,t)?.items.splice(o,1),this._touch()}_patchItem(e,t,o,i){const r=this._category(e,t)?.items[o];r&&(Object.assign(r,i),this._touch())}_setFooterMode(e){const t=this._working.footer?.divider,o=sr(),i="card"===e?{card:{type:"markdown",content:"Card content"}}:"markdown"===e?{markdown:"Markdown **content**"}:{buttons:[o]};this._working.footer={...i,divider:t},this._footerYaml=!1,this._selected="buttons"===e?this._idFor(o):this._selected,this._touch()}_setFooter(e){this._working.footer=e&&"object"==typeof e?e:{},this._touch()}_setFooterDivider(e){(this._working.footer??(this._working.footer={})).divider=e,this._touch()}_addFooterButton(){const e=this._working.footer??(this._working.footer={}),t=e.buttons??(e.buttons=[]),o=sr(),i=t.findIndex(e=>this._ids.get(e)===this._selected);i>=0?t.splice(i+1,0,o):t.push(o),this._selected=this._idFor(o),this._touch()}_removeFooterButton(e){this._working.footer?.buttons?.splice(e,1),this._touch()}_patchFooterButton(e,t){const o=this._working.footer?.buttons?.[e];o&&(Object.assign(o,t),this._touch())}_setFooterCard(e){this._working.footer={card:e,divider:this._working.footer?.divider},this._touch()}_setFooterMarkdown(e){this._patchFooter({markdown:e})}_patchFooter(e){const t=this._working.footer??(this._working.footer={});Object.assign(t,e),this._touch()}_setFooterMarkdownColor(e){const t=this._working.footer;t&&(t.markdown_color=e||void 0,this._touch())}_save(){this._errors=Di(this._working),this._errors.length>0||(this.onSave?.(this._working),this.onClose?.())}_close(){this._dirty?this._confirmingClose=!0:this.onClose?.()}_switchTab(e){"header"!==this._tab&&"body"!==this._tab&&"footer"!==this._tab||(this._tabSelection[this._tab]=this._selected),this._tab=e,this._selected="header"===e||"body"===e||"footer"===e?this._tabSelection[e]??null:null,this._fieldErrors={},this._menus.addOpen=!1,this._menus.elementOpen=!1,this._menus.tabOpen=!1,this._menus.tabSubmenuOpen=!1,this._footerYaml=!1}_renderDatalists(){const e=this.hass?.states??{},t=this.hass?.services??{},o=`${Object.keys(e).length}:${Object.keys(t).length}`;return J`${Vi([o,this.hass?.localize],()=>J`${(e=>{const t=e?.states??{},o=Object.keys(t).sort();return J`<datalist id=${Sr}>
    ${o.map(e=>{const o=t[e]?.attributes?.friendly_name;return J`<option value=${e} label=${o??K}></option>`})}
  </datalist>`})(this.hass)}${(e=>{const t=e?.services??{},o=[];for(const i of Object.keys(t).sort())for(const r of Object.keys(t[i]).sort())o.push({id:`${i}.${r}`,label:Mr(e,i,r)});return J`<datalist id=${Tr}>
    ${o.map(e=>J`<option value=${e.id} label=${e.label??K}></option>`)}
  </datalist>`})(this.hass)}`)}`}render(){return J`
      <div class="backdrop" @click=${this._close}></div>
      <div class="panel" role="dialog" aria-label="Edit Dashboard Sidebar">
        ${this._renderDatalists()}
        <header>
          <h2>Edit Dashboard Sidebar</h2>
          <button class="icon" title="Close" @click=${this._close}>✕</button>
        </header>
        <div class="tabs">
          ${da.map(e=>{const t="mobile"===e.id&&"bar"!==Li(this._working);return J`
              <button
                class="tab ${this._tab===e.id?"active":""}"
                ?disabled=${t}
                title=${t?"Set On Mobile to Mobile Bar in Settings to configure the bar":""}
                @click=${()=>this._switchTab(e.id)}
              >
                ${e.label}
              </button>
            `})}
        </div>
        <div class="content">${this._renderTab()}</div>
        ${this._errors.length>0?J`<ul class="errors">
                ${this._errors.map(e=>J`<li>${e}</li>`)}
              </ul>`:K}
        <footer>
          <button @click=${this._close}>Cancel</button>
          <button class="primary" ?disabled=${!this._canSave} @click=${this._save}>Save</button>
        </footer>
        ${this._confirmingClose?this._renderConfirmClose():K}
        ${this._confirmingDelete?this._renderConfirmDelete():K}
        ${this._confirmingCustomSwitch?this._renderConfirmCustomSwitch():K}
        ${this._confirmingMirrorSwitch?Zi({label:"Switch to mirror desktop",message:"Switch to mirror desktop? The custom bar, menu, and footer configuration will be removed.",keepLabel:"Cancel",confirmLabel:"Switch",onKeep:()=>{this._confirmingMirrorSwitch=!1},onConfirm:()=>this._switchToMirror()}):K}
      </div>
      ${this._renderAddMenuPopup()} ${this._renderElementMenu()} ${this._renderTabMenu()}
    `}_renderConfirmCustomSwitch(){return J`
      <div class="confirm-scrim">
        <div class="confirm" role="alertdialog" aria-label="Switch to custom bar">
          <p>
            Switch to a custom bar? You can start from the desktop bar's elements or from an empty
            list.
          </p>
          <div class="confirm-actions">
            <button @click=${()=>this._switchToCustom(!0)}>Copy Desktop Bar</button>
            <button @click=${()=>this._switchToCustom(!1)}>Start Empty</button>
            <button
              @click=${()=>{this._confirmingCustomSwitch=!1}}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    `}_renderConfirmClose(){return Zi({label:"Unsaved changes",message:"You have unsaved changes. Exit without saving?",keepLabel:"Keep editing",confirmLabel:"Discard changes",onKeep:()=>{this._confirmingClose=!1},onConfirm:()=>{this._confirmingClose=!1,this.onClose?.()}})}_renderConfirmDelete(){return Zi({label:"Delete sidebar",message:"Delete the sidebar? This removes it from this dashboard.",keepLabel:"Keep sidebar",confirmLabel:"Delete sidebar",onKeep:()=>{this._confirmingDelete=!1},onConfirm:()=>{this._confirmingDelete=!1,this.onDelete?.(),this.onClose?.()}})}_renderTab(){switch(this._tab){case"settings":return this._renderSettings();case"header":return this._renderSplit("header");case"body":return this._renderSplit("body");case"footer":return this._renderFooterTab();case"mobile":return this._renderMobileTab();default:return J``}}_renderSettings(){const e=this._working,t={header:e.header,body:e.body,footer:e.footer,width:e.width,background:e.background,card_mod:e.card_mod};return J`
      ${this._renderTabNotes("These settings apply to the whole sidebar; the preview shows every area together.","Collapsed: the sidebar shows as its icon strip.")}
      <div class="split ${this._tabCollapsed?"pv-collapsed":""}">
        <div class="editor settings ${this._settingsYaml?"yaml-mode":""}">
          ${this._settingsHeader()}
          ${this._settingsYaml?this._yamlEditor(this._working,e=>this._replaceInPlace(this._working,e),e=>Di(e)):J`
                  ${Lr("Position",e.position??"left",hi.map(e=>ha[e]),e=>this._patchConfig({position:e}))}
                  ${Nr("Expanded Width (px)",e.width,e=>this._patchConfig({width:e}),{error:this._fieldErrors.width,onBlur:e=>this._validateField("width",e,lr)},"Defaults to 240px when left empty.",this._widthWarning(e.width))}
                  ${zr("Start Collapsed",e.start_collapsed??!1,e=>this._patchConfig({start_collapsed:e||void 0}),"Load the sidebar collapsed to its icon strip; it expands when you tap the toggle.")}
                  ${zr("Overlay Dashboard Content",e.overlay??!1,e=>this._patchConfig({overlay:e||void 0}),"Float the sidebar over the dashboard instead of pushing the content aside.")}
                  ${this._renderUsersField()}
                  <details class="advanced">
                    <summary>Advanced</summary>
                    ${Nr("Mobile Breakpoint (px)",e.breakpoint,e=>this._patchConfig({breakpoint:e}),{},"Viewport width at and below which the mobile choices apply. Defaults to 768px.")}
                    ${Ir("On Desktop",e.on_desktop??"sidebar",[{label:"Sidebar",value:"sidebar"},{label:"Nothing",value:"hidden"}],e=>this._patchConfig({on_desktop:"sidebar"===e?void 0:e}),{description:"What renders on wide screens."})}
                    ${Ir("On Mobile",Li(e),[{label:"Sidebar",value:"sidebar"},{label:"Mobile Bar",value:"bar"},{label:"Nothing",value:"hidden"}],e=>this._setOnMobile(e),{description:"What renders on narrow screens. The Mobile tab configures the bar."})}
                    ${jr("Background CSS",e.background,e=>this._patchConfig({background:e||void 0}),"Any valid CSS background, including gradients (e.g. linear-gradient(...)).")}
                    ${Kr(e.card_mod,e=>this._patchConfig({card_mod:e}))}
                    ${Vr()?this._cardModClassRef():K}
                  </details>
                `}
          <div class="form-actions">
            <button
              class="add-btn danger"
              @click=${()=>{this._confirmingDelete=!0}}
            >
              Delete Sidebar
            </button>
          </div>
        </div>
        ${this._renderPreview(J`${this._previewEl("settings",t,!1,!0)}`,!0,"settings-pv-frame")}
      </div>
    `}_setOnMobile(e){"bar"===e?this._patchConfig({on_mobile:void 0,mobile:this._working.mobile??{}}):"hidden"===e?this._patchConfig({on_mobile:"hidden",mobile:void 0}):this._patchConfig({on_mobile:void 0,mobile:void 0}),"bar"!==e&&"mobile"===this._tab&&this._switchTab("settings")}_patchMobile(e){const t={...this._working.mobile??{}};for(const[o,i]of Object.entries(e))void 0===i?delete t[o]:t[o]=i;this._patchConfig({mobile:t})}_switchToCustom(e){const t=this._working.mobile??{};if(!e)return this._patchMobile({mode:"custom",items:[]}),void(this._confirmingCustomSwitch=!1);const o=Ui({...this._working,mobile:{...t,mode:"mirror"}}).slots.map(e=>structuredClone(e.element)),i=this._working.footer?structuredClone(this._working.footer):void 0;this._patchMobile({mode:"custom",items:o,footer:i}),this._confirmingCustomSwitch=!1}_switchToMirror(){this._patchMobile({mode:void 0,items:void 0,menu:void 0,footer:void 0}),this._confirmingMirrorSwitch=!1}_renderMobileTab(){const e=this._working.mobile;if("bar"!==Li(this._working))return J`<p class="tab-note">
        Set On Mobile to Mobile Bar in Settings to configure the bar.
      </p>`;const t=e??{},o="custom"===Yi(this._working);return J`
      ${this._renderTabNotes("The mobile bar replaces the sidebar on narrow screens.","The mobile bar previews at phone width.",J`<button
          class="tool tab-notes-tool"
          title="More"
          aria-label="More"
          @click=${e=>this._openElementMenu(e)}
        >
          <ha-icon icon="mdi:dots-vertical"></ha-icon>
        </button>`,this._mobileCapNote())}
      <div class="mobile-stack">
        <div class="form-head">
          <div class="form-title">Mobile Bar: ${o?"Custom":"Mirror Desktop"}</div>
        </div>
        <div class="editor settings ${o?"yaml-mode":""}">
          ${o?J`
                  ${this._mobileYamlRef()}
                  ${this._yamlEditor(t,e=>this._patchConfig({mobile:e}),e=>Di({...this._working,mobile:e}))}
                `:this._renderMobileSettingsFields(t)}
        </div>
        ${this._renderMobilePreview()}
      </div>
    `}_renderMobileSettingsFields(e){return J`
      <div class="mobile-position">
        ${Lr("Position",e.position??"bottom",ca,e=>this._patchMobile({position:"bottom"===e?void 0:e}))}
      </div>
      ${zr("Show Labels",e.labels??!1,e=>this._patchMobile({labels:e||void 0}),"Show element titles under the bar icons.")}
      <details class="advanced">
        <summary>Advanced</summary>
        ${jr("Bar Background CSS",e.background,e=>this._patchMobile({background:e||void 0}),"Any valid CSS background. Defaults to the sidebar background.")}
        ${Kr(e.card_mod,e=>this._patchMobile({card_mod:e}))}
        ${Vr()?this._cardModClassRef(sa):K}
      </details>
    `}_measureMobileAvail(){const e=this.shadowRoot?.querySelector(".mobile-pv-wrap");if(!e)return;const t=Math.floor(e.clientWidth)-14;t>0&&(null===this._mobileAvail||Math.abs(t-this._mobileAvail)>=3)&&(this._mobileAvail=t)}_renderMobilePreview(){const e=this._working.breakpoint??768;requestAnimationFrame(()=>this._measureMobileAvail());const t=Math.max(la,Math.min(e,this._mobileAvail??e)),o=Math.min(Math.max(this._mobilePreviewWidth??t,la),t);return J`
      <div class="preview">
        <div class="mobile-pv-wrap">
          <div
            class="mobile-pv-handle"
            style="left: ${o}px"
            title="Drag to preview narrower screens (down to ${la}px); double-click to reset"
            @pointerdown=${e=>{this._mobileDrag={startX:e.clientX,startW:o},e.currentTarget.setPointerCapture(e.pointerId)}}
            @pointermove=${e=>{if(!this._mobileDrag)return;const o=Math.round(this._mobileDrag.startW+(e.clientX-this._mobileDrag.startX));this._mobileDragPending=Math.min(Math.max(o,la),t),this._mobileDragRaf||(this._mobileDragRaf=!0,requestAnimationFrame(()=>{this._mobileDragRaf=!1,null!==this._mobileDragPending&&(this._mobilePreviewWidth=this._mobileDragPending,this._mobileDragPending=null)}))}}
            @pointerup=${()=>{this._mobileDrag=void 0}}
            @pointercancel=${()=>{this._mobileDrag=void 0}}
            @dblclick=${()=>{this._mobilePreviewWidth=null}}
          >
            <div
              class="mobile-pv-arrows ${o>=t?"max":o<=la?"min":"mid"}"
            >
              ${o>=t||o<t&&o>la?J`<ha-icon icon="mdi:arrow-left-thick"></ha-icon>`:K}
              ${o<=la||o<t&&o>la?J`<ha-icon icon="mdi:arrow-right-thick"></ha-icon>`:K}
            </div>
          </div>
          <span class="mobile-pv-caption preview-title">Preview (${o}px)</span>
          <div class="pv-frame pv-col mobile-pv-frame" style="width: ${o}px">
            ${"top"===(this._working.mobile?.position??"bottom")?K:tr("up")}
            ${this._barPreviewEl()}
            ${"top"===(this._working.mobile?.position??"bottom")?tr("down"):K}
          </div>
        </div>
        <small class="field-desc mobile-pv-hint">
          Drag the handle on the bar's right edge to preview narrower screens; double-click it to
          reset.
        </small>
      </div>
    `}_scrollMobilePreview(){const e=this.shadowRoot?.querySelector(".mobile-pv-frame");if(!e)return;let t=e.parentElement;for(;t&&t.scrollHeight<=t.clientHeight+1;)t=t.parentElement;if(!t)return;const o=e.getBoundingClientRect(),i=t.getBoundingClientRect(),r="top"===this._working.mobile?.position?t.scrollTop+o.top-i.top-8:t.scrollTop+o.bottom-i.bottom;t.scrollTo({top:Math.max(0,r),behavior:"smooth"})}_barPreviewEl(){let e=this._barPreview;e||(e=document.createElement("dashboard-sidebar-bar"),e.preview=!0,e.setAttribute("preview",""),e.addEventListener("bar-preview-sheet-open",()=>this._scrollMobilePreview()),this._barPreview=e),e.hass=this.hass;const t=JSON.stringify(this._working);return this._barPreviewCfg!==t&&(e.setConfig(JSON.parse(t)),this._barPreviewCfg=t),e}_mobileYamlRef(){return J`<details class="advanced class-ref">
      <summary>Mobile YAML reference</summary>
      <div class="class-ref-list">
        ${aa.map(e=>J`<div class="class-ref-row"><code>${e.key}</code><span>${e.desc}</span></div>`)}
        <div class="class-ref-row">
          <span class="class-ref-link">
            Full reference:
            <a href="${ra}#mobileconfig" target="_blank" rel="noopener noreferrer"
              >the mobile bar</a
            >
            and
            <a href="${ra}#footer" target="_blank" rel="noopener noreferrer"
              >the footer</a
            >.
          </span>
        </div>
      </div>
    </details>`}_cardModClassRef(e=ia){return J`<details class="advanced class-ref">
      <summary>Targetable CSS classes</summary>
      <div class="class-ref-list">
        ${e.map(e=>J`<div class="class-ref-row"><code>${e.sel}</code><span>${e.desc}</span></div>`)}
      </div>
    </details>`}_editorNote(e){return J`<div class="editor-note">
      <ha-icon icon="mdi:information-outline"></ha-icon>
      <span>${e}</span>
    </div>`}_renderSplit(e){const t=this._renderTabNotes("header"===e?"The header is pinned to the top of the sidebar and does not scroll.":"The body scrolls on its own when it is taller than the sidebar.","header"===e?"Collapsed: only clock and date blocks show; titles are hidden.":"Collapsed: items and categories show as icons; card blocks are hidden.");if(0===(this._working[e]??[]).length)return J` ${t} ${or(this._renderAddMenu(this._typeItems(e)))} `;const o="header"===e?this._renderPreview(J`${this._renderRegionPreview(e)}${er("down")}`,!0):this._renderPreview(this._renderRegionPreview(e));return J`
      ${t}
      <div class="split ${this._tabCollapsed?"pv-collapsed":""}">
        <div class="editor">${Ki(this._selected,this._renderSelectedForm())}</div>
        ${o}
      </div>
    `}_previewCapNote(){return!this._tabCollapsed&&this._previewWidthCapped()?this._editorNote(`The preview is capped to fit the editor, so it is narrower than the ${this._working.width??Yo}px expanded width.`):K}_mobileCapNote(){const e=this._working.breakpoint??768;return null!==this._mobileAvail&&this._mobileAvail<e?this._editorNote(`The preview is capped to fit the editor, so it is narrower than the ${e}px breakpoint.`):K}_renderTabNotes(e,t,o=K,i){const r=this._tabCollapsed?this._editorNote(t):i??this._previewCapNote();return J`
      <div class="tab-notes">
        <p class="tab-note">${e}</p>
        ${o}
      </div>
      ${r}
    `}_renderTabMenuButton(){return J`
      <button
        class="tool"
        title="Footer options"
        aria-label="Footer options"
        @click=${e=>{e.stopPropagation(),this._menus.tabRect=e.currentTarget.getBoundingClientRect(),this._menus.tabOpen=!0}}
      >
        <ha-icon icon="mdi:dots-vertical"></ha-icon>
      </button>
    `}_renderTabMenu(){const e=this._menus.tabRect;if(!this._menus.tabOpen||!e||"footer"!==this._tab)return K;const t=this._footerMode(),o=this._working.footer?.divider??!0,i=[["buttons","Button Row"],["card","Card"],["markdown","Markdown"]].filter(([e])=>e!==t),r=()=>{this._menus.tabOpen=!1,this._menus.tabSubmenuOpen=!1};return J`
      <div class="menu-scrim" @click=${r}></div>
      <div class="add-menu" style=${Gi(e,"right")}>
        <button
          class="add-menu-item"
          @click=${()=>{this._setFooterDivider(!o),r()}}
        >
          ${o?"Hide":"Show"} Top Divider Bar
        </button>
        <button
          class="add-menu-item"
          @click=${()=>{this._menus.tabSubmenuOpen=!this._menus.tabSubmenuOpen}}
        >
          Change to ${this._menus.tabSubmenuOpen?"▾":"▸"}
        </button>
        ${this._menus.tabSubmenuOpen?i.map(([e,t])=>J`
                  <button
                    class="add-menu-item submenu-item"
                    @click=${()=>{this._setFooterMode(e),r()}}
                  >
                    ${t}
                  </button>
                `):K}
        <button
          class="add-menu-item"
          @click=${()=>{this._footerYaml=!this._footerYaml,r()}}
        >
          ${this._footerYaml?"Edit With UI":"Edit As YAML"}
        </button>
      </div>
    `}_footerMode(){const e=this._working.footer;return void 0!==e?.card?"card":void 0!==e?.markdown?"markdown":"buttons"}_previewFrameStyle(){const e=`background: ${this._working.background??""};`;if(this._tabCollapsed)return e;return`${e} --pv-w: ${this._working.width??Yo}px;`}_previewWidthCapped(){return(this._working.width??Yo)>(window.innerWidth<640?window.innerWidth:Math.min(380,.42*window.innerWidth))}_renderPreview(e,t=!1,o=""){return J`
      <div class="preview">
        <div class="preview-head">
          <span class="preview-title">Preview</span>
          <button
            class="pv-toggle"
            title=${this._tabCollapsed?"Show expanded":"Show collapsed"}
            aria-label=${this._tabCollapsed?"Show expanded":"Show collapsed"}
            @click=${()=>{const e=new Set(this._collapsedTabs),t=!e.has(this._tab);t?e.add(this._tab):e.delete(this._tab),this._collapsedTabs=e,this._menus.addOpen=!1,this._menus.elementOpen=!1,t&&this._reselectForCollapse()}}
          >
            <ha-icon
              icon=${this._tabCollapsed?"mdi:arrow-expand-horizontal":"mdi:arrow-collapse-horizontal"}
            ></ha-icon>
          </button>
        </div>
        <div
          class="pv-frame ${this._tabCollapsed?"collapsed":""} ${t?"pv-col":""} ${o}"
          style=${this._previewFrameStyle()}
        >
          ${e}
        </div>
      </div>
    `}_renderRegionPreview(e){const t=this._working[e]??[];return J`${this._previewEl(e,{[e]:t,card_mod:this._working.card_mod})}`}_renderFooterTab(){const e=this._working.footer,t=this._footerMode(),o=e?.divider??!0,i="buttons"===t&&0===(e?.buttons?.length??0),r=this._renderTabNotes("The footer is pinned to the bottom of the sidebar and does not scroll.","buttons"===t?"Collapsed: footer buttons collapse into a single menu button.":"Collapsed: the footer content is hidden.",i?K:this._renderTabMenuButton());if(i)return J`
        ${r}
        ${or(this._renderAddMenu([{label:"Button Row",run:()=>this._addFooterButton()},{label:"Card",run:()=>this._setFooterMode("card")},{label:"Markdown",run:()=>this._setFooterMode("markdown")}]))}
      `;if(this._footerYaml)return J`
        ${r}
        <div class="split ${this._tabCollapsed?"pv-collapsed":""}">
          <div class="editor form yaml-mode">
            ${this._yamlEditor(this._working.footer,e=>this._setFooter(e),()=>[])}
          </div>
          ${this._renderPreview(J`${er("up")}
            ${this._previewEl("footer",{width:this._working.width,footer:this._working.footer})}`,!0)}
        </div>
      `;if("card"===t)return J`
        ${r}
        <div class="split ${this._tabCollapsed?"pv-collapsed":""}">
          <div class="editor form yaml-mode">
            ${this._footerContentHeader("Card")}
            ${this._yamlEditor(e?.card,e=>this._setFooterCard(e),()=>[])}
            ${this._cardStatus()}
          </div>
          ${this._renderPreview(J`${er("up")}
            ${this._previewEl("footer-card",{footer:{card:e?.card??{type:"markdown",content:""},divider:o}})}`,!0)}
        </div>
      `;if("markdown"===t)return J`
        ${r}
        <div class="split ${this._tabCollapsed?"pv-collapsed":""}">
          <div class="editor">
            ${this._footerContentHeader("Markdown")}
            ${$r("Content Template",e?.markdown,e=>this._setFooterMarkdown(e),this.hass,{entities:!0,icons:!0,description:Cr})}
            ${Hr("Text Color Template",e?.markdown_color,e=>this._setFooterMarkdownColor(e),this.hass)}
            ${Qr(this._working.footer??{},e=>this._patchFooter(e),void 0,this.hass)}
          </div>
          ${this._renderPreview(J`${er("up")}
            ${this._previewEl("footer-markdown",{footer:{markdown:e?.markdown??"",markdown_color:e?.markdown_color,divider:o}})}`,!0)}
        </div>
      `;const a=e?.buttons??[];return J`
      ${r}
      <div class="split ${this._tabCollapsed?"pv-collapsed":""}">
        <div class="editor">${Ki(this._selected,this._renderSelectedForm())}</div>
        ${this._renderPreview(J`${er("up")}
          ${this._previewEl("footer",{width:this._working.width,footer:{buttons:a,divider:e?.divider??!0}})}`,!0)}
      </div>
    `}_footerContentHeader(e){return J`<div class="form-head">
      <div class="form-title">Element Settings: ${e}</div>
    </div>`}_formHeader(e){const t=this._selectedContainer(),o=!t||t.index<=0,i=!t||t.index>=t.arr.length-1,r="footer"===this._locate(this._selected)?.kind,a=r?"Move left":"Move up",s=r?"Move right":"Move down";return J`
      <div class="form-head">
        <div class="form-title">Element Settings: ${e}</div>
        <div class="form-tools">
          <button
            class="tool"
            title=${a}
            aria-label=${a}
            ?disabled=${o}
            @click=${()=>this._moveSelected(-1)}
          >
            <ha-icon icon=${r?"mdi:arrow-left":"mdi:arrow-up"}></ha-icon>
          </button>
          <button
            class="tool"
            title=${s}
            aria-label=${s}
            ?disabled=${i}
            @click=${()=>this._moveSelected(1)}
          >
            <ha-icon icon=${r?"mdi:arrow-right":"mdi:arrow-down"}></ha-icon>
          </button>
          ${this._hasElementMenu()?J`<button
                  class="tool"
                  title="More"
                  aria-label="More"
                  @click=${e=>this._openElementMenu(e)}
                >
                  <ha-icon icon="mdi:dots-vertical"></ha-icon>
                </button>`:K}
        </div>
      </div>
    `}_hasElementMenu(){const e=this._locate(this._selected);return!("block"===e?.kind&&"card"===e.block.type)}_renderElementMenu(){const e=this._menus.elementRect;if(!this._menus.elementOpen||!e)return K;let t;if("settings"===this._tab)t=this._renderSettingsMenuItems();else if("mobile"===this._tab){const e="custom"===Yi(this._working);t=J`
        <button
          class="add-menu-item"
          @click=${()=>{this._menus.elementOpen=!1,e?this._confirmingMirrorSwitch=!0:this._confirmingCustomSwitch=!0}}
        >
          ${e?"Switch To Mirror Desktop":"Switch To Custom Bar"}
        </button>
      `}else{const e=this._locate(this._selected),o="block"===e?.kind&&"category"===e.block.type?e:null;t=this._renderElementMenuItems(o)}return J`
      <div
        class="menu-scrim"
        @click=${()=>{this._menus.elementOpen=!1}}
      ></div>
      <div class="add-menu" style=${Gi(e,"right")}>${t}</div>
    `}_renderElementMenuItems(e){const t=this._yamlActive(),o=e?(this._previewCollapsedCats.has(this._idFor(e.block))?"Expand":"Collapse")+" Category":"",i=e?J`<button class="add-menu-item" @click=${()=>this._toggleCategoryPreview()}>
          ${o}
        </button>`:K;return J`
      <button class="add-menu-item" @click=${()=>this._toggleYamlMode()}>
        ${t?"Edit With UI":"Edit As YAML"}
      </button>
      ${i}
    `}_yamlActive(){return null!==this._yamlEditId&&this._yamlEditId===this._selected}_toggleYamlMode(){const e=!this._yamlActive();this._yamlEditId=e?this._selected:null,this._yamlError=e&&this._selectedSchemaErrors().join(" • ")||null,this._menus.elementOpen=!1}_settingsHeader(){return J`
      <div class="form-head">
        <div class="form-title">Sidebar Settings</div>
        <div class="form-tools">
          <button
            class="tool"
            title="More"
            aria-label="More"
            @click=${e=>this._openElementMenu(e)}
          >
            <ha-icon icon="mdi:dots-vertical"></ha-icon>
          </button>
        </div>
      </div>
    `}_renderSettingsMenuItems(){return J`
      <button class="add-menu-item" @click=${()=>this._toggleSettingsYaml()}>
        ${this._settingsYaml?"Edit With UI":"Edit As YAML"}
      </button>
    `}_toggleSettingsYaml(){this._settingsYaml=!this._settingsYaml,this._yamlError=this._settingsYaml&&Di(this._working).join(" • ")||null,this._menus.elementOpen=!1}_toggleCategoryPreview(){const e=this._locate(this._selected);if("block"!==e?.kind||"category"!==e.block.type)return;const t=this._idFor(e.block),o=new Set(this._previewCollapsedCats);o.has(t)?o.delete(t):o.add(t),this._previewCollapsedCats=o,this._menus.elementOpen=!1}_yamlEditor(e,t,o){const i=e=>{t(e);const i=o(e);this._yamlError=i.length?i.join(" • "):null},r=this._yamlError?J`<span class="field-error">${this._yamlError}</span>`:K;return customElements.get("ha-yaml-editor")?J`<div class="field yaml-field yaml-fill">
        <ha-yaml-editor
          .defaultValue=${e}
          @value-changed=${e=>{e.detail.isValid?i(e.detail.value):this._yamlError=e.target.errorMsg||"Invalid YAML."}}
        ></ha-yaml-editor>
        ${r}
      </div>`:J`<label class="field yaml-fill">
      <textarea
        class="mono"
        rows="10"
        .value=${JSON.stringify(e,null,2)}
        @input=${e=>{const t=e.target.value.trim();if(t)try{i(JSON.parse(t))}catch{this._yamlError="Invalid YAML."}}}
      ></textarea>
      ${r}
    </label>`}_selectedSchemaErrors(){const e=this._locate(this._selected);return e?"footer"===e.kind?Ri(e.btn):"item"===e.kind?zi(e.item):Ii(e.block):[]}_cardStatus(){return this._cardError?J`<div class="yaml-banner">${this._cardError}</div>`:K}_uiYamlBanner(){if(this._yamlActive())return K;const e=this._selectedSchemaErrors();return e.length?J`<div class="yaml-banner">This element has errors: ${e.join(" • ")}</div>`:K}_replaceInPlace(e,t){const o=t&&"object"==typeof t?t:{};Object.keys(e).forEach(t=>delete e[t]),Object.assign(e,o),this._touch()}_replaceBlock(e,t,o){const i=this._working[e]?.[t];i&&this._replaceInPlace(i,o)}_replaceItem(e,t,o,i){const r=this._working[e]?.[t],a=r?.items?.[o];a&&this._replaceInPlace(a,i)}_replaceFooterButton(e,t){const o=this._working.footer?.buttons?.[e];o&&this._replaceInPlace(o,t)}_emptySelectionAdd(){return"header"===this._tab||"body"===this._tab?this._renderAddMenu(this._typeItems(this._tab),"Add Element",!0):J`<button class="add solid" @click=${()=>this._addFooterButton()}>
      Add Button
    </button>`}_renderSelectedForm(){const e=this._locate(this._selected);if(!e)return J`
        <div class="empty-state">
          <ha-icon class="empty-icon" icon="mdi:gesture-tap-button"></ha-icon>
          <p class="empty-msg">
            Select an element in the preview to edit it, or add a new one below.
          </p>
          ${this._emptySelectionAdd()}
        </div>
      `;if("footer"===e.kind){const t=this._yamlActive()?this._yamlEditor(e.btn,t=>this._replaceFooterButton(e.index,t),Ri):((e,t,o,i)=>J`
    ${Or("Icon Template",e.icon,e=>t({icon:e}),i,kr)}
    ${Hr("Icon Color Template",e.icon_color,e=>t({icon_color:e||void 0}),i)}
    ${$r("Title Template",e.title,e=>t({title:e||void 0}),i,{entities:!0,icons:!0,description:kr})}
    ${Ar("Entity",e.entity,e=>t({entity:e||void 0}),i,br)}
    ${Qr(e,t,o,i)}
    <details class="advanced">
      <summary>Advanced</summary>
      ${Ur(e,t)}
      ${Kr(e.card_mod,e=>t({card_mod:e}),Jr)}
      ${Vr()?Xr("footer-button"):K}
    </details>
  `)(e.btn,t=>this._patchFooterButton(e.index,t),this._ctx(),this.hass);return J`
        <div class="form ${this._yamlActive()?"yaml-mode":""}">
          ${this._formHeader("Button")} ${this._uiYamlBanner()} ${t}
          <div class="form-actions">
            <button class="add-btn" @click=${()=>this._addFooterButton()}>Add Button Next</button>
            <button
              class="add-btn danger"
              @click=${()=>{this._removeFooterButton(e.index),this._selected=null}}
            >
              Delete Button
            </button>
          </div>
        </div>
      `}if("item"===e.kind){const t=t=>this._patchItem(e.region,e.index,e.itemIndex,t),o=this._yamlActive()?this._yamlEditor(e.item,t=>this._replaceItem(e.region,e.index,e.itemIndex,t),zi):ea({...e.item,type:"item"},t,this._ctx(),this.hass);return J`
        <div class="form ${this._yamlActive()?"yaml-mode":""}">
          ${this._formHeader("Item")} ${this._uiYamlBanner()} ${o}
          <div class="form-actions">
            <button class="add-btn" @click=${()=>this._addItem(e.region,e.index)}>
              Add Child Item
            </button>
            <button
              class="add-btn danger"
              @click=${()=>{this._removeItem(e.region,e.index,e.itemIndex),this._selected=null}}
            >
              Delete Item
            </button>
          </div>
        </div>
      `}const t=Br(e.block.type??"item"),o=J`<button
      class="add-btn danger"
      @click=${()=>{this._removeBlock(e.region,e.index),this._selected=null}}
    >
      Delete ${t}
    </button>`;if("card"===e.block.type)return J`
        <div class="form yaml-mode">
          ${this._formHeader(t)}
          ${this._yamlEditor(e.block.card,t=>this._patchBlock(e.region,e.index,{card:t}),()=>[])}
          ${this._cardStatus()} ${Vr()?Xr("card"):K}
          <div class="form-actions">
            ${this._renderAddMenu(this._typeItems(e.region),"Add Element After",!0)}
            ${o}
          </div>
        </div>
      `;const i=this._yamlActive()?this._yamlEditor(e.block,t=>this._replaceBlock(e.region,e.index,t),Ii):ea(e.block,t=>this._patchBlock(e.region,e.index,t),this._ctx(),this.hass);return J`
      <div class="form ${this._yamlActive()?"yaml-mode":""}">
        ${this._formHeader(t)} ${this._uiYamlBanner()} ${i}
        <div class="form-actions">
          ${"category"===e.block.type?J`<button class="add-btn" @click=${()=>this._addItem(e.region,e.index)}>
                  Add Child Item
                </button>`:K}
          ${this._renderAddMenu(this._typeItems(e.region),"Add Element After",!0)}
          ${o}
        </div>
      </div>
    `}_previewEl(e,t,o=!0,i=!1){let r=this._previews.get(e);r||(r=document.createElement("dashboard-sidebar"),r.preview=!0,r.setAttribute("preview",""),o&&(r.addEventListener(qo,e=>{this._onPreviewSelect(e.detail.loc)}),r.addEventListener(Xo,e=>{this._applyReorder(e.detail)})),this._previews.set(e,r)),r.hass=this.hass,r.previewInteractive=o,r.previewFull=i,r.previewCollapsed=this._tabCollapsed,r.previewSelected=o?this._selectedLoc():void 0,r.previewCollapsedCats=this._collapsedCatLocs();const a=JSON.stringify(t);return this._previewCfg.get(r)!==a&&(r.setConfig(t),this._previewCfg.set(r,a)),r}_renderAddMenu(e,t,o=!1){return J`
      <button
        class="add ${o?"solid":""}"
        title="Add element"
        aria-label="Add element"
        @click=${t=>{t.stopPropagation(),this._menus.addRect=t.currentTarget.getBoundingClientRect(),this._menus.addItems=e,this._menus.addOpen=!0}}
      >
        ${t??(this._tabCollapsed?"＋":"＋ Add Element")}
      </button>
    `}_typeItems(e){const t="header"===e?na:na.filter(e=>"title"!==e);return t.map(t=>({label:Br(t),run:()=>this._addBlock(e,t)}))}_renderAddMenuPopup(){const e=this._menus.addRect;return this._menus.addOpen&&e?((e,t,o)=>J`
  <div class="menu-scrim" @click=${o}></div>
  <div class="add-menu" style=${Gi(e,"left")}>
    ${t.map(e=>e.header?J`<div class="add-menu-header">${e.label}</div>`:J`<button
            class="add-menu-item"
            @click=${()=>{e.run(),o()}}
          >
            ${e.label}
          </button>`)}
  </div>
`)(e,this._menus.addItems,()=>{this._menus.addOpen=!1}):K}};pa.styles=ir,e([ge({attribute:!1})],pa.prototype,"hass",void 0),e([ge({attribute:!1})],pa.prototype,"config",void 0),e([ge({attribute:!1})],pa.prototype,"onSave",void 0),e([ge({attribute:!1})],pa.prototype,"onClose",void 0),e([ge({attribute:!1})],pa.prototype,"onDelete",void 0),e([ve()],pa.prototype,"_tab",void 0),e([ve()],pa.prototype,"_selected",void 0),e([ve()],pa.prototype,"_fieldErrors",void 0),e([ve()],pa.prototype,"_users",void 0),e([ve()],pa.prototype,"_confirmingClose",void 0),e([ve()],pa.prototype,"_confirmingDelete",void 0),e([ve()],pa.prototype,"_collapsedTabs",void 0),e([ve()],pa.prototype,"_previewCollapsedCats",void 0),e([ve()],pa.prototype,"_yamlEditId",void 0),e([ve()],pa.prototype,"_settingsYaml",void 0),e([ve()],pa.prototype,"_confirmingCustomSwitch",void 0),e([ve()],pa.prototype,"_confirmingMirrorSwitch",void 0),e([ve()],pa.prototype,"_yamlError",void 0),e([ve()],pa.prototype,"_cardError",void 0),e([ve()],pa.prototype,"_footerYaml",void 0),e([ve()],pa.prototype,"_errors",void 0),e([ve()],pa.prototype,"_mobilePreviewWidth",void 0),e([ve()],pa.prototype,"_mobileAvail",void 0),pa=oa=e([be("dashboard-sidebar-editor")],pa);const ua=e=>"string"==typeof e?e.trim().toLowerCase():"",ba=(e,t)=>{if(!(e=>Array.isArray(e.users))(e))return!0;const o=ua(t?.id),i=ua(t?.name);return!(!o&&!i)&&(e.users??[]).some(e=>{const t=ua(e);return""!==t&&(t===o||t===i)})},ma="dashboard-sidebar-wrapper",fa="dashboard-sidebar-host",ga="dashboard-sidebar-style",va="dashboard-sidebar-add",_a=(e,t)=>(e?.shadowRoot??e)?.querySelector(t)??null,wa=()=>{let e=document.querySelector("home-assistant");e=_a(e,"home-assistant-main");const t=_a(e,"ha-drawer partial-panel-resolver")??_a(e,"app-drawer-layout partial-panel-resolver")??_a(e,"partial-panel-resolver");return e=_a(t,"ha-panel-lovelace")??t,e=_a(e,"hui-root"),e&&e.shadowRoot?e:null},ya=()=>document.querySelector("home-assistant")?.hass,xa=e=>Boolean(e.lovelace?.editMode),$a=(e,t)=>{t.style.setProperty("--dashboard-sidebar-header",`${(e=>{const t=e.querySelector("ch-header")??e.querySelector("app-header")??e.querySelector(".header")??e.querySelector(".toolbar");return t?t.offsetHeight:0})(e)}px`)},ka=e=>{const t=e.lovelace?.config?.[Lo];return t??null},Ca=e=>{const t=ka(e);return t&&(xa(e)||ba(t,ya()?.user))?t:null},Sa=(e,t)=>{const o=e.lovelace;o?.saveConfig&&o.saveConfig({...o.config??{},[Lo]:t})},Aa=e=>[e.position??"left",e.width??Yo,Hi(e),Li(e),e.breakpoint??768,e.overlay?1:0].join(":"),Ea=()=>{const e=wa();if(!e)return;const t=Ca(e),o=e.shadowRoot;if(!t)return;if(o.getElementById(ma))return;const i=o.getElementById("view");if(!i||!i.parentNode)return;let r=o.getElementById(ga);r||(r=document.createElement("style"),r.id=ga,o.appendChild(r)),r.textContent=(e=>{const t=`min(${e.width??Yo}px, 100vw)`,o=Boolean(e.overlay),i="right"===e.position;return`\n    #${ma} {\n      display: flex;\n      flex-direction: row;\n      height: 100%;\n      width: 100%;\n    }\n    #${fa} {\n      flex: 0 0 auto;\n      width: ${o?"0px":t};\n      box-sizing: border-box;\n      overflow: visible;\n      align-self: flex-start;\n      position: sticky;\n      top: var(--dashboard-sidebar-header, 0px);\n      margin-top: var(--dashboard-sidebar-header, 0px);\n      height: calc(100vh - var(--dashboard-sidebar-header, 0px));\n      z-index: 5;\n      transition: width 0.25s ease;\n    }\n    ${o?`#${fa} > dashboard-sidebar {\n             position: absolute;\n             top: 0;\n             ${i?"right: 0;":"left: 0;"}\n             width: ${t};\n             height: 100%;\n             transition: width 0.25s ease;\n             /* Floating over the view, the sidebar needs an edge of its own.\n                Read through a variable so card-mod can drop or restyle it. */\n             box-shadow: var(--dashboard-sidebar-overlay-shadow, 0 0 12px rgb(0 0 0 / 25%));\n           }\n           #${ma}.collapsed #${fa} > dashboard-sidebar {\n             width: 64px;\n           }`:`#${ma}.collapsed #${fa} {\n             width: 64px;\n           }`}\n    #${ma} > #view {\n      flex: 1 1 0;\n      min-width: 0;\n    }\n    ${"hidden"===Hi(e)?`@media (min-width: ${(e.breakpoint??768)+1}px) {\n             #${fa} { display: none; }\n             #${ma} > #view { flex-basis: 100%; }\n           }`:""}\n    ${"sidebar"!==Li(e)?`@media (max-width: ${e.breakpoint??768}px) {\n             #${fa} { display: none; }\n             #${ma} > #view { flex-basis: 100%; }\n           }`:""}\n    ${"bar"===Li(e)?`dashboard-sidebar-bar { display: none; }\n           @media (max-width: ${e.breakpoint??768}px) {\n             dashboard-sidebar-bar { display: block; }\n           }`:""}\n  `})(t);const a=document.createElement("div");a.id=ma,a.dataset.cfg=JSON.stringify(t),a.dataset.struct=Aa(t),i.parentNode.insertBefore(a,i);const s=document.createElement("div");s.id=fa,$a(o,s);const n=document.createElement("dashboard-sidebar");if(n.editMode=xa(e),n.hass=ya(),n.setConfig(t),s.appendChild(n),"right"===t.position?(a.appendChild(i),a.appendChild(s)):(a.appendChild(s),a.appendChild(i)),"bar"===Li(t)){const o=document.createElement("dashboard-sidebar-bar");o.editMode=xa(e),o.hass=ya(),o.setConfig(t),a.appendChild(o)}a.addEventListener(Wo,e=>{const t=Boolean(e.detail?.collapsed);a.classList.toggle("collapsed",t)})},Ta=e=>{const t=e.shadowRoot;let o=t.getElementById(va);o||(o=document.createElement("button"),o.id=va,o.textContent="＋ Sidebar",o.style.cssText="position:fixed;z-index:6;bottom:24px;left:16px;padding:10px 16px;border:none;border-radius:20px;background:var(--primary-color,#03a9f4);color:var(--text-primary-color,#fff);cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.3);font:inherit;",o.addEventListener("click",()=>Sa(e,((e,t)=>{const o="string"==typeof e?.user?.name?e.user.name.trim():"",i=[{type:"clock",align:"center"},{type:"date",align:"center"},{type:"title",text:o?`Hello ${o}`:"Hello",align:"center"}],r=`/${("undefined"!=typeof window?window.location.pathname:"").split("/")[1]||"lovelace"}`,a=(Array.isArray(t?.config?.views)?t.config.views:[]).filter(e=>!0!==e?.subview).map((e,t)=>({type:"item",title:e.title||e.path||`View ${t+1}`,icon:e.icon||"mdi:view-dashboard",tap_action:{action:"navigate",navigation_path:`${r}/${e.path??t}`}})),s=e?.states??{},n=Object.keys(s).filter(e=>e.startsWith("light.")).slice(0,4).map(e=>({icon:s[e]?.attributes?.icon||"mdi:lightbulb",icon_color:`{{ '#ffb74d' if is_state('${e}', 'on') else 'var(--secondary-text-color)' }}`,title:s[e]?.attributes?.friendly_name||e,entity:e,tap_action:{action:"toggle",entity:e}})),d={position:"left",header:i};return a.length&&(d.body=a),n.length&&(d.footer={buttons:n}),d})(ya(),e.lovelace))),t.appendChild(o));const i=e.getBoundingClientRect?.().left??0;o.style.left=`${Math.round(i)+16}px`},Ma=e=>{e.getElementById(va)?.remove()},Oa=e=>{const t=e.shadowRoot;if(t.querySelector("dashboard-sidebar-editor"))return;const o=document.createElement("dashboard-sidebar-editor");o.hass=ya(),o.config=ka(e)??{},o.onSave=t=>Sa(e,t),o.onClose=()=>o.remove(),o.onDelete=()=>(e=>{const t=e.lovelace;if(!t?.saveConfig)return;const o={...t.config??{}};delete o[Lo],t.saveConfig(o)})(e),t.appendChild(o)},Da=()=>{try{const e=wa();if(!e)return;const t=e.shadowRoot,o=xa(e),i=Ca(e),r=t.getElementById(ma);if(!r)return void(i?Ea():o?Ta(e):Ma(t));Ma(t);const a=r.querySelector("dashboard-sidebar"),s=r.querySelector("dashboard-sidebar-bar");if(r.dataset.cfg!==JSON.stringify(i??null)){const e=Boolean(i&&a&&r.dataset.struct===Aa(i));return void(i&&e&&a?(a.setConfig(i),s?.setConfig(i),r.dataset.cfg=JSON.stringify(i)):((e=>{const t=e.getElementById(ma);if(!t)return;const o=e.getElementById("view");o&&t.parentNode&&t.parentNode.insertBefore(o,t),t.remove()})(t),Ea()))}const n=t.getElementById(fa);n&&$a(t,n),s&&(s.editMode=o,s.hass=ya()),a&&(a.editMode=o,a.hass=ya())}catch{}};console.info("%c DASHBOARD-SIDEBAR %c v1.1.0 ","color: white; background: #3f51b5; font-weight: 700;","color: #3f51b5; background: white; font-weight: 700;"),window.addEventListener("location-changed",()=>Da()),window.addEventListener(Uo,()=>{const e=wa();e&&Oa(e)}),window.setInterval(Da,1e3),Da(),console.info("[dashboard-sidebar] loaded",import.meta.url);
