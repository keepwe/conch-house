<template>
	<div id="zx">
		<v-header :name="tit"></v-header>
		<div class="zx_search_kuang">
	        <i class="iconfont icon-sousuo1"></i>
	        <input type="text" placeholder="大家都在搜：户型"/>
	    </div>
	    <div class="zx_banner">
	    	<div class="zx_banner_tit">
	    		<div class="zx_banner_tit_xzx zx_banner_tit_active1">学<span class="zx_banner_tit_active">装</span>修</div>
	    		<div class="zx_banner_tit_zfw">找<span>服</span>务</div>
	    	</div>
	    	<div class="zx_banner_con">
	    		<div class="zx_banner_con_pic">
	    			<h3>海螺装修来了</h3>
	    			<p>为每个人打造属于自己的家</p>
	    		</div>
	    	</div>
	    	<div class="zx_banner_down">
	    		<div class="zx_banner_down_one zx_banner_down_active"></div>
	    		<div></div>
	    	</div>
	    </div>
	    <div class="zx_list">
	    	<ul	class="zx_list_tuijian">
	    		<li>关注</li>
	    		<li class="zx_list_tj_active">推荐</li>
	    		<li>真实案例</li>
	    		<li>装修知识</li>
	    		<li>居住知识</li>
	    	</ul>	
	    </div>
	    <div class="zx_list_item">
	    	<h2>
	    		<img src="static/images/picture/zx_p7.png" alt="" />
	    		<span>在家ZAIJLA</span>
	    	</h2>
	    	<div class="zx_list_item_pic">
	    		<img src="static/images/picture/zx_p9.png"/>
	    	</div>
	    	<div class="zx_list_item_link">
	    		<p>和公婆一起住，小夫妻如何玩浪漫，请戳</p>
	    		<div class="zx_list_item_link_hd">
	    			<div class="zx_list_item_link_dz">
		    			<img src="static/images/tubiao/zx_dz.png"/>
		    			<span>4</span>
		    		</div>
		    		<div class="zx_list_item_link_gz">
		    			<img src="static/images/tubiao/zx_gz.png"/>
		    			<span>15</span>
		    		</div>
	    		</div>
	    	</div>
	    </div>
	    <div class="zx_list_item">
	    	<h2>
	    		<img src="static/images/picture/zx_p1.png" alt="" />
	    		<span>月球家居</span>
	    	</h2>
	    	<div class="zx_list_item_pic">
	    		<img src="static/images/picture/zx_p8.png"/>
	    	</div>
	    	<div class="zx_list_item_link">
	    		<p>和公婆一起住，小夫妻如何玩浪漫，请戳</p>
	    		<div class="zx_list_item_link_hd">
	    			<div class="zx_list_item_link_dz">
		    			<img src="static/images/tubiao/zx_dz.png"/>
		    			<span>4</span>
		    		</div>
		    		<div class="zx_list_item_link_gz">
		    			<img src="static/images/tubiao/zx_gz.png"/>
		    			<span>15</span>
		    		</div>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>

<script>
	import Header3 from "./Header3"
	export default{
		name:"Zhuangxiu",
		data(){
			return{
				tit:"海螺装修"
			}
		},
		components:{
			"v-header": Header3
		}
	}
</script>

<style>
#zx .zx_search_kuang{
    width: 6.5rem;
    height: 0.6rem;
    line-height: 0.6rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 38px;
    box-shadow: 0.04rem 0.02rem 0.1rem rgba(0, 0, 0, 0.12);
    margin: 0.2rem 0.5rem 0;
    box-sizing: border-box;
    display: flex;
}
#zx .zx_search_kuang i{
    margin: 0 0.18rem 0 0.35rem;
    font-size: 0.42rem;
}

