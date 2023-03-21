"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[231,364],{2364:function(n,r,t){t.r(r),t.d(r,{default:function(){return l}});var e="moviesList_movieLink__6WBsI",a=t(1087),u=t(7689),c=t(890),s=t(4852),i=t(493),o=t(184),f=function(n){var r=n.movies,t=(0,u.TH)(),f=r.map((function(n){var r;return(0,o.jsx)(c.Z,{variant:"list",noWrap:!0,sx:{mr:2,display:{xs:"none",md:"flex"}},children:(0,o.jsx)(s.ZP,{children:(0,o.jsx)(a.rU,{className:e,state:{from:t},to:"/movies/".concat(n.id),children:null!==(r=n.title)&&void 0!==r?r:n.name})})},n.id)}));return(0,o.jsx)(i.Z,{children:f})},l=f;f.defaultProps={movies:[]}},8231:function(n,r,t){t.r(r),t.d(r,{default:function(){return Z}});var e=t(5861),a=t(9439),u=t(4687),c=t.n(u),s=t(766),i=t(4942),o=t(1413),f="searchForm_btn__ZOFJW",l=t(2791),v=t(295),p=t(184),d=function(n){var r=n.onSubmit,t=(0,l.useState)({search:""}),e=(0,a.Z)(t,2),u=e[0],c=e[1];return(0,p.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(u),c({search:""})},children:[(0,p.jsx)(v.Z,{variant:"standard",name:"search",value:u.search,onChange:function(n){var r=n.target,t=r.name,e=r.value;c((0,o.Z)((0,o.Z)({},u),{},(0,i.Z)({},t,e)))},size:"normal",margin:"normal",type:"text",fullWidth:!0,required:!0,label:"Enter the movie name"}),(0,p.jsx)("button",{className:f,children:"Search"})]})},m=t(1087),h=t(8197),x=t(2364),Z=function(){var n=(0,l.useState)({items:[],error:null}),r=(0,a.Z)(n,2),t=r[0],u=r[1],i=(0,m.lr)(),o=(0,a.Z)(i,2),f=o[0],v=o[1],Z=f.get("search");(0,l.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.qF)(Z);case 3:r=n.sent,t=r.results,u({items:t}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();Z&&n()}),[Z]);var b=t.items;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{onSubmit:function(n){var r=n.search;v({search:r})}}),b.length>0&&(0,p.jsx)(x.default,{movies:b}),(0,p.jsx)(s.T,{})]})}},766:function(n,r,t){t.d(r,{T:function(){return i}});var e=t(7689),a=t(6151),u=t(2017),c=t(890),s=t(184),i=function(){var n,r=(0,e.s0)(),t=(null===(n=(0,e.TH)().state)||void 0===n?void 0:n.from)||"/";return(0,s.jsx)(a.Z,{variant:"contained",onClick:function(){return r(t)},startIcon:(0,s.jsx)(u.Z,{}),sx:{m:2},children:(0,s.jsx)(c.Z,{variant:"button",noWrap:!0,sx:{mr:2,display:{xs:"none",md:"flex"}},children:"Back"})})}},8197:function(n,r,t){t.d(r,{Df:function(){return s},M1:function(){return f},TP:function(){return i},qF:function(){return l},tx:function(){return o}});var e=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";c.Z.defaults.params={api_key:"d0cbba0e8b5863a2012bf39c965ec970",landuage:"en-US",page:"1"};var s=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?");case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"?"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/reviews?"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/credits?"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?&include_adult=false&query=".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=231.cd457e0b.chunk.js.map