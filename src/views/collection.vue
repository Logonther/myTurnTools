<template>
    <div id="how">
        <div ref="container" class="container">
            <div
                v-if="current"
                class="banner"
                :class="current.type"
                :style="current.type === 'prop' ? 'background-image: url(image/card/'+current.name+'.jpg)' : 'background-image: url('+current.pic+')'"
            >
                {{ current.name }}
            </div>
            <div v-if="current" class="skills">
                <div v-if="current.type !== 'equipment' && current.type !== 'prop'" class="skill">
                    <div class="title">
                        <span>Ex</span>
                        <span>{{ current.ex[0].name }}：</span>
                    </div>
                    <div class="content">{{ current.ex[0].txt.replace(/(\/)/g,' ') }}</div>
                </div>
                <div v-if="current.type !== 'equipment' && current.type !== 'prop'" class="skill">
                    <div class="title">
                        <span>{{ $t("heros.skill") }}</span>
                        <span>{{ current.skill1[0].cost }}{{ $t("heros.cost") }}</span>
                        <span>{{ current.skill1[0].name }}：</span>
                    </div>
                    <div class="content">{{ current.skill1[0].txt.replace(/(\/)/g,' ') }}</div>
                </div>
                <div v-if="current.type !== 'equipment' && current.type !== 'prop'" class="skill">
                    <div class="title">
                        <span>{{ $t("heros.skill") }}</span>
                        <span>{{ current.skill2[0].cost }}{{ $t("heros.cost") }}</span>
                        <span>{{ current.skill2[0].name }}：</span>
                    </div>
                    <div class="content">{{ current.skill2[0].txt.replace(/(\/)/g,' ') }}</div>
                </div>
                <div v-if="current.type !== 'equipment' && current.type !== 'prop'" class="skill">
                    <div class="title">
                        <span>{{ $t("heros.skill") }}</span>
                        <span>{{ current.skill3[0].cost }}{{ $t("heros.cost") }}</span>
                        <span>{{ current.skill3[0].name }}：</span>
                    </div>
                    <div class="content">{{ current.skill3[0].txt.replace(/(\/)/g,' ') }}</div>
                </div>
                <div v-if="current.type === 'equipment' || current.type === 'prop'" class="skill">
                    <div v-if="current.type === 'equipment'" class="title">
                        <span>{{ current.cost }}{{ $t("heros.cost") }}</span>
                    </div>
                    <div class="content">{{ current.txt.replace(/(\/)/g,' ') }}</div>
                </div>
                <div v-if="current.derivative != []">
                    <div class="skill" v-for="(item,index2) in current.derivative" :key="index2">
                        <div class="title">
                            {{ $t("heros.derivative") }} {{ item.cost }}{{ $t("heros.cost") }} {{ item.name }}：
                        </div>
                        <div class="content">{{ item.txt.replace(/(\/)/g,' ') }}</div>
                    </div>
                </div>
            </div>
            <div v-if="current && current.type !== 'equipment' && current.type !== 'prop'" class="datas">
                <div class="radar col-sm-4 col-xs-12">
                    <chart ref="chart" class="heroChart" :options="chartOptions" :auto-resize="true" />
                </div>
                <div class="data col-sm-4 col-xs-6">
                    <div class="title">满级血量</div>
                    <div class="content">{{ current.maxHealth }}</div>
                </div>
                <div class="data col-sm-4 col-xs-6">
                    <div class="title">阵营</div>
                    <div class="content">{{ current.faction }}</div>
                </div>
                <div class="data col-sm-4 col-xs-6">
                    <div class="title">生日</div>
                    <div class="content">{{ current.birthday }}</div>
                </div>
                <div class="data col-sm-4 col-xs-6">
                    <div class="title">属性</div>
                    <div class="content">{{ current.stats }}</div>
                </div>
            </div>
        </div>
        <el-button class="openBtn" type="warning" icon="el-icon-notebook-2" circle @click="showList = true" />
        <!--<el-drawer class="cards" :visible.sync="showList" direction="rtl" :show-close="false" :with-header="false" size="50%">
            <div
                class="col-md-6 col-sm-12 card"
                v-for="(hero, index) in heroList"
                :key="'h' + index"
            >
                <div class="content" :class="hero.type" @click="choose(hero)">
                    <div class="pic" :style="'background-image: url('+hero.pic+')'" />
                    <div class="name">{{ hero.name }}</div>
                </div>
            </div>
            <div
                class="col-md-6 col-sm-12 card"
                v-for="(equipment, index) in equipmentList"
                :key="'e' + index"
            >
                <div class="content" :class="equipment.type" @click="choose(equipment)">
                    <div class="pic" :style="'background-image: url(image/card/'+equipment.name+'.jpg)'" />
                    <div class="name">{{ equipment.name }}</div>
                </div>
            </div>
            <div
                class="col-md-6 col-sm-12 card"
                v-for="(prop, index) in propList"
                :key="'e' + index"
            >
                <div class="content" :class="prop.type" @click="choose(prop)">
                    <div class="pic" :style="'background-image: url(image/card/'+prop.name+'.jpg)'" />
                    <div class="name">{{ prop.name }}</div>
                </div>
            </div>
        </el-drawer>-->
        <card-list
            :showList="showList"
            :heroList="heroList"
            :equipmentList="equipmentList"
            :propList="propList"
            @select="choose"
            @close="showList = false"
        />
    </div>
