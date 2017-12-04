<template>
    <div>
        <v-header></v-header>
        <el-container class="content-container">
            <v-aside></v-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        <v-footer class="v-footer"></v-footer>
    </div>
</template>

<style scoped>
    .content-container{
        height:500px;
    }
</style>

<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import Aside from "./Aside.vue"
    export default {
        data() {
            return {};
        },
        methods: {},
        components: {
            "v-header": Header,
            "v-footer": Footer,
            "v-aside":Aside
        }
    };
</script>