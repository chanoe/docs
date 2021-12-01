"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[109],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,k=s["".concat(c,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2037:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],a={sidebar_position:2,title:"\u521b\u5efa\u63d2\u4ef6"},c="\u521b\u5efa\u63d2\u4ef6",u={unversionedId:"developer_cookbook/rudder_plugin/create",id:"developer_cookbook/rudder_plugin/create",isDocsHomePage:!1,title:"\u521b\u5efa\u63d2\u4ef6",description:"\u76f8\u4fe1\u60a8\u5e94\u8be5\u5df2\u7ecf\u770b\u89c1\u4e86 tKeel \u63d2\u4ef6\u529f\u80fd\u7684\u5f3a\u5927\uff0c\u672c\u9875\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u521b\u5efa\u4e00\u6b3e\u81ea\u5df1\u5fc3\u4eea\u7684\u63d2\u4ef6\uff0c",source:"@site/docs/developer_cookbook/rudder_plugin/create.md",sourceDirName:"developer_cookbook/rudder_plugin",slug:"/developer_cookbook/rudder_plugin/create",permalink:"/docs/developer_cookbook/rudder_plugin/create",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/rudder_plugin/create.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u521b\u5efa\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/docs/developer_cookbook/rudder_plugin/overview"},next:{title:"OAuth \u63a5\u5165",permalink:"/docs/developer_cookbook/security/oauth"}},p=[{value:"\u4f7f\u7528 Artisan \u5feb\u901f\u642d\u5efa",id:"\u4f7f\u7528-artisan-\u5feb\u901f\u642d\u5efa",children:[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[{value:"\u5f00\u59cb\u4e00\u4e2a\u63d2\u4ef6\u9879\u76ee",id:"\u5f00\u59cb\u4e00\u4e2a\u63d2\u4ef6\u9879\u76ee",children:[],level:4}],level:3}],level:2}],d={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521b\u5efa\u63d2\u4ef6"},"\u521b\u5efa\u63d2\u4ef6"),(0,i.kt)("p",null,"\u76f8\u4fe1\u60a8\u5e94\u8be5\u5df2\u7ecf\u770b\u89c1\u4e86 tKeel \u63d2\u4ef6\u529f\u80fd\u7684\u5f3a\u5927\uff0c\u672c\u9875\u6307\u5357\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u521b\u5efa\u4e00\u6b3e\u81ea\u5df1\u5fc3\u4eea\u7684\u63d2\u4ef6\uff0c"),(0,i.kt)("p",null,"\u901a\u8fc7 tKeel CLI \u5b8c\u6210\u5728 tKeel \u4e0a\u5b89\u88c5\u548c\u6ce8\u518c\u4e00\u4e2a\u6307\u5b9a helm \u6e90\u7684\u63d2\u4ef6\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ","[\u5728 tKeel \u4e0a\u5b89\u88c5\u63d2\u4ef6]"," \u548c\u5728 ","[tKeel \u4e0a\u6ce8\u518c\u63d2\u4ef6]","\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528-artisan-\u5feb\u901f\u642d\u5efa"},"\u4f7f\u7528 Artisan \u5feb\u901f\u642d\u5efa"),(0,i.kt)("p",null,"\u6211\u4eec\u6781\u529b\u63a8\u8350\u60a8\u4f7f\u7528\u6211\u4eec\u63a8\u51fa\u7684\u5f00\u53d1\u8005\u5de5\u5177 ",(0,i.kt)("a",{parentName:"p",href:"/docs/developer_cookbook/artisan"},"artisan"),"\uff0c\u56e0\u4e3a\u6211\u4eec\u5c06\u4e00\u4e9b\u80fd\u81ea\u52a8\u5316\u7684\u5f00\u53d1\u6d41\u7a0b\u90fd\u96c6\u6210\u5728\u4e86\u8be5\u5de5\u5177\u4e2d\uff0c\u5b83\u80fd\u5e2e\u52a9\u60a8\u7b80\u5355\u4fbf\u6377\u7684\u5f00\u53d1\u51fa\u4e00\u6b3e\u63d2\u4ef6\u5e94\u7528\u3002"),(0,i.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/#install-and-initialize-your-tkeel"},"tKeel \u5e73\u53f0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli#install-cli"},"tKeel CLI")," \u5de5\u5177"),(0,i.kt)("li",{parentName:"ul"},"\u57fa\u7840\u7684 Go \u7f16\u7a0b\u80fd\u529b")),(0,i.kt)("h4",{id:"\u5f00\u59cb\u4e00\u4e2a\u63d2\u4ef6\u9879\u76ee"},"\u5f00\u59cb\u4e00\u4e2a\u63d2\u4ef6\u9879\u76ee"),(0,i.kt)("p",null,"xxxxxx"))}s.isMDXComponent=!0}}]);