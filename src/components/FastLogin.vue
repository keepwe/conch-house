<template>
<div id="login_box">
  <div class="lo_header">
    <router-link to="/mine" tag="span" class="fl">×</router-link>
    <router-link to="/register" tag="span" class="fr">注册</router-link>
  </div>
  <div class="l_con">
  	<h2>手机快捷登录</h2>
  	<h6>未注册过的手机将会自动创建账号</h6>
  	<div class="l_con_user">
  		<input type="text" class="phonenum"  placeholder="请输入手机号" v-model="username"/>
  		<span class="getyzm">获取验证码</span>
  	</div>
  	<div class="l_con_pass">
  		<input type="text" class="pass"  placeholder="请输入密码" v-model="password"/>
  	</div>
		<mt-button type="primary" size="large">登录</mt-button>
		<div class="l_con_help">
	  	<router-link to="/login" tag="span">账号登录</router-link>
  	</div>
  </div>
  <div class="otherway">
  	<div class="l_otherw_pic">
  		<img src="../../static/images/tubiao/login_weixin.png"/>
	  	<img src="../../static/images/tubiao/login_qq.png"/>
	  	<img src="../../static/images/tubiao/login_weibo.png"/>
  	</div>
  	<span>其他方式登录</span>
  </div>
</div>
</template>

<script>
	import { Button } from 'mint-ui';
	export default {
	    name: "FastLogin",
	    data:function(){
	    	return{
	    		username:"",
	    		password:""
	    	}
	    }
	}
</script>

<style scoped="">
#login_box{
	height: 100%;
	background: url("../../static/images/tubiao/login_bac.jpg") center/cover;
}
.lo_header {
	padding: 45px 58px 0 80px;
	font-size: 34px;
	color: #fff;
	overflow: hidden;
}
.lo_header .fl{
  font-size: 43px;
}
.lo_header .fr{
	font-size: 34px;
	height: 43px;
	line-height: 60px;
}
.l_con,.otherway{
	clear: both;
	padding: 0 50px;
	box-sizing: border-box;
}
.l_con h2{
	margin-top: 169px;
	height:34px;
	line-height:70px;
	font-size:36px;
	font-weight:normal;
	color:rgba(255,255,255,1);
	margin-bottom: 38px;
	opacity:0.9;
}
.l_con h6{
	height:24px;
	font-size:24px;
	font-weight:normal;
	color:rgba(255,255,255,1);
	opacity:0.45;
}
.l_con_user,.l_con_pass{
	height: 103px;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: rgba(255,255,255,0.48);
}
.l_con_pass{
	margin-bottom: 120px;
}
.getyzm{
	height:32px;
	font-size:32px;
	font-weight:normal;
	color:rgba(255,255,255,1);
	line-height:70px;
	opacity:0.62;
	margin-left: 20%;
}
.mint-button{
	height:94px;
	background:rgba(41,174,226,0.58);
	/*opacity:0.58;*/
	border-radius:47px;
}
.mint-button-text{
	font-family: "方正兰亭细黑_GBK";
	font-size:47px;
	font-weight:900;
	line-height:94px;
	/*color: rgba(255,255,255,0.96);*/
	z-index: 222;
}
.phonenum,.pass{
	margin-top: 53px;
	height:28px;
	font-size:28px;
	font-weight:normal;
	background: none;
	border: 0;
	outline: none;
	color: #fff;
	opacity:0.61;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #fff;
    opacity:0.31;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #fff;
   opacity:0.31;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #fff;
   opacity:0.31;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:   #fff;
   opacity:0.31;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:   #fff;
   opacity:0.31;
}
.otherway{
	text-align: center;
}
.l_con_help{
	font-size:24px;
	font-weight:bold;
	color:rgba(0,0,0,1);
	line-height:70px;
	text-align: center;
	margin-bottom: 252px;
}
.l_otherw_pic{
	display: flex;
	justify-content: space-around;
	padding:0 100px;
	box-sizing: border-box;
}
.l_otherw_pic img{
	margin-left: -30px;
	opacity: 0.6;
}
.otherway span{
	height:24px;
	font-size:24px;
	font-weight:bolder;
	color:rgba(0,0,0,1);
	line-height:70px;
	opacity:0.5;
	
}
</style>
