<template>
    <div>
        <div class="container indexText">
            <h3>{{ this.$t("index.welcome") }}</h3>
            <h3>{{ this.$t("index.update") }}</h3>
            <ul>
                <li>【2021-04-29 21:42:59】{{ this.$t("index.notice")[0] }}</li>
                <li>【2021-06-05 08:56:33】{{ this.$t("index.notice")[1] }}</li>
                <li>【2021-06-07 19:46:03】{{ this.$t("index.notice")[2] }}</li>
            </ul>
            <h3>{{ this.$t("index.existing") }}</h3>
            <ul>
                <li>{{ this.$t("navbar.news") }}</li>
                <li>{{ this.$t("navbar.heros") }}</li>
                <li>{{ this.$t("navbar.strategy") }}</li>
                <li>{{ this.$t("navbar.rate") }}</li>
            </ul>
            <h3>{{ this.$t("index.subsequent") }}</h3>
            <ul>
                <li>{{ this.$t("index.subsequentFunctions")[0] }}</li>
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
