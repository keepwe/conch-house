<template>
	<div id="mydyss">
		<v-header :name="tit"></v-header>
		<div class="mydyss_con">
			<div class="mydyss_con_wu">
				<img src="static/images/tubiao/undefined.png"/>
				<h3>没有订阅二手房搜索</h3>
				<p>试试在二手房搜索时使用订阅动能来实时获取新上房源通过</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Header2 from "./Header2"
	export default{
		name:"MyDyss",
		data(){
			return{
				tit:"我订阅的搜索"
			}
		},
		components:{
			"v-header":Header2
		}
	}
</script>

<style>
#mydyss{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.mydyss_con{
	flex: 1;
	background: rgba(0,0,0,0.05);
	padding: 0 1.21rem 0 0.98rem;
	box-sizing: border-box;
}
.mydyss_con_wu{
	margin-top: 2.81rem;
	text-align: center;	
}
.mydyss_con_wu img{
	width:2.22rem;
	height:2.77rem;
}
.mydyss_con_wu h3{
	margin-top: 0.44rem;
	height: 0.51rem;
	line-height: 0.51rem;
	font-size: 0.36rem;
	font-weight:100;
	color:rgba(0,0,0,0.6);
}
.mydyss_con_wu p{
	margin-top: 0.25rem;
	height:0.3rem;
	font-size:0.28rem;
	font-weight:100;
	color:rgba(0,0,0,0.5);
	line-height:0.3rem;
}
</style>
#mydyss{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.mydyss_con{
	flex: 1;
	background: rgba(0,0,0,0.05);
	padding: 0 121px 0 98px;
	box-sizing: border-box;
}
.mydyss_con_wu{
	margin-top: 281px;
	text-align: center;	
}
.mydyss_con_wu img{
	width:222px;
	height:277px;
}
.mydyss_con_wu h3{
	margin-top: 44px;
	height: 51px;
	line-height: 51px;
	font-size: 36px;
	font-weight:100;
	color:rgba(0,0,0,0.6);
}
.mydyss_con_wu p{
	margin-top: 25px;
	height:30px;
	font-size:28px;
	font-weight:100;
	color:rgba(0,0,0,0.5);
	line-height:30px;
}
</style>