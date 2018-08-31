<template>
  <div class="gujia_box">
    <header>
      <span class="iconfont icon-navbankicon" @click="goback()"></span>
      <span>房屋估价</span>
      <span>估价历史</span>
    </header>
    <div class="main">
      <div class="jilu">
        <h2>我的房子值多少钱</h2>
        <p>累计超过12345671次估价请求</p>
      </div>
      <div class="gujia_input">
        <div class="name">
          <img src="static/images/tubiao/my_fwgj_z1.png" width="30" height="38"/>
          <input type="text" placeholder="输入小区名称">
          <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="menpai">
          <img src="static/images/tubiao/my_fwgj_z2.png" width="30" height="20"/>
          <input type="text" placeholder="选择楼栋门牌">
          <span class="iconfont icon-fanhui"></span>
        </div>
      </div>
      <div class="btn_box">
        <button>开始估价</button>
      </div>
      <div class="footer">
        <div class="title">
          <p></p>
          <span>不清楚门牌号？</span>
          <p></p>
        </div>
        <div class="gujia_icon">
          <img src="static/images/tubiao/my_fwgj_z3.png"/>
        </div>
        <p>输入信息估价</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Fwugujia",
    methods: {
      goback() {
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>
  .gujia_box, .main {
    height: 100%;
    background: #f2f2f2;
  }

  .gujia_box header {
    background: #fff;
    display: flex;
    padding: 0 0.5rem;
    font-size: 0.36rem;
    justify-content: space-between;
    align-items: center;
    height: 0.9rem;
  }

  .main {
    padding: 0 0.5rem;
  }

  .main .jilu {
    text-align: center;
    margin-bottom: 1rem;
  }

  .main .jilu h2 {
    margin-top: 1.24rem;
    font-size: 0.42rem;
    font-weight: 500;
  }

  .main .jilu p {
    font-size: 0.22rem;
    color: #919191;
    margin-top: 0.2rem;
  }

  .gujia_input, .btn_box {
    margin: 0 0.38rem;
  }

  .gujia_input .name {
    background: #fff;
    padding: 0 0.43rem;
    height: 0.7rem;
    border-bottom: 1px solid #aaa;
  }

  .gujia_input .menpai {
    background: #fff;
    padding: 0 0.43rem;
    height: 0.7rem;
  }

  .gujia_input .name img {
    margin-top: 0.12rem;
    vertical-align: top;
  }

  .gujia_input .menpai img {
    margin-bottom: 0.05rem;
    vertical-align: middle;
  }

  .gujia_input input {
    border: 0;
    width: 3.7rem;
    outline: none;
    height: 0.66rem;
    line-height: 0.66rem;
    font-size: 0.28rem;
    vertical-align: middle;
    margin-left: 0.2rem;
  }

  .gujia_input span {
    display: inline-block;
    width: 0.49rem;
    text-align: right;
    vertical-align: middle;
  }

  .btn_box {
    margin-top: 0.47rem;
  }

  .btn_box button {
    width: 100%;
    height: 0.82rem;
    font-size: 0.32rem;
    color: #fffefe;
    background: #ff9722;
    border: 0;
    outline: none;
    line-height: 0.82rem;
    border-radius: 0.4rem;
  }

  .main .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.82rem;
  }

  .main .title p {
    height: 1px;
    background: #e2e2e2;
    width: 2.37rem;
  }

  .main .title span {
    font-size: 0.23rem;
    color: #797979;
  }
  .footer{
    margin-top: 2.8rem;
  }
  .footer .gujia_icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.85rem;
    height: 0.85rem;
    background: #FFF;
    border-radius: 50%;
    margin: 0.4rem auto 0;
  }
  .footer .gujia_icon img{
    width: 0.26rem;
    height: 0.32rem;
  }
  .footer p{
    text-align: center;
    font-size: 0.26rem;
    margin-top: 0.12rem;
  }
</style>
