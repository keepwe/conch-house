<template>
<div id="login_box">
  <div class="lo_header">
    <span class="fl">×</span>
    <span class="fr">注册</span>
  </div>
  <div class="l_con">
  	<h2>账号密码登录</h2>
  	<div class="l_con_user">
  		<input type="text" class="phonenum"  placeholder="请输入手机号" v-model="username"/>
  	</div>
  	<div class="l_con_pass">
  		<input type="text" class="pass"  placeholder="请输入密码" v-model="password"/>
  	</div>
		<mt-button type="primary" size="large">登录</mt-button>
  </div>
  
</div>
</template>

<script>
	import { Field } from 'mint-ui';
	import { Button } from 'mint-ui';
	export default {
	    name: "Login",
	    data:function(){
	    	return{
	    		username:"",
	    		password:""
	    	}
	    }
	}
</script>

<style>
#login_box{
	height: 100%;
	background: url("../../static/images/tubiao/login_bac.jpg");
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
.l_con{
	clear: both;
	padding: 0 50px;
}
.l_con h2{
	margin-top: 163px;
	height: 42px;
	line-height: 42px;
	font-size:42px;
	font-weight:normal;
	color:rgba(255,255,255,1);
	margin-bottom: 38px;
}
.l_con_user,.l_con_pass{
	height: 103px;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: rgba(255,255,255,0.48);
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
	opacity:0.31;
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
</style>
