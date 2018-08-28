<template id="footer">
	<footer>
		<router-link to="/home" tag="div">
			<i class="iconfont icon-shouye3"></i>
			<span>首页</span>
		</router-link>
		<router-link to="/search" tag="div">
			<i class="iconfont icon-sousuo3"></i>
			<span>搜索</span>
		</router-link>
		<router-link to="/message" tag="div">
			<i class="iconfont icon-xiaoxi2"></i>
			<span>消息</span>
		</router-link>
		<router-link to="/mine" tag="div">
			<i class="iconfont icon-wo3"></i>
			<span>我</span>
		</router-link>
	</footer>
</template>

<script>
	export default{
		name:"Footer"
	}
</script>

<style>
  footer{
    width: 100%;
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  footer div{
    float: left;
    width: 25%;
    text-align: center;
    padding: 0.13rem 0;
  }
  footer div span{
    display: block;
    font-size: 0.24rem;
  }
 footer .icon-shouye3, footer .icon-sousuo3,footer .icon-xiaoxi2,footer .icon-wo3{
    font-size: 0.45rem;
  }
</style>
