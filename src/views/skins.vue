<template>
    <div class="back">
        <div class="container">
            <swiper ref="swiperTop" class="bannerSwiper" :options="swiperOptions">
                <swiper-slide :class="current.type" :style="'background-image: url('+skin.ikon+')'">
                    <div class="lname">{{ `${current.name} — ${skin.name}` }}</div>
                </swiper-slide>
                <swiper-slide
                    v-for="(item, i) in skin.pics"
                    :key="'skin' + i"
                    :class="current.type"
                    :style="'background-image: url('+item.pic+')'"
                >
                    <div class="lname">{{ `${current.name} — ${skin.name}` }}</div>
                    <div class="rname">{{ item.name }}</div>
                </swiper-slide>
            </swiper>
            <div ref="thumbs" id="thumbs" class="thumbs">
                <div
                    class="thumb "
                    :class="{ active: activeThumb === 0 }"
                    :style="'background-image: url('+skin.ikon+')'"
                    @click="slide(0)"
                >
                    <div class="name">{{ skin.name }}</div>
                </div>
                <div
                    v-for="(item, i) in skin.pics"
                    :key="'thumb' + i"
                    class="thumb"
                    :class="{ active: activeThumb === (i + 1) }"
                    :style="'background-image: url('+item.pic+')'"
                    @click="slide(i + 1)"
                >
                    <div class="name">{{ item.name }}</div>
                </div>
            </div>
            <div class="datas">
                <div class="data left col-sm-4 col-xs-6">
                    <div class="title">皮肤名称</div>
                    <div class="content">{{ skin.name }}</div>
                </div>
                <div class="data left col-sm-4 col-xs-6">
                    <div class="title">获取方式</div>
                    <div class="content">{{ skin.get }}</div>
                </div>
                <div class="data left col-sm-4 col-xs-6">
                    <div class="title">皮肤价格</div>
                    <div class="content">{{ skin.price }}</div>
                </div>
                <div class="data left col-sm-12 col-xs-12">
                    <div class="title">皮肤描述</div>
                    <div class="content">{{ skin.description }}</div>
                </div>
            </div>
        </div>
        <el-button class="openBtn" type="warning" icon="el-icon-notebook-2" circle @click="showList = true" />
        <el-button class="openBtn skin" type="warning" icon="el-icon-s-custom" circle @click="showSkinList = true" />
        <card-list
            :showList="showList"
            :heroList="heroList"
            @select="choose"
            @close="showList = false"
        />
        <el-drawer
            class="skinsDrawer"
            :visible.sync="showSkinList"
            direction="rtl"
            :show-close="false"
            :with-header="false"
            size="50%"
        >
            <div
                class="col-md-6 col-sm-12 card"
                v-for="(skin, index) in current.skins"
                :key="'s' + index"
            >
                <div class="content" :class="skin.type" @click="chooseSkin(skin)">
                    <div class="pic" :style="'background-image: url('+skin.ikon+')'" />
                    <div class="name">{{ skin.name }}</div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
