<template>
	<div id="ssesf">
		<div class="ssesf_tit">
			<h1>搜索历史</h1>
			<span>清空</span>
		</div>
		<div class="ssesf_tit_con">
			<span>北京</span>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"Ssesf"
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
}
.ssesf_tit_con span{
	float: left;
	width:1.4rem;
	height:0.6rem;
	border-radius:0.1rem;
	font-size: 0.24rem;
	line-height: 0.24rem;
	text-align: center;
	color:rgba(0,0,0,1);
}
</style>