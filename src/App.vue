<template>
    <div id="app">
        <Navbar />
        <transition name="fade" mode="out-in">
            <router-view class="view" />
        </transition>
    </div>
</template>

<script>
import Navbar from '@/views/navbar'

export default {
    name: 'app',
    components: {
        Navbar
    }
}
</script>

<style>
    * {
        outline: none;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    #app {
        padding-top: 51px;
    }
</style>
