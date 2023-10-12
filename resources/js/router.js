//
//
//
//
// import './bootstrap';
// import '../sass/app.scss';
//


import Vue from 'vue'
import VueRouter from "vue-router";
import PostComponent from "./components/PostComponent.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/posts',
            component: PostComponent
        }
    ]
})


//
//
// import {createApp} from 'vue';
// import VueRouter from "vue-router";
// import PostComponent from "./components/PostComponent.vue";
//
// Vue.use(VueRouter)
//
// export default new VueRouter({
//     mode: 'history',
//
//
//     routes: [
//         {
//             path: '/posts',
//             component: PostComponent
//         }
//     ],
//
//     router: VueRouter.createRouter({
//         history: VueRouter.createWebHistory('/'),
//     })
//
// })
//
// //
// // import PostComponent from './components/PostComponent.vue'
// //
// // createApp(PostComponent).mount("#app")
// //
//
//
// //
// // import App from './components/App.vue'
// //
// // createApp(App).mount("#app")
