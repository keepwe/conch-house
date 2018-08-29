<template>
	<div class="xf_house">
		<header>
	      <span class="iconfont icon-navbankicon" @click="goback()"></span>
	      <div class="sy_search_kuang">
	        <i class="iconfont icon-sousuo1"></i>
	        <input type="text"   placeholder="请输入小区或商圈名" />
	      </div>
	      <span class="iconfont icon-xiaoxi2"></span>
	    </header>
    	<div class="xf_banner">
    		<mt-swipe :auto="4000">
			  <mt-swipe-item  v-bind:style="{background: bac1}">
			  	<div class="zu_banner_font">
			  		<h2>三口之家选房记</h2>
			  		<p>首付如何变全款</p>
			  	</div>
			  </mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac2}"></mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac1}"></mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac3}"></mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac1}"></mt-swipe-item>
			</mt-swipe>
    	</div>
    	<div class="xf_tb">
    		<ul class="xf_tubiao">
				<li>
					<img src="../../static/images/tubiao/newh_all.jpg"/>
					<span>全部楼盘</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/newh_onsale.jpg"/>
					<span>在售楼盘</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/newh_kaipan.jpg"/>
					<span>最近开盘</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/newh_wanke.jpg"/>
					<span>万科好房</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/newh_help.jpg"/>
					<span>帮我找房</span>
				</li>
			</ul>
    	</div>
    	<div class="xf_items">
    		<div class="xf_item1">
    			<h1>优质好房</h1>
    			<div class="xf_item1_tab xf_tab1">
    				<h2>地铁低价房</h2>
    				<span>低至4万起</span>
    			</div>
    			<div class="xf_item1_tab xf_tab2">
    				<h2>6百万三居</h2>
    				<span>低价快入住</span>
    			</div>
    			<div class="xf_item1_tab xf_tab3">
    				<h2>单价2万起</h2>
    				<span>刚需优选房</span>
    			</div>
    			<div class="xf_item1_tab  xf_tab4">
    				<h2>京津环绕房</h2>
    				<span>低总价精选</span>
    			</div>
    		</div>
    		<div class="xf_item1 VRkanf">
    			<h1>VR看房</h1>
    			<span>查看全部<i class="iconfont icon-fanhuijiantou2"></i></span>
    			<div class="VRkanf_pic">
    				<img class="VRkanf_pic1" src="../../static/images/picture/xf_vrkanfang1.png"/>
    				<img src="../../static/images/picture/xf_vrkanfang2.png"/>
    			</div>
    			<div class="VRkanf_tit">
    				<h2>国润村</h2>
    				<h2>樊瑞108</h2>
    			</div>
    			<div class="VRkanf_detail">
    				<div>南四环落地窗大三居</div>
    				<div>国贸舒适大两居</div>
    			</div>
    		</div>
    		<div class="xf_item1 RMbd">
    			<h1>热门榜单</h1>
    			<div class="RMbd_tab">
    				<span class="RMbd_tab_active">大家都在看</span>
    				<span>热卖榜</span>
    				<span>关注榜</span>
    				<span>热搜榜</span>
    			</div>
    			<ul class="RMbd_tab_list">
    				<li>
    					<h3 class="RMbd_tab_active">1</h3>
    					<div class="RMbd_tab_l_con">
    						<h2>首尔甜城·东方苑</h2>
    						<p>燕郊  | 均价18000元/平</p>
    					</div>
    					<div class="RMbd_tab_l_status RMbd_tab_active">
    						<i></i>
    						未变化
    					</div>
    				</li>
    				<li>
    					<h3 class="RMbd_tab_active">2</h3>
    					<div class="RMbd_tab_l_con">
    						<h2>首尔甜城·东方苑</h2>
    						<p>燕郊  | 均价18000元/平</p>
    					</div>
    					<div class="RMbd_tab_l_status RMbd_tab_active">
    						<i class="iconfont icon-up-arrow"></i>
    						1名
    					</div>
    				</li>
    				<li>
    					<h3 class="RMbd_tab_active">3</h3>
    					<div class="RMbd_tab_l_con">
    						<h2>首尔甜城·东方苑</h2>
    						<p>燕郊  | 均价18000元/平</p>
    					</div>
    					<div class="RMbd_tab_l_status RMbd_tab_active">
    						<i></i>
    						未变化
    					</div>
    				</li>
    				<li>
    					<h3>4</h3>
    					<div class="RMbd_tab_l_con">
    						<h2>首尔甜城·东方苑</h2>
    						<p>燕郊  | 均价18000元/平</p>
    					</div>
    					<div class="RMbd_tab_l_status">
    						<i class="iconfont icon-jiantou-xia"></i>
    						1名
    					</div>
    				</li>
    				<li>
    					<h3>5</h3>
    					<div class="RMbd_tab_l_con">
    						<h2>首尔甜城·东方苑</h2>
    						<p>燕郊  | 均价18000元/平</p>
    					</div>
    					<div class="RMbd_tab_l_status RMbd_tab_active">
    						<i class=""></i>
    						未变化
    					</div>
    				</li>
    			</ul>
    			<div class="xf_look_all">
    				<button>查看全部榜单</button>
    			</div>
    		</div>
    	</div>
    	<div class="xf_wntj">
			<h1>为你推荐</h1>
			<div class="xf_items">
		      <router-link to="/house">
		        <div class="xf_item">
		          <div class="fl pic">
		            <img src="../../static/images/picture/esf_p3.png"/>
		          </div>
		          <div class="fl xf_content">
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
		        </div>
		      </router-link>
			</div>
			<div class="xf_items">
		      <router-link to="/house">
		        <div class="xf_item">
		          <div class="fl pic">
		            <img src="../../static/images/picture/esf_p3.png"/>
		          </div>
		          <div class="fl xf_content">
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
		        </div>
		      </router-link>
			</div>
			<div class="xf_items">
		      <router-link to="/house">
		        <div class="xf_item">
		          <div class="fl pic">
		            <img src="../../static/images/picture/esf_p3.png"/>
		          </div>
		          <div class="fl xf_content">
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
		        </div>
		      </router-link>
			</div>
			<div class="xf_items">
		      <router-link to="/house">
		        <div class="xf_item">
		          <div class="fl pic">
		            <img src="../../static/images/picture/esf_p3.png"/>
		          </div>
		          <div class="fl xf_content">
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
		        </div>
		      </router-link>
			</div>
			<div class="xf_items">
		      <router-link to="/house">
		        <div class="xf_item">
		          <div class="fl pic">
		            <img src="../../static/images/picture/esf_p3.png"/>
		          </div>
		          <div class="fl xf_content">
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
		        </div>
		      </router-link>
			</div>
			<div class="xf_look_all xf_look_all_lp">
    			<button>查看更多楼盘</button>
    		</div>
    	</div>
	</div>
