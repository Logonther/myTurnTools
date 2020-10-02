<template>
    <div>
        <div class="container orderBy underline">
            <el-button @click="byWhat('cost')">{{ this.$t("heros.sortBy")[0] }}</el-button>
            <el-button @click="byWhat('type')">{{ this.$t("heros.sortBy")[1] }}</el-button>
            <el-button @click="byWhat('rare')">{{ this.$t("heros.sortBy")[2] }}</el-button>
            <el-button @click="byWhat('maxHealth')">{{ this.$t("heros.sortBy")[3] }}</el-button>
        </div>
        <div class="container heros">
            <div class="hero col-sm-3 col-xs-6" v-for="(item,index) in herosList" :key="index">
                <div :class="'content '+item.type">
                    <div class="title">
                        <!--<span>{{ item.cost }}</span>-->{{ item.name }}
                    </div>
                    <div
                        class="pic"
                        :style="'background-image: url('+item.pic+')'"
                        @click="showChart(item)"
                    />
                    <div class="skills">
                        <div class="skill">Ex {{ item.ex[0].name }}：<br>{{ item.ex[0].txt.replace(/(\/)/g,'') }}</div>
                        <div class="skill">
                            {{ $t("heros.skill") }} {{ item.skill1[0].cost }}{{ $t("heros.cost") }} {{ item.skill1[0].name }}：
                            <br>{{ item.skill1[0].txt.replace(/(\/)/g,'') }}
                        </div>
                        <div class="skill">
                            {{ $t("heros.skill") }} {{ item.skill2[0].cost }}{{ $t("heros.cost") }} {{ item.skill2[0].name }}：
                            <br>{{ item.skill2[0].txt.replace(/(\/)/g,'') }}
                        </div>
                        <div class="skill">
                            {{ $t("heros.skill") }} {{ item.skill3[0].cost }}{{ $t("heros.cost") }} {{ item.skill3[0].name }}：
                            <br>{{ item.skill3[0].txt.replace(/(\/)/g,'') }}
                        </div>
                        <div v-if="item.derivative != []">
                            <div class="skill" v-for="(item2,index2) in item.derivative" :key="index2">
                                {{ $t("heros.derivative") }} {{ item2.cost }}{{ $t("heros.cost") }} {{ item2.name }}：
                                <br>{{ item2.txt.replace(/(\/)/g,'') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :visible.sync="chartVisible"
            width="350px"
            center
        >
            <chart ref="chart" class="heroChart" :options="chartOptions" :auto-resize="true" />
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "heros",
    data() {
        return {
            herosList: [],
            $t: this.$t,
            chartOptions: {},
            chartVisible: false,
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.$http.get('heros.json').then((res) => {
                this.herosList = res.data
            })
        },
        byWhat(order) {
            const that = this
            return that.herosList.sort(function (a, b) {
                var x = a[order];
                var y = b[order];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            })
        },
        showChart(item) {
            console.log(item);
            this.chartVisible = true
            this.chartOptions = {}
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
                title: {
                    text: item.name,
                    left: 'center'
                },
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
                        radius: 100,
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
                        name: '雷达图',
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

    .heros {
        position: relative;

        .hero {
            position: relative;
            padding: 10rem/@fontSize;

            .content {
                border: 3rem/@fontSize solid #333;
                position: relative;
                color: white;
                background-repeat: no-repeat;
                background-size: 30rem/@fontSize;
                background-position: right top;

                .title {
                    height: 33rem/@fontSize;
                    line-height: 30rem/@fontSize;
                    font-size: 20rem/@fontSize;
                    border-bottom: 3rem/@fontSize solid #333;
                    padding-left: 15rem/@fontSize;

                    span {
                        padding: 0 15rem/@fontSize;
                    }
                }

                .pic {
                    height: 203rem/@fontSize;
                    background-image: url("../assets/image/书龙-01.png");
                    background-repeat: no-repeat;
                    background-size: 100%;
                    border-bottom: 3rem/@fontSize solid #333;
                }

                .skills {
                    background-color: #444;
                    font-size: 15rem/@fontSize;
                    height: 188rem/@fontSize;
                    overflow-y: scroll;

                    .skill {
                        padding: 0 15rem/@fontSize;
                        line-height: 25rem/@fontSize;
                        font-size: 16rem/@fontSize;
                        padding-bottom: 10rem/@fontSize;
                    }
                }
            }

            .content.yellow {
                background-color: rgb(189, 161, 0);
            }

            .content.red {
                background-color: rgb(175, 66, 50);
            }

            .content.blue {
                background-color: rgb(53, 94, 170);
            }

            .content.purple {
                background-color: rgb(118, 84, 145);
            }

            .content.green {
                background-color: rgb(12, 114, 77);
            }

            .content.copper {
                background-image: url("../assets/image/铜卡.png");
            }

            .content.silver {
                background-image: url("../assets/image/银卡.png");
            }

            .content.gold {
                background-image: url("../assets/image/金卡.png");
            }
        }
    }
    .heroChart{
        width: 100%;
    }
</style>
