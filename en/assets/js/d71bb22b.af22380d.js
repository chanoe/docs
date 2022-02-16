"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[8510],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,b=f["".concat(a,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9029:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],p={title:"\u5173\u7cfb",sidebar_position:5},a=void 0,l={unversionedId:"developer_cookbook/core/specs/relationship",id:"developer_cookbook/core/specs/relationship",title:"\u5173\u7cfb",description:"\u5728\u7269\u7406\u4e16\u754c\u4e2d\uff0c\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u5f80\u5f80\u4e0d\u662f\u76f8\u4e92\u5b64\u7acb\u7684\uff0c\u5b83\u4eec\u4e4b\u95f4\u5f80\u5f80\u5b58\u5728\u5404\u5f0f\u5404\u6837\u7684\u8054\u7cfb\uff0c\u5982\u4ea4\u6362\u673a\uff0c\u8def\u7531\u5668\uff0c\u7ec8\u7aef\u8bbe\u5907\uff0c\u670d\u52a1\u5668\u901a\u8fc7\u5149\u7ea4\u8fde\u63a5\uff0c\u5728\u7f51\u7edc\u62d3\u6251\u56fe\u4e2d\u8fd9\u4e9b\u8bbe\u5907\u5b9e\u4f53\u6709 \u8fde\u63a5\u5173\u7cfb\u3002\u8fd9\u4e9b\u5173\u7cfb\u5c06\u8fd9\u4e9b\u72ec\u7acb\u7684\u8bbe\u5907\u5b9e\u4f53\u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u7ec4\u6210\u590d\u6742\u800c\u7cbe\u5bc6\u7684\u7f51\u7edc\uff0c\u5411\u5916\u63d0\u4f9b\u7a33\u5b9a\u800c\u9ad8\u901f\u7684\u7f51\u7edc\u901a\u4fe1\u670d\u52a1\u3002\u5173\u7cfb\u7684\u6838\u5fc3\u5728\u4e8e\u6709\u6548\u7684\u7ec4\u7ec7\u72ec\u7acb\u7684\u5b9e\u4f53\uff0c\u4f7f\u5f97\u4ed6\u4eec\u80fd\u591f\u7ec4\u6210\u4e00\u4e2a\u529f\u80fd\u9f50\u5168\u7684\u96c6\u5408\uff0c\u4ee5\u96c6\u5408\u4e3a\u5355\u4f4d\u5411\u5916\u63d0\u4f9b\u4e30\u5bcc\u591a\u5f69\u7684\u529f\u80fd\u3002",source:"@site/docs/developer_cookbook/core/specs/relationship.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/relationship",permalink:"/en/developer_cookbook/core/specs/relationship",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/relationship.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5173\u7cfb",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b",permalink:"/en/developer_cookbook/core/specs/model"},next:{title:"\u8ba2\u9605",permalink:"/en/developer_cookbook/core/specs/subscription"}},s=[],u={toc:s};function f(e){var t=e.components,p=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u7269\u7406\u4e16\u754c\u4e2d\uff0c\u5b9e\u4f53\u4e0e\u5b9e\u4f53\u4e4b\u95f4\u5f80\u5f80\u4e0d\u662f\u76f8\u4e92\u5b64\u7acb\u7684\uff0c\u5b83\u4eec\u4e4b\u95f4\u5f80\u5f80\u5b58\u5728\u5404\u5f0f\u5404\u6837\u7684\u8054\u7cfb\uff0c\u5982\u4ea4\u6362\u673a\uff0c\u8def\u7531\u5668\uff0c\u7ec8\u7aef\u8bbe\u5907\uff0c\u670d\u52a1\u5668\u901a\u8fc7\u5149\u7ea4\u8fde\u63a5\uff0c\u5728\u7f51\u7edc\u62d3\u6251\u56fe\u4e2d\u8fd9\u4e9b\u8bbe\u5907\u5b9e\u4f53\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fde\u63a5\u5173\u7cfb"),"\u3002\u8fd9\u4e9b\u5173\u7cfb\u5c06\u8fd9\u4e9b\u72ec\u7acb\u7684\u8bbe\u5907\u5b9e\u4f53\u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u7ec4\u6210\u590d\u6742\u800c\u7cbe\u5bc6\u7684\u7f51\u7edc\uff0c\u5411\u5916\u63d0\u4f9b\u7a33\u5b9a\u800c\u9ad8\u901f\u7684\u7f51\u7edc\u901a\u4fe1\u670d\u52a1\u3002\u5173\u7cfb\u7684\u6838\u5fc3\u5728\u4e8e\u6709\u6548\u7684\u7ec4\u7ec7\u72ec\u7acb\u7684\u5b9e\u4f53\uff0c\u4f7f\u5f97\u4ed6\u4eec\u80fd\u591f\u7ec4\u6210\u4e00\u4e2a\u529f\u80fd\u9f50\u5168\u7684\u96c6\u5408\uff0c\u4ee5\u96c6\u5408\u4e3a\u5355\u4f4d\u5411\u5916\u63d0\u4f9b\u4e30\u5bcc\u591a\u5f69\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5c31\u73b0\u5b9e\u610f\u4e49\u800c\u8a00\uff0c\u5982\u679c\u4f60\u4ec5\u4ec5\u6709\u4ea4\u6362\u673a\uff0c\u8def\u7531\u5668\uff0c\u800c\u6ca1\u6709\u5c06\u4ed6\u4eec\u8fde\u63a5\uff0c\u90a3\u4e48\u4ed6\u4eec\u662f\u65e0\u6cd5\u6784\u5efa\u548c\u63d0\u4f9b\u9ad8\u541e\u5410\u4f4e\u5ef6\u8fdf\u7684\u7f51\u7edc\u7cfb\u7edf\u7684\uff1b\u518d\u8005\uff0c\u5982\u679c\u73b0\u5728\u6211\u4eec\u6709\u4e00\u4e2a\u667a\u6167\u56ed\u533a\u7684\u573a\u666f\uff0c\u6211\u4eec\u9996\u5148\u5e94\u8be5\u9700\u8981\u6e05\u695a\u7684\u662f\u6211\u4eec\u9700\u8981\u6784\u5efa\u90a3\u4e9b\u7c7b\u578b\u7684\u5b9e\u4f53\u6765\u6620\u5c04\u7269\u7406\u56ed\u533a\u4e2d\u7684\u8bbe\u5907\u548c\u7a7a\u95f4\uff0c\u5176\u6b21\u6211\u4eec\u9700\u8981\u5c06\u8fd9\u4e9b\u6784\u5efa\u7684\u5b9e\u4f53\u4e32\u8054\u8d77\u6765\uff0c\u6765\u6784\u5efa\u4e00\u4e2a\u6570\u5b57\u5316\u7684\u56ed\u533a\uff0c\u4ece\u5b9e\u4f53\u5230\u56ed\u533a\uff0c\u8fd9\u5373\u662f\u5173\u7cfb\u7684\u610f\u4e49\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"relationships",src:r(968).Z,width:"573",height:"382"})),(0,i.kt)("p",null,"\u5176\u6b21\uff0c\u5bf9\u4e8e\u56ed\u533a\u9879\u76ee\u6211\u4eec\u662f\u53ef\u4ee5\u6a21\u677f\u5316\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u56ed\u533a\u4e2d\u7684\u90e8\u5206\u7ed3\u6784\u523b\u5f55\u6a21\u677f\uff0c\u5982\u697c\u5b87\uff0c\u697c\u5c42\uff0c\u8fd0\u52a8\u573a\uff0c\u6e38\u6cf3\u6c60\uff0c\u4ed6\u4eec\u90fd\u4e0d\u662f\u5355\u4e2a\u6216\u8005\u5355\u7c7b\u578b\u7684\u5b9e\u4f53\uff0c\u800c\u662f\u4e00\u4e9b\u5b9e\u4f53\u7684\u6709\u6548\u7ec4\u5408\uff0c\u800c\u8fd9\u79cd\u7ec4\u5408\u65b9\u5f0f\uff0c\u4f9d\u8d56\u4e8e\u5173\u7cfb\u3002"))}f.isMDXComponent=!0},968:function(e,t,r){t.Z=r.p+"assets/images/relationships-dd650853371a78bd60d298f51145cf38.png"}}]);