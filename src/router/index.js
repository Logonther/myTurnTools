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
            component: () => import('@/views/index.vue'),
        },
        {
            path: '/news',
            name: 'Neros',
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
        }
    ]
})

export default router;
