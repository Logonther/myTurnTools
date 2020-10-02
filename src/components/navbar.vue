<template>
    <div id="navbar">
        <nav class="navbar navbar-default navbar-inverse">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar" />
                        <span class="icon-bar" />
                        <span class="icon-bar" />
                    </button>
                    <a class="navbar-brand" href="#"><img src="../assets/image/logoNew.png"></a>
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
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ this.$t("navbar.language") }}<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#" @click="switchLanguage('zh-CN')">简体中文</a></li>
                                <li><a href="#" @click="switchLanguage('zh-TW')">繁體中文</a></li>
                                <li><a href="#" @click="switchLanguage('en-US')">English</a></li>
                            </ul>
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
                        name: this.$t("navbar.index"),
                        path: '/'
                    },
                    {
                        name: this.$t("navbar.heros"),
                        path: '/heros'
                    },
                    {
                        name: this.$t("navbar.african"),
                        path: '/african'
                    },
                    /*{
                        name: '卡牌讲解',
                        path: '/strategy'
                    }*/
                    {
                        name: this.$t("navbar.rate"),
                        path: '/rate'
                    }
                ],
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
            },
            switchLanguage(value) {
                if (value == "zh-CN") {
                    this.$i18n.locale = "zh-CN";
                } else if (value == "en-US") {
                    this.$i18n.locale = "en-US";
                } else if (value == "zh-TW") {
                    this.$i18n.locale = "zh-TW";
                }

                localStorage.setItem('DefaultLanguage', value)
                this.$router.go(0)
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
