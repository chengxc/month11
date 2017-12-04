//=======================以下是导入CSS的部分==========================

//引入element-ui样式
import "element-ui/lib/theme-chalk/index.css"

//=======================以下是导入JS的部分==========================
//导入vue
import Vue from "vue"

import Vuex from "vuex"
Vue.use(Vuex);

//导入element-ui JS脚本
import "./importElement.js"

import VueResoure from "vue-resource"
Vue.use(VueResoure);

//导入App组件
import App from "./component/App.vue"

//导入路由配置
import router from "./router.js"


const store = new Vuex.Store({
    state: {
        doubanUrl: "https://api.douban.com/v2"
    },
    mutations: {

    }
})

var vm = new Vue({
    el: "#app",
    router,
    store,
    render(c) {
        return c(App);
    }
});