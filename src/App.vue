<template>
  <div id="app">
    <section>
    	<router-view></router-view>
    </section>
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



  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,figure{margin:0; padding:0;}
ul,li,ol{list-style:none;}
img,fieldset{border:0; }
a{text-decoration:none; color:#333;}
h1,h2,h3,h4,h5,h6{font-weight:100;}
body{
font-size: 16px}
input,a{outline:none;}
.router-link-active{
	color: #FF9012;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
#app {
  height: 100%;
}
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
	padding: 13px 0;
}
footer div span{
	display: block;
	font-size: 24px;
}
.icon-shouye3,.icon-sousuo3,.icon-xiaoxi2,.icon-wo3{
	font-size: 45px;
}

</style>
