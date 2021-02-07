<template>
    <div class="bigbox">
        <!-- build部分 -->
        <div id="container-build" class="container build">
            <div
                class="buildProps"
            >
                <transition-group tag="div">
                    <div
                        class="buildCardBox"
                        v-for="(card, index) in buildProps"
                        :key="getKey('prop', card.id, index)"
                        :class="card.id ? 'border-black' : ''"
                        draggable="true"
                        @dragstart="handleDragStart($event, 'buildProps', index)"
                        @dragover.prevent="handleDragOver($event, 'buildProps', index)"
                        @dragenter="handleDragEnter($event, 'buildProps', index)"
                        @dragend="handleDragEnd($event, 'buildProps', index)"
                        @click="removeBuild(buildProps, index)"
                    >
                        <div v-if="card.id" class="buildCard" :style="'background-image: url(image/card/' + card.name + '.jpg)'">
                            <div class="title" :class="card.type ? (card.type + ' border-black') : ''">
                                {{ card.name }}
                            </div>
                        </div>
                        <div v-else class="empty"><span>{{ $t("build.item") }}</span></div>
                    </div>
                </transition-group>
            </div>
            <div class="rightBox">
                <div
                    class="buildRight"
                >
                    <transition-group tag="div">
                        <div
                            class="buildCardBox"
                            v-for="(card, index) in buildHeros"
                            :key="getKey('hero', card.id, index)"
                            :class="card.id ? 'border-black' : ''"
                            draggable="true"
                            @dragstart="handleDragStart($event, 'buildHeros', index)"
                            @dragover.prevent="handleDragOver($event, 'buildHeros', index)"
                            @dragenter="handleDragEnter($event, 'buildHeros', index)"
                            @dragend="handleDragEnd($event, 'buildHeros', index)"
                            @click="removeBuild(buildHeros, index)"
                        >
                            <div v-if="card.id" class="buildCard" :style="'background-image: url(image/card/' + card.name + '.jpg)'">
                                <div class="title" :class="card.type ? (card.type + ' border-black') : ''">
                                    {{ card.name }}
                                </div>
                            </div>
                            <div v-else class="empty"><span>{{ $t("build.hero") }}</span></div>
                        </div>
                    </transition-group>
                </div>
                <div
                    class="buildRight"
                >
                    <transition-group tag="div">
                        <div
                            class="buildCardBox"
                            v-for="(card, index) in buildEquipment"
                            :key="getKey('equipment', card.id, index)"
                            :class="card.id ? 'border-black' : ''"
                            draggable="true"
                            @dragstart="handleDragStart($event, 'buildEquipment', index)"
                            @dragover.prevent="handleDragOver($event, 'buildEquipment', index)"
                            @dragenter="handleDragEnter($event, 'buildEquipment', index)"
                            @dragend="handleDragEnd($event, 'buildEquipment', index)"
                            @click="removeBuild(buildEquipment, index)"
                        >
                            <div v-if="card.id" class="buildCard" :style="'background-image: url(image/card/' + card.name + '.jpg)'">
                                <div class="title" :class="card.type ? (card.type + ' border-black') : ''">
                                    {{ card.name }}
                                </div>
                            </div>
                            <div v-else class="empty"><span>{{ $t("build.equip") }}</span></div>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
        <!-- 按钮部分 -->
        <div class="container buttons">
            <div class="typeButton">
                <button
                    :class="{ active: currentType === 'red' }"
                    :style="'background-image: url(image/icon/red.jpg)'"
                    @click="selectType('red')"
                />
            </div>
            <div class="typeButton">
                <button
                    :class="{ active: currentType === 'yellow' }"
                    :style="'background-image: url(image/icon/yellow.jpg)'"
                    @click="selectType('yellow')"
                />
            </div>
            <div class="typeButton">
                <button
                    :class="{ active: currentType === 'blue' }"
                    :style="'background-image: url(image/icon/blue.jpg)'"
                    @click="selectType('blue')"
                />
            </div>
            <div class="typeButton">
                <button
                    :class="{ active: currentType === 'green' }"
                    :style="'background-image: url(image/icon/green.jpg)'"
                    @click="selectType('green')"
                />
            </div>
            <div class="typeButton">
                <button
                    :class="{ active: currentType === 'purple' }"
                    :style="'background-image: url(image/icon/purple.jpg)'"
                    @click="selectType('purple')"
                />
            </div>
            <div class="typeButton">
                <button
                    :class="{ active: currentType === 'equipment' }"
                    :style="'background-image: url(image/icon/equipment.jpg)'"
                    @click="selectType('equipment')"
                />
            </div>
            <div class="typeButton">
                <button
                    :class="{ active: currentType === 'prop' }"
                    :style="'background-image: url(image/icon/prop.jpg)'"
                    @click="selectType('prop')"
                />
            </div>
        </div>
        <!-- 列表部分 -->
        <div class="container cardsList" style="padding-top: 20px">
            <div class="cards">
                <div
                    class="card-box"
                    v-for="(card, index) in cardsList"
                    :key="getKey(card.type, card.id, index)"
                    @click="toBuild(card)"
                >
                    <div class="card" :style="'background-image: url(image/card/' + card.name + '.jpg)'">
                        <div class="title" :class="card.type ? (card.type + ' border-black') : ''">
                            {{ card.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="toImg" @click="toImg">{{ this.$t("build.toImg") }}</div>
        <el-dialog
            :title="this.$t('build.right')"
            :visible.sync="dialogVisible"
            width="90%"
        >
            <img :src="rateImg" style="width: 100%">
        </el-dialog>
    </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
    name: "build",
    data() {
        return {
            heroList: [],
            equipmentList: [],
            propList: [],
            cardsList: [],
            buildHeros:[{}, {}, {}, {}],
            buildEquipment:[{}, {}, {}, {}],
            buildProps:[{}, {}],
            currentType: 'all',
            dragging: null,
            dragend: null,
            rateImg: '',
            dialogVisible: false
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.$http.get('heros.json').then((res) => {
                this.heroList = res.data
                this.$http.get('equipment.json').then((res) => {
                    this.equipmentList = res.data
                    this.$http.get('props.json').then((res) => {
                        this.propList = res.data
                        this.cardsList = [...this.equipmentList, ...this.heroList, ...this.propList]
                        console.log('cardsList----', this.cardsList)
                        this.selectType('all')
                    })
                })
            })
        },
        getKey(type, id, index) {
            console.log(type, id, index)
            return id ? (type + id) : (type + index)
        },
        handleDragStart(e, list, index){
            this.dragging = {
                card: this[list][index],
                type: list,
                index
            }
        },
        handleDragEnd(e, list, index){
            console.log('dragend---', this.dragend);
            e.dataTransfer.effectAllowed = "move"
            const type = ['yellow', 'red', 'blue' , 'green', 'purple']
            if(this.dragend.type === this.dragging.type && this.dragend.index !== this.dragging.index){
                const item = this[list][this.dragging.index]
                this[list].splice(this.dragging.index, 1, this[list][this.dragend.index])
                this[list].splice(this.dragend.index, 1, item)
                console.log(this.dragging.index, this.dragend.index)
                this.dragging = null
                this.dragend = null
            }
        },
        //首先把div变成可以放置的元素，即重写dragenter/dragover
        handleDragOver(e, list, index) {
            e.dataTransfer.dropEffect = 'move'// e.dataTransfer.dropEffect="move";//在dragenter中针对放置目标来设置!
        },
        handleDragEnter(e, list, index){
            //为需要移动的元素设置dragstart事件
            this.dragend = {
                card: this[list][index],
                type: list,
                index
            }
        },
        selectType(type) {
            if (this.currentType === type) {
                this.currentType = 'all'
            } else {
                this.currentType = type
            }
            this.sort(this.currentType)
        },
        sort() {
            this.cardsList = [...this.heroList, ...this.equipmentList, ...this.propList]
            const typeList = []
            this.cardsList.forEach(card => {
                if (card.type === this.currentType) {
                    typeList.push(card)
                } else if (this.currentType === 'all') {
                    typeList.push(card)
                }
            })
            this.cardsList = typeList
            this.cardsList.sort((a, b) => {
                const typeList = ['yellow', 'red', 'blue', 'green', 'purple', 'equipment', 'prop']
                if (a.type !== b.type) {
                    return typeList.indexOf(a.type) - typeList.indexOf(b.type)
                } else {
                    const aArr = a.id.split('-')
                    const bArr = b.id.split('-')
                    if (aArr[0] === bArr[0]) {
                        return Number(aArr[1]) - Number(bArr[1])
                    } else {
                        return Number(aArr[0]) - Number(bArr[0])
                    }
                }
            })
        },
        toBuild(card) {
            console.log('toBuild-card', card)
            if (card.type === 'equipment') {
                for (let i = 0; i < this.buildEquipment.length; i++) {
                    if (!this.buildEquipment[i].id) {
                        this.buildEquipment[i] = card
                        this.remove(card, this.equipmentList)
                        return false
                    }
                }
            } else if (card.type === 'prop') {
                for (let i = 0; i < this.buildProps.length; i++) {
                    if (!this.buildProps[i].id) {
                        this.buildProps[i] = card
                        this.remove(card, this.propList)
                        return false
                    }
                }
            } else {
                for (let i = 0; i < this.buildHeros.length; i++) {
                    if (!this.buildHeros[i].id) {
                        this.buildHeros[i] = card
                        this.remove(card, this.heroList)
                        return false
                    } else if (this.buildHeros[i].type === card.type) {
                        this.$message.error('不能放入同类型英雄！')
                        return false
                    }
                }
            }
        },
        remove(card, list) {
            let index = -1;
            for (let i = 0; i < list.length; i ++) {
                if (list[i].name === card.name) {
                    index = i;
                }
            }
            if(index > -1){
                list.splice(index,1);
            }
            this.sort(card.type)
            console.log(index, list)
        },
        removeBuild(list, index) {
            if (!list[index].id) {
                return false
            }
            if (list[index].type === 'equipment') {
                this.equipmentList.push(list[index])
            } else if (list[index].type === 'prop') {
                this.propList.push(list[index])
            } else {
                this.heroList.push(list[index])
            }
            this.sort(this.currentType)
            list[index] = {}
        },
        toImg () {
            const that = this
            that.$nextTick(() => {
                html2canvas(document.querySelector('#container-build')).then(canvas => {
                    let imgUrl = canvas.toDataURL('image/png');
                    this.rateImg = imgUrl
                    this.dialogVisible = true
                })
            })
        }
    }
}
</script>

<style scoped lang="less">
    @import "../assets/less/base";
    .container.build {
        padding: 15px;
        background-color: #61371f;
    }
    .container.buttons {
        padding: 15px;
        padding-bottom: 0;
        background-color: #4c291c;
        font-size: 0;
        .typeButton {
            display: inline-block;
            width: 14.28%;
            padding: 15rem/@fontSize;
            button {
                border: none;
                outline: none;
                width: 100%;
                padding-bottom: 63.63%;
                background-size: 100% 100%;
                background-position: center;
                &.active {
                    box-shadow: 0 0 5rem/@fontSize 5rem/@fontSize rgb(201, 142, 97);
                }
            }
        }
    }
    .container.cardsList {
        padding: 15px;
        background-color: #4c291c;
    }
    .border-black {
        border-color: black !important;
    }
    .buildCardBox {
        background-color: #452211;
        border: 5rem/@fontSize solid #3c1605;
        cursor: move;
        text-align: center;
        position: relative;
        .buildCard {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            .title {
                width: 100%;
                height: 30rem/@fontSize;
                line-height: 25rem/@fontSize;
                border-bottom: 5rem/@fontSize solid black;
                font-size: 16rem/@fontSize;
                padding-left: 7rem/@fontSize;
                color: white;
                text-align: left;
                &.yellow{
                    background-image: linear-gradient(rgba(157, 108, 42, 1), rgba(230, 157, 55, 1));
                }
                &.red{
                    background-image: linear-gradient(rgba(157, 60, 43, 1), rgba(238, 88, 63, 1));
                }
                &.blue{
                    background-image: linear-gradient(rgba(54, 84, 156, 1), rgba(77, 117, 215, 1));
                }
                &.green{
                    background-image: linear-gradient(rgba(59, 101, 35, 1), rgba(85, 147, 48, 1));
                }
                &.purple{
                    background-image: linear-gradient(rgba(131, 57, 154, 1), rgba(188, 81, 213, 1));
                }
                &.equipment {
                    background-image: linear-gradient(rgba(127, 120, 114, 1), rgba(165, 153, 147, 1));
                }
                &.prop {
                    background-image: linear-gradient(rgba(45, 43, 42, 1), rgba(61, 57, 57, 1));
                }
            }
            span {
                display: inline-block;
                vertical-align: middle;
            }
        }
        .empty {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            &:before {
                content: '';
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
            span {
                display: inline-block;
                vertical-align: middle;
                color: rgb(201, 142, 97);
                font-size: 50rem/@fontSize;
            }
        }
    }
    .buildProps {
        width: 20%;
        display: inline-block;
        .buildCardBox {
            width: 100%;
            padding-bottom: 60%;
        }
    }
    .rightBox {
        width: 80%;
        display: inline-block;
        .buildRight {
            width: 100%;
            overflow: hidden;
            .buildCardBox {
                width: 25%;
                padding-bottom: 15%;
                float: right;
            }
        }
    }

    .cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .card-box {
            position: relative;
            width: 20%;
            padding-bottom: 12%;
            box-sizing: border-box;
            background-color: #452211;
            border: 5rem/@fontSize solid black;
            .card {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                .title {
                    width: 100%;
                    height: 30rem/@fontSize;
                    line-height: 25rem/@fontSize;
                    border-bottom: 5rem/@fontSize solid black;
                    font-size: 16rem/@fontSize;
                    padding-left: 7rem/@fontSize;
                    color: white;
                    text-align: left;
                    &.yellow{
                        background-image: linear-gradient(rgba(157, 108, 42, 1), rgba(230, 157, 55, 1));
                    }
                    &.red{
                        background-image: linear-gradient(rgba(157, 60, 43, 1), rgba(238, 88, 63, 1));
                    }
                    &.blue{
                        background-image: linear-gradient(rgba(54, 84, 156, 1), rgba(77, 117, 215, 1));
                    }
                    &.green{
                        background-image: linear-gradient(rgba(59, 101, 35, 1), rgba(85, 147, 48, 1));
                    }
                    &.purple{
                        background-image: linear-gradient(rgba(131, 57, 154, 1), rgba(188, 81, 213, 1));
                    }
                    &.equipment {
                        background-image: linear-gradient(rgba(127, 120, 114, 1), rgba(165, 153, 147, 1));
                    }
                    &.prop {
                        background-image: linear-gradient(rgba(45, 43, 42, 1), rgba(61, 57, 57, 1));
                    }
                }
            }
        }
    }
    .bigbox {
        position: absolute;
        width: 100%;
        height: calc(100% - 50px);
        background-color: #4c291c;
        overflow-y: scroll;
        padding-bottom: 100rem/@fontSize;
    }
    #toImg {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100rem/@fontSize;
        line-height: 100rem/@fontSize;
        text-align: center;
        font-size: 50rem/@fontSize;
        background-color: #61371f;
        color: rgb(201, 142, 97);
        border-top: 5rem/@fontSize solid #3c1605;
    }
</style>
