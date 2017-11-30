<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{title}}</div>
        <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>姓名</th>
                        <th>花名</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.roster}}</td>
                        <td>{{user.telephone}}</td>
                        <td>{{user.email}}</td>
                        <td>
                            <button class="btn btn-primary">编辑</button>
                            <button class="btn btn-danger">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<style scoped>

</style>
<script>
    export default {
        created(){
            this.$http.get("../data/user.json").then(res=>{
                this.users=res.body;
            })
            
        },
        data(){
            return {
                title:"首页",
                users:null
            }
        },
        methods:{

        },
        components:{

        }
    }
</script>