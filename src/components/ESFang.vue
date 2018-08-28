<template>
	<div class="es_house">
		<header>
      <span class="iconfont icon-navbankicon" @click="goback()"></span>
      <div class="sy_search_kuang">
        <i class="iconfont icon-sousuo1"></i>
        <input type="text"   placeholder="请输入小区或商圈名" />
      </div>
      <span class="iconfont icon-xiaoxi2"></span>
    </header>
    <div class="es_search">
      <el-cascader
        :options="options2"
        :show-all-levels="false"
        placeholder="区域"
        size="small"
        @active-item-change="handleItemChange"
        :props="props"
      ></el-cascader>
      <el-cascader
        :show-all-levels="false"
        placeholder="价格"
        :options="options2"
        @active-item-change="handleItemChange"
        :props="props"
      ></el-cascader>
      <el-cascader
        :show-all-levels="false"
        placeholder="房型"
        :options="options2"
        @active-item-change="handleItemChange"
        :props="props"
      ></el-cascader>
      <el-cascader
        :show-all-levels="false"
        placeholder="更多"
        :options="options2"
        @active-item-change="handleItemChange"
        :props="props"
      ></el-cascader>
      <img src="../../static/images/tubiao/zf_sjt.png"/></div>
    <router-link to="/house"><div class="es_item">
      <div class="fl pic">
        <img src="../../static/images/picture/esf_p3.png"/>
      </div>
      <div class="fl es_content">
        <h3 class="es_title">
          龙城花园北二区&nbsp;一室一厅
        </h3>
        <p class="es_desc">
          46.19平米/南/顶层&nbsp;共四层
        </p>
        <div class="es_tags">
          <span>满两年</span>
          <span>地铁</span>
          <span>随时可看</span>
        </div>
        <div class="es_price">
          <span class="price_sum">265万</span>
          <span class="unit_price">57,421元/平</span>
        </div>
      </div>
    </div></router-link>
    <div class="es_item">
      <div class="fl pic">
        <img src="../../static/images/picture/esf_p3.png"/>
      </div>
      <div class="fl es_content">
        <h3 class="es_title">
          龙城花园北二区&nbsp;一室一厅
        </h3>
        <p class="es_desc">
          46.19平米/南/顶层&nbsp;共四层
        </p>
        <div class="es_tags">
          <span>满两年</span>
          <span>地铁</span>
          <span>随时可看</span>
        </div>
        <div class="es_price">
          <span class="price_sum">265万</span>
          <span class="unit_price">57,421元/平</span>
        </div>
      </div>
    </div>
    <div class="es_item">
      <div class="fl pic">
        <img src="../../static/images/picture/esf_p3.png"/>
      </div>
      <div class="fl es_content">
        <h3 class="es_title">
          龙城花园北二区&nbsp;一室一厅
        </h3>
        <p class="es_desc">
          46.19平米/南/顶层&nbsp;共四层
        </p>
        <div class="es_tags">
          <span>满两年</span>
          <span>地铁</span>
          <span>随时可看</span>
        </div>
        <div class="es_price">
          <span class="price_sum">265万</span>
          <span class="unit_price">57,421元/平</span>
        </div>
      </div>
    </div>
    <div class="es_item">
      <div class="fl pic">
        <img src="../../static/images/picture/esf_p3.png"/>
      </div>
      <div class="fl es_content">
        <h3 class="es_title">
          龙城花园北二区&nbsp;一室一厅
        </h3>
        <p class="es_desc">
          46.19平米/南/顶层&nbsp;共四层
        </p>
        <div class="es_tags">
          <span>满两年</span>
          <span>地铁</span>
          <span>随时可看</span>
        </div>
        <div class="es_price">
          <span class="price_sum">265万</span>
          <span class="unit_price">57,421元/平</span>
        </div>
      </div>
    </div>
    <div class="es_item">
      <div class="fl pic">
        <img src="../../static/images/picture/esf_p3.png"/>
      </div>
      <div class="fl es_content">
        <h3 class="es_title">
          龙城花园北二区&nbsp;一室一厅
        </h3>
        <p class="es_desc">
          46.19平米/南/顶层&nbsp;共四层
        </p>
        <div class="es_tags">
          <span>满两年</span>
          <span>地铁</span>
          <span>随时可看</span>
        </div>
        <div class="es_price">
          <span class="price_sum">265万</span>
          <span class="unit_price">57,421元/平</span>
        </div>
      </div>
    </div>
    <div class="es_item">
      <div class="fl pic">
        <img src="../../static/images/picture/esf_p3.png"/>
      </div>
      <div class="fl es_content">
        <h3 class="es_title">
          龙城花园北二区&nbsp;一室一厅
        </h3>
        <p class="es_desc">
          46.19平米/南/顶层&nbsp;共四层
        </p>
        <div class="es_tags">
          <span>满两年</span>
          <span>地铁</span>
          <span>随时可看</span>
        </div>
        <div class="es_price">
          <span class="price_sum">265万</span>
          <span class="unit_price">57,421元/平</span>
        </div>
      </div>
    </div>
	</div>
</template>

<script>

	export default{
		name:"ESFang",
    data() {
      return {
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
      };
    },
    methods: {
		  goback(){
        this.$router.back(-1);
      },
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
    }
	}
</script>

<style>
  .es_house{
    margin: 0 0.5rem;
  }
  .es_house header{
    display: flex;
    height: 1.02rem;
    justify-content: space-between;
    align-items: center;
  }
  .es_house header span{
    font-size: 0.42rem;
  }
  .es_house .sy_search_kuang{
    width:5rem;
    height:0.6rem;
    background:rgba(255,255,255,1);
    border-radius:38px;
    box-shadow:0.04rem 0.02rem 0.1rem rgba(0,0,0,0.12);
    box-sizing: border-box;
  }
  .es_house .sy_search_kuang i {
    margin:0 0.33rem 0 0.37rem;
    font-size: 0.34rem;
  }
  .es_house .sy_search_kuang input {
    width: 3.5rem;
    height: 0.54rem;
    line-height: 0.54rem;
    border: 0;
    font-size: 0.3rem;
    font-weight: 100;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
  }
  .es_house .es_search{
    display: flex;
    height: 1.04rem;
    justify-content: space-between;
    align-items: center;
  }
  .es_house .es_search .el-cascader .el-input--suffix .el-input__inner{
    font-size: 0.28rem;
    border: 0 !important;
    width: 1.1rem !important;
  }
  .el-cascader__label{
    font-size: 0.28rem;
  }
  .el-cascader-menu__item{
    font-size: 0.28rem;
    height: auto;
  }
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
