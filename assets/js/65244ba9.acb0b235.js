"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3688:(e,t,n)=>{n.d(t,{S:()=>j});var r=n(7294);function o(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function a(){return Math.random().toString(36).substring(7)}function i(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function s(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,d(t,n),e.parentNode.replaceChild(t,e)}function l(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function p(e){return e&&!1===e.newWindow?"_self":"_blank"}function d(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var c=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,r=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,r){var o=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(o)}else{var a=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(a)}delete t.pending[n]}}}};c.prototype.request=function(e){var t=this,n=a();return new Promise((function(r,o){t.pending[n]={resolve:r,reject:o},e.payload.__reqid=n,t.port.postMessage(e)}))};var u=function(e,t){var n=this;this.rdc=new c(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};u.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},u.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},u.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var h=[],m=function(e){var t=this;this.id=a(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new u(n.ports[0],n.data.payload),e(t.vm),a())},o=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function a(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),o();var i=0,s=window.setInterval((function(){if(t.vm)a();else{if(i>=20)return a(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void h.forEach((function(e,n){e.id===t.id&&h.splice(n,1)}));i++,o()}}),500)})),h.push(this)},f=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function g(e){-1===f.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+f.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(y("project[title]",e.title)),t.appendChild(y("project[description]",e.description)),t.appendChild(y("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(y("project[tags][]",e))})),e.dependencies&&t.appendChild(y("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(y("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(y("project[files]["+n+"]",e.files[n]))})),t}function v(e,t){var n=g(e);return n.action=o(t)+"/run"+i(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function k(e,t){var n=g(e);n.action=o(t)+"/run"+i(t),n.target=p(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var b={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return h.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new m(e).pending},openGithubProject:function(e,t){window.open(o(t)+"/github/"+e+i(t),p(t))},openProject:function(e,t){k(e,t)},openProjectId:function(e,t){window.open(o(t)+"/edit/"+e+i(t),p(t))},embedGithubProject:function(e,t,n){var r=l(e),a=document.createElement("iframe");return a.src=o(n)+"/github/"+t+i(n),s(r,a,n),b.connect(a)},embedProject:function(e,t,n){var r=l(e),o=v(t,n),a=document.createElement("iframe");return s(r,a,n),a.contentDocument&&a.contentDocument.write(o),b.connect(a)},embedProjectId:function(e,t,n){var r=l(e),a=document.createElement("iframe");return a.src=o(n)+"/edit/"+t+i(n),s(r,a,n),b.connect(a)}};const w=b;var S=n(5350);const N={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function j(e){let{src:t,packages:n=[]}=e;const o=(0,r.useRef)(),a=["core","rxjs",...n],{isDarkTheme:i}=(0,S.Z)();return(0,r.useEffect)((()=>{const e=a.reduce(((e,t)=>(Object.assign(e,N[t]),e)),{});w.embedProject(o.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:i?"dark":"light",height:"500px"})}),[]),r.createElement("section",{style:{height:"500px"}},r.createElement("div",{ref:o}))}},2924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(7294).createContext(void 0)},5350:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(2924);const a=function(){const e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},8985:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));var a=n(3688);const i={},s="State History",l={unversionedId:"features/history/history",id:"features/history/history",isDocsHomePage:!1,title:"State History",description:"The stateHistory function provides a convenient way for undo and redo functionality, saving you the trouble of maintaining a history in the app yourself.",source:"@site/docs/features/history/history.mdx",sourceDirName:"features/history",slug:"/features/history/history",permalink:"/elf/docs/features/history/history",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/history/history.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Persist State",permalink:"/elf/docs/features/persist-state"},next:{title:"Entities State History",permalink:"/elf/docs/features/history/entities-history"}},p=[{value:"API",id:"api",children:[{value:"<code>undo</code>",id:"undo",children:[],level:3},{value:"<code>redo</code>",id:"redo",children:[],level:3},{value:"<code>jumpToPast</code>",id:"jumptopast",children:[],level:3},{value:"<code>jumpToFuture</code>",id:"jumptofuture",children:[],level:3},{value:"<code>clear</code>",id:"clear",children:[],level:3},{value:"<code>pause</code>",id:"pause",children:[],level:3},{value:"<code>resume</code>",id:"resume",children:[],level:3},{value:"<code>hasPast</code>",id:"haspast",children:[],level:3},{value:"<code>hasPast$</code>",id:"haspast-1",children:[],level:3},{value:"<code>hasFuture</code>",id:"hasfuture",children:[],level:3},{value:"<code>hasFuture$</code>",id:"hasfuture-1",children:[],level:3}],level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state-history"},"State History"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"stateHistory")," function provides a convenient way for ",(0,o.kt)("inlineCode",{parentName:"p"},"undo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"redo")," functionality, saving you the trouble of maintaining a history in the app yourself."),(0,o.kt)("p",null,"First, you need to install the package by using the CLI command ",(0,o.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the stat-history package, or via npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-state-history\n")),(0,o.kt)("p",null,"Then, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"stateHistory")," method when you want to start monitoring."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { stateHistory } from '@ngneat/elf-state-history';\n\nconst propsStore = createStore({ name }, withProps<Props>());\n\nexport const propsStateHistory = stateHistory(propsStore);\n")),(0,o.kt)("p",null,"As the second parameter you can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"StateHistoryOptions")," object, which can be used to define the store's maximum age and state comparator function."),(0,o.kt)(a.S,{src:"import { createStore, withProps } from '@ngneat/elf';\nimport { stateHistory } from '@ngneat/elf-state-history';\n\nconst todosStore = createStore(\n  { name: 'auth' },\n  withProps<{ user: string }>({\n    user: '',\n  })\n);\n\nexport const todosStateHistory = stateHistory(todosStore);\n\ntodosStore.subscribe(console.log);\n\ntodosStore.update((state) => ({\n  ...state,\n  user: 'Elf',\n}));\n\ntodosStateHistory.undo();\n",packages:["history"],mdxType:"LiveDemo"}),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"undo"},(0,o.kt)("inlineCode",{parentName:"h3"},"undo")),(0,o.kt)("p",null,"Undo the last change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.undo();\n")),(0,o.kt)("h3",{id:"redo"},(0,o.kt)("inlineCode",{parentName:"h3"},"redo")),(0,o.kt)("p",null,"redo the last change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.redo();\n")),(0,o.kt)("h3",{id:"jumptopast"},(0,o.kt)("inlineCode",{parentName:"h3"},"jumpToPast")),(0,o.kt)("p",null,"Jump to the provided index in the past (assuming index is valid):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.jumpToPast(number);\n")),(0,o.kt)("h3",{id:"jumptofuture"},(0,o.kt)("inlineCode",{parentName:"h3"},"jumpToFuture")),(0,o.kt)("p",null,"Jump to the provided index in the future (assuming index is valid):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.jumpToFuture(number);\n")),(0,o.kt)("h3",{id:"clear"},(0,o.kt)("inlineCode",{parentName:"h3"},"clear")),(0,o.kt)("p",null,"Clear the history:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.clear();\n\npropsStateHistory.clear(customUpdateFn);\n")),(0,o.kt)("h3",{id:"pause"},(0,o.kt)("inlineCode",{parentName:"h3"},"pause")),(0,o.kt)("p",null,"Stop monitoring the state changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.pause();\n")),(0,o.kt)("h3",{id:"resume"},(0,o.kt)("inlineCode",{parentName:"h3"},"resume")),(0,o.kt)("p",null,"Continue monitoring the state changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.resume();\n")),(0,o.kt)("h3",{id:"haspast"},(0,o.kt)("inlineCode",{parentName:"h3"},"hasPast")),(0,o.kt)("p",null,"A boolean flag that returns whether the history is not empty:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.hasPast;\n")),(0,o.kt)("h3",{id:"haspast-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"hasPast$")),(0,o.kt)("p",null,"An observable that returns whether the history is not empty:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.hasPast$;\n")),(0,o.kt)("h3",{id:"hasfuture"},(0,o.kt)("inlineCode",{parentName:"h3"},"hasFuture")),(0,o.kt)("p",null,"A boolean flag that returns whether you're not in the latest step in the history:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.hasFuture;\n")),(0,o.kt)("h3",{id:"hasfuture-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"hasFuture$")),(0,o.kt)("p",null,"An observable that returns whether you're not in the latest step in the history:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"propsStateHistory.hasFuture$;\n")))}c.isMDXComponent=!0}}]);