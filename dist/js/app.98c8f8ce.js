(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-24dabd0e":"7c8221ac","chunk-30da5ec3":"4e3cea07","chunk-498eaff2":"d0dab7c3","chunk-7ef992d8":"d84fd893","chunk-1b06be52":"c859c933","chunk-c65830d4":"62bf502b","chunk-933a4cf0":"d9a7c932","chunk-c3513128":"47b414f1"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-24dabd0e":1,"chunk-30da5ec3":1,"chunk-498eaff2":1,"chunk-1b06be52":1,"chunk-c65830d4":1,"chunk-933a4cf0":1,"chunk-c3513128":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-24dabd0e":"959e6a73","chunk-30da5ec3":"b707f0bb","chunk-498eaff2":"7bc7df89","chunk-7ef992d8":"31d6cfe0","chunk-1b06be52":"4d7a2c6d","chunk-c65830d4":"d7785459","chunk-933a4cf0":"789aa385","chunk-c3513128":"4ff9b6ee"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"2e4e":function(e,t,n){"use strict";var a=n("45cc"),r=n.n(a);r.a},"3fab":function(e,t){e.exports={colon:":",navbar:{index:"Home Page",news:"News",heros:"Hero Map",african:"Sim Summon",strategy:"Card Strategy(Temporarily Closed)",rate:"Meta Report (PC)",language:"Language"},index:{welcome:"Welcome to My Turn tools site!",update:"Update Records:",existing:"Existing Functions:",subsequent:"Subsequent Functions:",subsequentFunctions:["Step by step to multi-language"],notice:["Updating!Sorry for waiting!","News updates complete",'Give "UP cards" a badge for its amount']},heros:{sortBy:["Sort by cost","Sort by color","Sort by rare","Sort by health"],skill:"Skill",cost:"Cost",derivative:"derivative"},african:{accumulation:"Draw card accumulation",upTitle:"UP cards",hasCost:"Has cost:",gold:" Gold",diamond:" Diamond",next:"Next box"},rate:{search:"Search:",chooseMonth:"Choose month",generate:"Generate:",range:"Specific date range",createPicture:"Generate picture",title:"Title language:"}}},"45cc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"navbar"}},[n("nav",{staticClass:"navbar navbar-default navbar-inverse"},[n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[n("ul",{staticClass:"nav navbar-nav"},e._l(e.navList,(function(t,a){return n("li",{key:a,on:{click:function(t){return e.toggle(a)}}},[n("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)})),0),n("ul",{staticClass:"nav navbar-nav navbar-right"},[n("li",{staticClass:"dropdown"},[n("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[e._v(e._s(this.$t("navbar.language"))),n("span",{staticClass:"caret"})]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.switchLanguage("zh-CN")}}},[e._v("简体中文")])]),n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.switchLanguage("zh-TW")}}},[e._v("繁體中文")])]),n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.switchLanguage("en-US")}}},[e._v("English")])])])])])])])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[e._v("Toggle navigation")]),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:n("ba51")}})])])}],s={name:"navbar",data:function(){return{activeNo:0,navList:[{name:this.$t("navbar.index"),path:"/"},{name:this.$t("navbar.news"),path:"/news"},{name:this.$t("navbar.heros"),path:"/heros"},{name:this.$t("navbar.african"),path:"/african"},{name:this.$t("navbar.rate"),path:"/rate"}]}},mounted:function(){var e=window.location.pathname;switch(e){case"":this.active="0";break;case"/heros":this.active="1";break;case"/african":this.active="2";break}},methods:{toggle:function(e){this.activeNo=e},switchLanguage:function(e){"zh-CN"==e?this.$i18n.locale="zh-CN":"en-US"==e?this.$i18n.locale="en-US":"zh-TW"==e&&(this.$i18n.locale="zh-TW"),localStorage.setItem("DefaultLanguage",e),this.$router.go(0)}}},u=s,l=(n("2e4e"),n("2877")),d=Object(l["a"])(u,c,i,!1,null,"a1e75c1c",null),f=d.exports,h={name:"app",components:{Navbar:f}},p=h,b=(n("034f"),Object(l["a"])(p,r,o,!1,null,null,null)),g=b.exports,v=(n("d3b7"),n("8c4f"));a["default"].use(v["a"]);var m=new v["a"]({linkExactActiveClass:"active",mode:"hash",routes:[{path:"/",name:"Index",component:function(){return n.e("chunk-30da5ec3").then(n.bind(null,"6e78"))}},{path:"/news",name:"Neros",component:function(){return n.e("chunk-c3513128").then(n.bind(null,"d4de"))}},{path:"/heros",name:"Heros",component:function(){return n.e("chunk-24dabd0e").then(n.bind(null,"2405"))}},{path:"/african",name:"African",component:function(){return Promise.all([n.e("chunk-7ef992d8"),n.e("chunk-c65830d4")]).then(n.bind(null,"09d4"))}},{path:"/strategy",name:"Strategy",component:function(){return n.e("chunk-498eaff2").then(n.bind(null,"4b59"))}},{path:"/rate",name:"Rate",component:function(){return Promise.all([n.e("chunk-7ef992d8"),n.e("chunk-1b06be52")]).then(n.bind(null,"d1bc"))}},{path:"/fight",name:"Fight",component:function(){return n.e("chunk-933a4cf0").then(n.bind(null,"2dbd"))}}]}),k=m,y=n("bc3a"),w=n.n(y),C=n("1157"),x=n.n(C),S=(n("df25"),n("3e48"),n("a925")),P=n("4897"),_=n.n(P),N=n("b2d6"),T=n.n(N),j=n("f0d9"),O=n.n(j),$=n("c87b"),E=n.n($),L=(n("5b8f"),n("5c96")),U=n.n(L),M=(n("0fae"),n("9ca8"));n("8deb"),n("627c"),n("007d"),n("d28f");function q(){return null==localStorage.getItem("DefaultLanguage")?"zh-CN":localStorage.getItem("DefaultLanguage")}a["default"].prototype.$http=w.a,window.$=x.a,window.jQuery=x.a,a["default"].use(S["a"]);var z=new S["a"]({locale:q(),messages:{"en-US":Object.assign(n("3fab"),T.a),"zh-CN":Object.assign(n("cf61"),O.a),"zh-TW":Object.assign(n("7789"),E.a)}});_.a.i18n((function(e,t){return z.t(e,t)})),a["default"].use(U.a,{i18n:function(e,t){return z.t(e,t)}}),a["default"].component("chart",M["a"]),a["default"].config.productionTip=!1,new a["default"]({router:k,i18n:z,render:function(e){return e(g)}}).$mount("#app")},"5b8f":function(e,t,n){},7789:function(e,t){e.exports={colon:"：",navbar:{index:"首頁",news:"新聞資訊",heros:"英雄圖鑒",african:"模擬召喚",strategy:"卡牌講解（暫時關閉）",rate:"數據月報（PC）",language:"語言"},index:{welcome:"歡迎來到逆轉回合工具站！",update:"更新記錄：",existing:"已有功能：",subsequent:"後續功能：",subsequentFunctions:["逐步實現多語言"],notice:["網站資源尚待更新，有所不便敬請諒解","新聞資訊更新完畢",'給"概率UP卡"加了個標記展示數量']},heros:{sortBy:["按費用排序","按類型排序","按稀有度排序","按血量排序"],skill:"技能",cost:"費",derivative:"衍生"},african:{accumulation:"抽卡累計",upTitle:"概率UP卡",hasCost:"已花費",gold:"金幣",diamond:"鉆石",next:"下壹盒"},rate:{search:"搜索：",chooseMonth:"選擇月份",generate:"生成：",range:"具體日期範圍",createPicture:"生成圖片",title:"標題語言："}}},"85ec":function(e,t,n){},ba51:function(e,t,n){e.exports=n.p+"img/logoNew.bea96a83.png"},cf61:function(e,t){e.exports={colon:"：",navbar:{index:"首页",news:"新闻资讯",heros:"英雄图鉴",african:"模拟召唤",strategy:"卡牌讲解（暂时关闭）",rate:"数据月报（PC）",language:"语言"},index:{welcome:"欢迎来到逆转回合工具站！",update:"更新记录：",existing:"已有功能：",subsequent:"后续功能：",subsequentFunctions:["逐步实现多语言"],notice:["网站资源尚待更新，有所不便敬请谅解","新闻资讯更新完毕",'给"概率UP卡"加了个标记展示数量']},heros:{sortBy:["按费用排序","按类型排序","按稀有度排序","按血量排序"],skill:"技能",cost:"费",derivative:"衍生"},african:{accumulation:"抽卡累计",upTitle:"概率UP卡",hasCost:"已花费",gold:"金币",diamond:"钻石",next:"下一盒"},rate:{search:"搜索：",chooseMonth:"选择月份",generate:"生成：",range:"具体日期范围",createPicture:"生成图片",title:"标题语言："}}},df25:function(e,t,n){}});
//# sourceMappingURL=app.98c8f8ce.js.map