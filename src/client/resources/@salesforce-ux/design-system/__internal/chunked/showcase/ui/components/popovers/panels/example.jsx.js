var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/popovers/panels/example.jsx.js"]=function(e){function t(t){for(var a,r,c=t[0],d=t[1],o=t[2],i=0,u=[];i<c.length;i++)r=c[i],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(m&&m(t);u.length;)u.shift()();return n.push.apply(n,o||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,c=1;c<l.length;c++){var d=l[c];0!==s[d]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=l[0]))}return e}var a={},s={121:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},n=[];function r(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=a,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(l,a,function(t){return e[t]}.bind(null,a));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var m=d;return n.push([620,0]),l()}({0:function(e,t){e.exports=React},620:function(e,t,l){"use strict";l.r(t);var a=l(0),s=l.n(a),n=l(9),r=l(60),c=l(4),d=s.a.createElement("span",{className:"slds-icon_container slds-icon-standard-opportunity"},s.a.createElement(n.a,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:"opportunity"}),s.a.createElement("span",{className:"slds-assistive-text"},"Opportunities")),o=s.a.createElement("span",{className:"slds-icon_container slds-icon-standard-case"},s.a.createElement(n.a,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:"case"}),s.a.createElement("span",{className:"slds-assistive-text"},"Cases")),m=function(){return s.a.createElement("dd",{className:"slds-m-top_x-small slds-text-align_right"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"View all Opportunities"},"View All"))};t.default=[{id:"panels-default",label:"Panels – default",element:s.a.createElement("section",{"aria-labelledby":"panel-heading-id",className:"slds-popover slds-popover_panel slds-nubbin_left-top",role:"dialog"},s.a.createElement(c.b,{className:"slds-button_icon slds-button_icon-small slds-float_right slds-popover__close",symbol:"close",assistiveText:"Close dialog",title:"Close dialog"}),s.a.createElement("div",{className:"slds-popover__header"},s.a.createElement("header",{className:"slds-media slds-media_center slds-m-bottom_small"},s.a.createElement("span",{className:"slds-icon_container slds-icon-standard-account slds-media__figure"},s.a.createElement(n.a,{className:"slds-icon slds-icon_small",sprite:"standard",symbol:"account"})),s.a.createElement("div",{className:"slds-media__body"},s.a.createElement("h2",{className:"slds-text-heading_medium slds-hyphenate",id:"panel-heading-id"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla Motors")))),s.a.createElement("footer",{className:"slds-grid slds-wrap slds-grid_pull-padded"},s.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},s.a.createElement("dl",null,s.a.createElement("dt",null,s.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Billing Address"},"Billing Address")),s.a.createElement("dd",null,s.a.createElement("p",{className:"slds-truncate",title:"3500 Deer Creek Rd."},"3500 Deer Creek Rd."),s.a.createElement("p",{className:"slds-truncate",title:"Palo Alto, CA 94304"},"Palo Alto, CA 94304")))),s.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},s.a.createElement("dl",null,s.a.createElement("dt",null,s.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Phone"},"Phone")),s.a.createElement("dd",null,s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"212-345-3485")))),s.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},s.a.createElement("dl",null,s.a.createElement("dt",null,s.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Website"},"Website")),s.a.createElement("dd",null,s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"teslamotors.com")))),s.a.createElement("div",{className:"slds-p-horizontal_small slds-size_1-of-2 slds-p-bottom_x-small"},s.a.createElement("dl",null,s.a.createElement("dt",null,s.a.createElement("p",{className:"slds-popover_panel__label slds-truncate",title:"Account Owner"},"Account Owner")),s.a.createElement("dd",null,s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Jeff Maguire")))))),s.a.createElement("div",{className:"slds-popover__body"},s.a.createElement("dl",{className:"slds-popover__body-list"},s.a.createElement("dt",{className:"slds-m-bottom_small"},s.a.createElement(r.a,{figureLeft:d,flavor:"center"},s.a.createElement("p",{className:"slds-text-heading_small slds-hyphenate"},"Opportunities (2+)"))),s.a.createElement("dd",{className:"slds-m-top_x-small"},s.a.createElement("p",{className:"slds-truncate",title:"Tesla - Mule ESB"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla - Mule ESB")),s.a.createElement("dl",{className:"slds-list_horizontal slds-wrap slds-text-body_small"},s.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Value"},"Value"),s.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"$500,000"},"$500,000"),s.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Close Date"},"Close Date"),s.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"Dec 15, 2015"},"Dec 15, 2015"))),s.a.createElement("dd",{className:"slds-m-top_x-small"},s.a.createElement("p",{className:"slds-truncate",title:"Tesla - Anypoint Studios"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla - Anypoint Studios")),s.a.createElement("dl",{className:"slds-list_horizontal slds-wrap slds-text-body_small"},s.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Value"},"Value"),s.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"$60,000"},"$60,000"),s.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Close Date"},"Close Date"),s.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"Jan 15, 2016"},"Jan 15, 2016"))),s.a.createElement(m,null)),s.a.createElement("dl",{className:"slds-popover__body-list"},s.a.createElement("dt",{className:"slds-m-bottom_small"},s.a.createElement(r.a,{figureLeft:o,flavor:"center"},s.a.createElement("p",{className:"slds-text-heading_small slds-hyphenate"},"Cases (1)"))),s.a.createElement("dd",{className:"slds-m-top_x-small"},s.a.createElement("p",{className:"slds-truncate",title:"Tesla - Anypoint Studios"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Tesla - Anypoint Studios")),s.a.createElement("dl",{className:"slds-list_horizontal slds-wrap slds-text-body_small"},s.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Value"},"Value"),s.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"$60,000"},"$60,000"),s.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Close Date"},"Close Date"),s.a.createElement("dd",{className:"slds-item_detail slds-text-color_weak slds-truncate",title:"Jan 15, 2016"},"Jan 15, 2016"))),s.a.createElement(m,null))))}]}});