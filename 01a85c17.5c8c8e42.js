(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t);a(298),a(320),a(321),a(28),a(19),a(20),a(53);var n=a(0),r=a.n(n),c=a(281),o=a(271);t.default=function(e){var t=e.tags,a={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)}));var n=Object.entries(a).sort((function(e,t){var a=e[0],n=t[0];return a===n?0:a>n?1:-1})).map((function(e){var a=e[0],n=e[1];return r.a.createElement("div",{key:a},r.a.createElement("h3",null,a),n.map((function(e){return r.a.createElement(o.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(c.a,{title:"Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}},272:function(e,t,a){"use strict";var n=a(0),r=a(274);t.a=function(){return Object(n.useContext)(r.a)}},273:function(e,t,a){"use strict";var n=a(268),r=a(272),c=a(270),o=a(275);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,i=(a=void 0===a?{}:a).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=l.href||t,m={};l.target?m={target:l.target}:Object(o.a)(u)||(m={rel:"noopener noreferrer",target:"_blank"});var b=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:m,logoImageUrl:Object(c.a)(b),logoAlt:l.alt}}},274:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},279:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},281:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(283),o=a(275),i=a(268),l=a(270),s="",u="dark",m=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),l=Object(n.useCallback)((function(){c(s),o(s)}),[]),m=Object(n.useCallback)((function(){c(u),o(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:l,setDarkTheme:m}},b=a(274);var d=function(e){var t=m(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(b.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(277),a(276),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var g=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},h=a(127),E=a.n(h);var p=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,o=a.content,l=a.backgroundColor,s=a.textColor,u=Object(n.useState)(!0),m=u[0],b=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&b(!1)}),[]),!o||m?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),b(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=a(2),O=(a(282),a(9)),j=a(269),_=a.n(j),w=a(271),N=a(278),C=a(285),y=a.n(C),S=a(128),T=a.n(S),L=function(){return r.a.createElement("span",{className:_()(T.a.toggle,T.a.moon)})},D=function(){return r.a.createElement("span",{className:_()(T.a.toggle,T.a.sun)})},B=function(e){var t=Object(i.a)().isClient;return r.a.createElement(y.a,Object(k.a)({disabled:!t,icons:{checked:r.a.createElement(L,null),unchecked:r.a.createElement(D,null)}},e))},I=a(272),x=a(284);var M=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},G=a(50),H=function(){return{scrollX:G.a.canUseDOM?window.pageXOffset:0,scrollY:G.a.canUseDOM?window.pageYOffset:0}},U=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(H()),r=a[0],c=a[1],o=function(){var t=H();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o,{passive:!0})}}),t),r},P=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],i=c[1],l=Object(n.useState)(0),s=l[0],u=l[1],m=Object(n.useState)(0),b=m[0],d=m[1],f=Object(n.useCallback)((function(e){null!==e&&d(e.getBoundingClientRect().height)}),[]),v=Object(x.b)(),g=M(v.hash),h=g[0],E=g[1];return U((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<b))){if(o)return i(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-b,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,b]),Object(n.useEffect)((function(){e&&(r(!0),E(v.hash))}),[v]),Object(n.useEffect)((function(){e&&h&&i(!0)}),[h]),{navbarRef:f,isNavbarVisible:a}},A=a(279),R=a(273),V=a(280),F=a(129),W=a.n(F);function Y(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,i=e.activeClassName,s=void 0===i?"navbar__link--active":i,u=e.prependBaseUrlToHref,m=Object(O.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),b=Object(l.a)(n),d=Object(l.a)(t),f=Object(l.a)(c,!0);return r.a.createElement(w.a,Object(k.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?f:c}:Object.assign({isNavLink:!0,activeClassName:s,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(d)}}:null),m),o)}function J(e){var t=e.items,a=e.position,n=e.className,c=Object(O.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),_()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:_()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(Y,Object(k.a)({className:o(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(O.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(Y,Object(k.a)({activeClassName:"dropdown__link--active",className:o(a,!0)},n)))})))):r.a.createElement(Y,Object(k.a)({className:o(n)},c))}function K(e){var t=e.items,a=(e.position,e.className),n=Object(O.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),_()("menu__link","navbar__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(k.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(O.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(Y,Object(k.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(k.a)({className:c(a)},n)))}var X=function(){var e,t,a=Object(i.a)(),c=a.siteConfig.themeConfig,o=c.navbar,l=(o=void 0===o?{}:o).title,s=o.links,u=void 0===s?[]:s,m=o.hideOnScroll,b=void 0!==m&&m,d=c.disableDarkMode,f=void 0!==d&&d,v=a.isClient,g=Object(n.useState)(!1),h=g[0],E=g[1],p=Object(n.useState)(!1),O=p[0],j=p[1],C=Object(I.a)(),y=C.isDarkTheme,S=C.setLightTheme,T=C.setDarkTheme,L=P(b),D=L.navbarRef,x=L.isNavbarVisible,M=Object(R.a)(),G=M.logoLink,H=M.logoLinkProps,U=M.logoImageUrl,F=M.logoAlt;Object(A.a)(h);var Y=Object(n.useCallback)((function(){E(!0)}),[E]),X=Object(n.useCallback)((function(){E(!1)}),[E]),q=Object(n.useCallback)((function(e){return e.target.checked?T():S()}),[S,T]);return r.a.createElement("nav",{ref:D,className:_()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":h},e[W.a.navbarHideable]=b,e[W.a.navbarHidden]=!x,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:Y,onKeyDown:Y},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(w.a,Object(k.a)({className:"navbar__brand",to:G},H),null!=l&&r.a.createElement("strong",{className:_()("navbar__title",(t={},t[W.a.hideLogoText]=O,t))},l,r.a.createElement("span",{className:"badge badge--info"},"V2 alpha")))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(J,Object(k.a)({},e,{key:t}))})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(V.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")),u.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(J,Object(k.a)({},e,{key:t}))})),!f&&r.a.createElement(B,{className:W.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:q}),r.a.createElement(N.a,{handleSearchBarToggle:j,isSearchBarExpanded:O}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:X}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(w.a,Object(k.a)({className:"navbar__brand",onClick:X,to:G},H),null!=U&&r.a.createElement("img",{key:v,className:"navbar__logo",src:U,alt:F}),null!=l&&r.a.createElement("strong",{className:"navbar__title"},l)),!f&&h&&r.a.createElement(B,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:q})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(K,Object(k.a)({},e,{onClick:X,key:t}))})))))))};a(130);var q=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=Object(l.a)("/img/swmLogo.svg");return a?r.a.createElement("footer",{className:_()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(w.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=n&&r.a.createElement("img",{className:"navbar__logo",src:n,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(V.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")))):null};a(131);t.a=function(e){var t=Object(i.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,m=a.url,b=e.children,f=e.title,v=e.noFooter,h=e.description,E=e.image,k=e.keywords,O=e.permalink,j=e.version,_=f?f+" | "+s:s,w=E||u,N=m+Object(l.a)(w);Object(o.a)(w)||(N=w);var C=Object(l.a)(n);return r.a.createElement(d,null,r.a.createElement(g,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:C}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),j&&r.a.createElement("meta",{name:"docsearch:version",content:j}),k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:N}),w&&r.a.createElement("meta",{property:"twitter:image",content:N}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_}),O&&r.a.createElement("meta",{property:"og:url",content:m+O}),O&&r.a.createElement("link",{rel:"canonical",href:m+O}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p,null),r.a.createElement(X,null),r.a.createElement("div",{className:"main-wrapper"},b),!v&&r.a.createElement(q,null)))}},298:function(e,t,a){var n=a(23).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},320:function(e,t,a){var n=a(17),r=a(86)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},321:function(e,t,a){"use strict";var n=a(17),r=a(29),c=a(51),o=a(18),i=[].sort,l=[1,2,3];n(n.P+n.F*(o((function(){l.sort(void 0)}))||!o((function(){l.sort(null)}))||!a(322)(i)),"Array",{sort:function(e){return void 0===e?i.call(c(this)):i.call(c(this),r(e))}})},322:function(e,t,a){"use strict";var n=a(18);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}}}]);