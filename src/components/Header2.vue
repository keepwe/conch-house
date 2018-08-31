<template>
	<div id="header2">
		<mt-header :title="name">
		  <router-link to="/" slot="left" @click="tap()">
		    <mt-button><i class="iconfont icon-fanhuijiantou1"></i></mt-button>
		  </router-link>
		</mt-header>		
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default{
		props:["name"],
		name:"Header2",
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
#header2 .mint-header{
	margin-top: 0.15rem;
	padding: 0 0.5rem;
	background: #fff;
	height: 0.9rem;
	font-size:0.36rem;
	font-family: "方正兰亭细黑_GBK";
	font-weight:900;
	color:rgba(0,0,0,1);
	box-sizing: border-box;
}
#header2  .mint-header .mint-button{
	height: auto;
}
#header2 .mintui{
	font-size: 0.38rem;
}
#header2 .mint-header-title{
	font-size: 0.36rem;
}
#header2 .mint-header-button.is-left{
	margin-top: -0.06rem;
}	
#header2 .icon-fanhuijiantou1{
	font-size: 0.4rem;
}	
</style>