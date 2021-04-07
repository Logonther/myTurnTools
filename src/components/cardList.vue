<template>
    <div>
        <el-drawer
            class="cards"
            :visible.sync="showList"
            direction="rtl"
            :show-close="false"
            :with-header="false"
            size="50%"
            :before-close="close"
        >
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
                :key="'p' + index"
            >
                <div class="content" :class="prop.type" @click="choose(prop)">
                    <div class="pic" :style="'background-image: url(image/card/'+prop.name+'.jpg)'" />
                    <div class="name">{{ prop.name }}</div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: "cardList",
    props: {
        showList: {
            type: Boolean,
            required: true
        },
        heroList: {
            type: Array,
            required: true
        },
        equipmentList: {
            type: Array,
            required: false
        },
        propList: {
            type: Array,
            required: false
        }
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        choose(card) {
            this.$emit('select', card)
        },
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped lang="less">
    @import "../assets/less/base";
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
