var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/utilities/floats/example.jsx.js"]=function(e){function t(t){for(var n,o,s=t[0],i=t[1],c=t[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&p.push(l[o][0]),l[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==l[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},l={170:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;return r.push([605,0]),a()}({0:function(e,t){e.exports=React},605:function(e,t,a){"use strict";a.r(t),a.d(t,"examples",(function(){return r}));var n=a(0),l=a.n(n),r=[{id:"left",label:"Left",element:l.a.createElement("div",{className:"slds-clearfix"},l.a.createElement("div",{className:"slds-float_left"},l.a.createElement("p",null,"I’m floooaaaating")))},{id:"right",label:"Right",element:l.a.createElement("div",{className:"slds-clearfix"},l.a.createElement("div",{className:"slds-float_right"},l.a.createElement("p",null,"I’m floooaaaating")))},{id:"none",label:"None",element:l.a.createElement("div",{className:"slds-float_none"},l.a.createElement("p",null,"I’m not floooaaaating"))},{id:"clearfix",label:"Clearfix",element:l.a.createElement("div",{className:"slds-clearfix"},l.a.createElement("div",{className:"slds-float_left"},l.a.createElement("p",null,"I’m floooaaaating")),l.a.createElement("div",{className:"slds-float_right"},l.a.createElement("p",null,"I’m floooaaaating")))}]}});