<template>
    <div>
        <div class="container">
            <el-tabs v-if="!md" v-model="activeName" type="card" stretch @tab-click="changeType">
                <el-tab-pane label="最新资讯" name="news">
                    <ul class="newsList">
                        <li v-for="(item, index) in listData" :key="index" @click="open(item)">
                            <div class="type col-sm-3 col-xs-3">{{ item.type | newsType }}</div>
                            <div class="content col-sm-9 col-xs-9">
                                <div class="title">{{ item.title }}</div>
                                <div class="date">{{ item.time }}</div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="更新" name="update">
                    <ul class="newsList">
                        <li v-for="(item, index) in listData" :key="index" @click="open(item)">
                            <div class="type col-sm-3 col-xs-3">{{ item.type | newsType }}</div>
                            <div class="content col-sm-9 col-xs-9">
                                <div class="title">{{ item.title }}</div>
                                <div class="date">{{ item.time }}</div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="公告" name="notice">
                    <ul class="newsList">
                        <li v-for="(item, index) in listData" :key="index" @click="open(item)">
                            <div class="type col-sm-3 col-xs-3">{{ item.type | newsType }}</div>
                            <div class="content col-sm-9 col-xs-9">
                                <div class="title">{{ item.title }}</div>
                                <div class="date">{{ item.time }}</div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-tab-pane label="开发者的话" name="developer">
                    <ul class="newsList">
                        <li v-for="(item, index) in listData" :key="index" @click="open(item)">
                            <div class="type col-sm-3 col-xs-3">{{ item.type | newsType }}</div>
                            <div class="content col-sm-9 col-xs-9">
                                <div class="title">{{ item.title }}</div>
                                <div class="date">{{ item.time }}</div>
                            </div>
                        </li>
                    </ul>
                </el-tab-pane>
                <el-footer v-if="!md" style="text-align: center;height: auto;padding: 20px 0">
                    <el-pagination
                        :page-sizes="[10]"
                        :current-page.sync="pageInfo.pageIndex"
                        :total="pageInfo.totalCount"
                        layout="total,sizes,prev,pager,next,jumper"
                        @current-change="currentChange"
                    />
                </el-footer>
            </el-tabs>
            <div class="newTitle" v-if="md" style="text-align: center">
                <el-button type="text" @click="init"><i class="el-icon-back" /> 返回</el-button>{{ currentNew.title }}
            </div>
            <div class="newTime" v-if="md" style="text-align: center">{{ currentNew.time }}</div>
            <vueMarkdown v-if="md" :source="md" />
        </div>
    </div>
</template>

<script>
import vueMarkdown from 'vue-markdown'
export default {
    name: "news",
    components: {
        vueMarkdown
    },
    filters: {
        newsType(val) {
            switch (val) {
                case 0:
                    return '更新'
                case 1:
                    return '公告'
                case 2:
                    return '开发者的话'
            }
        }
    },
    data() {
        return {
            activeName: 'news',
            newsData: [],
            typeData: [],
            listData: [],
            md: undefined,
            currentNew: {},
            pageInfo: {
                pageIndex: 1,
                pageSize: 10,
                totalCount: 50
            }
        }
    },
    computed:{

    },
    created() {
        this.init()
    },
    methods: {
        init() {
            this.md = undefined
            this.newsData = []
            this.typeData = []
            this.listData = []
            this.$http.get('news.json').then((res) => {
                console.log('所有资讯---',res.data)
                this.newsData = res.data.reverse()
                this.newsData.forEach(item => {
                    this.typeData.push(item)
                })
                this.listData = this.typeData.slice(0, 10)
                this.pageInfo.totalCount = this.typeData.length
            })
        },
        changeType() {
            console.log(this.activeName);
            this.typeData = []
            switch (this.activeName) {
                case 'news':
                    this.newsData.forEach(item => {
                        this.typeData.push(item)
                    })
                    break
                case 'update':
                    this.newsData.forEach(item => {
                        if (item.type == 0){
                            this.typeData.push(item)
                        }
                    })
                    break
                case 'notice':
                    this.newsData.forEach(item => {
                        if (item.type == 1){
                            this.typeData.push(item)
                        }
                    })
                    break
                case 'developer':
                    this.newsData.forEach(item => {
                        if (item.type == 2){
                            this.typeData.push(item)
                        }
                    })
                    break
            }
            this.pageInfo.totalCount = this.typeData.length
            this.listData = this.typeData.slice(0, 10)
        },
        currentChange(index) {
            this.pageInfo.totalCount = this.typeData.length
            this.listData = this.typeData.slice((index - 1) * 10, index * 10)
        },
        open(item) {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)',
                customClass: 'newsLoading'
            });
            this.$http.get(item.src).then((res) => {
                console.log('所有资讯---',res.data)
                this.currentNew = item
                this.md = res.data
                // loading.close();
            })
        }
    }
}
</script>

