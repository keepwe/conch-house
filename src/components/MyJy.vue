<template>
	<div id="myjy">
		<v-header :name="tit"></v-header>
		<div class="myjy_con">
			<div class="myjy_con_wu">
				<img src="static/images/tubiao/undefined.png"/>
				<h3>暂无交易信息</h3>
				<p>请选用签约手机号登录</p>
			</div>
			<div class="myjy_con_qhzh">
				切换账号
			</div>
		</div>
	</div>
</template>

<script>
	import Header2 from "./Header2"
	export default{
		name:"MyJy",
		data(){
			return{
				tit:"我的交易"
			}
		},
		components:{
			"v-header":Header2
		}
	}
</script>

<style>
#myjy{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.myjy_con{
	flex: 1;
	background: rgba(0,0,0,0.05);
	padding: 0 0.5rem;
	box-sizing: border-box;
}
.myjy_con_wu{
	margin-top: 2.61rem;
	text-align: center;	
}
.myjy_con_wu img{
	width:2.22rem;
	height:2.77rem;
}
.myjy_con_wu h3{
	margin-top: 0.45rem;
	height: 0.51rem;
	line-height: 0.51rem;
	font-size: 0.36rem;
	font-weight:100;
	color:rgba(0,0,0,0.6);
}
.myjy_con_wu p{
	height:0.45rem;
	font-size:0.28rem;
	font-weight:100;
	color:rgba(0,0,0,0.5);
	line-height:0.45rem;
}
.myjy_con_qhzh{
	margin-top: 0.7rem;
	height:0.8rem;
	background:rgba(255,144,18,1);
	border-radius:40px;
	font-size:0.36rem;
	font-weight:100;
	color:rgba(255,255,255,1);
	text-align: center;
	line-height: 0.8rem;
}
</style>
#myjy{
	height: 100%;
	display: flex;
	flex-direction: column;
}
.myjy_con{
	flex: 1;
	background: rgba(0,0,0,0.05);
	padding: 0 50px;
	box-sizing: border-box;
}
.myjy_con_wu{
	margin-top: 261px;
	text-align: center;	
}
.myjy_con_wu img{
	width:222px;
	height:277px;
}
.myjy_con_wu h3{
	margin-top: 45px;
	height: 51px;
	line-height: 51px;
	font-size: 36px;
	font-weight:100;
	color:rgba(0,0,0,0.6);
}
.myjy_con_wu p{
	height:45px;
	font-size:28px;
	font-weight:100;
	color:rgba(0,0,0,0.5);
	line-height:45px;
}
.myjy_con_qhzh{
	margin-top: 70px;
	height:80px;
	background:rgba(255,144,18,1);
	border-radius:40px;
	font-size:36px;
	font-weight:100;
	color:rgba(255,255,255,1);
	text-align: center;
	line-height: 80px;
}
</style>