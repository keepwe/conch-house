<template>
	<div>
		<v-header :name="tit"></v-header>
		<ul class="hw_tubiao">
			<li>
				<img src="static/images/tubiao/hw_meiguo.jpg"/>
				<span>美国</span>
			</li>
			<li>
				<img src="static/images/tubiao/hw_aodaliya.png"/>
				<span>澳大利亚</span>
			</li>
			<li>
				<img src="static/images/tubiao/hw_jianada.jpg"/>
				<span>加拿大</span>
			</li>
			<li>
				<img src="static/images/tubiao/hw_riben.jpg"/>
				<span>日本</span>
			</li>
			<li>
				<img src="static/images/tubiao/hw_yingguo.jpg"/>
				<span>英国</span>
			</li>
			<li>
				<img src="static/images/tubiao/hw_taiguo.png"/>
				<span>泰国</span>
			</li>
			<li>
				<img src="static/images/tubiao/hw_deguo.png"/>
				<span>德国</span>
			</li>
			<li>
				<img src="static/images/tubiao/hw_hanguo.jpg"/>
				<span>韩国</span>
			</li>
		</ul>
		<div class="hw_tubiao_control">
			<div class="htc_one htc_active"></div>
			<div></div>
		</div>
		<div class="hw_jz">
			<div class="hw_jz_l">
				<p>【美国】置业欧兰多
					享童话生活
				</p>	
			</div>
			<div class="hw_jz_r">
				<p>【日本】东京优选房
					源品鉴会
				</p>
			</div>
		</div>
		<div class="hw_jz_down">
			<div class="hw_jz_down_l">
				<span>讲座</span>
				<b>8月29日</b>
			</div>
			<div class="hw_jz_down_r">
				<span>讲座</span>
				<b>8月30日</b>
			</div>
		</div>
		<ul	class="hw_tjlist">
			<li><span class="hw_tjlist_active">推荐</span></li>	
			<li><span>商学院</span></li>	
			<li><span>经验</span></li>	
			<li><span>资讯</span></li>	
			<li><span>攻略</span></li>	
		</ul>
		<div class="hw_tjitems">
			<div class="hw_tjitem1">
				<div class="hw_tjitem1_l">
					<h3>英国 | 危机之后如何在英国进行置业</h3>
					<span>2018.8.27</span>
				</div>
				<div class="hw_tjitem1_r">
					<img src="static/images/picture/hw_p5.png" alt="" />
				</div>
			</div>
			<div class="hw_tjitem1">
				<div class="hw_tjitem1_l">
					<h3>英国 | 危机之后如何在英国进行置业</h3>
					<span>2018.8.27</span>
				</div>
				<div class="hw_tjitem1_r">
					<img src="static/images/picture/hw_p5.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header3 from "./Header3"
	export default{
		name:"Haiwai",
		data(){
			return{
				tit:"海外频道"
			}
		},
		components:{
			"v-header": Header3
		}
	}
</script>

<style>
.hw_tubiao{
	display: flex;
	flex-wrap: wrap;
	padding: 0.54rem 0.10rem 0;
}
.hw_tubiao li{
	width: 25%;
	text-align: center;
	margin-top: 0.06rem;
}
.hw_tubiao li img{
	width: 0.86rem;
	height: 0.86rem;	
}
.hw_tubiao li span{
	display: block;
	margin:0.09rem  0 0.20rem;
	font-size: 0.24rem;
}
.hw_tubiao_control{
	display: flex;
	justify-content: center;
	margin-bottom: 0.6rem;
}
.hw_tubiao_control div{
	width:0.3rem;
	height:0.07rem;
	background:rgba(0,0,0,0.1);	
	border-radius:0.04rem;
}
.hw_tubiao_control .htc_one{
	margin-right: 0.1rem;
}
.hw_tubiao_control .htc_active{
	background:rgba(255,144,18,1);
}
.hw_jz{
	padding: 0 0.5rem 0.2rem;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.hw_jz_r,.hw_jz_l{
	width: 3.1rem;
	height: 1.6rem;
}
.hw_jz_l{
	background: url(../../static/images/picture/hw_p4.png) no-repeat center/cover;
}
.hw_jz_r{
	background: url(../../static/images/picture/hw_p2.png) no-repeat center/cover;
}
.hw_jz p{
	width:2.14rem;
	height:0.54rem;
	font-size:0.24rem;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(255,255,255,1);
	line-height:0.3rem;
	text-align: center;
	margin: 0.49rem auto 0;
}
.hw_jz_down{
	padding: 0 0.5rem 0.3rem;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
}
.hw_jz_down_l,.hw_jz_down_r{
	width: 50%;
	font-size: 0.24rem;
}
.hw_jz_down_l span,.hw_jz_down_r span{
	display: block;
	float: left;
	padding: 0.11rem 0.12rem ,0.05rem;
	width:0.7rem;
	height:0.35rem;
	line-height: 0.35rem;
	text-align: center;
	color:#FF9012;
	border:0.01rem solid rgba(255,144,18,1);
	border-radius:0.1rem;
}
.hw_jz_down_l b,.hw_jz_down_r b{
	display: block;
	float: left;
	font-style: normal;
	height:0.22rem;
	font-weight:100;
	color:rgba(1,1,1,0.5);
	line-height:0.3rem;
	margin: 0.03rem 0 0 0.12rem;
}
.hw_tjlist{
	padding:0 0.5rem;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	font-size: 0.3rem;	
}
.hw_tjlist li span{
	display: block;
	padding: 0.29rem 0;
	box-sizing: border-box;
}
.hw_tjlist li .hw_tjlist_active{
	color:rgba(255,144,18,1);
	border-bottom:0.01rem solid rgba(255,144,18,1);	
}
.hw_tjitems{
	padding:0 0.5rem;
	box-sizing: border-box;
	font-weight:100;
}
.hw_tjitem1{
	display: flex;
	justify-content: space-between;
	padding: 0.28rem 0;
	box-sizing: border-box;
	margin-top: 0.01rem;
	border-top:0.01rem solid rgba(0,0,0,0.1);;	
}
.hw_tjitem1_l h3{
	width:3.6rem;
	height:0.78rem;
	font-size:0.3rem;
	color:rgba(0,0,0,1);
	line-height:0.48rem;
}
.hw_tjitem1_l span{
	display: block;
	height:0.2rem;
	font-size:0.24rem;
	color:rgba(0,0,0,0.5);
	margin-top: 0.53rem;
}
.hw_tjitem1_r img{
	width: 2.74rem;
	height: 1.5rem;
}
</style>