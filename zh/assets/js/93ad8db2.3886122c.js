"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[373],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(3117),a=r(7294),o=r(4334),l=r(2389),i=r(7392),u=r(7094),c=r(2466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:f,groupId:m,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,u.U)(),[O,E]=(0,a.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=w[m];null!=e&&e!==O&&h.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,r=N.indexOf(t),n=h[r].value;n!==O&&(T(t),E(n),null!=m&&k(m,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;r=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;r=N[t]??N[N.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:x,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},7475:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=r(3117),a=(r(7294),r(3905));r(5488),r(5162);const o={sidebar_label:"\u7aef\u53e3\u8f6c\u53d1",title:"\u7aef\u53e3\u8f6c\u53d1"},l=void 0,i={unversionedId:"ui/port-forwarding",id:"version-latest/ui/port-forwarding",title:"\u7aef\u53e3\u8f6c\u53d1",description:"\u5982\u9700\u8f6c\u53d1\u7aef\u53e3\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-latest/ui/port-forwarding.md",sourceDirName:"ui",slug:"/ui/port-forwarding",permalink:"/zh/ui/port-forwarding",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/ui/port-forwarding.md",tags:[],version:"latest",frontMatter:{sidebar_label:"\u7aef\u53e3\u8f6c\u53d1",title:"\u7aef\u53e3\u8f6c\u53d1"},sidebar:"tutorialSidebar",previous:{title:"\u901a\u7528",permalink:"/zh/ui/general"},next:{title:"\u955c\u50cf",permalink:"/zh/ui/images"}},u={},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u9700\u8f6c\u53d1\u7aef\u53e3\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u627e\u5230 Service \u5e76\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Forward"),"\uff0c"),(0,a.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7aef\u53e3\u6216\u4f7f\u7528\u968f\u673a\u5206\u914d\u7684\u7aef\u53e3\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ","\u2713"," \u6309\u94ae\u6765\u786e\u8ba4\u4f60\u7684\u9009\u62e9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Cancel")," \u6765\u79fb\u9664\u5206\u914d\u7684\u7aef\u53e3\u3002")))}p.isMDXComponent=!0}}]);