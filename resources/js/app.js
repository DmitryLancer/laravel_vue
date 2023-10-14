import './bootstrap';
import '../sass/app.scss';

import {createApp} from "vue/dist/vue.esm-bundler.js";
import {createRouter, createWebHistory} from 'vue-router';

import Index from './components/Index.vue';
import MainComponent from './components/MainComponent.vue';
import TagComponent from "./components/TagComponent.vue";

const routes = [
    {path: '/', component: MainComponent},
    {path: '/tag', component: TagComponent},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(Index)
    .use(router)
    .mount('#app')

