
import './bootstrap';

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from 'vue-router';

import Index from './components/Index.vue';
import PostComponent from './components/PostComponent.vue';

const routes = [
     { path: '/', component: Index },
     { path: '/post', component: PostComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(Index)
.use(router)
.mount('#app')

