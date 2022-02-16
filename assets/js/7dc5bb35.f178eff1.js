"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[825],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5249:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"\u6d88\u606f\u89c4\u8303",sidebar_position:2},p=void 0,u={unversionedId:"developer_cookbook/iothub/message_spec",id:"developer_cookbook/iothub/message_spec",title:"\u6d88\u606f\u89c4\u8303",description:"\u6d88\u606f\u683c\u5f0f",source:"@site/docs/developer_cookbook/iothub/message_spec.md",sourceDirName:"developer_cookbook/iothub",slug:"/developer_cookbook/iothub/message_spec",permalink:"/developer_cookbook/iothub/message_spec",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/iothub/message_spec.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6d88\u606f\u89c4\u8303",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"IoTHub \u5feb\u901f\u5165\u95e8",permalink:"/developer_cookbook/iothub/getting_started"},next:{title:"\ud83d\uddfa\ufe0f Roadmap",permalink:"/roadmap"}},c=[{value:"\u6d88\u606f\u683c\u5f0f",id:"\u6d88\u606f\u683c\u5f0f",children:[{value:"\u539f\u59cb\u6570\u636e payload \u683c\u5f0f",id:"\u539f\u59cb\u6570\u636e-payload-\u683c\u5f0f",children:[],level:3},{value:"\u5c5e\u6027\u6570\u636e payload \u683c\u5f0f",id:"\u5c5e\u6027\u6570\u636e-payload-\u683c\u5f0f",children:[],level:3},{value:"\u9065\u6d4b\u6570\u636e payload \u683c\u5f0f",id:"\u9065\u6d4b\u6570\u636e-payload-\u683c\u5f0f",children:[],level:3},{value:"\u547d\u4ee4\u6570\u636e payload \u683c\u5f0f",id:"\u547d\u4ee4\u6570\u636e-payload-\u683c\u5f0f",children:[],level:3}],level:2}],s={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6d88\u606f\u683c\u5f0f"},"\u6d88\u606f\u683c\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e09\u7c7b\u4e0a\u884c\u6570\u636e\uff08\u539f\u59cb\u6570\u636e\uff0c \u5c5e\u6027\uff0c \u9065\u6d4b\uff09 "),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e09\u7c7b\u4e0b\u884c\u6570\u636e\uff08\u5c5e\u6027\uff08\u53ef\u5199\uff09\uff0c \u9065\u6d4b\uff08\u53ef\u5199\uff09\uff0c \u547d\u4ee4\uff09")),(0,o.kt)("h3",{id:"\u539f\u59cb\u6570\u636e-payload-\u683c\u5f0f"},"\u539f\u59cb\u6570\u636e payload \u683c\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u884c\u539f\u59cb\u6570\u636e\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\uff0c \u6bd4\u5982 json, \u4e8c\u8fdb\u5236\u6570\u636e\u7b49\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e.")),(0,o.kt)("h3",{id:"\u5c5e\u6027\u6570\u636e-payload-\u683c\u5f0f"},"\u5c5e\u6027\u6570\u636e payload \u683c\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u884c\u5c5e\u6027\u6570\u636e\nKV \u5f62\u5f0f\uff0c K \u662f\u8bbe\u5907\u6a21\u677f\u5c5e\u6027\u7684 id\uff0c V \u662f \u5b57\u5178\u5305\u62ec \u65f6\u95f4time, \u503cvalue \u4e24\u4e2a\u5b57\u6bb5\uff0c \u5141\u8bb8\u6709\u591a\u4e2a KV, eg:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "serial": {\n      "value": "sn123456",\n      "time": 1641349927430079500\n   },\n   "brand": {\n      "value": "qy",\n      "time": 1641349927430079500\n   }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u884c\u5c5e\u6027\u6570\u636e,json \u884c\u5f0f\uff0c K \u662f\u8bbe\u5907\u6a21\u677f\u5c5e\u6027\u7684 id\uff0c V \u662f \u5b57\u5178\u5305\u62ec \u65f6\u95f4time, \u503cvalue \u4e24\u4e2a\u5b57\u6bb5\uff0c ",(0,o.kt)("strong",{parentName:"li"},"\u53ea\u9488\u5bf9\u53ef\u5199\u7684\u5c5e\u6027"),"\uff08\u8bbe\u5907\u6a21\u578b\u5c5e\u6027\u91cc\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"rw")," \u5b57\u6bb5\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"w")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"rw"),"\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "serial": {\n      "value": "sn123456",\n      "time": 1641349927430079500\n   },\n   "brand": {\n      "value": "qy",\n      "time": 1641349927430079500\n   }\n}\n')),(0,o.kt)("h3",{id:"\u9065\u6d4b\u6570\u636e-payload-\u683c\u5f0f"},"\u9065\u6d4b\u6570\u636e payload \u683c\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0a\u884c\u9065\u6d4b\u6570\u636e\njson \u884c\u5f0f\uff0c K \u662f\u8bbe\u5907\u6a21\u677f\u9065\u6d4b\u7684 id\uff0c V \u662f \u5b57\u5178\u5305\u62ec \u65f6\u95f4time, \u503cvalue \u4e24\u4e2a\u5b57\u6bb5\uff0c \u5141\u8bb8\u6709\u591a\u4e2a KV, eg:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "temperature": {\n      "value": 30,\n      "time": 1641349927430079500\n   }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u884c\u9065\u6d4b\u6570\u636e\uff0cjson \u884c\u5f0f\uff0c K \u662f\u8bbe\u5907\u6a21\u677f\u9065\u6d4b\u7684 id\uff0c V \u662f \u5b57\u5178\u5305\u62ec \u65f6\u95f4time, \u503cvalue \u4e24\u4e2a\u5b57\u6bb5\uff0c \u5141\u8bb8\u6709\u591a\u4e2a KV\u3002 ",(0,o.kt)("strong",{parentName:"li"},"\u53ea\u9488\u5bf9\u53ef\u5199\u7684\u9065\u6d4b"),"\uff08\u8bbe\u5907\u6a21\u578b\u9065\u6d4b\u91cc\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"rw")," \u5b57\u6bb5\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"w")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"rw"),"\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "temperature": {\n      "value": 31,\n      "time": 1641349927430079500\n   }\n}\n')),(0,o.kt)("h3",{id:"\u547d\u4ee4\u6570\u636e-payload-\u683c\u5f0f"},"\u547d\u4ee4\u6570\u636e payload \u683c\u5f0f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u884c\u547d\u4ee4\u6570\u636e\njson \u884c\u5f0f\uff0c id \u7684\u503c\u662f\u8bbe\u5907\u6a21\u677f\u547d\u4ee4\u7684 id\uff0c  paras \u662f\u8bbe\u5907\u6a21\u677f\u547d\u4ee4\u53c2\u6570, time \u662f\u5e73\u53f0\u53d1\u9001\u547d\u4ee4\u7684\u65f6\u95f4.\n\u547d\u4ee4\u6309\u7167\u662f\u5426\u9700\u8981\u56de\u590d\u5206\u4e3a\u4e24\u79cd\uff0c \u5355\u5411\u547d\u4ee4\uff08\u4e0d\u9700\u8981\u56de\u590d\uff09\u548c\u53cc\u5411\u547d\u4ee4\uff08\u9700\u8981\u56de\u590d\uff09\uff0c \u76ee\u524d\u53ea\u6709\u5355\u5411\u547d\u4ee4 eg:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id": "ota",\n   "paras": {\n      "firmware_address": "http://xxx.yyy.com",\n      "version": "latest",\n      "secret": "****",\n      "http_method": "GET"\n   },\n   "time": 1641349927430079500\n}\n')))}d.isMDXComponent=!0}}]);