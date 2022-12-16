"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5105],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3687:function(e,t,a){var r=a(412);const n=!!r.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!r.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=n?"ios":"android",i=n?"macOS":o?"Windows":"Linux";t.Z={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",defaultAndroidLanguage:"java",defaultJavaScriptSpecLanguages:"typescript",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo Go Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macOS"},{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}],javaScriptSpecLanguages:[{label:"TypeScript",value:"typescript"},{label:"Flow",value:"flow"}],snackLanguages:[{label:"TypeScript",value:"typescript"},{label:"JavaScript",value:"javascript"}],defaultSnackLanguage:"typescript"}},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(3117),n=a(7294),o=a(4334),l=a(2389),i=a(7392),u=a(7094),s=a(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:f,groupId:m,className:b}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=f??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:k}=(0,u.U)(),[O,T]=(0,n.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=m){const e=h[m];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,a=x.indexOf(t),r=g[a].value;r!==O&&(E(t),T(r),null!=m&&k(m,String(r)))},P=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:P,onClick:S},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,n.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},515:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=a(3117),n=(a(7294),a(3905)),o=a(5488),l=a(5162),i=a(3687);const u={sidebar_label:"Port forwarding",title:"Port forwarding"},s=void 0,c={unversionedId:"ui/port-forwarding",id:"version-1.7/ui/port-forwarding",title:"Port forwarding",description:"To forward a port:",source:"@site/versioned_docs/version-1.7/ui/port-forwarding.md",sourceDirName:"ui",slug:"/ui/port-forwarding",permalink:"/1.7/ui/port-forwarding",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/ui/port-forwarding.md",tags:[],version:"1.7",frontMatter:{sidebar_label:"Port forwarding",title:"Port forwarding"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/1.7/ui/general"},next:{title:"Images",permalink:"/1.7/ui/images"}},d={},p=[],f={toc:p};function m(e){let{components:t,...u}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To forward a port:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Find the service and click ",(0,n.kt)("strong",{parentName:"li"},"Forward"),"."),(0,n.kt)("li",{parentName:"ol"},"Specify a port to use or use the randomly assigned port."),(0,n.kt)("li",{parentName:"ol"},"Click the ","\u2713"," button to confirm your selection."),(0,n.kt)("li",{parentName:"ol"},"Optional: click ",(0,n.kt)("strong",{parentName:"li"},"Cancel")," to remove the port assigned.")),(0,n.kt)(o.Z,{groupId:"os",defaultValue:i.Z.defaultOs,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2190).Z,width:"926",height:"593"}))),(0,n.kt)(l.Z,{value:"macOS",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1731).Z,width:"2104",height:"1424"}))),(0,n.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3655).Z,width:"940",height:"626"})))))}m.isMDXComponent=!0},3655:function(e,t,a){t.Z=a.p+"assets/images/Linux_PortForwarding-b868866b89ce79899684ab3cfa1b0747.png"},2190:function(e,t,a){t.Z=a.p+"assets/images/Windows_PortForwarding-6052407b6b4a91a78eaf5eaa7e7708d1.png"},1731:function(e,t,a){t.Z=a.p+"assets/images/macOS_PortForwarding-c099d0deefe4946bd223b3c55b82e7fc.png"}}]);