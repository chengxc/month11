import Vue from "vue"


import VueResoure from "vue-resource"
Vue.use(VueResoure);

//导入App组件
import App from "./component/App.vue"

//导入路由配置
import router from "./router.js"

var vm = new Vue({
    el: "#app",
    router,
    render(c) {
        return c(App);
    }
})