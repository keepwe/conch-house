<template>
	<div id="Ss">
		<header>
			<router-link to="/esf" tag="span">二手房</router-link>
			<router-link to="/esf" tag="span">新房</router-link>
			<router-link to="/esf" tag="span">租房</router-link>
		</header>
		<div class="ss_search_kuang">
	        <i class="iconfont icon-sousuo1"></i>
	        <input type="text" placeholder="你想住在哪？"/>
	    </div>
	    <router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:"Ssuo",
		components:{
			name:"ss_esf"
		}
		
	}
</script>

<style> 
#Ss header{
	padding: 0.48rem 1rem 0.36rem;
	height:0.48rem;
	font-size:0.4rem;
	font-family:PingFangSC-Light;
	font-weight:bold;
	color:rgba(0,0,0,1);
	opacity:0.5;
	display: flex;
	justify-content: space-between;
}
#Ss .ss_search_kuang{
    height: 0.6rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.38rem;
    box-shadow: 0.04rem 0.02rem 0.1rem rgba(0, 0, 0, 0.36);
    margin: 0 0.46rem 0.02rem 0.54rem;
    box-sizing: border-box;
  }

#Ss .ss_search_kuang i{
    margin: 0 0.33rem 0 0.37rem;
    font-size: 0.34rem;
  }

#Ss .ss_search_kuang input{
    width: 3.5rem;
    height: 0.54rem;
    line-height: 0.54rem;
    border: 0;
    font-size: 0.3rem;
    font-weight: 100;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
  }
	
</style>