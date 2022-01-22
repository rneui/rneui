"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2746,756,1520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65612:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>m,metadata:()=>p,toc:()=>c,default:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(16178),i=["components"],s={id:"bottomsheet",title:"BottomSheet",slug:"/bottomsheet"},m=void 0,p={unversionedId:"main/bottomsheet",id:"version-4.0.0-beta.0/main/bottomsheet",title:"BottomSheet",description:"Overlay Modal that displays content from the bottom of the screen.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/BottomSheet.md",sourceDirName:"main",slug:"/bottomsheet",permalink:"/docs/bottomsheet",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/BottomSheet.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"bottomsheet",title:"BottomSheet",slug:"/bottomsheet"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"Badge",permalink:"/docs/badge"},next:{title:"Button",permalink:"/docs/button"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"BottomSheet",id:"bottomsheet",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"BottomSheet",id:"bottomsheet-1",children:[{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"isVisible",id:"isvisible",children:[],level:4},{value:"modalProps",id:"modalprops",children:[],level:4},{value:"scrollViewProps",id:"scrollviewprops",children:[],level:4}],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.kt)("p",null,"This opens from the bottom of the screen."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",null,"Make sure that you have completed ",(0,r.kt)("a",{parentName:"p",href:"/docs/#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.default,{mdxType:"Usage"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"bottomsheet"},"BottomSheet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#isvisible"},"isVisible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#modalprops"},"modalProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#scrollviewprops"},"scrollViewProps"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"bottomsheet-1"},"BottomSheet"),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Style of the bottom sheet's container. Use this to change the color of the underlay."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"isvisible"},"isVisible"),(0,r.kt)("p",null,"Is the modal component shown."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"modalprops"},"modalProps"),(0,r.kt)("p",null,"Additional props handed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ModalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"scrollviewprops"},"scrollViewProps"),(0,r.kt)("p",null,"Used to add props to Scroll view."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ScrollViewProps"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("hr",null))}u.isMDXComponent=!0},16178:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>m,metadata:()=>p,toc:()=>c,default:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(49334),i=["components"],s={},m=void 0,p={unversionedId:"main/usage/BottomSheet/BottomSheet",id:"version-4.0.0-beta.0/main/usage/BottomSheet/BottomSheet",title:"BottomSheet",description:"\x3c!-- To show the guide to configure the BottomSheet Component to a project.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/BottomSheet.md",sourceDirName:"main/usage/BottomSheet",slug:"/main/usage/BottomSheet/",permalink:"/docs/main/usage/BottomSheet/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/BottomSheet.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},c=[],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"\nMake sure that you have completed ",(0,r.kt)("a",{parentName:"p",href:"/docs/#step-3-setup-react-native-safe-area-context"},"Step 3")," in the setup guide before using ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet"),"."),(0,r.kt)("p",null,"Overlay Modal that displays content from the bottom of the screen."),(0,r.kt)(l.default,{mdxType:"Snack"}))}u.isMDXComponent=!0},49334:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>m,toc:()=>p,default:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={},s=void 0,m={unversionedId:"main/usage/BottomSheet/snack/index",id:"version-4.0.0-beta.0/main/usage/BottomSheet/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/snack/index.md",sourceDirName:"main/usage/BottomSheet/snack",slug:"/main/usage/BottomSheet/snack/",permalink:"/docs/main/usage/BottomSheet/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0A%20%20const%20list%20%3D%20%5B%0A%20%20%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%20%20%3C%2FSafeAreaProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20button%3A%20%7B%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);