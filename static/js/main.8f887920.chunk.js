(this["webpackJsonprecipes-react"]=this["webpackJsonprecipes-react"]||[]).push([[0],{111:function(e,t,c){},112:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(10),s=c.n(n),o=c(17),i=c(12),l=c(143),j=c(146),u=c(148),b=c(164),d=c(114),h=c(149),p=c(2),m=Object(l.a)((function(e){return{nav:{"& > *":{margin:e.spacing(2)}}}}));function O(){var e=m();return Object(p.jsx)("header",{children:Object(p.jsx)(j.a,{position:"sticky",children:Object(p.jsxs)(u.a,{style:{justifyContent:"space-between"},children:[Object(p.jsx)(b.a,{to:"/",component:o.b,color:"inherit",children:"REACT SHOP"}),Object(p.jsxs)(d.a,{className:e.nav,component:"nav",children:[Object(p.jsx)(h.a,{to:"/",component:o.b,color:"inherit",children:"Home"}),Object(p.jsx)(h.a,{to:"/about",component:o.b,color:"inherit",children:"About"}),Object(p.jsx)(h.a,{to:"/contacts",component:o.b,color:"inherit",children:"Contacts"})]})]})})})}var x=c(162);function f(){return Object(p.jsx)("div",{children:"ABOUT PAGE"})}var v=c(18),g=c(31),y=c.n(g),C=c(50),_=c(70),k=c.n(_),w="https://themealdb.com/api/json/v1/".concat("1"),N=k.a.create({baseURL:w});function S(){return(S=Object(C.a)(y.a.mark((function e(){var t,c,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/categories.php",e.prev=1,e.next=4,N.get("/categories.php");case 4:if(t=e.sent,c=t.status,r=t.data.categories,200===c){e.next=9;break}return e.abrupt("return",[]);case 9:return e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(1),console.log("Error:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function B(){return(B=Object(C.a)(y.a.mark((function e(t){var c,r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/filter.php",e.prev=1,e.next=4,N.get("/filter.php",{params:{c:t}});case 4:if(c=e.sent,r=c.status,a=c.data.meals,200===r){e.next=9;break}return e.abrupt("return",[]);case 9:return e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(1),console.log("Error:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function M(){return(M=Object(C.a)(y.a.mark((function e(t){var c,r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/lookup.php",e.prev=1,e.next=4,N.get("/lookup.php",{params:{i:t}});case 4:if(c=e.sent,r=c.status,a=c.data.meals,200===r){e.next=9;break}return e.abrupt("return",null);case 9:return e.abrupt("return",a[0]);case 12:e.prev=12,e.t0=e.catch(1),console.log("Error:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var E=c(155),A=c(154),I=c(150),T=c(151),L=c(152),P=c(153);var F=function(e){var t=e.item;return Object(p.jsxs)(I.a,{className:"card",elevation:2,children:[Object(p.jsx)("div",{className:"card__media",children:Object(p.jsx)(T.a,{component:"img",alt:t.strMeal,image:t.strMealThumb})}),Object(p.jsx)(L.a,{className:"card__content",children:Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.strMeal})}),Object(p.jsx)(P.a,{children:Object(p.jsx)(b.a,{to:"/recipe/".concat(t.idMeal),component:o.b,color:"primary",children:"More details"})})]})};var G=function(e){var t=e.meals;return Object(p.jsx)(A.a,{container:!0,className:"list",spacing:2,alignItems:"stretch",children:t.map((function(e){return Object(p.jsx)(A.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(p.jsx)(F,{item:e})},e.idMeal)}))})};function R(){var e=Object(i.f)().goBack,t=Object(i.h)().name,c=a.a.useState([]),r=Object(v.a)(c,2),n=r[0],s=r[1],o=a.a.useState(!1),l=Object(v.a)(o,2),j=l[0],u=l[1];return a.a.useEffect((function(){u(!0),function(e){return B.apply(this,arguments)}(t).then((function(e){return s(e)})).finally((function(){return u(!1)}))}),[t]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{variant:"contained",color:"primary",style:{marginBottom:24},onClick:e,children:"Go Back"}),j?Object(p.jsx)(E.a,{}):Object(p.jsx)(G,{meals:n})]})}function Y(){return Object(p.jsx)("div",{children:"CONTACT PAGE"})}var D=function(e){var t=e.item;return Object(p.jsxs)(I.a,{className:"card",elevation:2,children:[Object(p.jsx)("div",{className:"card__media",children:Object(p.jsx)(T.a,{component:"img",alt:t.strCategory,image:t.strCategoryThumb})}),Object(p.jsxs)(L.a,{className:"card__content",children:[Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.strCategory}),Object(p.jsxs)(d.a,{variant:"body2",color:"textSecondary",className:"card__desc",children:[t.strCategoryDescription.slice(0,100),"..."]})]}),Object(p.jsx)(P.a,{children:Object(p.jsx)(b.a,{to:"/categories/".concat(t.strCategory.toLowerCase()),component:o.b,color:"primary",children:"More details"})})]})};var H=function(e){var t=e.categories,c=void 0===t?[]:t;return Object(p.jsx)(A.a,{container:!0,className:"list",spacing:2,alignItems:"stretch",children:c.map((function(e){return Object(p.jsx)(A.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(p.jsx)(D,{item:e})},e.idCategory)}))})},J=c(163),U=c(71),z=c.n(U);var K=function(e){var t=e.onSearch,c=a.a.useRef(null),r=a.a.useState(""),n=Object(v.a)(r,2),s=n[0],o=n[1];return a.a.useEffect((function(){t(s)}),[s]),Object(p.jsxs)("div",{className:"search",children:[Object(p.jsx)("div",{className:"search__icon",children:Object(p.jsx)(z.a,{})}),Object(p.jsx)(J.a,{inputRef:c,placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onKeyDown:function(e){13===e.keyCode&&o(c.current.value)}}),Object(p.jsx)("div",{className:"search__btn",children:Object(p.jsx)(b.a,{variant:"contained",color:"primary",onClick:function(){return o(c.current.value)},children:"Search"})})]})};function W(){var e=a.a.useState([]),t=Object(v.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(v.a)(n,2),o=s[0],l=s[1],j=a.a.useState(!0),u=Object(v.a)(j,2),b=u[0],d=u[1],h=Object(i.g)(),m=h.pathname,O=h.search,x=Object(i.f)().push;return a.a.useEffect((function(){(function(){return S.apply(this,arguments)})().then((function(e){r(e),l(O?e.filter((function(e){return e.strCategory.toLowerCase().includes(O.split("=")[1].toLowerCase())})):e),d(!1)}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)(K,{onSearch:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),x({pathname:m,search:e?"?search=".concat(e):null})}}),b?Object(p.jsx)(E.a,{}):Object(p.jsx)(H,{categories:o})]})}var q=c(5),Q=c(156),V=c(157),X=c(73),Z=c(158),$=c(159),ee=c(160),te=c(161),ce=Object(q.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Q.a);var re=function(e){var t=e.recipe,c=a.a.useState([]),r=Object(v.a)(c,2),n=r[0],s=r[1];return a.a.useEffect((function(){for(var e=[],c=1;c<=20;c++){if(!t["strIngredient".concat(c)])break;e.push({id:"strIngredient".concat(c),name:t["strIngredient".concat(c)],value:t["strMeasure".concat(c)]})}s(e)}),[t]),Object(p.jsx)(V.a,{component:X.a,children:Object(p.jsxs)(Z.a,{size:"small",children:[Object(p.jsx)($.a,{children:Object(p.jsxs)(Q.a,{children:[Object(p.jsx)(ee.a,{children:"Ingredient"}),Object(p.jsx)(ee.a,{children:"Measure"})]})}),Object(p.jsx)(te.a,{children:n.map((function(e){return Object(p.jsxs)(ce,{children:[Object(p.jsx)(ee.a,{component:"th",scope:"row",children:e.name}),Object(p.jsx)(ee.a,{children:e.value})]},e.id)}))})]})})};function ae(){var e=Object(i.h)().id,t=Object(i.f)().goBack,c=a.a.useState({}),r=Object(v.a)(c,2),n=r[0],s=r[1],o=a.a.useState(!1),l=Object(v.a)(o,2),j=l[0],u=l[1];return a.a.useEffect((function(){u(!0),function(e){return M.apply(this,arguments)}(e).then((function(e){s(e)})).finally((function(){return u(!1)}))}),[e]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{variant:"contained",color:"primary",style:{marginBottom:24},onClick:t,children:"Go Back"}),j?Object(p.jsx)(E.a,{}):Object(p.jsxs)("div",{className:"recipe",children:[Object(p.jsx)(d.a,{gutterBottom:!0,variant:"h4",component:"h1",children:n.strMeal}),Object(p.jsxs)(d.a,{gutterBottom:!0,variant:"subtitle1",color:"textSecondary",component:"h3",children:["category: ",n.strCategory]}),n.strArea?Object(p.jsxs)(d.a,{gutterBottom:!0,variant:"subtitle1",color:"textSecondary",component:"h3",children:["area: ",n.strArea]}):null,Object(p.jsx)("div",{className:"recipe__image mb16",children:Object(p.jsx)("img",{src:n.strMealThumb,alt:n.strMeal})}),Object(p.jsx)(d.a,{className:"recipe__desc",gutterBottom:!0,variant:"body1",component:"p",children:n.strInstructions}),Object(p.jsx)("div",{className:"recipe__table mb16",children:Object(p.jsx)(re,{recipe:n})}),n.strYoutube?Object(p.jsx)("div",{className:"recipe__video",children:Object(p.jsx)("iframe",{src:n.strYoutube.replace("watch?v=","embed/"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):null]})]})}function ne(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Page not found"})})}var se=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(o.a,{basename:"/recipes-react",children:[Object(p.jsx)(O,{}),Object(p.jsx)("main",{className:"main",children:Object(p.jsx)(x.a,{maxWidth:"lg",children:Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{exact:!0,path:"/",component:W}),Object(p.jsx)(i.a,{path:"/categories/:name",component:R}),Object(p.jsx)(i.a,{path:"/recipe/:id",component:ae}),Object(p.jsx)(i.a,{path:"/about",component:f}),Object(p.jsx)(i.a,{path:"/contacts",component:Y}),Object(p.jsx)(i.a,{component:ne})]})})})]})})};c(111);s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(se,{})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.8f887920.chunk.js.map