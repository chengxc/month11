<template>
    <el-aside>
        <el-menu default-active="2" class="menu-container" 
            :router="true" 
            background-color="#545c64"
            text-color="#fff" 
            @open="handleOpen" 
            @close="handleClose">
            <el-menu-item index="book">
                <i class="el-icon-menu"></i>
                <span slot="title">图书</span>
            </el-menu-item>
            <el-menu-item index="movie">
                <i class="el-icon-menu"></i>
                <span slot="title">电影</span>
            </el-menu-item>
            <el-menu-item index="music">
                <i class="el-icon-setting"></i>
                <span slot="title">音乐</span>
            </el-menu-item>
            <el-menu-item index="city">
                <i class="el-icon-setting"></i>
                <span slot="title">同城</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>
<style scoped>
    .menu-container{
        height:100%;
    }
</style>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>