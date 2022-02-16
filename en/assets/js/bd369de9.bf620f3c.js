"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[9876],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,title:"\u4ec0\u4e48\u662f tKeel ?",id:"tkeel",slug:"/"},c=void 0,p={unversionedId:"tkeel",id:"tkeel",title:"\u4ec0\u4e48\u662f tKeel ?",description:"tKeel \u662f\u4e00\u5957\u5f3a\u58ee\u53ef\u590d\u7528\u7684\u7269\u8054\u7f51\u5f00\u653e\u5e73\u53f0\uff0c\u80fd\u5e2e\u52a9\u60a8\u5feb\u901f\u6784\u5efa\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/tkeel.md",sourceDirName:".",slug:"/",permalink:"/en/",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/tkeel.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u4ec0\u4e48\u662f tKeel ?",id:"tkeel",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Platform",permalink:"/en/internal_concepts/platform"}},u=[{value:"\u4e3a\u4ec0\u4e48\u8981\u9009\u62e9 tKeel?",id:"\u4e3a\u4ec0\u4e48\u8981\u9009\u62e9-tkeel",children:[],level:2},{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2}],s={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"tKeel \u662f\u4e00\u5957\u5f3a\u58ee\u53ef\u590d\u7528\u7684\u7269\u8054\u7f51\u5f00\u653e\u5e73\u53f0\uff0c\u80fd\u5e2e\u52a9\u60a8\u5feb\u901f\u6784\u5efa\u89e3\u51b3\u65b9\u6848\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u7269\u8054\u7f51\u5f00\u53d1\u8005\u63d0\u4f9b\u6700\u4f18\u89e3\uff0c\u5e2e\u52a9\u7269\u8054\u7f51\u670d\u52a1\u5546\u89e3\u51b3\u9ad8\u5e76\u53d1\u3001\u591a\u79df\u6237\u4ee5\u53ca\u5206\u5e03\u5f0f\u7684\u96be\u9898\uff0c\u4f7f\u5f97\u7269\u8054\u7f51\u670d\u52a1\u5546\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u5f00\u53d1\uff0c\u66f4\u597d\u7684\u4e3a\u5ba2\u6237\u63d0\u4f9b\u4ef7\u503c\u3002\u4e3a\u4f7f\u7528\u8005\u63d0\u4f9b\u65b9\u4fbf\u5feb\u6377\u5730\u8bbe\u5907\u63a5\u5165\u80fd\u529b\uff0c\u8fd8\u6709\u6781\u6613\u7406\u89e3\u548c\u64cd\u4f5c\u7684\u6570\u636e\u62bd\u8c61\u3001\u4e30\u5bcc\u4e14\u5f3a\u5927\u7684\u63d2\u4ef6\u3001\u6e05\u723d\u7684\u5e73\u53f0\u64cd\u4f5c\u9875\u9762\u8ba9\u6570\u636e\u5b89\u5168\u5730\u5c3d\u5728\u638c\u63e1\u3002"),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u9009\u62e9-tkeel"},"\u4e3a\u4ec0\u4e48\u8981\u9009\u62e9 tKeel?"),(0,i.kt)("p",null,"\u7b80\u5355\u7684\u8bf4\uff0c\u6211\u4eec\u6709\u8fd9\u4e9b\u53ef\u80fd\u8ba9\u4f60\u5fc3\u52a8\u7684\u7406\u7531\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u6269\u5c55\u3001\u53ef\u62d4\u63d2\u7684\u57fa\u7840\u6846\u67b6\uff0c\u9ed8\u8ba4\u652f\u6301\u591a\u79df\u6237\u80fd\u529b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5355\u5feb\u901f\u7684\u4e8c\u6b21\u5f00\u53d1\u80fd\u529b\uff0c\u4e0d\u9650\u5b9a\u5f00\u53d1\u8bed\u8a00\u548c\u67b6\u6784\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b9e\u4f53\u6765\u63cf\u8ff0\u8bbe\u5907\u3001\u7f51\u5173\u3001\u7a7a\u95f4\u7b49\u7269\u7406\u7a7a\u95f4\u5bf9\u8c61\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6570\u636e\u5b9e\u4f53\u53ef\u4ee5\u968f\u65f6\u83b7\u53d6\u5f53\u524d\u6570\u636e\u5feb\u7167\u5e76\u4e14\u8ba2\u9605\u6570\u636e\u53d8\u5316\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7b80\u5355\u5feb\u6377\u5730\u63a8\u9001\u5b9e\u4f53\u6570\u636e\u5230\u5176\u4ed6\u7cfb\u7edf\u3001\u5e73\u53f0\u3002")),(0,i.kt)("h2",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"image demo",src:n(3389).Z,width:"1137",height:"660"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u53ef\u6269\u5c55"),"\uff1a\u91c7\u7528\u4e91\u539f\u751f\u65b9\u6cd5\u6784\u5efa\uff0c\u57fa\u4e8e\u5fae\u670d\u52a1\u67b6\u6784\u63d0\u9ad8\u7075\u6d3b\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u5229\u7528\u4e91\u5e73\u53f0\u8bbe\u65bd\u5b9e\u73b0\u5f39\u6027\u4f38\u7f29\u3001\u52a8\u6001\u8c03\u5ea6\u3001\u4f18\u5316\u8d44\u6e90\u5229\u7528\u7387\uff0c\u5177\u6709\u6bd4\u4f20\u7edf\u7cfb\u7edf\u66f4\u9ad8\u7684\u7075\u6d3b\u6027\uff0c\u540c\u65f6\u80fd\u591f\u4fc3\u8fdb\u5f00\u53d1\u3001\u52a0\u5feb\u901f\u5ea6\u548c\u63d0\u9ad8\u6027\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5065\u58ee\u9ad8\u6548"),"\uff1a\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"li",href:"/en/concepts/core"},"\u6570\u636e\u5c42")," \u5b9a\u4e49\u4e86\u6570\u636e\u5b9e\u4f53\u3002 \u5bf9\u771f\u5b9e\u4e16\u754c\u7684\u7269\u4f53\uff08things\uff09\u8fdb\u884c\u4e86\u6a21\u62df\u3001\u62bd\u8c61\uff0c \u60a8\u53ef\u4ee5\u5b9a\u4e49\u5173\u7cfb\u6620\u5c04\uff0c\u4f7f\u5f97\u6570\u636e\u5728\u5b9e\u4f53\u4e4b\u95f4\u9ad8\u901f\u6d41\u52a8\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u7b80\u5355"),"\uff1a\u57fa\u4e8e ",(0,i.kt)("a",{parentName:"li",href:"https://dapr.io/"},"Dapr")," \u6784\u5efa\uff0c\u89e3\u51b3\u4e86\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u6d41\u5411\u4e0e\u62bd\u8c61\u95ee\u9898\uff0c\u5c4f\u853d\u4e86\u5e95\u5c42\u7684\u590d\u6742\u6027\uff0c\u5411\u5916\u63d0\u4f9b\u4e86\u66f4\u7b80\u5355\uff0c\u9762\u5411\u5f00\u53d1\u8005\u66f4\u53cb\u597d\u7684\u62bd\u8c61 \uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u6784\u5efa\u7269\u8054\u7f51\u89e3\u51b3\u65b9\u6848\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u60a8\u6b63\u5728\u5bfb\u627e tKeel \u7684\u4ecb\u7ecd\u6027\u6982\u8ff0\u5e76\u4e86\u89e3\u6709\u5173 tKeel \u57fa\u672c\u672f\u8bed\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u5efa\u8bae\u8bbf\u95ee",(0,i.kt)("a",{parentName:"p",href:"/en/internal_concepts/platform"},"\u6982\u5ff5\u90e8\u5206"),"\u3002"))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"getting_started/guide"},"\u5f00\u59cb\u5c1d\u8bd5 tKeel")))}d.isMDXComponent=!0},3389:function(e,t,n){t.Z=n.p+"assets/images/system-4b48ed579defd66c60f70970fc6bccdd.png"}}]);