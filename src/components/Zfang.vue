<template>
	<div class="zu_house">
		<header>
	      <span class="iconfont icon-navbankicon" @click="goback()"></span>
	      <div class="sy_search_kuang">
	        <i class="iconfont icon-sousuo1"></i>
	        <input type="text"   placeholder="请输入小区或商圈名" />
	      </div>
	      <span class="iconfont icon-xiaoxi2"></span>
	    </header>
    	<div class="zu_banner">
    		<mt-swipe :auto="4000">
			  <mt-swipe-item  v-bind:style="{background: bac1}">
			  	<div class="zu_banner_font">
			  		押<span>一</span>付<span>一</span>
			  		<span>免</span>中介费
			  	</div>
			  </mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac2}"></mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac1}"></mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac3}"></mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac1}"></mt-swipe-item>
			  <mt-swipe-item  v-bind:style="{background: bac2}"></mt-swipe-item>
			</mt-swipe>
    	</div>
    	<div class="zu_tb">
    		<ul class="zf_tubiao">
				<li>
					<img src="../../static/images/tubiao/zf_zhengzu.jpg"/>
					<span>整租</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/zf_hezu.jpg"/>
					<span>合租</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/zf_dfgy.jpg"/>
					<span>独栋公寓</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/zf_0yuanlive.jpg"/>
					<span>0元住</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/zf_yuezu.jpg"/>
					<span>月租</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/zf_maphelp.jpg"/>
					<span>地图找房</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/zf_chuzu.jpg"/>
					<span>我要出租</span>
				</li>
				<li>
					<img src="../../static/images/tubiao/zf_lianxi.jpg"/>
					<span>联系我们</span>
				</li>
			</ul>
    	</div>
    	<div class="zu_all_house">
    		<h1>全部房源</h1>
    		<div class="es_search">
		      <el-cascader
		        :options="options2"
		        :show-all-levels="false"
		        placeholder="区域"
		        size="small"
		        @active-item-change="handleItemChange"
		        :props="props"
		      ></el-cascader>
		      <el-cascader
		        :show-all-levels="false"
		        placeholder="价格"
		        :options="options2"
		        @active-item-change="handleItemChange"
		        :props="props"
		      ></el-cascader>
		      <el-cascader
		        :show-all-levels="false"
		        placeholder="房型"
		        :options="options2"
		        @active-item-change="handleItemChange"
		        :props="props"
		      ></el-cascader>
		      <el-cascader
		        :show-all-levels="false"
		        placeholder="更多"
		        :options="options2"
		        @active-item-change="handleItemChange"
		        :props="props"
		      ></el-cascader>
		      <img src="../../static/images/tubiao/zf_sjt.png"/>
		    </div>
    	</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default{
		name:"Zfang",
		data(){
			return{
				bac1:'url(../../static/images/picture/zf_p1.png) no-repeat left top/cover',
				bac2:'url(../../static/images/picture/zf_p2.png) no-repeat left top/cover',
				bac3:'url(../../static/images/picture/zf_p3.png) no-repeat left top/cover',
				options2: [{
		          label: '江苏',
		          cities: []
		        }, {
		          label: '浙江',
		          cities: []
		        }],
		        props: {
		          value: 'label',
		          children: 'cities'
		        }
			}
		},
		methods: {
		  goback(){
        	this.$router.back(-1);
        },
        handleItemChange(val) {
	        console.log('active item:', val);
	        setTimeout(_ => {
	          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
	            this.options2[0].cities = [{
	              label: '南京'
	            }];
	          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
	            this.options2[1].cities = [{
	              label: '杭州'
	            }];
	          }
	        }, 300);
	    }
      }
	}
</script>

<style>
.zu_house header{
	margin: 0 0.5rem;
    display: flex;
    height: 1.02rem;
    justify-content: space-between;
    align-items: center;
}
.zu_house header span{
    font-size: 0.42rem;
}
.zu_house .sy_search_kuang{
    width:5rem;
    height:0.6rem;
    background:rgba(255,255,255,1);
    border-radius:38px;
    box-shadow:0.04rem 0.02rem 0.1rem rgba(0,0,0,0.12);
    box-sizing: border-box;
}
.zu_house .sy_search_kuang i {
    margin:0 0.33rem 0 0.37rem;
    font-size: 0.34rem;
}
.zu_house .sy_search_kuang input {
    width: 3.5rem;
    height: 0.54rem;
    line-height: 0.54rem;
    border: 0;
    font-size: 0.3rem;
    font-weight: 100;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
}
.zu_house .es_search{
    display: flex;
    height: 1.04rem;
    justify-content: space-between;
    align-items: center;
}
.zu_banner{
	padding: 0.20rem 0.5rem;
	box-sizing: border-box;
}
.zu_banner .mint-swipe{
	height: 2.80rem;
	overflow: visible;
}
.zu_banner .mint-swipe .zu_banner_font{
	width:2.12rem;
	height:1.19rem;
	font-size:0.48rem;
	font-weight:400;
	color:rgba(0,0,0,1);
	line-height:0.72rem;
	margin: 0.81rem auto 0;
}
.zu_banner .mint-swipe .zu_banner_font span{
	color: #FF0000;
}
.zu_banner .mint-swipe .mint-swipe-indicators{
	bottom: -0.21rem;
		
}
.zu_banner  .mint-swipe-indicators .mint-swipe-indicator{
	background:rgba(191,191,191,1);
	width: 0.1rem;
    height: 0.1rem;
    opacity: 1;
}
.zu_banner  .mint-swipe-indicators .mint-swipe-indicator.is-active {
    background: #FF9012;
}
.zu_tb{
	margin: 0.38rem 0 0.33rem;
	box-sizing: border-box;	
}
.zf_tubiao{
	display: flex;
	justify-content: space-around;
	text-align: center;
	flex-wrap: wrap;
	overflow: hidden;
}
.zf_tubiao li{
	width: 25%;
    text-align: center;
}
.zf_tubiao li img{
	width: 0.84rem;
    height: 0.84rem;
    margin: 0 auto 0.09rem;
}
.zf_tubiao li span{
	height:0.24rem;
    font-size:0.24rem;
    font-weight:100;
    color:rgba(0,0,0,1);
    line-height:0.3rem;
    display: block;
    margin-bottom: 0.25rem;
}
.zu_all_house{
	padding: 0 0.5rem;
	box-sizing: border-box;
}
.zu_all_house h1{
	height:0.35rem;
	font-size:0.36rem;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:0.3rem;
}
.zu_all_house .es_search .el-cascader .el-input--suffix .el-input__inner{
    font-size: 0.28rem;
    border: 0 !important;
    width: 1.1rem !important;
}
.el-cascader__label{
    font-size: 0.28rem;
}
.el-cascader-menu__item{
    font-size: 0.28rem;
    height: auto;
}
</style>