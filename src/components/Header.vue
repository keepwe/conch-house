<template>
	<div>
		<mt-header :title="name">
		  <router-link to="/login" slot="left" @click="tap()">
		    <mt-button><i class="iconfont icon-fanhuijiantou1"></i></mt-button>
		  </router-link>
		</mt-header>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default{
		props:["name"],
		name:"Header",
		data:function(){
			return{
				str:""
			}
		},
		methods:{
			tap(){
				this.$router.back(-1)
			}
		},
		mounted(){
			this.str="hello"
		}
	}
</script>

<style>
.mint-header{
	margin-top: 30px;
	padding: 39px 50px;
	background: #fff;
	height: 36px;
	font-size:34px;
	font-family: "方正兰亭细黑_GBK";
	font-weight:900;
	color:rgba(0,0,0,1);
}
.mintui{
	font-size: 38px;
}
.mint-header-title{
	font-weight: 600;
	font-size: 36px;
}
.mint-header-button.is-left{
	margin-top: -6px;
}	
.icon-fanhuijiantou1{
	font-size: 40px;
	font-weight: 400;
}	
</style>

