(this["webpackJsonpdemo-global-loading"]=this["webpackJsonpdemo-global-loading"]||[]).push([[0],{26:function(e,t,r){e.exports=r(43)},43:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(11),o=r.n(c),i=r(8),u=r(46),l=r(45),s=r(3),m=r(5),b=r.n(m),f=r(15),O=r(7),p=Object(O.createThunkRoutine)("DEMO_ROUTINE1"),E=Object(O.createThunkRoutine)("DEMO_ROUTINE2"),h=Object(O.createThunkRoutine)("DEMO_ROUTINE3"),d=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))},j=Object(O.getThunkActionCreator)(p,Object(f.a)(b.a.mark((function e(){var t,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.next=3,d(1e3);case 3:if(!t){e.next=5;break}throw new Error("Fetch Data1 Error!");case 5:return e.abrupt("return",1);case 6:case"end":return e.stop()}}),e)})))),v=Object(O.getThunkActionCreator)(E,Object(f.a)(b.a.mark((function e(){var t,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.next=3,d(2e3);case 3:if(!t){e.next=5;break}throw new Error("Fetch Data2 Error!");case 5:return e.abrupt("return",2);case 6:case"end":return e.stop()}}),e)})))),g=Object(O.getThunkActionCreator)(h,Object(f.a)(b.a.mark((function e(){var t,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.next=3,d(3e3);case 3:if(!t){e.next=5;break}throw new Error("Fetch Data3 Error!");case 5:return e.abrupt("return",3);case 6:case"end":return e.stop()}}),e)})))),w=r(9),y=r(10);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(e){return e.ui.loading},x=Object(y.a)([T],(function(e){return Object.values(e).some((function(e){return e}))}));function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach((function(t){Object(w.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(e){return e.domainData.error},R=function(e){return Object(y.a)([S],(function(t){return t[e]}))},C=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return x(e)})),r=Object(s.c)((function(e){return(t=p.routineType,Object(y.a)([T],(function(e){return!!e[t]})))(e);var t})),c=Object(s.c)((function(e){return(t=[p.routineType,E.routineType],Object(y.a)([T],(function(e){return t.some((function(t){return e[t]}))})))(e);var t})),o=Object(s.c)((function(e){return R(p.routineType)(e)})),m=Object(s.c)((function(e){return R(E.routineType)(e)})),b=Object(s.c)((function(e){return R(h.routineType)(e)})),f=Object(n.useState)(!1),O=Object(i.a)(f,2),d=O[0],w=O[1];return a.a.createElement("div",{className:"container-fluid pt-3"},a.a.createElement("div",{className:"px-3 mb-3"},a.a.createElement("div",{className:"form-check"},a.a.createElement("label",{className:"form-check-label"},a.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:d,onChange:function(e){w(e.target.checked)}}),"Make Error"))),a.a.createElement("div",{className:"px-3 mb-3"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{className:"w-100 mb-3",onClick:function(){return e(j(d)).catch(console.error)}},"Fetch 1")),a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{className:"w-100 mb-3",onClick:function(){return e(v(d)).catch(console.error)}},"Fetch 2")),a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{className:"w-100 mb-3",onClick:function(){return e(g(d)).catch(console.error)}},"Fetch 3")))),a.a.createElement("div",{className:"px-3 mb-3"},t&&a.a.createElement("div",{className:"w-100"},a.a.createElement(l.a,{color:"primary"})," Loading..."),r&&a.a.createElement("div",{className:"w-100"},a.a.createElement(l.a,{color:"secondary"})," Loading routine 1..."),c&&a.a.createElement("div",{className:"w-100"},a.a.createElement(l.a,{color:"info"})," Loading routine 1 or 2...")),a.a.createElement("div",{className:"px-3 mb-3"},a.a.createElement("ul",{className:"p-0 m-0"},a.a.createElement("li",null,"Error 1: ",o?o.message:"null"),a.a.createElement("li",null,"Error 2: ",m?m.message:"null"),a.a.createElement("li",null,"Error 3: ",b?b.message:"null"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=r(4),F=r(24),I=r.n(F),A=r(25),L=Object(U.c)({ui:Object(U.c)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=/(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(r);if(!n)return e;var a=Object(i.a)(n,3),c=a[1],o=a[2];return N({},e,Object(w.a)({},c,"REQUEST"===o))}}),domainData:Object(U.c)({demoData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return e},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=/(.*)\/(REQUEST|SUCCESS|FAILURE)/.exec(r);if(!n)return e;var a=Object(i.a)(n,3),c=a[1],o=a[2];return P({},e,Object(w.a)({},c,"FAILURE"===o?t.payload:null))}})}),M=Object(U.d)(L,Object(U.a)(A.a,I.a));M.getState(),r(41);o.a.render(a.a.createElement(s.a,{store:M},a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8afdf334.chunk.js.map