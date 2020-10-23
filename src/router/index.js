import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    linkExactActiveClass: 'active',
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: () => import('@/components/index.vue'),
        },
        {
            path: '/news',
            name: 'Neros',
            component: () => import('@/components/news.vue'),
        },
        {
            path: '/heros',
            name: 'Heros',
            component: () => import('@/components/heros.vue')
        },
        {
            path: '/african',
            name: 'African',
            component: () => import('@/components/african.vue')
        },
        {
            path: '/strategy',
            name: 'Strategy',
            component: () => import('@/components/strategy.vue')
        },
        {
            path: '/rate',
            name: 'Rate',
            component: () => import('@/components/rate.vue')
        },
        {
            path: '/fight',
            name: 'Fight',
            component: () => import('@/components/fight.vue')
        }
    ]
})

export default router;
