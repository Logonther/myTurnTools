<template>
    <div>
        <div class="container indexText">
            <h3>欢迎来到逆转回合工具站！</h3>
            <h3>更新记录：</h3>
            <ul>
                <li>开始动工！</li>
            </ul>
            <h3>已有功能：</h3>
            <ul>
                <li>新闻资讯</li>
                <li>图鉴</li>
                <li>编辑卡组</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "index-CN",
    data(){
        return {
        }
    },
    created() {
    }
}
</script>

<style scoped lang="less">
    p，ul {
        font-size: 16px;
    }

    ul {
        list-style: disc;
        margin-left: 15px;

        li {
            list-style: disc;
        }
    }
</style>
