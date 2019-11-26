<template>
    <div>
        <div class="container indexText">
            <h3>我的回合资料站开始施工！</h3>
            <p>新页面：https://logonther.github.io/vue-myturn</p>
            <p>此后这个页面也许不会再更新也可能</p>
            <h3>更新记录：</h3>
            <ul>
                <li>在4测剩下的时间打算先更新一下已有功能的UI，以及完善现有功能</li>
                <li>在考虑做模拟抽卡的累计</li>
                <li>现模拟抽卡已经可以切换不同版本的卡池</li>
                <li>数据资料等在国服出前会以国际服为准</li>
                <li>【2019年11月26日09:16:58】国际服11月平衡会晚上找机会更新，卡池已加入荒漠萨满</li>
            </ul>
            <h3>已有功能：</h3>
            <ul>
                <li>英雄图鉴</li>
                <li>模拟开包</li>
            </ul>
            <h3>预计功能：</h3>
            <ul>
                <li>升级金币计算：计算英雄从X级到X级需要的金币数量（暂无确定数据，根据情况也许不做）</li>
                <li>每日轮选英雄池：显示每日轮选的英雄有哪些（视情况做不做，也不排除轮选还会改）</li>
                <li>英雄故事：所有英雄相关的背景故事（暂无确定资料）</li>
                <li>互动语音：所有英雄相关的互动语音（暂无确定资料）</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
    p，ul{
        font-size: 16px;
    }
    ul{
        list-style: disc;
        margin-left: 15px;
        li{
            list-style: disc;
        }
    }
</style>
