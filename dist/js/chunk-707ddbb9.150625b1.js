(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707ddbb9"],{1399:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"how"}},[e("div",{ref:"container",staticClass:"container"},[t.current?e("div",{staticClass:"banner",class:t.current.type,style:"background-image: url("+t.current.pic+")"},[t._v(" "+t._s(t.current.name)+" ")]):t._e(),t.current?e("div",{staticClass:"skills"},["equipment"!==t.current.type?e("div",{staticClass:"skill"},[e("div",{staticClass:"title"},[e("span",[t._v("Ex")]),e("span",[t._v(t._s(t.current.ex[0].name)+"：")])]),e("div",{staticClass:"content"},[t._v(t._s(t.current.ex[0].txt.replace(/(\/)/g," ")))])]):t._e(),"equipment"!==t.current.type?e("div",{staticClass:"skill"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(t.$t("heros.skill")))]),e("span",[t._v(t._s(t.current.skill1[0].cost)+t._s(t.$t("heros.cost")))]),e("span",[t._v(t._s(t.current.skill1[0].name)+"：")])]),e("div",{staticClass:"content"},[t._v(t._s(t.current.skill1[0].txt.replace(/(\/)/g," ")))])]):t._e(),"equipment"!==t.current.type?e("div",{staticClass:"skill"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(t.$t("heros.skill")))]),e("span",[t._v(t._s(t.current.skill2[0].cost)+t._s(t.$t("heros.cost")))]),e("span",[t._v(t._s(t.current.skill2[0].name)+"：")])]),e("div",{staticClass:"content"},[t._v(t._s(t.current.skill2[0].txt.replace(/(\/)/g," ")))])]):t._e(),"equipment"!==t.current.type?e("div",{staticClass:"skill"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(t.$t("heros.skill")))]),e("span",[t._v(t._s(t.current.skill3[0].cost)+t._s(t.$t("heros.cost")))]),e("span",[t._v(t._s(t.current.skill3[0].name)+"：")])]),e("div",{staticClass:"content"},[t._v(t._s(t.current.skill3[0].txt.replace(/(\/)/g," ")))])]):t._e(),"equipment"===t.current.type?e("div",{staticClass:"skill"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(t.current.cost)+t._s(t.$t("heros.cost")))])]),e("div",{staticClass:"content"},[t._v(t._s(t.current.txt.replace(/(\/)/g," ")))])]):t._e(),t.current.derivative!=[]?e("div",t._l(t.current.derivative,(function(s,r){return e("div",{key:r,staticClass:"skill"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("heros.derivative"))+" "+t._s(s.cost)+t._s(t.$t("heros.cost"))+" "+t._s(s.name)+"： ")]),e("div",{staticClass:"content"},[t._v(t._s(s.txt.replace(/(\/)/g," ")))])])})),0):t._e()]):t._e(),t.current&&"equipment"!==t.current.type?e("div",{staticClass:"datas"},[e("div",{staticClass:"radar col-sm-4 col-xs-12"},[e("chart",{ref:"chart",staticClass:"heroChart",attrs:{options:t.chartOptions,"auto-resize":!0}})],1),e("div",{staticClass:"data col-sm-4 col-xs-6"},[e("div",{staticClass:"title"},[t._v("满级血量")]),e("div",{staticClass:"content"},[t._v(t._s(t.current.maxHealth))])]),e("div",{staticClass:"data col-sm-4 col-xs-6"},[e("div",{staticClass:"title"},[t._v("阵营")]),e("div",{staticClass:"content"},[t._v(t._s(t.current.faction))])]),e("div",{staticClass:"data col-sm-4 col-xs-6"},[e("div",{staticClass:"title"},[t._v("生日")]),e("div",{staticClass:"content"},[t._v(t._s(t.current.birthday))])]),e("div",{staticClass:"data col-sm-4 col-xs-6"},[e("div",{staticClass:"title"},[t._v("属性")]),e("div",{staticClass:"content"},[t._v(t._s(t.current.stats))])])]):t._e()]),e("el-button",{staticClass:"openBtn",attrs:{type:"warning",icon:"el-icon-notebook-2",circle:""},on:{click:function(s){t.showList=!0}}}),e("el-drawer",{staticClass:"cards",attrs:{visible:t.showList,direction:"rtl","show-close":!1,"with-header":!1,size:"50%"},on:{"update:visible":function(s){t.showList=s}}},[t._l(t.heroList,(function(s,r){return e("div",{key:"h"+r,staticClass:"col-md-6 col-sm-12 card"},[e("div",{staticClass:"content",class:s.type,on:{click:function(e){return t.choose(s)}}},[e("div",{staticClass:"pic",style:"background-image: url("+s.pic+")"}),e("div",{staticClass:"name"},[t._v(t._s(s.name))])])])})),t._l(t.equipmentList,(function(s,r){return e("div",{key:"e"+r,staticClass:"col-md-6 col-sm-12 card"},[e("div",{staticClass:"content",class:s.type,on:{click:function(e){return t.choose(s)}}},[e("div",{staticClass:"pic",style:"background-image: url(image/card/"+s.name+".jpg)"}),e("div",{staticClass:"name"},[t._v(t._s(s.name))])])])}))],2)],1)},a=[],i=(e("7db0"),e("b0c0"),{name:"collection",data:function(){return{showList:!1,heroList:[],equipmentList:[],current:void 0,chartOptions:{}}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get("heros.json").then((function(s){t.heroList=s.data;var e=t.heroList.find((function(t){return"白魔导士"===t.name}));t.current=e,t.showChart(e)})),this.$http.get("equipment.json").then((function(s){t.equipmentList=s.data}))},choose:function(t){console.log("点选------",t),document.documentElement.scrollTop=document.body.scrollTop=0,this.current=t,this.showChart(t)},showChart:function(t){console.log(t),this.chartOptions={};var s="";switch(t.type){case"yellow":s="189, 161, 0";break;case"red":s="175, 66, 50";break;case"blue":s="53, 94, 170";break;case"green":s="12, 114, 77";break;case"purple":s="118, 84, 145";break}this.chartOptions={radar:[{indicator:[{text:"体质",max:18},{text:"力量",max:18},{text:"灵巧",max:18},{text:"知识",max:18},{text:"魔力",max:18},{text:"异能",max:18}],center:["50%","50%"],radius:this.isMobile?50:100,startAngle:90,splitNumber:6,shape:"circle",name:{formatter:"【{value}】",textStyle:{color:"rgb("+s+")"}},splitArea:{areaStyle:{color:["rgba("+s+", 0)","rgba("+s+", 0.2)","rgba("+s+", 0.4)","rgba("+s+", 0.6)","rgba("+s+", 0.8)","rgba("+s+", 1)"],shadowColor:"rgba(0, 0, 0, 0.3)",shadowBlur:10}},axisLine:{lineStyle:{color:"rgba(255, 255, 255, 0.5)"}},splitLine:{lineStyle:{color:"rgba(255, 255, 255, 0.5)"}}}],series:[{name:"六维雷达图",type:"radar",data:[{value:t.property,name:"hero",symbol:"circle",symbolSize:5,areaStyle:{opacity:.7,color:"pink"},label:{normal:{show:!0,textBorderColor:"white",formatter:function(t){switch(t.value){case 1:return"E－";case 2:return"E";case 3:return"E＋";case 4:return"D－";case 5:return"D";case 6:return"D＋";case 7:return"C－";case 8:return"C";case 9:return"C＋";case 10:return"B－";case 11:return"B";case 12:return"B＋";case 13:return"A－";case 14:return"A";case 15:return"A＋";case 16:return"S－";case 17:return"S";case 18:return"S＋"}}}}}]}]}}}}),n=i,c=(e("bdc0"),e("2877")),o=Object(c["a"])(n,r,a,!1,null,"19633089",null);s["default"]=o.exports},"299c6":function(t,s,e){},"65f0":function(t,s,e){var r=e("861d"),a=e("e8b5"),i=e("b622"),n=i("species");t.exports=function(t,s){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?r(e)&&(e=e[n],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===s?0:s)}},"7db0":function(t,s,e){"use strict";var r=e("23e7"),a=e("b727").find,i=e("44d2"),n="find",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(n)},b0c0:function(t,s,e){var r=e("83ab"),a=e("9bf2").f,i=Function.prototype,n=i.toString,c=/^\s*function ([^ (]*)/,o="name";!r||o in i||a(i,o,{configurable:!0,get:function(){try{return n.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,s,e){var r=e("f8c2"),a=e("44ad"),i=e("7b0b"),n=e("50c4"),c=e("65f0"),o=[].push,l=function(t){var s=1==t,e=2==t,l=3==t,u=4==t,d=6==t,v=5==t||d;return function(p,h,_,f){for(var m,C,b=i(p),y=a(b),k=r(h,_,3),g=n(y.length),x=0,w=f||c,L=s?w(p,g):e?w(p,0):void 0;g>x;x++)if((v||x in y)&&(m=y[x],C=k(m,x,b),t))if(s)L[x]=C;else if(C)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:o.call(L,m)}else if(u)return!1;return d?-1:l||u?u:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bdc0:function(t,s,e){"use strict";var r=e("299c6"),a=e.n(r);a.a},e8b5:function(t,s,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-707ddbb9.150625b1.js.map