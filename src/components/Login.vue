<template>
<div id="login_box">
  <div class="lo_header">
  	<router-link to="/mine" tag="span" class="fl">×</router-link>
    <router-link to="/register" tag="span" class="fr">注册</router-link>
  </div>
  <div class="l_con  login_con">
  	<h2>账号密码登录</h2>
  	<div class="l_con_user">
  		<input type="text" class="phonenum"  placeholder="请输入手机号" v-model="username"/>
  	</div>
  	<div class="l_con_pass">
  		<input type="text" class="pass"  placeholder="请输入密码" v-model="password"/>
  	</div>
		<mt-button type="primary" size="large" @click="tap()">登录</mt-button>
		<div class="l_con_help">
	  	<router-link to="/fastlogin" tag="span">手机快捷登录</router-link>
	  	<span>|</span>
	  	<router-link to="/forgetpass" tag="span">忘记密码</router-link>
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
	export default {
	    name: "Login",
	    data:function(){
	    	return{
	    		username:"",
	    		password:""
	    	}
	    },
	    methods:{
	    	tap(){
	    	   this.$router.push('/mine')
	    	}
	    }
	}
</script>

<style>
#login_box{
	height: 100%;
	background: url("../../static/images/tubiao/login_bac.jpg") no-repeat center/cover;
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
	font-family: "苹方 常规";
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
.login_con input::placeholder{
	color: rgba(255,255,255,0.48);
}
.l_con_pass{
	margin-bottom: 120px;
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
	z-index: 222;
}
.l_con .phonenum,.l_con .pass{
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
  .otherway{
    text-align: center;
  }
  .l_con_help{
    font-size:0.24rem;
    font-weight:bold;
    color:rgba(0,0,0,1);
    line-height:0.7rem;
    text-align: center;
    margin-bottom: 2.52rem;
  }
  .l_otherw_pic{
    display: flex;
    justify-content: space-around;
    padding:0 1rem;
    box-sizing: border-box;
  }
  .l_otherw_pic img{
    margin-left: -0.3rem;
    opacity: 0.6;
  }
  .otherway span{
    height:0.24rem;
    font-size:0.24rem;
    font-weight:bolder;
    color:rgba(0,0,0,1);
    line-height:0.7rem;
    opacity:0.5;
  }
</style>
