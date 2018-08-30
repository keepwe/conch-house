<template>
	<div id="myzx">
		<v-header :name="tit"></v-header>
		<div class="myzx_con">
			<div class="myzx_con_tab">
				<div class="myzx_con_tab_l">
					装修方案
				</div>
				<div class="myzx_con_tab_r">
					装修公司
				</div>
			</div>
			<div class="myzx_con_wu">
				<img src="../../static/images/tubiao/undefined.png"/>
				<p>你还没有关注过方案</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Header2 from "./Header2"
	export default{
		name:"Myzx",
		data(){
			return{
				tit:"装修"
			}
		},
		components:{
			"v-header":Header2
		}
	}
</script>

<style>
#myzx{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.myzx_con{
	flex: 1;
	background: rgba(0,0,0,0.05);
	padding: 0 50px;
	box-sizing: border-box;
}
.myzx_con_tab{
	height: 76px;
	padding: 17px 0;
	box-sizing: border-box;
}
.myzx_con_tab_l,.myzx_con_tab_r{
	width: 49.4%;
	float: left;
	font-size: 32px;
	text-align: center;
}
.myzx_con_wu{
	margin-top: 154px;
	text-align: center;	
}
.myzx_con_wu img{
	width:222px;
	height:277px;
}
.myzx_con_wu p{
	margin-top: 15px;
	height:31px;
	font-size:32px;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:30px;
	opacity:0.5;
}
</style>