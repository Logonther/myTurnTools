<template>
    <div>
        <div class="container howDraw underline">
            <button class="btn btn-default" @click="btnDraw1">抽1张</button>
            <button class="btn btn-default" @click="btnDraw5">抽5张</button>
            <button class="btn btn-default" @click="min = 100" style="opacity: 0">看毛看啊</button>
            <!--<button class="btn btn-default" @click="toggleCards(96)">切换为测试服卡池（96张版本）</button>-->
            <!--<button class="btn btn-default" @click="toggleCards(78)">切换为国际服卡池（90张版本）</button>-->
        </div>
        <div class="container cards" v-show="cards != []">
            <div v-for="(item,index) in cards"
                 :class="'card col-sm-2 col-xs-5 ' + item.class"
                 :key="index"
                 @click="open(index)"
            >
                <img src="../assets/image/cardback.jpg">
                <div class="cardfront" :style="'background-image: url('+item.pic+')'">
                    <div :class="'title ' + item.type">
                        <span>{{ item.cost }}</span>{{ item.name }}
                    </div>
                </div>
                <div class="txt"><div :class="'rare ' + item.rare"></div>{{ item.txt }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "african",
        data(){
            return{
                equipmentList:[],
                herosList:[],
                african:[],
                european:[],
                version: 78,
                min: 1,
                cards: [],
                cardHeight: 0,
            }
        },
        created(){
            this.init()
        },
        mounted(){
        },
        methods:{
            init(){
                this.european = []
                this.african = []
                this.$http.get('heros.json').then((res) => {
                    this.herosList = res.data
                    this.allocate(this.herosList,this.version)
                })
                this.$http.get('equipment.json').then((res) => {
                    this.equipmentList = res.data
                    this.allocate(this.equipmentList,this.version)
                })
            },
            allocate(obj,version){
                switch (obj,version) {
                    case 96:
                        obj.forEach((item) => {
                            if (item.rare == "gold") {
                                this.european.push(item);
                            }else{
                                this.european.push(item);
                                this.african.push(item);
                            }
                        })
                        break
                    case 78:
                        obj.forEach((item) => {
                            if (item.if){
                                if (item.rare == "gold") {
                                    this.european.push(item);
                                }else{
                                    this.european.push(item);
                                    this.african.push(item);
                                }
                            }
                        })
                        break
                }
            },
            roll100(min){
                return Math.floor(Math.random()*(101-min)+min)
            },
            rollcard(cards) {
                return Math.floor(Math.random()*cards.length)
            },
            draw1(){
                let card = undefined;
                let roll_no = this.roll100(this.min);
                if (roll_no <= 70) {
                    card = this.african[this.rollcard(this.african)];
                    if (card.rare == "copper") {
                        console.log("不暴击"+card.name+"*3");
                        this.inin(card,card.name+"×3");
                    }else{
                        console.log("不暴击"+card.name+"*1");
                        this.inin(card,card.name+"×1");
                    }
                }else if (roll_no > 70 && roll_no <= 95) {
                    card = this.european[this.rollcard(this.european)]
                    if (card.rare == "copper") {
                        console.log("小暴击"+card.name+"*12");
                        this.inin(card,card.name+"×12");
                    }else if (card.rare == "silver") {
                        console.log("小暴击"+card.name+"*4");
                        this.inin(card,card.name+"×4");
                    }else{
                        console.log("小暴击"+card.name+"*1");
                        this.inin(card,card.name+"×1");
                    }
                }else{
                    card = this.european[this.rollcard(this.european)]
                    if (card.rare == "copper") {
                        console.log("大暴击"+card.name+"*36");
                        this.inin(card,card.name+"×36");
                    }else if (card.rare == "silver") {
                        console.log("大暴击"+card.name+"*12");
                        this.inin(card,card.name+"×12");
                    }else{
                        console.log("大暴击"+card.name+"*3");
                        this.inin(card,card.name+"×3");
                    }
                }
                return roll_no;
            },
            draw5_1(){
                let card = undefined;
                let roll_no = this.roll100(this.min);
                if (roll_no <= 60) {
                    card = this.european[this.rollcard(this.european)];
                    if (card.rare == "copper") {
                        console.log("不暴击"+card.name+"*12");
                        this.inin(card,card.name+"×12");
                    }else if (card.rare == "silver") {
                        console.log("不暴击"+card.name+"*4");
                        this.inin(card,card.name+"×4");
                    }else{
                        console.log("不暴击"+card.name+"*1");
                        this.inin(card,card.name+"×1");
                    }
                }else if (roll_no > 60 && roll_no <= 90) {
                    card = this.european[this.rollcard(this.european)]
                    if (card.rare == "copper") {
                        console.log("小暴击"+card.name+"*36");
                        this.inin(card,card.name+"×36");
                    }else if (card.rare == "silver") {
                        console.log("小暴击"+card.name+"*12");
                        this.inin(card,card.name+"×12");
                    }else{
                        console.log("小暴击"+card.name+"*3");
                        this.inin(card,card.name+"×3");
                    }
                }else{
                    card = this.european[this.rollcard(this.european)]
                    if (card.rare == "copper") {
                        console.log("大暴击"+card.name+"*120");
                        this.inin(card,card.name+"×120");
                    }else if (card.rare == "silver") {
                        console.log("大暴击"+card.name+"*40");
                        this.inin(card,card.name+"×40");
                    }else{
                        console.log("大暴击"+card.name+"*10");
                        this.inin(card,card.name+"×10");
                    }
                }
                return roll_no;
            },
            draw5(){
                let card = undefined
                let luck = 0
                for (var i = 0;i<4;i++){
                    var roll_res = this.draw5_1();
                    if (roll_res>60) {
                        luck++;
                    }
                }
                if (luck){
                    this.draw5_1();
                }else{
                    var roll_no = Math.floor(Math.random()*40+60)
                    if (roll_no > 60 && roll_no <= 90) {
                        card = this.european[this.rollcard(this.european)]
                        if (card.rare == "copper") {
                            console.log("小暴击"+card.name+"*36");
                            this.inin(card,card.name+"×36");
                        }else if (card.rare == "silver") {
                            console.log("小暴击"+card.name+"*12");
                            this.inin(card,card.name+"×12");
                        }else{
                            console.log("小暴击"+card.name+"*3");
                            this.inin(card,card.name+"×3");
                        }
                    }else{
                        card = this.european[this.rollcard(this.european)]
                        if (card.rare == "copper") {
                            console.log("大暴击"+card.name+"*120");
                            this.inin(card,card.name+"×120");
                        }else if (card.rare == "silver") {
                            console.log("大暴击"+card.name+"*40");
                            this.inin(card,card.name+"×40");
                        }else{
                            console.log("大暴击"+card.name+"*10");
                            this.inin(card,card.name+"×10");
                        }
                    }
                }
            },
            inin(card,txt){
                $('.card .txt').css("opacity","0")
                card.txt = txt
                card.class = ''
                this.cards.push(card)
                this.$nextTick(() => {
                    $('.card').height($('.card').width()*1.5)
                    $('.card .txt').css("margin-top",$('.card').width()*1.5+'px')
                })
            },
            btnDraw1(){
                this.cards = []
                let that = this
                setTimeout(function () {
                    that.draw1()
                },100)
            },
            btnDraw5(){
                this.cards = []
                let that = this
                setTimeout(function () {
                    that.draw5()
                },100)
            },
            open(i){
                console.log(this.cards[i].class);
                this.cards[i].class = 'open'
                let c = this.cards
                this.cards = []
                this.cards = c
                setTimeout(function () {
                    $('.card .txt').eq(i).css("opacity","1")
                },500)
                console.log(this.cards[i].class);
            },
            toggleCards(num){
                this.version = num
                this.init()
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/less/base";
    .cards{
        .card{
            position: relative;
            transform-style: preserve-3d;
            perspective: 0px;
            padding: 0;
            margin: 30rem/@fontSize 10rem/@fontSize;
            &.open{
                img{
                    transform: rotateY(180deg)
                }
                .cardfront{
                    transform: rotateY(360deg)
                }
            }
            img{
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 1s;
                z-index: 1;
                backface-visibility: hidden;
                border: 3rem/@fontSize solid #333;
                transform: translateZ(1px);
            }
            .cardfront{
                border: 3rem/@fontSize solid #333;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 1s;
                width: 100%;
                height: 100%;
                background-image: url("../assets/image/书龙-01.png");
                background-size: auto 100%;
                background-position: center;
                background-repeat: no-repeat;
                transform: rotateY(180deg);
                .title{
                    height: 33rem/@fontSize;
                    line-height: 30rem/@fontSize;
                    font-size: 20rem/@fontSize;
                    border-bottom: 3rem/@fontSize solid #333;
                    span{
                        padding: 0 15rem/@fontSize;
                    }
                    color: white;

                }
                .title.yellow{
                    background-color: rgb(189,161,0);
                }
                .title.red{
                    background-color: rgb(175,66,50);
                }
                .title.blue{
                    background-color: rgb(53,94,170);
                }
                .title.purple{
                    background-color: rgb(118,84,145);
                }
                .title.green{
                    background-color: rgb(12,114,77);
                }
                .title.equipment{
                    opacity: 0;
                }
            }
            .txt{
                height: 33rem/@fontSize;
                line-height: 30rem/@fontSize;
                font-size: 20rem/@fontSize;
                position: relative;
                text-align: center;
                vertical-align: middle;
                opacity: 0;
                .rare{
                    display: inline-block;
                    width: 33rem/@fontSize;
                    height: 33rem/@fontSize;
                    background-size: 33rem/@fontSize;
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: relative;
                    vertical-align: middle;
                }
                .rare.gold{
                    background-image: url("../assets/image/金卡.png");
                }
                .rare.silver{
                    background-image: url("../assets/image/银卡.png");
                }
                .rare.copper{
                    background-image: url("../assets/image/铜卡.png");
                }
            }
        }
    }
</style>
