<template>
  <div class="entrust_default">
    <div class="pic_box">
      <img src="static/images/tubiao/my_mywt_benben.png"/>
    </div>
    <p class="desc">暂无房源</p>
    <p class="desc">您还没有在海螺委托房源哦</p>
    <div class="btn_box">
      <router-link to="/fbfyMf">
        <span>去卖房</span>
      </router-link>
      <router-link to="/fbfy">
        <span>去出租</span>
      </router-link>
    </div>
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
  </div>
</template>

<script>
  export default {
    name: "EntrustDefault"
  }
</script>

<style scoped>
  .entrust_default {
    background: #fff;
    margin: 0 0.5rem;
  }

  .entrust_default .pic_box {
    display: flex;
    height: 3.1rem;
    justify-content: center;
    align-items: center;
  }

  .entrust_default .pic_box img {
    width: 1rem;
    height: 1.32rem;
  }

  .entrust_default .desc {
    font-size: 0.32rem;
    margin-bottom: 0.33rem;
    text-align: center;
  }

  .entrust_default .btn_box {
    display: flex;
    height: 1.4rem;
    justify-content: space-around;
    align-items: center;
  }

  .entrust_default .btn_box span {
    display: inline-block;
    width: 2.5rem;
    height: 0.82rem;
    line-height: 0.82rem;
    font-size: 0.34rem;
    color: #fff;
    background: #ff9722;
    border-radius: 0.4rem;
    text-align: center;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.82rem;
    margin: 1.9rem 0.77rem 0.24rem;
  }

  .title p {
    height: 1px;
    background: #797979;
    width: 1.23rem;
  }

  .title span {
    font-size: 0.34rem;
    color: #797979;
  }

  .lc_box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.2rem 0.78rem 0;
    text-align: center;
    padding-bottom: 1rem;
  }

  .lc_box p {
    background: url("../../static/images/tubiao/my_mywt_t1.png") center/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    margin: 0 auto;
  }

  .lc_box .cl_jiantou {
    height: 0.5rem;
  }

  .lc_box .cl_jiantou img {
    width: 0.66rem;
    height: 0.2rem;
  }

  .lc_box p img {
    width: 0.3rem;
    height: 0.3rem;
  }

  .lc_box span {
    font-size: 0.24rem;
    display: block;
    color: #797979;
    margin-top: 0.08rem;
  }
</style>
