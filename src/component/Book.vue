<template>
  <div>图书。。。</div>
</template>
<style scoped>

</style>
<script>
    export default {
      data(){
        return {
          bookUrl:this.$store.state.doubanUrl+"/book"
        };
      },
      methods:{

      },
      components:{

      },
      created(){
        this.$http
          .jsonp(this.bookUrl+"/search?tag=科幻")
          .then((res)=>{
            console.log(res.body);
          })
      }
    }
</script>