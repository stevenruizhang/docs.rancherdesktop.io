"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4584],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(3117),a=n(7294),o=n(4334),i=n(2389),l=n(7392),c=n(7094),u=n(2466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:f,groupId:m,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,c.U)(),[w,E]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&E(e)}const D=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==w&&(j(t),E(r),null!=m&&O(m,String(r)))},N=e=>{var t;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:N,onClick:D},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function f(e){const t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},2918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));n(5488),n(5162);const o={sidebar_label:"\u5bb9\u5668\u5f15\u64ce",title:"\u5bb9\u5668\u5f15\u64ce"},i=void 0,l={unversionedId:"ui/preferences/container-engine",id:"version-1.7/ui/preferences/container-engine",title:"\u5bb9\u5668\u5f15\u64ce",description:"\u4e3a Rancher Desktop \u8bbe\u7f6e[\u5bb9\u5668\u8fd0\u884c\u65f6]\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9 [containerd] \u4e3a\u5bb9\u5668\u63d0\u4f9b\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 nerdctl \u6216 [dockerd (moby)] \u6765\u542f\u7528 D\u200b\u200bocker API \u548c Docker CLI\u3002\u4e00\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/ui/preferences/container-engine.md",sourceDirName:"ui/preferences",slug:"/ui/preferences/container-engine",permalink:"/zh/1.7/ui/preferences/container-engine",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/preferences/container-engine.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"\u5bb9\u5668\u5f15\u64ce",title:"\u5bb9\u5668\u5f15\u64ce"},sidebar:"tutorialSidebar",previous:{title:"WSL",permalink:"/zh/1.7/ui/preferences/wsl"},next:{title:"Kubernetes",permalink:"/zh/1.7/ui/preferences/kubernetes"}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a Rancher Desktop \u8bbe\u7f6e",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes/"},"\u5bb9\u5668\u8fd0\u884c\u65f6"),"\u3002\u7528\u6237\u53ef\u4ee5\u9009\u62e9 ",(0,a.kt)("a",{parentName:"p",href:"https://containerd.io/"},"containerd")," \u4e3a\u5bb9\u5668\u63d0\u4f9b\u547d\u540d\u7a7a\u95f4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 nerdctl \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://mobyproject.org/"},"dockerd (moby)")," \u6765\u542f\u7528 D\u200b\u200bocker API \u548c Docker CLI\u3002\u4e00\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002"),(0,a.kt)("p",null,"\u5207\u6362\u5230\u4e0d\u540c\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u73b0\u6709\u5bb9\u5668\u8fd0\u884c\u65f6\u6784\u5efa\u6216\u62c9\u53d6\u7684\u5de5\u4f5c\u8d1f\u8f7d\u548c\u955c\u50cf\u5728\u5207\u6362\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4e0d\u53ef\u7528\u3002")))}p.isMDXComponent=!0}}]);