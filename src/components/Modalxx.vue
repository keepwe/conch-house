<template>
	<div id="modalx">
		<h1>房源发布技巧</h1>
		<p>1.小区：输入关键词后,请优先选择系
		统推荐小区，选择系统推荐小区可以
		查看定价参考信息。无系统推荐，也
		可手动输入。</p>
		<p>2.地址：准确填写楼栋.单元,门牌号,
		可以加速房源上架速度。</p>
		<p>3.期望售价:建议参考同小区相拟户型
		最新成交信息，合理的价格,可以更快
		出售房源</p>
		<p>4.如果您一在海螺门店委托,请不要在
		线上重复委托，可直接到业主中心查
		看该房源。</p>
		<p @click="fh">×</p>
	</div>
</template>

<script>
	export default{
		name:"Modalxx",
		methods:{
			fh(){
				this.$router.back(-1)
			}
		}
	}
</script>

<style>
#modalx{
	height: 100%;
	background:rgba(0,0,0,0.3);
	overflow: hidden;
	font-family:PingFangSC-Thin;
}
#modalx h1{
	margin:0 1.45rem;
	margin-top: 1.83rem;
	padding-bottom: 0.4rem;
	text-align: center;
	color: #fff;
	font-size: 0.34rem;
	border-bottom: 1px solid #fff;
}
#modalx p{
	font-size:0.28rem;
	font-weight:100;
	color:rgba(255,255,255,1);
	line-height:0.3rem;
	margin:0 1.43rem;
}
#modalx p:nth-of-type(1){
	margin:0.83rem 1.43rem 0.9rem;
}
#modalx p:nth-of-type(3){
	margin:1.05rem 1.43rem 0.89rem;
}
#modalx p:nth-of-type(5){
	font-size: 0.46rem;
	text-align: center;
	margin:1.23rem 1.43rem 1.64rem;
}
</style>