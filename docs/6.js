(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n(93);t.a=function(e,t){t?console.log("Axios fail: ".concat(e.message," (").concat(t,")")):console.log("Axios fail: ".concat(e.message))}},171:function(e,t,n){var r=n(60),a=n(172);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},172:function(e,t,n){(t=n(61)(!1)).push([e.i,'.table-display .label {\n    font-weight: bold;\n    text-align: right;\n}\n\n.table-display .label:after {\n    content: ": ";\n    text-align: left;\n\tfont-weight: bold;\n}\n\n.table-display .value {\n\tfont-weight: normal;\n}\n\n.spin-central {\n    text-align: center;\n}\n',""]),e.exports=t},189:function(e,t,n){"use strict";n.r(t);n(56),n(57),n(93),n(22),n(95),n(58),n(33),n(55),n(34),n(59),n(94);var r=n(0),a=n.n(r),o=n(142),i=n.n(o),u=n(7),c=(n(171),n(35),n(97),n(96),n(143));function l(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}var p=Object(u.f)().base,d={0:"First reference",1:"Subsequent reference",2:"Id. reference",3:"Id. reference with locator"},b={},y={},h=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r,a,o,u,s,f,h,v,m,g,w,j,x,S,k,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,t.jurisdiction&&(a=t.jurisdiction.match(/^([0-9][0-9][0-9])/))&&(r=parseInt(a[1])),"legal_case"!==t.type||!t.jurisdiction||!t.authority){e.next=14;break}if(!r){e.next=14;break}if(o=t.jurisdiction.slice(3,3+r),u=o.split(":")[0],y[o]){e.next=11;break}return e.next=9,i()({method:"get",url:"".concat(p,"/courtMaps/").concat(u,".json")}).catch((function(e){return Object(c.a)(e)}));case 9:s=e.sent,y[u]=s.data;case 11:f=y[u],(h=f[o][t.authority])&&(t.authority=h);case 14:if(r&&(2==(v=t.jurisdiction.slice(r+3).split("|")).length?t.jurisdiction=v.join("|"):t.jurisdiction=v.slice(1).join("|")),b[t.type]){e.next=20;break}return e.next=18,i()({method:"get",url:"".concat(p,"/labelMaps/").concat(t.type,".json")});case 18:s=e.sent,b[t.type]=s.data;case 20:m=b[t.type],g=[],e.t0=regeneratorRuntime.keys(t);case 23:if((e.t1=e.t0()).done){e.next=31;break}if("id"!==(w=e.t1.value)){e.next=27;break}return e.abrupt("continue",23);case 27:if("object"==typeof(j=t[w]))if(void 0===j.length)j["date-parts"]&&j["date-parts"][0]&&j["date-parts"][0][0]?j=j["date-parts"].map((function(e){return e.join("-")})).join("/"):j.literal&&(j=j.literal),g.push({label:m[w],value:j});else{x=m[w],S=l(j);try{for(S.s();!(k=S.n()).done;)A=k.value,g.push({label:x,value:[A.family,A.given].join(", ")}),x=""}catch(e){S.e(e)}finally{S.f()}}else"type"===w?g.push({label:"Item Type",value:m[j]}):"admin-flag"===w||"gazette-flag"===w?g.push({label:m[w],value:"✓"}):g.push({label:m[w],value:j});e.next=23;break;case 31:return n.locator&&g.push({label:"Locator",value:n.locator}),g.push({label:"Position",value:d[n.position]}),n["suppress-author"]&&g.push({label:"Suppress Author",value:"✓"}),e.abrupt("return",g);case 35:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){f(o,r,a,i,u,"next",e)}function u(e){f(o,r,a,i,u,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),v=n(65),m=n.n(v);n(100);function g(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=x(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function w(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=Object(u.f)().base,A={};t.default=function(e){var t=j(Object(r.useState)([]),2),n=t[0],o=t[1],u=Object(r.useCallback)((function(e){return o((function(t){return e}))}),[]);return Object(r.useEffect)((function(){(function(){var t,n=(t=regeneratorRuntime.mark((function t(){var n,r,a,o,c,l,s,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.citationInfo["citation-items"],r=[],a=g(n),t.prev=3,a.s();case 5:if((o=a.n()).done){t.next=19;break}if(c=o.value,!A[c.id]){t.next=11;break}s=A[c.id],t.next=16;break;case 11:return t.next=13,i()({url:"".concat(k,"itemdata/").concat(c.id,".json")});case 13:l=t.sent,s=l.data,A[c.id]=s;case 16:r.push(s);case 17:t.next=5;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(3),a.e(t.t0);case 24:return t.prev=24,a.f(),t.finish(24);case 27:return window.localStorage.setItem("cites_metadata",JSON.stringify(r)),window.localStorage.setItem("cites_info",JSON.stringify(n)),t.next=31,h(r[0],n[0]);case 31:f=t.sent,u(f);case 33:case"end":return t.stop()}}),t,null,[[3,21,24,27]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(e){w(o,r,a,i,u,"next",e)}function u(e){w(o,r,a,i,u,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}})()()}),[]),n.length?a.a.createElement("table",{className:"table-display"},a.a.createElement("tbody",null,n.map((function(e){return a.a.createElement("tr",{key:e.label},a.a.createElement("td",{className:"label"},e.label),a.a.createElement("td",{className:"value"},e.value))})))):a.a.createElement(m.a,{className:"black-wheel"})}}}]);