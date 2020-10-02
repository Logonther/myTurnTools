<template>
    <div>
        <div class="container">
            <el-tabs v-model="activeName" type="card" style="margin-top: 15px" @tab-click="handleClick">
                <el-tab-pane label="英雄讲解" name="first" style="border: 1px solid rgb(228, 231, 237);border-top: none">
                    <el-container :style="'height: '+windowH+'px'">
                        <el-aside width="160px">
                            <el-menu @select="selectHero">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(189,161,0);"></i>黄色英雄
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in herosYellow"
                                                :key="index"
                                        >
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(175,66,50);"></i>红色英雄
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in herosRed"
                                                :key="index">
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="3">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(53,94,170);"></i>蓝色英雄
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in herosBlue"
                                                :key="index">
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="4">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(12,114,77);"></i>绿色英雄
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in herosGreen"
                                                :key="index">
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="5">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: rgb(118,84,145);"></i>紫色英雄
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in herosPurple"
                                                :key="index"
                                        >
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-aside>
                        <el-main>
                            <p v-for="(item,index) in strategy" :key="index">{{ item }}</p>
                        </el-main>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="装备讲解" name="second" style="border: 1px solid rgb(228, 231, 237);border-top: none">
                    <el-container :style="'height: '+windowH+'px'">
                        <el-aside width="160px">
                            <el-menu @select="selectEquipment">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: #fdda64;"></i>金装备
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in equipmentsGold"
                                                :key="index"
                                        >
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: #d1dfe5;"></i>银装备
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in equipmentsSilver"
                                                :key="index">
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-submenu index="3">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: #cd9b7c;"></i>铜装备
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in equipmentsCopper"
                                                :key="index">
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-aside>
                        <el-main>
                            <p v-for="(item,index) in strategy" :key="index">{{ item }}</p>
                        </el-main>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="道具讲解" name="third" style="border: 1px solid rgb(228, 231, 237);border-top: none">
                    <el-container :style="'height: '+windowH+'px'">
                        <el-aside width="160px">
                            <el-menu @select="selectProps">
                                <el-submenu index="1">
                                    <template slot="title">
                                        <i class="el-icon-star-on" style="color: #fdda64;"></i>道具
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item
                                                :index="item.id"
                                                v-for="(item,index) in props"
                                                :key="index"
                                        >
                                            {{ item.name }}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu>
                        </el-aside>
                        <el-main>
                            <p v-for="(item,index) in strategy" :key="index">{{ item }}</p>
                        </el-main>
                    </el-container>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: "strategy",
    data() {
        return {
            activeName: 'first',
            windowH: 555,
            heros: [],
            herosYellow: [],
            herosRed: [],
            herosBlue: [],
            herosGreen: [],
            herosPurple: [],
            equipments: [],
            props: [],
            equipmentsGold: [],
            equipmentsSilver: [],
            equipmentsCopper: [],
            strategy: ['请选取卡牌~'],
        }
    },
    created() {
        this.windowH = window.innerHeight - 120
        this.init()
    },
    methods:{
        init() {
            this.heros = []
            this.herosYellow = []
            this.herosRed = []
            this.herosBlue = []
            this.herosGreen = []
            this.herosPurple = []
            this.equipments = []
            this.props = []
            this.$http.get('heros.json').then((res) => {
                this.heros = res.data
                this.heros.forEach(item => {
                    if(item.type == 'yellow'){
                        this.herosYellow.push(item)
                    }else if(item.type == 'red'){
                        this.herosRed.push(item)
                    }else if(item.type == 'blue'){
                        this.herosBlue.push(item)
                    }else if(item.type == 'green'){
                        this.herosGreen.push(item)
                    }else if(item.type == 'purple'){
                        this.herosPurple.push(item)
                    }
                })
            })
            this.$http.get('equipment.json').then((res) => {
                this.equipments = res.data
                this.equipments.forEach(item => {
                    if(item.rare == 'gold'){
                        this.equipmentsGold.push(item)
                    }else if(item.rare == 'silver'){
                        this.equipmentsSilver.push(item)
                    }else if(item.rare == 'copper'){
                        this.equipmentsCopper.push(item)
                    }
                })
            })
            this.$http.get('props.json').then((res) => {
                this.props = res.data
            })
        },
        handleClick() {
          this.strategy = ['请选取卡牌~']
        },
        selectHero(index){
            this.strategy = this.heros.find((item) => {
                return item.id === index
            }).strategy
          console.log(this.strategy);
        },
        selectEquipment(index){
            this.strategy = this.equipments.find((item) => {
                return item.id === index
            }).strategy
        },
        selectProps(index){
            this.strategy = this.props.find((item) => {
                return item.id === index
            }).strategy
        }
    }
}
</script>

<style scoped lang="less">
    .el-main{
        p{
            text-indent: 2em;
        }
    }
</style>
<style lang="less">
    .el-tabs__header.is-top {
        margin: 0;
    }
</style>
