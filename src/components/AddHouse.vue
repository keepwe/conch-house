<template>
    <div class="addHouse">
      <header>
        <span class="iconfont icon-navbankicon" @click="goback()"></span>
        <span>我的房子</span>
        <span>&nbsp;</span>
      </header>
      <div class="add_desc">
        <h2>添加房屋资产</h2>
        <p>随时跟踪该房屋估值变动</p>
      </div>
      <div class="add_detail">
        <div class="add_msg">
          <!--小区名称-->
          <div class="bar_name">
            <span>小区名称</span>
            <span class="iconfont icon-fanhui"></span>
          </div>
          <!--面积-->
          <div class="bar_name">
            <span>面积</span>
            <p>
              <input type="text">
              平
            </p>
          </div>
          <!--户型-->
          <div class="bar_name">
            <span>户型</span>
            <span class="iconfont icon-fanhui"></span>
          </div>
          <!--朝向-->
          <div class="bar_name">
            <span>朝向</span>
            <span class="iconfont icon-fanhui"></span>
          </div>
          <!--楼层-->
          <div class="bar_name detail_ceng">
            <span>楼层</span>
            <span>
          <input type="text">层
          <input type="text">总层数
        </span>
          </div>
          <!--楼栋号-->
          <div class="bar_name">
            <span>楼栋号</span>
            <span>请选择
        <span class="iconfont icon-fanhui"></span></span>
          </div>
          <!--建筑类型-->
          <div class="bar_name">
            <span>建筑类型</span>
        <span class="iconfont icon-fanhui"></span>
          </div>
          <!--建筑年代-->
          <div class="bar_name">
            <span>建筑年代</span>
            <span>
              <input type="text">
              年
            </span>
          </div>
        </div>
        <div class="purpose">
          <p>添加后可以做什么</p>
        </div>
      </div>
      <div class="btn_box">
        <button>立即查看</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AddHouse",
      methods:{
        goback() {
          this.$router.back(-1);
        },
      }
    }
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.34rem;
  height: 0.88rem;
  padding: 0 0.5rem;
}
  .add_desc{
    text-align: center;
    background: #f2f2f2;
    height:2.6rem;
    padding-top: 0.8rem;
    box-sizing: border-box;
  }
.add_desc h2{
  font-size: 0.34rem;
}
.add_desc p{
  font-size: 0.22rem;
  color: #979797;
  margin-top: 0.32rem;
}
  .add_detail{
    padding: 0 0.5rem;
    background: #f2f2f2;
  }
.add_detail .add_msg{
  background: #fff;
}
.add_detail .add_msg .bar_name {
  display: flex;
  height: 1.1rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.32rem;
  padding: 0 0.3rem;
}

.add_detail .add_msg .bar_name span:nth-child(2) {
  font-size: 0.3rem;
  color: #7f7f7f;
}
.add_detail .add_msg .bar_name input{
  height: 1rem;
  font-size: 0.26rem;
  border: 0;
  outline: none;
  line-height: 1rem;
}
.add_detail .detail_ceng input{
  width: 1.32rem;
  text-indent: 0.4rem;
  height: 1.1rem;
  font-size: 0.26rem;
  border: 0;
  outline: none;
  line-height: 1.1rem;
}
  .purpose{
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.purpose p{
  font-size: 0.26rem;
  color: #979797;
  text-align: center;
  text-decoration: underline;
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
}
</style>
