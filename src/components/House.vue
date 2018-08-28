<template>
    <div class="house">
      <header>
        <div class="box">
          <span class="iconfont icon-navbankicon" @click="goback()"></span>
          <p>
            <strong><span class="iconfont icon-fenxiang"></span></strong>
            <span class="iconfont icon-heart"></span>
            <span class="iconfont icon-xiaoxi2"></span>
          </p>
        </div>
      </header>
      <div class="main">
        <h2 class="desc">满五年，业主无其他房产。低楼层，精装修，看房随时</h2>
        <div class="detail">
          <div class="price">
            <p class="title">售价</p>
            <p class="sum">405万</p>
          </div>
          <div class="type">
            <p class="title">房型</p>
            <p class="sum">405万</p>
          </div>
          <div class="area">
            <p class="title">建筑面积</p>
            <p class="sum">405万</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "House"
    }
</script>

<style scoped>
header{
  height: 4.6rem;
  background-image: url("../../static/images/picture/esf_house_tu.jpg");
  background-size: cover;
}
  .box,.main{
    margin: 0 0.5rem;
  }
  header .box{
    display: flex;
    height: 1rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
  }
  header .icon-navbankicon{
    font-size: 0.42rem;
  }
header .box p span{
  font-size: 0.42rem;
  margin-left: 0.28rem;
}
  .main .desc{
    font-size: 0.34rem;
    min-height: 1.12rem;
    line-height: 0.48rem;
    margin-top: 0.3rem;
  }
  .main .detail{
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
  }
</style>