</template>

<script>
	export default{
		name:"Xfang",
		data(){
			return{
				bac1:'url(../../static/images/picture/xf_banner1.png) no-repeat left top/cover',
				bac2:'url(../../static/images/picture/xf_banner1.png) no-repeat left top/cover',
				bac3:'url(../../static/images/picture/xf_banner1.png) no-repeat left top/cover',
			}
		},
		methods:{
		  goback(){
        	this.$router.back(-1);
          }
        }
	}
</script>

<style>
.xf_house header{
	padding: 0.27rem 0.5rem;
	box-sizing: border-box;
    display: flex;
    height: 1.14rem;
    justify-content: space-between;
    align-items: center;
}
.xf_house header span{
    font-size: 0.42rem;
}
.xf_house .sy_search_kuang{
    width:5rem;
    height:0.6rem;
    background:rgba(255,255,255,1);
    border-radius:38px;
    box-shadow:0.04rem 0.02rem 0.1rem rgba(0,0,0,0.12);
    box-sizing: border-box;
}
.xf_house .sy_search_kuang i{
    margin:0 0.33rem 0 0.37rem;
    font-size: 0.34rem;
}
.xf_house .sy_search_kuang input {
    width: 3.5rem;
    height: 0.54rem;
    line-height: 0.54rem;
    border: 0;
    font-size: 0.3rem;
    font-weight: 100;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
}
.xf_house .es_search{
    display: flex;
    height: 1.04rem;
    justify-content: space-between;
    align-items: center;
}
.xf_house .mint-swipe{
	height: 2.80rem;
	overflow: visible;
}
.xf_house .mint-swipe .zu_banner_font{	
	color:#39C87B;
	margin: 0.73rem auto 0;
}
.xf_house .mint-swipe .zu_banner_font h2{
	height:0.66rem;
	font-size:0.48rem;
	font-weight:400;
	text-align: center;
}
.xf_house .mint-swipe .zu_banner_font p{
	text-align: center;
	height:0.24rem;
	font-size:0.24rem;
	font-weight:normal;
}
.xf_banner{
	padding: 11px 50px 0;
	box-sizing: border-box;
}
.xf_banner .mint-swipe .mint-swipe-indicators{
	bottom: -0.21rem;
		
}
.xf_banner  .mint-swipe-indicators .mint-swipe-indicator{
	background:rgba(191,191,191,1);
	width: 0.1rem;
    height: 0.1rem;
    opacity: 1;
}
.xf_banner  .mint-swipe-indicators .mint-swipe-indicator.is-active {
    background: #FF9012;
}
.xf_tb{
	margin: 0.59rem 0.28rem 0;
	box-sizing: border-box;	
}
.xf_tubiao{
	display: flex;
	justify-content: space-around;
	text-align: center;
	flex-wrap: wrap;
	overflow: hidden;
}
.xf_tubiao li{
	width: 20%;
    text-align: center;
}
.xf_tubiao li img{
	width: 0.84rem;
    height: 0.84rem;
    margin: 0 auto 0.09rem;
}
.xf_tubiao li span{
	height:0.24rem;
    font-size:0.24rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
    display: block;
/*    margin-bottom: 0.25rem;*/
}
.xf_items{
	padding: 0 0.50rem;
	box-sizing: border-box;
}
.xf_item1,.xf_item2{
	overflow: hidden;
}
.xf_item1 h1{
	margin: 0.59rem 0 0.37rem;
	font-size:0.36rem;
}
.xf_item1_tab{
	float: left;
	width: 49.9%;
	text-align: center;
	height: 1.7rem;
}
.xf_tab2,.xf_tab3{
	height: 1.71rem;
}
.xf_tab1{
	border-right-width: 0.01rem;
	border-right-style: solid;
	border-right-color: rgba(0,0,0,0.1);
	border-bottom-width: 0.01rem;
	border-bottom-style: solid;
	border-bottom-color: rgba(0,0,0,0.1);
}
.xf_tab4{
	border-left-width: 0.01rem;
	border-left-style: solid;
	border-left-color: rgba(0,0,0,0.1);
	border-top-width: 0.01rem;
	border-top-style: solid;
	border-top-color: rgba(0,0,0,0.1);
}
.xf_item1_tab h2{
	margin-top: 0.5rem;
	height:0.29rem;
	font-size:0.3rem;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
}
.xf_item1_tab span{
	height:0.23rem;
	font-size:0.24rem;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:0.48rem;
	opacity:0.5;
}
.VRkanf{
	position: relative;
}
.VRkanf span{
	position: absolute;
	right: 0;
	top: 0.65rem;
	height:0.24rem;
	font-size:0.24rem;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,0.5);
}
.VRkanf_pic img{
	float: left;
	width: 3.1rem;
	height: 2rem;
	margin-bottom: 0.10rem;	
}
.VRkanf_pic .VRkanf_pic1{
	margin-right: 0.3rem;
}
.VRkanf_tit{
	clear: both;
	padding: 0.09rem 0;
	height:0.29rem;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:0.3rem;
}
.VRkanf_tit h2{
	width: 50%;
	float: left;
	font-size:0.3rem;
}
.VRkanf_detail div{
	width: 50%;
	float: left;
	font-size:0.24rem;
	color:rgba(0,0,0,0.5)
}
.RMbd .RMbd_tab{
	padding-bottom: 0.29rem;
	box-sizing: border-box;
	display: flex;
	justify-content:space-between;
	font-family:PingFangSC-Thin;	
}
.RMbd .RMbd_tab span,.RMbd .RMbd_tab b{
	height:0.29rem;
	font-size:0.3rem;
	font-weight:100;
	color: #000;
	line-height:0.3rem;
}
.RMbd .RMbd_tab .RMbd_tab_active,.RMbd_tab_list li .RMbd_tab_active{
	color:rgba(255,144,18,1);
	/*color: #FF9012;*/
}
.RMbd_tab_list li{
	height: 1.38rem;
	border-top-style: solid;
	border-top-width: 0.01rem;
	border-top-color: rgba(0,0,0,0.1);
	display: flex;
}
.RMbd_tab_list li h3{
	font-family:helvetica;
	padding: 0 0.24rem 0 0.32rem;
	line-height: 1.38rem;
	box-sizing: border-box;	
	font-size:0.48rem;
	font-weight:900;
	color:rgba(0,0,0,0.5);	
}
.RMbd_tab_l_con{
	padding: 0.08rem 0;
	flex: 1;
}
.RMbd_tab_l_con h2{
	height: 0.71rem;
	line-height: 0.71rem;
	font-size:0.3rem;
	font-weight:100;
	color:#000;
}
.RMbd_tab_l_con p{
	height:0.26rem;
	font-size:0.24rem;	
	font-weight:100;
	color:rgba(0,0,0,0.5);
	line-height:27px;
}
.RMbd_tab_l_status{
	width: 0.78rem;
	line-height: 1.38rem;
	font-size:0.24rem;
    font-weight:100;
    color:rgba(0,0,0,0.5);
}
.xf_look_all button{
	width: 100%;
	height:0.8rem;
	background:rgba(255,144,18,1);
	border-radius:0.1rem;
	font-size:36px;
	color:rgba(254,254,254,1);
	border: 0;
	outline: none;
}
.xf_wntj h1{
	padding: 0.60rem 0.5rem 0.28rem;
	font-size:0.36rem;
	color: #000;
	border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
}
.xf_wntj .xf_item {
    height: 2.16rem;
    overflow: hidden;
    border-bottom: 0.01rem solid rgba(0, 0, 0, 0.1);
    margin-top: 0.38rem;
}

.xf_wntj .xf_item .pic {
    width: 2.46rem;
    height: 100%;
}

.xf_wntj .xf_item .pic img {
    width: 2.16rem;
    height: 1.55rem;
}

.xf_wntj .xf_content .es_title {
    font-size: 0.34rem;
}

.xf_wntj .xf_content .es_desc {
    font-size: 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
}

.xf_wntj .xf_content .es_tags {
    font-size: 0;
    height: 0.6rem;
}

.xf_wntj .xf_content .es_tags span {
    background: #ff9012;
    font-size: 0.24rem;
    padding: 0.09rem 0.26rem;
    color: #FFF;
    margin-right: 0.1rem;
}

.xf_wntj .xf_content .es_price {
    font-size: 0;
}

.xf_wntj .xf_content .es_price .price_sum {
    color: #ff9012;
    font-size: 0.26rem;
    margin-right: 0.2rem;
}

.xf_wntj .xf_content .es_price .unit_price {
    font-size: 0.22rem;
    color: rgba(1, 1, 1, .5);
}
.xf_look_all_lp{
	margin: 0 0.5rem;
}
</style>