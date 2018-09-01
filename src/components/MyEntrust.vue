<template>
    <div class="myEntrust">
      <header>
        <span class="iconfont icon-navbankicon" @click="goback()"></span>
        <span>管理委托</span>
        <span>
          <img src="static/images/tubiao/my_mywt_xx.png"/>
        </span>
      </header>
      <div class="entrust_list">
        <EntrustDefault></EntrustDefault>
      </div>
    </div>
</template>

<script>
  import EntrustDefault from "./EntrustDefault"
    export default {
        name: "MyEntrust",
      methods:{
          goback(){
            this.$router.back(-1);
          }
      },
      components:{EntrustDefault},
    }
</script>

<style scoped>
  .myEntrust{
    height: 89.5%;
  }
  header {
    background: #fff;
    display: flex;
    font-size: 0.36rem;
    justify-content: space-between;
    align-items: center;
    height: 0.9rem;
    margin: 0 0.5rem;
  }
  header img{
    width: 0.4rem;
  }
  .entrust_list{
    height: 100%;
    background: #f2f2f2;
    padding-top: 0.5rem;
  }

</style>