<style scoped lang="less">
    @import "../assets/less/base";
    /deep/ .el-tabs__header{
        margin: 0;
    }
    /deep/ .el-tabs__nav{
        border-color: #be814b !important;
        border-radius: 0 !important;
    }
    /deep/ .el-tabs__item{
        background-color: #be814b;
        border-color: #be814b !important;
        font-size: 14rem/@fontSize;
        &.is-active{
            background-color: #d99960;
            border-color: #d99960 !important;
            border-bottom-color: #d99960 !important;
            color: #f0dfaa;
        }
        &:hover{
            color: #f0dfaa;
        }
    }
    /deep/ .el-tabs__content{
        background-color: #d99960;
    }
    .newsList{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
            cursor: pointer;
            width: 100%;
            height: 100rem/@fontSize;
            background-color: #d99960;
            padding: 15rem/@fontSize 0;
            border-bottom: 1rem/@fontSize solid #8d531f;
            color: #f0dfaa;
            &:last-child{
                border: none;
            }
            .type{
                height: 70rem/@fontSize;
                line-height: 70rem/@fontSize;
                font-size: 14rem/@fontSize;
                font-weight: bold;
                padding: 0 15rem/@fontSize;
                text-align: center;
                border-right: 1px solid #8d531f;
            }
            .content{
                height: 70rem/@fontSize;
                text-align: center;
                .title{
                    height: 45rem/@fontSize;
                    font-size: 25rem/@fontSize;
                }
                .date{
                    height: 25rem/@fontSize;
                    font-size: 14rem/@fontSize;
                }
            }
        }
    }
    /deep/ .el-footer{
        button{
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            background-color: #d99960;
            &:disabled{
                background-color: #d99960;
            }
        }
        .el-pagination__total{
            color: #f0dfaa;
        }
        .el-input__inner{
            background-color: #f0dfaa;
            border-color: #be814b !important;
            &:hover{
                border-color: #be814b !important;
            }
        }
        .el-pager li{
            background-color: #d99960;
            &.active{
                color: #f0dfaa;
            }
            &:hover{
                color: #f0dfaa;
            }
        }
        .el-pagination__jump{
            color: #f0dfaa;
        }
    }
    .newTitle{
        vertical-align: middle;
        line-height: 60rem/@fontSize;
        font-size: 36rem/@fontSize;
        margin: 30rem/@fontSize 0;
        position: relative;
        .el-button{
            position: absolute;
            left: 0;
            height: 100%;
            margin: 0 !important;
            font-size: 36rem/@fontSize;
            color: #333 !important;
        }
    }
    .newTime{
        font-size: 20rem/@fontSize;
        margin-bottom: 30rem/@fontSize;
    }
</style>
<style lang="less">
    @import "../assets/less/base";
    .el-select-dropdown__item.selected{
        color: #be814b !important;
    }
    .newsLoading{
        .el-loading-spinner i, .el-loading-spinner .el-loading-text{
            color: #f0dfaa !important;
            font-size: 30rem/@fontSize;
        }
        .el-loading-spinner i{
            font-size: 60rem/@fontSize;
        }
    }
</style>
