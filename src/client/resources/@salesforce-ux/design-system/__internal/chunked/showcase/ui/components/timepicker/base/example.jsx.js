var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/timepicker/base/example.jsx.js"]=function(e){function t(t){for(var n,i,l=t[0],s=t[1],u=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);p.length;)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={149:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;return o.push([548,0]),r()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},548:function(e,t,r){"use strict";r.r(t),r.d(t,"states",(function(){return y}));var n=r(0),a=r.n(n),o=r(1),i=r.n(o),l=r(2),s=r.n(l),u=r(17),c=r(19),d=r(21),p=r(8),f=r(6);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=function(e){var t=e.hasFocus,r=e.isOpen,o=e.listboxData,i=e.hasError,l=e.isRequired,d=Object(n.useRef)(),m=b(Object(n.useState)(""),2),h=m[0],y=m[1],v=b(Object(n.useState)(""),2),O=v[0],x=v[1],S=b(Object(n.useState)(f.d.uniqueId("example-unique-id-")),1)[0],_=b(Object(n.useState)(f.d.uniqueId("example-unique-id-")),1)[0];return Object(n.useEffect)((function(){d.current&&("id"in d.current&&d.current.id&&y(d.current.id),"ariaChecked"in d.current&&d.current.ariaChecked&&x(d.current.textContent))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(u.b,{className:s()("slds-timepicker",{"slds-has-error":i}),id:S,"aria-controls":_,"aria-activedescendant":h,autocomplete:!0,label:"Time",placeholder:"Select a time…",inputIconPosition:"right",rightInputIcon:a.a.createElement(p.UtilityIcon,{symbol:"clock",className:s()("slds-icon slds-icon_x-small slds-icon-text-default",{"slds-icon-text-error":i}),containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:a.a.createElement(c.e,{id:_,snapshot:o,type:"plain",count:6,focusedRef:d}),resultsType:"listbox",hasInteractions:!0,hasFocus:t,isOpen:r,hasError:i,isRequired:l,value:O}),i&&a.a.createElement("div",{className:"slds-form-element__help",id:S+"-error"},"Complete this field."))};h.propTypes={hasFocus:i.a.bool,isOpen:i.a.bool,hasError:i.a.bool,isRequired:i.a.bool,listboxData:i.a.object},t.default=a.a.createElement(h,{listboxData:d.t});var y=[{id:"focused",label:"Focused",element:a.a.createElement(h,{listboxData:d.t,hasFocus:!0,isOpen:!0})},{id:"open-item-focused",label:"Open - Item Focused",element:a.a.createElement(h,{listboxData:d.u,hasFocus:!0,isOpen:!0})},{id:"time-selection",label:"Open - Time selected",element:a.a.createElement(h,{listboxData:d.v,hasFocus:!0,isOpen:!0})},{id:"required",label:"Required",element:a.a.createElement(h,{listboxData:d.t,isRequired:!0})},{id:"error",label:"Error",element:a.a.createElement(h,{listboxData:d.t,hasError:!0})},{id:"required-error",label:"Required with Error",element:a.a.createElement(h,{listboxData:d.t,isRequired:!0,hasError:!0})}]}});