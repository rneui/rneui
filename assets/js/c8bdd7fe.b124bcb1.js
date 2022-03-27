"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1784],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||r;return n?i.createElement(u,l(l({ref:t},d),{},{components:n})):i.createElement(u,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92458:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,assets:()=>d,toc:()=>c,default:()=>h});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Version 2.3 Upgrade Guide",author:"Core Team",authorURL:"https://opencollective.com/react-native-elements#team"},p=void 0,s={permalink:"/blog/2020/08/10/2.3-upgrade-guide",source:"@site/blog/2020-08-10-2.3-upgrade-guide.md",title:"Version 2.3 Upgrade Guide",description:"There have been a lot of changes and improvements coming through the pipeline recently with react-native-elements. So in preparing for a version 3, there are some planned deprecations that will be added into version 2.3 and then removed in version 3.",date:"2020-08-10T00:00:00.000Z",formattedDate:"August 10, 2020",tags:[],readingTime:3.015,truncated:!1,authors:[{name:"Core Team",url:"https://opencollective.com/react-native-elements#team"}],frontMatter:{title:"Version 2.3 Upgrade Guide",author:"Core Team",authorURL:"https://opencollective.com/react-native-elements#team"},prevItem:{title:"Auto-generation of Documentation Website",permalink:"/blog/2021/08/12/auto-generation-of-docs"},nextItem:{title:"React Native Elements 1.0",permalink:"/blog/2019/01/27/1.0-release"}},d={authorsImageUrls:[void 0]},c=[{value:"Avatar",id:"avatar",children:[],level:2},{value:"ListItem",id:"listitem",children:[{value:"leftElement, leftIcon, leftAvatar, rightElement, rightIcon, rightAvatar",id:"leftelement-lefticon-leftavatar-rightelement-righticon-rightavatar",children:[],level:3},{value:"title, titleStyle, titleProps, subtitle, subtitleProps, subtitleStyle",id:"title-titlestyle-titleprops-subtitle-subtitleprops-subtitlestyle",children:[],level:3},{value:"contentContainerStyle, rightContentContainerStyle",id:"contentcontainerstyle-rightcontentcontainerstyle",children:[],level:3},{value:"rightTitle, rightTitleStyle, rightTitleProps, rightSubtitle, rightSubtitleStyle, rightSubtitleProps",id:"righttitle-righttitlestyle-righttitleprops-rightsubtitle-rightsubtitlestyle-rightsubtitleprops",children:[],level:3},{value:"input, buttonGroup, switchProps, checkBox, badge, chevron, checkmark",id:"input-buttongroup-switchprops-checkbox-badge-chevron-checkmark",children:[],level:3}],level:2},{value:"Card",id:"card",children:[{value:"title, titleStyle, titleNumberOfLines",id:"title-titlestyle-titlenumberoflines",children:[],level:3},{value:"dividerStyle",id:"dividerstyle",children:[],level:3},{value:"image, imageStyle, imageProps, imageWrapperStyle",id:"image-imagestyle-imageprops-imagewrapperstyle",children:[],level:3},{value:"featuredTitle, featuredTitleStyle, featuredSubtitle, featuredSubtitleStyle",id:"featuredtitle-featuredtitlestyle-featuredsubtitle-featuredsubtitlestyle",children:[],level:3}],level:2},{value:"BottomSheet",id:"bottomsheet",children:[],level:2},{value:"Dark Mode",id:"dark-mode",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There have been a lot of changes and improvements coming through the pipeline recently with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-elements"),". So in preparing for a version 3, there are some planned deprecations that will be added into version 2.3 and then removed in version 3."),(0,r.kt)("p",null,"The reason for these changes is that ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-elements")," regularly gets requests for new features and enhancements quite frequently. The fast and easy method of adding these new features is usually to add another prop into the component that then injects some change into a child component. Unfortunately, this ends up leading to the components having a lot of props, lots of conditional code, and additional code complexity. The solution going forward and into version 3 will be to break down large components into smaller pieces so that it is easier to inject your own code without having to wait for an additional prop to be added."),(0,r.kt)("p",null,"As we continue to build up to version 3, this post will continue to be updated with new step-by-step directions on how to upgrade your code to work around these changes. The RNE team thanks you for your patience, and we hope that you see the value in the upcoming changes."),(0,r.kt)("h2",{id:"avatar"},"Avatar"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"accessory"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"showAccessory"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"accessoryProps")," are all being dprecated. There is now a child component ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar.Accessory")," that you insert as a child component instead."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Avatar>\n  <Avatar.Accessory {...accessoryProps} />\n</Avatar>\n")),(0,r.kt)("h2",{id:"listitem"},"ListItem"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ListItem")," has a large number of deprecated props. ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem")," has been somewhat of a kitchen sink. All the props can be replaced by inserting them as children in the order of left to right as they appear on the screen."),(0,r.kt)("h3",{id:"leftelement-lefticon-leftavatar-rightelement-righticon-rightavatar"},"leftElement, leftIcon, leftAvatar, rightElement, rightIcon, rightAvatar"),(0,r.kt)("p",null,"These can be replaced by using ",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Icon"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," components respectively."),(0,r.kt)("h3",{id:"title-titlestyle-titleprops-subtitle-subtitleprops-subtitlestyle"},"title, titleStyle, titleProps, subtitle, subtitleProps, subtitleStyle"),(0,r.kt)("p",null,"These props can be replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Content"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Subtitle")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem>\n  <ListItem.Content>\n    <ListItem.Title style={titleStyle} {...titleProps}>\n      {title}\n    </ListItem.Title>\n  </ListItem.Content>\n</ListItem>\n")),(0,r.kt)("h3",{id:"contentcontainerstyle-rightcontentcontainerstyle"},"contentContainerStyle, rightContentContainerStyle"),(0,r.kt)("p",null,"These props should be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," prop of ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Content"),"."),(0,r.kt)("h3",{id:"righttitle-righttitlestyle-righttitleprops-rightsubtitle-rightsubtitlestyle-rightsubtitleprops"},"rightTitle, rightTitleStyle, rightTitleProps, rightSubtitle, rightSubtitleStyle, rightSubtitleProps"),(0,r.kt)("p",null,"These props also use ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Content"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Title"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Subtitle"),". Simply add the prop ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," to each one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem>\n  <ListItem.Content right>\n    <ListItem.Title right style={titleStyle} {...titleProps}>\n      {title}\n    </ListItem.Title>\n  </ListItem.Content>\n</ListItem>\n")),(0,r.kt)("h3",{id:"input-buttongroup-switchprops-checkbox-badge-chevron-checkmark"},"input, buttonGroup, switchProps, checkBox, badge, chevron, checkmark"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," prop can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Input"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"buttonGroup")," prop can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.ButtonGroup"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"switchProps")," prop can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Switch"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"checkBox")," prop can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.CheckBox"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"badge")," prop can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"Badge"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chevron")," prop can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"ListItem.Chevron"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"checkmark")," prop can be replaced with :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Icon name="check" size={20} />\n')),(0,r.kt)("h2",{id:"card"},"Card"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Card")," the following props have all been deprecated: ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleStyle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleNumberOfLines"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dividerStyle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"imageStyle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"imageProps"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"imageWrapperStyle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"featuredTitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"featuredTitleStyle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"featuredSubtitle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"featuredSubtitleStyle")),(0,r.kt)("h3",{id:"title-titlestyle-titlenumberoflines"},"title, titleStyle, titleNumberOfLines"),(0,r.kt)("p",null,"Move these props into ",(0,r.kt)("inlineCode",{parentName:"p"},"Card.Title")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Card>\n  <Card.Title style={titleStyle} numberOfLines={titleNumberOfLines}>\n    {title}\n  </Card.Title>\n</Card>\n")),(0,r.kt)("h3",{id:"dividerstyle"},"dividerStyle"),(0,r.kt)("p",null,"The divider and the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividerStyle")," itself were moved into ",(0,r.kt)("inlineCode",{parentName:"p"},"Card.Divider")),(0,r.kt)("h3",{id:"image-imagestyle-imageprops-imagewrapperstyle"},"image, imageStyle, imageProps, imageWrapperStyle"),(0,r.kt)("p",null,"These can be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"Card.Image")," which accepts all ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," props. ",(0,r.kt)("inlineCode",{parentName:"p"},"imageWrapperStyle")," can be attached to a ",(0,r.kt)("inlineCode",{parentName:"p"},"View")," that wraps the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")),(0,r.kt)("h3",{id:"featuredtitle-featuredtitlestyle-featuredsubtitle-featuredsubtitlestyle"},"featuredTitle, featuredTitleStyle, featuredSubtitle, featuredSubtitleStyle"),(0,r.kt)("p",null,"These were both replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"Card.FeaturedTitle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Card.FeaturedSubtitle")),(0,r.kt)("h2",{id:"bottomsheet"},"BottomSheet"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet")," was added in version 2.2, and it was noted that it had some strict dependencies that weren't so well liked. So ",(0,r.kt)("inlineCode",{parentName:"p"},"BottomSheet")," has changed completely and it is encouraged that you checkout the docs page on it again."),(0,r.kt)("h2",{id:"dark-mode"},"Dark Mode"),(0,r.kt)("p",null,"Make sure to checkout the customization page. We added a dark mode configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," that should help out in bootstrapping your app's dark mode."))}h.isMDXComponent=!0}}]);