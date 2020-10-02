import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from '@/components/index.vue'
import Heros from '@/components/heros.vue'
import African from '@/components/african.vue'
import Strategy from '@/components/strategy.vue'
import Rate from '@/components/rate.vue'
import Test from '@/components/test.vue'

let router = new Router({
    linkExactActiveClass: 'active',
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
        },{
            path: '/heros',
            name: 'Heros',
            component: Heros
        },{
            path: '/african',
            name: 'African',
            component: African
        },{
            path: '/strategy',
            name: 'Strategy',
            component: Strategy
        },{
            path: '/rate',
            name: 'Rate',
            component: Rate
        },{
            path: '/test',
            name: 'Test',
            component: Test
        }
    ]
})

export default router;
