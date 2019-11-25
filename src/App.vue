<template>
    <div id="app">
        <Navbar></Navbar>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    import Navbar from '@/components/navbar'

    export default {
        name: 'app',
        components: {
            Navbar
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    button{
        margin: 10px !important;
    }
</style>
