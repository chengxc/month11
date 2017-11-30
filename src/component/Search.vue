<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{title}}</div>
        <div class="panel-body">
            <form class="form-inline">
                <div class="form-group">
                    <label class="control-label">商品名称</label>
                    <input type="text" class="form-control">
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
  data() {
    return {
        title:"商品搜索"
    };
  },
  methods: {},
  components: {}
};
</script>