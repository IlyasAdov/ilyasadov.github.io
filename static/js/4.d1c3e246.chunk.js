(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{39:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(2);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},40:function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(6),s=n(5),i=n(0),o=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],b=u[1];return{loading:n,error:l,request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},r(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,r(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),r(!1),b(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){return b(null)}),[])}};e.a=function(){var t=o(),e=t.loading,n=t.error,r=t.request,s=t.clearError,i="https://gateway.marvel.com:443/v1/public/",u="apikey=5c02a0353f46ffbe06fcfc4be6d97d44",l=function(){var t=Object(a.a)(c.a.mark((function t(){var e,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,r("".concat(i,"characters?limit=9&offset=").concat(e,"&").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(j));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(i,"characters/").concat(e,"?").concat(u));case 2:return n=t.sent,t.abrupt("return",j(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(){var e,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,r("".concat(i,"comics?limit=8&offset=").concat(e,"&").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(m));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(i,"comics/").concat(e,"?").concat(u));case 2:return n=t.sent,t.abrupt("return",m(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){return{id:t.id,name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},m=function(t){return{id:t.id,title:t.title,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,pages:t.pageCount,language:t.textObjects[0]?t.textObjects[0].language:null,prices:t.prices.price}};return{loading:e,error:n,clearError:s,getAllCharacters:l,getCharacter:b,getAllComics:p,getComic:f}}},41:function(t,e,n){"use strict";var r=n(10),c=n(13),a=n(14),s=n(15),i=n(0),o=n(39),u=n(2),l=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={error:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(o.a,{}):this.props.children}}]),n}(i.Component);e.a=l},46:function(t,e,n){},47:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);n(46);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(2),s=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})},i=n(41),o=n(7),u=n(5),l=n(0),b=n(11),p=n(39),f=n(22),j=n(40),m=(n(47),function(){var t=Object(l.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(l.useState)(!1),s=Object(u.a)(c,2),i=s[0],m=s[1],d=Object(l.useState)(0),h=Object(u.a)(d,2),v=h[0],O=h[1],g=Object(l.useState)(!1),x=Object(u.a)(g,2),w=x[0],_=x[1],k=Object(j.a)(),y=k.loading,C=k.error,E=k.getAllComics;Object(l.useEffect)((function(){N(v,!0)}),[]),Object(l.useEffect)((function(){return w||i||window.addEventListener("scroll",A),function(){return window.removeEventListener("scroll",A)}}));var N=function(t,e){m(!e),E(t).then(S)},A=Object(l.useCallback)((function(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&N(v,!1)})),S=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat(Object(o.a)(e),Object(o.a)(t))})),m(!1),O((function(e){return e+t.length})),_(e)};var q=function(t){var e=t.map((function(t,e){return Object(a.jsx)("li",{className:"comics__item",children:Object(a.jsxs)(b.b,{to:"/comics/".concat(t.id),children:[Object(a.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(a.jsx)("div",{className:"comics__item-name",children:t.title}),Object(a.jsx)("div",{className:"comics__item-price",children:t.price})]})},t.id)}));return Object(a.jsx)("ul",{className:"comics__grid",children:e})}(n),F=C?Object(a.jsx)(p.a,{}):null,H=y&&!i?Object(a.jsx)(f.a,{}):null;return Object(a.jsxs)("div",{className:"char__list",children:[F,H,q,Object(a.jsx)("button",{className:"button button__main button__long",disabled:i,style:{display:w?"none":"block"},onClick:function(){return N(v)},children:Object(a.jsx)("div",{className:"inner",children:"load more"})})]})});e.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(s,{}),Object(a.jsx)(i.a,{children:Object(a.jsx)(m,{})})]})}}}]);
//# sourceMappingURL=4.d1c3e246.chunk.js.map