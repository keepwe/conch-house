<template>
  <div class="house">
    <header>
      <div class="box">
        <span class="iconfont icon-navbankicon" @click="goback()"></span>
        <p>
          <strong><span class="iconfont icon-fenxiang"></span></strong>
          <span class="iconfont icon-heart"></span>
          <span class="iconfont icon-xiaoxi2"></span>
        </p>
      </div>
    </header>
    <div class="main">
      <h2 class="desc">满五年，业主无其他房产。低楼层，精装修，看房随时</h2>
      <div class="detail">
        <div class="price">
          <p class="title">售价</p>
          <p class="sum">405万</p>
        </div>
        <div class="type">
          <p class="title">房型</p>
          <p class="sum">405万</p>
        </div>
        <div class="area">
          <p class="title">建筑面积</p>
          <p class="sum">405万</p>
        </div>
      </div>
      <div class="baozheng">
        <div>
          <h3 class="bao1">真实房源，假一赔百元</h3>
          <p class="bao2">真实存在，真实销售真实价格，真实图片</p>
        </div>
        <div>
          <img src="static/images/tubiao/esf_house_bao.png" height="48" width="44"/></div>
      </div>
      <div class="vr">
        <div>
          <h3 class="vr1">VR带看</h3>
          <p class="vr2">随时随地，在线带看，省时省力</p>
        </div>
        <div>
          <span>立即带看</span>
        </div>
      </div>
      <div class="tags">
        <span>满五年</span>
        <span>VR房源</span>
        <span>地铁附近</span>
        <span>随时可看</span>
      </div>
      <div class="house_desc">
        <table>
          <tr>
            <td>单价</td>
            <td class="price_num">59700/平</td>
            <td>挂牌</td>
            <td class="gua_date">2017-10-18</td>
          </tr>
          <tr>
            <td>朝向</td>
            <td class="chaoxiang">太阳以西</td>
            <td>楼层</td>
            <td class="floor">底层/6层</td>
          </tr>
          <tr>
            <td>楼型</td>
            <td class="build_type">板楼</td>
            <td>电梯</td>
            <td class="elevator">无</td>
          </tr>
          <tr>
            <td>装修</td>
            <td class="zhuangxiu">精装</td>
            <td>年代</td>
            <td class="build_date">1994年</td>
          </tr>
          <tr>
            <td>用途</td>
            <td class="purpose">居住</td>
            <td>权属</td>
            <td class="quanshu">商品房</td>
          </tr>
          <tr>
            <td>预算</td>
            <td class="budget" colspan="3">首付196万，月付19734元</td>
          </tr>
          <tr>
            <td>小区</td>
            <td class="xq_name" colspan="3">南新园</td>
          </tr>
        </table>
      </div>
      <!--更多按钮-->
      <div class="more">
        <button>更多房源信息</button>
      </div>
      <!--推荐经纪人-->
      <div class="agent">
        <p class="bar_name">推荐经纪人</p>
        <div class="agent_item">
          <div class="agent_pic fl">
            <img src="static/images/picture/esf_house_use3.png"/>
          </div>
          <div class="agent_content fl">
            <p class="agent_name">王磊</p>
            <p class="agent_score">评分<span>4.9</span>/<span>34</span>人评价</p>
            <p class="agent_desc">本房信息由我维护，有变化最快得知</p>
          </div>
          <div class="agent_contact fl">
            <img src="static/images/tubiao/esf_house_message1.png" class="message"/>
            <img src="static/images/tubiao/esf_house_tell.png" class="tell"/></div>
        </div>
        <div class="agent_item">
          <div class="agent_pic fl">
            <img src="static/images/picture/esf_house_use1.png"/>
          </div>
          <div class="agent_content fl">
            <p class="agent_name">王磊</p>
            <p class="agent_score">评分<span>4.9</span>/<span>34</span>人评价</p>
            <p class="agent_desc">本房信息由我维护，有变化最快得知</p>
          </div>
          <div class="agent_contact fl">
            <img src="static/images/tubiao/esf_house_message1.png" class="message"/>
            <img src="static/images/tubiao/esf_house_tell.png" class="tell"/></div>
        </div>
        <div class="agent_item">
          <div class="agent_pic fl">
            <img src="static/images/picture/esf_house_use2.png"/>
          </div>
          <div class="agent_content fl">
            <p class="agent_name">王磊</p>
            <p class="agent_score">评分<span>4.9</span>/<span>34</span>人评价</p>
            <p class="agent_desc">本房信息由我维护，有变化最快得知</p>
          </div>
          <div class="agent_contact fl">
            <img src="static/images/tubiao/esf_house_message1.png" class="message"/>
            <img src="static/images/tubiao/esf_house_tell.png" class="tell"/></div>
        </div>
      </div>
      <!--户型格局-->
      <div class="huxing">
        <p class="bar_name">户型格局</p>
        <div class="huxing_desc">
          <p>客厅：<span>114m²/东/普通窗</span></p>
          <p>卧室A：<span>114m²/东/普通窗</span></p>
          <p>卧室B：<span>114m²/东/普通窗</span></p>
        </div>
        <div id="allmap" ref="allmap"></div>
      </div>
      <!--房源介绍-->
      <div class="fangyuan_desc">
        <p class="bar_name">
          <span>房源介绍</span>
          <span class="iconfont icon-fanhui"></span>
        </p>
        <p class="jieshao">
          小区生活便利。超市：首航超市、京客隆超市。医院：中山医院、朝阳区中西结合医院、垂杨柳医院、双龙社区医院。
          银行：中国银行、农业银行、邮政储蓄、建设银行。其他：京体游泳健身、燕莎奥特莱斯...
        </p>
      </div>
      <!--房源动态-->
      <div class="dongtai">
        <p class="bar_name">
          <span>房源动态</span>
        </p>
        <div class="dt_detail">
          <div class="week">
            <p class="title">近7日带看（次）</p>
            <p class="sum">22</p>
          </div>
          <div class="month">
            <p class="title">近30日带看（次）</p>
            <p class="sum">22</p>
          </div>
          <div class="follow">
            <p class="title">关注房源</p>
            <p class="sum">3755</p>
          </div>
        </div>
      </div>
      <div class="daikan">
        <!--带看记录-->
        <p class="bar_name">
          <span>带看记录</span>
          <span>最近带看 2018-07-16<span class="iconfont icon-fanhui"></span></span>
        </p>
        <!--房源时间轴-->
        <p class="bar_name">
          <span>房源时间轴</span>
          <span>挂牌时间 2018-07-16<span class="iconfont icon-fanhui"></span></span>
        </p>
      </div>
      <!--南新园-->
      <div class="nxy_box">
        <p class="bar_name">
          <span>带看记录</span>
          <span>小区详情<span class="iconfont icon-fanhui"></span></span>
        </p>
        <div class="nxy_desc">
          <div class="fl nxy_content">
            <p class="junjia">参考均价：<span>34,572元/平</span></p>
            <p class="niandai">
              建筑年代：<span>1994年建</span>
            </p>
            <p class="lou_sum">
              楼栋总数：<span>22栋</span>
            </p>
            <p class="fang_sum">
              房屋总数：<span>3042户</span>
            </p>
          </div>
          <div class="fr pic">
            <img src="static/images/picture/esf_p3.png"/>
          </div>
        </div>
      </div>
      <div class="tq_chengjiao">
        <p class="bar_name">
          <span>同小区成交（642）</span>
          <span class="iconfont icon-fanhui"></span>
        </p>
        <ul>
          <li>
            <p>
              <span>二室一厅/71m²/南北</span>
              <span>423万</span>
            </p>
            <p>单价34523/平，2014.04.12成交</p>
          </li>
          <li>
            <p>
              <span>二室一厅/71m²/南北</span>
              <span>423万</span>
            </p>
            <p>单价34523/平，2014.04.12成交</p>
          </li>
        </ul>
      </div>
    <!--同小区房源-->
    <div class="tq_fangyuan">
      <p class="bar_name">
        <span>同小区房源</span>
        <span><span class="tq_fangyuan_zs router-link-active">在售</span><span class="tq_fangyuan_cz">出租</span></span>
      </p>
      <div class="tq_fangyuan_item">
        <div class="tq_fangyuan_item1">
          <img src="static/images/picture/esf_house_p6.png"/>
          <p>二室一厅/71m²/南北</p>
          <p><span class="router-link-active">405万</span><span>59,700/平</span></p>
        </div>
        <div class="tq_fangyuan_item2">
          <img src="static/images/picture/esf_house_p7.png"/>
          <p>二室一厅/71m²/南北</p>
          <p><span class="router-link-active">405万</span><span>59,700/平</span></p>
        </div>
      </div>
      <div class="more">
        <button>同小区在售23套</button>
      </div>
    </div>
    <!--周边房源-->
    <div class="zb_fangyuan">
      <p class="bar_name">
        <span>周边房源（8）</span>
        <span>更多房源<span class="iconfont icon-fanhui"></span></span>
      </p>
      <div class="zb_fangyuan_item">
        <div class="zb_fangyuan_item1">
          <img src="static/images/picture/esf_house_p6.png"/>
          <p>二室一厅/71m²/南北</p>
          <p class="zb_sum_price"><span class="router-link-active">405万</span><span>59,700/平</span></p>
        </div>
        <div class="zb_fangyuan_item2">
          <img src="static/images/picture/esf_house_p7.png"/>
          <p>二室一厅/71m²/南北</p>
          <p class="zb_sum_price"><span class="router-link-active">405万</span><span>59,700/平</span></p>
        </div>
      </div>
    </div>
    <div class="zb_fangyuan">
      <p class="bar_name">
        <span>周边房源（8）</span>
      </p>
      <div class="zb_fangyuan_item">
        <div class="zb_fangyuan_item1">
          <img src="static/images/picture/esf_house_p6.png"/>
          <p>美景东方</p>
          <p class="zb_sum_price"><span class="router-link-active">59,700元/平</span></p>
        </div>
        <div class="zb_fangyuan_item2">
          <img src="static/images/picture/esf_house_p7.png"/>
          <p>松榆东里</p>
          <p class="zb_sum_price"><span class="router-link-active">59,700元/平</span></p>
        </div>
      </div>
    </div>
      <!--买房-->
      <div class="maifang">
        <h2>考虑卖房？我们可以帮到你</h2>
        <p>在线估价、委托，专属顾问卖房攻略一条龙服务</p>
        <span>帮我卖房</span>
      </div>
      <!--警告举报-->
      <div class="warning">
        <p class="promise"><span>海螺承诺真实房源假一赔百元</span><span class="router-link-active">举报房源</span></p>
        <p class="zhuyi">
          房源所示“户型图、房屋用途、交易权属、建成年代、产权年限、建筑结构”仅供参考，购房时请以房本信息为准。
        </p>
      </div>
      <!--联系客服-->
      <div class="lianxi">
        <p>
          <img src="static/images/picture/esf_house_use2.png"/>
          <span class="name">子筠</span>
        </p>
        <p>
          <span class="online router-link-active">在线咨询</span>
          <span class="phone router-link-active">电话咨询</span>
        </p>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "House",
    methods: {
      goback() {
        this.$router.back(-1);
      },
      map() {
        let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
        map.centerAndZoom("郑州", 17);// 初始化地图,设置中心点坐标和地图级别

        map.setCurrentCity("郑州");// 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      }
    },
    mounted() {
      this.map()
    }
  }
