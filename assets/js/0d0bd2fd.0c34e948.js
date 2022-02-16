"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4253],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5382:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",sidebar_position:1},l=void 0,p={unversionedId:"developer_cookbook/core/tutorial/iot-create-entity-from-model",id:"developer_cookbook/core/tutorial/iot-create-entity-from-model",title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",description:"1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53",source:"@site/docs/developer_cookbook/core/tutorial/iot-create-entity-from-model.md",sourceDirName:"developer_cookbook/core/tutorial",slug:"/developer_cookbook/core/tutorial/iot-create-entity-from-model",permalink:"/developer_cookbook/core/tutorial/iot-create-entity-from-model",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/tutorial/iot-create-entity-from-model.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"IoT \u573a\u666f\u4e0b\uff0c\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e",permalink:"/developer_cookbook/core/introduction/configuration"},next:{title:"\u4e3a\u7a7a\u95f4\u5173\u7cfb\u53d8\u66f4\u521b\u5efa\u6620\u5c04",permalink:"/developer_cookbook/core/tutorial/mapper-for-space-relationships"}},u=[{value:"1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53",id:"1-\u521b\u5efa\u6a21\u578b\u5b9e\u4f53",children:[],level:3},{value:"2. \u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e",id:"2-\u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e",children:[],level:3},{value:"3. \u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",id:"3-\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907",children:[],level:3},{value:"4. \u67e5\u8be2\u5b9e\u4f53",id:"4-\u67e5\u8be2\u5b9e\u4f53",children:[],level:3},{value:"5. \u7f16\u8f91\u5b9e\u4f53",id:"5-\u7f16\u8f91\u5b9e\u4f53",children:[],level:3}],d={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-\u521b\u5efa\u6a21\u578b\u5b9e\u4f53"},"1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# 1. \u521b\u5efa\u6a21\u578b\u5b9e\u4f53\ncurl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=template123" \\\n-H "Owner: admin" \\\n-H "Type: TEMPLATE" \\\n-H "Source: dm" \\\n-H "Content-Type: application/json" \\\n-d \'{}\'\n')),(0,i.kt)("h3",{id:"2-\u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e"},"2. \u7f16\u8f91\u6a21\u578b\u5b9e\u4f53\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u7f16\u8f91\u6a21\u578b\ncurl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities/template123/configs?type=TEMPLATE&owner=admin&source=dm" \\\n  -H "Content-Type: application/json" \\\n  -d \'[\n          {\n            "id": "temp",\n            "type": "int",\n            "define": {\n                "unit": "\xb0",\n                "max": 500,\n                "min": 10\n            },\n            "enabled": true,\n            "enabled_search": true\n          }\n    ]\'\n')),(0,i.kt)("h3",{id:"3-\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907"},"3. \u901a\u8fc7\u6a21\u578b\u521b\u5efa\u8bbe\u5907"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6307\u5b9a\u6a21\u578b\u521b\u5efa\u8bbe\u5907\ncurl -X POST "http://localhost:3500/v1.0/invoke/core/method/v1/entities?id=device12344&from=template123" \\\n-H "Owner: admin" \\\n-H "Type: DEVICE" \\\n-H "Source: dm" \\\n-H "Content-Type: application/json" \\\n-d \'{\n      "status": "start",\n      "temp": 2344\n    }\'\n')),(0,i.kt)("h3",{id:"4-\u67e5\u8be2\u5b9e\u4f53"},"4. \u67e5\u8be2\u5b9e\u4f53"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin"  \\\n  -H "Type: DEVICE"\n')),(0,i.kt)("h3",{id:"5-\u7f16\u8f91\u5b9e\u4f53"},"5. \u7f16\u8f91\u5b9e\u4f53"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://localhost:3500/v1.0/invoke/core/method/v1/entities/device123" \\\n  -H "Source: dm" \\\n  -H "Owner: admin" \\\n  -H "Type: DEVICE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n       "status": "end",\n       "temp":123\n     }\'\n')))}s.isMDXComponent=!0}}]);