<template>
	<div id="myjjr">
		<v-header :name="tit"></v-header>
		<div class="myjjr_con">
			<div class="myjjr_con_wu">
				<img src="../../static/images/tubiao/undefined.png"/>
				<p>你还没有优惠卷</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Header2 from "./Header2"
	export default{
		name:"MyYhj",
		data(){
			return{
				tit:"我的优惠卷"
			}
		},
		components:{
			"v-header":Header2
		}
	}
</script>

<style>
#myjjr{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.myjjr_con{
	flex: 1;
	background: rgba(0,0,0,0.05);
	padding: 0 50px;
	box-sizing: border-box;
}
.myjjr_con_wu{
	margin-top: 231px;
	text-align: center;	
}
.myjjr_con_wu img{
	width:222px;
	height:277px;
}
.myjjr_con_wu p{
	margin-top: 15px;
	height:31px;
	font-size:32px;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	opacity:0.5;
}
</style>