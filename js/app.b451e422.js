(function(t){function e(e){for(var a,o,r=e[0],l=e[1],c=e[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},s={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"05ba":function(t,e,n){"use strict";var a=n("2f2f"),s=n.n(a);s.a},"074d":function(t,e,n){t.exports=n.p+"img/cardback.8bda427b.jpg"},"0b3b":function(t,e,n){"use strict";var a=n("d034"),s=n.n(a);s.a},"24f0":function(t,e,n){},"2f2f":function(t,e,n){},3292:function(t,e,n){"use strict";var a=n("24f0"),s=n.n(a);s.a},4546:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("nav",{staticClass:"navbar navbar-default navbar-inverse"},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,(function(e,a){return n("li",{key:a,on:{click:function(e){return t.toggle(a)}}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1)})),0)])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:n("a1d8")}})])])}],l={name:"navbar",data:function(){return{activeNo:0,navList:[{name:"首页",path:"/"},{name:"英雄图鉴",path:"/heros"},{name:"模拟抽卡",path:"/african"}]}},mounted:function(){var t=window.location.pathname;switch(t){case"":this.active="0";break;case"/heros":this.active="1";break;case"/african":this.active="2";break}},methods:{toggle:function(t){this.activeNo=t}}},c=l,u=(n("68af"),n("2877")),d=Object(u["a"])(c,o,r,!1,null,"77bed711",null),h=d.exports,p={name:"app",components:{Navbar:h}},m=p,f=(n("034f"),Object(u["a"])(m,s,i,!1,null,null,null)),v=f.exports,b=n("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container indexText"},[n("h3",[t._v("我的回合资料站开始施工！")]),n("h3",[t._v("更新记录：")]),n("ul",[n("li",[t._v("数据资料等在国服出前会以国际服为准")]),n("li",[t._v("卡牌讲解的维护实在是太累了，我更新的速度跟不上版本更新的速度，暂时放弃，有问题加回合的q群问大佬吧")]),n("li",[t._v("【2020年06月23日10:32:04】暂时去掉卡牌讲解")])]),n("h3",[t._v("已有功能：")]),n("ul",[n("li",[t._v("英雄图鉴")]),n("li",[t._v("模拟抽卡")]),n("li",[t._v("卡牌讲解（暂时取消）")])]),n("h3",[t._v("后续功能：")]),n("ul",[n("li",[t._v("各种优化")]),n("li",[t._v("模拟抽卡改成类似游戏内商店的轮播")])])])])}],y={name:"index",data:function(){return{}}},w=y,C=(n("aa3b"),Object(u["a"])(w,_,g,!1,null,"6866d504",null)),x=C.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container orderBy underline"},[n("button",{staticClass:"btn btn-default",on:{click:function(e){return t.byWhat("cost")}}},[t._v("按费用排序")]),n("button",{staticClass:"btn btn-default",on:{click:function(e){return t.byWhat("type")}}},[t._v("按类型排序")]),n("button",{staticClass:"btn btn-default",on:{click:function(e){return t.byWhat("rare")}}},[t._v("按稀有度排序")])]),n("div",{staticClass:"container heros"},t._l(t.herosList,(function(e,a){return n("div",{key:a,staticClass:"hero col-sm-3 col-xs-6"},[n("div",{class:"content "+e.type},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(e.cost))]),t._v(t._s(e.name)+" ")]),n("div",{staticClass:"pic",style:"background-image: url("+e.pic+")"}),n("div",{staticClass:"skills"},[n("div",{staticClass:"skill"},[t._v("Ex "+t._s(e.ex[0].name)+"："),n("br"),t._v(t._s(e.ex[0].txt))]),n("div",{staticClass:"skill"},[t._v("技能 "+t._s(e.skill1[0].cost)+"费 "+t._s(e.skill1[0].name)+"："),n("br"),t._v(t._s(e.skill1[0].txt)+" ")]),n("div",{staticClass:"skill"},[t._v("技能 "+t._s(e.skill2[0].cost)+"费 "+t._s(e.skill2[0].name)+"："),n("br"),t._v(t._s(e.skill2[0].txt)+" ")]),n("div",{staticClass:"skill"},[t._v("技能 "+t._s(e.skill3[0].cost)+"费 "+t._s(e.skill3[0].name)+"："),n("br"),t._v(t._s(e.skill3[0].txt)+" ")]),e.derivative!=[]?n("div",t._l(e.derivative,(function(e,a){return n("div",{key:a,staticClass:"skill"},[t._v("衍生 "+t._s(e.cost)+"费 "+t._s(e.name)+"："),n("br"),t._v(t._s(e.txt)+" ")])})),0):t._e()])])])})),0)])},P=[],q=(n("4e82"),{name:"heros",data:function(){return{herosList:[]}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get("heros.json").then((function(e){t.herosList=e.data}))},byWhat:function(t){var e=this;return e.herosList.sort((function(e,n){var a=e[t],s=n[t];return a<s?-1:a>s?1:0}))}}}),E=q,B=(n("0b3b"),Object(u["a"])(E,k,P,!1,null,"7972c7be",null)),j=B.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container howDraw underline"},[a("button",{staticClass:"btn btn-default",on:{click:t.btnDiamond1}},[t._v("钻石召唤单次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnDiamond5}},[t._v("钻石召唤五连召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnCoin1}},[t._v("金币召唤单次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnCoin5}},[t._v("金币召唤五次召唤")]),a("br"),a("button",{staticClass:"btn btn-default",on:{click:t.btnNew1}},[t._v("奇妙厨师卡池单次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnNew5}},[t._v("奇妙厨师卡池五次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnCamp1}},[t._v("万象旅店卡池单次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnCamp5}},[t._v("万象旅店卡池五次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:t.btnExample}},[t._v("铁狮帝国·毁灭卡池五次召唤")]),a("button",{staticClass:"btn btn-default",on:{click:function(e){t.dialogVisible=!0}}},[t._v("抽卡累计")]),a("button",{staticClass:"btn btn-default",staticStyle:{opacity:"0"},on:{click:function(e){t.min=100}}},[t._v("看毛看啊")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.cards!=[],expression:"cards != []"}],staticClass:"container cards"},t._l(t.cards,(function(e,s){return a("div",{key:s,class:"card col-sm-2 col-xs-5 "+e.class,on:{click:function(e){return t.open(s)}}},[a("img",{attrs:{src:n("074d")}}),a("div",{staticClass:"cardfront",style:"background-image: url("+e.pic+")"},[a("div",{class:"title "+e.type},[a("span",[t._v(t._s(e.cost))]),t._v(t._s(e.name)+" ")])]),a("div",{staticClass:"txt"},[a("div",{class:"rare "+e.rare}),t._v(" "+t._s(e.txt)+" ")])])})),0),a("el-dialog",{attrs:{title:"抽卡累计",visible:t.dialogVisible,width:"90%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"pay"},[t._v(" 已花费："+t._s(t.coins)+"金币、"+t._s(t.diamonds)+"钻石 ")]),a("div",{staticClass:"cardAmounts"},t._l(t.european,(function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.amount,expression:"item.amount"}],key:n,staticClass:"cardAmount col-sm-3 col-xs-6 ",class:e.rare},[a("div",[t._v(t._s(e.name))]),a("div",[t._v(t._s("x"+e.amount))])])})),0)])],1)},T=[],O=(n("4160"),n("b0c0"),n("159b"),{name:"african",data:function(){return{equipmentList:[],herosList:[],cardPoolList:[],cardPool:{},african:[],european:[],version:78,min:1,cards:[],cardHeight:0,times:0,dialogVisible:!1,coins:0,diamonds:0}},filter:{summonType:function(t){switch(t){case 1:return"l1";case 2:return"l2";case 3:return"l3";case 4:return"l4"}}},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;this.european=[],this.african=[],this.$http.get("heros.json").then((function(e){t.herosList=e.data,t.allocate(t.herosList,t.version)})),this.$http.get("equipment.json").then((function(e){t.equipmentList=e.data,t.allocate(t.equipmentList,t.version)})),this.$http.get("fajiang.json").then((function(e){t.cardPoolList=e.data}))},allocate:function(t,e){var n=this;switch(e){case 96:t.forEach((function(t){"gold"==t.rare?n.european.push(t):(n.european.push(t),n.african.push(t))}));break;case 78:t.forEach((function(t){t.if&&("gold"==t.rare?n.european.push(t):(n.european.push(t),n.african.push(t)))}));break}},roll100:function(t){return Math.floor(Math.random()*(101-t)+t)},rollcard:function(t){return Math.floor(Math.random()*t.length)},summon:function(t,e,n,a,s){"copper"==t.rare?(console.log("l"+e+t.name+"*"+s),this.european.forEach((function(e){e.name==t.name&&(e.amount=e.amount+s)})),this.inin(t,e,t.name+"×"+s)):"silver"==t.rare?(console.log("l"+e+t.name+"*"+a),this.european.forEach((function(e){e.name==t.name&&(e.amount=e.amount+a)})),this.inin(t,e,t.name+"×"+a)):(console.log("l"+e+t.name+"*"+n),this.european.forEach((function(e){e.name==t.name&&(e.amount=e.amount+n)})),this.inin(t,e,t.name+"×"+n))},draw1ByUp:function(t){var e=this,n=void 0,a=this.roll100(this.min),s=Math.random()*(101-this.min);console.log("roll_prob---",s),this.cardPoolList.forEach((function(n){n.id==t&&(e.cardPool=n)}));var i=(100-this.cardPool.cards.length*this.cardPool.prob)/(this.european.length-this.cardPool.cards.length);console.log("cardRProb---",i),this.cardPool.cards.forEach((function(t){e.european.forEach((function(n){t==n.name&&(n.prob=e.cardPool.prob)}))}));for(var o=0;o<this.european.length;o++)if(this.european[o].prob?s-=this.european[o].prob:s-=i,console.log(s,o),s<0){n=this.european[o];break}return a<=70?this.summon(n,2,1,4,12):a>70&&a<=95?this.summon(n,3,5,20,60):this.summon(n,4,10,40,120),a},draw5ByUp:function(t){for(var e=this,n=void 0,a=0,s=0;s<4;s++){var i=this.draw1ByUp(t);i>70&&a++}if(a)this.draw1ByUp(t);else{var o=Math.floor(40*Math.random()+60),r=Math.random()*(101-this.min);this.cardPoolList.forEach((function(n){n.id==t&&(e.cardPool=n)}));var l=(100-this.cardPool.cards.length*this.cardPool.prob)/(this.european.length-this.cardPool.cards.length);console.log("cardRProb---",l),this.cardPool.cards.forEach((function(t){e.european.forEach((function(n){t==n.name&&(n.prob=e.cardPool.prob)}))}));for(var c=0;c<this.european.length;c++)if(this.european[c].prob?r-=this.european[c].prob:r-=l,console.log(r,c),r<0){n=this.european[c];break}o>70&&o<=95?this.summon(n,3,5,20,60):this.summon(n,4,10,40,120)}},draw1ByDiamond:function(){var t=void 0,e=this.roll100(this.min);return e<=70?(t=this.european[this.rollcard(this.european)],this.summon(t,2,1,4,12)):e>70&&e<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,3,5,20,60)):(t=this.european[this.rollcard(this.european)],this.summon(t,4,10,40,120)),e},draw5ByDiamond:function(){for(var t=void 0,e=0,n=0;n<4;n++){var a=this.draw1ByDiamond();a>70&&e++}if(e)this.draw1ByDiamond();else{var s=Math.floor(40*Math.random()+60);s>70&&s<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,3,5,20,60)):(t=this.european[this.rollcard(this.european)],this.summon(t,4,10,40,120))}},draw1ByCoin:function(){var t=void 0,e=this.roll100(this.min);return e<=70?(t=this.african[this.rollcard(this.african)],"copper"==t.rare?(console.log("l1"+t.name+"*3"),this.inin(t,1,t.name+"×3")):(console.log("l1"+t.name+"*1"),this.inin(t,1,t.name+"×1"))):e>70&&e<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,2,1,4,12)):(t=this.european[this.rollcard(this.european)],this.summon(t,3,5,20,60)),e},draw5ByCoin:function(){for(var t=void 0,e=0,n=0;n<4;n++){var a=this.draw1ByCoin();a>70&&e++}if(e)this.draw1ByCoin();else{var s=Math.floor(40*Math.random()+60);s>70&&s<=95?(t=this.european[this.rollcard(this.european)],this.summon(t,2,1,4,12)):(t=this.european[this.rollcard(this.european)],this.summon(t,3,5,20,60))}},inin:function(t,e,n){$(".card .txt").css("opacity","0"),t.txt=n,t.class="",t.summonType=e,this.cards.push(t),this.$nextTick((function(){$(".card").height(1.5*$(".card").width()),$(".card .txt").css("margin-top",1.5*$(".card").width()+10+"px")}))},btnNew1:function(){this.cards=[];var t=this;setTimeout((function(){t.draw1ByUp(1),t.diamonds+=30}),100)},btnNew5:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5ByUp(1),t.diamonds+=150}),100)},btnCamp1:function(){this.cards=[];var t=this;setTimeout((function(){t.draw1ByUp(2),t.diamonds+=30}),100)},btnCamp5:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5ByUp(2),t.diamonds+=150}),100)},btnExample:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5ByUp(3),t.diamonds+=150}),100)},btnDiamond1:function(){this.cards=[];var t=this;setTimeout((function(){t.draw1ByDiamond(),t.diamonds+=30}),100)},btnDiamond5:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5ByDiamond(),t.diamonds+=150}),100)},btnCoin1:function(){this.cards=[];var t=this;setTimeout((function(){t.draw1ByCoin(),t.coins+=500}),100)},btnCoin5:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5ByCoin(),t.coins+=2500}),100)},open:function(t){console.log(t),this.cards[t].class="open",console.log(this.cards);var e=this.cards;this.cards=[],this.cards=e;var n=this;setTimeout((function(){switch($(".card .txt").eq(t).css("opacity","1"),n.cards[t].summonType){case 1:$(".card").eq(t).addClass("l1");break;case 2:$(".card").eq(t).addClass("l2");break;case 3:$(".card").eq(t).addClass("l3");break;case 4:$(".card").eq(t).addClass("l4");break}}),500),console.log(this.cards[t].class)},toggleCards:function(t){this.version=t,this.init()}}}),L=O,M=(n("a9da"),n("e607"),Object(u["a"])(L,S,T,!1,null,"0d3ebc6c",null)),N=M.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{staticStyle:{border:"1px solid rgb(228, 231, 237)","border-top":"none"},attrs:{label:"英雄讲解",name:"first"}},[n("el-container",{style:"height: "+t.windowH+"px"},[n("el-aside",{attrs:{width:"160px"}},[n("el-menu",{on:{select:t.selectHero}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(189,161,0)"}}),t._v("黄色英雄 ")]),n("el-menu-item-group",t._l(t.herosYellow,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(175,66,50)"}}),t._v("红色英雄 ")]),n("el-menu-item-group",t._l(t.herosRed,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(53,94,170)"}}),t._v("蓝色英雄 ")]),n("el-menu-item-group",t._l(t.herosBlue,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(12,114,77)"}}),t._v("绿色英雄 ")]),n("el-menu-item-group",t._l(t.herosGreen,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"5"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"rgb(118,84,145)"}}),t._v("紫色英雄 ")]),n("el-menu-item-group",t._l(t.herosPurple,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2)],1)],1),n("el-main",t._l(t.strategy,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),0)],1)],1),n("el-tab-pane",{staticStyle:{border:"1px solid rgb(228, 231, 237)","border-top":"none"},attrs:{label:"装备讲解",name:"second"}},[n("el-container",{style:"height: "+t.windowH+"px"},[n("el-aside",{attrs:{width:"160px"}},[n("el-menu",{on:{select:t.selectEquipment}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#fdda64"}}),t._v("金装备 ")]),n("el-menu-item-group",t._l(t.equipmentsGold,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#d1dfe5"}}),t._v("银装备 ")]),n("el-menu-item-group",t._l(t.equipmentsSilver,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#cd9b7c"}}),t._v("铜装备 ")]),n("el-menu-item-group",t._l(t.equipmentsCopper,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2)],1)],1),n("el-main",t._l(t.strategy,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),0)],1)],1),n("el-tab-pane",{staticStyle:{border:"1px solid rgb(228, 231, 237)","border-top":"none"},attrs:{label:"道具讲解",name:"third"}},[n("el-container",{style:"height: "+t.windowH+"px"},[n("el-aside",{attrs:{width:"160px"}},[n("el-menu",{on:{select:t.selectProps}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-star-on",staticStyle:{color:"#fdda64"}}),t._v("道具 ")]),n("el-menu-item-group",t._l(t.props,(function(e,a){return n("el-menu-item",{key:a,attrs:{index:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],2)],1)],1),n("el-main",t._l(t.strategy,(function(e,a){return n("p",{key:a},[t._v(t._s(e))])})),0)],1)],1)],1)],1)])},H=[],U=(n("7db0"),{name:"strategy",data:function(){return{activeName:"first",windowH:555,heros:[],herosYellow:[],herosRed:[],herosBlue:[],herosGreen:[],herosPurple:[],equipments:[],props:[],equipmentsGold:[],equipmentsSilver:[],equipmentsCopper:[],strategy:["请选取卡牌~"]}},created:function(){this.windowH=window.innerHeight-120,this.init()},methods:{init:function(){var t=this;this.heros=[],this.herosYellow=[],this.herosRed=[],this.herosBlue=[],this.herosGreen=[],this.herosPurple=[],this.equipments=[],this.props=[],this.$http.get("heros.json").then((function(e){t.heros=e.data,t.heros.forEach((function(e){"yellow"==e.type?t.herosYellow.push(e):"red"==e.type?t.herosRed.push(e):"blue"==e.type?t.herosBlue.push(e):"green"==e.type?t.herosGreen.push(e):"purple"==e.type&&t.herosPurple.push(e)}))})),this.$http.get("equipment.json").then((function(e){t.equipments=e.data,t.equipments.forEach((function(e){"gold"==e.rare?t.equipmentsGold.push(e):"silver"==e.rare?t.equipmentsSilver.push(e):"copper"==e.rare&&t.equipmentsCopper.push(e)}))})),this.$http.get("props.json").then((function(e){t.props=e.data}))},handleClick:function(){this.strategy=["请选取卡牌~"]},selectHero:function(t){this.strategy=this.heros.find((function(e){return e.id===t})).strategy,console.log(this.strategy)},selectEquipment:function(t){this.strategy=this.equipments.find((function(e){return e.id===t})).strategy},selectProps:function(t){this.strategy=this.props.find((function(e){return e.id===t})).strategy}}}),G=U,R=(n("05ba"),n("3292"),Object(u["a"])(G,D,H,!1,null,"18ae039d",null)),A=R.exports;a["default"].use(b["a"]);var V=new b["a"]({linkExactActiveClass:"active",mode:"hash",routes:[{path:"/",name:"Index",component:x},{path:"/heros",name:"Heros",component:j},{path:"/african",name:"African",component:N},{path:"/strategy",name:"Strategy",component:A}]}),W=V,Y=n("bc3a"),J=n.n(Y),I=n("1157"),Q=n.n(I),z=(n("df25"),n("3e48"),n("5c96")),F=n.n(z);n("0fae"),n("5b8f");a["default"].prototype.$http=J.a,window.$=Q.a,window.jQuery=Q.a,a["default"].use(F.a),a["default"].config.productionTip=!1,new a["default"]({router:W,render:function(t){return t(v)}}).$mount("#app")},"59cc":function(t,e,n){},"5b8f":function(t,e,n){},"68af":function(t,e,n){"use strict";var a=n("59cc"),s=n.n(a);s.a},8473:function(t,e,n){},"85ec":function(t,e,n){},a1d8:function(t,e,n){t.exports=n.p+"img/logo.9c9d409a.png"},a9da:function(t,e,n){"use strict";var a=n("eaaf"),s=n.n(a);s.a},aa3b:function(t,e,n){"use strict";var a=n("4546"),s=n.n(a);s.a},d034:function(t,e,n){},df25:function(t,e,n){},e607:function(t,e,n){"use strict";var a=n("8473"),s=n.n(a);s.a},eaaf:function(t,e,n){}});
//# sourceMappingURL=app.b451e422.js.map