"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[229],{713:function(e,t,n){var r=n(861),a=n(757),s=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="a438b3320e0856ef78f03a44c35f6579",i=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(u,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l={getMoviesDay:i,getMoviesQuery:o,getMoviesDetails:p,getMoviesCast:f,getMoviesReviews:v};t.Z=l},229:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),a=n(439),s=n(757),c=n.n(s),u=n(713),i=n(791),o=n(373),p=n(184);function f(){var e,t=(0,i.useState)(null!==(e=JSON.parse(sessionStorage.getItem("movies-day")))&&void 0!==e?e:[]),n=(0,a.Z)(t,2),s=n[0],f=n[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.getMoviesDay();case 2:t=e.sent,f(t.data.results),sessionStorage.setItem("movies-day",JSON.stringify(t.data.results));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();sessionStorage.getItem("movies-day")||e()}),[]),(0,p.jsx)(o.W2,{children:(0,p.jsxs)("main",{children:[(0,p.jsx)(o.U3,{children:"Trending today"}),(0,p.jsx)("div",{children:(0,p.jsx)(o.OM,{children:s.map((function(e){var t=e.title,n=e.id,r=e.poster_path;return(0,p.jsx)(o.XC,{children:(0,p.jsxs)(o.jJ,{to:"movies/".concat(n),children:[(0,p.jsx)(o.ic,{src:"https://image.tmdb.org/t/p/w500".concat(r," "),alt:t,width:200,height:400}),(0,p.jsx)(o.Ye,{children:t})]})},n)}))})})]})})}}}]);
//# sourceMappingURL=229.5801bb77.chunk.js.map