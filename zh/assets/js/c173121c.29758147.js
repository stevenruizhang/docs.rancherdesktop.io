"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[2874],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3687:function(e,t,a){var n=a(412);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macOS":i?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4334),i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),r=a(7294),i=a(4334),l=a(2466),o=a(6775),u=a(1980),s=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,s]=v({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=u??p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,i]),tabValues:i}}var k=a(2389),b="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(p(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},2585:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905)),i=a(4866),l=a(5162),o=a(3687);const u={sidebar_label:"\u5e94\u7528\u7a0b\u5e8f",title:"\u5e94\u7528\u7a0b\u5e8f"},s=void 0,c={unversionedId:"ui/preferences/application",id:"ui/preferences/application",title:"\u5e94\u7528\u7a0b\u5e8f",description:"Automatic Updates",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ui/preferences/application.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/application",permalink:"/zh/next/ui/preferences/application",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/docs/ui/preferences/application.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u5e94\u7528\u7a0b\u5e8f",title:"\u5e94\u7528\u7a0b\u5e8f"},sidebar:"tutorialSidebar",previous:{title:"\u8bca\u65ad",permalink:"/zh/next/ui/diagnostics"},next:{title:"\u865a\u62df\u673a",permalink:"/zh/next/ui/preferences/virtual-machine"}},p={},d=[{value:"Automatic Updates",id:"automatic-updates",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Administrative Access",id:"administrative-access",level:4},{value:"Automatic Updates",id:"automatic-updates-1",level:4},{value:"Statistics",id:"statistics-1",level:4},{value:"Environment",id:"environment",level:3},{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path",level:4},{value:"Behavior",id:"behavior-1",level:3},{value:"Administrative Access",id:"administrative-access-1",level:4},{value:"Automatic Updates",id:"automatic-updates-2",level:4},{value:"Statistics",id:"statistics-2",level:4},{value:"Environment",id:"environment-1",level:3},{value:"\u914d\u7f6e PATH",id:"\u914d\u7f6e-path-1",level:4}],m={toc:d};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{groupId:"os",defaultValue:o.Z.defaultOs,mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,r.kt)("h3",{id:"automatic-updates"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h3",{id:"statistics"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Windows_application.png",alt:null}))),(0,r.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,r.kt)("h3",{id:"behavior"},"Behavior"),(0,r.kt)("h4",{id:"administrative-access"},"Administrative Access"),(0,r.kt)("p",null,"\u5141\u8bb8 Rancher Desktop \u5728\u542f\u52a8\u67d0\u4e9b\u64cd\u4f5c\u65f6\u83b7\u5f97\u7ba1\u7406\u8bbf\u95ee\u6743\u9650\uff08sudo \u6743\u9650\uff09\u3002\u8fd9\u80fd\u7528\u4e8e\u589e\u5f3a\u529f\u80fd\uff0c\u5305\u62ec\u6865\u63a5\u7f51\u7edc\u548c\u9ed8\u8ba4 docker socket \u652f\u6301\u3002\u66f4\u6539\u4f1a\u5728 Rancher Desktop \u4e0b\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u3002"),(0,r.kt)("h4",{id:"automatic-updates-1"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"statistics-1"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/macOS_application_tabBehavior.png",alt:null})),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("h4",{id:"\u914d\u7f6e-path"},"\u914d\u7f6e PATH"),(0,r.kt)("p",null,"Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin"),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin")," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," \u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/macOS_application_tabEnvironment.png",alt:null}))),(0,r.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,r.kt)("h3",{id:"behavior-1"},"Behavior"),(0,r.kt)("h4",{id:"administrative-access-1"},"Administrative Access"),(0,r.kt)("p",null,"\u5141\u8bb8 Rancher Desktop \u5728\u542f\u52a8\u67d0\u4e9b\u64cd\u4f5c\u65f6\u83b7\u5f97\u7ba1\u7406\u8bbf\u95ee\u6743\u9650\uff08sudo \u6743\u9650\uff09\u3002\u8fd9\u80fd\u7528\u4e8e\u589e\u5f3a\u529f\u80fd\uff0c\u5305\u62ec\u6865\u63a5\u7f51\u7edc\u548c\u9ed8\u8ba4 docker socket \u652f\u6301\u3002\u66f4\u6539\u4f1a\u5728 Rancher Desktop \u4e0b\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u3002"),(0,r.kt)("h4",{id:"automatic-updates-2"},"Automatic Updates"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\u65f6\uff0c\u7528\u6237\u4f1a\u5f97\u5230\u4e00\u4e2a\u901a\u77e5\u548c\u5347\u7ea7\u76ee\u6807\u7684\u53d1\u884c\u7248\u8bf4\u660e\u3002\u65e0\u8bba\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8\u66f4\u65b0\uff0c\u7528\u6237\u90fd\u4f1a\u6536\u5230\u901a\u77e5\u3002\u5982\u679c\u542f\u7528\u6b64\u9009\u9879\uff0c\u66f4\u65b0\u4f1a\u88ab\u4e0b\u8f7d\uff0c\u7136\u540e\u5728\u4e0b\u6b21\u542f\u52a8 Rancher Desktop \u65f6\u5b89\u88c5\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"statistics-2"},"Statistics"),(0,r.kt)("p",null,"\u8be5\u9009\u9879\u5141\u8bb8 Rancher Desktop \u6536\u96c6\u5173\u4e8e\u4f60\u4e0e Rancher Desktop \u5e94\u7528\u7a0b\u5e8f\u4ea4\u4e92\u7684\u4fe1\u606f\uff0c\u4f46\u4e0d\u4f1a\u6536\u96c6\u4f60\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.7/preferences/Linux_application_tabBehavior.png",alt:null})),(0,r.kt)("h3",{id:"environment-1"},"Environment"),(0,r.kt)("h4",{id:"\u914d\u7f6e-path-1"},"\u914d\u7f6e PATH"),(0,r.kt)("p",null,"Rancher Desktop \u9644\u5e26\u547d\u4ee4\u884c\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e0e\u5176\u5404\u79cd\u529f\u80fd\u4ea4\u4e92\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u5305\u62ec ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nerdctl"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," \u7b49\u3002\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin"),"\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"ls ~/.rd/bin")," \u6765\u67e5\u770b\u4f60\u7684\u5b89\u88c5\u4e2d\u5305\u542b\u4e86\u54ea\u4e9b\u5b9e\u7528\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u5b9e\u7528\u7a0b\u5e8f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"~/.rd/bin")," \u5fc5\u987b\u4f4d\u4e8e shell \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," \u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u6267\u884c\u6b64\u64cd\u4f5c\u7684\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Automatic"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u5c06\u901a\u8fc7\u4fee\u6539\u4f60\u7684 shell .rc \u6587\u4ef6\u6765\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manual"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u7ba1\u7406\u4e0d\u4f1a\u6539\u53d8\u4efb\u4f55\u4e1c\u897f - \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.rd/bin")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH")," \u4e2d\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://suse-rancher-media.s3.amazonaws.com/desktop/v1.8/preferences/Linux_application_tabEnvironment.png",alt:null})))))}v.isMDXComponent=!0}}]);