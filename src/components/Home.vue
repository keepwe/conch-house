<template>
	<div style="overflow: hidden;">
		<div class="sy_search">
			<div class="sy_search_kuang">
				<i class="iconfont icon-sousuo1"></i>
				<input type="text" class="where_live"   placeholder="你想住在哪？" />
				<img class="sy_where" src="../../static/images/tubiao/index_location.png"/>
				<span class="sy_where_diming">北京</span>
			</div>
		</div>
		<div class="sy_tab">
			<ul class="sy_tubiao">
				<router-link to="/esf" tag="li">
					<img src="../../static/images/tubiao/index_esf.png"/>
					<span>二手房</span>
				</router-link>
				<router-link to="/zf" tag="li">
					<img src="../../static/images/tubiao/index_zufang.png"/>
					<span>租房</span>
				</router-link>
				<router-link to="/xf" tag="li">
					<img src="../../static/images/tubiao/index_newhouse.jpg"/>
					<span>新房</span>
				</router-link>
				<router-link to="/hw" tag="li">
					<img src="../../static/images/tubiao/index_hw.png"/>
					<span>海外</span>
				</router-link>
				<router-link to="/zx" tag="li">
					<img src="../../static/images/tubiao/index_zhuangxiu.png"/>
					<span>装修</span>
				</router-link>
				<router-link to="/mf" tag="li">
					<img src="../../static/images/tubiao/index_saleh.png"/>
					<span>卖房</span>
				</router-link>
				<router-link to="/zxq" tag="li">
					<img src="../../static/images/tubiao/index_xiaoqu.png"/>
					<span>找小区</span>
				</router-link>
				<router-link to="/myjy" tag="li">
					<img src="../../static/images/tubiao/index_ccj.png"/>
					<span>查成交</span>
				</router-link>
				<router-link to="/fwgj" tag="li">
					<img src="../../static/images/tubiao/index_fwgz.png"/>
					<span style="text-indent: -12px;">房屋估价</span>
				</router-link>
				<router-link to="/bk" tag="li">
					<img src="../../static/images/tubiao/index_bk.png"/>
					<span>百科</span>
				</router-link>
			</ul>
			<ul class="sy_seehouse">
				<li>
					<i><img class="VR_lookhouse" src="../../static/images/tubiao/VR_lookhouse.png"/></i>
					<span>VR看房</span>
				</li>
				<li>
					<i class="con"><img class="map_findhouse" src="../../static/images/tubiao/map_findhouse.png"/></i>
					<span>地图找房</span>
				</li>
				<li>
					<i><img class="subway" src="../../static/images/tubiao/subway.png"/></i>
					<span>近地铁</span>
				</li>
				<li>
					<i class="con"><img class="man5nian" src="../../static/images/tubiao/man5nian.png"/></i>
					<span>满五年</span>
				</li>
				<li>
					<i><img class="nanbeitou" src="../../static/images/tubiao/nanbeitou.png"/></i>
					<span>南北通透</span>
				</li>
			</ul>
		</div>
		<div id="main">
			<div class="sy_conch">
				<div class="sy_conch_tit">
					<h1>海螺指数</h1>
					<span>查看更多</span>
					<i class="iconfont icon-fanhuijiantou2"></i>
				</div>
				<div class="sy_conch_con">
					<div class="sy_conch_con_l">
						<b>53824</b>
						<span>全市均价（元/平）</span>
					</div>
					<strong></strong>
					<div class="sy_conch_con_r">
						<b>160</b>
						<span>昨日成交（套）</span>
					</div>
				</div>
			</div>
			<div class="sy_rmzt">
				<div class="sy_rmzt_tit">
					<h1>热门主题</h1>
				</div>
				<div class="sy_rmzt_con">
					<div class="sy_rmzt_con_l">
						<img id="rm_P1" src="../../static/images/picture/index_p12.png"/>
						<span>可改造的自由户型</span>
					</div>
					<div class="sy_rmzt_con_r">
						<img id="rm_P2" src="../../static/images/picture/index_p14.png" alt="" />
						<span>首付120万起安家</span>
					</div>
				</div>
			</div>
			<div class="sy_dncp">
				<div class="sy_dncp_tit">
					<h1>代你踩盘</h1>
				</div>
				<div class="sy_dncp_con">
					<div class="sy_dncp_con_l">
						<img id="dncp_P1" src="../../static/images/picture/index_p12.png"/>
						<span>三环内双地铁小户型</span>
						<i>总价200多万</i>
					</div>
					<div class="sy_dncp_con_r">
						<img id="dncp_P2" src="../../static/images/picture/index_p14.png" alt="" />
						<span>德胜门的“住”范儿</span>
						<i>7个小区7个生活</i>
					</div>
				</div>
			</div>
			<div class="sy_dncp">
				<div class="sy_dncp_tit">
					<h1>二手精选</h1>
				</div>
				<div class="sy_dncp_con">
					<div class="sy_dncp_con_l">
						<img id="dncp_P1" src="../../static/images/picture/index_p12.png"/>
						<span>三环内双地铁小户型</span>
						<i>总价200多万</i>
					</div>
					<div class="sy_dncp_con_r">
						<img id="dncp_P2" src="../../static/images/picture/index_p14.png" alt="" />
						<span>德胜门的“住”范儿</span>
						<i>7个小区7个生活</i>
					</div>
				</div>
			</div>
			<div class="sy_dncp">
				<div class="sy_dncp_tit">
					<h1>租一个家</h1>
				</div>
				<div class="sy_dncp_con">
					<div class="sy_dncp_con_l">
						<img id="dncp_P1" src="../../static/images/picture/index_p12.png"/>
						<span>三环内双地铁小户型</span>
						<i>总价200多万</i>
					</div>
					<div class="sy_dncp_con_r">
						<img id="dncp_P2" src="../../static/images/picture/index_p14.png" alt="" />
						<span>德胜门的“住”范儿</span>
						<i>7个小区7个生活</i>
					</div>
				</div>
			</div>
			<div class="sy_dncp">
				<div class="sy_dncp_tit">
					<h1>新房优选</h1>
				</div>
				<div class="sy_dncp_con">
					<div class="sy_dncp_con_l">
						<img id="dncp_P1" src="../../static/images/picture/index_p12.png"/>
						<span>三环内双地铁小户型</span>
						<i>总价200多万</i>
					</div>
					<div class="sy_dncp_con_r">
						<img id="dncp_P2" src="../../static/images/picture/index_p14.png" alt="" />
						<span>德胜门的“住”范儿</span>
						<i>7个小区7个生活</i>
					</div>
				</div>
			</div>
			<div class="sy_dncp">
				<div class="sy_dncp_tit">
					<h1>自在旅居</h1>
				</div>
				<div class="sy_dncp_con">
					<div class="sy_dncp_con_l">
						<img id="dncp_P1" src="../../static/images/picture/index_p12.png"/>
						<span>三环内双地铁小户型</span>
						<i>总价200多万</i>
					</div>
					<div class="sy_dncp_con_r">
						<img id="dncp_P2" src="../../static/images/picture/index_p14.png" alt="" />
						<span>德胜门的“住”范儿</span>
						<i>7个小区7个生活</i>
					</div>
				</div>
			</div>
			<div class="sy_dncp">
				<div class="sy_dncp_tit">
					<h1>安心装修</h1>
				</div>
				<div class="sy_dncp_con">
					<div class="sy_dncp_con_l">
						<img id="dncp_P1" src="../../static/images/picture/index_p12.png"/>
						<span>三环内双地铁小户型</span>
						<i>总价200多万</i>
					</div>
					<div class="sy_dncp_con_r">
						<img id="dncp_P2" src="../../static/images/picture/index_p14.png" alt="" />
						<span>德胜门的“住”范儿</span>
						<i>7个小区7个生活</i>
					</div>
				</div>
			</div>
			<div class="wntj">
				<div class="wntj_tit">
					<b	>为你推荐</b>
					<span class="active">二手房</span>
					<span>新房</span>
					<span>租房</span>
				</div>
        <router-link to="/house"><div class="es_item">
          <div class="fl pic">
            <img src="../../static/images/picture/esf_p3.png"/>
          </div>
          <div class="fl es_content">
            <h3 class="es_title">
              龙城花园北二区&nbsp;一室一厅
            </h3>
            <p class="es_desc">
              46.19平米/南/顶层&nbsp;共四层
            </p>
            <div class="es_tags">
              <span>满两年</span>
              <span>地铁</span>
              <span>随时可看</span>
            </div>
            <div class="es_price">
              <span class="price_sum">265万</span>
              <span class="unit_price">57,421元/平</span>
            </div>
          </div>
        </div></router-link>
        <router-link to="/house"><div class="es_item">
          <div class="fl pic">
            <img src="../../static/images/picture/esf_p3.png"/>
          </div>
          <div class="fl es_content">
            <h3 class="es_title">
              龙城花园北二区&nbsp;一室一厅
            </h3>
            <p class="es_desc">
              46.19平米/南/顶层&nbsp;共四层
            </p>
            <div class="es_tags">
              <span>满两年</span>
              <span>地铁</span>
              <span>随时可看</span>
            </div>
            <div class="es_price">
              <span class="price_sum">265万</span>
              <span class="unit_price">57,421元/平</span>
            </div>
          </div>
        </div></router-link>
        <router-link to="/house"><div class="es_item">
          <div class="fl pic">
            <img src="../../static/images/picture/esf_p3.png"/>
          </div>
          <div class="fl es_content">
            <h3 class="es_title">
              龙城花园北二区&nbsp;一室一厅
            </h3>
            <p class="es_desc">
              46.19平米/南/顶层&nbsp;共四层
            </p>
            <div class="es_tags">
              <span>满两年</span>
              <span>地铁</span>
              <span>随时可看</span>
            </div>
            <div class="es_price">
              <span class="price_sum">265万</span>
              <span class="unit_price">57,421元/平</span>
            </div>
          </div>
        </div></router-link>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import Footer from "./Footer"
	export default{
		name:"Home",
		components:{
		  "v-footer":Footer
		}
	}
