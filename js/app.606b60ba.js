(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,h=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"05ba":function(t,e,n){"use strict";var a=n("2f2f"),s=n.n(a);s.a},"074d":function(t,e,n){t.exports=n.p+"img/cardback.8bda427b.jpg"},"0b3b":function(t,e,n){"use strict";var a=n("d034"),s=n.n(a);s.a},"13f6":function(t,e,n){"use strict";var a=n("d8c1"),s=n.n(a);s.a},"24f0":function(t,e,n){},"2f2f":function(t,e,n){},3292:function(t,e,n){"use strict";var a=n("24f0"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("nav",{staticClass:"navbar navbar-default navbar-inverse"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,(function(e,a){return n("li",{key:a,on:{click:function(e){return t.toggle(a)}}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)})),0)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:n("a1d8")}})])])}],l={name:"navbar",data:function(){return{activeNo:0,navList:[{name:"首页",path:"/"},{name:"英雄图鉴",path:"/heros"},{name:"模拟抽卡",path:"/african"},{name:"卡牌讲解",path:"/strategy"}]}},mounted:function(){var t=window.location.pathname;switch(t){case"":this.active="0";break;case"/heros":this.active="1";break;case"/african":this.active="2";break}},methods:{toggle:function(t){this.activeNo=t}}},c=l,u=(n("dd4b"),n("2877")),d=Object(u["a"])(c,r,o,!1,null,"1a059f47",null),h=d.exports,p={name:"app",components:{Navbar:h}},m=p,f=(n("034f"),Object(u["a"])(m,s,i,!1,null,null,null)),v=f.exports,b=n("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container indexText"},[n("h3",[t._v("我的回合资料站开始施工！")]),n("h3",[t._v("更新记录：")]),n("ul",[n("li",[t._v("在考虑做模拟抽卡的累计")]),n("li",[t._v("数据资料等在国服出前会以国际服为准")]),n("li",[t._v("【2020年06月14日19:16:22】更新新的平衡，")])]),n("h3",[t._v("已有功能：")]),n("ul",[n("li",[t._v("英雄图鉴")]),n("li",[t._v("模拟开包")]),n("li",[t._v("卡牌讲解")])]),n("h3",[t._v("后续功能：")]),n("ul",[n("li",[t._v("模拟开包抽卡累计")]),n("li",[t._v("概率up卡池")])])])])}],g={name:"index",data:function(){return{}}},x=g,C=(n("13f6"),Object(u["a"])(x,_,y,!1,null,"234527d4",null)),w=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container orderBy underline"},[n("button",{staticClass:"btn btn-default",on:{click:function(e){return t.byWhat("cost")}}},[t._v("按费用排序")]),n("button",{staticClass:"btn btn-default",on:{click:function(e){return t.byWhat("type")}}},[t._v("按类型排序")]),n("button",{staticClass:"btn btn-default",on:{click:function(e){return t.byWhat("rare")}}},[t._v("按稀有度排序")])]),n("div",{staticClass:"container heros"},t._l(t.herosList,(function(e,a){return n("div",{key:a,staticClass:"hero col-sm-3 col-xs-6"},[n("div",{class:"content "+e.type},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(e.cost))]),t._v(t._s(e.name)+" ")]),n("div",{staticClass:"pic",style:"background-image: url("+e.pic+")"}),n("div",{staticClass:"skills"},[n("div",{staticClass:"skill"},[t._v("Ex "+t._s(e.ex[0].name)+"："),n("br"),t._v(t._s(e.ex[0].txt))]),n("div",{staticClass:"skill"},[t._v("技能 "+t._s(e.skill1[0].cost)+"费 "+t._s(e.skill1[0].name)+"："),n("br"),t._v(t._s(e.skill1[0].txt)+" ")]),n("div",{staticClass:"skill"},[t._v("技能 "+t._s(e.skill2[0].cost)+"费 "+t._s(e.skill2[0].name)+"："),n("br"),t._v(t._s(e.skill2[0].txt)+" ")]),n("div",{staticClass:"skill"},[t._v("技能 "+t._s(e.skill3[0].cost)+"费 "+t._s(e.skill3[0].name)+"："),n("br"),t._v(t._s(e.skill3[0].txt)+" ")]),e.derivative!=[]?n("div",t._l(e.derivative,(function(e,a){return n("div",{key:a,staticClass:"skill"},[t._v("衍生 "+t._s(e.cost)+"费 "+t._s(e.name)+"："),n("br"),t._v(t._s(e.txt)+" ")])})),0):t._e()])])])})),0)])},j=[],S=(n("4e82"),{name:"heros",data:function(){return{herosList:[]}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get("heros.json").then((function(e){t.herosList=e.data}))},byWhat:function(t){var e=this;return e.herosList.sort((function(e,n){var a=e[t],s=n[t];return a<s?-1:a>s?1:0}))}}}),q=S,E=(n("0b3b"),Object(u["a"])(q,k,j,!1,null,"7972c7be",null)),B=E.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container howDraw underline"},[a("button",{staticClass:"btn btn-default",on:{click:t.btnDiamond1}},[t._v("钻石召唤单次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnDiamond5}},[t._v("钻石召唤五连召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnCoin1}},[t._v("金币召唤单次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnCoin5}},[t._v("金币召唤五次召唤")]),a("button",{staticClass:"btn btn-default",staticStyle:{opacity:"0"},on:{click:function(e){t.min=100}}},[t._v("看毛看啊")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.cards!=[],expression:"cards != []"}],staticClass:"container cards"},t._l(t.cards,(function(e,s){return a("div",{key:s,class:"card col-sm-2 col-xs-5 "+e.class,on:{click:function(e){return t.open(s)}}},[a("img",{attrs:{src:n("074d")}}),a("div",{staticClass:"cardfront",style:"background-image: url("+e.pic+")"},[a("div",{class:"title "+e.type},[a("span",[t._v(t._s(e.cost))]),t._v(t._s(e.name)+" ")])]),a("div",{staticClass:"txt"},[a("div",{class:"rare "+e.rare}),t._v(" "+t._s(e.txt)+" ")])])})),0)])},P=[],L=(n("4160"),n("b0c0"),n("159b"),{name:"african",data:function(){return{equipmentList:[],herosList:[],african:[],european:[],version:78,min:1,cards:[],cardHeight:0,diamonds:0,times:0}},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;this.european=[],this.african=[],this.$http.get("heros.json").then((function(e){t.herosList=e.data,t.allocate(t.herosList,t.version)})),this.$http.get("equipment.json").then((function(e){t.equipmentList=e.data,t.allocate(t.equipmentList,t.version)}))},allocate:function(t,e){var n=this;switch(e){case 96:t.forEach((function(t){"gold"==t.rare?n.european.push(t):(n.european.push(t),n.african.push(t))}));break;case 78:t.forEach((function(t){t.if&&("gold"==t.rare?n.european.push(t):(n.european.push(t),n.african.push(t)))}));break}},roll100:function(t){return Math.floor(Math.random()*(101-t)+t)},rollcard:function(t){return Math.floor(Math.random()*t.length)},summon:function(t,e,n,a,s){"copper"==t.rare?(console.log(e+t.name+"*"+s),this.european.forEach((function(e){e.name==t.name&&(e.amount=e.amount+s)})),this.inin(t,t.name+"×"+s)):"silver"==t.rare?(console.log(e+t.name+"*"+a),this.european.forEach((function(e){e.name==t.name&&(e.amount=e.amount+a)})),this.inin(t,t.name+"×"+a)):(console.log(e+t.name+"*"+n),this.european.forEach((function(e){e.name==t.name&&(e.amount=e.amount+n)})),this.inin(t,t.name+"×"+n))},draw1ByDiamond:function(){var t=void 0,e=this.roll100(this.min);return e<=70?(t=this.european[this.rollcard(this.european)],this.summon(t,"精良召唤",1,4,12)):e>70&&e<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,"史诗召唤",5,20,60)):(t=this.european[this.rollcard(this.european)],this.summon(t,"传奇召唤",10,40,120)),e},draw5ByDiamond:function(){for(var t=void 0,e=0,n=0;n<4;n++){var a=this.draw1ByDiamond();a>70&&e++}if(e)this.draw1ByDiamond();else{var s=Math.floor(40*Math.random()+60);s>70&&s<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,"史诗召唤",5,20,60)):(t=this.european[this.rollcard(this.european)],this.summon(t,"传奇召唤",10,40,120))}},draw1ByCoin:function(){var t=void 0,e=this.roll100(this.min);return e<=70?(t=this.african[this.rollcard(this.african)],"copper"==t.rare?(console.log("普通召唤"+t.name+"*3"),this.inin(t,t.name+"×3")):(console.log("普通召唤"+t.name+"*1"),this.inin(t,t.name+"×1"))):e>70&&e<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,"精良召唤",1,4,12)):(t=this.european[this.rollcard(this.european)],this.summon(t,"史诗召唤",5,20,60)),e},draw5ByCoin:function(){for(var t=void 0,e=0,n=0;n<4;n++){var a=this.draw1ByCoin();a>70&&e++}if(e)this.draw1ByCoin();else{var s=Math.floor(40*Math.random()+60);s>70&&s<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,"精良召唤",1,4,12)):(t=this.european[this.rollcard(this.european)],this.summon(t,"史诗召唤",5,20,60))}},inin:function(t,e){$(".card .txt").css("opacity","0"),t.txt=e,t.class="",this.cards.push(t),this.$nextTick((function(){$(".card").height(1.5*$(".card").width()),$(".card .txt").css("margin-top",1.5*$(".card").width()+"px")}))},btnDiamond1:function(){this.cards=[];var t=this;setTimeout((function(){t.draw1ByDiamond()}),100)},btnDiamond5:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5ByDiamond(),t.european.forEach((function(t){0!=t.amount&&console.log(t.name+"---"+t.amount)}))}),100)},btnCoin1:function(){this.cards=[];var t=this;setTimeout((function(){t.draw1ByCoin()}),100)},btnCoin5:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5ByCoin()}),100)},open:function(t){console.log(t),this.cards[t].class="open",console.log(this.cards);var e=this.cards;this.cards=[],this.cards=e,setTimeout((function(){$(".card .txt").eq(t).css("opacity","1")}),500),console.log(this.cards[t].class)},toggleCards:function(t){this.version=t,this.init()}}}),M=L,D=(n("b20e"),Object(u["a"])(M,O,P,!1,null,"064e8ce3",null)),T=D.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{staticStyle:{border:"1px solid rgb(228, 231, 237)","border-top":"none"},attrs:{label:"英雄讲解",name:"first"}},[n("el-container",{style:"height: "+t.windowH+"px"},[n("el-aside",{attrs:{width:"160px"}},[n("el-menu",{on:{select:t.selectHero}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(189,161,0)"}}),t._v("黄色英雄 ")]),n("el-menu-item-group",t._l(t.herosYellow,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(175,66,50)"}}),t._v("红色英雄 ")]),n("el-menu-item-group",t._l(t.herosRed,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(53,94,170)"}}),t._v("蓝色英雄 ")]),n("el-menu-item-group",t._l(t.herosBlue,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(12,114,77)"}}),t._v("绿色英雄 ")]),n("el-menu-item-group",t._l(t.herosGreen,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(118,84,145)"}}),t._v("紫色英雄 ")]),n("el-menu-item-group",t._l(t.herosPurple,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2)],1)],1),n("el-main",t._l(t.strategy,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),0)],1)],1),n("el-tab-pane",{staticStyle:{border:"1px solid rgb(228, 231, 237)","border-top":"none"},attrs:{label:"装备讲解",name:"second"}},[n("el-container",{style:"height: "+t.windowH+"px"},[n("el-aside",{attrs:{width:"160px"}},[n("el-menu",{on:{select:t.selectEquipment}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#fdda64"}}),t._v("金装备 ")]),n("el-menu-item-group",t._l(t.equipmentsGold,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#d1dfe5"}}),t._v("银装备 ")]),n("el-menu-item-group",t._l(t.equipmentsSilver,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#cd9b7c"}}),t._v("铜装备 ")]),n("el-menu-item-group",t._l(t.equipmentsCopper,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2)],1)],1),n("el-main",t._l(t.strategy,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),0)],1)],1),n("el-tab-pane",{staticStyle:{border:"1px solid rgb(228, 231, 237)","border-top":"none"},attrs:{label:"道具讲解",name:"third"}},[n("el-container",{style:"height: "+t.windowH+"px"},[n("el-aside",{attrs:{width:"160px"}},[n("el-menu",{on:{select:t.selectProps}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#fdda64"}}),t._v("道具 ")]),n("el-menu-item-group",t._l(t.props,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2)],1)],1),n("el-main",t._l(t.strategy,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),0)],1)],1)],1)],1)])},N=[],G=(n("7db0"),{name:"strategy",data:function(){return{activeName:"first",windowH:555,heros:[],herosYellow:[],herosRed:[],herosBlue:[],herosGreen:[],herosPurple:[],equipments:[],props:[],equipmentsGold:[],equipmentsSilver:[],equipmentsCopper:[],strategy:["请选取卡牌~"]}},created:function(){this.windowH=window.innerHeight-120,this.init()},methods:{init:function(){var t=this;this.heros=[],this.herosYellow=[],this.herosRed=[],this.herosBlue=[],this.herosGreen=[],this.herosPurple=[],this.equipments=[],this.props=[],this.$http.get("heros.json").then((function(e){t.heros=e.data,t.heros.forEach((function(e){"yellow"==e.type?t.herosYellow.push(e):"red"==e.type?t.herosRed.push(e):"blue"==e.type?t.herosBlue.push(e):"green"==e.type?t.herosGreen.push(e):"purple"==e.type&&t.herosPurple.push(e)}))})),this.$http.get("equipment.json").then((function(e){t.equipments=e.data,t.equipments.forEach((function(e){"gold"==e.rare?t.equipmentsGold.push(e):"silver"==e.rare?t.equipmentsSilver.push(e):"copper"==e.rare&&t.equipmentsCopper.push(e)}))})),this.$http.get("props.json").then((function(e){t.props=e.data}))},handleClick:function(){this.strategy=["请选取卡牌~"]},selectHero:function(t){this.strategy=this.heros.find((function(e){return e.id===t})).strategy,console.log(this.strategy)},selectEquipment:function(t){this.strategy=this.equipments.find((function(e){return e.id===t})).strategy},selectProps:function(t){this.strategy=this.props.find((function(e){return e.id===t})).strategy}}}),R=G,W=(n("05ba"),n("3292"),Object(u["a"])(R,H,N,!1,null,"18ae039d",null)),Y=W.exports;a["default"].use(b["a"]);var A=new b["a"]({linkExactActiveClass:"active",mode:"hash",routes:[{path:"/",name:"Index",component:w},{path:"/heros",name:"Heros",component:B},{path:"/african",name:"African",component:T},{path:"/strategy",name:"Strategy",component:Y}]}),J=A,I=n("bc3a"),Q=n.n(I),z=n("1157"),F=n.n(z),K=(n("df25"),n("3e48"),n("5c96")),U=n.n(K);n("0fae"),n("5b8f");a["default"].prototype.$http=Q.a,window.$=F.a,window.jQuery=F.a,a["default"].use(U.a),a["default"].config.productionTip=!1,new a["default"]({router:J,render:function(t){return t(v)}}).$mount("#app")},"5b8f":function(t,e,n){},"85ec":function(t,e,n){},"8ceb":function(t,e,n){},a1d8:function(t,e,n){t.exports=n.p+"img/logo.9c9d409a.png"},b20e:function(t,e,n){"use strict";var a=n("8ceb"),s=n.n(a);s.a},c21f:function(t,e,n){},d034:function(t,e,n){},d8c1:function(t,e,n){},dd4b:function(t,e,n){"use strict";var a=n("c21f"),s=n.n(a);s.a},df25:function(t,e,n){}});
//# sourceMappingURL=app.606b60ba.js.map