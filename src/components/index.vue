<template>
    <div>
        <div class="container indexText">
            <h3>{{ this.$t("index.welcome") }}</h3>
            <h3>{{ this.$t("index.update") }}</h3>
            <ul>
                <li>【2020-09-29 10:35:07】{{ this.$t("index.notice")[0] }}</li>
                <li>【2020-10-02 14:09:59】{{ this.$t("index.notice")[1] }}</li>
            </ul>
            <h3>{{ this.$t("index.existing") }}</h3>
            <ul>
                <li>{{ this.$t("navbar.heros") }}</li>
                <li>{{ this.$t("navbar.african") }}</li>
                <li>{{ this.$t("navbar.strategy") }}</li>
                <li>{{ this.$t("navbar.rate") }}</li>
            </ul>
            <h3>{{ this.$t("index.subsequent") }}</h3>
            <ul>
                <li>{{ this.$t("index.subsequentFunctions")[0] }}</li>
                <li>{{ this.$t("index.subsequentFunctions")[1] }}</li>
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
