(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(e,t,n){"use strict";n.r(t);n(49),n(29),n(30),n(13),n(94),n(97);var a=n(0),r=n.n(a),c=n(202),i=n(204),l=function(e){var t=e.children;return Object(a.createElement)("div",{},[Object(a.createElement)(c.a,{},[]),Object(a.createElement)(i.a)].concat(t))},o=n(198),u=n.n(o),s=n(224),m=n(225),d=n.n(m),f=n(227),g=n.n(f);g.a.overrideThemeStyles=function(){return{}};var p=new d.a(g.a),b=g.a.headerFontFamily,h=p.scale,v=n(200),x=n(193),E=n.n(x);function w(){var e=M(["\n  &:last-child {\n    color: ",";\n    background: ",";\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n"]);return w=function(){return e},e}function y(){var e=M(["\n  ","\n"]);return y=function(){return e},e}function j(){var e=M(["\n  ","\n"]);return j=function(){return e},e}function N(){var e=M(["\n  font-family: ",";\n  ",";\n  font-weight: bold;\n  margin: 0;\n"]);return N=function(){return e},e}function O(){var e=M(["\n  font-family: ",";\n  ",";\n"]);return O=function(){return e},e}function k(){var e=M(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  display: flex;\n  align-items: center;\n  align-content: center;\n"]);return k=function(){return e},e}function I(){var e=M(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: black;\n  opacity: 0.4;\n"]);return I=function(){return e},e}function S(){var e=M(["\n  position: relative;\n  height: 80vh;\n  overflow: hidden;\n  color: ",";\n  &:nth-last-child(2) {\n    margin-bottom: 0 !important;\n  }\n"]);return S=function(){return e},e}function M(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,"query",function(){return B});var L=v.a.div(S(),E.a.white),R=v.a.div(I()),F=v.a.div(k()),P=v.a.div(O(),b.join(", "),h(2)),_=v.a.h1(N(),b.join(", "),h(1.75)),q=v.a.div(j(),h(1)),z=v.a.div(y(),h(.5)),D=function(e){var t=e.node;return r.a.createElement(L,{className:"mb-6"},r.a.createElement(u.a,{className:E.a.fullwidth,imgStyle:{height:"80vh"},fixed:t.image.childImageSharp.hero,alt:""}),r.a.createElement(R,null),r.a.createElement(F,null,r.a.createElement("div",{className:"d-flex flex-column align-items-center text-center w-100"},r.a.createElement(P,null,t.title),r.a.createElement(z,null,t.description))))},G=function(e){return function(t){var n=e.reduce(function(e,t){return e.set(t._path,t)},new Map);if(n.get(t.src)){var a=Object.keys(n.get(t.src).image.scales).reduce(function(e,a){return e.set(n.get(t.src).image.scales[a].download,a)},new Map);return r.a.createElement(u.a,{alt:t.alt||"",className:t.className,style:"image-inline"!==t.className?{}:{display:"block",marginLeft:"auto",marginRight:"auto"},fixed:n.get(t.src).image.childImageSharp[a.get(t["data-download"])||"mini"]})}return r.a.createElement("img",{src:t.src,alt:t.alt||"",title:t.title||null})}},J=function(e){var t=e.node;return r.a.createElement("div",{className:"d-flex flex-column text-center my-4 mx-2"},r.a.createElement(_,null,t.title),t.text&&t.text.react?r.a.createElement(q,{className:"mt-4"},Object(s.deserialize)(t.text.react,{components:{Link:function(){return null},Img:function(){return null}}})):null)},A=function(e){var t=e.node,n=e.images;return r.a.createElement("div",{className:"d-flex flex-column flex-even my-4 px-4"},r.a.createElement(q,{className:"font-weight-bold"},t.title),t.text&&t.text.react?r.a.createElement("div",{className:"mt-4"},Object(s.deserialize)(t.text.react,{components:{Link:function(){return null},Img:G(n)}})):null)},C=v.a.div(w(),E.a.gray200,E.a.gray800),T=function(e){var t=e.node,n=e.images;return r.a.createElement(C,{className:"d-flex flex-column flex-md-row"},(t.nodes||[]).map(function(e){switch(e._type){case"Document":return r.a.createElement(A,{node:e,images:n});default:return null}}))},U=function(e){var t=e.node,n=e.images;switch(t._type){case"Image":return r.a.createElement(D,{node:t});case"Document":return r.a.createElement(J,{node:t});case"Folder":return r.a.createElement(T,{node:t,images:n});default:return null}},B=(t.default=function(e){var t=e.data;return r.a.createElement(l,null,t.ploneSite.nodes.map(function(e){return r.a.createElement(U,{node:e,images:t.allPloneImage.edges.map(function(e){return e.node})})}))},"2856211992")},195:function(e,t,n){var a;e.exports=(a=n(199))&&a.default||a},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Plone plugin for Gatsby"}},file:{publicURL:"/gatsby-starter-plone-brochure/static/logo-74c55dc2223804b4022f4c23d0e90504.png",childImageSharp:{fixed:{width:193,height:50,src:"/gatsby-starter-plone-brochure/static/74c55dc2223804b4022f4c23d0e90504/7246a/logo.png",srcSet:"/gatsby-starter-plone-brochure/static/74c55dc2223804b4022f4c23d0e90504/7246a/logo.png 1x,\n/gatsby-starter-plone-brochure/static/74c55dc2223804b4022f4c23d0e90504/7f8be/logo.png 1.5x,\n/gatsby-starter-plone-brochure/static/74c55dc2223804b4022f4c23d0e90504/a89f9/logo.png 2x"}}}}}},199:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),c=n(100);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null}},202:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(203),r=n(0),c=n(205),i=n.n(c),l=function(){var e=a.data.site;return Object(r.createElement)(i.a,{title:e.siteMetadata.title,htmlAttributes:{lang:"en"}},[])}},203:function(e){e.exports={data:{site:{siteMetadata:{title:"Plone plugin for Gatsby"}}}}},204:function(e,t,n){"use strict";n(196);var a=n(197),r=n(0),c=n.n(r),i=n(198),l=n.n(i),o=n(66),u=n.n(o);n(195),n(9).default.enqueue,c.a.createContext({});var s=n(200);function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  line-height: 0;\n  a {\n    box-shadow: none;\n  }\n"]);return m=function(){return e},e}n.d(t,"a",function(){return f});var d=s.a.span(m()),f=function(e){var t=e.className,n=void 0===t?"":t,c=e.children,i=a.data,o=i.site,s=i.file;return Object(r.createElement)("header",{className:["d-flex flex-column flex-md-row align-items-center","p-3 px-md-4","bg-white","border-bottom",n].join(" ")},[Object(r.createElement)("span",{className:["d-flex flex-row align-items-center","font-weight-normal","my-0 mr-auto"].join(" ")},[Object(r.createElement)(d,{},[Object(r.createElement)(u.a,{title:o.siteMetadata.title,to:"/"},[Object(r.createElement)(l.a,{fixed:s.childImageSharp.fixed,loading:"eager"})])])]),Object(r.createElement)("nav",{className:["d-none d-md-block","my-2 my-md-0 mr-md-3"].join(" ")},c)])}}}]);
//# sourceMappingURL=component---src-pages-index-js-9eafac577b854029a7f8.js.map