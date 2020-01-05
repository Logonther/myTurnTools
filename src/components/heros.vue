<template>
    <div>
        <div class="container orderBy underline">
            <button class="btn btn-default" @click="byWhat('cost')">按费用排序</button>
            <button class="btn btn-default" @click="byWhat('type')">按类型排序</button>
            <button class="btn btn-default" @click="byWhat('rare')">按稀有度排序</button>
        </div>
        <div class="container heros">
            <div class="hero col-sm-3 col-xs-6" v-for="(item,index) in herosList" :key="index">
                <div :class="'content '+item.type">
                    <div class="title">
                        <span>{{ item.cost }}</span>{{ item.name }}
                    </div>
                    <div class="pic" :style="'background-image: url('+item.pic+')'"></div>
                    <div class="skills">
                        <div class="skill">Ex {{ item.ex[0].name }}：<br>{{ item.ex[0].txt }}</div>
                        <div class="skill">技能 {{ item.skill1[0].cost }}费 {{ item.skill1[0].name }}：<br>{{
                            item.skill1[0].txt }}
                        </div>
                        <div class="skill">技能 {{ item.skill2[0].cost }}费 {{ item.skill2[0].name }}：<br>{{
                            item.skill2[0].txt }}
                        </div>
                        <div class="skill">技能 {{ item.skill3[0].cost }}费 {{ item.skill3[0].name }}：<br>{{
                            item.skill3[0].txt }}
                        </div>
                        <div v-if="item.derivative != []">
                            <div class="skill" v-for="(item2,index2) in item.derivative" :key="index2">衍生 {{ item2.cost
                                }}费 {{ item2.name }}：<br>{{ item2.txt }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "heros",
  data() {
    return {
      herosList: []
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
</style>
