<template>
  <div>
    <v-header :name="tit"></v-header>
    <div class="forgetp_con">
      <div class="forgetp_con_user">
        <input type="text" class="phonenum" placeholder="请输入手机号" v-model="phonenum"/>
        <span class="getyzm" @click="getyzm()">获取验证码</span>
      </div>
      <div class="forgetp_con_yzm">
        <input type="text" class="yzm" placeholder="请输入短信验证码" v-model="dxyzm"/>
      </div>
      <div class="forgetp_con_pass">
        <input type="text" class="pass" placeholder="请输入新密码（最少8位数，数字+子母）" v-model="password"/>
      </div>
      <div class="re_agree">
        <input type="checkbox" value=""/>
        <span>请阅读并同意《用户使用协议》及《用户服务协议》</span>
      </div>
      <button id="re_commit" @click="tap()">提交</button>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  import Header from "./Header";

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
      getyzm() {
        var _this = this;
        $.ajax({
        url:"http://10.8.163.93:8080/checkphone.do",
        type:"get",
        data:{
          phone:_this.phonenum
        },
        success:function(res){
        if (res.code===0){
          alert("手机号已注册，请直接登录")
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
                alert(res.msg)
              }else if(res.code===1){
                alert(res.msg)
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
    width: 80%;
    border: 0;
    outline: none;
    font-size: 0.28rem;
    font-weight: normal;
    padding-left: 0.06rem;
    box-sizing: border-box;
  }

  .getyzm {
    height: 0.28rem;
    font-size: 0.28rem;
    font-weight: normal;
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
