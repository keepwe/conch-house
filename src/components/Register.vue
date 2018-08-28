<template>
	<div>
		<v-header :name="tit"></v-header>
		<div class="forgetp_con">
			<div class="forgetp_con_user">
		  		<input type="text" class="phonenum"  placeholder="请输入手机号" v-model="phonenum"/>
		  		<span class="getyzm">获取验证码</span>
		  	</div>
		  	<div class="forgetp_con_yzm">
		  		<input type="text" class="yzm"  placeholder="请输入短信验证码" v-model="dxyzm"/>
		  	</div>
		  	<div class="forgetp_con_pass">
		  		<input type="text" class="pass"  placeholder="请输入新密码（最少8位数，数字+子母）" v-model="password"/>
		  	</div>
		  	<div class="re_agree">
		  		<input type="checkbox" value="" />
		  		<span>请阅读并同意《用户使用协议》及《用户服务协议》</span>
		  	</div>
		  	<button id="re_commit" @click="tap()">提交</button>
		</div>
	</div>
</template>

<script>
	import Header  from "./Header";
	export default{
		name:"Register",
		data:function(){
			return{
				phonenum:"",
				password:"",
				dxyzm:"",
				tit:"注册账号"
			}	
		},
		components:{
			"v-header":Header
		},
		methods:{
			tap(){
				this.$router.push("/login")
			}
		}
	}
</script>

<style scoped="">
.forgetp_con{
	padding: 0 50px;
	margin-top: 156px;
}
.forgetp_con_user,.forgetp_con_pass,.forgetp_con_yzm{
	height: 103px;
	line-height: 130px;
	border-bottom-width: thin;
	border-bottom-style: solid;
	border-bottom-color: rgba(0,0,0,0.8);
}
.forgetp_con_user input,.forgetp_con_yzm input,.forgetp_con_pass input{
	width: 80%;
	border: 0;
	outline: none;
	font-size:28px;
	font-weight:normal;
	padding-left: 6px;
	box-sizing: border-box;
}
.getyzm{
	height:28px;
	font-size:28px;
	font-weight:normal;
	color:rgba(0,0,0,0.5);
	margin-left: -8%;
}
.re_agree{
	margin-top: 32px;
	padding: 0 60px;
	box-sizing: border-box;
	font-size: 24px;
	color:rgba(0,0,0,0.2);;
}
.re_agree input{
	width: 24px;
	height: 24px;
	background:rgba(0,0,0,0.28);
	border-radius:8px;
	float: left;
	width: 10%;
}
.re_agree span{
	display: block;
	float: left;
	width: 80%;
}
#re_commit{
	margin-top: 40px;
	width: 100%;
	height:94px;
	border: 0;
	background:rgba(255,144,18,1);
	border-radius:47px;
	font-size: 36px;
	color: #fff;
	outline: none;
}
</style>