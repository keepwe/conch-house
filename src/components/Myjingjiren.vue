<template>
	<div id="myjjr">
		<v-header :name="tit"></v-header>
		<div class="myjjr_con">
			<div class="myjjr_con_tab">
				<div class="myjjr_con_tab_l  mjjr_active">
					服务我的经纪人
				</div>
				<div class="myjjr_con_tab_r">
					收藏的经纪人
				</div>
			</div>
			<div class="myjjr_con_wu">
				<img src="../../static/images/tubiao/undefined.png"/>
				<p>你还没有经纪人</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Header2 from "./Header2"
	export default{
		name:"MyJjr",
		data(){
			return{
				tit:"我的经纪人"
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
.myjjr_con_tab{
	height: 76px;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: rgba(0,0,0,0.1);
	padding: 17px 0;
	box-sizing: border-box;
}
.myjjr_con_tab_l,.myjjr_con_tab_r{
	width: 49.4%;
	float: left;
	font-size: 32px;
	text-align: center;
}
.myjjr_con_tab_l{
	border-right-width: 1px;
	border-right-style: solid;
	border-right-color: rgba(0,0,0,0.1);
}
.mjjr_active{
	color: #FF9114;
}
.myjjr_con_wu{
	margin-top: 154px;
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