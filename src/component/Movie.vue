<template>
  <div>
    <h3>豆瓣电影</h3>
    <div class="current-container">
      <h4>正在热映</h4>
      <div class="block">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 20" :key="item">
            <h3>
              <div>
                <img :src=" currents[item].images.small " alt="">
              </div>
              <div>
                <img :src=" currents[item+1].images.small " alt="">
              </div>
              <div>
                <img :src=" currents[item+2].images.small " alt="">
              </div>
              <div>
                <img :src=" currents[item+3].images.small " alt="">
              </div>
              <div>
                <img :src=" currents[item+4].images.small " alt="">
              </div>
            </h3>
            
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .el-carousel__container{
    text-align: center;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
<script>
  export default {
    data() {
      return {
        //接口地址
        movieUrl: this.$store.state.doubanUrl + "/movie",
        //正在热映
        currents: []
      };
    },
    methods: {},
    components: {},
    created() {
      this.$http
        .jsonp(this.movieUrl + "/in_theaters?city=深圳")
        .then(res => {
          this.currents = res.body.subjects;
        })
    }
  }
</script>