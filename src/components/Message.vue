<template>
	<div class="msg_box">
		<header>消息</header>
    <div class="msg_list">
      <div class="fl">
        <img src="static/images/picture/hw_p1.png"/>
        <div>
          <P>WY02762</P>
          <span>接受电话</span>
        </div>
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
  height: 100vh;
  background: #f2f2f2;
}
header{
    text-align: center;
    height: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.36rem;
    background: #fff;
}
  .msg_list{
    height: 1.1rem;
    overflow: hidden;
    background: #fff;
    margin-top: 0.4rem;
    padding: 0 0.53rem;
  }
  .msg_list .fl img{
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    margin-top: 0.15rem;
    vertical-align: middle;
  }
  .msg_list .fl div{
    display: inline-block;
    vertical-align: middle;
    margin-top: 0.1rem;
    margin-left: 0.4rem;
  }
.msg_list .fl div p{
  font-size: 0.26rem;
  line-height: 0.3rem;
}
.msg_list .fl div span{
  font-size: 0.22rem;
  color: #aaa;
  line-height: 0.28rem;
}
  .msg_list .fr span{
    display: block;
    font-size: 0.26rem;
    height: 1.1rem;
    line-height: 1.1rem;
  }
</style>
