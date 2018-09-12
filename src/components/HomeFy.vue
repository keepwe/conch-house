<template>
	<div>
		<router-link to="/house" v-for="(item,i) in hesf" :key="index"><div class="es_item">
          <div class="fl pic">
            <img :src="'static/images/picture/'+item.housePhoto"/>
          </div>
          <div class="fl es_content">
            <h3 class="es_title">
              	{{item.houseName}}&nbsp;{{item.houseType}}
            </h3>
            <p class="es_desc">
              {{item.houseArea}}平米/南/顶层&nbsp;共四层
            </p>
            <div class="es_tags">
              <span>满两年</span>
              <span>地铁</span>
              <span>随时可看</span>
            </div>
            <div class="es_price">
              <span class="price_sum">{{item.housePrice*item.houseArea}}万</span>
              <span class="unit_price">{{item.housePrice}}万元/平</span>
            </div>
          </div>
       </div></router-link>
	</div>
</template>

<script>
	export default{
		name:"HomeFy",
		props:["hesf"],
		data(){
			return{
				index:""
			}
		}
	}
</script>

<style>
.es_item{
    height: 2.16rem;
    overflow: hidden;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-top: 0.38rem;
  }
  .es_item .pic{
    width: 2.46rem;
    height: 100%;
  }
  .es_item .pic img{
    width: 2.16rem;
    height: 1.55rem;
  }
  .es_content .es_title{
    font-size: 0.34rem;
  }
  .es_content .es_desc{
    font-size: 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .es_content .es_tags{
    font-size: 0;
    height: 0.6rem;
  }
  .es_content .es_tags span{
    background: #ff9012;
    font-size: 0.24rem;
    padding:0.09rem 0.26rem;
    color: #FFF;
    margin-right: 0.1rem;
  }
  .es_content .es_price{
    font-size: 0;
  }
  .es_content .es_price .price_sum{
    color: #ff9012;
    font-size: 0.26rem;
    margin-right: 0.2rem;
  }
  .es_content .es_price .unit_price{
    font-size: 0.22rem;
    color: rgba(1,1,1,.5);
  }	
</style>