#zx .zx_search_kuang input{
    width: 3.5rem;
    height: 0.24rem;
    border: 0;
    font-size: 0.24rem;
    font-weight: 100;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
    margin-top: 0.18rem;
}
.zx_banner,.zx_list{
	padding: 0.6rem 0.5rem 0;
	box-sizing: border-box;
}
.zx_banner_tit{
	display: flex;
	justify-content: space-around;
	height:0.34rem;
	font-size:0.34rem;
	font-family:PingFangSC-Thin;
	font-weight:100;
	color:rgba(0,0,0,0.5);
	line-height:0.30rem;
}
.zx_banner_tit span{
	padding-bottom: 0.2rem;
	box-sizing: border-box;
	border-bottom:0.01rem solid rgba(0,0,0,0)
}
.zx_banner_tit .zx_banner_tit_active{
	border-bottom:0.01rem solid rgba(255,144,18,1)
}
.zx_banner_tit .zx_banner_tit_active1{
	color: #000000;
}
.zx_banner_con{
	margin-top: 0.47rem;
}
.zx_banner_con_pic{
	width: 6.5rem;
	height: 3.2rem;
	background: url(../../static/images/picture/zx_p3.png) no-repeat center/cover;
}
.zx_banner_con_pic h3{
	height:0.48rem;
	font-size:0.36rem;
	font-weight:400;
	color:rgba(255,255,255,1);
	line-height:0.48rem;
	padding: 1.19rem 0 0 1.21rem;
}
.zx_banner_con_pic p{
	height:0.36rem;
	font-size:0.24rem;
	color:rgba(255,255,255,0.6);
	padding: 0.1rem 0 0 1.21rem;
}
.zx_banner_down{
	padding-top: 0.2rem;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
}
.zx_banner_down div{
	width: 0.25rem;
	height: 0.07rem;
	background: rgba(1,1,1,0.5)
}
.zx_banner_down .zx_banner_down_one{
	margin-right: 0.2rem;
}
.zx_banner_down .zx_banner_down_active{
	background: rgba(255,144,18,1);
}
.zx_list_tuijian{
	display: flex;
	justify-content: space-between;	
}
.zx_list_tuijian li{
	height:0.34rem;
	font-size:0.34rem;
	font-weight:100;
	color:rgba(0,0,0,0.5);
	line-height:0.3rem;
}
.zx_list_tuijian .zx_list_tj_active{
	color:rgba(0,0,0,1);
} 
.zx_list_item{
	padding: 0.38rem 0.5rem 0;
	box-sizing: border-box;
}
.zx_list_item h2{
	height: 1rem;
	line-height: 1rem;
}
.zx_list_item h2 img{
	float: left;
	width: 1rem;
	height: 1rem;
	margin-right: 0.17rem;
}
.zx_list_item h2 span{
	float: left;
	height:0.3rem;
	font-size:0.28rem;
	font-weight:100;
	color:rgba(0,0,0,1);
}
.zx_list_item_pic{
	overflow: hidden;
	margin:0.38rem 0 0.1rem ;
}
.zx_list_item_pic img{
	height: 3rem;
	width: 6.5rem;	
}
.zx_list_item_link p{
	width:5.08rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	height:0.5rem;
	line-height:0.5rem;
	font-size:0.3rem;
	font-weight:100;
	color:rgba(0,0,0,1);	
}
.zx_list_item_link_hd{
	height: 0.32rem;
	line-height: 0.32rem;
	display: flex;
	padding-bottom: 0.29rem;
	border-bottom: 0.01rem solid rgba(0,0,0,0.1);	
}
.zx_list_item_link_hd .zx_list_item_link_dz{
	width: 50%;
}
.zx_list_item_link_dz img,.zx_list_item_link_gz img{
	width: 0.32rem;
	height: 0.32rem;
	margin-right: 0.11rem;
	float: left;
}
.zx_list_item_link_dz span,.zx_list_item_link_gz span{
	height:0.18rem;
	font-size:0.24rem;
	font-weight:100;
	color:rgba(0,0,0,0.5);
}
</style>