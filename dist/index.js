!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}("undefined"!=typeof self?self:this,function(){return n={},o.m=e=[function(t,r,e){"use strict";e.r(r);var o=new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i),a=function(t,r){var e=1<arguments.length&&void 0!==r?r:1,n=o.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16),a:e}:void 0},i=function(t){var r=t.r,e=t.g,n=t.b,o=t.a,i=void 0===o?1:o;return 1!==i?"rgba(".concat(r,", ").concat(e,", ").concat(n,", ").concat(i,")"):"rgb(".concat(r,", ").concat(e,", ").concat(n,")")},n=function(t){return null!=t},f=function(t,r,e){return t<(1<arguments.length&&void 0!==r?r:0)?360+t:(2<arguments.length&&void 0!==e?e:360)<t?t-360:t};function l(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],n=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(n=(c=u.next()).done)&&(e.push(c.value),!r||e.length!==r);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return e}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(t){return Number("".concat(t).trim().endsWith("%")?t.trim().replace("%",""):t)}function c(t){return t<=0||Math.abs(t)<=h?0:t}function u(t){return{x:c(Math.cos(t)),y:c(Math.sin(t))}}function p(t){return t*Math.PI/180}var b=function(t){var r=t.x1,e=t.x2,n=t.y1,o=t.y2,i=l([r,e,n,o].map(s),4);r=i[0],e=i[1],n=i[2];var c=e-r,u=(o=i[3])-n;if(0==u)return e<r?270:90;if(0==c)return o<n?0:180;var a=Math.atan2(u,c);return f(180*a/Math.PI+90)},y="style",d="stop-color",g="stop-opacity",v="offset",m=["x1","x2","y1","y2"],O=function(t){return Array.from(t.querySelectorAll("stop")).map(function(t){var r,e,n=w(t.getAttribute(v));if(t.hasAttribute(d)&&(r=t.getAttribute(d),e=t.getAttribute(g))){var o=a(r);if(o){var i=o.r,c=o.g,u=o.b;r="rgba(".concat(i,", ").concat(c,", ").concat(u,", ").concat(e,")")}}!r&&t.hasAttribute(y)&&(r=function(t){var r=document.createElement("div");return r.setAttribute("style",t),r.style}(t.getAttribute(y))[d]);return{offset:Number(n),color:r}})},j=360,h=Math.pow(2,-52),P=function(t){var r=(j-(0<arguments.length&&void 0!==t?t:0))%j;return{startPoint:u(p(90-r)),endPoint:u(p(270-r))}},w=function(t){return(t=t.toString().trim()).endsWith("%")?Number(t.replace("%","")):100*Number(t)};function S(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),e.push.apply(e,n)}return e}function x(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var A=new DOMParser;function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),e.push.apply(e,n)}return e}function D(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var I={string:function(t){var r=A.parseFromString(t,"image/svg+xml").querySelector("linearGradient");if(!r)throw new Error("Couldn't parse svg string into linearGradient SVGElement");return function(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?S(e,!0).forEach(function(t){x(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):S(e).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}({},function(e){return m.reduce(function(t,r){return Object.assign(t,x({},r,e.getAttribute(r)))},{})}(r),{stops:O(r).filter(function(t){var r=t.offset,e=t.color;return n(r)&&n(e)})})},object:function(t){return function(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(e,!0).forEach(function(t){D(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):E(e).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}({},t,{stops:t.stops.map(function(t){var r=t.offset,e=t.color,n=t.opacity;return{offset:w(r),color:i(a(e,n))}})})}},_={getBackground:function(t){var r=M(t),e=I[r];if(!e)throw new Error("Cannot parse non JSON / SVG String input");var n=(t=e(t)).stops||t.children,o=b(t);return{angle:o,background:function(t){var r=t.angle,e=t.stops;return"linear-gradient(".concat(r,"deg, ").concat(e.map(function(t){return"".concat(t.color," ").concat(t.offset,"%")}).join(", "),")")}({angle:o,stops:n})}},getGradientCords:function(t){var r=P(t),e=r.startPoint,n=r.endPoint;return{x1:e.x,y1:e.y,x2:n.x,y2:n.y}}};r.default=_}],o.c=n,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(r,t){if(1&t&&(r=o(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)o.d(e,n,function(t){return r[t]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=0);function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var e,n});
//# sourceMappingURL=index.js.map