(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},59:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(31),a=s.n(n),r=(s(37),s(8)),o=s(2),l=(s(38),s(0));var j=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:'"Freedom is the freedom to say that two plus to make four. If that is granted, all else follows."'}),Object(l.jsx)("span",{children:" - George Orwell, 1984 "})]})},m=s(14),d=s.n(m),h=s(16),b=s(10),u=s(11),v=s(13),O=s(12),x=s(17),p=s.n(x);s(59);var _=function(e){var t=e.id,s=e.title,i=e.year,c=e.summary,n=e.summary_detail,a=e.poster,o=e.genres,j=e.big_poster,m=e.rating,d=e.runtime;return c.length>=180&&(c=c.slice(0,180)+"..."),Object(l.jsx)("div",{className:"movie",children:Object(l.jsx)("div",{className:"caption",children:Object(l.jsxs)(r.b,{to:{pathname:"/movie-detail",state:{id:t,year:i,title:s,summary:c,summary_detail:n,poster:a,genres:o,big_poster:j,rating:m,runtime:d}},children:[Object(l.jsx)("img",{src:a,alt:s,title:s}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:s}),Object(l.jsx)("h5",{className:"movie__year",children:i}),Object(l.jsx)("p",{className:"movie__summary",children:c}),Object(l.jsx)("ul",{className:"movie__genres",children:o.map((function(e,t){return Object(l.jsx)("li",{className:"movie__genres",children:e},t)}))})]})]})})})},g=(s(65),function(e){Object(v.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(b.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(h.a)(d.a.mark((function t(){var s,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,i=s.data.data.movies,e.setState({movies:i,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return console.log({movies:s}),Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,summary_detail:e.summary,poster:e.medium_cover_image,genres:e.genres,big_poster:e.large_cover_image,rating:e.rating,runtime:e.runtime},e.id)}))})})}}]),s}(c.a.Component));s(66);var f=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})},y=(s(67),function(e){Object(v.a)(s,e);var t=Object(O.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"movie__detail",children:[Object(l.jsx)("div",{className:"detailbox1",children:Object(l.jsx)("img",{src:e.state.big_poster,alt:e.state.title,title:e.state.title})}),Object(l.jsxs)("div",{className:"detailbox2",children:[Object(l.jsx)("div",{className:"movie__info__title",children:Object(l.jsx)("span",{children:"Title"})}),Object(l.jsx)("div",{className:"movie__info__year",children:Object(l.jsx)("span",{children:"Year"})}),Object(l.jsx)("div",{className:"movie__info__summary",children:"Summary"}),Object(l.jsx)("div",{className:"movie__info__rating",children:"rating"}),Object(l.jsx)("div",{className:"movie__info__runtime",children:"runtime"}),Object(l.jsx)("div",{className:"movie__info__genres",children:"genres"})]}),Object(l.jsxs)("div",{className:"detailbox3",children:[Object(l.jsxs)("div",{className:"movie__info__title",children:[e.state.title," "]}),Object(l.jsx)("div",{className:"movie__info__year",children:e.state.year}),Object(l.jsx)("div",{className:"movie__info__summary",children:e.state.summary_detail}),Object(l.jsxs)("div",{className:"movie__info__rating",children:[e.state.rating," / 10.0"]}),Object(l.jsxs)("div",{className:"movie__info__runtime",children:[e.state.runtime," min"]}),Object(l.jsx)("div",{className:"movie__info__genres",children:e.state.genres.map((function(e,t){return Object(l.jsx)("li",{className:"movie__genres",children:e},t)}))})]})]})}):null}}]),s}(c.a.Component));s(68);var N=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{children:"HS Cinema : Top 20 movies"}),Object(l.jsxs)("h2",{children:["There are 20 moives that have high rating from people all over the world",Object(l.jsx)("br",{}),"You can find popular movies here! Get your chance to enjoy movies"]}),Object(l.jsx)("h5",{children:"All of the information is from YTS.mx/api data list"})]})};s(69);var w=function(e){e.id;var t=e.title,s=e.poster;return Object(l.jsx)("ul",{class:"prod-list",children:Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:s,alt:"",title:""}),Object(l.jsxs)("div",{class:"caption",children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:"summary"}),Object(l.jsx)("p",{children:"year"})]})]})})},k=s.p+"static/media/tower.b5db9fd6.jpg",S=function(e){Object(v.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(b.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getSuggestions=function(){var t=Object(h.a)(d.a.mark((function t(s){var i,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/movie_suggestions.json?movie_id="+s);case 2:i=t.sent,c=i.data.data.movies,e.setState({movies:c,isLoading:!1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state?s.push("/"):this.getSuggestions(t.state.id)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies,i=e.test;return console.log({movies:s}),console.log({test:i}),Object(l.jsx)("section",{className:"container",children:t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Suggestions"}),Object(l.jsxs)("ul",{class:"prod-list",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:k,alt:"",title:""}),Object(l.jsxs)("div",{class:"caption",children:[Object(l.jsx)("h2",{children:"movie 1"}),Object(l.jsx)("p",{children:"summary"}),Object(l.jsx)("p",{children:"year"})]})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:k,alt:"",title:""}),Object(l.jsxs)("div",{class:"caption",children:[Object(l.jsx)("h2",{children:"movie 2"}),Object(l.jsx)("p",{children:"summary"}),Object(l.jsx)("p",{children:"year"})]})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:k,alt:"",title:""}),Object(l.jsxs)("div",{class:"caption",children:[Object(l.jsx)("h2",{children:"movie 3"}),Object(l.jsx)("p",{children:"summary"}),Object(l.jsx)("p",{children:"year"})]})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:k,alt:"",title:""}),Object(l.jsxs)("div",{class:"caption",children:[Object(l.jsx)("h2",{children:"movie 4"}),Object(l.jsx)("p",{children:"summary"}),Object(l.jsx)("p",{children:"year"})]})]})]})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Suggestions"}),Object(l.jsx)("div",{className:"container",children:s.map((function(e){return Object(l.jsx)(w,{id:e.id,title:e.title,poster:e.medium_cover_image},e.id)}))})]})})}}]),s}(c.a.Component);var L=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie-detail",component:y}),Object(l.jsx)(o.a,{path:"/movie-detail",component:S})]})};a.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.5a343d71.chunk.js.map