<template>
    <div>
        <div class="container howDraw underline">
            <!--<el-button @click="btnCamp1">冬幕堡卡池单次召唤</el-button>-->
            <el-button v-show="currentNum == 5 || currentNum == 0" @click="btnCamp5">{{ this.cardPool.name }}卡池万象卡盒</el-button>
            <el-button v-show="currentNum == 5 || currentNum == 0" @click="btnCamp25">{{ this.cardPool.name }}卡池万象卡盒×5</el-button>
            <el-badge v-show="currentNum == 5 || currentNum == 0" :value="cardPool.cards.length" class="item" style="margin: 10px">
                <el-button v-show="currentNum == 5 || currentNum == 0" @click="openUps" style="margin: 0 !important;">
                    {{ this.cardPool.name }}卡池UP卡
                </el-button>
            </el-badge><br>
            <!--<el-button @click="btnDiamond1">钻石召唤单次召唤</el-button>-->
            <el-button v-show="currentNum == 5 || currentNum == 0" @click="btnDiamond5">钻石召唤万象卡盒</el-button>
            <el-button v-show="currentNum == 5 || currentNum == 0" @click="btnDiamond25">钻石召唤万象卡盒×5</el-button><br>

            <el-button @click="dialogVisible = true">{{ this.$t("african.accumulation") }}</el-button>
            <el-button v-show="showNext && currentNum != 5 && currentNum != 0" type="text">{{ currentNum }}/5</el-button>
            <el-button v-show="showNext && currentNum != 5" @click="nextBox">{{ this.$t("african.next") }}</el-button>
            <!--<el-button @click="toggleCards(96)">切换为测试服卡池（96张版本）</el-button>-->
            <!--<el-button @click="toggleCards(78)">切换为国际服卡池（90张版本）</el-button>-->
        </div>
        <div class="container cards" v-show="cards != []">
            <div v-for="(item, index) in cards"
                 :class="'card col-sm-2 col-xs-5 ' + item.class"
                 :key="index"
                 @click="open(index)"
            >
                <img src="../assets/image/cardback.jpg">
                <div class="cardfront" :style="'background-image: url('+item.pic+')'">
                    <div :class="'title ' + item.type">
                        <span v-if="item.type === 'equipment'">{{ item.cost }}</span>{{ item.name }}
                    </div>
                    <div v-if="item.type === 'equipment'" class="equipmentTxt">
                        <div class="txtBox">
                            {{ item.txt.replace(/(\/)/g,' ') }}
                        </div>
                    </div>
                </div>
                <div class="txt">
                    <div :class="'rare ' + item.rare"></div>
                    {{ item.amountTxt }}
                </div>
            </div>
        </div>
        <el-dialog
                :title="this.$t('african.accumulation')"
                :visible.sync="dialogVisible"
                width="90%">
            <div class="pay">
                {{ this.$t("african.hasCost") }}{{ diamonds }}{{ this.$t("african.diamond") }}
            </div>
            <div class="cardAmounts">
                <div
                        v-show="item.amount"
                        v-for="(item,index) in european"
                        :key="index"
                        class="cardAmount col-sm-3 col-xs-6 "
                        :class="item.rare"
                >
                    <div>{{ item.name }}</div>
                    <div>{{ 'x' + item.amount }}</div>
                </div>
            </div>
        </el-dialog>
        <el-dialog
            :title="this.$t('african.upTitle')"
            :visible.sync="upsVisible"
            width="90%"
        >
            <div
                class="up col-sm-2 col-xs-4 "
                v-for="(item, index) in upCards"
                :key="index"
            >
                <div class="border " :class="item.rare">
                    <div class="pic" :style="'background-image: url(image/card/'+item.name+'.jpg)'" />
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: "african",
    data() {
        return {
            equipmentList: [],
            herosList: [],
            cardPoolList: [],
            cardPool: {
                cards: []
            },
            african: [],
            european: [],
            version: 78,
            min: 1,
            cards: [],
            cardHeight: 0,
            times: 0,
            dialogVisible: false,
            diamonds: 0,
            poolId: 0,

            gold: [],
            silver: [],
            copper: [],

            showNext: false,
            currentNum: 0,
            luckGold: 0,
            currentMode: 'Diamond',

            upsVisible: false,
            upCards: [],
        }
    },
    filter: {
        summonType(val) {
            switch (val) {
                case 1:
                    return 'l1'
                case 2:
                    return 'l2'
                case 3:
                    return 'l3'
                case 4:
                    return 'l4'
            }
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            this.european = []
            this.african = []
            this.gold = []
            this.silver = []
            this.copper = []
            this.$http.get('heros.json').then((res) => {
                this.herosList = res.data
                console.log('英雄数量------',this.herosList.length);
                this.allocate(this.herosList, this.version)
            })
            this.$http.get('equipment.json').then((res) => {
                this.equipmentList = res.data
                console.log('装备数量------',this.equipmentList.length);
                this.allocate(this.equipmentList, this.version)
            })
            this.$http.get('fajiang.json').then((res) => {
                this.cardPoolList = res.data
                // 算轮换池子
                const days = moment().diff(moment('2020-08-31'),'days') % 105 // 105天转两圈，取余
                const weeks = Math.floor(days / 7) // 看起56天中的第几个星期，取余
                const day = days % 7 // 取完星期还剩几天
                console.log('总余天数、余周数、取完余数剩余天数----', days, weeks, day);
                if (day < 4){
                    this.poolId = 2 * weeks + 1
                } else {
                    this.poolId = 2 * weeks + 2
                }
                console.log('池子id---', this.poolId);
                this.cardPoolList.forEach(item => {
                    if (item.id == this.poolId){
                        this.cardPool = item
                    }
                })
            })
        },
        allocate(obj, version) {
            switch (obj, version) {
                case 96:
                    obj.forEach((item) => {
                        this.european.push(item)
                    })
                    break
                case 78:
                    obj.forEach((item) => {
                        if (item.if) {
                            this.european.push(item)
                        }
                    })
                    break
            }
        },
        rareAllocate(obj) {
            obj.forEach((item) => {
                if (item.rare == "gold") {
                    this.gold.push(item)
                } else if (item.rare == 'silver') {
                    this.silver.push(item)
                } else {
                    this.copper.push(item)
                }
            })
        },
        rollN(n, min) {
            return Math.floor(Math.random() * (n + 1 - min) + min)
        },
        rollcard(cards) {
            return Math.floor(Math.random() * cards.length)
        },
        summon(card, type, gold, silver, copper) {
            if (card.rare == "copper") {
                console.log('l' + type + card.name + "*" + copper);
                this.european.forEach(item => {
                    if (item.name == card.name) {
                        item.amount = item.amount + copper
                    }
                })
                this.inin(card, type, card.name + "×" + copper);
            } else if (card.rare == "silver") {
                console.log('l' + type + card.name + "*" + silver);
                this.european.forEach(item => {
                    if (item.name == card.name) {
                        item.amount = item.amount + silver
                    }
                })
                this.inin(card, type, card.name + "×" + silver);
            } else {
                console.log('l' + type + card.name + "*" + gold);
                this.european.forEach(item => {
                    if (item.name == card.name) {
                        item.amount = item.amount + gold
                    }
                })
                this.inin(card, type, card.name + "×" + gold);
            }
            console.log('==========================')
        },
        // 权重决定卡
        probAllocate(rareArr) {
            let card = undefined
            let probTotal = 0
            rareArr.forEach(item => {
                probTotal += item.prob
            })
            let roll_prob = Math.random() * probTotal
            for (let i = 0;i < rareArr.length;i ++){
                roll_prob -= rareArr[i].prob
                if (roll_prob < 0) {
                    card = rareArr[i]
                    break
                }
            }
            return card
        },
        // 金卡 10% 1.82%  0.18% 0.27% | 1.16%/2.33%  0.12%/0.23% 0.17%/0.34%
        // 银卡 30% 4.55%  0.45% 0.77% | 2.27%/4.55%  0.23%/0.45% 0.50%/1.00%
        // 铜卡 60% 10.71% 1.07% 1.58% | 5.22%/10.43% 0.52%/1.04% 0.98%/1.97%
        // 精良 70% *1
        // 史诗 25% *3
        // 传奇 5% *10
        draw1ByUp(id) {
            let card = undefined;
            let roll_no = this.rollN(100, this.min)
            let rare_no = this.rollN(100, this.min)
            console.log('rare_no---',rare_no);
            this.cardPoolList.forEach(item => {
                if (item.id == id){
                    this.cardPool = item
                }
            })
            let amount = this.cardPool.cards.length * (this.cardPool.prob - 1) + this.european.length
            this.cardPool.cards.forEach(cardP => {
                this.european.forEach(cardR => {
                    if (cardP == cardR.name && cardR.type != 'equipment'){
                        cardR.prob = this.cardPool.prob / amount
                    } else if (cardP == cardR.name){
                        cardR.prob = this.cardPool.prob / amount * 2
                    }
                })
            })
            this.european.forEach(item => {
                if (!item.prob && item.type != 'equipment'){
                    item.prob = 1 / amount
                } else if (!item.prob){
                    item.prob = 2 / amount
                }
            })

            // 决定稀有度
            if (rare_no <= 60) {
                this.rareAllocate(this.european)
                card = this.probAllocate(this.copper)
            } else if (rare_no > 60 && rare_no <= 90) {
                this.rareAllocate(this.european)
                card = this.probAllocate(this.silver)
            } else {
                this.rareAllocate(this.european)
                card = this.probAllocate(this.gold)
            }
            console.log(card);


            if (roll_no <= 70) {
                this.summon(card, 2, 1, 1, 1)
            } else if (roll_no > 70 && roll_no <= 95) {
                this.summon(card, 3, 3, 3, 3)
            } else {
                this.summon(card, 4, 10, 10, 10)
            }
            return [roll_no,rare_no];
        },
        draw5ByUp(id) {
            let card = undefined
            let luck = 0
            let luckGold = 0
            for (var i = 0; i < 4; i++) {
                var noArr = this.draw1ByUp(id);
                if (noArr[0] > 70) {
                    luck ++
                }
                if (noArr[1] > 90) {
                    luckGold ++
                }
            }
            if (luck) {
                this.draw1ByUp(id);
            } else {
                let roll_no = Math.floor(Math.random() * 30 + 70)
                let rare_no = this.rollN(100, this.min)
                this.cardPoolList.forEach(item => {
                    if (item.id == id){
                        this.cardPool = item
                    }
                })
                // 概率分配
                let cardRProb = (100 - this.cardPool.cards.length * this.cardPool.prob) / (this.european.length - this.cardPool.cards.length)
                console.log('cardRProb---',cardRProb);
                this.cardPool.cards.forEach(cardP => {
                    this.european.forEach(cardR => {
                        if (cardP == cardR.name){
                            cardR.prob = this.cardPool.prob
                        }
                    })

                })
                if (rare_no <= 60) {
                    card = this.probAllocate(this.copper)
                } else if (rare_no > 60 && rare_no <= 90) {
                    card = this.probAllocate(this.silver)
                } else {
                    luckGold ++
                    card = this.probAllocate(this.gold)
                }
                if (roll_no > 70 && roll_no <= 95) {
                    this.summon(card, 3, 3, 3, 3)
                } else {
                    this.summon(card, 4, 10, 10, 10)
                }
            }
            return luckGold
        },
        draw1ByDiamond() {
            let card = undefined;
            let roll_no = this.rollN(100, this.min)
            let rare_no = this.rollN(100, this.min)
            console.log('rare_no---',rare_no);
            let amount = this.european.length
            this.european.forEach(item => {
                item.prob = 1 / amount
            })

            // 决定稀有度
            if (rare_no <= 60) {
                this.rareAllocate(this.european)
                card = this.probAllocate(this.copper)
            } else if (rare_no > 60 && rare_no <= 90) {
                this.rareAllocate(this.european)
                card = this.probAllocate(this.silver)
            } else {
                this.rareAllocate(this.european)
                card = this.probAllocate(this.gold)
            }
            console.log(card);


            if (roll_no <= 70) {
                this.summon(card, 2, 1, 1, 1)
            } else if (roll_no > 70 && roll_no <= 95) {
                this.summon(card, 3, 3, 3, 3)
            } else {
                this.summon(card, 4, 10, 10, 10)
            }
            return [roll_no,rare_no];
        },
        draw5ByDiamond() {
            let card = undefined
            let luck = 0
            let luckGold = 0
            for (var i = 0; i < 4; i++) {
                var noArr = this.draw1ByDiamond();
                if (noArr[0] > 70) {
                    luck ++
                }
                if (noArr[1] > 90) {
                    luckGold ++
                }
            }
            if (luck) {
                this.draw1ByDiamond();
            } else {
                let roll_no = Math.floor(Math.random() * 30 + 70)
                luck ++
                let rare_no = this.rollN(100, this.min)
                this.european.forEach(cardR => {
                    cardR.prob = 1
                })
                if (rare_no <= 60) {
                    card = this.probAllocate(this.copper)
                } else if (rare_no > 60 && rare_no <= 90) {
                    card = this.probAllocate(this.silver)
                } else {
                    luckGold ++
                    card = this.probAllocate(this.gold)
                }
                if (roll_no > 70 && roll_no <= 95) {
                    this.summon(card, 3, 3, 3, 3)
                } else {
                    this.summon(card, 4, 10, 10, 10)
                }
            }
            return luckGold
        },
        nextBox() {
            this.cards = []
            this.currentNum ++
            this.diamonds += 50
            if (this.currentMode == 'Diamond'){
                console.log('num,gold---',this.currentNum,this.luckGold);
                if ((this.currentNum == 5 && this.luckGold) || this.currentNum != 5){
                    this.luckGold += this.draw5ByDiamond()
                } else {
                    let card = undefined
                    let luck = 0
                    for (let i = 0; i < 4; i++) {
                        let noArr = this.draw1ByDiamond();
                        if (noArr[0] > 70) {
                            luck ++
                        }
                        if (noArr[1] > 90) {
                            this.luckGold ++
                        }
                    }
                    if (luck && this.luckGold) {
                        this.draw1ByDiamond()
                    } else if (luck && !this.luckGold) {
                        let roll_no = this.rollN(100, this.min)
                        let amount = this.european.length
                        this.european.forEach(item => {
                            item.prob = 1 / amount
                        })

                        this.rareAllocate(this.european)
                        this.luckGold ++
                        card = this.probAllocate(this.gold)
                        console.log(card);


                        if (roll_no <= 70) {
                            this.summon(card, 2, 1, 1, 1)
                        } else if (roll_no > 70 && roll_no <= 95) {
                            this.summon(card, 3, 3, 3, 3)
                        } else {
                            this.summon(card, 4, 10, 10, 10)
                        }
                    } else if (!luck && this.luckGold){
                        let roll_no = this.rollN(100, 70)
                        luck ++
                        let rare_no = this.rollN(100, this.min)
                        this.european.forEach(cardR => {
                            cardR.prob = 1
                        })
                        if (rare_no <= 60) {
                            card = this.probAllocate(this.copper)
                        } else if (rare_no > 60 && rare_no <= 90) {
                            card = this.probAllocate(this.silver)
                        } else {
                            this.luckGold ++
                            card = this.probAllocate(this.gold)
                        }
                        if (roll_no > 70 && roll_no <= 95) {
                            this.summon(card, 3, 3, 3, 3)
                        } else {
                            this.summon(card, 4, 10, 10, 10)
                        }
                    } else {
                        let roll_no = this.rollN(100, 70)
                        let amount = this.european.length
                        this.european.forEach(item => {
                            item.prob = 1 / amount
                        })

                        this.rareAllocate(this.european)
                        this.luckGold ++
                        card = this.probAllocate(this.gold)
                        console.log(card);


                        if (roll_no > 70 && roll_no <= 95) {
                            this.summon(card, 3, 3, 3, 3)
                        } else {
                            this.summon(card, 4, 10, 10, 10)
                        }
                    }
                }
            } else {
                if ((this.currentNum == 5 && this.luckGold) || this.currentNum != 5){
                    this.luckGold += this.draw5ByUp(this.poolId)
                } else {
                    let card = undefined
                    let luck = 0
                    for (let i = 0; i < 4; i++) {
                        let noArr = this.draw1ByUp(this.poolId);
                        if (noArr[0] > 70) {
                            luck ++
                        }
                        if (noArr[1] > 90) {
                            this.luckGold ++
                        }
                    }
                    if (luck && this.luckGold) {
                        this.draw1ByUp(this.poolId)
                    } else if (luck && !this.luckGold) {
                        let roll_no = this.rollN(100, this.min)
                        luck ++
                        this.european.forEach(cardR => {
                            cardR.prob = 1
                        })
                        this.luckGold ++
                        card = this.probAllocate(this.gold)
                        if (roll_no <= 70) {
                            this.summon(card, 2, 1, 1, 1)
                        } else if (roll_no > 70 && roll_no <= 95) {
                            this.summon(card, 3, 3, 3, 3)
                        } else {
                            this.summon(card, 4, 10, 10, 10)
                        }
                    } else if (!luck && this.luckGold){
                        let roll_no = this.rollN(100, 70)
                        let rare_no = this.rollN(100, this.min)
                        this.cardPoolList.forEach(item => {
                            if (item.id == this.poolId){
                                this.cardPool = item

                            }
                        })
                        // 概率分配
                        let cardRProb = (100 - this.cardPool.cards.length * this.cardPool.prob) / (this.european.length - this.cardPool.cards.length)
                        console.log('cardRProb---',cardRProb);
                        this.cardPool.cards.forEach(cardP => {
                            this.european.forEach(cardR => {
                                if (cardP == cardR.name){
                                    cardR.prob = this.cardPool.prob
                                }
                            })
                        })
                        if (rare_no <= 60) {
                            card = this.probAllocate(this.copper)
                        } else if (rare_no > 60 && rare_no <= 90) {
                            card = this.probAllocate(this.silver)
                        } else {
                            this.luckGold ++
                            card = this.probAllocate(this.gold)
                        }
                        if (roll_no > 70 && roll_no <= 95) {
                            this.summon(card, 3, 3, 3, 3)
                        } else {
                            this.summon(card, 4, 10, 10, 10)
                        }
                    } else {
                        let roll_no = this.rollN(100, 70)
                        this.cardPoolList.forEach(item => {
                            if (item.id == this.poolId){
                                this.cardPool = item

                            }
                        })
                        // 概率分配
                        let cardRProb = (100 - this.cardPool.cards.length * this.cardPool.prob) / (this.european.length - this.cardPool.cards.length)
                        console.log('cardRProb---',cardRProb);
                        this.cardPool.cards.forEach(cardP => {
                            this.european.forEach(cardR => {
                                if (cardP == cardR.name){
                                    cardR.prob = this.cardPool.prob
                                }
                            })
                        })
                        this.luckGold ++
                        card = this.probAllocate(this.gold)
                        if (roll_no > 70 && roll_no <= 95) {
                            this.summon(card, 3, 3, 3, 3)
                        } else {
                            this.summon(card, 4, 10, 10, 10)
                        }
                    }
                }
            }
            console.log('luckGold----',this.luckGold);
        },
        inin(card, type, txt) {
            $('.card .txt').css("opacity", "0")
            card.amountTxt = txt
            card.class = ''
            card.summonType = type
            this.cards.push(card)
            this.$nextTick(() => {
                $('.card').height($('.card').width() * 1.5)
                $('.card .txt').css("margin-top", ($('.card').width() * 1.5 + 10) + 'px')
            })
        },
        btnCamp1() {
            this.cards = []
            this.currentNum = 0
            this.showNext = false
            let that = this
            setTimeout(function () {
                that.draw1ByUp(that.poolId)
                that.diamonds += 0
            }, 100)
        },
        btnCamp5() {
            this.cards = []
            this.currentNum = 0
            this.showNext = false
            let that = this
            setTimeout(function () {
                that.draw5ByUp(that.poolId)
                that.diamonds += 50
            }, 100)
        },
        btnCamp25() {
            this.currentMode = 'Camp'
            this.cards = []
            this.currentNum = 0
            this.currentNum ++
            this.showNext = true
            this.luckGold = 0
            let that = this
            setTimeout(function () {
                that.luckGold += that.draw5ByUp(that.poolId)
                that.diamonds += 50
                console.log('luckGold----',that.luckGold);
            }, 100)
        },
        btnDiamond1() {
            this.cards = []
            this.currentNum = 0
            this.showNext = false
            let that = this
            setTimeout(function () {
                that.draw1ByDiamond()
                that.diamonds += 0
            }, 100)
        },
        btnDiamond5() {
            this.cards = []
            this.currentNum = 0
            this.showNext = false
            let that = this
            setTimeout(function () {
                that.luckGold = that.draw5ByDiamond()
                that.diamonds += 50

                /*that.european.forEach(item => {
                    if (item.amount != 0) {
                        console.log(item.name + '---' + item.amount)
                    }
                })
                let finish = 0
                while(finish < that.european.length){
                    finish = 0
                    that.cards = []
                    that.draw5ByDiamond()
                    that.times += 1
                    that.european.forEach(item => {
                        if (item.rare == 'copper' && item.amount > 150) {
                            // console.log('finishedItem----',item);
                            finish += 1
                        } else if (item.rare == 'silver' && item.amount > 75){
                            // console.log('finishedItem----',item);
                            finish += 1
                        } else if (item.rare == 'gold' && item.amount > 25){
                            // console.log('finishedItem----',item);
                            finish += 1
                        }
                    })
                    console.log('finish---',finish)
                }
                console.log('5连次数---',that.times,'满级个数---',finish);*/
            }, 100)
        },
        btnDiamond25() {
            this.currentMode = 'Diamond'
            this.cards = []
            this.currentNum = 0
            this.currentNum ++
            this.showNext = true
            this.luckGold = 0
            let that = this
            setTimeout(function () {
                that.luckGold += that.draw5ByDiamond()
                that.diamonds += 50
                console.log('luckGold----',that.luckGold);

                /*that.european.forEach(item => {
                    if (item.amount != 0) {
                        console.log(item.name + '---' + item.amount)
                    }
                })
                let finish = 0
                while(finish < that.european.length){
                    finish = 0
                    that.cards = []
                    that.currentNum ++
                    that.showNext = true
                    that.luckGold = 0
                    that.draw5ByDiamond()
                    that.nextBox()
                    that.nextBox()
                    that.nextBox()
                    that.nextBox()
                    that.times += 1
                    that.european.forEach(item => {
                        if (item.rare == 'copper' && item.amount > 150) {
                            finish += 1
                        } else if (item.rare == 'silver' && item.amount > 75){
                            finish += 1
                        } else if (item.rare == 'gold' && item.amount > 25){
                            finish += 1
                        }
                    })
                }
                console.log('25连次数---',that.times,'满级个数---',finish)*/
            }, 100)
        },
        open(i) {
            this.cards[i].class = 'open'
            console.log(this.cards)
            let c = this.cards
            this.cards = []
            this.cards = c
            let that = this
            setTimeout(function () {
                $('.card .txt').eq(i).css("opacity", "1")
                switch (that.cards[i].summonType) {
                    case 1:
                        $('.card').eq(i).addClass('l1')
                        break
                    case 2:
                        $('.card').eq(i).addClass('l2')
                        break
                    case 3:
                        $('.card').eq(i).addClass('l3')
                        break
                    case 4:
                        $('.card').eq(i).addClass('l4')
                        break
                }
            }, 500)
            console.log(this.cards[i].class)
        },
        toggleCards(num) {
            this.version = num
            this.init()
        },
        openUps() {
            this.upCards = []
            this.cardPool.cards.forEach(item => {
                this.upCards.push(this.european.find(card => {
                    return card.name == item
                }))
            })
            console.log('up卡-----', this.upCards)
            this.$nextTick(() => {
                $('.up').height($('.up').width())
            })
            this.upsVisible = true
        }
    }
}
</script>

