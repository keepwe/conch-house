<template>
	<div>
		<v-header :name="tit"></v-header>
	</div>
</template>

<script>
	import Header3 from "./Header3"
	export default{
		name:"Zhuangxiu",
		data(){
			return{
				tit:"海螺装修"
			}
		},
		components:{
			"v-header": Header3
		}
	}
</script>

<style>
</style>