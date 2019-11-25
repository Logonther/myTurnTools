import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from '@/components/index.vue'
import Heros from '@/components/heros.vue'
import African from '@/components/african.vue'

let router = new Router({
    linkExactActiveClass: 'active',
    mode: 'history',
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
        }
    ]
})

export default router;
