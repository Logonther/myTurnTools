<template>
    <div>
        <div class="container">
            <el-tabs v-model="activeName" type="card" style="margin-top: 15px">
                <el-tab-pane label="英雄讲解" name="first" style="border: 1px solid rgb(228, 231, 237);border-top: none">
                    <el-container :style="'height: '+windowH+'px'">
                        <el-aside width="200px">
                            <el-menu>
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(189,161,0);"></i>黄色英雄
                                    </template>
                                    <el-menu-item index="1-1">侍从</el-menu-item>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(175,66,50);"></i>红色英雄
                                    </template>
                                </el-submenu>
                                <el-submenu index="3">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(53,94,170);"></i>蓝色英雄
                                    </template>
                                </el-submenu>
                                <el-submenu index="4">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(12,114,77);"></i>绿色英雄
                                    </template>
                                </el-submenu>
                                <el-submenu index="5">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(118,84,145);"></i>紫色英雄
                                    </template>
                                </el-submenu>
                            </el-menu>
                        </el-aside>
                        <el-main>新功能开坑</el-main>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="装备讲解" name="second">zb</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
  name: "strategy",
  data(){
    return {
      activeName: 'first',
      windowH: 555,
    }
  },
  created(){
    this.windowH = window.innerHeight - 120
  }
}
</script>

<style scoped lang="less">
</style>
<style lang="less">
    .el-tabs__header.is-top{
        margin: 0;
    }
</style>
