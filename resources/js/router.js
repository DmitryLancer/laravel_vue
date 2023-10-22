import './bootstrap';
import '../sass/app.scss';
import store from './store';

import {createApp} from "vue/dist/vue.esm-bundler.js";
import {createRouter, createWebHistory} from 'vue-router';

import Index from './components/Index.vue';



const routes = [
    {
        path: '/people',
        name: 'person.index',
        component: () => import('./components/Person/Index.vue')
    },
    {
        path: '/people/create',
        name: 'person.create',
        component: () => import('./components/Person/Create.vue')
    },
    {
        path: '/people/:id/edit',
        name: 'person.edit',
        component: () => import('./components/Person/Edit.vue')
    },
    {
        path: '/people/:id',
        name: 'person.show',
        component: () => import('./components/Person/Show.vue')
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(Index)
    .use(router)
    .use(store)
    .mount('#app')

