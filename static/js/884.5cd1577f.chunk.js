"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{713:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="a438b3320e0856ef78f03a44c35f6579",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f={getMoviesDay:u,getMoviesQuery:o,getMoviesDetails:p,getMoviesCast:l,getMoviesReviews:v};t.Z=f},884:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),u=n(689),o=n(87),p=n(713),l=n(184);function v(){var e,t,n=(0,i.useState)([]),c=(0,a.Z)(n,2),v=c[0],f=c[1],d=(0,u.UO)().movieId,h=null!==(e=null===(t=(0,u.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getMoviesDetails(d);case 2:t=e.sent,f(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();d&&e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{type:"button",children:(0,l.jsx)(o.rU,{to:h,children:"Go Back"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:v.poster_path?"https://image.tmdb.org/t/p/w500".concat(v.poster_path," "):"https://picsum.photos/500/300?image=358",alt:v.title}),(0,l.jsxs)("h2",{children:[v.title," (",new Date(v.release_date).getFullYear(),")"]}),(0,l.jsxs)("p",{children:["User Score: ",(10*v.vote_average).toFixed(0),"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:v.overview}),(0,l.jsx)("h4",{children:"Genres"}),(0,l.jsx)("ul",{children:v.genres?v.genres.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)})):""})]}),(0,l.jsx)("p",{children:"Aditional information"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o.rU,{to:"/movies/".concat(d,"/cast"),children:"Cast"}),(0,l.jsx)(o.rU,{to:"/movies/".concat(d,"/reviews"),children:"Review"})]}),(0,l.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=884.5cd1577f.chunk.js.map