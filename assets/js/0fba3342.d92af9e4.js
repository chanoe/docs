"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4713],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),c=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||r;return n?l.createElement(m,i(i({ref:t},s),{},{components:n})):l.createElement(m,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4324:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],p={title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",sidebar_position:50,slug:"/use"},o="\u5982\u4f55\u8fde\u63a5\u60a8\u7684\u8bbe\u5907",c={unversionedId:"getting_started/how_to_access_device",id:"getting_started/how_to_access_device",title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",description:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a",source:"@site/docs/getting_started/how_to_access_device.md",sourceDirName:"getting_started",slug:"/use",permalink:"/use",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/getting_started/how_to_access_device.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\ud83c\udf10 \u5982\u4f55\u4f7f\u7528tkeel\u5e73\u53f0\u8fde\u63a5\u4f60\u7684\u8bbe\u5907",sidebar_position:50,slug:"/use"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 \u5982\u4f55\u5b89\u88c5\u63d2\u4ef6",permalink:"/getting_started/how-to-install-plugin"},next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/developer_cookbook/core/getting_started"}},s=[{value:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a",id:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206",children:[],level:3},{value:"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6",id:"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6",children:[{value:"Step 1 : \u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6\uff1aiothub",id:"step-1--\u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6iothub",children:[],level:3},{value:"Step 2 : \u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6: device",id:"step-2--\u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6-device",children:[],level:3}],level:2},{value:"\u6ce8\u518c\u63d2\u4ef6",id:"\u6ce8\u518c\u63d2\u4ef6",children:[{value:"Step 1 :  \u5728\u5e73\u53f0\u4e0a \u6ce8\u518c \u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528 iothub",id:"step-1---\u5728\u5e73\u53f0\u4e0a-\u6ce8\u518c-\u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528-iothub",children:[],level:3},{value:"Step 2 :  \u5728\u5e73\u53f0\u4e0a \u6ce8\u518c \u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528 tkeel-device",id:"step-2---\u5728\u5e73\u53f0\u4e0a-\u6ce8\u518c-\u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528-tkeel-device",children:[],level:3}],level:2},{value:"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907",id:"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907",children:[{value:"Step 1\uff1a \u5728 tkeel \u5e73\u53f0\u7533\u8bf7\u7528\u6237 token",id:"step-1-\u5728-tkeel-\u5e73\u53f0\u7533\u8bf7\u7528\u6237-token",children:[{value:"1. \u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237&amp;\u79df\u6237\u7ba1\u7406\u5458",id:"1-\u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458",children:[],level:4},{value:"2. \u5229\u7528\u79df\u6237&amp;\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237(\u7ba1\u7406\u5458) Token",id:"2-\u5229\u7528\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237\u7ba1\u7406\u5458-token",children:[],level:4}],level:3},{value:"Step 2\uff1a \u5728 tkeel \u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907",id:"step-2-\u5728-tkeel-\u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907",children:[{value:"1. \u521b\u5efa\u8bbe\u5907",id:"1-\u521b\u5efa\u8bbe\u5907",children:[],level:4},{value:"2. \u521b\u5efa\u8bbe\u5907\u7ec4\uff08\u53ef\u9009\uff09",id:"2-\u521b\u5efa\u8bbe\u5907\u7ec4\u53ef\u9009",children:[],level:4},{value:"3. \u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\uff08\u53ef\u9009\uff09",id:"3-\u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\u53ef\u9009",children:[],level:4},{value:"4. \u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5",id:"4-\u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5",children:[],level:4}],level:3}],level:2},{value:"\u53d1\u9001\u6570\u636e\u5230 tkeel \u5e73\u53f0",id:"\u53d1\u9001\u6570\u636e\u5230-tkeel-\u5e73\u53f0",children:[{value:"Step 1 \uff1a \u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e",id:"step-1--\u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e",children:[{value:"MQTT \u8fde\u63a5\uff1a",id:"mqtt-\u8fde\u63a5",children:[],level:4},{value:"HTTP \u8fde\u63a5\uff1a",id:"http-\u8fde\u63a5",children:[],level:4},{value:"COAP \u8fde\u63a5\uff1a",id:"coap-\u8fde\u63a5",children:[],level:4}],level:3},{value:"Step 2 \uff1a \u4ece tkeel\u5e73\u53f0 \u83b7\u53d6\u8bbe\u5907\u6570\u636e",id:"step-2--\u4ece-tkeel\u5e73\u53f0-\u83b7\u53d6\u8bbe\u5907\u6570\u636e",children:[{value:"\u67e5\u8be2\uff1a",id:"\u67e5\u8be2",children:[],level:4},{value:"\u8ba2\u9605\uff1a",id:"\u8ba2\u9605",children:[],level:4}],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5982\u4f55\u8fde\u63a5\u60a8\u7684\u8bbe\u5907"},"\u5982\u4f55\u8fde\u63a5\u60a8\u7684\u8bbe\u5907"),(0,r.kt)("h3",{id:"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206"},"\u5b8c\u6210\u8bbe\u5907\u8fde\u63a5\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728 tkeel \u5e73\u53f0\u5b89\u88c5\u8fde\u63a5\u8bbe\u5907\u4f9d\u8d56\u63d2\u4ef6\uff1a1\u3001iothub, 2\u3001device"),(0,r.kt)("li",{parentName:"ol"},"\u5229\u7528 device \u63d2\u4ef6\u5728 tkeel \u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907"),(0,r.kt)("li",{parentName:"ol"},"\u5229\u7528 iothub \u63d2\u4ef6\u53d1\u9001\u6570\u636e\u81f3tkeel\u5e73\u53f0")),(0,r.kt)("h2",{id:"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6"},"\u5728tkeel\u5e73\u53f0\u5b89\u88c5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u8fde\u63a5\u60a8\u7684\u8bbe\u5907\u9700\u8981\u5e73\u53f0\u4e2d\u5b89\u88c5\u5982\u4e0b2\u4e2a\u63d2\u4ef6\u6a21\u5757\uff1a"),(0,r.kt)("h3",{id:"step-1--\u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6iothub"},"Step 1 : \u5b89\u88c5\u7528\u4e8e\u8fde\u63a5\u8bbe\u5907\u7684\u63d2\u4ef6\uff1aiothub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin install https://tkeel-io.github.io/helm-charts/iothub@v0.2.0 iothub\n")),(0,r.kt)("h3",{id:"step-2--\u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6-device"},"Step 2 : \u5b89\u88c5\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u7684\u63d2\u4ef6: device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin install https://tkeel-io.github.io/helm-charts/tkeel-device@v0.2.0 tkeel-device\n")),(0,r.kt)("h2",{id:"\u6ce8\u518c\u63d2\u4ef6"},"\u6ce8\u518c\u63d2\u4ef6"),(0,r.kt)("h3",{id:"step-1---\u5728\u5e73\u53f0\u4e0a-\u6ce8\u518c-\u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528-iothub"},"Step 1 :  \u5728\u5e73\u53f0\u4e0a \u6ce8\u518c \u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528 iothub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin register -k iothub\n")),(0,r.kt)("h3",{id:"step-2---\u5728\u5e73\u53f0\u4e0a-\u6ce8\u518c-\u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528-tkeel-device"},"Step 2 :  \u5728\u5e73\u53f0\u4e0a \u6ce8\u518c \u521a\u521a\u5b89\u88c5\u4e86\u7684\u63d2\u4ef6\u5e94\u7528 tkeel-device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tkeel plugin register -k tkeel-device\n")),(0,r.kt)("h2",{id:"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907"},"\u5728tkeel\u5e73\u53f0\u6ce8\u518c\u60a8\u7684\u6570\u5b57\u5316\u8bbe\u5907"),(0,r.kt)("h3",{id:"step-1-\u5728-tkeel-\u5e73\u53f0\u7533\u8bf7\u7528\u6237-token"},"Step 1\uff1a \u5728 tkeel \u5e73\u53f0\u7533\u8bf7\u7528\u6237 token"),(0,r.kt)("h4",{id:"1-\u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458"},"1. \u5728\u7ba1\u7406\u5e73\u53f0\u521b\u5efa\u4e00\u4e2a\u79df\u6237&\u79df\u6237\u7ba1\u7406\u5458"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'http://192.168.123.12:30777/v1/tenants\' \\\n -H \'Content-Type: application/json\' \\\n -d \'{\n    "title":"TenantDemo",\n    "remark":"this is demo tenant",\n    "admin":{"username":"demoadmin","password":"123456"}\n}\'\n \n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"expected result ")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 0,\n  "msg": "ok",\n  "data": {\n    "tenant_id": 1,\n    "title": "TenantDemo",\n    "remark": "this is demo tenant",\n    "admin": {\n      "tenant_id": 0,\n      "username": "demoadmin",\n      "password": "",\n      "nick_name": "",\n      "avatar": "",\n      "email": ""\n    }\n  }\n}\n')),(0,r.kt)("p",null,"usr-1-66abedb1c7fd28569288076a84d46a0b"),(0,r.kt)("h4",{id:"2-\u5229\u7528\u79df\u6237\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237\u7ba1\u7406\u5458-token"},"2. \u5229\u7528\u79df\u6237&\u79df\u6237\u7ba1\u7406\u5458\u5206\u914d\u7528\u6237(\u7ba1\u7406\u5458) Token"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'http://192.168.123.11:30707/apis/security/v1/oauth/token?grant_type=password&username=1-demoadmin&password=123456'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"expected result")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"code":0,"msg":"ok","data":{"access_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwMDAwMDAiLCJleHAiOjE2NDIwMzI4NzgsInN1YiI6InVzci0xLTY2YWJlZGIxYzdmZDI4NTY5Mjg4MDc2YTg0ZDQ2YTBiIn0.vzE_wnEQTIl4lMG1H26-dt9m4vD-EP9NWBED5qKGVhJIDAAc2bYZO3W9IvdQ_EGn-AzjzhmnVr_f-spiqdIVVQ","expires_in":3600000,"refresh_token":"OGU0MWQWZTGTOTZJMC01YWQ1LTLHMDITZTI5OWMYMTA4MMVL","token_type":"Bearer"}}\n')),(0,r.kt)("h3",{id:"step-2-\u5728-tkeel-\u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907"},"Step 2\uff1a \u5728 tkeel \u5e73\u53f0\u6ce8\u518c\u6570\u5b57\u5316\u8bbe\u5907"),(0,r.kt)("p",null,"step 1\u83b7\u53d6\u7528\u6237 ",(0,r.kt)("strong",{parentName:"p"},"access_token")," \u540e\uff0c\u8bf7\u6c42\u5f00\u653e\u63a5\u53e3\u65f6\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"access_token")," \u6dfb\u52a0\u5728\u8bf7\u6c42\u5934\uff0c\u683c\u5f0f\uff1a"),(0,r.kt)("p",null,"Authorization\uff1aBearer ",(0,r.kt)("strong",{parentName:"p"},"access_token")),(0,r.kt)("h4",{id:"1-\u521b\u5efa\u8bbe\u5907"},"1. \u521b\u5efa\u8bbe\u5907"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://192.168.123.11:30707/apis/tkeel-device/v1/devices\' \\\n--header \'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name":"dev_name",\n    "desc":"dev_desc",\n    "group":"default",\n    "ext":{\n        "version":"1.1",\n        "other":"other"\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"expected result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"dev":{"name":"dev_name","desc":"dev_desc","group":"default","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"cc283991-3c16-458e-ab8f-efc512a54492","_createdAt":1638433371495623700,"_updatedAt":1638433371495624000,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiJjYzI4Mzk5MS0zYzE2LTQ1OGUtYWI4Zi1lZmM1MTJhNTQ0OTIiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTk2OTM3MSwib3duZXIiOiJ1c3ItMS02NmFiZWRiMWM3ZmQyODU2OTI4ODA3NmE4NGQ0NmEwYiJ9.5Im0c2-30sFImxgPwnrJk6z0Aw7qT5XLgqsjmvHHuYLX5Cd00OkqTFOclD22UFZXMXTiMEr5KWjXVwfNvrsjlg"}}\n')),(0,r.kt)("h4",{id:"2-\u521b\u5efa\u8bbe\u5907\u7ec4\u53ef\u9009"},"2. \u521b\u5efa\u8bbe\u5907\u7ec4\uff08\u53ef\u9009\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://192.168.123.11:30707/apis/tkeel-device/v1/groups\' \\\n--header \'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name":"group_name",\n    "desc":"group desc",\n    "parent":"root",\n    "ext":{\n        "classify":"abc",\n        "other":"ohter"\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"expected result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"result":"ok","entityInfo":{"group":{"name":"group_name","desc":"group desc","parent":"root","ext":{"classify":"abc","other":"ohter"}},"subIds":{},"sysField":{"_id":"8018eed7-66f4-4fd0-a766-d48ed1104479","_createdAt":1638433782969041700,"_updatedAt":1638433782969041700}}}\n')),(0,r.kt)("h4",{id:"3-\u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\u53ef\u9009"},"3. \u6dfb\u52a0\u8bbe\u5907\u8fdb\u8bbe\u5907\u7ec4\u5206\u7c7b\uff08\u53ef\u9009\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'http://192.168.123.11:30707/apis/tkeel-device/v1/groups/<\u521b\u5efa\u8bbe\u5907\u7ec4result \u201c_id\u201d \u5b57\u6bb5>/items' \\\n--header 'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"ids\":[\"<\u521b\u5efa\u8bbe\u5907result \u201c_id\u201d\u5b57\u6bb5 >\"]\n}'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"expected result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"result":"Ok"}\n')),(0,r.kt)("h4",{id:"4-\u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5"},"4. \u67e5\u770b\u8bbe\u5907\u5b9a\u4e49\u8be6\u60c5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://192.168.123.11:30707/apis/tkeel-device/v1/devices/<\u521b\u5efa\u8bbe\u5907result \u201c_id\u201d\u5b57\u6bb5>' \\\n--header 'Authorization: Bearer <\u5206\u914d\u7684\u7528\u6237result \u201caccess_token\u201d\u5b57\u6bb5>'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"expected result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"dev":{"name":"dev_name","desc":"dev_desc","group":"d8f17a05-9ec6-4a25-88d7-b06083a8862d","ext":{"other":"other","version":"1.1"}},"sysField":{"_id":"234199cf-823e-4f92-a23a-626b561300cb","_createdAt":1638446762313180400,"_updatedAt":1638446762313180700,"_enable":true,"_token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiIyMzQxOTljZi04MjNlLTRmOTItYTIzYS02MjZiNTYxMzAwY2IiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY2OTk4Mjc2Miwib3duZXIiOiJ1c3ItMS02NmFiZWRiMWM3ZmQyODU2OTI4ODA3NmE4NGQ0NmEwYiJ9.5vm5-FHTL33nhxcc3rF0ThOvnK0bl6yT0-Zp4G9MkMOgjGRkl9uFXHy5p4D5cHDZKOwMtPta8K_FIkjcnxYKUw","_owner":"usr-1-66abedb1c7fd28569288076a84d46a0b","_source":"device"}}\n')),(0,r.kt)("h2",{id:"\u53d1\u9001\u6570\u636e\u5230-tkeel-\u5e73\u53f0"},"\u53d1\u9001\u6570\u636e\u5230 tkeel \u5e73\u53f0"),(0,r.kt)("h3",{id:"step-1--\u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e"},"Step 1 \uff1a \u9009\u62e9\u8fde\u63a5\u534f\u8bae\u548c\u65b9\u5f0f\u53d1\u9001\u6570\u636e"),(0,r.kt)("h4",{id:"mqtt-\u8fde\u63a5"},"MQTT \u8fde\u63a5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'mosquitto_pub -h 192.168.123.9 -d -t system/test/topic -m "{\\"message\\": \\"hello, tkeel\\",\\"value\\":0}" -p 30805 -u "<\u8bbe\u5907owner>" -P "<\u8bbe\u5907token>" -i "<\u8bbe\u5907ID>"\n')),(0,r.kt)("h4",{id:"http-\u8fde\u63a5"},"HTTP \u8fde\u63a5\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"todo\n")),(0,r.kt)("h4",{id:"coap-\u8fde\u63a5"},"COAP \u8fde\u63a5\uff1a"),(0,r.kt)("p",null,"\u8ba2\u9605\u5e73\u53f0\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'coap-client -m get -s 1000  "coap://192.168.123.5:30588/mqtt/system/topic1?c=<\u8bbe\u5907ID>&p=<\u8bbe\u5907token>&u=<\u8bbe\u5907owner>"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a"system/topic1"'),(0,r.kt)("li",{parentName:"ul"},'Client ID \u4e3a\uff1a"<\u8bbe\u5907ID>", \u5b57\u7b26\u4e32\u5373\u53ef'),(0,r.kt)("li",{parentName:"ul"},'\u7528\u6237\u540d\u4e3a\uff1a"<\u8bbe\u5907owner>"\uff0c \u5b57\u7b26\u4e32\u5373\u53ef'),(0,r.kt)("li",{parentName:"ul"},'\u5bc6\u7801\u4e3a\uff1a"<\u8bbe\u5907token>", \u5373\u521b\u5efa\u8bbe\u5907\u8fd4\u56de\u7684\u201c_token\u201d\u5b57\u6bb5\u7684\u503c'),(0,r.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u7684\u6301\u7eed\u65f6\u95f4\u4e3a\uff1a1000 \u79d2")),(0,r.kt)("p",null,"\u5411\u5e73\u53f0\u53d1\u5e03\u6570\u636e\n",(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'coap-client -m put -e 1234   "coap://192.168.123.5:30588/mqtt/system/topic1?c=<\u8bbe\u5907ID>&p=<\u8bbe\u5907token>&u=<\u8bbe\u5907owner>"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u4e3b\u9898\u540d\u79f0\u4e3a\uff1a"system/topic1"'),(0,r.kt)("li",{parentName:"ul"},'Client ID \u4e3a\uff1a"<\u8bbe\u5907ID>", \u5b57\u7b26\u4e32\u5373\u53ef'),(0,r.kt)("li",{parentName:"ul"},'\u7528\u6237\u540d\u4e3a\uff1a"<\u8bbe\u5907owner>"\uff0c \u5b57\u7b26\u4e32\u5373\u53ef'),(0,r.kt)("li",{parentName:"ul"},'\u5bc6\u7801\u4e3a\uff1a"<\u8bbe\u5907token>", \u5373\u521b\u5efa\u8bbe\u5907\u8fd4\u56de\u7684\u201c_token\u201d\u5b57\u6bb5\u7684\u503c'),(0,r.kt)("li",{parentName:"ul"},'Payload \u4e3a\uff1a"1234\u201c')),(0,r.kt)("h3",{id:"step-2--\u4ece-tkeel\u5e73\u53f0-\u83b7\u53d6\u8bbe\u5907\u6570\u636e"},"Step 2 \uff1a \u4ece tkeel\u5e73\u53f0 \u83b7\u53d6\u8bbe\u5907\u6570\u636e"),(0,r.kt)("h4",{id:"\u67e5\u8be2"},"\u67e5\u8be2\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --location --request GET 'http://192.168.123.9:30707/apis/core/v1/plugins/device/entities/<\u8bbe\u5907ID>?owner=<\u8bbe\u5907owner>@source=device' \\\n--header 'Authorization: Bearer <\u7528\u6237token>' | jq '.'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"expected result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "id": "01bb328e-e3de-474c-9be5-55721f369c5c",\n  "source": "device",\n  "owner": "usr-1-dddb879d93a0d0bd5d339a0dce69833c",\n  "type": "device",\n  "configs": {},\n  "properties": {\n    "dev": {\n      "desc": "dev_desc",\n      "ext": {\n        "other": "other",\n        "version": "1.1"\n      },\n      "group": "344efec6-6fe5-49bb-b995-c157fc39f066",\n      "name": "dev_name"\n    },\n    "message": "hello, tkeel",\n    "sysField": {\n      "_createdAt": 1638499053166762200,\n      "_enable": true,\n      "_id": "01bb328e-e3de-474c-9be5-55721f369c5c",\n      "_owner": "usr-1-dddb879d93a0d0bd5d339a0dce69833c",\n      "_source": "device",\n      "_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlfaWQiOiIwMWJiMzI4ZS1lM2RlLTQ3NGMtOWJlNS01NTcyMWYzNjljNWMiLCJlbnRpdHlfdHlwZSI6ImRldmljZSIsImV4cCI6MTY3MDAzNTA1NSwib3duZXIiOiJ1c3ItMS1kZGRiODc5ZDkzYTBkMGJkNWQzMzlhMGRjZTY5ODMzYyJ9.vndQ0Awgyl8hrStp_NSjyb30kZJs91QdauRzrC09iB8o5A_25-yD8xM6ZfkCyg3L3J3-C30ecpS5QpUhNFocOQ",\n      "_updatedAt": 1638499053166762200\n    },\n    "value": 0\n  }\n}\n')),(0,r.kt)("h4",{id:"\u8ba2\u9605"},"\u8ba2\u9605\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"to do\n")))}u.isMDXComponent=!0}}]);