</script>

<style scoped>
  #allmap {
    height: 3.8rem;
  }

  header {
    height: 4.6rem;
    background-image: url("../../static/images/picture/esf_house_tu.jpg");
    background-size: cover;
  }

  .box, .main {
    margin: 0 0.5rem;
  }

  header .box {
    display: flex;
    height: 1rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
  }

  header .icon-navbankicon {
    font-size: 0.42rem;
  }

  header .box p span {
    font-size: 0.42rem;
    margin-left: 0.28rem;
  }

  .main .desc {
    font-size: 0.33rem;
    min-height: 1.12rem;
    line-height: 0.48rem;
    margin-top: 0.3rem;
  }

  .main .detail, .main .dongtai .dt_detail {
    margin-top: 0.3rem;
    display: flex;
    font-size: 0;
    height: 0.98rem;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
  }

  .main .detail .price, .main .detail .type {
    border-right: 1px solid rgba(0, 0, 0, .2);
    width: 30%;
    height: 0.68rem;
  }

  .main .detail .area, .week, .month, .follow {
    height: 0.68rem;
  }

  .main .detail {
    height: 0.98rem;
  }

  .main .detail .title {
    font-size: 0.22rem;
    color: #aaa;
  }

  .main .detail .sum {
    font-size: 0.24rem;
    color: #ff9722;
    margin-top: 0.2rem;
  }

  .baozheng, .vr {
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #CCC;
    overflow: hidden;
  }

  .baozheng .bao1, .vr1 {
    font-size: 0.28rem;
  }

  .baozheng .bao2, .vr2 {
    font-size: 0.23rem;
    margin-top: 0.2rem;
    color: #aaa;
  }

  .vr span {
    display: flex;
    border-radius: 0.2rem;
    border: 1px solid #ff9722;
    color: #ff9722;
    width: 1.3rem;
    height: 0.4rem;
    font-size: 0.24rem;
    justify-content: center;
    align-items: center;
  }

  .tags {
    height: 0.7rem;
    margin-top: 0.3rem;
  }

  .tags span {
    display: inline-block;
    padding: 0.09rem 0.15rem;
    font-size: 0.22rem;
    background: #ff9722;
    margin-right: 0.1rem;
    color: #fff;
  }

  .house_desc {
    height: 4.17rem;
  }

  .house_desc table {
    height: 100%;
    width: 100%;
  }

  .house_desc table tr td:nth-child(1), .house_desc table tr td:nth-child(3) {
    color: #aaa;
    font-size: 0.28rem;
    width: 0.9rem;
  }

  .house_desc table tr td:nth-child(2), .house_desc table tr td:nth-child(4) {
    font-size: 0.27rem;
  }

  .house_desc table tr td:nth-child(2) {
    width: 2.5rem;
  }

  .budget, .xq_name {
    color: #ff9722;
  }

  .more {
    height: 1rem;
    border-bottom: 1px solid #aaa;
  }

  .more button {
    width: 100%;
    height: 0.7rem;
    color: #fff;
    font-size: 0.28rem;
    font-family: "方正兰亭纤黑_GBK";
    letter-spacing: 0.04rem;
    background: #ff9722;
    border-radius: 0.1rem;
    border: 0;
    outline: none;
  }

  .bar_name {
    height: 0.88rem;
    font-size: 0.28rem;
    line-height: 0.88rem;
  }

  .agent {
    border-bottom: 1px solid #aaa;
  }

  .agent_item {
    overflow: hidden;
    margin-bottom: 0.3rem;
  }

  .agent_item .agent_pic {
    margin-right: 0.2rem;
  }

  .agent_item .agent_pic img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }

  .agent .agent_content .agent_name {
    font-size: 0.26rem;
    margin-top: 0.14rem;
  }

  .agent .agent_content .agent_score {
    font-size: 0.23rem;
    margin-top: 0.23rem;
  }

  .agent .agent_content .agent_desc {
    font-size: 0.23rem;
    margin-top: 0.2rem;
    line-height: 0.4rem;
    color: #aaa;
  }

  .agent .agent_contact {
    margin-top: 0.26rem;
  }

  .agent .agent_contact .message {
    margin-right: 0.4rem;
  }

  .huxing .huxing_desc {
    font-size: 0.23rem;
  }

  .huxing .huxing_desc p {
    margin-bottom: 0.25rem;
  }

  .fangyuan_desc {
    border-bottom: 1px solid #aaa;
  }

  .fangyuan_desc .bar_name {
    display: flex;
    justify-content: space-between;
  }

  .fangyuan_desc .jieshao {
    font-size: 0.23rem;
    line-height: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .main .dt_detail .title {
    font-size: 0.25rem;
    color: #aaa;
  }

  .main .dongtai .dt_detail {
    margin: 0;
  }

  .main .dt_detail .sum {
    font-size: 0.28rem;
    color: #000;
    font-weight: 900;
    margin-top: 0.2rem;
  }

  .daikan .bar_name {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
  }

  .nxy_box .bar_name span:nth-child(2), .daikan .bar_name span:nth-child(2) {
    font-size: 0.22rem;
    color: #aaa;
  }

  .daikan .bar_name span:nth-child(2) span {
    margin-left: 0.3rem;
  }

  .nxy_box {
    height: 2.55rem;
    border-bottom: 1px solid #aaa;
  }

  .nxy_box .bar_name {
    display: flex;
    justify-content: space-between;
  }

  .nxy_box .nxy_desc {
    height: 1.37rem;
  }

  .nxy_box .nxy_desc .pic img {
    width: 1.9rem;
    height: 1.37rem;
  }

  .nxy_content p {
    font-size: 0.22rem;
    line-height: 0.35rem;
    color: #aaa;
  }

  .nxy_content .junjia {
    color: #000;
    margin-bottom: 0.04rem;
  }

  .nxy_content .junjia span {
    color: #ff9722;
  }

  .tq_chengjiao ul {
    border-bottom: 1px solid #aaa;
  }

  .tq_chengjiao ul li {
    list-style: initial;
    font-size: 0.24rem;
    margin-left: 0.24rem;
  }

  .tq_chengjiao ul li p:nth-child(1) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.1rem;
  }

  .tq_chengjiao ul li p:nth-child(1) span:nth-child(2) {
    color: #ff9722;
  }

  .tq_chengjiao ul li p:nth-child(2) {
    color: #aaa;
    margin-bottom: 0.2rem;
  }

  .tq_fangyuan .bar_name,.zb_fangyuan .bar_name {
    display: flex;
    justify-content: space-between;
  }

  .tq_fangyuan .bar_name span:nth-child(2),.zb_fangyuan .bar_name span:nth-child(2) {
    color: #aaa;
    font-size: 0.24rem;
  }

  .tq_fangyuan .bar_name .tq_fangyuan_zs {
    margin-right: 0.36rem;
  }

  .tq_fangyuan .tq_fangyuan_item,.zb_fangyuan .zb_fangyuan_item{
    display: flex;
    justify-content: space-between;
  }

  .tq_fangyuan .tq_fangyuan_item img,.zb_fangyuan .zb_fangyuan_item img{
    width: 3.1rem;
    height: 1.9rem;
    margin-bottom: 0.2rem;
  }

  .tq_fangyuan .tq_fangyuan_item p,.zb_fangyuan .zb_fangyuan_item p {
    font-size: 0.24rem;
    margin-bottom: 0.12rem;
  }
  .tq_fangyuan .tq_fangyuan_item p span,.zb_fangyuan .zb_fangyuan_item p span {
    margin-right: 0.2rem;
  }
  .tq_fangyuan .more {
    margin-top: 0.2rem;
  }
  .zb_fangyuan{
    border-bottom: 1px solid #aaa;
  }
  .zb_fangyuan .zb_fangyuan_item .zb_sum_price{
    margin-bottom: 0.3rem;
  }
  .maifang{
    box-sizing:border-box;
    padding: 0.37rem 0;
    text-align: center;
    border-bottom: 1px solid #AAA;
  }
  .maifang h2{
    font-size: 0.33rem;
    margin-bottom: 0.2rem;
  }
  .maifang p{
    font-size: 0.29rem;
    margin-bottom: 0.3rem;
  }
  .maifang span{
    display: inline-block;
    text-align: center;
    border: 1px solid #aaa;
    width: 1.7rem;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.29rem;
    border-radius: 0.4rem;
  }
  .warning{
    border-bottom: 1px solid #aaa;
    padding: 0.3rem 0;
  }
  .warning .promise{
    display: flex;
    justify-content: space-between;
    color: #aaa;
    font-size: 0.28rem;
    margin-bottom: 0.16rem;
  }
  .warning .zhuyi{
    font-size: 0.23rem;
    color: #aaa;
    line-height: 0.36rem;
  }
  .lianxi{
    display: flex;
    height: 0.71rem;
    justify-content: space-between;
    align-items: center;
    margin: 0.3rem 0;
  }
  .lianxi img{
    width: 0.71rem;
    height: 0.71rem;
    border-radius: 50%;
    vertical-align: middle;
  }
  .lianxi .name{
    font-size: 0.28rem;
    margin-left: 0.2rem;
  }
  .lianxi .online,.lianxi .phone{
    font-size: 0.24rem;
    margin-left: 0.28rem;
    border: 1px solid #ff9722;
    border-radius: 0.1rem;
    padding: 0.12rem 0.2rem;
  }
</style>
