(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d79e5176"],{"074d":function(t,o,s){t.exports=s.p+"img/cardback.8bda427b.jpg"},"099e":function(t,o,s){"use strict";(function(t){s("7db0"),s("4160"),s("b0c0"),s("159b");var i=s("c1df"),r=s.n(i);o["a"]={name:"african",data:function(){return{equipmentList:[],herosList:[],cardPoolList:[],cardPool:{cards:[]},african:[],european:[],version:78,min:1,cards:[],cardHeight:0,times:0,dialogVisible:!1,diamonds:0,poolId:0,gold:[],silver:[],copper:[],showNext:!1,currentNum:0,luckGold:0,currentMode:"Diamond",upsVisible:!1,upCards:[]}},filter:{summonType:function(t){switch(t){case 1:return"l1";case 2:return"l2";case 3:return"l3";case 4:return"l4"}}},created:function(){this.init()},methods:{init:function(){var t=this;this.european=[],this.african=[],this.gold=[],this.silver=[],this.copper=[],this.$http.get("heros.json").then((function(o){t.herosList=o.data,console.log("英雄数量------",t.herosList.length),t.allocate(t.herosList,t.version)})),this.$http.get("equipment.json").then((function(o){t.equipmentList=o.data,console.log("装备数量------",t.equipmentList.length),t.allocate(t.equipmentList,t.version)})),this.$http.get("fajiang.json").then((function(o){t.cardPoolList=o.data;var s=r()().diff(r()("2020-08-31"),"days")%105,i=Math.floor(s/7),e=s%7;console.log("总余天数、余周数、取完余数剩余天数----",s,i,e),t.poolId=e<4?2*i+1:2*i+2,console.log("池子id---",t.poolId),t.cardPoolList.forEach((function(o){o.id==t.poolId&&(t.cardPool=o)}))}))},allocate:function(t,o){var s=this;switch(o){case 96:t.forEach((function(t){s.european.push(t)}));break;case 78:t.forEach((function(t){t.if&&s.european.push(t)}));break}},rareAllocate:function(t){var o=this;t.forEach((function(t){"gold"==t.rare?o.gold.push(t):"silver"==t.rare?o.silver.push(t):o.copper.push(t)}))},rollN:function(t,o){return Math.floor(Math.random()*(t+1-o)+o)},rollcard:function(t){return Math.floor(Math.random()*t.length)},summon:function(t,o,s,i,r){"copper"==t.rare?(console.log("l"+o+t.name+"*"+r),this.european.forEach((function(o){o.name==t.name&&(o.amount=o.amount+r)})),this.inin(t,o,t.name+"×"+r)):"silver"==t.rare?(console.log("l"+o+t.name+"*"+i),this.european.forEach((function(o){o.name==t.name&&(o.amount=o.amount+i)})),this.inin(t,o,t.name+"×"+i)):(console.log("l"+o+t.name+"*"+s),this.european.forEach((function(o){o.name==t.name&&(o.amount=o.amount+s)})),this.inin(t,o,t.name+"×"+s)),console.log("==========================")},probAllocate:function(t){var o=void 0,s=0;t.forEach((function(t){s+=t.prob}));for(var i=Math.random()*s,r=0;r<t.length;r++)if(i-=t[r].prob,i<0){o=t[r];break}return o},draw1ByUp:function(t){var o=this,s=void 0,i=this.rollN(100,this.min),r=this.rollN(100,this.min);console.log("rare_no---",r),this.cardPoolList.forEach((function(s){s.id==t&&(o.cardPool=s)}));var e=this.cardPool.cards.length*(this.cardPool.prob-1)+this.european.length;return this.cardPool.cards.forEach((function(t){o.european.forEach((function(s){t==s.name&&"equipment"!=s.type?s.prob=o.cardPool.prob/e:t==s.name&&(s.prob=o.cardPool.prob/e*2)}))})),this.european.forEach((function(t){t.prob||"equipment"==t.type?t.prob||(t.prob=2/e):t.prob=1/e})),r<=60?(this.rareAllocate(this.european),s=this.probAllocate(this.copper)):r>60&&r<=90?(this.rareAllocate(this.european),s=this.probAllocate(this.silver)):(this.rareAllocate(this.european),s=this.probAllocate(this.gold)),console.log(s),i<=70?this.summon(s,2,1,1,1):i>70&&i<=95?this.summon(s,3,3,3,3):this.summon(s,4,10,10,10),[i,r]},draw5ByUp:function(t){for(var o=this,s=void 0,i=0,r=0,e=0;e<4;e++){var n=this.draw1ByUp(t);n[0]>70&&i++,n[1]>90&&r++}if(i)this.draw1ByUp(t);else{var a=Math.floor(30*Math.random()+70),c=this.rollN(100,this.min);this.cardPoolList.forEach((function(s){s.id==t&&(o.cardPool=s)}));var l=(100-this.cardPool.cards.length*this.cardPool.prob)/(this.european.length-this.cardPool.cards.length);console.log("cardRProb---",l),this.cardPool.cards.forEach((function(t){o.european.forEach((function(s){t==s.name&&(s.prob=o.cardPool.prob)}))})),c<=60?s=this.probAllocate(this.copper):c>60&&c<=90?s=this.probAllocate(this.silver):(r++,s=this.probAllocate(this.gold)),a>70&&a<=95?this.summon(s,3,3,3,3):this.summon(s,4,10,10,10)}return r},draw1ByDiamond:function(){var t=void 0,o=this.rollN(100,this.min),s=this.rollN(100,this.min);console.log("rare_no---",s);var i=this.european.length;return this.european.forEach((function(t){t.prob=1/i})),s<=60?(this.rareAllocate(this.european),t=this.probAllocate(this.copper)):s>60&&s<=90?(this.rareAllocate(this.european),t=this.probAllocate(this.silver)):(this.rareAllocate(this.european),t=this.probAllocate(this.gold)),console.log(t),o<=70?this.summon(t,2,1,1,1):o>70&&o<=95?this.summon(t,3,3,3,3):this.summon(t,4,10,10,10),[o,s]},draw5ByDiamond:function(){for(var t=void 0,o=0,s=0,i=0;i<4;i++){var r=this.draw1ByDiamond();r[0]>70&&o++,r[1]>90&&s++}if(o)this.draw1ByDiamond();else{var e=Math.floor(30*Math.random()+70);o++;var n=this.rollN(100,this.min);this.european.forEach((function(t){t.prob=1})),n<=60?t=this.probAllocate(this.copper):n>60&&n<=90?t=this.probAllocate(this.silver):(s++,t=this.probAllocate(this.gold)),e>70&&e<=95?this.summon(t,3,3,3,3):this.summon(t,4,10,10,10)}return s},nextBox:function(){var t=this;if(this.cards=[],this.currentNum++,this.diamonds+=50,"Diamond"==this.currentMode)if(console.log("num,gold---",this.currentNum,this.luckGold),5==this.currentNum&&this.luckGold||5!=this.currentNum)this.luckGold+=this.draw5ByDiamond();else{for(var o=void 0,s=0,i=0;i<4;i++){var r=this.draw1ByDiamond();r[0]>70&&s++,r[1]>90&&this.luckGold++}if(s&&this.luckGold)this.draw1ByDiamond();else if(s&&!this.luckGold){var e=this.rollN(100,this.min),n=this.european.length;this.european.forEach((function(t){t.prob=1/n})),this.rareAllocate(this.european),this.luckGold++,o=this.probAllocate(this.gold),console.log(o),e<=70?this.summon(o,2,1,1,1):e>70&&e<=95?this.summon(o,3,3,3,3):this.summon(o,4,10,10,10)}else if(!s&&this.luckGold){var a=this.rollN(100,70);s++;var c=this.rollN(100,this.min);this.european.forEach((function(t){t.prob=1})),c<=60?o=this.probAllocate(this.copper):c>60&&c<=90?o=this.probAllocate(this.silver):(this.luckGold++,o=this.probAllocate(this.gold)),a>70&&a<=95?this.summon(o,3,3,3,3):this.summon(o,4,10,10,10)}else{var l=this.rollN(100,70),h=this.european.length;this.european.forEach((function(t){t.prob=1/h})),this.rareAllocate(this.european),this.luckGold++,o=this.probAllocate(this.gold),console.log(o),l>70&&l<=95?this.summon(o,3,3,3,3):this.summon(o,4,10,10,10)}}else if(5==this.currentNum&&this.luckGold||5!=this.currentNum)this.luckGold+=this.draw5ByUp(this.poolId);else{for(var u=void 0,d=0,m=0;m<4;m++){var p=this.draw1ByUp(this.poolId);p[0]>70&&d++,p[1]>90&&this.luckGold++}if(d&&this.luckGold)this.draw1ByUp(this.poolId);else if(d&&!this.luckGold){var f=this.rollN(100,this.min);d++,this.european.forEach((function(t){t.prob=1})),this.luckGold++,u=this.probAllocate(this.gold),f<=70?this.summon(u,2,1,1,1):f>70&&f<=95?this.summon(u,3,3,3,3):this.summon(u,4,10,10,10)}else if(!d&&this.luckGold){var v=this.rollN(100,70),b=this.rollN(100,this.min);this.cardPoolList.forEach((function(o){o.id==t.poolId&&(t.cardPool=o)}));var g=(100-this.cardPool.cards.length*this.cardPool.prob)/(this.european.length-this.cardPool.cards.length);console.log("cardRProb---",g),this.cardPool.cards.forEach((function(o){t.european.forEach((function(s){o==s.name&&(s.prob=t.cardPool.prob)}))})),b<=60?u=this.probAllocate(this.copper):b>60&&b<=90?u=this.probAllocate(this.silver):(this.luckGold++,u=this.probAllocate(this.gold)),v>70&&v<=95?this.summon(u,3,3,3,3):this.summon(u,4,10,10,10)}else{var N=this.rollN(100,70);this.cardPoolList.forEach((function(o){o.id==t.poolId&&(t.cardPool=o)}));var w=(100-this.cardPool.cards.length*this.cardPool.prob)/(this.european.length-this.cardPool.cards.length);console.log("cardRProb---",w),this.cardPool.cards.forEach((function(o){t.european.forEach((function(s){o==s.name&&(s.prob=t.cardPool.prob)}))})),this.luckGold++,u=this.probAllocate(this.gold),N>70&&N<=95?this.summon(u,3,3,3,3):this.summon(u,4,10,10,10)}}console.log("luckGold----",this.luckGold)},inin:function(o,s,i){t(".card .txt").css("opacity","0"),o.txt=i,o.class="",o.summonType=s,this.cards.push(o),this.$nextTick((function(){t(".card").height(1.5*t(".card").width()),t(".card .txt").css("margin-top",1.5*t(".card").width()+10+"px")}))},btnCamp1:function(){this.cards=[],this.currentNum=0,this.showNext=!1;var t=this;setTimeout((function(){t.draw1ByUp(t.poolId),t.diamonds+=0}),100)},btnCamp5:function(){this.cards=[],this.currentNum=0,this.showNext=!1;var t=this;setTimeout((function(){t.draw5ByUp(t.poolId),t.diamonds+=50}),100)},btnCamp25:function(){this.currentMode="Camp",this.cards=[],this.currentNum=0,this.currentNum++,this.showNext=!0,this.luckGold=0;var t=this;setTimeout((function(){t.luckGold+=t.draw5ByUp(t.poolId),t.diamonds+=50,console.log("luckGold----",t.luckGold)}),100)},btnDiamond1:function(){this.cards=[],this.currentNum=0,this.showNext=!1;var t=this;setTimeout((function(){t.draw1ByDiamond(),t.diamonds+=0}),100)},btnDiamond5:function(){this.cards=[],this.currentNum=0,this.showNext=!1;var t=this;setTimeout((function(){t.luckGold=t.draw5ByDiamond(),t.diamonds+=50}),100)},btnDiamond25:function(){this.currentMode="Diamond",this.cards=[],this.currentNum=0,this.currentNum++,this.showNext=!0,this.luckGold=0;var t=this;setTimeout((function(){t.luckGold+=t.draw5ByDiamond(),t.diamonds+=50,console.log("luckGold----",t.luckGold)}),100)},open:function(o){this.cards[o].class="open",console.log(this.cards);var s=this.cards;this.cards=[],this.cards=s;var i=this;setTimeout((function(){switch(t(".card .txt").eq(o).css("opacity","1"),i.cards[o].summonType){case 1:t(".card").eq(o).addClass("l1");break;case 2:t(".card").eq(o).addClass("l2");break;case 3:t(".card").eq(o).addClass("l3");break;case 4:t(".card").eq(o).addClass("l4");break}}),500),console.log(this.cards[o].class)},toggleCards:function(t){this.version=t,this.init()},openUps:function(){var o=this;this.upCards=[],this.cardPool.cards.forEach((function(t){o.upCards.push(o.european.find((function(o){return o.name==t})))})),console.log("up卡-----",this.upCards),this.$nextTick((function(){t(".up").height(t(".up").width())})),this.upsVisible=!0}}}}).call(this,s("1157"))},"7db0":function(t,o,s){"use strict";var i=s("23e7"),r=s("b727").find,e=s("44d2"),n="find",a=!0;n in[]&&Array(1)[n]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(n)},8062:function(t,o,s){"use strict";s.r(o);var i=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",[i("div",{staticClass:"container howDraw underline"},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:5==t.currentNum||0==t.currentNum,expression:"currentNum == 5 || currentNum == 0"}],on:{click:t.btnCamp5}},[t._v(t._s(this.cardPool.name)+"卡池万象卡盒")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:5==t.currentNum||0==t.currentNum,expression:"currentNum == 5 || currentNum == 0"}],on:{click:t.btnCamp25}},[t._v(t._s(this.cardPool.name)+"卡池万象卡盒×5")]),i("el-badge",{directives:[{name:"show",rawName:"v-show",value:5==t.currentNum||0==t.currentNum,expression:"currentNum == 5 || currentNum == 0"}],staticClass:"item",staticStyle:{margin:"10px"},attrs:{value:t.cardPool.cards.length}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:5==t.currentNum||0==t.currentNum,expression:"currentNum == 5 || currentNum == 0"}],staticStyle:{margin:"0 !important"},on:{click:t.openUps}},[t._v(" "+t._s(this.cardPool.name)+"卡池UP卡 ")])],1),i("br"),i("el-button",{directives:[{name:"show",rawName:"v-show",value:5==t.currentNum||0==t.currentNum,expression:"currentNum == 5 || currentNum == 0"}],on:{click:t.btnDiamond5}},[t._v("钻石召唤万象卡盒")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:5==t.currentNum||0==t.currentNum,expression:"currentNum == 5 || currentNum == 0"}],on:{click:t.btnDiamond25}},[t._v("钻石召唤万象卡盒×5")]),i("br"),i("el-button",{on:{click:function(o){t.dialogVisible=!0}}},[t._v(t._s(this.$t("african.accumulation")))]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showNext&&5!=t.currentNum&&0!=t.currentNum,expression:"showNext && currentNum != 5 && currentNum != 0"}],attrs:{type:"text"}},[t._v(t._s(t.currentNum)+"/5")]),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showNext&&5!=t.currentNum,expression:"showNext && currentNum != 5"}],on:{click:t.nextBox}},[t._v(t._s(this.$t("african.next")))])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cards!=[],expression:"cards != []"}],staticClass:"container cards"},t._l(t.cards,(function(o,r){return i("div",{key:r,class:"card col-sm-2 col-xs-5 "+o.class,on:{click:function(o){return t.open(r)}}},[i("img",{attrs:{src:s("074d")}}),i("div",{staticClass:"cardfront",style:"background-image: url("+o.pic+")"},[i("div",{class:"title "+o.type},[i("span",[t._v(t._s(o.cost))]),t._v(t._s(o.name)+" ")])]),i("div",{staticClass:"txt"},[i("div",{class:"rare "+o.rare}),t._v(" "+t._s(o.txt)+" ")])])})),0),i("el-dialog",{attrs:{title:this.$t("african.accumulation"),visible:t.dialogVisible,width:"90%"},on:{"update:visible":function(o){t.dialogVisible=o}}},[i("div",{staticClass:"pay"},[t._v(" "+t._s(this.$t("african.hasCost"))+t._s(t.diamonds)+t._s(this.$t("african.diamond"))+" ")]),i("div",{staticClass:"cardAmounts"},t._l(t.european,(function(o,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:o.amount,expression:"item.amount"}],key:s,staticClass:"cardAmount col-sm-3 col-xs-6 ",class:o.rare},[i("div",[t._v(t._s(o.name))]),i("div",[t._v(t._s("x"+o.amount))])])})),0)]),i("el-dialog",{attrs:{title:this.$t("african.upTitle"),visible:t.upsVisible,width:"90%"},on:{"update:visible":function(o){t.upsVisible=o}}},t._l(t.upCards,(function(t,o){return i("div",{key:o,staticClass:"up col-sm-2 col-xs-4 "},[i("div",{staticClass:"border ",class:t.rare},[i("div",{staticClass:"pic",style:"background-image: url(image/card/"+t.name+".jpg)"})])])})),0)],1)},r=[],e=s("099e"),n=e["a"],a=(s("d1e3"),s("2877")),c=Object(a["a"])(n,i,r,!1,null,"6b832230",null);o["default"]=c.exports},d1e3:function(t,o,s){"use strict";var i=s("e82f"),r=s.n(i);r.a},e82f:function(t,o,s){}}]);
//# sourceMappingURL=chunk-d79e5176.11785f1d.js.map