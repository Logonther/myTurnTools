(function(t){function n(n){for(var e,r,o=n[0],c=n[1],l=n[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,n=0;n<i.length;n++){for(var a=i[n],e=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(e=!1)}e&&(i.splice(n--,1),t=r(r.s=a[0]))}return t}var e={},s={app:0},i=[];function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,n,a){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(a,e,function(n){return t[n]}.bind(null,e));return a},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"034f":function(t,n,a){"use strict";var e=a("85ec"),s=a.n(e);s.a},"074d":function(t,n,a){t.exports=a.p+"img/cardback.8bda427b.jpg"},"0b3b":function(t,n,a){"use strict";var e=a("d034"),s=a.n(e);s.a},"22fd":function(t,n,a){},"56d7":function(t,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"view"})],1)],1)},i=[],r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"navbar"}},[a("nav",{staticClass:"navbar navbar-default navbar-inverse"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[a("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,(function(n,e){return a("li",{key:e,on:{click:function(n){return t.toggle(e)}}},[a("router-link",{attrs:{to:n.path}},[t._v(t._s(n.name))])],1)})),0)])])])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[e("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"}),e("span",{staticClass:"icon-bar"})]),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e("img",{attrs:{src:a("a1d8")}})])])}],c={name:"navbar",data:function(){return{activeNo:0,navList:[{name:"首页",path:"/"},{name:"英雄图鉴",path:"/heros"},{name:"模拟抽卡",path:"/african"}]}},mounted:function(){var t=window.location.pathname;switch(t){case"":this.active="0";break;case"/heros":this.active="1";break;case"/african":this.active="2";break}},methods:{toggle:function(t){this.activeNo=t}}},l=c,u=(a("9638"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,"7512e3af",null),f=d.exports,v={name:"app",components:{Navbar:f}},h=v,p=(a("034f"),Object(u["a"])(h,s,i,!1,null,null,null)),b=p.exports,m=a("8c4f"),_=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"container indexText"},[a("h3",[t._v("我的回合资料站开始施工！")]),a("h3",[t._v("更新记录：")]),a("ul",[a("li",[t._v("在4测剩下的时间打算先更新一下已有功能的UI，以及完善现有功能")]),a("li",[t._v("在考虑做模拟抽卡的累计")]),a("li",[t._v("现模拟抽卡已经可以切换不同版本的卡池")]),a("li",[t._v("数据资料等在国服出前会以国际服为准")]),a("li",[t._v("【2019年12月04日14:46:51】前两天更新的描述等文本更新，会晚几天再更")])]),a("h3",[t._v("已有功能：")]),a("ul",[a("li",[t._v("英雄图鉴")]),a("li",[t._v("模拟开包")])]),a("h3",[t._v("预计功能：")]),a("ul",[a("li",[t._v("英雄故事：所有英雄相关的背景故事（暂无确定资料）")]),a("li",[t._v("互动语音：所有英雄相关的互动语音（暂无确定资料）")])])])])}],k={name:"index",data:function(){return{}}},x=k,C=(a("e5e4"),Object(u["a"])(x,_,g,!1,null,"4b207032",null)),w=C.exports,y=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"container orderBy underline"},[a("button",{staticClass:"btn btn-default",on:{click:function(n){return t.byWhat("cost")}}},[t._v("按费用排序")]),a("button",{staticClass:"btn btn-default",on:{click:function(n){return t.byWhat("type")}}},[t._v("按类型排序")]),a("button",{staticClass:"btn btn-default",on:{click:function(n){return t.byWhat("rare")}}},[t._v("按稀有度排序")])]),a("div",{staticClass:"container heros"},t._l(t.herosList,(function(n,e){return a("div",{key:e,staticClass:"hero col-sm-3 col-xs-6"},[a("div",{class:"content "+n.type},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(n.cost))]),t._v(t._s(n.name)+" ")]),a("div",{staticClass:"pic",style:"background-image: url("+n.pic+")"}),a("div",{staticClass:"skills"},[a("div",{staticClass:"skill"},[t._v("Ex "+t._s(n.ex[0].name)+"："),a("br"),t._v(t._s(n.ex[0].txt))]),a("div",{staticClass:"skill"},[t._v("技能 "+t._s(n.skill1[0].cost)+"费 "+t._s(n.skill1[0].name)+"："),a("br"),t._v(t._s(n.skill1[0].txt)+" ")]),a("div",{staticClass:"skill"},[t._v("技能 "+t._s(n.skill2[0].cost)+"费 "+t._s(n.skill2[0].name)+"："),a("br"),t._v(t._s(n.skill2[0].txt)+" ")]),a("div",{staticClass:"skill"},[t._v("技能 "+t._s(n.skill3[0].cost)+"费 "+t._s(n.skill3[0].name)+"："),a("br"),t._v(t._s(n.skill3[0].txt)+" ")]),n.derivative!=[]?a("div",t._l(n.derivative,(function(n,e){return a("div",{key:e,staticClass:"skill"},[t._v("衍生 "+t._s(n.cost)+"费 "+t._s(n.name)+"："),a("br"),t._v(t._s(n.txt)+" ")])})),0):t._e()])])])})),0)])},j=[],O=(a("4e82"),{name:"heros",data:function(){return{herosList:[]}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get("heros.json").then((function(n){t.herosList=n.data}))},byWhat:function(t){var n=this;return n.herosList.sort((function(n,a){var e=n[t],s=a[t];return e<s?-1:e>s?1:0}))}}}),L=O,E=(a("0b3b"),Object(u["a"])(L,y,j,!1,null,"7972c7be",null)),M=E.exports,T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"container howDraw underline"},[e("button",{staticClass:"btn btn-default",on:{click:t.btnDraw1}},[t._v("抽1张")]),e("button",{staticClass:"btn btn-default",on:{click:t.btnDraw5}},[t._v("抽5张")]),e("button",{staticClass:"btn btn-default",staticStyle:{opacity:"0"},on:{click:function(n){t.min=100}}},[t._v("看毛看啊")]),e("button",{staticClass:"btn btn-default",on:{click:function(n){return t.toggleCards(96)}}},[t._v("切换为测试服卡池（96张版本）")]),e("button",{staticClass:"btn btn-default",on:{click:function(n){return t.toggleCards(78)}}},[t._v("切换为国际服卡池（88张版本）")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cards!=[],expression:"cards != []"}],staticClass:"container cards"},t._l(t.cards,(function(n,s){return e("div",{key:s,class:"card col-sm-2 col-xs-5 "+n.class,on:{click:function(n){return t.open(s)}}},[e("img",{attrs:{src:a("074d")}}),e("div",{staticClass:"cardfront",style:"background-image: url("+n.pic+")"},[e("div",{class:"title "+n.type},[e("span",[t._v(t._s(n.cost))]),t._v(t._s(n.name)+" ")])]),e("div",{staticClass:"txt"},[e("div",{class:"rare "+n.rare}),t._v(t._s(n.txt))])])})),0)])},P=[],S=(a("4160"),a("b0c0"),a("159b"),{name:"african",data:function(){return{equipmentList:[],herosList:[],african:[],european:[],version:96,min:1,cards:[],cardHeight:0}},created:function(){this.init()},mounted:function(){},methods:{init:function(){var t=this;this.european=[],this.african=[],this.$http.get("heros.json").then((function(n){t.herosList=n.data,t.allocate(t.herosList,t.version)})),this.$http.get("equipment.json").then((function(n){t.equipmentList=n.data,t.allocate(t.equipmentList,t.version)}))},allocate:function(t,n){var a=this;switch(n){case 96:t.forEach((function(t){"gold"==t.rare?a.european.push(t):(a.european.push(t),a.african.push(t))}));break;case 78:t.forEach((function(t){t.if&&("gold"==t.rare?a.european.push(t):(a.european.push(t),a.african.push(t)))}));break}},roll100:function(t){return Math.floor(Math.random()*(101-t)+t)},rollcard:function(t){return Math.floor(Math.random()*t.length)},draw1:function(){var t=void 0,n=this.roll100(this.min);return n<=70?(t=this.african[this.rollcard(this.african)],"copper"==t.rare?(console.log("不暴击"+t.name+"*3"),this.inin(t,t.name+"×3")):(console.log("不暴击"+t.name+"*1"),this.inin(t,t.name+"×1"))):n>70&&n<=95?(t=this.european[this.rollcard(this.european)],"copper"==t.rare?(console.log("小暴击"+t.name+"*12"),this.inin(t,t.name+"×12")):"silver"==t.rare?(console.log("小暴击"+t.name+"*4"),this.inin(t,t.name+"×4")):(console.log("小暴击"+t.name+"*1"),this.inin(t,t.name+"×1"))):(t=this.european[this.rollcard(this.european)],"copper"==t.rare?(console.log("大暴击"+t.name+"*36"),this.inin(t,t.name+"×36")):"silver"==t.rare?(console.log("大暴击"+t.name+"*12"),this.inin(t,t.name+"×12")):(console.log("大暴击"+t.name+"*3"),this.inin(t,t.name+"×3"))),n},draw5:function(){for(var t=void 0,n=0,a=0;a<4;a++){var e=this.draw1();e>70&&n++}if(n)this.draw1();else{var s=Math.floor(25*Math.random()+76);s>70&&s<=95?(t=this.european[this.rollcard(this.european)],"copper"==t.rare?(console.log("小暴击"+t.name+"*12"),this.inin(t,t.name+"×12")):"silver"==t.rare?(console.log("小暴击"+t.name+"*4"),this.inin(t,t.name+"×4")):(console.log("小暴击"+t.name+"*1"),this.inin(t,t.name+"×1"))):(t=this.european[this.rollcard(this.european)],"copper"==t.rare?(console.log("大暴击"+t.name+"*36"),this.inin(t,t.name+"×36")):"silver"==t.rare?(console.log("大暴击"+t.name+"*12"),this.inin(t,t.name+"×12")):(console.log("大暴击"+t.name+"*3"),this.inin(t,t.name+"×3")))}},inin:function(t,n){$(".card .txt").css("opacity","0"),t.txt=n,t.class="",this.cards.push(t),this.$nextTick((function(){$(".card").height(1.5*$(".card").width()),$(".card .txt").css("margin-top",1.5*$(".card").width()+"px")}))},btnDraw1:function(){this.cards=[];var t=this;setTimeout((function(){t.draw1()}),100)},btnDraw5:function(){this.cards=[];var t=this;setTimeout((function(){t.draw5()}),100)},open:function(t){console.log(this.cards[t].class),this.cards[t].class="open";var n=this.cards;this.cards=[],this.cards=n,setTimeout((function(){$(".card .txt").eq(t).css("opacity","1")}),500),console.log(this.cards[t].class)},toggleCards:function(t){this.version=t,this.init()}}}),q=S,D=(a("ab04"),Object(u["a"])(q,T,P,!1,null,"9007c1ca",null)),N=D.exports;e["default"].use(m["a"]);var W=new m["a"]({linkExactActiveClass:"active",mode:"hash",routes:[{path:"/",name:"Index",component:w},{path:"/heros",name:"Heros",component:M},{path:"/african",name:"African",component:N}]}),A=W,H=a("bc3a"),I=a.n(H),J=a("1157"),B=a.n(J),Q=(a("df25"),a("3e48"),a("5c96")),U=a.n(Q);a("0fae"),a("5b8f");e["default"].prototype.$http=I.a,window.$=B.a,window.jQuery=B.a,e["default"].use(U.a),e["default"].config.productionTip=!1,new e["default"]({router:A,render:function(t){return t(b)}}).$mount("#app")},"5b8f":function(t,n,a){},"85ec":function(t,n,a){},9638:function(t,n,a){"use strict";var e=a("efb8"),s=a.n(e);s.a},a1d8:function(t,n,a){t.exports=a.p+"img/logo.9c9d409a.png"},ab04:function(t,n,a){"use strict";var e=a("22fd"),s=a.n(e);s.a},cab6:function(t,n,a){},d034:function(t,n,a){},df25:function(t,n,a){},e5e4:function(t,n,a){"use strict";var e=a("cab6"),s=a.n(e);s.a},efb8:function(t,n,a){}});
//# sourceMappingURL=app.2a2eca61.js.map