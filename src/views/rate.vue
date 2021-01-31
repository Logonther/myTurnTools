<template>
    <div>
        <div class="container header">
            <div @dblclick="dev = true">{{ this.$t("rate.search") }}</div>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-date-picker
                        v-model="month"
                        type="month"
                        value-format="yyyy-MM"
                        :picker-options="pickerOptions"
                        :placeholder="this.$t('rate.chooseMonth')"
                        @change="monthChange"
                    />
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col v-show="dev" :span="6">
                    <div v-show="dev" @click="dev = false">{{ this.$t("rate.generate") }}</div>
                    <el-input type="text" v-model="monthRange" :placeholder="this.$t('rate.range')" />
                </el-col>
                <el-col :span="dev ? 12 : 24">
                    <div>{{ this.$t("rate.title") }}</div>
                    <el-button @click="language = 'cn'">繁體中文</el-button>/<el-button @click="language = 'en'">English</el-button>
                    <el-button v-show="dev" @click="toImg">{{ this.$t("rate.createPicture") }}</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col v-show="dev" :span="dev ? 12 : 24">
                    <div>{{ this.$t("rate.upload") }}</div>
                    <el-upload
                        class="upload-json"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        accept=".json"
                        :limit="1"
                        :on-success="uploadJson"
                    >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传json文件，且不超过500kb</div>
                    </el-upload>
                </el-col>
            </el-row>
        </div>
        <div v-show="showReport" class="container container-main" id="container-main">
            <img src="../assets/image/幕布.png" class="img-mubu">
            <img src="../assets/image/底板.png" class="img-diban">
            <img src="../assets/image/人物后框.png" class="img-houkuang">
            <img src="../assets/image/bg.png" class="img-boss">
            <img src="../assets/image/卡.png" class="img-ka">
            <div class="main">
                <img src="../assets/image/logoNew.png" class="logo">
                <div class="title">{{ language == 'cn' ? '數據報告' : 'META REPORT' }}</div>
                <div class="subtitle month">{{ monthRange }}</div>
                <div class="type">
                    <div class="title">{{ language == 'cn' ? '標準模式英雄榜' : 'STANDARD MODE | HERO LIST' }}</div>
                    <div class="content">
                        <div class="item" v-for="(item,index) in rateData.rateHero" :key="index">
                            <span class="index">{{ index + 1 }}</span>
                            <div class="card" :style="'background-image: url(image/card/'+item.name+'.jpg)'">
                                <div class="card-head" :class="item.color" />
                                <div class="card-footer">
                                    {{ item.rate }}
                                </div>
                                <img src="../assets/image/icon_trophy.png" class="img-trophy">
                                <img v-show="item.hot" src="../assets/image/icon_fire.png" class="img-fire">
                                <img v-show="item.lifting > 0" src="../assets/image/icon_up.png" class="img-up">
                                <img v-show="item.lifting < 0" src="../assets/image/icon_down.png" class="img-down">
                                <div v-show="item.lifting != 0" class="lifting " :class="item.lifting < 0 ? 'red' : ''">
                                    {{ Math.abs(item.lifting) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="type">
                    <div class="title">{{ language == 'cn' ? '標準模式裝備榜' : 'STANDARD MODE | GEAR LIST' }}</div>
                    <div class="content">
                        <div class="item" v-for="(item,index) in rateData.rateEquipment" :key="index">
                            <span class="index">{{ index + 1 }}</span>
                            <div class="card" :style="'background-image: url(image/card/'+item.name+'.jpg)'">
                                <div class="card-head" />
                                <div class="card-footer">
                                    {{ item.rate }}
                                </div>
                                <img src="../assets/image/icon_trophy.png" class="img-trophy">
                                <img v-show="item.hot" src="../assets/image/icon_fire.png" class="img-fire">
                                <img v-show="item.lifting > 0" src="../assets/image/icon_up.png" class="img-up">
                                <img v-show="item.lifting < 0" src="../assets/image/icon_down.png" class="img-down">
                                <div v-show="item.lifting != 0" class="lifting " :class="item.lifting < 0 ? 'red' : ''">
                                    {{ Math.abs(item.lifting) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="type">
                    <div class="title">{{ language == 'cn' ? '標準模式道具榜' : 'STANDARD MODE | ITEM LIST' }}</div>
                    <div class="content">
                        <div class="item" v-for="(item,index) in rateData.rateProps" :key="index">
                            <span class="index">{{ index + 1 }}</span>
                            <div class="card" :style="'background-image: url(image/card/'+item.name+'.jpg)'">
                                <div class="card-head" />
                                <div class="card-footer">
                                    {{ item.rate }}
                                </div>
                                <img src="../assets/image/icon_trophy.png" class="img-trophy">
                                <img v-show="item.hot" src="../assets/image/icon_fire.png" class="img-fire">
                                <img v-show="item.lifting > 0" src="../assets/image/icon_up.png" class="img-up">
                                <img v-show="item.lifting < 0" src="../assets/image/icon_down.png" class="img-down">
                                <div v-show="item.lifting != 0" class="lifting " :class="item.lifting < 0 ? 'red' : ''">
                                    {{ Math.abs(item.lifting) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog
            :title="this.$t('build.right')"
            :visible.sync="dialogVisible"
            width="90%"
        >
            <img :src="rateImg" style="width: 100%">
        </el-dialog>
    </div>
</template>

<script>
import html2canvas from 'html2canvas'
import moment from 'moment'
export default {
    name: "rate",
    data() {
        return {
            dev: false,
            month: '',
            monthRange: '',
            language: 'cn',
            showReport: false,
            rateData: {
                rateHero: [],
                rateEquipment: [],
                rateProps: [],
            },
            lastMonthData: {
                lastMonthHero: [],
                lastMonthEquipment: [],
                lastMonthProps: [],
            },
            rateImg: '',
            herosData: [],
            dialogVisible: false,
            pickerOptions: {
                disabledDate: (time) => {
                    return time.getTime() < moment('2020-06') || time.getTime() > moment('2020-12')
                }
            },
            uploadData: []
        }
    },
    created() {
        this.$http.get('heros.json').then(res => {
            console.log('英雄数据---',res);
            this.herosData = res.data
        })
    },
    methods: {
        uploadJson(res, file) {
            console.log(res, file)
            let reader = new FileReader()
            reader.readAsText(file.raw)
            reader.onload = ((e) => {
                this.uploadData = []
                this.uploadData = JSON.parse(e.target.result)
                console.log('该月数据---', this.uploadData);
                Object.keys(this.rateData).map(index => (this.rateData[index] = []))
                this.uploadData.forEach(item => {
                    if (item.type == '英雄'){
                        this.rateData.rateHero.push(item)
                    } else if (item.type == '装备'){
                        this.rateData.rateEquipment.push(item)
                    } else if (item.type == '道具'){
                        this.rateData.rateProps.push(item)
                    }
                })
                console.log('rateData---',this.rateData);
                // 颜色
                this.rateData.rateHero.forEach(item => {
                    this.herosData.forEach(item2 => {
                        if (item.name == item2.name){
                            item.color = item2.type
                        }
                    })
                })

                this.$http.get('rate/' + moment(file.name.replace('.json', '')).subtract(1, 'month').format('YYYY-MM') + '.json').then(resp => {
                    console.log('上月数据---',resp);
                    this.showReport = true
                    resp.data.forEach(item => {
                        if (item.type == '英雄'){
                            this.lastMonthData.lastMonthHero.push(item)
                        } else if (item.type == '装备'){
                            this.lastMonthData.lastMonthEquipment.push(item)
                        } else if (item.type == '道具'){
                            this.lastMonthData.lastMonthProps.push(item)
                        }
                    })
                    console.log('lastMonthData---',this.lastMonthData);

                    // 计算排名升降
                    this.getRate(this.rateData.rateHero, this.lastMonthData.lastMonthHero)
                    this.getRate(this.rateData.rateEquipment, this.lastMonthData.lastMonthEquipment)
                    this.getRate(this.rateData.rateProps, this.lastMonthData.lastMonthProps)


                    console.log('排名后---',this.rateData);

                },error => {
                    console.log(error)
                    // 计算排名升降
                    this.getRate(this.rateData.rateHero, this.lastMonthData.lastMonthHero)
                    this.getRate(this.rateData.rateEquipment, this.lastMonthData.lastMonthEquipment)
                    this.getRate(this.rateData.rateProps, this.lastMonthData.lastMonthProps)
                    this.showReport = true
                })
            })
        },
        monthChange() {
            console.log('month------',this.month);
            Object.keys(this.rateData).map(index => (this.rateData[index] = []))
            Object.keys(this.lastMonthData).map(index => (this.lastMonthData[index] = []))
            this.rateImg = ''
            this.showReport = false

            this.$http.get('rate/' + this.month + '.json').then(res => {
                console.log('选中月份数据---',res);
                res.data.forEach(item => {
                    if (item.type == '英雄'){
                        this.rateData.rateHero.push(item)
                    } else if (item.type == '装备'){
                        this.rateData.rateEquipment.push(item)
                    } else if (item.type == '道具'){
                        this.rateData.rateProps.push(item)
                    }
                })
                console.log('rateData---',this.rateData);
                // 颜色
                this.rateData.rateHero.forEach(item => {
                    this.herosData.forEach(item2 => {
                        if (item.name == item2.name){
                            item.color = item2.type
                        }
                    })
                })

                this.$http.get('rate/' + moment(this.month).subtract(1, 'month').format('YYYY-MM') + '.json').then(resp => {
                    console.log('上月数据---',resp);
                    this.showReport = true
                    resp.data.forEach(item => {
                        if (item.type == '英雄'){
                            this.lastMonthData.lastMonthHero.push(item)
                        } else if (item.type == '装备'){
                            this.lastMonthData.lastMonthEquipment.push(item)
                        } else if (item.type == '道具'){
                            this.lastMonthData.lastMonthProps.push(item)
                        }
                    })
                    console.log('lastMonthData---',this.lastMonthData);

                    // 计算排名升降
                    this.getRate(this.rateData.rateHero, this.lastMonthData.lastMonthHero)
                    this.getRate(this.rateData.rateEquipment, this.lastMonthData.lastMonthEquipment)
                    this.getRate(this.rateData.rateProps, this.lastMonthData.lastMonthProps)


                    console.log('排名后---',this.rateData);

                },error => {
                    console.log(error)
                    // 计算排名升降
                    this.getRate(this.rateData.rateHero, this.lastMonthData.lastMonthHero)
                    this.getRate(this.rateData.rateEquipment, this.lastMonthData.lastMonthEquipment)
                    this.getRate(this.rateData.rateProps, this.lastMonthData.lastMonthProps)
                    this.showReport = true
                })

            })
        },
        getRate(arr1, arr2) {
            for (let i = 0;i < arr1.length;i++){
                for (let j = 0;j < arr2.length;j++){
                    if (arr1[i].name == arr2[j].name){
                        arr1[i].lifting = j - i
                    }
                }
                if (isNaN(arr1[i].lifting)){
                    arr1[i].lifting = 0
                }
            }
        },
        toImg () {
            const that = this
            that.$nextTick(() => {
                html2canvas(document.querySelector('#container-main')).then(canvas => {
                    let imgUrl = canvas.toDataURL('image/png');
                    this.rateImg = imgUrl
                    this.dialogVisible = true
                })
            })
        },
    }
}
</script>

<style scoped lang="less">
    @import "../assets/less/base";
    .header{
        .el-row{
            margin-bottom: 10px;
        }
    }
    button{
        margin: 0 !important;
        margin-right: 10rem/@fontSize !important;
    }
    /deep/ .upload-json {
        .el-upload__input {
            display: none;
        }
    }
    .container-main{
        width: 750rem/@fontSize;
        padding: 0;
        background-image: url("../assets/image/底图.png");
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
        .img-mubu{
            position: absolute;
            width: 100%;
            z-index: 100;
        }
        .img-diban{
            position: absolute;
            z-index: 10;
            top: 110rem/@fontSize;
            left: 50%;
            transform: translateX(-50%);
        }
        .img-houkuang{
            position: absolute;
            z-index: 20;
            top: 300rem/@fontSize;
            left: 50%;
            transform: translateX(-50%);
        }
        .img-boss{
            position: absolute;
            z-index: 101;
            top: 256rem/@fontSize;
            width: 1000rem/@fontSize;
            left: 50%;
            transform: translateX(-50%);
        }
        .img-ka{
            position: absolute;
            z-index: 102;
            top: 200rem/@fontSize;
            width: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
        .main{
            width: 750rem/@fontSize;
            position: relative;
            z-index: 1000;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            .logo{
                display: block;
                width: 200rem/@fontSize;
                margin: 0rem/@fontSize auto;
            }
            >.title{
                color: rgba(229, 162, 55, 1);
                text-shadow: 0 0 20rem/@fontSize rgba(229, 162, 55, 1);
                font-size: 80rem/@fontSize;
                text-align: center;
                font-weight: bold;
                letter-spacing: 0rem/@fontSize;
            }
            >.subtitle{
                color: rgba(229, 162, 55, 1);
                text-shadow: 0 0 20rem/@fontSize rgba(229, 162, 55, 1);
                font-size: 30rem/@fontSize;
                font-weight: bold;
                text-align: center;
                &.month{
                    margin-bottom: 400rem/@fontSize;
                }
            }
            .type{
                width: 652rem/@fontSize;
                border: 3rem/@fontSize solid rgba(237, 198, 141, 1);
                background-color: rgba(214, 165, 109, 1);
                margin: 0 auto 50rem/@fontSize;
                box-shadow: 0 0 20rem/@fontSize rgba(51, 25, 15, 1);
                >.title{
                    background-color: rgba(133, 82, 51, 1);
                    width: 100%;
                    height: 100rem/@fontSize;
                    font-size: 36rem/@fontSize;
                    line-height: 100rem/@fontSize;
                    color: rgba(254, 248, 170, 1);
                    text-align: center;
                    font-weight: bold;
                    text-shadow: 0 0 10rem/@fontSize rgba(254, 248, 170, 1);
                }
                >.content{
                    margin: 12rem/@fontSize 9rem/@fontSize;
                    border: 6rem/@fontSize solid rgba(186, 132, 83, 1);
                    background-color: rgba(108, 60, 37, 1);
                    padding: 6rem/@fontSize 0 0 6rem/@fontSize;
                    overflow: hidden;
                    position: relative;
                    .item{
                        background-color: #7e482e;
                        width: 116rem/@fontSize;
                        height: 75rem/@fontSize;
                        margin: 0 6rem/@fontSize 6rem/@fontSize 0;
                        float: left;
                        color: white;
                        font-size: 16rem/@fontSize;
                        position: relative;
                        .index{
                            padding-left: 3rem/@fontSize;
                        }
                        .card{
                            width: 83rem/@fontSize;
                            height: 63rem/@fontSize;
                            position: absolute;
                            top: 6rem/@fontSize;
                            right: 6rem/@fontSize;
                            background-repeat: no-repeat;
                            background-position: center 0;
                            background-size: 100%;
                            border: 1rem/@fontSize solid black;
                            .card-head{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 12rem/@fontSize;
                                border-bottom: 1rem/@fontSize solid black;
                                background-color: rgba(107, 99, 97, 1);
                                &.yellow{
                                    background-image: linear-gradient(rgba(157, 108, 42, 1), rgba(230, 157, 55, 1));
                                }
                                &.red{
                                    background-image: linear-gradient(rgba(157, 60, 43, 1), rgba(238, 88, 63, 1));
                                }
                                &.blue{
                                    background-image: linear-gradient(rgba(54, 84, 156, 1), rgba(77, 117, 215, 1));
                                }
                                &.green{
                                    background-image: linear-gradient(rgba(59, 101, 35, 1), rgba(85, 147, 48, 1));
                                }
                                &.purple{
                                    background-image: linear-gradient(rgba(131, 57, 154, 1), rgba(188, 81, 213, 1));
                                }
                            }
                            .card-footer{
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 100%;
                                height: 14rem/@fontSize;
                                border-top: 1rem/@fontSize solid black;
                                background-color: rgba(63, 30, 15, 1);
                                line-height: 14rem/@fontSize;
                                color: white;
                                padding-right: 2rem/@fontSize;
                                font-size: 10rem/@fontSize;
                                text-align: right;
                            }
                            .img-trophy{
                                position: absolute;
                                left: -14rem/@fontSize;
                                bottom: -7rem/@fontSize;
                                width: 30rem/@fontSize;
                            }
                            .img-fire{
                                position: absolute;
                                right: -10rem/@fontSize;
                                top: -10rem/@fontSize;
                                width: 30rem/@fontSize;
                            }
                            .img-up{
                                position: absolute;
                                left: -34rem/@fontSize;
                                top: 6rem/@fontSize;
                                width: 30rem/@fontSize;
                            }
                            .img-down{
                                position: absolute;
                                left: -32rem/@fontSize;
                                top: 8rem/@fontSize;
                                width: 25rem/@fontSize;
                            }
                            .lifting{
                                font-size: 8rem/@fontSize;
                                color: rgba(117, 229, 41, 1);
                                position: absolute;
                                left: -12rem/@fontSize;
                                top: 24rem/@fontSize;
                                &.red{
                                    color: rgba(254, 71, 43, 1);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
