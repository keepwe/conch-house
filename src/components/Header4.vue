<template>
	<div id="header4">
		<mt-header :title="name">
		  <router-link to="/" slot="left" @click="tap()">
		    <mt-button><i class="iconfont icon-fanhuijiantou1"></i></mt-button>
		  </router-link>
		  <mt-button slot="right"><i class="iconfont icon-share"></i></mt-button>
		</mt-header>
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default{
		props:["name"],
		name:"Header4",
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
#header4  .mint-header{
	margin: 0.37rem 0.4rem 0;
	background: #fff;
	height: 0.36rem;
	font-size:0.36rem;
	font-family: "方正兰亭细黑_GBK";
	font-weight:900;
	color:rgba(0,0,0,1);	
}
#header4 .mintui{
	font-size: 0.36rem;
}
#header4 .mint-header-button.is-right{
	font-size: 0.46rem;
}
#header4 .mint-header-title{
	font-weight: 100;
	font-size: 0.36rem;
}
#header4 .mint-header-button.is-left{
	margin-top: -0.06rem;
}	
#header4 .icon-fanhuijiantou1{
	font-size: 0.40rem;
	font-weight: 400;
}
</style>

