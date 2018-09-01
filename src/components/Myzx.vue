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
				<img src="static/images/tubiao/undefined.png"/>
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
	padding: 0 0.5rem;
	box-sizing: border-box;
}
.myzx_con_tab{
	height: 0.76rem;
	padding: 0.17rem 0;
	box-sizing: border-box;
}
.myzx_con_tab_l,.myzx_con_tab_r{
	width: 49.4%;
	float: left;
	font-size: 0.32rem;
	text-align: center;
}
.myzx_con_wu{
	margin-top: 1.54rem;
	text-align: center;
}
.myzx_con_wu img{
	width:2.22rem;
	height:2.77rem;
}
.myzx_con_wu p{
	margin-top: 0.15rem;
	height:0.31rem;
	font-size:0.32rem;
	font-weight:100;
	color:rgba(0,0,0,1);
	line-height:0.3rem;
	opacity:0.5;
}
</style>
