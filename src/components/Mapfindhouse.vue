<template>
	<div id="maphou">
		<header>
			<div class="head_l" @click="tap()">
				<i class="iconfont icon-fanhuijiantou3"></i>
			</div>
			<div class="head_c">
				<span>二手房</span>
				<span>新房</span>
				<span>租房</span>
			</div>
			<div class="head_r">
				<img src="static/images/tubiao/map_fdj.png"/>
				<img src="static/images/tubiao/map_aa.png"/>
			</div>
		</header>
		<div id="allmap1" ref="allmap1"></div>
		<div class="map_daohang">
			<div class="map_dh_l">
				<img src="static/images/tubiao/map_subway.png"/>
				<span>地铁找房</span>
			</div>
			<div class="map_dh_r">
				<img src="static/images/tubiao/map_pen.png"/>
				<span>画圈找房</span>
			</div>	
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"Maphouse",
		methods:{
			tap(){
				this.$router.back(-1)
			},
			map(){
		        let map = new BMap.Map(this.$refs.allmap1); // 创建Map实例
		        map.centerAndZoom("郑州", 17);// 初始化地图,设置中心点坐标和地图级别
		
		        map.setCurrentCity("郑州");// 设置地图显示的城市 此项是必须设置的
		        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
		    }
	    },
	    mounted(){
	      this.map()
	    }
    }

</script>

<style>
#allmap1{
	height:12.26rem;
}
#maphou header{
	padding: 0.33rem 0.5rem 0.27rem;
	box-sizing: border-box;
	display: flex;
}
#maphou .head_l{
	font-size: 0.4rem;
}
#maphou .head_c{
	width: 60%;
	margin: 0 0.34rem;
	display: flex;
	justify-content: space-between;
	font-size: 0.36rem;
	color: #000;
	font-weight: 100;
}
#maphou .head_r img:first-child{
	width: 0.42rem;
	height: 0.42rem;
	margin-right: 0.35rem;
}
#maphou .head_r img:last-child{
	width: 0.32rem;
	height: 0.37rem;
}
#maphou .map_daohang{
	position: fixed;
	bottom: 0.25rem;
	width: 86.4%;
	display: flex;
	justify-content: space-between;
	left: 6.7%;
	background: #fff;
}
#maphou .map_daohang .map_dh_l,#maphou .map_daohang .map_dh_r{
	width: 50%;
	padding: 0.32rem 0 0.27rem 0.62rem;
}
#maphou .map_daohang .map_dh_l img,#maphou .map_daohang .map_dh_r img{
	width: 0.39rem;
	height: 0.39rem;
	float: left;
}
#maphou .map_daohang span{
	font-size: 0.36rem;
	margin-left:0.22rem;	
}
</style>