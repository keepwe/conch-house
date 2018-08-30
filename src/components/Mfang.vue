<template>
	<div class="mf_box">
		<header>
      <p class="title">
        <span class="iconfont icon-navbankicon" @click="goback()"></span>
        <span>卖房</span>
        <span>咨询客服</span>
      </p>
      <div>
        <h2>帮你省心高效卖房</h2>
        <p>专业估价·优势经纪人·免费服务</p>
      </div>
    </header>
    <div class="main">
      <div class="gujia_zixun">
        <div class="gujia">
          <img src="../../static/images/tubiao/index_fwgz.png"/>
          <p>房屋估价</p>
        </div>
        <div class="zixun">
          <img src="../../static/images/tubiao/zf_lianxi.jpg"/>
          <p>咨询经纪人</p>
        </div>
      </div>
      <div class="fgx"></div>
      <div class="liucheng">
        <div class="title">
          <p></p>
          <span>卖房流程</span>
          <p></p>
        </div>
        <div class="lc_content">
          <div>
            <img src="../../static/images/tubiao/sale_fbfy.png"/>
            <p>发布房源</p>
          </div>
          <div>
            <img src="../../static/images/tubiao/sale_heshi.png"/>
            <p>电话核实</p>
          </div>
          <div>
            <img src="../../static/images/tubiao/sale_fwsk.png"/>
            <p>房屋实勘</p>
          </div>
          <div>
            <img src="../../static/images/tubiao/sale_jilv.png"/>
            <p>经纪人卖房</p>
          </div>
          <div>
            <img src="../../static/images/tubiao/sale_jrmf.png"/>
            <p>成交过户</p>
          </div>
        </div>
      </div>
      <div class="fgx"></div>
      <div class="jieshao">
        <div class="title">
          <p></p>
          <span>海螺找房经纪人卖房服务介绍</span>
          <p></p>
        </div>
        <div class="js_item js_xbj">
          <h2>专业经纪人团队</h2>
          <p>政策咨询，房屋定价，专业带看</p>
          <img src="../../static/images/picture/sale_p3.png" class="sale1"/>
        </div>
        <div class="js_item js_xbj">
          <h2>免费房屋实勘</h2>
          <p>高清实勘拍照，展示房屋精彩一面</p>
          <img src="../../static/images/picture/sale_p1.png" class="sale2"/>
        </div>
        <div class="js_item">
          <h2>丰富买家资源</h2>
          <p>全国线下14万+专业经纪人，线上千万级浏览量</p>
          <img src="../../static/images/picture/sale_p2.png" class="sale3"/>
        </div>
      </div>
      <div class="fabu">
        <button>发布房源</button>
      </div>
    </div>
	</div>
</template>

<script>
	export default{
		name:"Mfang",
    methods:{
		  goback(){
		    this.$router.back(-1);
      }
    }
	}
</script>

<style scoped>
  .mf_box header{
    padding: 0 0.5rem;
    height: 4.3rem;
    background: url("../../static/images/picture/mf_banner.jpg") -1.36rem -1.80rem no-repeat;
  }
  .mf_box header .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.88rem;
    font-size: 0.34rem;
    color: #fff;
  }
  .mf_box header .title span:nth-child(1){
    width: 23%;
  }
  .mf_box header div{
    color: #fff;
    text-align: center;

  }
  .mf_box header div h2{
    margin-top: 0.6rem;
    font-size: 0.4rem;
  }
  .mf_box header div p{
    font-size: 0.24rem;
    margin-top: 0.1rem;
    color: rgba(255,255,255,0.6);
  }
  .gujia_zixun,.liucheng,.fabu,.jieshao{
    margin: 0 0.5rem;
  }
  .mf_box .main .gujia_zixun{
    display: flex;
    height: 1.97rem;
    text-align: center;
    justify-content: space-around;
    align-items: center;
  }
  .mf_box .main .gujia_zixun img{
    width: 0.88rem;
    height: 0.88rem;
  }
  .mf_box .main .gujia_zixun p{
    font-size: 0.33rem;
    font-weight: 700;
    margin-top: 0.18rem;
  }
  .mf_box .main .fgx{
    border-bottom: 0.3rem solid #f2f2f2;
  }
  .mf_box .main .liucheng .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.82rem;
  }
  .mf_box .main .liucheng .title p{
    height: 1px;
    background: #e2e2e2;
    width: 2.37rem;
  }
  .mf_box .main .liucheng .title span{
    font-size: 0.23rem;
    color: #b2b2b2;
  }
  .mf_box .main .liucheng .lc_content{
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;

  }
  .mf_box .main .liucheng .lc_content img{
    width: 0.4rem;
    height: 0.4rem;
  }
  .mf_box .main .liucheng .lc_content p{
    font-size: 0.24rem;
    color: #7f7f7f;
    font-weight: 700;
    margin: 0.22rem 0 0.39rem 0;
  }
  .jieshao .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.82rem;
  }
  .jieshao .title p{
    height: 1px;
    background: #e2e2e2;
    width: 1.34rem;
  }
  .jieshao .title span{
    font-size: 0.23rem;
    color: #b2b2b2;
  }
  .jieshao .js_item{
    text-align: center;
  }
  .jieshao .js_item h2{
    font-size: 0.36rem;
    font-weight: 700;
    margin-bottom: 0.16rem;
  }
  .jieshao .js_item p{
    font-size: 0.26rem;
    color: #7f7f7f;
    margin-bottom: 0.44rem;
  }
  .jieshao .js_item .sale1{
    width: 4.53rem;
  }
  .jieshao .js_item .sale2{
    width: 5.60rem;
  }
  .jieshao .js_item .sale3{
    width: 6.41rem;
  }
  .jieshao .js_xbj{
    margin-bottom: 0.75rem;
  }
  .fabu{
    margin: 0.22rem 0.5rem 0.18rem 0.5rem;
  }
  .fabu button{
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
