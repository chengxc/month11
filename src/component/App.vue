<template>
  <div class="row">
      <div class="col-md-2 left-bar">
            <div class="list-group">
                <router-link to="/home" class="list-group-item active">首页</router-link>
                <router-link to="/search" class="list-group-item">搜索</router-link>
                <router-link to="/personal" class="list-group-item">个人中心</router-link>
            </div>

      </div>
      <div class="col-md-10 right-content">
          <div class="panel panel-default">
              <div class="panel-heading"></div>
              <div class="panel-body">
                    <button type="button" class="btn btn-default" aria-label="Left Align">
                        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                    </button>
              </div>
          </div>
          <router-view></router-view>

      </div>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>