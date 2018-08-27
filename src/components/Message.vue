<template>
	<div class="msg_box">
		<header>消息</header>
    <div class="msg_list">
      <div class="fl">
        <img src="../../static/images/picture/hw_p1.png"/>
      </div>
      <div class="fr">
        <span class="iconfont icon-fanhui"></span>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
	import Footer from "./Footer"
	export default{
		name:"Message",
		components:{
		  "v-footer":Footer
		}
	}
</script>

<style scoped>
.msg_box{
  height: 100vw;
  background: #f2f2f2;
}
	header{
    text-align: center;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    background: #fff;
  }
  .msg_list{
    height: 110px;
    overflow: hidden;
    background: #fff;
    margin-top: 40px;
    padding: 0 53px;
  }
.msg_list .fl img{
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-top: 15px;
}
.msg_list .fr span{
  display: block;
  font-size: 26px;
  height: 110px;
  line-height: 110px;
}
</style>
