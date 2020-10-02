<template>
    <div>
        <div class="container">
            卡组：
            <span v-for="(item,index) in build1.heros" :key="'heros1' + index">{{ item }}、</span>
            <span v-for="(item,index) in build1.equipments" :key="'equipments1' + index">{{ item }}、</span>
            <span v-for="(item,index) in build1.props" :key="'props1' + index">{{ item }}、</span>
            <br>
            <span v-for="(item,index) in build2.heros" :key="'heros2' + index">{{ item }}、</span>
            <span v-for="(item,index) in build2.equipments" :key="'equipments2' + index">{{ item }}、</span>
            <span v-for="(item,index) in build2.props" :key="'props2' + index">{{ item }}、</span>
            <div class="buttons">
                <el-button @click="rua">生成</el-button>
                <el-button @click="reHand">换起手</el-button>
                <el-button @click="useCard">使用卡牌</el-button>
            </div>

            <div v-if="isStart" class="teams">
                <div class="team team1">
                    <div class="teamName">
                        <span style="margin-right: 32px">玩家 1</span>
                        <span>{{ player1.isFirst ? '先手' : '后手' }}</span>
                    </div>
                    <div v-for="(item, index) in team1" :key="index" class="hero">
                        <div class="name">{{ item.name }}</div>
                        <div class="health">{{ item.health }}/{{ item.maxHealth }}</div>
                        <div class="energy">{{ item.energy }}/{{ item.maxEnergy }}</div>
                    </div>
                    <div class="hand">
                        手牌：<br>
                        <el-tooltip
                            v-for="(item,index) in hand1"
                            :key="'hand1' + index"
                            effect="light"
                            placement="top"
                            :content="item.txt"
                        >
                            <span :class="item.selected ? 'selected' : ''" @click="selectCard(item)">{{ item.name }}</span>
                        </el-tooltip>
                    </div>
                    <div class="deck">
                        牌库：<br>
                        <span v-for="(item,index) in deck1" :key="'deck1' + index">{{ item.name }}、</span>
                    </div>
                </div>
                <div class="team team2">
                    <div class="teamName">
                        <span style="margin-right: 32px">玩家 2</span>
                        <span>{{ player2.isFirst ? '先手' : '后手' }}</span>
                    </div>
                    <div v-for="(item, index) in team2" :key="index" class="hero">
                        <div class="name">{{ item.name }}</div>
                        <div class="health">{{ item.health }}/{{ item.maxHealth }}</div>
                        <div class="energy">{{ item.energy }}/{{ item.maxEnergy }}</div>
                    </div>
                    <div class="hand">
                        手牌：<br>
                        <el-tooltip
                            v-for="(item,index) in hand2"
                            :key="'hand2' + index"
                            effect="light"
                            placement="top"
                            :content="item.txt"
                        >
                            <span :class="item.selected ? 'selected' : ''" @click="selectCard(item)">{{ item.name }}</span>
                        </el-tooltip>
                    </div>
                    <div class="deck">
                        牌库：<br>
                        <span v-for="(item,index) in deck2" :key="'deck1' + index">{{ item.name }}、</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tttt from '@/api/common.js'
