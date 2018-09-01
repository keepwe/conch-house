<template>
	<div id="ssesf">
		<div class="ssesf_tit">
			<h1>搜索历史</h1>
			<span>清空</span>
		</div>
		<div class="ssesf_tit_con">
			<span>北京</span>
		</div>
		<div class="ssesf_tit">
			<h1>总价（万）</h1>
		</div>
		<div class="range_zj">
			<span class="range_min">0万</span>
			<span class="range_max">不限</span>
		</div>
		<div class="block">
		    <el-slider
		      v-model="value"
		      range
		      :max="1000">
		    </el-slider>
		</div>
		<div class="ssesf_tit">
			<h1>特色</h1>
		</div>
		<div class="ssesf_tit_con  ssesf_tese_con">
			<span>满五年</span>
			<span>满两年</span>
			<span class="spanh">VR房源</span>
			<span  class="spanwu">新上</span>
			<span>近地铁</span>
			<span>精装小两周</span>
			<span class="spanh">不看商业类</span>
			<span class="spanwu">不看地下室</span>
		</div>
		<div class="ssesf_tit">
			<h1>房型</h1>
		</div>
		<div class="ssesf_tit_con">
			<span>一室</span>
			<span>二室</span>
			<span class="spanh">三室</span>
			<span class="spanwu">四室</span>
		</div>
		<div class="ssesf_tit">
			<h1>朝向</h1>
		</div>
		<div class="ssesf_tit_con ssesf_cx_con">
			<span>朝南</span>
			<span>朝东</span>
			<span class="spanh">朝北</span>
			<span class="spanwu">南北</span>
		</div>
		<div class="ssesf_kszf">
			开始找房
		</div>
	</div>
</template>

<script>
	import { Range } from 'mint-ui';
	export default{
		name:"Ssesf",
		data:function(){
			return{
				value: [4, 8]
			}
		}
	}
</script>

<style>
#ssesf{
	padding: 0 0.5rem;
	box-sizing: border-box;
	font-family:PingFangSC-Thin;
}
#ssesf h1{
	font-weight: normal;
	font-size:0.34rem;
	font-weight:bold;
	color:rgba(0,0,0,1);
	float: left;
}
.range_zj{
	position: relative;
	top: -0.31rem;
	left: 40%;
	font-size:0.24rem;
}
#ssesf .block{
	margin-top: -0.2rem;
}
#ssesf .el-slider__runway{
    width: 100%;
    height: 0.1rem;
    border-radius: 0.1rem;  
}
#ssesf .el-slider__bar{
    height: 0.1rem;
    background-color: #FF9012;
}
#ssesf .el-slider__button-wrapper{
	top: -0.2rem;
	width: 0.46rem;
	height: 0.46rem;
}
#ssesf .el-slider__button-wrapper .el-slider__button{
	width: 0.46rem;
	height: 0.46rem;
	border:0;
	background: url("../../static/images/tubiao/search_esf.png") no-repeat center/cover;
	
}
.ssesf_tit{
	margin: 0.6rem 0 0.38rem;
	overflow: auto;
}
.ssesf_tit span{
	float: right;
	height: 0.34rem;
	line-height: 0.34rem;
	font-size:0.24rem;
	font-weight:bold;
	color:rgba(0,0,0,1);
	opacity:0.5;
	padding-right: 0.51rem;
}
.ssesf_tit_con{
	clear: both;
	overflow: hidden;
}
.ssesf_tit_con span{
	display: block;
	float: left;
	width:1.4rem;
	height:0.6rem;
	line-height:0.6rem;
	border-radius:0.1rem;
	font-size: 0.24rem;
	text-align: center;
	color:rgba(0,0,0,1);
	background: rgba(0,0,0,0.04);
	margin-right: 0.31rem;
}
.ssesf_tese_con span{
	margin-bottom: 0.24rem;
}
.ssesf_tit_con .spanwu{
	margin-right: 0;
}
.ssesf_tit_con .spanh{
	margin-right: 0.28rem;
}
.ssesf_cx_con{
	margin-bottom: 1.44rem;
}
.ssesf_kszf{
	width:4.1rem;
	height:0.8rem;
	background:rgba(255,144,18,1);
	border-radius:0.4rem;
	color: #fff;
	font-size: 0.3rem;
	line-height: 0.8rem;
	text-align: center;
	margin: 0 auto 1.55rem;
}
</style>