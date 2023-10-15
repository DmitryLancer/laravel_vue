import './bootstrap';
import '../sass/app.scss';

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


];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(Index)
    .use(router)
    .mount('#app')

