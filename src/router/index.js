import Vue from 'vue';
import Router from 'vue-router';
import indexCN from '@/views/index-CN.vue'

Vue.use(Router);

let router = new Router({
    linkExactActiveClass: 'active',
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('@/views/index.vue'),
        },
        {
            path: '/news',
            name: 'News',
            component: () => import('@/views/news.vue'),
        },
        {
            path: '/heros',
            name: 'Heros',
            component: () => import('@/views/heros.vue')
        },
        {
            path: '/african',
            name: 'African',
            component: () => import('@/views/african.vue')
        },
        {
            path: '/strategy',
            name: 'Strategy',
            component: () => import('@/views/strategy.vue')
        },
        {
            path: '/rate',
            name: 'Rate',
            component: () => import('@/views/rate.vue')
        },
        {
            path: '/fight',
            name: 'Fight',
            component: () => import('@/views/fight.vue')
        },
        {
            path: '/collection',
            name: 'Collection',
            component: () => import('@/views/collection.vue')
        },
        {
            path: '/build',
            name: 'Build',
            component: () => import('@/views/build.vue')
        },
        {
            path: '/skins',
            name: 'Skins',
            component: () => import('@/views/skins.vue')
        },
        {
            path: '/CN',
            name: 'CN',
            component: () => import('@/views/CN.vue'),
            redirect: '/CN/index',
            children: [
                {
                    path: 'index',
                    name: 'Index-CN',
                    component: () => import('@/views/index-CN.vue'),
                },
                {
                    path: 'news',
                    name: 'News-CN',
                    component: () => import('@/views/news.vue'),
                },
                {
                    path: 'collection',
                    name: 'Collection-CN',
                    component: () => import('@/views/collection.vue')
                },
                {
                    path: 'build',
                    name: 'Build-CN',
                    component: () => import('@/views/build.vue')
                },
                {
                    path: 'skins',
                    name: 'Skins-CN',
                    component: () => import('@/views/skins.vue')
                }
            ]
        },
    ]
})

export default router;
