<template>
  <div id="app">
    	<router-view></router-view>
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
body{font-family: "方正兰亭细黑_GBK";
font-size: 16px}
input,a{outline:none;}
.router-link-active{
	color: #FF9012
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
/*定义一个混合器,用于多次复用.*/
@mixin border-1px($color) {
  /*用于伪类的定位*/
    position: relative;
    &:after {
      /*定义一个伪类,将它置于元素的底部.*/
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid $color;
        content: ' ';
    }
}
/*使用上面定义的混合器*/
@include border-1px(red);
/*定义全局类:.border-1px;期望根据不同dpi去缩放,使用@media实现.*/
/*最小dpi为1.5的设备进行相关设置:1.5*0.7~1*/
@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5) {
    .border-1px {
        &::after {
            -webkit-transform: scaleY(0.7);
            transform: scaleY(0.7)
        }
    }
}

@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2) {
    .border-1px {
        &::after {
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5)
        }
    }
}
/*再为元素添加上面写好的 .border-1px 类.*/
</style>
