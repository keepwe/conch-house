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
    margin-top: 0.1rem;
    padding: 0.39rem 0.5rem;
    background: #fff;
    height: 0.36rem;
    font-size:0.34rem;
    font-family: "方正兰亭细黑_GBK";
    font-weight:900;
    color:rgba(0,0,0,1);
  }
  .mintui{
    font-size: 0.38rem;
  }

</style>
