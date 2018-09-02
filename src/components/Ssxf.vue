<template>
	<div id="ssxf">
		<div class="ssesf_tit">
			<h1>价格</h1>
		</div>
		<div class="ssesf_tit_con">
			<span class="ssesf_tit_con_active">总价</span>
			<span>单价</span>
		</div>
		<div class="ssesf_tit">
			<h1>按总价</h1>
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
			<h1>房型</h1>
		</div>
		<div class="ssesf_tit_con ssesf_tese_con">
			<span>一室</span>
			<span>二室</span>
			<span class="spanh">三室</span>
			<span class="spanwu">四室</span>
			<span>五室</span>
			<span>五室以上</span>
		</div>
		<div class="ssesf_tit">
			<h1>类型</h1>
		</div>
		<div class="ssesf_tit_con ssesf_tese_con">
			<span>住宅</span>
			<span>别墅</span>
			<span class="spanh">商业</span>
			<span class="spanwu">写字楼</span>
			<span>底商</span>
		</div>
		<div class="ssesf_tit">
			<h1>开盘时间</h1>
		</div>
		<div class="ssesf_tit_con ssesf_cx_con ssesf_tese_con">
			<span>近期开盘</span>
			<span>未来一个月</span>
			<span class="spanh">未来三个月</span>
			<span class="spanwu">未来半年</span>
			<span>过去一个月</span>
			<span>过去三个月</span>
		</div>
		<div class="ssesf_kszf">
			开始找房
		</div>
	</div>
</template>

<script>
	import { Range } from 'mint-ui';
	export default{
		name:"Ssxf",
		data:function(){
			return{
				value: [4, 8]
			}
		}
	}
</script>

<style>
#ssxf{
	padding: 0 0.5rem;
	box-sizing: border-box;
	font-family:PingFangSC-Thin;
}
#ssxf h1{
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
#ssxf .block{
	margin-top: -0.2rem;
}
#ssxf .el-slider__runway{
    width: 100%;
    height: 0.1rem;
    border-radius: 0.1rem;  
}
#ssxf .el-slider__bar{
    height: 0.1rem;
    background-color: #FF9012;
}
#ssxf .el-slider__button-wrapper{
	top: -0.2rem;
	width: 0.46rem;
	height: 0.46rem;
}
#ssxf .el-slider__button-wrapper .el-slider__button{
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