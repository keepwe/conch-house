<template>
  <div class="fwgjDetail">
    <header>
      <span class="iconfont icon-navbankicon" @click="goback()"></span>
      <span>房屋估价</span>
      <span>估价历史</span>
    </header>
    <div class="detail_box">
      <div class="bar_name">
        <span>小区名称</span>
        <span>输入小区名称
        <span class="iconfont icon-fanhui"></span></span>
      </div>
      <div class="bar_name detail_size">
        <span>面积</span>
        <p>
          <input type="text" placeholder="请输入大于0的数字">
          平米
        </p>
      </div>
      <div class="bar_name detail_size">
        <span>户型</span>
        <span>请选择
        <span class="iconfont icon-fanhui"></span></span>
      </div>
      <div class="bar_name detail_size">
        <span>朝向</span>
        <span>北
        <span class="iconfont icon-fanhui"></span></span>
      </div>
      <div class="bar_name detail_ceng">
        <span>楼层</span>
        <span>
          <input type="text" placeholder="请输入">层
          <input type="text" placeholder="请输入">总层数
        </span>
      </div>
    </div>
    <div class="btn_box">
      <button>查看估价结果</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FwgujiaDetail",
    methods: {
      goback() {
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>
  .fwgjDetail {
    margin-left: 0.5rem;
  }

  .fwgjDetail header {
    background: #fff;
    display: flex;
    padding-right: 0.5rem;
    font-size: 0.36rem;
    justify-content: space-between;
    align-items: center;
    height: 0.9rem;
  }

  .fwgjDetail .bar_name {
    display: flex;
    height: 1.1rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    font-size: 0.32rem;
    padding-right: 0.5rem;
  }

  .fwgjDetail .bar_name span:nth-child(2) {
    font-size: 0.3rem;
    color: #7f7f7f;
  }
  .fwgjDetail .detail_ceng{
    border: 0;
    font-size: 0.28rem;
    color: #000;
  }
  .fwgjDetail .detail_ceng input{
    width: 1.32rem;
    text-indent: 0.4rem;
    height: 1.1rem;
    font-size: 0.26rem;
    border: 0;
    outline: none;
    line-height: 1.1rem;
  }
  .fwgjDetail .detail_ceng input::placeholder{
    color: #7f7f7f;
  }
  .fwgjDetail .detail_ceng span:nth-child(2){
    color: #000;
    font-size: 0.26rem;
  }
  .fwgjDetail .detail_size{
    font-size: 0.3rem;
  }
  .fwgjDetail .detail_size span:nth-child(2){
    font-size: 0.26rem;
  }
  .fwgjDetail .detail_size p{
    font-size: 0.26rem;
  }
  .fwgjDetail .detail_size input{
    height: 1rem;
    font-size: 0.26rem;
    text-align: right;
    padding-right: 0.2rem;
    border: 0;
    outline: none;
    line-height: 1rem;
  }
  .btn_box {
    margin-top: 0.2rem;
    padding-right: 0.5rem;
  }

  .btn_box button {
    width: 100%;
    height: 0.82rem;
    font-size: 0.32rem;
    color: #fff;
    background: #ff9722;
    border: 0;
    outline: none;
    line-height: 0.82rem;
    border-radius: 0.4rem;
  }
</style>