import cardList from '@/components/cardList'
export default {
    name: "skins",
    components: {
        cardList
    },
    data() {
        return {
            showList: false,
            heroList: [],
            skinList: [],
            current: {},
            skin: {},
            showSkinList: false,
            swiperOptions: {
                spaceBetween: 10
            },
            activeThumb: 0,
            domObj: null
        }
    },
    created() {
        this.init()
    },
    mounted() {
        this.scrollFunction()
    },
    methods: {
        init() {
            this.$http.get('skins.json').then((resp) => {
                this.skinList = resp.data
                this.$http.get('heros.json').then((res) => {
                    this.heroList = res.data
                    const hero = this.heroList.find(item => {
                        return item.name === '白魔导士'
                    })
                    this.current = hero
                    for (let i = 0; i < this.skinList.length; i++) {
                        if (this.skinList[i].heroId === this.current.id) {
                            this.current = { ...this.current, ...this.skinList[i] }
                        }
                    }
                    this.skin = this.current.skins[0]
                    console.log(this.current)
                })
            })
        },
        initSwiper() {
            this.activeThumb = 0
            this.$refs.thumbs.scrollLeft = 0
            this.$refs.swiperTop.$swiper.slideTo(0, 400, false)
        },
        choose(card) {
            console.log('点选------', card)
            document.documentElement.scrollTop = document.body.scrollTop = 0
            this.current = card
            this.initSwiper()
            for (let i = 0; i < this.skinList.length; i++) {
                if (this.skinList[i].id === this.current.id) {
                    this.current = { ...this.current, ...this.skinList[i] }
                }
            }
            this.skin = this.current.skins[0]
        },
        chooseSkin(skin) {
            this.skin = skin
            this.initSwiper()
        },
        slide(i) {
            this.activeThumb = i
            this.$refs.swiperTop.$swiper.slideTo(i, 400, false)
        },
        /* 横向滑动 */
        scrollFunction () {
            this.domObj = document.getElementById('thumbs') // 通过id获取要设置的div
            if (this.domObj.attachEvent) { // IE
                this.domObj.attachEvent('onmousewheel', this.mouseScroll)
            } else if (this.domObj.addEventListener) {
                this.domObj.addEventListener('DOMMouseScroll', this.mouseScroll, false)
            }
            this.domObj.onmousewheel = this.domObj.onmousewheel = this.mouseScroll
        },
        mouseScroll(event) { // google 浏览器下
            let detail = event.wheelDelta || event.detail
            let moveForwardStep = -1
            let moveBackStep = 1
            let step = 0
            step = detail > 0 ? moveForwardStep * 100 : moveBackStep * 100
            event.preventDefault() // 阻止浏览器默认事件
            this.domObj.scrollLeft = this.domObj.scrollLeft + step
        }
    }
}
</script>

<style scoped lang="less">
    @import "../assets/less/base";
    .back {
        min-height: calc(100vh - 51px);
        background-color: #f0dfaa;
    }
    .container {
        padding: 0;
        .swiper-container {
            background-color: #333;
            &.bannerSwiper {
                .swiper-wrapper {
                    .swiper-slide {
                        width: 100%;
                        height: 400rem/@fontSize;
                        background-size: cover;
                        background-position: center;
                        font-size: 30rem/@fontSize;
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
                        .lname {
                            float: left;
                        }
                        .rname {
                            float: right;
                        }
                    }
                }
            }
        }
        .thumbs {
            padding: 10rem/@fontSize;
            background-color: #444;
            overflow-x: auto;
            white-space: nowrap;
            .thumb {
                display: inline-block;
                position: relative;
                margin-right: 10rem/@fontSize;
                background-size: cover;
                background-position: center;
                width: 256rem/@fontSize;
                height: 150rem/@fontSize;
                opacity: 0.5;
                &:last-child {
                    margin-right: 0;
                }
                &.active {
                    opacity: 1;
                }
                .name {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 50rem/@fontSize;
                    line-height: 50rem/@fontSize;
                    background-color: rgba(0, 0, 0, 0.5);
                    font-size: 25rem/@fontSize;
                    color: white;
                    text-align: center;
                }
            }
        }
        .datas {
            min-height: 360rem/@fontSize;
            padding: 0 20rem/@fontSize;
            .data {
                text-align: center;
                min-height: 180rem/@fontSize;
                padding: 40rem/@fontSize 0;
                letter-spacing: 5rem/@fontSize;
                color: #333;
                &.left {
                    text-align: left;
                }
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
        bottom: 360rem/@fontSize;
        width: 80rem/@fontSize;
        height: 80rem/@fontSize;
        padding: 0;
        line-height: 80rem/@fontSize;
        font-size: 40rem/@fontSize;
        box-shadow: 0 0 10px -5px rgba(230, 162, 60, .2), 0 0 24px 2px rgba(230, 162, 60, .14), 0 0 30px 5px rgba(230, 162, 60, .12);
        &.skin {
            bottom: 180rem/@fontSize;
        }
    }
    /deep/ .skinsDrawer {
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
                    position: relative;
                    margin: 5px;
                    border: 2px solid #be814b;
                    overflow: hidden;
                    cursor: pointer;
                    height: 200rem/@fontSize;
                    line-height: 200rem/@fontSize;
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
                        width: 100%;
                        height: 100%;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center center;
                    }
                    .name {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 50rem/@fontSize;
                        background-color: rgba(0, 0, 0, .5);
                        color: white;
                        line-height: 50rem/@fontSize;
                        font-size: 30rem/@fontSize;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
