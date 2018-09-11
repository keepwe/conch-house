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
      <button class="getyzm" @click="getyzm()"  id="btnReSend">获取验证码</button>
  	</div>
  	<div class="l_con_pass">
    <input type="text" class="pass"  placeholder="请输入验证码" v-model="password"/>
  </div>
		<mt-button type="primary" size="large" @click="tap()">登录</mt-button>
		<div class="l_con_help">
	  	<router-link to="/login" tag="span">账号登录</router-link>
  	</div>
  </div>
  <div class="otherway">
  	<div class="l_otherw_pic">
  		<img src="static/images/tubiao/login_weixin.png"/>
	  	<img src="static/images/tubiao/login_qq.png"/>
	  	<img src="static/images/tubiao/login_weibo.png"/>
  	</div>
  	<span>其他方式登录</span>
  </div>
</div>
</template>

<script>
  import $ from "jquery"
  import setCookie from "../js/setCookie";
	export default {
	    name: "FastLogin",
	    data:function(){
	    	return{
	    		username:"",
	    		password:"",
          loading2: false
	    	}
	    },
    methods:{
      getyzm(){
        var _this = this;
        wait =60;
        var phone = $(".phonenum").val();
        if (!(/^1\d{10}$/.test(phone))) {
          _this.$message({
            type:"error",
            message:"手机号码格式不正确"
          });
          return;
        }else {
                $.ajax({
                  url: "http://10.8.163.93:8080/phone.do",
                  type: "get",
                  dataType: "json",
                  data: {
                    phone: _this.username
                  },
                  success: function (res) {
                    if (res.code === 0) {
                      _this.$message({
                        type: "warning",
                        message: res.msg
                      })
                    } else if (res.code === 1) {
                      SetBtnState("#btnReSend", false, "发送成功");
                      setSecID = setInterval(function () {
                        wait = wait - 1;
                        if (wait == 0) {
                          clearInterval(setSecID);
                          SetBtnState("#btnReSend", true, "重新获取验证码");
                        } else {
                          SetBtnState("#btnReSend", false, wait + "秒后重试");
                        }
                      }, 1000);
                    }
                  }
                })
        }
      },
      tap() {
        var _this = this;
        _this.loading2 = true;
        $.ajax({
          url: "http://10.8.163.93:8080/loginuseractive.do",
          type: "post",
          dataType: "json",
          data: {
            phone: _this.username,
            active: _this.password,
          },
          success: function (res) {
            _this.loading2 = false;
            if (res.code===0){
              _this.$message({
                message: '用户名或密码不正确',
                type: 'warning',
                duration:2000,
              });
            }else if (res.code ===3){
              _this.$message({
                message: '用户不存在',
                type: 'warning',
                duration:2000,
              });
            }else if (res.code===1){
              _this.$message({
                message: '登录成功',
                type: 'success',
                duration:2000,
              });
              setCookie("uid",_this.username,30);
              setCookie("token",false,30);
              _this.$router.push('/mine')
            }
          },
          error:function (err) {
            _this.$message({
              message:'登录失败，请重试',
              type:"error",
              duration:3000,
            });
            _this.loading2 = false;
          }
        })
      }
    }
	}
  var setSecID = "";
  var wait =60;
  function SetBtnState(btn, isEnable, text) {
    if (isEnable) {
      $(btn).removeAttr("disabled").html(text);
    } else {
      $(btn).attr({ "disabled": "disabled" }).html(text);
    }
  }
</script>

<style scoped="">
#login_box{
	height: 100%;
	background: url("../../static/images/tubiao/login_bac.jpg") center/cover;
}
.lo_header {
	padding: 0.45rem 0.58rem 0 0.8rem;
	font-size: 0.34rem;
	color: #fff;
	overflow: hidden;
}
.lo_header .fl{
  font-size: 0.43rem;
}
.lo_header .fr{
	font-size: 0.34rem;
	height: 0.43rem;
	line-height: 0.6rem;
}
.l_con,.otherway{
	clear: both;
	padding: 0 0.5rem;
	box-sizing: border-box;
}
.l_con h2{
	margin-top: 1.69rem;
	height:0.34rem;
	line-height:0.7rem;
	font-size:0.36rem;
	font-weight:normal;
	color:rgba(255,255,255,1);
	margin-bottom: 0.38rem;
	opacity:0.9;
}
.l_con h6{
	height:0.24rem;
	font-size:0.24rem;
	font-weight:normal;
	color:rgba(255,255,255,1);
	opacity:0.45;
}
.l_con_user,.l_con_pass{
	height: 1.03rem;
	border-bottom-width: 0.01rem;
	border-bottom-style: solid;
	border-bottom-color: rgba(255,255,255,0.48);
}
.l_con_pass{
	margin-bottom: 1.2rem;
}
.getyzm {
  height: 0.28rem;
  width: 2.1rem;
  line-height: 0.28rem;
  font-size: 0.28rem;
  background: none;
  font-weight: normal;
  border: 0;
  outline: none;
  color: rgba(255,255,255,.3);
  margin-left: -8%;
}
.mint-button{
	height:0.94rem;
  font-size: 0.47rem;
	background:rgba(41,174,226,0.58);
	border-radius:0.47rem;
}
.mint-button-text{
	font-family: "方正兰亭细黑_GBK";
	font-size:0.47rem;
	font-weight:900;
	line-height:0.94rem;
	z-index: 222;
}
.l_con .phonenum,.l_con .pass{
	margin-top: 0.53rem;
  width:70%;
	height:0.28rem;
	font-size:0.28rem;
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
