"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[8485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=u(n),m=r,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),r=n(7294),l=n(4334),i=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function k(e){var t;const{lazy:n,block:i,defaultValue:k,values:m,groupId:d,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===k?k:k??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[w,D]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=d){const e=N[d];null!=e&&e!==w&&v.some((t=>t.value===e))&&D(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==w&&(T(t),D(a),null!=d&&y(d,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:R,onClick:P},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,i.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},6352:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={title:"\u529f\u80fd"},s=void 0,u={unversionedId:"getting-started/features",id:"version-latest/getting-started/features",title:"\u529f\u80fd",description:"General",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/getting-started/features.md",sourceDirName:"getting-started",slug:"/getting-started/features",permalink:"/zh/getting-started/features",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/getting-started/features.md",tags:[],version:"latest",frontMatter:{title:"\u529f\u80fd"}},p={},c=[{value:"General",id:"general",level:2},{value:"Port Forwarding",id:"port-forwarding",level:2},{value:"Images",id:"images",level:2},{value:"Scanning Images",id:"scanning-images",level:3},{value:"Adding Images",id:"adding-images",level:3},{value:"Pulling Images",id:"pulling-images",level:4},{value:"Building Images",id:"building-images",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Show Logs",id:"show-logs",level:3},{value:"Enable Debug Mode",id:"enable-debug-mode",level:4},{value:"Reset Kubernetes",id:"reset-kubernetes",level:3},{value:"Factory Reset",id:"factory-reset",level:3},{value:"Diagnostics",id:"diagnostics",level:2},{value:"Preferences",id:"preferences",level:2},{value:"Application",id:"application",level:3},{value:"Automatic Updates",id:"automatic-updates",level:4},{value:"Statistics",id:"statistics",level:4},{value:"Behavior",id:"behavior",level:4},{value:"Administrative Access",id:"administrative-access",level:5},{value:"Automatic Updates",id:"automatic-updates-1",level:5},{value:"Statistics",id:"statistics-1",level:5},{value:"Environment",id:"environment",level:4},{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path",level:5},{value:"WSL (Windows)",id:"wsl-windows",level:3},{value:"Virtual Machine (macOS &amp; Linux)",id:"virtual-machine-macos--linux",level:3},{value:"Memory",id:"memory",level:4},{value:"CPU",id:"cpu",level:4},{value:"Container Runtime",id:"container-runtime",level:3},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Enable Kubernetes",id:"enable-kubernetes",level:4},{value:"Kubernetes Version",id:"kubernetes-version",level:4},{value:"Kubernetes Port",id:"kubernetes-port",level:4},{value:"Enable Traefik",id:"enable-traefik",level:4}],k={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"General")," \u9009\u9879\u5361\u63d0\u4f9b\u4e86\u793e\u533a channel \u7684\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b channel \u8054\u7cfb Rancher Desktop \u56e2\u961f\u548c\u793e\u533a\uff0c\u5e76\u63d0\u51fa\u95ee\u9898\u3001\u62a5\u544a\u9519\u8bef\u6216\u8ba8\u8bba Rancher Desktop\u3002"),(0,r.kt)("h2",{id:"port-forwarding"},"Port Forwarding"),(0,r.kt)("p",null,"\u5982\u9700\u8f6c\u53d1\u7aef\u53e3\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230 Service \u5e76\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Forward"),"\uff0c"),(0,r.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7aef\u53e3\u6216\u4f7f\u7528\u968f\u673a\u5206\u914d\u7684\u7aef\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ","\u2713"," \u6309\u94ae\u6765\u786e\u8ba4\u4f60\u7684\u9009\u62e9\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Cancel")," \u6765\u79fb\u9664\u5206\u914d\u7684\u7aef\u53e3\u3002")),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Images")," \u9009\u9879\u5361\u5141\u8bb8\u4f60\u7ba1\u7406\u865a\u62df\u673a\u4e0a\u7684\u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u8981\u6539\u7528 nerdctl \u7ba1\u7406\u955c\u50cf\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/tutorials/working-with-images"},"\u955c\u50cf"),"\u3002"),(0,r.kt)("h3",{id:"scanning-images"},"Scanning Images"),(0,r.kt)("p",null,"\u6b64\u529f\u80fd\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/trivy"},"Trivy")," \u6765\u626b\u63cf\u4f60\u7684\u955c\u50cf\uff0c\u4ece\u800c\u67e5\u627e\u6f0f\u6d1e\u548c\u914d\u7f6e\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u8981\u626b\u63cf\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece\u955c\u50cf\u5217\u8868\u4e2d\uff0c\u627e\u5230\u8981\u626b\u63cf\u7684\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Scan"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u663e\u793a\u6309\u4e25\u91cd\u7a0b\u5ea6\u6392\u5e8f\u7684\u6f0f\u6d1e\u6458\u8981\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},">")," \u67e5\u770b\u200b\u200b\u6bcf\u4e2a\u6f0f\u6d1e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\u6f0f\u6d1e\u8be6\u60c5\u7684\u94fe\u63a5\u3002")),(0,r.kt)("h3",{id:"adding-images"},"Adding Images"),(0,r.kt)("h4",{id:"pulling-images"},"Pulling Images"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u53ef\u4ee5\u8ba9\u4f60\u5c06\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u5230\u4f60\u7684\u865a\u62df\u673a\u4e2d\u3002"),(0,r.kt)("p",null,"\u8981\u62c9\u53d6\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Pull")," \u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7684\u540d\u79f0\u3002",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u955c\u50cf\u662f\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," \u4e2d\u63d0\u53d6\u7684\uff08\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"repo/image[:tag]"),"\uff09\u3002\u8981\u4ece\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\uff0c\u8bf7\u5305\u542b\u4e3b\u673a\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"registry.example.com/repo/image[:tag]"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Pull"),"\u3002")),(0,r.kt)("h4",{id:"building-images"},"Building Images"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6784\u5efa\u955c\u50cf\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684\u865a\u62df\u673a\u3002"),(0,r.kt)("p",null,"\u8981\u6784\u5efa\u955c\u50cf\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,r.kt)("strong",{parentName:"li"},"+")," \u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Build")," \u9009\u9879\u5361\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6784\u5efa\u7684\u955c\u50cf\u7684\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"repo/image:tag"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.example.com/repo/image:tag"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Build"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u6587\u4ef6\u6d4f\u89c8\u5668\u4e2d\uff0c\u9009\u62e9\u8981\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684 Dockerfile\u3002")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"show-logs"},"Show Logs"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u9009\u9879\u6253\u5f00\u5305\u542b\u6240\u6709 Rancher Desktop \u65e5\u5fd7\u6587\u4ef6\u7684\u6587\u4ef6\u5939\u3002"),(0,r.kt)("h4",{id:"enable-debug-mode"},"Enable Debug Mode"),(0,r.kt)("p",null,"\u542f\u7528 debug \u7ea7\u522b\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,r.kt)("h3",{id:"reset-kubernetes"},"Reset Kubernetes"),(0,r.kt)("p",null,"\u91cd\u7f6e Kubernetes \u5e76\u5220\u9664\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u548c\u914d\u7f6e\u3002\u5728\u91cd\u7f6e\u4e4b\u524d\uff0c\u7528\u6237\u4f1a\u770b\u5230\u786e\u8ba4\u4fe1\u606f\u4ee5\u53ca\u5220\u9664\u5bb9\u5668\u955c\u50cf\u7684\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u8981\u91cd\u7f6e Kubernetes\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset Kubernetes"),"\uff0c\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u540c\u65f6\u5220\u9664\u5bb9\u5668\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\u5e76\u91cd\u65b0\u542f\u52a8\u3002")),(0,r.kt)("h3",{id:"factory-reset"},"Factory Reset"),(0,r.kt)("p",null,"\u5220\u9664\u96c6\u7fa4\u548c\u6240\u6709\u5176\u4ed6 Rancher Desktop \u8bbe\u7f6e\u3002\u5fc5\u987b\u518d\u6b21\u6267\u884c\u521d\u59cb\u8bbe\u7f6e\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,"\u8981\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Reset"),"\u3002\u7136\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e2a\u786e\u8ba4\u7a97\u53e3\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u9009\u62e9\u662f\u5426\u4fdd\u7559\u7f13\u5b58\u7684 Kubernetes \u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Factory Reset"),"\u3002Kubernetes \u4f1a\u505c\u6b62\uff0cRancher Desktop \u4f1a\u5173\u95ed\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u518d\u6b21\u542f\u52a8 Rancher Desktop\u3002")),(0,r.kt)("h2",{id:"diagnostics"},"Diagnostics"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aRancher Desktop ",(0,r.kt)("em",{parentName:"p"},"\u4e0d\u4f1a"),"\u5c06\u8bca\u65ad\u6570\u636e\u53d1\u9001\u5230\u4efb\u4f55\u8fdc\u7a0b\u670d\u52a1\u5668\u8fdb\u884c\u5904\u7406\u6216\u5b58\u50a8\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Diagnostics")," \u529f\u80fd\u901a\u8fc7\u5728\u540e\u53f0\u8fd0\u884c\u591a\u9879\u68c0\u67e5\u6765\u68c0\u6d4b\u73af\u5883\u4e2d\u7684\u5e38\u89c1\u95ee\u9898\uff08\u4f8b\u5982\u4e0d\u6ee1\u8db3\u6700\u4f4e\u8981\u6c42\u3001\u914d\u7f6e\u9519\u8bef\u7b49\uff09\uff0c\u5e2e\u52a9\u4f60\u81ea\u884c\u6392\u9664\u548c\u4fee\u590d Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u6bcf\u6b21\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\u90fd\u4f1a\u8fd0\u884c\u8bca\u65ad\u68c0\u67e5\u3002\u5982\u679c\u53d1\u73b0\u4efb\u4f55\u95ee\u9898\uff0c\u5219\u5931\u8d25\u68c0\u67e5\u7684\u6570\u91cf\u4f1a\u663e\u793a\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684 ",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," \u83dc\u5355\u6587\u672c\u7684\u65c1\u8fb9\u3002",(0,r.kt)("em",{parentName:"p"},"Diagnostics")," \u9009\u9879\u5361\u4f1a\u663e\u793a\u8bca\u65ad\u6d4b\u8bd5\u7684\u7ed3\u679c\uff0c\u7a81\u51fa\u663e\u793a\u9700\u8981\u6ce8\u610f\u7684\u533a\u57df\uff0c\u5e76\u6307\u5bfc\u4f60\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8fdb\u884c\u4e86\u975e\u6807\u51c6\u8bbe\u7f6e\uff0c\u5e76\u4e14\u77e5\u9053\u8fd9\u4e9b\u68c0\u67e5\u4e0d\u9002\u7528\u4e8e\u4f60\u7684\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u5728\u6b64\u9009\u9879\u5361\u4e0a mute/unmute \u4e2a\u522b\u68c0\u67e5\u3002\u4f60\u8fd8\u53ef\u4ee5\u968f\u65f6\u91cd\u65b0\u8fd0\u884c\u8bca\u65ad\u7a0b\u5e8f\uff0c\u4ece\u800c\u9a8c\u8bc1\u4f60\u5bf9\u73af\u5883\u6240\u505a\u7684\u66f4\u6539\u662f\u5426\u5df2\u7ecf\u89e3\u51b3\u4e86\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3931).Z,width:"1150",height:"737"})),(0,r.kt)("h2",{id:"preferences"},"Preferences"),(0,r.kt)("p",null,"\u6b64\u9875\u9762\u5141\u8bb8\u4f60\u4fee\u6539 Rancher Desktop \u5b9e\u4f8b\u7684\u8bbe\u7f6e\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8981\u8bbf\u95ee ",(0,r.kt)("strong",{parentName:"li"},"Preferences"),"\uff0c\u8bf7\u5355\u51fb\u53f3\u4e0a\u89d2\u7684 ","\u2699"," \u56fe\u6807\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5de6\u4fa7\u7684\u9009\u9879\u5361\u6765\u8bbf\u95ee\u4e0d\u540c\u7c7b\u522b\u7684 Rancher Desktop \u9996\u9009\u9879\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u9700\u8981\u66f4\u65b0\u9996\u9009\u9879\u3002\u4e0b\u65b9\u6982\u8ff0\u4e86\u53ef\u7528\u7684\u9996\u9009\u9879\u8bbe\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8981\u5e94\u7528\u66f4\u65b0\uff0c\u8bf7\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Apply"),"\u3002")),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)(l.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("h4",{id:"automatic-updates"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"statistics"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002")),(0,r.kt)(i.Z,{value:"macOS & Linux",mdxType:"TabItem"},(0,r.kt)("h4",{id:"behavior"},"Behavior"),(0,r.kt)("h5",{id:"administrative-access"},"Administrative Access"),(0,r.kt)("p",null,"\u5141\u8bb8 Rancher Desktop \u5728\u542f\u52a8\u67d0\u4e9b\u64cd\u4f5c\u65f6\u83b7\u5f97\u7ba1\u7406\u8bbf\u95ee\u6743\u9650\uff08sudo \u6743\u9650\uff09\u3002\u8fd9\u80fd\u7528\u4e8e\u589e\u5f3a\u529f\u80fd\uff0c\u5305\u62ec\u6865\u63a5\u7f51\u7edc\u548c\u9ed8\u8ba4 docker socket \u652f\u6301\u3002\u66f4\u6539\u4f1a\u5728 Rancher Desktop \u4e0b\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u3002"),(0,r.kt)("h5",{id:"automatic-updates-1"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h5",{id:"statistics-1"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("h4",{id:"environment"},"Environment"),(0,r.kt)("h5",{id:"\u914d\u7f6e-path"},"\u914d\u7f6e PATH"),(0,r.kt)("p",null,"Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin"),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin")," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," \u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002")))),(0,r.kt)("h3",{id:"wsl-windows"},"WSL (Windows)"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u4f7f Rancher Desktop Kubernetes \u914d\u7f6e\u80fd\u591f\u88ab\u4efb\u4f55 WSL \u914d\u7f6e\u7684 Linux \u53d1\u884c\u7248\u6240\u8bbf\u95ee\u3002\u4e00\u65e6\u542f\u7528\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 WSL \u53d1\u884c\u7248\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7b49\u5de5\u5177\u4e0e Rancher Desktop Kubernetes \u96c6\u7fa4\u8fdb\u884c\u901a\u4fe1\u3002"),(0,r.kt)("p",null,"WSL \u8ba9\u4f60\u5728\u6240\u6709 Linux \u53d1\u884c\u7248\u4e2d\u5168\u5c40\u914d\u7f6e\u5185\u5b58\u548c CPU \u5206\u914d\u3002\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#options-for-wslconfig"},"WSL \u6587\u6863"),"\u4e2d\u7684\u8bf4\u660e\u3002"),(0,r.kt)("h3",{id:"virtual-machine-macos--linux"},"Virtual Machine (macOS & Linux)"),(0,r.kt)("h4",{id:"memory"},"Memory"),(0,r.kt)("p",null,"\u5206\u914d\u7ed9 Rancher Desktop \u7684\u5185\u5b58\u3002\u53ef\u9009\u8303\u56f4\u53d6\u51b3\u4e8e\u4f60\u7684\u7cfb\u7edf\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a\u5206\u914d\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u670d\u52a1\u3002"),(0,r.kt)("h4",{id:"cpu"},"CPU"),(0,r.kt)("p",null,"\u5206\u914d\u7ed9 Rancher Desktop \u7684 CPU \u6570\u91cf\u3002\u53ef\u9009\u8303\u56f4\u53d6\u51b3\u4e8e\u4f60\u7684\u7cfb\u7edf\u3002\u7ea2\u8272\u533a\u57df\u8868\u793a\u5206\u914d\u53ef\u80fd\u4f1a\u5f71\u54cd\u7cfb\u7edf\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"container-runtime"},"Container Runtime"),(0,r.kt)("p",null,"\u4e3a Rancher Desktop \u8bbe\u7f6e",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9 ",(0,r.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," \u4e3a\u5bb9\u5668\u63d0\u4f9b\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 nerdctl \u6216 ",(0,r.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," \u6765\u542f\u7528 D\u200b\u200bocker API \u548c Docker CLI\u3002\u4e00\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002"),(0,r.kt)("p",null,"\u5207\u6362\u5230\u4e0d\u540c\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u73b0\u6709\u5bb9\u5668\u8fd0\u884c\u65f6\u6784\u5efa\u6216\u62c9\u53d6\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u955c\u50cf\u5728\u5207\u6362\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4e0d\u53ef\u7528\u3002")),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("h4",{id:"enable-kubernetes"},"Enable Kubernetes"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Kubernetes\u3002\u7981\u7528 Kubernetes \u540e\uff0c\u4f60\u53ef\u4ee5\u53ea\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," \u6765\u51cf\u5c11\u8d44\u6e90\u6d88\u8017\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cKubernetes \u662f\u542f\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u8981\u542f\u7528/\u7981\u7528 Kubernetes\uff0c\u53ea\u9700\u9009\u4e2d/\u53d6\u6d88\u9009\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Kubernetes")," \u590d\u9009\u6846\u3002\u542f\u7528/\u7981\u7528 Kubernetes \u65f6\uff0c\u8be5\u5e94\u7528\u7a0b\u5e8f\u5c06\u91cd\u65b0\u542f\u52a8\u3002\u7981\u7528 Kubernetes \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\uff0c\u91cd\u65b0\u542f\u7528 Kubernetes \u65f6\uff0c\u4f60\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u3002"),(0,r.kt)("h4",{id:"kubernetes-version"},"Kubernetes Version"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u663e\u793a\u4e86 Rancher Desktop \u5b9e\u4f8b\u53ef\u4ee5\u4f7f\u7528\u7684 Kubernetes \u7248\u672c\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u5347\u7ea7\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u8fdb\u884c\u68c0\u67e5\uff0c\u770b\u76ee\u6807 Kubernetes \u7248\u672c\u662f\u5426\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u4f1a\u4e0b\u8f7d\u5bf9\u5e94\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,r.kt)("p",null,"\u964d\u7ea7\u65f6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u955c\u50cf\u3002")),(0,r.kt)("p",null,"\u8981\u5207\u6362\u7248\u672c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Kubernetes version")," \u4e0b\u62c9\u83dc\u5355\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u8f6c\u6362\u7684\u7248\u672c\u3002")),(0,r.kt)("h4",{id:"kubernetes-port"},"Kubernetes Port"),(0,r.kt)("p",null,"\u8bbe\u7f6e Kubernetes \u66b4\u9732\u7684\u7aef\u53e3\u3002\u5982\u679c\u6709\u591a\u4e2a K3s \u5b9e\u4f8b\u6b63\u5728\u8fd0\u884c\uff0c\u4f7f\u7528\u6b64\u8bbe\u7f6e\u53ef\u4ee5\u907f\u514d\u7aef\u53e3\u51b2\u7a81\u3002"),(0,r.kt)("h4",{id:"enable-traefik"},"Enable Traefik"),(0,r.kt)("p",null,"\u6b64\u9009\u9879\u5141\u8bb8\u4f60\u542f\u7528\u6216\u7981\u7528 Traefik\u3002\u7981\u7528 Traefik \u540e\uff0c\u4f60\u53ef\u4ee5\u91ca\u653e\u7aef\u53e3 80 \u548c 443\uff0c\u4ee5\u4fbf\u5c06\u5176\u7528\u4e8e\u5907\u7528 ingress \u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTraefik \u662f\u542f\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u7981\u7528 Traefik \u4e0d\u4f1a\u5220\u9664\u73b0\u6709\u8d44\u6e90\u3002"))}m.isMDXComponent=!0},3931:function(e,t,n){t.Z=n.p+"assets/images/diagnostics-checks-table-971df7ee385bade2b8489134d79e2984.png"}}]);