export default {
    name: "test",
    data() {
        return {
            herosList: [],
            equipmentList: [],
            propList: [],
            // 构筑
            build1: {
                heros: [
                    '剑舞者',
                    '大主教',
                    '冒险家',
                    '老板娘',
                ],
                equipments: [
                    '神秘怪盗提箱',
                    '巫毒人偶',
                    '天使命运竖琴',
                    '黑曜石铠甲',
                ],
                props: [
                    '愤怒烈酒',
                    '凤凰羽毛',
                ],
            },
            build2: {
                heros: [
                    '侍从',
                    '弩手',
                    '学徒',
                    '牧师',
                ],
                equipments: [
                    '屏障宝珠',
                    '逆流手套',
                    '聚雷线圈',
                    '生命果实',
                ],
                props: [
                    '愤怒烈酒',
                    '霜火魔瓶',
                ],
            },
            // 牌库
            deck1: [],
            deck2: [],
            // 队伍
            team1: [],
            team2: [],
            // 玩家
            player1: {//玩家属性
                isFirst: false,// 是否先手
                mana: 3,// 当前法力，初始为3
                maxMana: 3,//最大法力，初始为3
                round: 1,//第几回合
            },
            player2: {
                isFirst: false,// 是否先手
                mana: 3,// 当前法力，初始为3
                maxMana: 3,//最大法力，初始为3
                round: 1,//第几回合
            },
            //手牌
            hand1: [],
            hand2: [],
            isStart: false,
            selectedCard: [],
        }
    },
    created() {
        tttt
        this.init()
    },
    methods: {
        init() {
            this.$http.get('heros.json').then((res) => {
                this.herosList = res.data
                console.log('herosList------',this.herosList);
            })
            this.$http.get('equipment.json').then((res) => {
                this.equipmentList = res.data
                console.log('equipmentList------',this.equipmentList);
            })
            this.$http.get('props.json').then((res) => {
                this.propList = res.data
                console.log('propList------',this.propList);
            })
        },
        deckInit(build, deck, team, order) {
            build.heros.forEach(item => {
                this.herosList.forEach(hero => {
                    if (item == hero.name){
                        let skill1 = hero.skill1[0]
                        let skill2 = hero.skill2[0]
                        let skill3 = hero.skill3[0]
                        let attack1 = {
                            name: '攻击-' + hero.name,
                            shit: 1,
                            txt: '对前排敌方造成/100%/攻击力伤害',
                        }
                        let attack2 = {
                            name: '攻击-' + hero.name,
                            shit: 2,
                            txt: '对前排敌方造成/100%/攻击力伤害',
                        }
                        deck.push(skill1, skill2, skill3, attack1, attack2)
                        team.push(hero)
                    }
                })
            })
            build.equipments.forEach(item => {
                this.equipmentList.forEach(equipment => {
                    if (item == equipment.name){
                        deck.push(equipment)
                    }
                })
            })
            build.props.forEach(item => {
                this.propList.forEach(prop => {
                    if (item == prop.name){
                        deck.push(prop)
                    }
                })
            })
            deck.forEach(card => {
                this.$set(card, 'selected', false)
            })
            // console.log(order + '打乱前---',deck);
            deck.sort(() => {
                return 0.5 - Math.random()
            })
            console.log(order + '打乱后---',deck,team);
        },
        drawCard(hand, deck, num) {
            for (let i = 0;i < num;i ++){
                hand.push(deck.shift())
            }
        },
        selectCard(card) {
            card.selected = true
            this.selectedCard = card
        },
        reHand(){
            let reNum1 = 0
            let reNum2 = 0
            for (let i = 0;i < 5;i ++){
                if (i < this.hand1.length){
                    if (this.hand1[i].selected){
                        this.deck1.push(this.hand1.splice(i, 1)[0])
                        reNum1 ++
                        i --
                    }
                }
            }
            for (let i = 0;i < 5;i ++){
                if (i < this.hand2.length){
                    if (this.hand2[i].selected){
                        this.deck2.push(this.hand2.splice(i, 1)[0])
                        reNum2 ++
                        i --
                    }
                }
            }
            this.drawCard(this.hand1, this.deck1, reNum1)
            this.drawCard(this.hand2, this.deck2, reNum2)
            this.deck1.sort(() => {
                return 0.5 - Math.random()
            })
            this.deck2.sort(() => {
                return 0.5 - Math.random()
            })
            console.log('重抽后---',this.deck1,this.deck2);
            if (this.player1.isFirst){
                this.hand2.push({
                    name: '硬币',
                    selected: false,
                })
            } else {
                this.hand1.push({
                    name: '硬币',
                    selected: false,
                })
            }
        },
        rua() {
            // 初始化
            this.deck1 = []
            this.deck2 = []
            this.team1 = []
            this.team2 = []
            this.hand1 = []
            this.hand2 = []
            this.deckInit(this.build1, this.deck1, this.team1, 1)
            this.deckInit(this.build2, this.deck2, this.team2, 2)
            this.isStart = true
            // 手牌
            this.drawCard(this.hand1, this.deck1, 5)
            this.drawCard(this.hand2, this.deck2, 5)
            // 决定先后手
            if (Math.random() < 0.5) {
                this.player1.isFirst = true
            } else {
                this.player2.isFirst = true
            }
        },
        useCard(){
            console.log('选择的卡----',this.selectedCard);

        },
    }
}
</script>

<style scoped lang="less">
    .team{
        display: inline-block;
        width: 40%;
        overflow: hidden;
        position: relative;
        float: left;
        &.team1{
            margin-right: 20%;
            .hero{
                float: right;
            }
        }
        &.team2{
            .hero{
                float: left;
            }
        }
        .teamName{

        }
        .hero{
            width: 25%;
            font-size: 28px;
            text-align: center;
            .name{
                height: 40px;
                line-height: 40px;
                border: 1px dashed black;
            }
            .health,.energy{
                height: 24px;
                line-height: 24px;
                font-size: 16px;
                border: 1px dashed black;
            }
        }
        .hand{
            >span{
                display: inline-block;
                width: 20%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                font-size: 2px;
                border: 1px solid black;
                &.selected{
                    background-color: yellow;
                }
            }
        }
    }
</style>
