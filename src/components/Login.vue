<template>
<div>
  <div class="header">
    <span>×</span>
    <span>注册</span>
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
  .header {
    margin-top: 81px;
  }
    form{
      margin-top: 163px;
    }
</style>
