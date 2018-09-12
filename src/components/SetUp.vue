<template>
    <div class="setUp">
      <header>
        <span class="iconfont icon-navbankicon" @click="goback()"></span>
        <span>设置</span>
        <span>&nbsp;</span>
      </header>
      <div class="set_xitong">
        <router-link to="/msgSet">
        <div class="bar_name">
          <span>推送设置</span>
          <span class="iconfont icon-fanhui"></span>
        </div>
        </router-link>
        <div class="bar_name">
          <span>清理缓存</span>
          <span style="color: #000;font-size: 0.3rem">0.0M
          <span class="iconfont icon-fanhui"></span></span>
        </div>
        <div class="bar_name">
          <span>检查更新</span>
          <span class="iconfont icon-fanhui"></span>
        </div>
      </div>
      <div class="about_box">
        <div class="bar_name">
          <span>关于我们</span>
          <span class="iconfont icon-fanhui"></span>
        </div>
        <div class="bar_name">
          <span>去评分</span>
          <span class="iconfont icon-fanhui"></span>
        </div>
      </div>
      <div class="logout" @click="loginOut()" v-show="!token">
        退出登录
      </div>
    </div>
</template>

<script>
  import setCookie from "../js/setCookie"
  import getCookie from "../js/getCookie"
    export default {
        name: "SetUp",
      data(){
          return{
            token:true
          }
      },
      methods:{
        goback() {
          this.$router.back(-1);
        },
          loginOut(){
            setCookie("token","",-7);
            setCookie("uid","",-7);
            this.$router.push("/mine")
          }
      },
      mounted(){
        this.$nextTick(function () {
          this.token = getCookie("token");
          this.uid = getCookie("uid");
          if (this.token === "false") {
            this.token = false;
            this.uid = getCookie("uid");
          } else {
            this.token = true
          }
        })
      }
    }
</script>

<style scoped>
  .setUp{
    height: 100%;
    background: #f2f2f2;
  }
  .setUp header,.set_xitong,.about_box{
    margin-bottom: 0.32rem;
  }
  .setUp header{
    display: flex;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    font-size: 0.34rem;
    height: 0.88rem;
    padding: 0 0.5rem;
  }

  .set_xitong .bar_name,.about_box .bar_name{
    display: flex;
    height: 1.1rem;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    font-size: 0.32rem;
    padding: 0 0.5rem;
  }
  .set_xitong .bar_name span:nth-child(2) span{
    margin-left: 0.7rem;
  }
  .logout{
    background: #fff;
    height: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.32rem;
  }
</style>
