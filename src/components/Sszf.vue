<template>
	<div id="sszf">
		<div class="ssesf_tit">
			<h1>方式</h1>
		</div>
		<div class="ssesf_tit_con">
			<span>整租</span>
			<span>合租</span>
		</div>
		<div class="ssesf_tit">
			<h1>租金</h1>
		</div>
		<div class="range_zj">
			<span class="range_min">0万-</span>
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
			<h1>户型</h1>
		</div>
		<div class="ssesf_tit_con ssesf_tese_con">
			<span>一居</span>
			<span>二居</span>
			<span class="spanh">三居</span>
			<span class="spanwu">四居+</span>
		</div>
		<div class="ssesf_tit">
			<h1>品牌</h1>
		</div>
		<div class="ssesf_tit_con ssesf_tese_con ssesf_cx_con">
			<span>链家</span>
			<span>自如</span>
			<span class="spanh">安城寓</span>
			<span class="spanwu">蜂客公寓</span>
			<span>润邦地产</span>
			<span>租个家</span>
			<span class="spanh">金信优家</span>
			<span class="spanwu">8090公寓</span>
		</div>
		<div class="ssesf_kszf">
			开始找房
		</div>
	</div>
</template>

<script>
	export default{
		name:"Sszf",
		data:function(){
			return{
				value: [4, 8]
			}
		}
	}
</script>

<style>
#sszf{
	padding: 0 0.5rem;
	box-sizing: border-box;
	font-family:PingFangSC-Thin;
}
#sszf h1{
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
#sszf .block{
	margin-top: -0.2rem;
}
#sszf .el-slider__runway{
    width: 100%;
    height: 0.1rem;
    border-radius: 0.1rem;  
}
#sszf .el-slider__bar{
    height: 0.1rem;
    background-color: #FF9012;
}
#sszf .el-slider__button-wrapper{
	top: -0.2rem;
	width: 0.46rem;
	height: 0.46rem;
}
#sszf .el-slider__button-wrapper .el-slider__button{
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
.ssesf_tit_con .ssesf_tit_con_active{
	background: rgba(255,222,185,1);
	color: rgba(255,144,18,1);
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