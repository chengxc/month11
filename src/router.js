import Vue from "vue"

//导入路由组件
import VueRouter from "vue-router"
Vue.use(VueRouter);

//导入页面组件
import Home from "./component/Home.vue"
import Personal from "./component/Personal.vue"
import Search from "./component/Search.vue"

export default new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: Home },
        { path: "/personal", component: Personal },
        { path: "/search", component: Search }
    ],
    linkActiveClass: "active"
})