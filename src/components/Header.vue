<template>
	<div id="header">
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
#header .mint-header{
	margin-top: 0.3rem;
	padding: 0.39rem 0.5rem;
	background: #fff;
	height: 0.36rem;
	font-size:0.34rem;
	font-family: "方正兰亭细黑_GBK";
	/*font-weight:900;*/
	color:rgba(0,0,0,1);
}
#header  .mint-header .mint-button{
	height: auto;
}
#header .mintui{
	font-size: 0.38rem;
}
#header .mint-header-title{
	font-weight: 100;
	font-size: 0.36rem;
}
#header .mint-header-button.is-left{
	margin-top: -0.06rem;
}	
#header .icon-fanhuijiantou1{
	font-size: 0.4rem;
	font-weight: 400;
}	
</style>

