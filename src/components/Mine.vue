<template>
  <div class="box">
    <div class="my_header">
      <div v-if="token">
        <h1 class="my_login">
          <router-link to="/login"><span>登录</span></router-link>
          /
          <router-link to="register"><span>注册</span></router-link>
        </h1>
        <p>注册手机号不会透露给经纪人</p>
      </div>
      <div class="my_logined" v-else>
        <router-link to="/myMsg">
          <h1 class="my_login">
            <span>{{uid}}</span>
          </h1>
          <p>查看并编辑个人资料</p>
          <span class="touxiang"></span>
        </router-link>
      </div>
    </div>
    <div class="my_jilu">
      <div class="record">
        <h2>0</h2>
        <span>看房记录</span>
      </div>
      <!--我的委托-->
      <router-link to="/myEntrust">
        <div class="entrust">
          <h2>0</h2>
          <span>我的委托</span>
        </div>
      </router-link>
      <router-link to="/mydyss" tag="div" class="condition">
        <h2>0</h2>
        <span>搜索条件</span>
      </router-link>
    </div>
    <div class="my_gz">
      <p class="gz_title">我关注的</p>
      <div class="my_gz_list">
        <a>
          <img src="static/images/tubiao/my_login_esf.png"/>
          <span>二手房 （<em class="my_ershou_num">0</em>）</span>
        </a>
        <a>
          <img src="static/images/tubiao/my_login_xf.png"/>
          <span>新房 （<em class="my_xin_num">0</em>）</span>
        </a>
        <a>
          <img src="static/images/tubiao/my_login_zf.png"/>
          <span>租房 （<em class="my_zu_num">0</em>）</span>
        </a>
        <a>
          <img src="static/images/tubiao/my_login_xq.png"/>
          <span>小区 （<em class="my_xiao_num">0</em>）</span>
        </a>
        <router-link to="/myzx" tag="a">
          <img src="static/images/tubiao/my_login_zx.png"/>
          <span>装修(<em class="my_zhuang_num">0</em>)</span>
        </router-link>
      </div>
      <div class="red_bao">
        <img src="static/images/picture/my_login_hb.png"/>
      </div>
    </div>
    <div class="my_house">
      <p class="house_title">我的房子</p>
      <router-link to="/addHouse">
        <div class="my_house_add">
          <div class="fl ">
            <h3>添加房屋资产</h3>
            <p>添加房屋资产关注房屋估值变化</p>
          </div>
          <div class="fr ">
            <span>立即添加</span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="my_items">
      <router-link to="/myjjr" tag="div" class="item">
        <p class="fl">我的经纪人</p>
        <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
      </router-link>
      <router-link to="/myyhj" tag="div" class="item">
        <p class="fl">我的租房优惠券</p>
        <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
      </router-link>
      <div class="item">
        <p class="fl">我的租房额度</p>
        <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
      <div class="item" @click="tap()">
        <p class="fl">联系客服</p>
        <span class="fr">
          <em>10226088</em>
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
      <!--系统设置-->
      <router-link to="/setUp">
        <div class="item">
          <p class="fl">系统设置</p>
          <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
        </div>
      </router-link>
    </div>
    <v-footer></v-footer>
    <v-mot ref="child"></v-mot>
  </div>
</template>

<script>
  import Footer from "./Footer"
  import Mot from "./Mot"
  import getCookie from "../js/getCookie"

  export default {
    name: "Mine",
    data() {
      return {
        token: false,
        uid: "",
      }
    },
    components: {
      "v-footer": Footer,
      "v-mot": Mot,
    },
    methods: {
      tap() {
        this.$refs.child.isShow = true;
      }
    },
    mounted() {
      this.$nextTick(function () {
//      this.token = getCookie("token");
//      this.uid = getCookie("uid");
				var stroage = window.localStorage;
				this.token = stroage.token;
        this.uid = stroage.name;
        if (this.token === "false") {
          this.token = false;
//        this.uid = getCookie("uid");
          this.uid = stroage.name;
        } else {
          this.token = true
        }
      })
    }
  }
</script>

<style scoped>
  .box {
    margin: 0 0.49rem 1.05rem 0.51rem;
  }

  /*头*/
  .my_header {
    margin-top: 1.05rem;

  }

  .my_header .my_login {
    font-size: 0.46rem;
  }

  .my_logined {
    position: relative;
  }

  .my_logined .touxiang {
    width: 1.4rem;
    height: 1.4rem;
    position: absolute;
    right: 0.3rem;
    top: -0.2rem;
    border-radius: 0.7rem;
    background: url("../../static/images/tubiao/pic2.png") center/110%;
  }

  .my_header p {
    font-size: 0.23rem;
    opacity: .5;
    margin-top: 0.34rem;
  }

  /*记录委托条件*/
  .my_jilu {
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    margin-top: 0.8rem;
  }

  .my_jilu div h2 {
    font-size: 0.46rem;
  }

  .my_jilu div span {
    font-size: 0.28rem;
    opacity: .5;
  }

  /*我的关注,我的房子*/
  .my_gz, .my_house {
    margin: 0.6rem auto 0.06rem;
  }

  .my_gz .gz_title, .my_house .house_title {
    font-size: 0.45rem;
    font-weight: 100;
    margin-bottom: 0.39rem;
  }

  .my_gz_list {
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
  }

  .my_gz_list img {
    width: 0.45rem;
    height: 0.46rem;
    margin: 0 auto 0.2rem;
  }

  .my_gz_list span {
    display: block;
    text-align: center;
    font-size: 0.24rem;
    opacity: .5;
  }

  .my_gz_list em {
    font-style: normal;
  }

  .red_bao img {
    width: 6.27rem;
    height: 1.72rem;
    margin: 0.56rem auto 0.66rem;
  }

  .my_house_add {
    padding: 0.57rem 0.3rem 0;
    height: 1.98rem;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 0 0.04rem 0.1rem 0.04rem rgba(0, 0, 0, 0.12);
    overflow: hidden;
  }

  .fl h3 {
    font-size: 0.36rem;
    margin-bottom: 0.18rem;
  }

  .fl p {
    font-size: 0.24rem;
    opacity: .5;
  }

  .fr span {
    display: inline-block;
    margin-top: 0.24rem;
    width: 1.33rem;
    height: 0.57rem;
    border: 2px solid rgba(255, 144, 18, 1);
    border-radius: 3px;
    font-size: 0.24rem;
    font-weight: 100;
    color: rgba(255, 144, 18, 1);
    line-height: 0.57rem;
    text-align: center;
  }

  .my_items .item {
    font-size: 0.32rem;
    overflow: hidden;
    height: 1.08rem;
    border-bottom: 1px solid #C0D3AC;
  }

  .my_items .item .fl {
    height: 1.08rem;
    line-height: 1.08rem;
    margin-left: 0.02rem;
    vertical-align: middle;
  }

  .my_items .item .fr {
    display: inline-block;
    height: 1.08rem;
    margin-right: 0.2rem;
    line-height: 1.08rem;
    font-size: 0.32rem;
    vertical-align: baseline;
  }

  .my_items .item .fr em {
    font-style: normal;
    opacity: .5;
  }

  .my_items .item .fr i {
    font-size: 0.32rem;
  }
</style>