<style scoped lang="less">
    @import "../assets/less/base";
    button {
        margin: 10rem/@fontSize !important;
    }

    .cards {
        .card {
            position: relative;
            transform-style: preserve-3d;
            perspective: 0px;
            padding: 0;
            margin: 35rem/@fontSize 10rem/@fontSize;

            &.l1{
                box-shadow: 0 0 5rem/@fontSize 5rem/@fontSize white;
            }
            &.l2{
                box-shadow: 0 0 5rem/@fontSize 5rem/@fontSize deepskyblue;
            }
            &.l3{
                box-shadow: 0 0 5rem/@fontSize 5rem/@fontSize rgb(166,45,200);
            }
            &.l4{
                box-shadow: 0 0 5rem/@fontSize 5rem/@fontSize gold;
            }
            &.open {
                img {
                    transform: rotateY(180deg)
                }

                .cardfront {
                    transform: rotateY(360deg)
                }
            }

            img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 1s;
                z-index: 1;
                backface-visibility: hidden;
                border: 1rem/@fontSize solid #333;
                transform: translateZ(1rem/@fontSize);
            }

            .cardfront {
                border: 3rem/@fontSize solid #333;
                position: absolute;
                top: 0;
                left: 0;
                transition: all 1s;
                width: 100%;
                height: 100%;
                background-image: url("../assets/image/书龙-01.png");
                background-size: auto 100%;
                background-color: #333;
                background-position: center;
                background-repeat: no-repeat;
                transform: rotateY(180deg);

                .title {
                    height: 33rem/@fontSize;
                    line-height: 30rem/@fontSize;
                    font-size: 20rem/@fontSize;
                    border-bottom: 3rem/@fontSize solid #333;
                    padding-left: 15rem/@fontSize;
                    span {
                        padding-right: 15rem/@fontSize;
                    }

                    color: white;

                }

                .title.yellow {
                    background-color: rgb(189, 161, 0);
                }

                .title.red {
                    background-color: rgb(175, 66, 50);
                }

                .title.blue {
                    background-color: rgb(53, 94, 170);
                }

                .title.purple {
                    background-color: rgb(118, 84, 145);
                }

                .title.green {
                    background-color: rgb(12, 114, 77);
                }

                .title.equipment {
                    background-color: rgb(128, 128, 128);
                }

                .equipmentTxt {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 44%;
                    background-color: #333;
                    .txtBox {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 80%;
                        font-size: 14rem/@fontSize;
                        text-align: center;
                        color: white;
                    }
                }
            }

            .txt {
                height: 33rem/@fontSize;
                line-height: 30rem/@fontSize;
                font-size: 20rem/@fontSize;
                position: relative;
                text-align: center;
                vertical-align: middle;
                opacity: 0;

                .rare {
                    display: inline-block;
                    width: 33rem/@fontSize;
                    height: 33rem/@fontSize;
                    background-size: 33rem/@fontSize;
                    background-repeat: no-repeat;
                    background-position: center center;
                    position: relative;
                    vertical-align: middle;
                }

                .rare.gold {
                    background-image: url("../assets/image/金卡.png");
                }

                .rare.silver {
                    background-image: url("../assets/image/银卡.png");
                }

                .rare.copper {
                    background-image: url("../assets/image/铜卡.png");
                }
            }
        }
    }
    /deep/ .el-dialog__headerbtn{
        margin: 0 !important;
        line-height: 24rem/@fontSize;
    }
    /deep/ .el-dialog__body{
        overflow: hidden;
        padding: 10px 20px !important;
        .pay{
            margin-bottom: 10px;
        }
        .cardAmount{
            display: flex;
            font-size: 14px;
            line-height: 28px;
            >div{
                flex: auto;
                color: black;
                &:last-child{
                    text-align: right;
                }
            }
            &.gold{
                background-color: #ffd95c;
            }
            &.silver{
                background-color: #cccccc;
            }
            &.copper{
                background-color: #cc9b77;
            }
        }
    }
    .up{
        padding: 15rem/@fontSize;
        position: relative;
        .border{
            display: inline-block;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            border: 2rem/@fontSize solid black;
            box-shadow: 0 0 20rem/@fontSize 5rem/@fontSize;
            &.gold{
                background-image: linear-gradient(rgb(255, 255, 120), rgb(246, 183, 70), rgb(255, 255, 120));
            }
            &.silver{
                background-image: linear-gradient(rgb(205, 209, 211), rgb(177, 181, 184), rgb(205, 209, 211));
            }
            &.copper{
                background-image: linear-gradient(rgb(255, 195, 147), rgb(185, 120, 88), rgb(255, 195, 147));
            }
            .pic{
                border: 2rem/@fontSize solid black;
                width: 90%;
                height: 90%;
                margin: 5%;
                border-radius: 50%;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: auto 100%;
            }
        }
    }
</style>
