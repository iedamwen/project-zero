var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/trial-bar/header/example.jsx.js"]=function(e){function t(t){for(var l,r,o=t[0],c=t[1],i=t[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,i||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],l=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(l=!1)}l&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var l={},a={154:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},n=[];function r(t){if(l[t])return l[t].exports;var s=l[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=l,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(s,l,function(t){return e[t]}.bind(null,l));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=c;return n.push([681,0]),s()}({0:function(e,t){e.exports=React},681:function(e,t,s){"use strict";s.r(t),s.d(t,"states",(function(){return u}));var l=s(0),a=s.n(l),n=s(9),r=s(13),o=s(2),c=s.n(o),i=function(e){return a.a.createElement("div",{className:"slds-trial-header slds-grid"},a.a.createElement("div",{className:"slds-grid"},a.a.createElement("button",{className:"slds-button slds-m-right_small"},"Take the salesforce tour"),a.a.createElement("div",{className:c()("slds-grid slds-dropdown-trigger slds-dropdown-trigger_click",e.tourMenuOpen?"slds-is-open":null)},a.a.createElement("button",{className:"slds-button","aria-haspopup":"true"},a.a.createElement(n.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"right"}),"Choose your tour"),a.a.createElement(r.Menu,{className:"slds-dropdown_inverse slds-dropdown_left"},a.a.createElement(r.MenuList,null,a.a.createElement(r.MenuItem,{tabIndex:"0",className:"slds-is-selected",title:"Completed: Conquer Your Cases"},a.a.createElement(n.a,{className:"slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small",sprite:"utility",symbol:"check"}),a.a.createElement("span",{className:"slds-assistive-text"},"Completed:")," Conquer Your Cases"),a.a.createElement(r.MenuItem,{title:"Automate For Speed"},a.a.createElement(n.a,{className:"slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small",sprite:"utility",symbol:"check"}),"Automate For Speed"),a.a.createElement(r.MenuItem,{title:"Share Your Knowledge"},a.a.createElement(n.a,{className:"slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small",sprite:"utility",symbol:"check"}),"Share Your Knowledge"),a.a.createElement(r.MenuItem,{title:"Finish it up in a Flash"},a.a.createElement(n.a,{className:"slds-icon slds-icon_selected slds-icon_x-small slds-m-right_x-small",sprite:"utility",symbol:"check"}),"Finish it up in a Flash"),a.a.createElement("li",{className:"slds-has-divider_top-space",role:"separator"}),a.a.createElement(r.MenuItem,{title:"Import Contacts and Accounts"},a.a.createElement(n.a,{className:"slds-icon slds-icon_x-small slds-m-right_x-small",sprite:"utility",symbol:"upload"}),"Import Contacts and Accounts"))))),a.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center slds-col_bump-left"},a.a.createElement("span",{className:"slds-box slds-box_xx-small slds-theme_default"},"30"),a.a.createElement("span",{className:"slds-m-horizontal_x-small"},"Days left in trial"),a.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},className:"slds-button slds-button_success"},"Subscribe Now")))},u=(t.default=a.a.createElement(i,null),[{id:"menu-open",label:"Tour Menu Open",element:a.a.createElement("div",{className:"demo-only",style:{height:"240px"}},a.a.createElement(i,{tourMenuOpen:!0}))}])}});