<template>
	<div>
		<v-header :name="tit"></v-header>
		<div class="forgetp_con">
			<div class="forgetp_con_user">
		  		<input type="text" class="phonenum"  placeholder="请输入手机号" v-model="phonenum"/>
		  		<span class="getyzm">获取验证码</span>
		  	</div>
		  	<div class="forgetp_con_yzm">
		  		<input type="text" class="fgp_yzm"  placeholder="请输入短信验证码" v-model="dxyzm"/>
		  	</div>
		  	<div class="forgetp_con_pass">
		  		<input type="text" class="pass"  placeholder="请输入新密码（最少8位数，数字+子母）" v-model="password"/>
		  	</div>
		  	<button id="re_commit">提交</button>
		</div>
	</div>
</template>

<script>
	import Header from "./Header"
	export default{
		name:"ForgetPass",
		data:function(){
			return{
				phonenum:"",
				password:"",
				dxyzm:"",
				tit:"找回账号"
			}
		},
		components:{
			"v-header":Header
		},
		mounted(){
//			location.reload()
//			this.$router.go(0)
//			this.$router.push({path:"/forgetpass"})
		}
	}
</script>

<style>
.forgetp_con{
	padding: 0 0.5rem;
	margin-top: 1.56rem;
}
.forgetp_con_user,.forgetp_con_pass,.forgetp_con_yzm{
	height: 1.03rem;
	line-height: 1.3rem;
	border-bottom-width: thin;
	border-bottom-style: solid;
	border-bottom-color: rgba(0,0,0,0.8);
}
.forgetp_con input{
	width: 80%;
	border: 0;
	outline: none;
	font-size:0.28rem;
	font-weight:normal;
}
input::placeholder{
	color: rgba(0,0,0,0.2);
}
.getyzm{
	height:0.28rem;
	font-size:0.28rem;
	font-weight:normal;
	color:rgba(0,0,0,0.5);
	margin-left: -8%;
}
#re_commit{
	margin-top: 1.19rem;
	width: 100%;
	height:0.94rem;
	border: 0;
	background:rgba(255,144,18,1);
	border-radius:0.47rem;
	font-size: 0.36rem;
	color: #fff;
	outline: none;
}
</style>
