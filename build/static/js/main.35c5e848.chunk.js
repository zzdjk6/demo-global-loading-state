(this["webpackJsonpdemo-global-loading"]=this["webpackJsonpdemo-global-loading"]||[]).push([[0],{26:function(e,t,r){e.exports=r(43)},43:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(12),o=r.n(c),u=r(9),i=r(46),s=r(45),l=r(4),f=r(3),m=r.n(f),p=r(7),b=r(8),O=Object(b.createThunkRoutine)("DEMO_ROUTINE1"),d=Object(b.createThunkRoutine)("DEMO_ROUTINE2"),h=Object(b.createThunkRoutine)("DEMO_ROUTINE3"),E=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},v=r(10),j=r(11);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return e.ui.loading},k=Object(j.a)([y],(function(e){return Object.values(e).some((function(e){return e}))}));function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){return e.domainData.error},P=function(e){return Object(j.a)([D],(function(t){return t[e]}))},T=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return k(e)})),r=Object(l.c)((function(e){return(t=O.routineType,Object(j.a)([y],(function(e){return!!e[t]})))(e);var t})),c=Object(l.c)((function(e){return(t=[O.routineType,d.routineType],Object(j.a)([y],(function(e){return t.some((function(t){return e[t]}))})))(e);var t})),o=Object(l.c)((function(e){return P(O.routineType)(e)})),f=Object(l.c)((function(e){return P(d.routineType)(e)})),v=Object(l.c)((function(e){return P(h.routineType)(e)})),w=Object(n.useState)(!1),g=Object(u.a)(w,2),x=g[0],N=g[1];return a.a.createElement("div",{className:"container-fluid pt-3"},a.a.createElement("div",{className:"px-3 mb-3"},a.a.createElement("div",{className:"form-check"},a.a.createElement("label",{className:"form-check-label"},a.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:x,onChange:function(e){N(e.target.checked)}}),"Make Error"))),a.a.createElement("div",{className:"px-3 mb-3"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},a.a.createElement(i.a,{className:"w-100 mb-3",onClick:function(){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(p.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.dispatchRoutine)(r,O,Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(1e3);case 2:if(!e){t.next=4;break}throw new Error("Fetch Data1 Error!");case 4:return t.abrupt("return",1);case 5:case"end":return t.stop()}}),t)}))));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(x)).catch(console.error)}},"Fetch 1")),a.a.createElement("div",{className:"col"},a.a.createElement(i.a,{className:"w-100 mb-3",onClick:function(){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(p.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.dispatchRoutine)(r,d,Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(2e3);case 2:if(!e){t.next=4;break}throw new Error("Fetch Data2 Error!");case 4:return t.abrupt("return",2);case 5:case"end":return t.stop()}}),t)}))));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(x)).catch(console.error)}},"Fetch 2")),a.a.createElement("div",{className:"col"},a.a.createElement(i.a,{className:"w-100 mb-3",onClick:function(){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){var t=Object(p.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.dispatchRoutine)(r,h,Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(3e3);case 2:if(!e){t.next=4;break}throw new Error("Fetch Data3 Error!");case 4:return t.abrupt("return",3);case 5:case"end":return t.stop()}}),t)}))));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(x)).catch(console.error)}},"Fetch 3")))),a.a.createElement("div",{className:"px-3 mb-3"},t&&a.a.createElement("div",{className:"w-100"},a.a.createElement(s.a,{color:"primary"})," Loading..."),r&&a.a.createElement("div",{className:"w-100"},a.a.createElement(s.a,{color:"secondary"})," Loading routine 1..."),c&&a.a.createElement("div",{className:"w-100"},a.a.createElement(s.a,{color:"info"})," Loading routine 1 and 2...")),a.a.createElement("div",{className:"px-3 mb-3"},a.a.createElement("ul",{className:"p-0 m-0"},a.a.createElement("li",null,"Error 1: ",o?o.message:"null"),a.a.createElement("li",null,"Error 2: ",f?f.message:"null"),a.a.createElement("li",null,"Error 3: ",v?v.message:"null"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=r(5),S=r(24),U=r.n(S),F=r(25),C=Object(R.c)({ui:Object(R.c)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=/(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(r);if(!n)return e;var a=Object(u.a)(n,3),c=a[1],o=a[2];return g({},e,Object(v.a)({},c,"REQUEST"===o))}}),domainData:Object(R.c)({demoData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return e},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=/(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(r);if(!n)return e;var a=Object(u.a)(n,3),c=a[1],o=a[2];return N({},e,Object(v.a)({},c,"FAILURE"===o?t.payload:null))}})}),I=Object(R.d)(C,Object(R.a)(F.a,U.a));I.getState(),r(41);o.a.render(a.a.createElement(l.a,{store:I},a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.35c5e848.chunk.js.map