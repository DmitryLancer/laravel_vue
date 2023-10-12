


import Vue from 'vue';
import router from "./router";

import Index from './components/Index.vue'

import './bootstrap';
import '../sass/app.scss';


const app = new Vue({
    el: '#app',

    components: {
        Index
    },

    router
})

app.mount('#app');














// import './bootstrap';
// import '../sass/app.scss';
//
// import { createApp } from 'vue';
// import * as VueRouter from 'vue-router';
//
//
// import Index from './components/Index.vue';
// import PostComponent from "./components/PostComponent.vue";
//
//
//
// const routes = [
//     {path: '/', component: Index},
//     {path: '/post', component: PostComponent},
// ]
//
// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHistory('/'),
//     routes,
// })
//
// const app = createApp({})
//
// app.use(router)
//
// app.component('index-component', Index)
//