</template>

<script>
import cardList from '@/components/cardList'
export default {
    name: "collection",
    components: {
        cardList
    },
    data() {
        return {
            showList: false,
            heroList: [],
            equipmentList: [],
            propList: [],
            current: undefined,
            chartOptions: {},
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            let serverFlag = this.$route.fullPath.indexOf('CN') ? true : false
            this.$http.get('heros.json').then((res) => {
                res.data.forEach(item => {
                    if (item.if) {
                        this.heroList.push(item)
                    } else if (!serverFlag) {
                        this.heroList.push(item)
                    }
                })
                const hero = this.heroList.find(item => {
                    return item.name === '白魔导士'
                })
                this.current = hero
                this.showChart(hero)
            })
            this.$http.get('equipment.json').then((res) => {
                res.data.forEach(item => {
                    if (item.if) {
                        this.equipmentList.push(item)
                    } else if (!serverFlag) {
                        this.equipmentList.push(item)
                    }
                })
            })
            this.$http.get('props.json').then((res) => {
                res.data.forEach(item => {
                    if (item.if) {
                        this.propList.push(item)
                    } else if (!serverFlag) {
                        this.propList.push(item)
                    }
                })
            })
        },
        choose(card) {
            console.log('点选------', card)
            document.documentElement.scrollTop = document.body.scrollTop = 0
            this.current = card
            this.showChart(card)
        },
        showChart(item) {
            console.log(item);
            this.chartOptions = {}
            if (item.type === 'equipment' || item.type === 'prop') return
            let bgColor = ''
            switch (item.type) {
                case 'yellow':
                    bgColor = '189, 161, 0'
                    break
                case 'red':
                    bgColor = '175, 66, 50'
                    break
                case 'blue':
                    bgColor = '53, 94, 170'
                    break
                case 'green':
                    bgColor = '12, 114, 77'
                    break
                case 'purple':
                    bgColor = '118, 84, 145'
                    break
            }
            this.chartOptions = {
                radar: [
                    {
                        indicator: [
                            { text: '体质', max: 18 },
                            { text: '力量', max: 18 },
                            { text: '灵巧', max: 18 },
                            { text: '知识', max: 18 },
                            { text: '魔力', max: 18 },
                            { text: '异能', max: 18 }
                        ],
                        center: ['50%', '50%'],
                        radius: this.isMobile ? 50 : 100,
                        startAngle: 90,
                        splitNumber: 6,
                        shape: 'circle',
                        name: {
                            formatter: '【{value}】',
                            textStyle: {
                                color: 'rgb(' + bgColor + ')'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: [
                                    'rgba(' + bgColor + ', 0)',
                                    'rgba(' + bgColor + ', 0.2)',
                                    'rgba(' + bgColor + ', 0.4)',
                                    'rgba(' + bgColor + ', 0.6)',
                                    'rgba(' + bgColor + ', 0.8)',
                                    'rgba(' + bgColor + ', 1)'],
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '六维雷达图',
                        type: 'radar',
                        data: [
                            {
                                value: item.property,
                                name: 'hero',
                                symbol: 'circle',
                                symbolSize: 5,
                                areaStyle: {
                                    opacity: 0.7,
                                    color: 'pink'
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        textBorderColor: 'white',
                                        formatter:function(params) {
                                            switch (params.value) {
                                                case 1:
                                                    return 'E－'
                                                case 2:
                                                    return 'E'
                                                case 3:
                                                    return 'E＋'
                                                case 4:
                                                    return 'D－'
                                                case 5:
                                                    return 'D'
                                                case 6:
                                                    return 'D＋'
                                                case 7:
                                                    return 'C－'
                                                case 8:
                                                    return 'C'
                                                case 9:
                                                    return 'C＋'
                                                case 10:
                                                    return 'B－'
                                                case 11:
                                                    return 'B'
                                                case 12:
                                                    return 'B＋'
                                                case 13:
                                                    return 'A－'
                                                case 14:
                                                    return 'A'
                                                case 15:
                                                    return 'A＋'
                                                case 16:
                                                    return 'S－'
                                                case 17:
                                                    return 'S'
                                                case 18:
                                                    return 'S＋'
                                            }
                                        }
                                    }
                                },
                            },
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style scoped lang="less">
    @import "../assets/less/base";
    .container {
        padding: 0;
        background-color: #f0dfaa;
        .banner {
            width: 100%;
            height: 500rem/@fontSize;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center 20%;
            font-size: 50rem/@fontSize;
            font-style: italic;
            text-shadow: #000 2rem/@fontSize 0 0,#000 0 2rem/@fontSize 0,#000 2rem/@fontSize 0 0,#000 0 2rem/@fontSize 0;
            color: white;
            padding: 20rem/@fontSize;
            &.yellow {
                text-shadow:
                    rgb(189, 161, 0) 3rem/@fontSize 0 0,
                    rgb(189, 161, 0) 0 3rem/@fontSize 0;
            }
            &.red {
                text-shadow:
                    rgb(175, 66, 50) 3rem/@fontSize 0 0,
                    rgb(175, 66, 50) 0 3rem/@fontSize 0;
            }
            &.blue {
                text-shadow:
                    rgb(53, 94, 170) 3rem/@fontSize 0 0,
                    rgb(53, 94, 170) 0 3rem/@fontSize 0;
            }
            &.purple {
                text-shadow:
                    rgb(118, 84, 145) 3rem/@fontSize 0 0,
                    rgb(118, 84, 145) 0 3rem/@fontSize 0;
            }
            &.green {
                text-shadow:
                    rgb(12, 114, 77) 3rem/@fontSize 0 0,
                    rgb(12, 114, 77) 0 3rem/@fontSize 0;
            }
            &.equipment, &.prop {
                text-shadow:
                    rgb(128, 128, 128) 3rem/@fontSize 0 0,
                    rgb(128, 128, 128) 0 3rem/@fontSize 0;
            }
            &.prop {
                background-position: center center;
            }
        }
        .skills {
            .skill {
                padding: 15rem/@fontSize 30rem/@fontSize;
                font-size: 0;
                color: #333;
                border-bottom: 1px solid #be814b;
                .title {
                    font-size: 30rem/@fontSize;
                    line-height: 60rem/@fontSize;
                    span {
                        margin-right: 20rem/@fontSize;
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
                .content {
                    font-size: 30rem/@fontSize;
                    line-height: 60rem/@fontSize;
                }
            }
        }
        .datas {
            height: 360rem/@fontSize;
            .radar {
                height: 360rem/@fontSize;
                padding: 0;
                .heroChart{
                    width: 100%;
                    height: 100%;
                }
            }
            .data {
                text-align: center;
                height: 180rem/@fontSize;
                padding: 40rem/@fontSize 0;
                letter-spacing: 5rem/@fontSize;
                color: #333;
                .title {
                    font-size: 30rem/@fontSize;
                    line-height: 60rem/@fontSize;
                    font-weight: bold;
                }
                .content {
                    font-size: 30rem/@fontSize;
                    line-height: 60rem/@fontSize;
                    color: brown;
                }
            }
        }
    }
    .openBtn {
        margin: 0 !important;
        position: fixed;
        right: 40rem/@fontSize;
        bottom: 180rem/@fontSize;
        width: 80rem/@fontSize;
        height: 80rem/@fontSize;
        padding: 0;
        line-height: 80rem/@fontSize;
        font-size: 40rem/@fontSize;
        box-shadow: 0 0 10px -5px rgba(230, 162, 60, .2), 0 0 24px 2px rgba(230, 162, 60, .14), 0 0 30px 5px rgba(230, 162, 60, .12);
    }
    /deep/ .cards {
        .el-drawer__body {
            padding: 0 10rem/@fontSize;
            overflow-y: scroll;
            background-color: #f0dfaa;
            margin-left: -5rem/@fontSize;
            margin-right: -5rem/@fontSize;
            &:before{
                content: '';
                position: absolute;
                width: 10rem/@fontSize;
                height: 100%;
                left: 0;
                top: 0;
                background-image: linear-gradient(to right, #be814b, #f0dfaa);
            }
            .card{
                padding: 0;
                .content {
                    margin: 5px;
                    border: 2px solid #be814b;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: row;
                    overflow: hidden;
                    cursor: pointer;
                    height: 100rem/@fontSize;
                    line-height: 100rem/@fontSize;
                    border-radius: 10rem/@fontSize;
                    padding: 0;
                    &.yellow {
                        border-color: rgb(189, 161, 0);
                        color: rgb(189, 161, 0);
                    }

                    &.red {
                        border-color: rgb(175, 66, 50);
                        color: rgb(175, 66, 50);
                    }

                    &.blue {
                        border-color: rgb(53, 94, 170);
                        color: rgb(53, 94, 170);
                    }

                    &.purple {
                        border-color: rgb(118, 84, 145);
                        color: rgb(118, 84, 145);
                    }

                    &.green {
                        border-color: rgb(12, 114, 77);
                        color: rgb(12, 114, 77);
                    }

                    &.equipment, &.prop {
                        border-color: rgb(128, 128, 128);
                        color: rgb(128, 128, 128);
                    }
                    .pic {
                        width: 140rem/@fontSize;
                        height: 100%;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center center;
                    }
                    .name {
                        font-size: 30rem/@fontSize;
                        text-align: center;
                        flex: 1;
                        line-height: normal;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>
