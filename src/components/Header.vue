<template>
	<div>
		<mt-header title="找回账号">
		  <router-link to="/login" slot="left" @click="tap()">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>		
	</div>
</template>

<script>
	import { Header } from 'mint-ui';
	export default{
		name:"Header",
		methods:{
			tap(){
				this.$router.back(-1)
			}
		}
	}
</script>

<style>
.mint-header{
	margin-top: 10px;
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
	
</style>