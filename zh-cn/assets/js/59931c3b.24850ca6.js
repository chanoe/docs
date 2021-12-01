"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[557],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},153:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),a=["components"],o={title:"\u5b89\u88c5 tKeel CLI",sidebar_position:1,slug:"/cli"},c="\u5b89\u88c5 tKeel CLI",u={unversionedId:"getting_started/cli",id:"getting_started/cli",isDocsHomePage:!1,title:"\u5b89\u88c5 tKeel CLI",description:"\u7b80\u4ecb",source:"@site/docs/getting_started/cli.md",sourceDirName:"getting_started",slug:"/cli",permalink:"/docs/zh-cn/cli",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/getting_started/cli.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5b89\u88c5 tKeel CLI",sidebar_position:1,slug:"/cli"},sidebar:"tutorialSidebar",previous:{title:"Rudder",permalink:"/docs/zh-cn/internal_concepts/rudder"},next:{title:"\u521d\u59cb tKeel Platform",permalink:"/docs/zh-cn/init"}},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"\u5f00\u59cb\u5b89\u88c5",id:"\u5f00\u59cb\u5b89\u88c5",children:[{value:"Linux",id:"linux",children:[],level:3},{value:"MacOS",id:"macos",children:[],level:3},{value:"\u53d1\u884c\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u7248",id:"\u53d1\u884c\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u7248",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b89\u88c5-tkeel-cli"},"\u5b89\u88c5 tKeel CLI"),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"tKeel CLI \u662f\u60a8\u7528\u4e8e\u5404\u79cd tKeel \u76f8\u5173\u4efb\u52a1\u64cd\u4f5c\u7684\u7b80\u6613\u4f7f\u7528\u5de5\u5177\u3002"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765 ",(0,i.kt)("strong",{parentName:"p"},"\u5b89\u88c5 tKeel \u5e73\u53f0"),"\u3001",(0,i.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u63d2\u4ef6")," \u4ee5\u53ca ",(0,i.kt)("strong",{parentName:"p"},"\u7528\u6237\u6a21\u5757"),"\u3002"),(0,i.kt)("p",null,"tKeel CLI \u53ef\u4ee5\u5e2e\u52a9\u60a8\u5b89\u88c5 tKeel \u5e73\u53f0\u5e76\u4e14\u5e2e\u52a9\u60a8\u7ba1\u7406\u5e73\u53f0\u3002"),(0,i.kt)("h2",{id:"\u5f00\u59cb\u5b89\u88c5"},"\u5f00\u59cb\u5b89\u88c5"),(0,i.kt)("p",null,"\u6211\u4eec\u4e3a\u5404\u5927\u5e73\u53f0\u90fd\u63d0\u4f9b\u4e86\u76f8\u5e94\u53ef\u6267\u884c\u7a0b\u5e8f\u3002\u8fd8\u4e3a\u4e0d\u540c\u5e73\u53f0\u5bf9\u5e94\u7f16\u5199\u4e86\u5feb\u901f\u5b89\u88c5\u811a\u672c\uff0c\u4ee5\u786e\u4fdd\u7b80\u5355\u3001\u4fbf\u6377\u3002"),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("p",null,"\u901a\u8fc7 Bash \u811a\u672c\u5c06\u6700\u65b0\u7248 tKeel CLI \u5b89\u88c5\u81f3 Linux \u7cfb\u7edf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh -O - | /bin/bash\n")),(0,i.kt)("h3",{id:"macos"},"MacOS"),(0,i.kt)("p",null,"\u901a\u8fc7 Bash \u811a\u672c\u5c06\u6700\u65b0\u7248 tKeel CLI \u5b89\u88c5\u81f3 MacOS(darwin) \u7cfb\u7edf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/tkeel-io/cli/master/install/install.sh | /bin/bash\n")),(0,i.kt)("h3",{id:"\u53d1\u884c\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u7248"},"\u53d1\u884c\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u7248"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u53d1\u884c\u7248\u672c\u7684 tKeel CLI \u5305\u62ec\u5404\u79cd\u64cd\u4f5c\u7cfb\u7edf\u548c\u67b6\u6784\u3002\u8fd9\u4e9b\u4e8c\u8fdb\u5236\u7248\u672c\u53ef\u4ee5\u624b\u52a8\u4e0b\u8f7d\u548c\u5b89\u88c5\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tkeel-io/cli/releases"},"tKeel CLI")),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u4e0b\u8f7d\u7684\u6587\u4ef6\u89e3\u538b (e.g. tkeel_linux_amd64.tar.gz, tkeel_windows_amd64.zip)"),(0,i.kt)("li",{parentName:"ol"},"\u628a\u5b83\u79fb\u5230\u4f60\u60f3\u8981\u7684\u4f4d\u7f6e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u662f Linux/MacOS \u7528\u6237 - ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u662f Windows \u7528\u6237 - \u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u7cfb\u7edf PATH "),"\u4e2d\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u7f16\u8f91\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"c:\\tkeel")," \u7684\u76ee\u5f55\uff0c\u5e76\u5c06\u8fd9\u4e2a\u76ee\u5f55\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u7cfb\u7edf PATH")," \u4e2d\u3002")))))}d.isMDXComponent=!0}}]);