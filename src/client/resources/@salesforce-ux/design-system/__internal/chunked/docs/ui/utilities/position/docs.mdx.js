var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/utilities/position/docs.mdx.js"]=function(e){function t(t){for(var o,a,s=t[0],r=t[1],d=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);for(c&&c(t);p.length;)p.shift()();return l.push.apply(l,d||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],o=!0,s=1;s<i.length;s++){var r=i[s];0!==n[r]&&(o=!1)}o&&(l.splice(t--,1),e=a(a.s=i[0]))}return e}var o={},n={101:0},l=[];function a(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=r;return l.push([689,0]),i()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},689:function(e,t,i){"use strict";i.r(t),i.d(t,"getElement",(function(){return m})),i.d(t,"getContents",(function(){return f}));var o=i(0),n=i.n(o),l=i(4),a=i(2),s=i(1),r=[{id:"fixed",label:"Fixed",element:n.a.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},n.a.createElement("div",{className:"slds-is-fixed"},n.a.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"An element with fixed positioning is positioned relative to the viewport. If no other positioning values are given (",n.a.createElement("code",null,"top, right, bottom, left"),") it will start its positioning relative to where it is in the flow of the page."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-fixed` can be used to position a container relative to the viewport."},{id:"absolute",label:"Absolute",element:n.a.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},n.a.createElement("div",{className:"slds-is-absolute"},n.a.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"An element with absolute positioning is positioned relative to its closest ancestor with relative positioning. If no other positioning values are given (",n.a.createElement("code",null,"top, right, bottom, left"),") it will start its positioning relative to where it is in the flow of the page."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-absolute` can be used to position a container relative to its closest ancestor with relative positioning."},{id:"relative",label:"Relative",element:n.a.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},n.a.createElement("div",{className:"slds-is-relative"},n.a.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"Like static, a relatively positioned element is put where its normal position would be in the document layout flow."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-relative` can be used to contain children if children are absolutely positioned and out of flow. It is also used to position element without changing layout."},{id:"static",label:"Static",element:n.a.createElement("div",{className:"demo-only slds-grid",style:{height:"10rem",width:"20rem",padding:"2rem"}},n.a.createElement("div",{className:"slds-is-static"},n.a.createElement("div",{style:{position:"absolute",top:"1rem",left:"1rem",border:"1px solid red",background:"#f4f6f9"}},"A static positioned element is positioned exactly as it comes in the flow of the page."),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),description:"`.slds-is-static` resets positioning of element back to normal behavior."}],d=l.c.code,c=l.c.h2,u=l.c.h3,p=l.c.p,m=function(){return Object(o.createElement)(l.b,{},Object(o.createElement)("div",{className:"doc lead"},"Positioning utilities give you the ability to change the position property of an element."),c({id:"Examples"},"Examples"),u({id:"Fixed"},"Fixed"),p({},d({},".slds-is-fixed")," can be used to position a container relative to the viewport."),Object(o.createElement)(a.a,null,Object(s.f)(r,"fixed")),u({id:"Absolute"},"Absolute"),p({},d({},".slds-is-absolute")," can be used to position a container relative to its closest ancestor with relative positioning."),Object(o.createElement)(a.a,null,Object(s.f)(r,"absolute")),u({id:"Relative"},"Relative"),p({},d({},".slds-is-relative")," can be used to contain children if children are absolutely positioned and out of flow. It is also used to position element without changing layout."),Object(o.createElement)(a.a,null,Object(s.f)(r,"relative")),u({id:"Static"},"Static"),p({},d({},".slds-is-static")," resets positioning of element back to normal behavior."),Object(o.createElement)(a.a,null,Object(s.f)(r,"static")))},f=function(){return Object(l.a)(m())}}});