</script>

<style scoped="">
  .sy_search{
    margin: 0.48rem 0 0 0;
    padding: 0 0.28rem;
    box-sizing: border-box;
    position: relative;
  }
  .sy_search_kuang{
    width:4.6rem;
    height:0.76rem;
    background:rgba(255,255,255,1);
    border-radius:38px;
    box-shadow:0.04rem 0.02rem 0.1rem rgba(0,0,0,0.12);
    padding: 0.18rem 0.69rem 0.16rem;
    box-sizing: border-box;
  }
  .icon-sousuo1{
    font-size: 0.42rem;
  }
  .where_live{
    text-indent: 0.17rem;
    width:2rem;
    height:0.42rem;
    line-height: 0.2rem;
    border: 0;
    font-size:0.3rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
    opacity:0.5;
  }
  .sy_where{
    width: 0.34rem;
    height: 0.47rem;
    position: absolute;
    right: 1.36rem;
    top: 0.18rem;
  }
  .sy_where_diming{
    width:0.72rem;
    height:0.34rem;
    font-size:0.36rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
    position: absolute;
    right: 0.49rem;
    top: 0.24rem;
  }
  .sy_tab{
    margin-top: 0.63rem;
    padding: 0 0.36rem;
    box-sizing: border-box;
  }
  .sy_tubiao{
    margin-bottom: 0.18rem;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .sy_tubiao li{
    width: 20%;
    text-align: center;
  }
  .sy_tubiao img{
    width: 0.84rem;
    height: 0.84rem;
    margin: 0 auto 0.09rem;
  }
  .sy_tubiao span{
    height:0.24rem;
    font-size:0.24rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
    display: block;
    margin-bottom: 0.25rem;
  }
  .sy_seehouse,.sy_conch,.sy_conch_con,.sy_rmzt_con,.sy_dncp_con,.wntj{
    overflow: hidden;
  }
  .sy_seehouse{
    display: flex;
    justify-content: space-around;
  }
  .sy_seehouse li{
    width: 20%;
    text-align: center;
  }
  .sy_seehouse span{
    height:0.24rem;
    font-size:0.24rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
  }
  .VR_lookhouse{
    width: 0.35rem;
    height: 0.48rem;
  }
  .map_findhouse{
    width: 0.48rem;
    height: 0.48rem;
  }
  .subway{
    width: 0.39rem;
    height: 0.52rem;
  }
  .man5nian{
    width: 0.45rem;
    height: 0.39rem;
  }
  .nanbeitou{
    width: 0.43rem;
    height: 0.37rem;
  }
  .sy_seehouse li i{
    display: block;
    width: 0.84rem;
    height: 0.7rem;
    margin: 0 auto;
  }
  .sy_seehouse li i img{
    margin: 0 auto;
  }
  #main{
    padding: 0 0.5rem;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 1.1rem;
  }
  .sy_conch{
    margin: 0.19rem 0 0.42rem 0;
  }
  .sy_conch_tit{
    display: flex;
    padding: 0.4rem 0;
    box-sizing: border-box;
  }
  .sy_conch_tit h1{
    height:0.45rem;
    font-size:0.48rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
  }
  .sy_conch_tit span,.sy_conch_tit i{
    height:0.3rem;
    font-size:0.3rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.45rem;
    opacity:0.5;
  }
  .sy_conch_tit span{
    margin-left: 46%;
  }
  .sy_conch_tit i{
    margin-left: 0.06rem;
  }
  .sy_conch_con  strong{
    display: block;
    float: left;
    width:0.01rem;
    height:1rem;
    background:rgba(0,0,0,1);
    opacity:0.1;
  }
  .sy_conch_con_l,.sy_conch_con_r{
    width: 49%;
    float: left;
    text-align: center;
  }
  .sy_conch_con_l b,.sy_conch_con_r b{
    display: block;
    font-size:0.6rem;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .sy_conch_con_l span,.sy_conch_con_r span{
    font-size:0.24rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
    opacity:0.5;
  }
  .sy_dncp{
    margin-top: 0.41rem;
  }
  .sy_rmzt_tit h1,.sy_dncp_tit h1{
    padding: 0.18rem 0;
    height:0.45rem;
    font-size:0.48rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
  }
  .sy_rmzt_con_l,.sy_rmzt_con_r,.sy_dncp_con_l,.sy_dncp_con_r{
    float: left;
    margin-top: 0.2rem;
  }
  .sy_rmzt_con_l,.sy_dncp_con_l{
    margin-right: 0.39rem;
  }
  #rm_P1,#rm_P2,#dncp_P1,#dncp_P2{
    width: 3.05rem;
    height: 1.9rem;
    margin-bottom: 0.2rem;
  }
  .sy_rmzt_con_l span,.sy_rmzt_con_r span,.sy_dncp_con_l span,.sy_dncp_con_r span{
    display: block;
    height:0.28rem;
    font-size:0.3rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
  }
  .sy_dncp_con_l i,.sy_dncp_con_r i{
    display: block;
    margin-top: 0.09rem;
    font-style: normal;
    height:0.33rem;
    font-size:0.24rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.33rem;
    opacity:0.5;
  }
  .wntj_tit{
    margin-top: 0.59rem;
    margin-bottom: 0.08rem;
  }
  .wntj_tit b{
    height:0.45rem;
    font-size:0.48rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
    margin-right: 25%;
  }
  .wntj_tit span{
    margin-right: 0.2rem;
    height:0.29rem;
    font-size:0.3rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
  }
  .wntj_tit .active{
    color:rgba(255,144,18,1);
  }
  .es_item{
    height: 2.16rem;
    overflow: hidden;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-top: 0.38rem;
  }
  .es_item .pic{
    width: 2.46rem;
    height: 100%;
  }
  .es_item .pic img{
    width: 2.16rem;
    height: 1.55rem;
  }
  .es_content .es_title{
    font-size: 0.34rem;
  }
  .es_content .es_desc{
    font-size: 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .es_content .es_tags{
    font-size: 0;
    height: 0.6rem;
  }
  .es_content .es_tags span{
    background: #ff9012;
    font-size: 0.24rem;
    padding:0.09rem 0.26rem;
    color: #FFF;
    margin-right: 0.1rem;
  }
  .es_content .es_price{
    font-size: 0;
  }
  .es_content .es_price .price_sum{
    color: #ff9012;
    font-size: 0.26rem;
    margin-right: 0.2rem;
  }
  .es_content .es_price .unit_price{
    font-size: 0.22rem;
    color: rgba(1,1,1,.5);
  }
</style>
