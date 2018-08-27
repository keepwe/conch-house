<template>
<div id="login_box">
  <div class="header">
    <span class="fl">×</span>
    <span class="fr">注册</span>
  </div>
  <form action="">
    <fieldset>
      <legend>用户名密码登录</legend>
      <input type="text" placeholder="请输入手机号">
    </fieldset>
  </form>
</div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  #login_box{
    height: 100vh;
    background: url("../../static/images/tubiao/login_bac.jpg");
  }
  .header {
    padding: 49px 58px 0 80px;
    font-size: 34px;
    color: #fff;
  }
  .header .fl{
    font-size: 44px;
  }
    form{
      margin-top: 163px;
    }
</style>
