(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-2f96b3d2.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-2f96b3d2.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostContext; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
function hostContext(t,r){return null!==r.closest(t)}function createColorClasses(t){var r;return"string"==typeof t&&t.length>0?((r={"ion-color":!0})["ion-color-"+t]=!0,r):void 0}function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}function getClassMap(t){var r={};return getClassList(t).forEach(function(t){return r[t]=!0}),r}var SCHEME=/^[a-z][a-z0-9+\-.]*:/;function openURL(t,r,n,e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var o;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(s){switch(s.label){case 0:return null==r||"#"===r[0]||SCHEME.test(r)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return s.sent(),[2,o.push(r,e)];case 2:return[2,!1]}})})}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/wddurbsg.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/wddurbsg.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonButton, IonIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonButton", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonIcon", function() { return Icon; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_2f96b3d2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-2f96b3d2.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-2f96b3d2.js");
/* harmony import */ var _chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-6d7d2f8c.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-6d7d2f8c.js");
var CACHED_MAP,Button=function(){function t(){var t=this;this.inToolbar=!1,this.inItem=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()}}return t.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider")},t.prototype.onClick=function(t){if("button"===this.type)Object(_chunk_2f96b3d2_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.win,this.href,t,this.routerDirection);else if(Object(_chunk_6d7d2f8c_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el)){var e=this.el.closest("form");if(e){t.preventDefault();var n=this.win.document.createElement("button");n.type=this.type,n.style.display="none",e.appendChild(n),n.click(),n.remove()}}},Object.defineProperty(t.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('ion-icon[slot="icon-only"]')},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rippleType",{get:function(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"},enumerable:!0,configurable:!0}),t.prototype.hostData=function(){var t,e=this,n=e.buttonType,i=e.disabled,o=e.expand,r=e.hasIconOnly,s=e.shape,a=e.strong,l=this.fill;void 0===l&&(l=this.inToolbar?"clear":"solid");var c=void 0===this.size&&this.inItem?"small":this.size;return{"aria-disabled":i?"true":null,class:Object.assign({},Object(_chunk_2f96b3d2_js__WEBPACK_IMPORTED_MODULE_1__["c"])(e.color),(t={},t[""+this.mode]=!0,t[n]=!0,t[n+"-"+o]=void 0!==o,t[n+"-"+c]=void 0!==c,t[n+"-"+s]=void 0!==s,t[n+"-"+l]=!0,t[n+"-strong"]=a,t["button-has-icon-only"]=r,t["button-disabled"]=i,t["ion-activatable"]=!0,t["ion-focusable"]=!0,t))}},t.prototype.render=function(){var t=void 0===this.href?"button":"a";return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])(t,Object.assign({},"button"===t?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onBlur:this.onBlur}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"button-inner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"icon-only"}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"start"}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"end"})),"md"===this.mode&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect",{type:this.rippleType}))},Object.defineProperty(t,"is",{get:function(){return"ion-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-button-ios-h{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-hover:initial;--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}.button-disabled.sc-ion-button-ios-h{--opacity:.5;pointer-events:none}.button-disabled.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{cursor:default;pointer-events:none}.button-solid.sc-ion-button-ios-h{--background:var(--ion-color-primary,#3880ff);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.92);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}.button-solid.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-solid.ion-color.ion-focused.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-shade)}.button-outline.sc-ion-button-ios-h{--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-outline.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.button-outline.ion-focused.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.sc-ion-button-ios-h{--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}.button-clear.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:transparent;color:var(--ion-color-base)}.button-clear.ion-focused.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.activated.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:transparent}.button-block.sc-ion-button-ios-h{display:block}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios:after{clear:both}.button-full.sc-ion-button-ios-h{display:block}.button-full.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;contain:content}.button-full.sc-ion-button-ios-h:not(.button-round)   .button-native.sc-ion-button-ios{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-button-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native.sc-ion-button-ios::-moz-focus-inner{border:0}.button-inner.sc-ion-button-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-ios-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-ios-s > ion-icon[slot=start]{margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-ios-s > ion-icon[slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-button-ios-s > ion-icon[slot=end]{margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-ios-s > ion-icon[slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}.sc-ion-button-ios-s > ion-icon[slot=icon-only]{font-size:1.8em}ion-ripple-effect.sc-ion-button-ios{color:var(--ripple-color)}.ion-focused.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--background-focused);color:var(--color-focused)}.activated.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--background-activated);color:var(--color-activated)}\@media (any-hover:hover){.sc-ion-button-ios-h:hover   .button-native.sc-ion-button-ios{background:var(--background-hover);color:var(--color-hover)}}.sc-ion-button-ios-h{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-button-ios-h{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.button-solid.sc-ion-button-ios-h{--background-activated:var(--ion-color-primary-shade,#3171e0)}.button-solid.activated.sc-ion-button-ios-h{--opacity:1}.button-solid.activated.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-shade)}.button-outline.sc-ion-button-ios-h{--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary-contrast,#fff)}.button-outline.activated.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-clear.activated.sc-ion-button-ios-h{--opacity:0.4}.button-clear.sc-ion-button-ios-h{--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-large.sc-ion-button-ios-h{--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}.button-small.sc-ion-button-ios-h{--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}.button-round.sc-ion-button-ios-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-strong.sc-ion-button-ios-h{font-weight:600}\@media (any-hover:hover){.button-solid.sc-ion-button-ios-h:hover{--opacity:0.8}.button-clear.sc-ion-button-ios-h:hover, .button-outline.sc-ion-button-ios-h:hover{--opacity:0.6}.ion-focused.sc-ion-button-ios-h:hover{--background-hover:var(--background-focused);--color-hover:var(--color-focused)}.activated.sc-ion-button-ios-h:hover{--background-hover:var(--background-activated);--color-hover:var(--color-activated)}}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function getIconMap(){if(!CACHED_MAP){var t=window;t.Ionicons=t.Ionicons||{},CACHED_MAP=t.Ionicons.map=t.Ionicons.map||new Map}return CACHED_MAP}function getName(t,e,n,i){return e="ios"===(e=(e||"md").toLowerCase())?"ios":"md",n&&"ios"===e?t=n.toLowerCase():i&&"md"===e?t=i.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=e+"-"+t)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function getSrc(t){return"string"==typeof t&&isSrc(t=t.trim())?t:null}function isSrc(t){return t.length>0&&/(\/|\.)/.test(t)}function isValid(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].value;if("string"==typeof n&&0===n.toLowerCase().indexOf("on"))return!1}for(e=0;e<t.childNodes.length;e++)if(!isValid(t.childNodes[e]))return!1}return!0}var Icon=function(){function t(){this.isVisible=!1,this.lazy=!1}return t.prototype.componentWillLoad=function(){var t=this;this.waitUntilVisible(this.el,"50px",function(){t.isVisible=!0,t.loadIcon()})},t.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.waitUntilVisible=function(t,e,n){var i=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var o=this.io=new this.win.IntersectionObserver(function(t){t[0].isIntersecting&&(o.disconnect(),i.io=void 0,n())},{rootMargin:e});o.observe(t)}else n()},t.prototype.loadIcon=function(){var t=this;if(!this.isServer&&this.isVisible){var e=this.getUrl();e?getSvgContent(this.doc,e,"s-ion-icon").then(function(e){return t.svgContent=e}):console.error("icon was not resolved")}if(!this.ariaLabel){var n=getName(this.getName(),this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace("ios-","").replace("md-","").replace(/\-/g," "))}},t.prototype.getName=function(){return void 0!==this.name?this.name:this.icon&&!isSrc(this.icon)?this.icon:void 0},t.prototype.getUrl=function(){var t=getSrc(this.src);return t||((t=getName(this.getName(),this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=getSrc(this.icon))||null)},t.prototype.getNamedUrl=function(t){return getIconMap().get(t)||this.resourcesUrl+"svg/"+t+".svg"},t.prototype.hostData=function(){var t,e,n=this.mode||"md",i=this.flipRtl||this.ariaLabel&&this.ariaLabel.indexOf("arrow")>-1&&!1!==this.flipRtl;return{role:"img",class:Object.assign((t={},t[""+n]=!0,t),createColorClasses$1(this.color),(e={},e["icon-"+this.size]=!!this.size,e["flip-rtl"]=i&&"rtl"===this.doc.dir,e))}},t.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})},Object.defineProperty(t,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},flipRtl:{type:Boolean,attr:"flip-rtl"},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;height:100%;width:100%}.flip-rtl.sc-ion-icon-h   .icon-inner.sc-ion-icon{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.icon-small.sc-ion-icon-h{font-size:18px!important}.icon-large.sc-ion-icon-h{font-size:32px!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary,#3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary,#0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary,#f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success,#10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning,#ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger,#f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light,#f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium,#989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),t}(),requests=new Map;function getSvgContent(t,e,n){var i=requests.get(e);return i||(i=fetch(e,{cache:"force-cache"}).then(function(t){return isStatusValid(t.status)?t.text():Promise.resolve(null)}).then(function(e){return validateContent(t,e,n)}),requests.set(e,i)),i}function isStatusValid(t){return t<=299}function validateContent(t,e,n){if(e){var i=t.createDocumentFragment(),o=t.createElement("div");o.innerHTML=e,i.appendChild(o);for(var r=o.childNodes.length-1;r>=0;r--)"svg"!==o.childNodes[r].nodeName.toLowerCase()&&o.removeChild(o.childNodes[r]);var s=o.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(n&&s.setAttribute("class",n),isValid(s)))return o.innerHTML}return""}function createColorClasses$1(t){var e;return t?((e={"ion-color":!0})["ion-color-"+t]=!0,e):null}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js ***!
  \******************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
// REV: 9dd9aa322c893e5e0b3f1609b1126314ccf37bbb

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
          t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m) return m.call(o);
  return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

/***/ })

}]);
//# sourceMappingURL=88.js.map