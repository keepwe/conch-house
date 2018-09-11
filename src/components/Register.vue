<template>
  <div>
    <v-header :name="tit"></v-header>
    <div class="forgetp_con">
      <div class="forgetp_con_user">
        <input type="text" class="phonenum" placeholder="请输入手机号" v-model="phonenum"/>
        <button class="getyzm" @click="getyzm()"  id="btnReSend">获取验证码</button>
      </div>
      <div class="forgetp_con_yzm">
        <input type="text" class="yzm" placeholder="请输入短信验证码" v-model="dxyzm"/>
      </div>
      <div class="forgetp_con_pass">
        <input type="text" class="pass" placeholder="请输入新密码（最少8位数字+子母）" v-model="password"/>
      </div>
      <div class="re_agree">
        <input type="checkbox" value="" checked/>
        <span>请阅读并同意《用户使用协议》及《用户服务协议》</span>
      </div>
      <button id="re_commit" @click="tap()">提交</button>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  import Header from "./Header";
  var setSecIDR = "";
  var Rwait =60;
  function SetBtnStateR(btn, isEnable, text) {
    if (isEnable) {
      $(btn).removeAttr("disabled").html(text);
    } else {
      $(btn).attr({ "disabled": "disabled" }).html(text);
    }
  }
  export default {
    name: "Register",
    data: function () {
      return {
        phonenum: "",
        password: "",
        dxyzm: "",
        tit: "注册账号"
      }
    },
    components: {
      "v-header": Header
    },
    methods: {
      getyzm(){
        var _this = this;
        Rwait =60;
        var phone = $(".phonenum").val();
        if (!(/^1\d{10}$/.test(phone))) {
          _this.$message({
            type:"error",
            message:"手机号码格式不正确"
          });
          return;
        }
        $.ajax({
          url:"http://10.8.163.93:8080/checkphone.do",
          type:"get",
          data:{
            phone:_this.phonenum
          },
          success:function(res){
            if (res.code===0){
              _this.$message({
                type:"warning",
                message:"手机号已注册，请直接登录"
              })
            }else if (res.code===1){
              $.ajax({
                url: "http://10.8.163.93:8080/getphone.do",
                type: "get",
                dataType:"json",
                data: {
                  phone: _this.phonenum
                },
                success: function (res) {
                  if (res.code===0){
                    _this.$message({
                      type:"warning",
                      message:res.msg
                    })
                  }else if(res.code===1){
                    SetBtnStateR("#btnReSend", false,"发送成功");
                    setSecIDR = setInterval(function () {
                      Rwait = Rwait - 1;
                      if (Rwait === 0) {
                        clearInterval(setSecIDR);
                        SetBtnStateR("#btnReSend", true, "重新获取验证码");
                      } else {
                        SetBtnStateR("#btnReSend", false, Rwait + "秒后重试");
                      }
                    }, 1000);
                  }
                }
              })
            }
          }
        });
      },
      tap() {
        var _this = this;
        $.ajax({
          url: "http://10.8.163.93:8080/usersave.do",
          type: "post",
          dataType: "json",
          data: {
            userPhone: _this.phonenum,
            userCode: _this.dxyzm,
            passowrd: _this.password
          },
          success: function (res) {
            if (res.code === 1) {
              alert("注册成功");
              _this.$router.push("/login");
            } else if (res.code === 0) {
              alert(res.msg);
            }
          }
        })
      }
    }
  }
</script>

<style scoped="">
  .forgetp_con {
    padding: 0 0.5rem;
    margin-top: 1.56rem;
  }

  .forgetp_con_user, .forgetp_con_pass, .forgetp_con_yzm {
    height: 1.03rem;
    line-height: 1.3rem;
    border-bottom-width: thin;
    border-bottom-style: solid;
    border-bottom-color: rgba(0, 0, 0, 0.8);
  }
  .forgetp_con_user input, .forgetp_con_yzm input, .forgetp_con_pass input {
    width: 70%;
    border: 0;
    outline: none;
    font-size: 0.28rem;
    font-weight: normal;
    padding-left: 0.06rem;
    box-sizing: border-box;
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
    color: rgba(0, 0, 0, 0.5);
    margin-left: -8%;
  }

  .re_agree {
    margin-top: 0.32rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
    font-size: 0.24rem;
    color: rgba(0, 0, 0, 0.2);;
  }

  .re_agree input {
    width: 0.24rem;
    height: 0.24rem;
    background: rgba(0, 0, 0, 0.28);
    border-radius: 0.08rem;
    float: left;
    width: 10%;
  }

  .re_agree span {
    display: block;
    float: left;
    width: 80%;
  }

  #re_commit {
    margin-top: 0.4rem;
    width: 100%;
    height: 0.94rem;
    border: 0;
    background: rgba(255, 144, 18, 1);
    border-radius: 0.47rem;
    font-size: 0.36rem;
    color: #fff;
    outline: none;
  }
</style>
