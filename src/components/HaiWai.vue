<template>
	<div>
		<v-header :name="tit"></v-header>
		<ul class="hw_tubiao">
			<li>
				<img src="../../static/images/tubiao/hw_meiguo.jpg"/>
				<span>美国</span>
			</li>
			<li>
				<img src="../../static/images/tubiao/hw_aodaliya.png"/>
				<span>澳大利亚</span>
			</li>
			<li>
				<img src="../../static/images/tubiao/hw_jianada.jpg"/>
				<span>加拿大</span>
			</li>
			<li>
				<img src="../../static/images/tubiao/hw_riben.jpg"/>
				<span>日本</span>
			</li>
			<li>
				<img src="../../static/images/tubiao/hw_yingguo.jpg"/>
				<span>英国</span>
			</li>
			<li>
				<img src="../../static/images/tubiao/hw_taiguo.png"/>
				<span>泰国</span>
			</li>
			<li>
				<img src="../../static/images/tubiao/hw_deguo.png"/>
				<span>德国</span>
			</li>
			<li>
				<img src="../../static/images/tubiao/hw_hanguo.jpg"/>
				<span>韩国</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Header3 from "./Header3"
	export default{
		name:"Haiwai",
		data(){
			return{
				tit:"海外频道"
			}
		},
		components:{
			"v-header": Header3
		}
	}
</script>

<style>
.hw_tubiao{
	display: flex;
	flex-wrap: wrap;
	padding: 0 0.25rem;
}
.hw_tubiao li{
	width: 25%;
}
.hw_tubiao li img{
	width: 0.86rem;
	height: 0.86rem;	
}
</style>