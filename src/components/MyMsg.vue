<template>
  <div class="myMsg_box">
    <header>
      <span class="iconfont icon-navbankicon" @click="goback()"></span>
      <span>我的个人信息</span>
      <span>&nbsp;</span>
    </header>
    <div class="myMsg_list">
        <div class="item">
          <p class="fl">头像</p>
          <span class="fr">
            <img src="static/images/tubiao/pic2.png" alt="">
         <i class="iconfont icon-fanhui"></i>
       </span>
        </div>
      <div class="item">
        <p class="fl">名称</p>
        <span class="fr">
          <em>15837853537</em>
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
      <div class="item">
        <p class="fl">手机号</p>
        <span class="fr">
          <em>158******37</em>
          <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
      <div class="item">
        <p class="fl">密码</p>
        <span class="fr">
          <em>设置密码</em>
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyMsg",
      methods:{
        goback() {
          this.$router.back(-1);
        },
      }
    }
</script>

<style scoped>
  .myMsg_box{
    height: 100vh;
    background: #f2f2f2;
  }
  header{
    text-align: center;
    height: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.36rem;
    background: #fff;
    padding: 0 0.5rem;
    margin-bottom: 0.42rem;
  }
  .myMsg_list{
    background: #fff;
    width:100%;
  }
  .myMsg_list .item{
    margin-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.32rem;
    overflow: hidden;
    height: 1.08rem;
    border-bottom: 1px solid #C0D3AC;
  }
  .myMsg_list .item .fl {
    height: 1.08rem;
    line-height: 1.08rem;
    margin-left: 0.02rem;
    vertical-align: middle;
  }
  .myMsg_list .item .fr {
    display: inline-block;
    height: 1.08rem;
    line-height: 1.08rem;
    font-size: 0.32rem;
    vertical-align: baseline;
  }
  .myMsg_list .item .fr em {
    font-style: normal;
    font-size: 0.26rem;
    opacity: .5;
    margin-right: 0.3rem
  }
  .myMsg_list .item .fr img{
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 0.3rem;
  }
  .myMsg_list .item .fr i {
    font-size: 0.32rem;
    opacity: .3;
  }
</style>
