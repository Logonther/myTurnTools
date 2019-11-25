<template>
    <div id="navbar">
        <nav class="navbar navbar-default navbar-inverse">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="../assets/image/logo.png"></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li v-for="(item,index) in navList"
                            :key="index"
                            @click="toggle(index)"
                        >
                            <router-link :to="item.path">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return{
                activeNo: 0,
                navList:[
                    {
                        name: '首页',
                        path: '/'
                    },
                    {
                        name: '英雄图鉴',
                        path: '/heros'
                    },
                    {
                        name: '模拟抽卡',
                        path: '/african'
                    }
                ]
            }
        },
        mounted(){
            let p = window.location.pathname
            switch(p) {
                case '':
                    this.active = '0'
                    break;
                case '/heros':
                    this.active = '1'
                    break;
                case '/african':
                    this.active = '2'
                    break;
            }
        },
        methods:{
            toggle(index) {
                this.activeNo = index;
            }
        }
    }
</script>

<style scoped lang="less">
    .navbar{
        border-radius: 0;
        margin-bottom: 0;
        .navbar-brand{
            padding: 0;
            margin-right: 10px;
                img{
                height: 50px;
            }
        }
    }
    .router-link-active.active{
        color: #fff;
        background-color: #080808;
        &:hover,&:active,&:link,&:visited{
            background-color: #080808;
        }
    }
</style>
