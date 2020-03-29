<template>
    <div>
        <div class="container indexText">
            <h3>我的回合资料站开始施工！</h3>
            <h3>更新记录：</h3>
            <ul>
                <li>在考虑做模拟抽卡的累计</li>
                <li>数据资料等在国服出前会以国际服为准</li>
                <li>【2020年01月21日11:46:18】模拟抽卡现注释掉了卡池切换按钮，并将默认卡池改为现有卡池</li>
            </ul>
            <h3>已有功能：</h3>
            <ul>
                <li>英雄图鉴</li>
                <li>模拟开包</li>
            </ul>
            <h3>预计功能：</h3>
            <ul>
                <li>英雄故事：所有英雄相关的背景故事（暂无确定资料）</li>
                <li>互动语音：所有英雄相关的互动语音</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
    }
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
