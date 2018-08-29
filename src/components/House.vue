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
      <div class="baozheng">
        <div>
          <h3 class="bao1">真实房源，假一赔百元</h3>
          <p class="bao2">真实存在，真实销售真实价格，真实图片</p>
        </div>
        <div>
          <img src="../../static/images/tubiao/esf_house_bao.png" height="48" width="44"/></div>
      </div>
      <div class="vr">
        <div>
          <h3 class="vr1">VR带看</h3>
          <p class="vr2">随时随地，在线带看，省时省力</p>
        </div>
        <div>
          <span>立即带看</span>
        </div>
      </div>
      <div class="tags">
        <span>满五年</span>
        <span>VR房源</span>
        <span>地铁附近</span>
        <span>随时可看</span>
      </div>
      <div class="house_desc">
        <table>
          <tr>
            <td>单价</td>
            <td class="price_num">59700/平</td>
            <td>挂牌</td>
            <td class="gua_date">2017-10-18</td>
          </tr>
          <tr>
            <td>朝向</td>
            <td class="chaoxiang">太阳以西</td>
            <td>楼层</td>
            <td class="floor">底层/6层</td>
          </tr>
          <tr>
            <td>楼型</td>
            <td class="build_type">板楼</td>
            <td>电梯</td>
            <td class="elevator">无</td>
          </tr>
          <tr>
            <td>装修</td>
            <td class="zhuangxiu">精装</td>
            <td>年代</td>
            <td class="build_date">1994年</td>
          </tr>
          <tr>
            <td>用途</td>
            <td class="purpose">居住</td>
            <td>权属</td>
            <td class="quanshu">商品房</td>
          </tr>
          <tr>
            <td>预算</td>
            <td class="budget" colspan="3">首付196万，月付19734元</td>
          </tr>
          <tr>
            <td>小区</td>
            <td class="xq_name" colspan="3">南新园</td>
          </tr>
        </table>
      </div>
      <div class="more">
        <button></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "House",
    methods: {
      goback() {
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>
  header {
    height: 4.6rem;
    background-image: url("../../static/images/picture/esf_house_tu.jpg");
    background-size: cover;
  }

  .box, .main {
    margin: 0 0.5rem;
  }

  header .box {
    display: flex;
    height: 1rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
  }

  header .icon-navbankicon {
    font-size: 0.42rem;
  }

  header .box p span {
    font-size: 0.42rem;
    margin-left: 0.28rem;
  }

  .main .desc {
    font-size: 0.33rem;
    min-height: 1.12rem;
    line-height: 0.48rem;
    margin-top: 0.3rem;
  }

  .main .detail {
    margin-top: 0.3rem;
    display: flex;
    font-size: 0;
    justify-content: space-between;
  }

  .main .detail .price, .main .detail .type {
    border-right: 1px solid rgba(0, 0, 0, .2);
    width: 30%;
    height: 0.68rem;
  }

  .main .detail .area {
    height: 0.68rem;
  }

  .main .detail {
    height: 0.98rem;
  }

  .main .detail .title {
    font-size: 0.22rem;
    color: #aaa;
  }

  .main .detail .sum {
    font-size: 0.24rem;
    color: #ff9722;
    margin-top: 0.2rem;
  }

  .baozheng, .vr {
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #CCC;
    overflow: hidden;
  }

  .baozheng .bao1, .vr1 {
    font-size: 0.28rem;
  }

  .baozheng .bao2, .vr2 {
    font-size: 0.23rem;
    margin-top: 0.2rem;
    color: #aaa;
  }

  .vr span {
    display: flex;
    border-radius: 0.2rem;
    border: 1px solid #ff9722;
    color: #ff9722;
    width: 1.3rem;
    height: 0.4rem;
    font-size: 0.24rem;
    justify-content: center;
    align-items: center;
  }

  .tags {
    height: 0.7rem;
    margin-top: 0.3rem;
  }

  .tags span {
    display: inline-block;
    padding: 0.09rem 0.15rem;
    font-size: 0.22rem;
    background: #ff9722;
    margin-right: 0.1rem;
    color: #fff;
  }

  .house_desc{
    height: 4.17rem;
  }
  .house_desc table{
    height: 100%;
    width: 100%;
  }
  .house_desc table tr td:nth-child(1), .house_desc table tr td:nth-child(3){
    color: #aaa;
    font-size: 0.28rem;
    width: 0.9rem;
  }
  .house_desc table tr td:nth-child(2),.house_desc table tr td:nth-child(4){
    font-size: 0.27rem;
  }
  .house_desc table tr td:nth-child(2){
    width: 2.5rem;
  }
  .budget,.xq_name{
    color: #ff9722;
  }
</style>
