(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,r){"use strict";r.r(e),r.d(e,"visit",(function(){return c})),r.d(e,"star",(function(){return l})),r.d(e,"getVisits",(function(){return v})),r.d(e,"getStars",(function(){return d}));var n=r(83),o=r.n(n);!o.a.applicationId&&o.a.init({appId:"aleMaag0GPA84gHE7cLIMiEu-MdYXbMMI",appKey:"jKltRbz0dlM46xcpBJPajso7"});var c=function(t){var e=(new(0,r(286).DeviceUUID)).get();return new o.a.Query("Visit").equalTo("uuid",e).equalTo("target",t).first().then((function(r){return!r&&((r=new(o.a.Object.extend("Visit"))).set("uuid",e),r.set("target",t),r.save(),!0)}))},l=function(t){var e=(new(0,r(286).DeviceUUID)).get();return new o.a.Query("Star").equalTo("uuid",e).equalTo("target",t).first().then((function(r){return!r&&((r=new(o.a.Object.extend("Star"))).set("uuid",e),r.set("target",t),r.save(),!0)}))},v=function(t){return new o.a.Query("Visit").equalTo("target",t).count()},d=function(t){return new o.a.Query("Star").equalTo("target",t).count()}},211:function(t,e,r){"use strict";r.r(e);r(26);var n={name:"PostContentsComponent",props:{items:{type:Array,default:function(){return[]}},active:{type:Number,default:function(){return 0}},width:{type:String,default:function(){return""}}}},o=(r(425),r(55)),c=r(62),l=r.n(c),v=r(213),d=r(43),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"px-2 sticky-top",style:{width:t.width||"200px"},attrs:{flat:"",tile:""}},t._l(t.items,(function(e,n){var title=e.title,o=e.level,c=e.scrollTop;return r("v-card-text",{key:n,staticClass:"left-colored py-0 content-item text-truncate",class:["pl-"+3*(o-1),"content-item-level-"+o,{"active-content-item":t.active===n}],attrs:{title:title},on:{click:function(e){return t.$emit("to",c)}}},[t._v("\n    "+t._s(title)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCardText:d.b})},212:function(t,e,r){"use strict";r.r(e);var n=r(27),o=(r(25),r(59),r(39),r(96),r(285)),c=r(140),l={name:"StatisticsComponent",props:{date:{default:function(){return""},type:String}},data:function(){return{stars:"-",visits:"-",addStarTimerHandle:null}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.getStars)(t.$route.path);case 2:return t.stars=e.sent,e.next=5,Object(c.getVisits)(t.$route.path);case 5:t.visits=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{plainlyAddStar:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r(140),o=n.star,e.next=3,o(t.$route.path.replace(/\/$/,""));case 3:e.sent?t.stars+=1:t.$store.dispatch("notify",t.$store.state.starredFeedbackArr[Math.floor(Math.random()*t.$store.state.starredFeedbackArr.length)]);case 5:case"end":return e.stop()}}),e)})))()},addStar:function(t){var e=this;Object(o.b)(t),this.addStarTimerHandle&&clearTimeout(this.addStarTimerHandle),this.addStarTimerHandle=setTimeout((function(){e.plainlyAddStar(),e.addStarTimerHandle=null}),500)}}},v=r(55),d=r(62),f=r.n(d),m=r(449),h=r(213),x=r(43),_=r(460),w=r(209),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticClass:"py-0 d-flex align-center justify-space-between"},[r("span",[r("v-btn",{attrs:{icon:"","x-small":""}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1),t._v("\n      Visits\n    ")],1),t._v(" "),r("v-chip",{staticClass:"px-2",attrs:{small:""}},[t._v(t._s(t.visits))])],1),t._v(" "),r("v-card-text",{staticClass:"py-2 d-flex align-center justify-space-between"},[r("span",[r("v-btn",{attrs:{icon:"","x-small":"",disabled:"-"===t.stars},on:{click:t.addStar}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-star ")])],1),t._v("\n      Stars\n    ")],1),t._v(" "),r("v-chip",{staticClass:"px-2",attrs:{small:""}},[t._v(t._s(t.stars))])],1),t._v(" "),r("v-card-text",{staticClass:"py-0 d-flex align-center justify-space-between"},[r("span",[r("v-btn",{attrs:{icon:"","x-small":""}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-calendar")])],1),t._v("\n      Posted on\n    ")],1),t._v(" "),r("v-chip",{staticClass:"px-2",attrs:{small:""}},[t._v(t._s(new Date(t.date).toLocaleDateString()))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:m.a,VCard:h.a,VCardText:x.b,VChip:_.a,VIcon:w.a})},257:function(t,e,r){var content=r(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("503aa108",content,!0,{sourceMap:!1})},267:function(t,e,r){var content=r(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5ce2b2ab",content,!0,{sourceMap:!1})},284:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("52a28140",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return l}));r(39);var n=r(302),o=r.n(n),c=function(t){var div=document.createElement("div");div.style="position: fixed; width: 100vw; height:100vh; top: 0; left: 0; z-index: 999;",document.body.appendChild(div),o()({x:t.x,y:t.y,colors:["#4FC3F7","#4DD0E1","#303F9F","#7E57C2","#F8BBD0","#FFAB91","#E57373"],bubbleSizeMaximum:8,parentNode:div}),setTimeout((function(){return div.remove()}),800)},l=function(t){var e=Math.floor(t/1e3),r=Math.floor(t/1e6);return r>0?"".concat(r,"m+"):e>0?"".concat(e,"k+"):t}},287:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("2c21a822",content,!0,{sourceMap:!1})},306:function(t,e,r){"use strict";r(9),r(10),r(11),r(15),r(8),r(16);var n=r(2);r(3),r(31);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"CategoryLayout",scrollToTop:!0,data:function(){return{showToTop:!1,drawer:!1}},computed:{aliasNameMap:function(){return this.$store.state.categories.reduce((function(pre,t){return c(c({},pre),{},Object(n.a)({},t.alias,t.name))}),{})},category:function(){return this.aliasNameMap[this.$route.params.category]||"All Posts"},concise:function(){return this.$vuetify.breakpoint.mdAndDown}},watch:{concise:function(t){t||(this.drawer=!1)}},mounted:function(){window.addEventListener("scroll",this.checkWhetherShowToTop)},beforeDestroy:function(){window.removeEventListener("scroll",this.checkWhetherShowToTop)},methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})},checkWhetherShowToTop:function(){this.showToTop=window.scrollY>800}}},v=(r(397),r(55)),d=r(62),f=r.n(d),m=r(453),h=r(208),x=r(463),_=r(449),w=r(213),y=r(43),C=r(455),T=r(464),S=r(456),k=r(69),j=r(209),V=r(309),O=r(454),P=r(461),E=r(462),A=r(457),M=r(458),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-container",{ref:"container",attrs:{fluid:""}},[r("v-row",{staticClass:"justify-center"},[t.concise?t._e():r("v-col",{staticClass:"pt-12",staticStyle:{overflow:"visible !important"},style:{width:(t.$vuetify.breakpoint.lgAndDown?260:300)+"px"},attrs:{cols:"auto"}},[r("v-card",{staticClass:"sticky-top pt-4",attrs:{flat:""}},[r("v-card",{staticClass:"text-center py-4 rounded-xl flex-grow-1",staticStyle:{overflow:"visible !important"},attrs:{outlined:""}},[r("v-avatar",{attrs:{size:"100",color:"#f6f8fa"}},[r("v-img",{attrs:{src:"logo.png"}})],1),t._v(" "),r("v-card-title",{staticClass:"justify-center pb-0"},[t._v("\n                Allen Tao\n              ")]),t._v(" "),r("v-card-text",[t._v(" Bag'em up! ")]),t._v(" "),r("v-card-text",{staticClass:"d-flex justify-space-around",attrs:{id:"contacts"}},[r("v-menu",{attrs:{right:"","offset-x":"",attach:"#contacts"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-1",attrs:{small:"",icon:""}},n),[r("v-icon",{attrs:{small:""}},[t._v(" mdi-wechat ")])],1)]}}],null,!1,242277778)},[t._v(" "),r("v-card",{staticClass:"pa-1",staticStyle:{"z-index":"1"}},[r("v-img",{attrs:{src:"wechat.jpg",width:"100"}})],1)],1),t._v(" "),r("v-menu",{attrs:{right:"","offset-x":"",attach:"#contacts"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-1",attrs:{small:"",icon:""}},n),[r("v-icon",{attrs:{small:""}},[t._v(" mdi-qqchat ")])],1)]}}],null,!1,2697697984)},[t._v(" "),r("v-card",{staticClass:"pa-1",staticStyle:{"z-index":"12"}},[r("v-img",{attrs:{src:"qq.png",width:"100"}})],1)],1),t._v(" "),r("v-btn",{staticClass:"mr-1",attrs:{small:"",icon:"",href:"https://github.com/boring-plans"}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-github")])],1),t._v(" "),r("v-btn",{staticClass:"mr-1",attrs:{small:"",icon:"",href:"mailto://taoqingqiu@gmail.com"}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-email")])],1)],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"10",lg:"7",xl:"6"}},[r("v-row",{staticClass:"py-0 align-center",attrs:{"no-gutters":""}},[r("v-breadcrumbs",{staticClass:"py-4 px-1",attrs:{items:[{text:"Home",to:"/"},{text:t.category}]}}),t._v(" "),r("v-spacer"),t._v(" "),t.concise?r("v-avatar",{staticClass:"mr-2",attrs:{color:"#f6f8fa",size:"28"},on:{click:function(e){t.drawer=!0}}},[r("v-img",{attrs:{src:"logo.png"}})],1):t._e()],1),t._v(" "),r("v-card",{staticClass:"px-6 rounded-xl py-4 mb-6",attrs:{outlined:""}},[r("Nuxt")],1)],1)],1),t._v(" "),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showToTop,expression:"showToTop"}],attrs:{fab:"",small:"",fixed:"",bottom:"",right:"",elevation:"2"},on:{click:t.toTop}},[r("v-icon",[t._v("mdi-chevron-up")])],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{fixed:"",right:"",temporary:"",width:"300"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-card",{staticClass:"d-flex px-4 pt-2 pb-0 align-center justify-space-between",attrs:{flat:""}},[r("v-card-text",{staticClass:"px-0 text-center"},[r("v-avatar",{attrs:{size:"64",color:"#f6f8fa"}},[r("v-img",{attrs:{src:"logo.png"}})],1)],1),t._v(" "),r("v-divider",{staticClass:"my-12",attrs:{vertical:""}}),t._v(" "),r("v-card-text",{staticClass:"d-flex justify-space-around flex-column"},[r("v-card-title",{staticClass:"pb-0 px-0"},[t._v(" Allen Tao ")]),t._v(" "),r("v-card-text",{staticClass:"px-0"},[t._v(" Bag'em up! ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:m.a,VAvatar:h.a,VBreadcrumbs:x.a,VBtn:_.a,VCard:w.a,VCardText:y.b,VCardTitle:y.c,VCol:C.a,VContainer:T.a,VDivider:S.a,VFabTransition:k.c,VIcon:j.a,VImg:V.a,VMain:O.a,VMenu:P.a,VNavigationDrawer:E.a,VRow:A.a,VSpacer:M.a})},307:function(t,e,r){"use strict";var n={name:"DefaultLayout"},o=r(55),c=r(62),l=r.n(c),v=r(453),d=r(454),f=r(459),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("Nuxt"),t._v(" "),r("v-snackbar",{attrs:{value:t.$store.state.snackbar,color:"rgba(0,0,0,0.7)"}},[t._v("\n      "+t._s(t.$store.state.snackbarText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:v.a,VMain:d.a,VSnackbar:f.a})},308:function(t,e,r){"use strict";r(9),r(10),r(11),r(15),r(16);var n=r(2),o=(r(3),r(39),r(8),r(53),r(100)),c=r(211),l=r(212);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"PostLayout",components:{PostContents:c.default,Statistics:l.default},scrollToTop:!0,data:function(){return{titles:[],showToTop:!1,windowScrollY:0,drawer:!1,visits:"-",stars:"-"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({activeContentTitle:function(){var t=this,e=1/0;return this.titles.reduce((function(pre,r,n){var o=Math.abs(r.scrollTop/t.$refs.container.offsetHeight-t.windowScrollY/(t.$refs.container.offsetHeight-window.screen.height));return o<e?(e=o,n):pre}),0)},concise:function(){return this.$vuetify.breakpoint.mdAndDown},maxDrawerContentsHeight:function(){return window.screen.height-500}},Object(o.b)(["post","lastPost","nextPost"])),watch:{$route:function(t){var e=this;t&&setTimeout((function(){e.initialize()}),100)},concise:function(t){t||(this.drawer=!1)}},mounted:function(){this.initialize(),window.addEventListener("scroll",this.updateWindowScrollY),window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("scroll",this.updateWindowScrollY),window.removeEventListener("resize",this.onResize)},methods:{toTop:function(){window.scrollTo({top:0,behavior:"smooth"})},toTitle:function(t){window.scrollTo({top:t,behavior:"smooth"})},initialize:function(){var t=this;this.titles=[];var e=document.getElementsByTagName("article")[0];e&&document.querySelectorAll("h2,h3,h4,h5,h6").forEach((function(r){var n=r.offsetTop+e.offsetTop+40;t.titles.push({level:parseInt(r.nodeName.slice(1)),title:r.innerText,scrollTop:n}),r.innerHTML="<a>".concat(r.innerText,"</a>"),r.addEventListener("click",(function(){return t.toTitle(n)}))})),setTimeout((function(){t.initializeComments()}),370)},updateWindowScrollY:function(){this.windowScrollY=window.scrollY,this.showToTop=window.scrollY>800},initializeComments:function(){var t=document.getElementById("vcomments");t&&(t.innerHTML=""),new(r(429))({el:"#vcomments",appId:"u25kUK10If24GJhPDBqHfDle-gzGzoHsz",appKey:"JjtyBxp9QAmFt0gDRsvUOCEl",avatar:"retro",placeholder:"This time, Yuri's going down!",path:this.$route.path})},onResize:function(){var t=this;setTimeout((function(){var e=document.getElementById("vcomments");e&&""===e.innerHTML&&t.initializeComments()}),370)}}},f=d,m=(r(430),r(55)),h=r(62),x=r.n(h),_=r(453),w=r(208),y=r(463),C=r(449),T=r(213),S=r(43),k=r(460),j=r(455),V=r(464),O=r(456),P=r(69),E=r(209),A=r(309),M=r(210),D=r(136),$=r(103),z=r(454),B=r(461),N=r(462),L=r(457),I=r(459),H=r(458),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-container",{ref:"container",attrs:{fluid:""}},[r("v-row",{staticClass:"justify-center"},[t.concise?t._e():r("v-col",{staticClass:"pt-12",staticStyle:{overflow:"visible !important"},style:{width:(t.$vuetify.breakpoint.lgAndDown?260:300)+"px"},attrs:{cols:"auto"}},[r("v-card",{staticClass:"sticky-top pt-4",attrs:{flat:""}},[r("v-card",{staticClass:"text-center py-4 rounded-xl flex-grow-1",staticStyle:{overflow:"visible !important"},attrs:{outlined:""}},[r("v-avatar",{attrs:{size:"100",color:"#f6f8fa"}},[r("v-img",{attrs:{src:"logo.png"}})],1),t._v(" "),r("v-card-title",{staticClass:"justify-center pb-0"},[t._v("\n                Allen Tao\n              ")]),t._v(" "),r("v-card-text",[t._v(" Bag'em up! ")]),t._v(" "),r("v-card-text",{staticClass:"d-flex justify-space-around",attrs:{id:"contacts"}},[r("v-menu",{attrs:{right:"","offset-x":"",attach:"#contacts"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-1",attrs:{small:"",icon:""}},n),[r("v-icon",{attrs:{small:""}},[t._v(" mdi-wechat ")])],1)]}}],null,!1,242277778)},[t._v(" "),r("v-card",{staticClass:"pa-1",staticStyle:{"z-index":"1"}},[r("v-img",{attrs:{src:"wechat.jpg",width:"100"}})],1)],1),t._v(" "),r("v-menu",{attrs:{right:"","offset-x":"",attach:"#contacts"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({staticClass:"mr-1",attrs:{small:"",icon:""}},n),[r("v-icon",{attrs:{small:""}},[t._v(" mdi-qqchat ")])],1)]}}],null,!1,2697697984)},[t._v(" "),r("v-card",{staticClass:"pa-1",staticStyle:{"z-index":"12"}},[r("v-img",{attrs:{src:"qq.png",width:"100"}})],1)],1),t._v(" "),r("v-btn",{staticClass:"mr-1",attrs:{small:"",icon:"",href:"https://github.com/boring-plans"}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-github")])],1),t._v(" "),r("v-btn",{staticClass:"mr-1",attrs:{small:"",icon:"",href:"mailto://taoqingqiu@gmail.com"}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-email")])],1)],1)],1),t._v(" "),t.post?[t.post.tags&&t.post.tags.length?r("v-card",{staticClass:"mt-3 rounded-xl py-4",attrs:{outlined:""}},[r("v-card-text",{staticClass:"py-0 d-flex align-center"},t._l(t.post.tags,(function(e,n){return r("v-chip",{key:n,staticClass:"mr-1 px-2",attrs:{small:""}},[t._v("\n                    "+t._s(e)+"\n                  ")])})),1)],1):t._e(),t._v(" "),r("v-card",{staticClass:"mt-3 rounded-xl py-4",attrs:{flat:"",outlined:""}},[r("statistics",{key:t.$route.path,attrs:{date:t.post.date}})],1)]:t._e()],2)],1),t._v(" "),r("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"10",lg:"7",xl:"6"}},[r("v-row",{staticClass:"py-0 align-center",attrs:{"no-gutters":""}},[t.post?r("v-breadcrumbs",{staticClass:"py-4 px-1",attrs:{items:[{text:"Home",to:"/"},{text:t.post.category,disabled:!1,to:"/"+t.post.categoryAlias,exact:!0}]}}):t._e(),t._v(" "),r("v-spacer"),t._v(" "),t.concise?r("v-avatar",{staticClass:"mr-2",attrs:{size:"28",color:"#f6f8fa"},on:{click:function(e){t.drawer=!0}}},[r("v-img",{attrs:{src:"logo.png"}})],1):t._e()],1),t._v(" "),r("v-card",{staticClass:"px-6 rounded-xl py-4 mb-6",attrs:{outlined:""}},[t.post?r("v-card-title",{staticClass:"pa-0",staticStyle:{"font-size":"30px","font-weight":"520"}},[t._v("\n              "+t._s(t.post.title)+"\n            ")]):t._e(),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("Nuxt"),t._v(" "),r("v-card-text",{staticClass:"pt-6 px-0"},[r("v-divider")],1),t._v(" "),t.lastPost&&t.nextPost?[t.$vuetify.breakpoint.smAndUp?r("v-row",{staticClass:"px-2 text-truncate justify-space-between py-3"},[r("v-btn",{staticClass:"px-1",attrs:{text:"",small:"",to:"/"+t.lastPost.category+t.lastPost.path}},[r("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-arrow-left")]),t._v("\n                  "+t._s(t.lastPost.title)+"\n                ")],1),t._v(" "),r("v-btn",{staticClass:"px-1",attrs:{text:"",small:"",to:"/"+t.nextPost.category+t.nextPost.path}},[t._v("\n                  "+t._s(t.nextPost.title)+"\n                  "),r("v-icon",{staticClass:"ml-1",attrs:{small:""}},[t._v("mdi-arrow-right ")])],1)],1):r("v-list",{key:t.$route.path,staticClass:"px-0",attrs:{dense:""}},[r("v-list-item",{staticClass:"px-1",attrs:{to:"/"+t.lastPost.category+t.lastPost.path}},[r("v-list-item-subtitle",{staticClass:"flex-grow-0",staticStyle:{"flex-basis":"20%"}},[t._v("\n                    Last:\n                  ")]),t._v(" "),r("v-list-item-title",[t._v("\n                    "+t._s(t.lastPost.title)+"\n                  ")])],1),t._v(" "),r("v-list-item",{staticClass:"px-1",attrs:{to:"/"+t.nextPost.category+t.nextPost.path}},[r("v-list-item-subtitle",{staticClass:"flex-grow-0",staticStyle:{"flex-basis":"20%"}},[t._v("\n                    Next:\n                  ")]),t._v(" "),r("v-list-item-title",[t._v("\n                    "+t._s(t.nextPost.title)+"\n                  ")])],1)],1)]:t._e()],2),t._v(" "),r("div",{attrs:{id:"vcomments"}})],1),t._v(" "),!t.concise&&t.post?r("v-col",{staticClass:"pt-16",attrs:{cols:"auto"}},[r("post-contents",{attrs:{items:t.titles,active:t.activeContentTitle},on:{to:t.toTitle}})],1):t._e()],1),t._v(" "),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showToTop,expression:"showToTop"}],attrs:{fab:"",small:"",fixed:"",bottom:"",right:"",elevation:"2"},on:{click:t.toTop}},[r("v-icon",[t._v("mdi-chevron-up")])],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{fixed:"",right:"",temporary:"",width:"300"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-card",{staticClass:"d-flex px-4 pt-2 pb-0 align-center justify-space-between",attrs:{flat:""}},[r("v-card-text",{staticClass:"px-0 text-center"},[r("v-avatar",{attrs:{size:"64",color:"#f6f8fa"}},[r("v-img",{attrs:{src:"logo.png"}})],1)],1),t._v(" "),r("v-divider",{staticClass:"my-12",attrs:{vertical:""}}),t._v(" "),r("v-card-text",{staticClass:"d-flex justify-space-around flex-column"},[r("v-card-title",{staticClass:"pb-0 px-0"},[t._v(" Newest Boy ")]),t._v(" "),r("v-card-text",{staticClass:"px-0"},[t._v(" Bag'em up! ")])],1)],1),t._v(" "),t.post?[r("v-divider",{staticClass:"ma-6"}),t._v(" "),r("v-card",{staticClass:"px-4 py-2 mt-3",attrs:{flat:""}},[r("statistics",{key:t.$route.path,attrs:{date:t.post.date}})],1),t._v(" "),t.titles&&t.titles.length?[r("v-divider",{staticClass:"ma-6"}),t._v(" "),r("v-card",{staticClass:"px-6 py-2 mt-3 overflow-auto",style:{maxHeight:t.maxDrawerContentsHeight+"px"},attrs:{flat:""}},[r("post-contents",{attrs:{items:t.titles,active:t.activeContentTitle,width:"100%"},on:{to:t.toTitle}})],1)]:t._e()]:t._e()],2),t._v(" "),r("v-snackbar",{attrs:{value:t.$store.state.snackbar,color:"rgba(0,0,0,0.7)"}},[t._v("\n        "+t._s(t.$store.state.snackbarText)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;x()(component,{Statistics:r(212).default,PostContents:r(211).default}),x()(component,{VApp:_.a,VAvatar:w.a,VBreadcrumbs:y.a,VBtn:C.a,VCard:T.a,VCardText:S.b,VCardTitle:S.c,VChip:k.a,VCol:j.a,VContainer:V.a,VDivider:O.a,VFabTransition:P.c,VIcon:E.a,VImg:A.a,VList:M.a,VListItem:D.a,VListItemSubtitle:$.b,VListItemTitle:$.c,VMain:z.a,VMenu:B.a,VNavigationDrawer:N.a,VRow:L.a,VSnackbar:I.a,VSpacer:H.a})},322:function(t,e,r){r(323),t.exports=r(324)},353:function(t,e,r){var map={"./404/13.svg":354,"./404/14.svg":355,"./404/16.svg":356,"./404/24.svg":357,"./404/4.svg":358,"./404/9.svg":359,"./error/25.svg":360,"./error/32.svg":361};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=353},354:function(t,e,r){t.exports=r.p+"img/13.88a9ace.svg"},355:function(t,e,r){t.exports=r.p+"img/14.f5b5f48.svg"},356:function(t,e,r){t.exports=r.p+"img/16.1b93c0d.svg"},357:function(t,e,r){t.exports=r.p+"img/24.a645871.svg"},358:function(t,e,r){t.exports=r.p+"img/4.25aa8af.svg"},359:function(t,e,r){t.exports=r.p+"img/9.89497bd.svg"},360:function(t,e,r){t.exports=r.p+"img/25.114d69c.svg"},361:function(t,e,r){t.exports=r.p+"img/32.c4ca431.svg"},362:function(t,e,r){"use strict";r(257)},363:function(t,e,r){var n=r(18)(!1);n.push([t.i,"h1[data-v-67cdfbd2]{font-size:20px}html[data-v-67cdfbd2]{overflow:auto}",""]),t.exports=n},395:function(t,e,r){var content=r(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("2998b330",content,!0,{sourceMap:!1})},396:function(t,e,r){var n=r(18)(!1);n.push([t.i,"html{overflow:auto!important}",""]),t.exports=n},397:function(t,e,r){"use strict";r(267)},398:function(t,e,r){var n=r(18)(!1);n.push([t.i,".sticky-top{position:-webkit-sticky!important;position:sticky!important;top:0!important}",""]),t.exports=n},425:function(t,e,r){"use strict";r(284)},426:function(t,e,r){var n=r(18)(!1);n.push([t.i,".left-colored{border-left:2px solid #e5e5e5}.active-content-item{border-color:#1867c0;background-color:rgba(24,103,192,.07)!important}.content-item{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:4px;padding-bottom:4px}.content-item:hover{background-color:hsla(0,0%,96.5%,.66667)}.content-item-level-2{font-weight:700!important;color:rgba(0,0,0,.66667)!important}.content-item-level-5,.content-item-level-6{font-size:12px!important}",""]),t.exports=n},430:function(t,e,r){"use strict";r(287)},431:function(t,e,r){var n=r(18)(!1);n.push([t.i,".sticky-top{position:-webkit-sticky!important;position:sticky!important;top:0!important}#vcomments .vwrap{border-radius:24px;border:thin solid rgba(0,0,0,.12)}#veditor{letter-spacing:.5px}",""]),t.exports=n},442:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"actions",(function(){return c}));r(39);var n=function(){return{categories:[{name:"Cheap Talk",description:"写程序以前, 他是个诗人",alias:"cheap-talk"},{name:"Stereotyped",description:"有趣的八股文",alias:"stereotyped"},{name:"那些杀不死我的",description:"记录了一些, 偶尔迫不得已而探索的一些过时、冷门或无趣的技术, 很显然用了尼大师的典, 「What Doesn't Kill You Makes You Stronger」",alias:"what-doesnt-kill-you"},{name:"军体拳",description:"天下绝学千千万, 军体神拳只此般",alias:"basic-skill"},{name:"Boring Plans",description:"一些 Pet Projects 的开发日志",alias:"boring-plans"},{name:"AC!AC!AC!",description:"主要是 LeetCode 刷题",alias:"accepted"},{name:"Quick Start",description:"快速了解",alias:"quick-start"},{name:"掉落",description:"比如丘丘胶、蝙蝠翅膀、禽肉等等",alias:"assorted-harvest"}],apps:[{name:"2048",to:"/boring-plans/2020-001"}],404:["4","9","13","14","16","24"],error:["32","25"],post:null,lastPost:null,nextPost:null,snackbar:!1,snackbarText:"",starredFeedbackArr:["You've already starred!","U've already starred : )","Stop! Stop your repeatedly boring behavior!","Waahoo!"]}},o={SET_POST:function(t,e){t.post=e},SET_LAST_POST:function(t,e){t.lastPost=e},SET_NEXT_POST:function(t,e){t.nextPost=e},SET_SNACKBAR:function(t,e){t.snackbar=e},SET_SNACKBAR_TEXT:function(t,e){t.snackbarText=e}},c={notify:function(t,e){var r=t.commit;r("SET_SNACKBAR",!0),r("SET_SNACKBAR_TEXT",e),setTimeout((function(){r("SET_SNACKBAR",!1)}),2e3)}}},94:function(t,e,r){"use strict";r(30);var n={name:"EmptyLayout",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}},computed:{backgroundImage:function(){var t=404===this.error.statusCode?"404":"error",e=this.$store.state[t],n=r(353)("./".concat(t,"/").concat(e[Math.floor(Math.random()*e.length)],".svg"));return"url(".concat(n,")")}}},o=(r(362),r(55)),c=r(62),l=r.n(c),v=r(453),d=r(449),f=r(464),m=r(454),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-container",{staticClass:"justify-end align-end",staticStyle:{"background-size":"contain","background-position":"center center"},style:{backgroundImage:t.backgroundImage},attrs:{fluid:"","fill-height":""}},[r("v-btn",{attrs:{text:"",to:"/",small:""}},[t._v(" Back to home ")])],1)],1)],1)}),[],!1,null,"67cdfbd2",null);e.a=component.exports;l()(component,{VApp:v.a,VBtn:d.a,VContainer:f.a,VMain:m.a})}},[[322,5,1,6]]]);