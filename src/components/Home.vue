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
				<router-link to="/ccj" tag="li">
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
				<ul class="wntj_con">
					<li>
						<div class="wntj_con_l">
							<img src="../../static/images/picture/index_p1.png"/>
						</div>
						<div class="wntj_con_r">
							<div class="wntj_con_name">龙城花园北二区  1室1厅</div>
							<div class="wntj_con_xx">46.19m²/南/顶层   共四层</div>
							<div class="wntj_con_mn"><span>满两年</span></div>
							<div class="wntj_con_dt"><span>地铁</span></div>
							<div class="wntj_con_ktime"><span>随时可看</span></div>
							<i class="wntj_con_price">265万</i>
							<em class="wntj_con_dprice">57,372元/平</em>
						</div>
					</li>
					<li>
						<div class="wntj_con_l">
							<img src="../../static/images/picture/index_p1.png"/>
						</div>
						<div class="wntj_con_r">
							<div class="wntj_con_name">龙城花园北二区  1室1厅</div>
							<div class="wntj_con_xx">46.19m²/南/顶层   共四层</div>
							<div class="wntj_con_mn"><span>满两年</span></div>
							<div class="wntj_con_dt"><span>地铁</span></div>
							<div class="wntj_con_ktime"><span>随时可看</span></div>
							<i class="wntj_con_price">265万</i>
							<em class="wntj_con_dprice">57,372元/平</em>
						</div>
					</li>
					<li>
						<div class="wntj_con_l">
							<img src="../../static/images/picture/index_p1.png"/>
						</div>
						<div class="wntj_con_r">
							<div class="wntj_con_name">龙城花园北二区  1室1厅</div>
							<div class="wntj_con_xx">46.19m²/南/顶层   共四层</div>
							<div class="wntj_con_mn"><span>满两年</span></div>
							<div class="wntj_con_dt"><span>地铁</span></div>
							<div class="wntj_con_ktime"><span>随时可看</span></div>
							<i class="wntj_con_price">265万</i>
							<em class="wntj_con_dprice">57,372元/平</em>
						</div>
					</li>
				</ul>
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
	margin: 48px 0 0 0;
	padding: 0 28px;
	box-sizing: border-box;
	position: relative;
}
.sy_search_kuang{
	width:460px;
	height:76px;
	background:rgba(255,255,255,1);
	border-radius:38px;
	box-shadow:4px 2px 10px rgba(0,0,0,0.12);
	padding: 18px 69px 16px;
	box-sizing: border-box;
}
.icon-sousuo1{
	font-size: 42px;	
}
.where_live{
	text-indent: 17px;
	width:200px;
	height:42px;
	line-height: 20px;
	border: 0;
	font-size:30px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	opacity:0.5;
}
.sy_where{
	width: 34px;
	height: 47px;
	position: absolute;
	right: 136px;
	top: 18px;
}
.sy_where_diming{
	width:72px;
	height:34px;
	font-size:36px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	position: absolute;
	right: 49px;
	top: 24px;
}
.sy_tab{
	margin-top: 63px;
	padding: 0 14px;
	box-sizing: border-box;
}
.sy_tubiao{
	margin-bottom: 18px;
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
	width: 84px;
	height: 84px;
	margin: 0 auto 9px;
}
.sy_tubiao span{
	height:24px;
	font-size:24px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	display: block;
	margin-bottom: 25px;	
}
.sy_seehouse,.sy_conch,.sy_conch_con,.sy_rmzt_con,.sy_dncp_con,.wntj,.wntj_con{
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
	height:24px;
	font-size:24px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
}
.VR_lookhouse{
	width: 35px;
	height: 48px;
}
.map_findhouse{
	width: 48px;
	height: 48px;
}
.subway{
	width: 39px;
	height: 52px;
}
.man5nian{
	width: 45px;
	height: 39px;
}
.nanbeitou{
	width: 43px;
	height: 37px;
}
.sy_seehouse li i{
	display: block;
	width: 84px;
	height: 70px;
	margin: 0 auto;
}
.sy_seehouse li i img{
	margin: 0 auto;
}
#main{
	padding: 0 50px;
	box-sizing: border-box;
	overflow: hidden;
	margin-bottom: 110px;
}
.sy_conch{
	margin: 19px 0 42px 0;
}
.sy_conch_tit{
	display: flex;
	padding: 40px 0;
	box-sizing: border-box;
}
.sy_conch_tit h1{
	height:45px;
	font-size:48px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
}
.sy_conch_tit span,.sy_conch_tit i{
	height:30px;
	font-size:30px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:45px;
	opacity:0.5;	
}
.sy_conch_tit span{
	margin-left: 46%;
}
.sy_conch_tit i{
	margin-left: 6px;
}
.sy_conch_con  strong{
	display: block;
	float: left;
	width:1px;
	height:100px;
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
	font-size:60px;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(0,0,0,1);
}
.sy_conch_con_l span,.sy_conch_con_r span{
	font-size:24px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	opacity:0.5;
}
.sy_dncp{
	margin-top: 41px;
}
.sy_rmzt_tit h1,.sy_dncp_tit h1{
	padding: 18px 0;
	height:45px;
	font-size:48px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
}
.sy_rmzt_con_l,.sy_rmzt_con_r,.sy_dncp_con_l,.sy_dncp_con_r{
	float: left;
	margin-top: 20px;
}
.sy_rmzt_con_l,.sy_dncp_con_l{
	margin-right: 39px;
}
#rm_P1,#rm_P2,#dncp_P1,#dncp_P2{
	width: 305px;
	height: 190px;
	margin-bottom: 20px;
}
.sy_rmzt_con_l span,.sy_rmzt_con_r span,.sy_dncp_con_l span,.sy_dncp_con_r span{
	display: block;
	height:28px;
	font-size:30px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
}
.sy_dncp_con_l i,.sy_dncp_con_r i{
	display: block;
	margin-top: 9px;
	font-style: normal;
	height:33px;
	font-size:24px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:33px;
	opacity:0.5;
}
.wntj_tit{
	margin-top: 59px;
	margin-bottom: 8px;
}
.wntj_tit b{
	height:45px;
	font-size:48px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	margin-right: 25%;
}
.wntj_tit span{
	margin-right: 20px;
	height:29px;
	font-size:30px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
}
.wntj_tit .active{
	color:rgba(255,144,18,1);
}
.wntj_con li{
	height: 216px;
	padding: 30px 0;
	box-sizing: border-box;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: rgba(0,0,0,0.1);
}
.wntj_con_l{
	float: left;
	margin-right: 30px;
}
.wntj_con_l img{
	width: 216px;
	height: 154px;
}
.wntj_con_r{
	float: left;
}
.wntj_con_name{
	height:35px;
	font-size:36px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
}
.wntj_con_xx{
	height:24px;
	font-size:24px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	margin: 10px 0 7px 0;
	box-sizing: border-box;
}
.wntj_con_mn,.wntj_con_dt,.wntj_con_ktime{
	float: left;
	height:40px;
	background:rgba(255,144,18,1);
	padding: 8px 10px;
	margin-right: 10px;	
	box-sizing: border-box;
}
.wntj_con span{
	height:24px;
	font-size:24px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(255,255,255,1);
	line-height:30px;
}
.wntj_con_price{
	clear: both;
	display: block;
	margin: 10px 20px 0 0;
	float: left;
	height:26px;
	font-size:30px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(255,144,18,1);
	line-height:30px;
	font-style: normal;
}
.wntj_con_dprice{
	float: left;
	margin-top: 14px;
	height:25px;
	font-size:24px;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(1,1,1,1);
	line-height:30px;
	opacity:0.5;
	font-style: normal;
}
</style>