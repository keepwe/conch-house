<template>
  <div class="box">
    <div class="my_header">
      <h1 class="my_login"><router-link to="/login"><span>登录</span></router-link> / <router-link to="register"><span>注册</span></router-link></h1>
      <p>注册手机号不会透露给经纪人</p>
    </div>
    <div class="my_jilu">
      <div class="record">
        <h2>0</h2>
        <span>看房记录</span>
      </div>
      <div class="entrust">
        <h2>0</h2>
        <span>我的委托</span>
      </div>
      <div class="condition">
        <h2>0</h2>
        <span>搜索条件</span>
      </div>
    </div>
    <div class="my_gz">
      <p class="gz_title">我关注的</p>
      <div class="my_gz_list">
        <a href="">
          <img src="../../static/images/tubiao/my_login_esf.png"/>
          <span>二手房 （<em class="my_ershou_num">0</em>）</span>
        </a>
        <a href="">
          <img src="../../static/images/tubiao/my_login_xf.png"/>
          <span>新房 （<em class="my_xin_num">0</em>）</span>
        </a>
        <a href="">
          <img src="../../static/images/tubiao/my_login_zf.png"/>
          <span>租房 （<em class="my_zu_num">0</em>）</span>
        </a>
        <a href="">
          <img src="../../static/images/tubiao/my_login_xq.png"/>
          <span>小区 （<em class="my_xiao_num">0</em>）</span>
        </a>
        <a href="">
          <img src="../../static/images/tubiao/my_login_zx.png"/>
          <span>装修(<em class="my_zhuang_num">0</em>)</span>
        </a>
      </div>
      <div class="red_bao">
        <img src="../../static/images/picture/my_login_hb.png"/>
      </div>
    </div>
    <div class="my_house">
      <p class="house_title">我的房子</p>
      <div class="my_house_add">
        <div class="fl ">
          <h3>添加房屋资产</h3>
          <p>添加房屋资产关注房屋估值变化</p>
        </div>
        <div class="fr ">
          <span>立即添加</span>
        </div>
      </div>
    </div>
    <div class="my_items">
     <div class="item">
       <p class="fl">我的经纪人</p>
       <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
     </div>
      <div class="item">
        <p class="fl">我的租房优惠券</p>
        <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
      <div class="item">
        <p class="fl">我的租房额度</p>
        <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
      <div class="item">
        <p class="fl">联系客服</p>
        <span class="fr">
          <em>10226088</em>
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
      <div class="item">
        <p class="fl">系统设置</p>
        <span class="fr">
         <i class="iconfont icon-fanhui"></i>
       </span>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Footer from "./Footer"
  export default{
    name:"Mine",
    components:{
      "v-footer":Footer
    }
  }
</script>

<style scoped>
  .box{
    margin: 0 49px 105px 51px;
  }
  /*头*/
.my_header{
  margin-top: 105px;
}
  .my_header .my_login{
    font-size: 46px;
  }
  .my_header p{
    font-size: 23px;
    opacity: .5;
    margin-top: 34px;
  }
  /*记录委托条件*/
  .my_jilu{
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    margin-top: 80px;
  }
  .my_jilu div h2{
    font-size: 46px;
  }
  .my_jilu div span{
    font-size: 28px;
    opacity: .5;
  }
  /*我的关注,我的房子*/
  .my_gz,.my_house{
    margin: 60px auto 6px;
  }
  .my_gz .gz_title,.my_house .house_title{
    font-size: 45px;
    font-weight: 100;
    margin-bottom: 39px;
  }
  .my_gz_list{
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
  }
  .my_gz_list img{
    width: 45px;
    height: 46px;
    margin: 0 auto 20px;
  }
  .my_gz_list span{
    display: block;
    text-align: center;
    font-size: 24px;
    opacity: .5;
  }
  .my_gz_list em{
    font-style: normal;
  }
  .red_bao img{
    width: 627px;
    height: 172px;
    margin: 56px auto 66px;
}
  .my_house_add{
    padding: 57px 30px 0;
    height: 198px;
    box-sizing: border-box;
    border-radius:3px;
    box-shadow: 0px 4px 10px 4px rgba(0,0,0,0.12);
    overflow: hidden;
  }
  .fl h3{
    font-size: 36px;
    margin-bottom: 18px;
  }
  .fl p{
    font-size: 24px;
    opacity: .5;
  }
  .fr span{
    display: inline-block;
    margin-top: 24px;
    width:133px;
    height:57px;
    border:2px solid rgba(255,144,18,1);
    border-radius:3px;
    font-size:24px;
    font-weight:100;
    color:rgba(255,144,18,1);
    line-height:57px;
    text-align: center;
  }
  .my_items .item{
    font-size: 34px;
    overflow: hidden;
    height: 108px;
    border-bottom: 1px solid #C0D3AC;
  }
  .my_items .item .fl{
    height: 108px;
    line-height: 108px;
    margin-left: 2px;
    vertical-align: middle;
  }
  .my_items .item .fr{
    display: inline-block;
    height: 108px;
    margin-right: 20px;
    line-height: 108px;
    font-size: 32px;
    vertical-align: baseline;
  }
  .my_items .item .fr em{
    font-style: normal;
    opacity: .5;
  }
  .my_items .item .fr i{
    font-size: 32px;
  }
</style>
