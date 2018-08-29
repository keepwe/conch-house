<template>
	<div>
		<v-header :name="tit"></v-header>
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
</style>