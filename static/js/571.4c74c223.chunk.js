"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{571:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),a=t(439),u=t(757),c=t.n(u),s="reviews_reviewsList__w60+q",i="reviews_author__URyxt",o=t(197),p=t(791),f=t(689),l=t(184),h=function(){var e=(0,p.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],h=(0,p.useState)(!1),v=(0,a.Z)(h,2),d=v[0],x=v[1],g=(0,p.useState)(null),w=(0,a.Z)(g,2),m=w[0],k=w[1],_=(0,f.UO)().id;return(0,p.useEffect)((function(){if(_){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,o.tx)(_);case 4:n=e.sent,t=n.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),u(t),x(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),k(!0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]),(0,l.jsxs)(l.Fragment,{children:[0===t.length&&(0,l.jsx)("p",{children:"We don't have any reviews for this movie"}),t.length>0&&(0,l.jsx)("ul",{className:s,children:t.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h2",{className:i,children:["Author: ",e.author]}),(0,l.jsx)("p",{children:e.content})]},e.id)}))}),d&&(0,l.jsx)("p",{children:"Loading..."}),m&&(0,l.jsx)("p",{children:"Error!"})]})}},197:function(e,n,t){t.d(n,{Df:function(){return i},M1:function(){return f},TP:function(){return o},qF:function(){return l},tx:function(){return p}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="d0cbba0e8b5863a2012bf39c965ec970",i=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=571.4c74c223.chunk.js.map