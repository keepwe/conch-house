<template>
	<div>
		<v-header :name="tit"></v-header>
		<div class="bk_tabsx">
			<ul class="bk_tabsx_tubiao">
				<li class="bk_esf">
					<img src="../../static/images/tubiao/baike_house.png"/>
				</li>
				<li class="bk_xf">
					<img src="../../static/images/tubiao/baike圆角矩形 1.png"/>
				</li>
				<li class="bk_mf">
					<img src="../../static/images/tubiao/baike_sale.png"/>
				</li>
				<li class="bk_hf">
					<img src="../../static/images/tubiao/baike_jiantou.png"/>
				</li>
				<li class="bk_zf">
					<img src="../../static/images/tubiao/baike_zuf.png"/>
				</li>
				<li class="bk_qb">
					<img src="../../static/images/tubiao/baike_zu.png"/>
				</li>
			</ul>
			<ul class="bk_tabsx_wenzi">
				<li>二手房</li>
				<li>新房</li>
				<li>卖房</li>
				<li>换房</li>
				<li>租房</li>
				<li>全部</li>
			</ul>
		</div>
		<div class="bk_tabzy">
			<ul class="bk_tabz">
				<li class="bk_tabz_active">准备买房</li>
				<li>看房/选房</li>
				<li>看房/选房</li>
				<li>看房/选房</li>
				<li>看房/选房</li>
				<li>看房/选房</li>
				<li>看房/选房</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<ul class="bk_taby">
				<li>
					<h2>非北京户籍能在北京买房吗，需要什么资格?</h2>
					<span>二手房</span>
				</li>
				<li>
					<h2>买卖二手房，通过中介交易流程是什么？</h2>
					<span>二手房</span>
					<span>中介</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Header4 from "./Header4"
	export default{
		name:"Baike",
		data(){
			return {
				tit:"百科"
			}
		},
		components:{
			"v-header":Header4
		}
		
	}
</script>

<style>
.bk_tabsx{
	margin-top: 0.28rem;
	height: 0.96rem;
	border-top: 0.01rem solid  rgba(0,0,0,0.5);
	border-bottom: 0.01rem solid  rgba(0,0,0,0.5);
	padding: 0.6rem 0.3rem 0;
}
.bk_tabsx_tubiao{
	display: flex;
	justify-content: space-around;
}
.bk_esf img{
	width: 0.46rem;
	height: 0.46rem;
}
.bk_xf img{
	width: 0.8rem;
	height: 0.46rem;
}
.bk_mf img{
	width: 0.25rem;
	height: 0.48rem;
}
.bk_hf img{
	width: 0.45rem;
	height: 0.42rem;
}
.bk_zf img{
	width: 0.43rem;
	height: 0.48rem;
}
.bk_qb img{
	width: 0.43rem;
	height: 0.43rem;
}
.bk_tabsx_wenzi{
	display: flex;
	justify-content: space-between;
	padding: 0 0.2rem;
}
.bk_tabsx_wenzi li{
	text-align: center;
	font-size:0.24rem;
	font-weight:300;
	line-height:0.36rem;
}
.bk_tabzy{
	overflow: hidden;
	display: flex;
}
.bk_tabz li{
	padding: 0 0.42rem 0 0.2rem;
	box-sizing: border-box;
	height: 1rem;
	width: 2.05rem;
	text-align: center;
	line-height: 1rem;
	font-size: 0.3rem;
	color:rgba(0,0,0,1);
	background: rgba(0,0,0,0.1);
}
.bk_tabz .bk_tabz_active{
	background: rgba(0,0,0,0);
	font-weight: 300;
}
.bk_taby{
	margin-left: 0.42rem;
	overflow: hidden;
}
.bk_taby li{
	padding: 0.33rem 0 0.31rem 0;
	border-bottom: 0.01rem solid #C0D3AC;
}
.bk_taby li h2{
	padding-right: 0.47rem;
	height:0.64rem;
	font-size:0.30rem;
	font-weight:300;
	color:rgba(0,0,0,1);
	line-height:0.36rem;
}
.bk_taby li span{
	display: inline-block;
	margin: 0.19rem 0.19rem 0.31rem 0;
	background:rgba(255,222,185,1);
	border-radius:0.06rem;
	font-size:0.24rem;
	font-weight:300;
	color:rgba(255,144,33,1);
	line-height:0.36rem;
	padding: 0.09rem 0.26rem;
}
</style>