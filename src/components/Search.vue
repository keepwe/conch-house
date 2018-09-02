<template>
  <div>
    <header>
      <div class="search fl">
        <img src="static/images/tubiao/fangdaj.png"/>
        <input type="text" placeholder="输入小区/商区/地铁站">
      </div>
      <div class="qx fr" @click="fh">取消</div>
    </header>
    <div class="main">
      <div class="lishi list">
        <span class="fl">历史搜索</span>
        <img src="static/images/tubiao/search_lajitong.png" class="fr"/>
      </div>
      <div class="list">
        <span>北京</span>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Footer from "./Footer"

  export default {
    name: "Search",
    methods:{
    	fh(){
    		this.$router.back(-1)
    	}
    },
    components: {
      "v-footer": Footer
    }
  }
</script>

<style scoped>
  header {
    padding: 0 0.5rem;
    margin-top: 0.2rem;
    height: 1rem;
    border-bottom: 1px solid #C0D3AC;
    overflow: hidden;
  }

  .search {
    width: 5.29rem;
    height: 0.76rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    opacity: 0.42;
    border-radius: 0.38rem;
    box-shadow:  0.04rem 0 0.1rem rgba(0, 0, 0, 0.36);
    vertical-align: middle;
  }

  .search img {
    display: inline-block;
    width: 0.24rem;
    height: 0.24rem;
    margin: 0.29rem 0.21rem 0.24rem 0.31rem;
    vertical-align: middle;
  }

  .search input {
    display: inline-block;
    vertical-align: middle;
    outline: none;
    font-size: 0.24rem;
    border: 0;
    width: 4rem;
    height: 0.7rem;
    line-height: 0.7rem;
  }

  header .qx {
    font-size: 0.34rem;
    vertical-align: middle;
    height: 0.7rem;
    line-height: 0.7rem;
  }

  .main {
    margin: 0 0.5rem;
  }

  .main .list {
    border-bottom: 1px solid #C0D3AC;
    height: 1.17rem;
    line-height: 1.17rem;
    font-size: 0.3rem;
  }

  .main .lishi {
    overflow: hidden;
  }

  .main .lishi span, .main .lishi img {
    opacity: .5;
  }

  .main .lishi img {
    width: 0.3rem;
    height: 0.3rem;
    margin-top: 0.45rem;
  }
</style>
 