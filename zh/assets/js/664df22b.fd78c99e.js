"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[4870],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:k,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[T,w]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=k){const e=b[k];null!=e&&e!==T&&h.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==T&&(j(t),w(a),null!=k&&N(k,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:R,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3022:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},s=void 0,u={unversionedId:"how-to-guides/transfer-container-images",id:"version-1.7/how-to-guides/transfer-container-images",title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf",description:"Rancher Desktop \u63d0\u4f9b dockerd \u548c containerd \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 save \u548c load \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.7/how-to-guides/transfer-container-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/transfer-container-images",permalink:"/zh/1.7/how-to-guides/transfer-container-images",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-1.7/how-to-guides/transfer-container-images.md",tags:[],version:"1.7",frontMatter:{title:"\u4f20\u8f93\u5bb9\u5668\u955c\u50cf"},sidebar:"tutorialSidebar",previous:{title:"Hello World \u793a\u4f8b",permalink:"/zh/1.7/how-to-guides/hello-world-example"},next:{title:"\u4f7f\u7528 k3d \u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",permalink:"/zh/1.7/how-to-guides/create-multi-node-cluster"}},p={},c=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rancher Desktop \u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"dockerd")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd")," \u5bb9\u5668\u5f15\u64ce\u9009\u9879\u6765\u7ba1\u7406\u5bb9\u5668\u3002\u6709\u65f6\u5019\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u955c\u50cf\u4ece\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u4f20\u8f93\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\u5f15\u64ce\u73af\u5883\u3002\u4f60\u4e5f\u53ef\u80fd\u5df2\u7ecf\u4ece\u4e0d\u540c\u7684\u5bb9\u5668\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230 Rancher Desktop\uff0c\u5e76\u4e14\u5e0c\u671b\u5c06\u672c\u5730\u955c\u50cf\u4ece\u4ee5\u524d\u7684\u5e94\u7528\u7a0b\u5e8f\u73af\u5883\u5e26\u5230 Rancher Desktop \u73af\u5883\u4e2d\u3002\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," \u547d\u4ee4\u4f20\u8f93\u955c\u50cf\u7684\u6b65\u9aa4\u3002"),(0,r.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. \u5c06\u6e90\u73af\u5883\u7684\u955c\u50cf\u4fdd\u5b58\u4e3a tar \u5305"),"\u3002"),(0,r.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl save -o local-image.tar image:tag\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl save -o local-images.tar image1:tag1 image2:tag2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6240\u6709\u955c\u50cf\u4fdd\u5b58\u5728\u547d\u540d\u7a7a\u95f4\u4e2d")),(0,r.kt)("p",null,"\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io image ls")," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s.io")," \u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709\u955c\u50cf\u7684\u5217\u8868\uff0c\u56e0\u6b64\u4e0d\u5305\u62ec\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u7684\u955c\u50cf\uff08\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),"\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jq")," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>")," \u7684\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>"),"\uff0c\u547d\u4ee4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>"),"\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"nerdctl -n k8s.io save -o all-local-images-in-namespace.tar")," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002")),(0,r.kt)(l.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,r.kt)(o.Z,{value:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nerdctl -n k8s.io save -o all-local-images-in-namespace.tar $(nerdctl -n k8s.io image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n'))))),(0,r.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5355\u4e2a\u955c\u50cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker save -o local-image.tar image:tag\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u591a\u4e2a\u955c\u50cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker save -o local-images.tar image1:tag1 image2:tag2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u6240\u6709\u672c\u5730\u955c\u50cf")),(0,r.kt)("p",null,"\u4e0b\u9762\u4e24\u4e2a\u547d\u4ee4\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," \u8fdb\u884c JSON \u89e3\u6790\u3002\u957f\u547d\u4ee4\u4f1a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker image ls")," \u5b50\u547d\u4ee4\u4f1a\u83b7\u53d6\u6240\u6709\u672c\u5730\u955c\u50cf\u7684\u5217\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jq")," \u5b50\u547d\u4ee4\u4f1a\u8fc7\u6ee4\u5e76\u683c\u5f0f\u5316\u4e0a\u4e00\u6b65\u83b7\u53d6\u7684\u955c\u50cf\u5217\u8868\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},'select(.Repository!=\\"<none>\\")')," \u90e8\u5206\u4f1a\u8df3\u8fc7\u4ed3\u5e93\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>")," \u7684\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u955c\u50cf\u6807\u7b7e\u7684\u503c\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"<none>"),"\uff0c\u547d\u4ee4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},'if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')')," \u90e8\u5206\u4f1a\u5c06\u955c\u50cf\u7684\u540d\u79f0\u683c\u5f0f\u5316\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"<Repository>:<Tag>"),"\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u547d\u4ee4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"docker save -o all-local-images-in-namespace.tar")," \u90e8\u5206\u4f1a\u5c06\u524d\u4e24\u6b65\u8fc7\u6ee4\u548c\u683c\u5f0f\u5316\u7684\u955c\u50cf\u5217\u8868\u4fdd\u5b58\u5230 tar \u6587\u4ef6\u4e2d\u3002")),(0,r.kt)(l.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!="<none>") | if (.Tag=="<none>") then .Repository else (.Repository+":"+.Tag) end\')\n'))),(0,r.kt)(o.Z,{value:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker save -o all-local-images-in-namespace.tar $(docker image ls --format \'{{json .}}\' | jq -r \'select(.Repository!=\\"<none>\\") | if (.Tag==\\"<none>\\") then .Repository else (.Repository+\\":\\"+.Tag) end\')\n')))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u4f7f\u7528\u76ee\u6807\u73af\u5883\u4e2d\u4fdd\u5b58\u7684 tar \u5305\u52a0\u8f7d\u955c\u50cf"),"\u3002"),(0,r.kt)(l.Z,{groupId:"container-runtime",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"nerdctl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nerdctl load < local-images.tar\n"))),(0,r.kt)(o.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker load < local-images.tar\n")))))}d.isMDXComponent=!0}}]);