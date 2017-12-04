//导入vue包
import Vue from "vue"

//导入路由组件
import VueRouter from "vue-router"
Vue.use(VueRouter);

import City from "./component/City.vue"
import Book from "./component/Book.vue"
import Movie from "./component/Movie.vue"
import Music from "./component/Music.vue"

export default new VueRouter({
    routes: [
        { path: "/", component: Book },
        { path: "/book", component: Book },
        { path: "/movie", component: Movie },
        { path: "/music", component: Music },
        { path: "/city", component: City }
    ]
})