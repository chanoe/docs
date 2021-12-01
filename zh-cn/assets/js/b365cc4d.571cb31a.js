"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[239],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=a(r),f=o,v=d["".concat(l,".").concat(f)]||d[f]||s[f]||c;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<c;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7739:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],u={title:"OAuth \u63a5\u5165"},l="OAuth \u63a5\u5165",a={unversionedId:"developer_cookbook/security/oauth",id:"developer_cookbook/security/oauth",isDocsHomePage:!1,title:"OAuth \u63a5\u5165",description:"\u8be5\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u914d\u7f6e\u548c\u8c03\u7528\u8ba4\u8bc1\u63a5\u53e3\u3002",source:"@site/docs/developer_cookbook/security/oauth.md",sourceDirName:"developer_cookbook/security",slug:"/developer_cookbook/security/oauth",permalink:"/docs/zh-cn/developer_cookbook/security/oauth",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/security/oauth.md",tags:[],version:"current",frontMatter:{title:"OAuth \u63a5\u5165"},sidebar:"tutorialSidebar",previous:{title:"\u521b\u5efa\u63d2\u4ef6",permalink:"/docs/zh-cn/developer_cookbook/rudder_plugin/create"},next:{title:"Auth \u670d\u52a1",permalink:"/docs/zh-cn/developer_cookbook/security/server"}},p=[{value:"\u7b2c\u4e09\u65b9\u5e73\u53f0",id:"\u7b2c\u4e09\u65b9\u5e73\u53f0",children:[{value:"QQ",id:"qq",children:[],level:3},{value:"\u5fae\u4fe1",id:"\u5fae\u4fe1",children:[],level:3}],level:2},{value:"\u81ea\u5b9a\u4e49\u5e73\u53f0",id:"\u81ea\u5b9a\u4e49\u5e73\u53f0",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"oauth-\u63a5\u5165"},"OAuth \u63a5\u5165"),(0,c.kt)("p",null,"\u8be5\u6587\u6863\u5c06\u4f1a\u4e3a\u60a8\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u914d\u7f6e\u548c\u8c03\u7528\u8ba4\u8bc1\u63a5\u53e3\u3002"),(0,c.kt)("h2",{id:"\u7b2c\u4e09\u65b9\u5e73\u53f0"},"\u7b2c\u4e09\u65b9\u5e73\u53f0"),(0,c.kt)("h3",{id:"qq"},"QQ"),(0,c.kt)("h3",{id:"\u5fae\u4fe1"},"\u5fae\u4fe1"),(0,c.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u5e73\u53f0"},"\u81ea\u5b9a\u4e49\u5e73\u53f0"))}d.isMDXComponent=!0}}]);