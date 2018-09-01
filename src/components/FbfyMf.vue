<template>
  <div class="fbfy_box">
    <header>
      <p class="title">
        <span class="iconfont icon-navbankicon" @click="goback()"></span>
        <span>免费发布房源（<span class="fbfy_map">北京</span>）</span>
        <span><img src="static/images/tubiao/my_mywt_qcz_xx.png"/></span>
      </p>
    </header>
    <div class="fbfy_house_xinxi">
      <p class="bar_name">
        <span>小区名称</span>
        <span class="iconfont icon-fanhui"></span>
      </p>
      <p class="bar_name">
        <span>具体地址</span>
        <span class="iconfont icon-fanhui"></span>
      </p>
      <p class="bar_name">
        <span>期望售价</span>
        <input type="text" placeholder="请输入期望售价">
      </p>
    </div>
    <div class="fbfy_my_xinxi">
      <p class="bar_name">
        <span>称呼</span>
        <span>如何称呼您</span>
      </p>
      <p class="bar_name">
        <span>联系方式</span>
        <span>15837853537</span>
      </p>
    </div>
    <div class="fbfy_liucheng">
      <div class="title">
        <p></p>
        <span>房源发布流程</span>
        <p></p>
      </div>
      <div class="lc_box">
        <div>
          <p>
            <img src="static/images/tubiao/my_mywt_t22.png"/>
          </p>
          <span>线上发布</span>
        </div>
        <div class="cl_jiantou">
          <img src="static/images/tubiao/my_mywt_jt.png"/>
        </div>
        <div>
          <p>
            <img src="static/images/tubiao/my_mywt_t33.png"/>
          </p>
          <span>电话核实</span>
        </div>
        <div class="cl_jiantou">
          <img src="static/images/tubiao/my_mywt_jt.png"/>
        </div>
        <div>
          <p>
            <img src="static/images/tubiao/my_mywt_t11.png"/>
          </p>
          <span>房源上架</span>
        </div>
      </div>
      <div class="fabu">
        <router-link to="">
          <button>确认发布</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FbfyMf",
      methods: {
        goback() {
          this.$router.back(-1);
        }
      }
    }
</script>

<style scoped>
  .fbfy_box {
    height: 100%;
    background: #f2f2f2;
  }

  header{
    margin: 0 0.48rem;
  }

  .fbfy_box header .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.88rem;
    font-size: 0.34rem;
  }

  .fbfy_box header .title img {
    width: 0.44rem;
    height: 0.44rem;
  }
  .fbfy_house_xinxi{
    margin-top: 0.4rem;
    background: #fff;
  }
  .bar_name {
    display: flex;
    padding: 0 0.48rem;
    justify-content: space-between;
    height: 0.74rem;
    font-size: 0.28rem;
    line-height: 0.74rem;
    border-bottom: 1px solid #e5e5e5;
  }
  .bar_name input{
    height: 0.7rem;
    line-height: 0.7rem;
    border: 0;
    outline: none;
    text-align: right;
    font-size: 0.28rem;
  }
  .bar_name input::placeholder{
    color: #aaa;
  }
  .bar_name span:nth-child(2){
    color: #aaa;
  }
  .fbfy_my_xinxi{
    margin-top: 0.3rem;
    background: #fff;
  }
  .fbfy_liucheng{
    margin: 2.75rem 0.48rem 0;
  }
  .fbfy_liucheng .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.82rem;
    margin: 0 0.78rem;
  }

  .fbfy_liucheng .title p {
    height: 1px;
    background: #797979;
    width: 1.23rem;
  }

  .fbfy_liucheng .title span {
    font-size: 0.34rem;
    color: #797979;
  }
  .fbfy_liucheng .lc_box{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.2rem 0.78rem 0;
    text-align: center;
  }
  .fbfy_liucheng .lc_box p{
    background: url("../../static/images/tubiao/my_mywt_t1.png") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    margin: 0 auto;
  }
  .fbfy_liucheng .lc_box .cl_jiantou{
    height: 0.5rem;
  }
  .fbfy_liucheng .lc_box .cl_jiantou img{
    width: 0.66rem;
    height: 0.2rem;
  }
  .fbfy_liucheng .lc_box p img{
    width: 0.3rem;
    height: 0.3rem;
  }
  .fbfy_liucheng .lc_box span{
    font-size: 0.24rem;
    display: block;
    color: #797979;
    margin-top: 0.08rem;
  }
  .fabu{
    margin-top: 1.75rem;
  }
  .fabu button {
    width: 100%;
    height: 0.8rem;
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.8rem;
    text-align: center;
    border: 0;
    outline: none;
    background: #ff9722;
    border-radius: 0.4rem;

  }
</style>
