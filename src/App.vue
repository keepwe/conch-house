<template>
  <div id="app">
    	<router-view></router-view>
  </div>
</template>

<script>
  var bw = (document.documentElement.clientWidth/7.5)+"px";
  var htmlTag = document.getElementsByTagName("html")[0];
  htmlTag.style.fontSize=bw;
export default {
  name: 'App',
}
</script>

<style>
body,ul,li,dl,dt,dd,p,ol,h1,h2,h3,h4,h5,h6,form,img,table,fieldset,legend,figure{margin:0; padding:0;}
ul,li,ol{list-style:none;}
img,fieldset{border:0; }
a{text-decoration:none; color:#333;}
h1,h2,h3,h4,h5,h6{font-weight:100;}
body{font-family: "方正兰亭细黑_GBK";
font-size: 16px}
input,a{outline:none;}
.router-link-active{
	color: #FF9012
}
.active{
  color: #000;
}
.fr{
  float: right;
}
.fl{
  float: left;
}
#app {
  height: 100vh;
}
</style>
