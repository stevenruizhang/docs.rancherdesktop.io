"use strict";(self.webpackChunkdocs_rancherdesktop_io=self.webpackChunkdocs_rancherdesktop_io||[]).push([[5523],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),l=n(4334),o=n(2389),s=n(7392),i=n(7094),c=n(2466),d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:h,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[T,N]=(0,a.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&k.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),r=k[n].value;r!==T&&(I(t),N(r),null!=h&&w(h,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:P,onClick:E},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905)),l=n(5488),o=n(5162);const s={title:"Command Reference: rdctl"},i=void 0,c={unversionedId:"references/rdctl-command-reference",id:"version-latest/references/rdctl-command-reference",title:"Command Reference: rdctl",description:"rdctl is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. rdctl is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of rdctl supports the below commands (with support for more commands to be added in upcoming releases):",source:"@site/versioned_docs/version-latest/references/rdctl-command-reference.md",sourceDirName:"references",slug:"/references/rdctl-command-reference",permalink:"/references/rdctl-command-reference",draft:!1,editUrl:"https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main/versioned_docs/version-latest/references/rdctl-command-reference.md",tags:[],version:"latest",frontMatter:{title:"Command Reference: rdctl"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/references/architecture"},next:{title:"Bundled Utilities",permalink:"/references/bundled-utilities"}},d={},u=[{value:"rdctl or rdctl help",id:"rdctl-or-rdctl-help",level:2},{value:"rdctl api",id:"rdctl-api",level:2},{value:"rdctl api /vX",id:"rdctl-api-vx",level:2},{value:"rdctl api /v0/settings",id:"rdctl-api-v0settings",level:2},{value:"rdctl list-settings",id:"rdctl-list-settings",level:2},{value:"rdctl set",id:"rdctl-set",level:2},{value:"rdctl shutdown",id:"rdctl-shutdown",level:2},{value:"rdctl start",id:"rdctl-start",level:2},{value:"rdctl version",id:"rdctl-version",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rdctl")," is a command-line tool, included in Rancher Desktop that enables command-line access to GUI features. ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl")," is developed to help users with tasks such as scripting (for automation, CI/CD), troubleshooting, remote management, etc. The current version of ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl")," supports the below commands (with support for more commands to be added in upcoming releases):"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f As the current version of ",(0,a.kt)("inlineCode",{parentName:"strong"},"rdctl")," is experimental, all subcommands names, their arguments, and their output are still subjected to change.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u26a0\ufe0f Rancher Desktop app must be running on your machine to use ",(0,a.kt)("inlineCode",{parentName:"strong"},"rdctl")," commands.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," For many ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl")," commands, there are corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"API")," calls that can be applied. Listed below are the available commands shown in both formats. The ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," examples will assume ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," as the tool being used to talk to the API."),(0,a.kt)("h2",{id:"rdctl-or-rdctl-help"},"rdctl or rdctl help"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl help")," to see the list of available commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> rdctl help\nThe eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.\n\nUsage:\n  rdctl [command]\n\nAvailable Commands:\n  api           Runs API endpoints directly\n  api /vX       Enables you to see the endpoints for a particular version; e.g., v0\n  completion    Generates the autocompletion script for the specified shell\n  help          Help about any command\n  list-settings Lists the current settings\n  set           Updates selected fields in the Rancher Desktop UI and restart the backend\n  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM\n  shutdown      Shuts down the running Rancher Desktop application\n  start         Start up Rancher Desktop or update its settings\n  version       Shows the CLI version\n\nFlags:\n      --config-path string   config file (default C:\\Users\\GunasekharMatamalam\\AppData\\Roaming\\rancher-desktop\\rd-engine.json)\n  -h, --help                 help for rdctl\n      --host string          default is localhost; most useful for WSL\n      --password string      overrides the password setting in the config file\n      --port string          overrides the port setting in the config file\n      --user string          overrides the user setting in the config file\n\nUse "rdctl [command] --help" for more information about a command.\n')),(0,a.kt)("h2",{id:"rdctl-api"},"rdctl api"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl api")," to list all endpoints globally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ ../../../resources/darwin/bin/rdctl api / | jq -r .\n[\n  "GET /",\n  "GET /v0",\n  "GET /v0/settings",\n  "PUT /v0/settings",\n  "PUT /v0/shutdown"\n]\n')),(0,a.kt)("h2",{id:"rdctl-api-vx"},"rdctl api /vX"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl api /v0")," to list all endpoints in a specified version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ rdctl api /v0 | jq -r .\n[\n  "GET /v0",\n  "GET /v0/settings",\n  "PUT /v0/settings",\n  "PUT /v0/shutdown"\n]\n')),(0,a.kt)("h2",{id:"rdctl-api-v0settings"},"rdctl api /v0/settings"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rdctl api [endpoints]")," are commands that are most useful for users working directly with the API itself, and therefore they would not be for everyday use, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl set")," might be. For example,"),(0,a.kt)("p",null,"a command such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rdctl api /v0/settings --method PUT --body \'{"kubernetes": {"enabled": false}}\'\n')),(0,a.kt)("p",null,"is the same as "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rdctl set --kubernetes-enabled=false\n")),(0,a.kt)("p",null,"but less concise and user-friendly."),(0,a.kt)("h2",{id:"rdctl-list-settings"},"rdctl list-settings"),(0,a.kt)(l.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl list-settings")," to see the current active configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> rdctl list-settings\n{\n  "version": 4,\n  "kubernetes": {\n    "version": "1.22.7",\n    "memoryInGB": 2,\n    "numberCPUs": 2,\n    "port": 6443,\n    "containerEngine": "moby",\n    "checkForExistingKimBuilder": false,\n    "enabled": true,\n    "WSLIntegrations": {},\n    "options": {\n      "traefik": true\n    }\n  },\n  "portForwarding": {\n    "includeKubernetesServices": false\n  },\n  "images": {\n    "showAll": true,\n    "namespace": "k8s.io"\n  },\n  "telemetry": true,\n  "updater": true,\n  "debug": false\n}\n'))),(0,a.kt)(o.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run the following API call to see the current active configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Using ",(0,a.kt)("inlineCode",{parentName:"p"},"-X GET")," is optional. You could also just use the preceding command by itself."))),(0,a.kt)("h2",{id:"rdctl-set"},"rdctl set"),(0,a.kt)(l.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl set [flags]")," to set properties. In most of the cases, Kubernetes would be reset on running the ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," command. You can set multiple properties by chaining in a single command. See some examples below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> rdctl set --kubernetes-enabled=false\n> rdctl set --container-engine docker --kubernetes-version 1.21.2\n"))),(0,a.kt)(o.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run the following API call to set properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d \'{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}\' -X PUT\n')))),(0,a.kt)("h2",{id:"rdctl-shutdown"},"rdctl shutdown"),(0,a.kt)(l.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl shutdown")," to gracefully shut down Rancher Desktop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> rdctl shutdown\nShutting down.\n"))),(0,a.kt)(o.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run the following API call to shut down Rancher Desktop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT\n')))),(0,a.kt)("h2",{id:"rdctl-start"},"rdctl start"),(0,a.kt)(l.Z,{groupId:"command-reference",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"CLI",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl start")," to ensure that Rancher Desktop is running and configured as requested."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3\n"))),(0,a.kt)(o.Z,{value:"API",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Run the following API call to ensure Rancher Desktop is running and configured, making sure to fill in your respective user and password values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"\n')))),(0,a.kt)("h2",{id:"rdctl-version"},"rdctl version"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"rdctl version")," to see the current rdctl CLI version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> rdctl version\nrdctl client version: 1.0.0, targeting server version: v0\n")))}m.isMDXComponent=!0}}]);