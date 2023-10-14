
import './bootstrap';

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from 'vue-router';

import Index from './components/Index.vue';
import PostComponent from './components/PostComponent.vue';

import router from './router'

const app = createApp({
    components: {
        Index,
        PostComponent,
    }
});

app.mount('#app')
app.use(router)


// const routes = [
//     { path: '/', component: Index },
//     { path: '/post', component: PostComponent },
// ]
//
// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })
//
// createApp({})
//     .component('Index', Index)
//     .component('Post', PostComponent)
//     .use(router)
//     .mount('#app')



// import './bootstrap';
// import '../sass/app.scss';
//
// import {createApp} from 'vue';
// import * as VueRouter from 'vue-router'
//
// import Index from './components/Index.vue'
// import PostComponent from './components/PostComponent.vue'
//
// const routes = [
//     {path: '/', component: Index},
//     {
//         path: '/posts',
//         name: 'posts',
//         component: PostComponent,
//     },
// ]
//
// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHistory('/'),
//     routes,
// })
//
//
// const app = createApp({})
//
// app.use(router)
//
// app.component('Index', Index)
//
// app.mount('#app')
//
