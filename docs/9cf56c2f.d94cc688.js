(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(85)),i={title:"Number Type"},c={unversionedId:"project-structure/number-type",id:"project-structure/number-type",isDocsHomePage:!1,title:"Number Type",description:"The bindings will provide both float and int types as numbers. Generally the",source:"@site/docs/project-structure/number-type.md",permalink:"/bs-material-ui/docs/project-structure/number-type",sidebar:"docs",previous:{title:"Any Type",permalink:"/bs-material-ui/docs/project-structure/any-type"},next:{title:"Module - Colors",permalink:"/bs-material-ui/docs/project-structure/module-colors"}},p=[],u={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The bindings will provide both ",Object(a.b)("inlineCode",{parentName:"p"},"float")," and ",Object(a.b)("inlineCode",{parentName:"p"},"int")," types as numbers. Generally the\nthe type of ",Object(a.b)("inlineCode",{parentName:"p"},"MaterialUi_Types.Number.t")," will be re-used whereever possible (The\n",Object(a.b)("inlineCode",{parentName:"p"},"Number")," module is also accessible via ",Object(a.b)("inlineCode",{parentName:"p"},"MaterialUi.Number"),")."),Object(a.b)("p",null,"An example of this would be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"@react.component\nlet make = () => {\n  open MaterialUi;\n\n  <AppBar elevation=Number.int(3) />\n}\n")),Object(a.b)("p",null,"In some cases where you would expect this type, the bindings might require\nanother one that originates inside the component. This is the case when a number\nis part of a broader union type."),Object(a.b)("p",null,"An example of this would be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"@react.component\nlet make = () => {\n  open MaterialUi;\n\n  <Backdrop timeout=Backdrop.Timeout.int(3000) />\n}\n")))}l.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);