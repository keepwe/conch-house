<template>
  <div>
    <header>
      <div class="search fl">
        <img src="../../static/images/tubiao/fangdaj.png"/>
        <input type="text" placeholder="输入小区/商区/地铁站">
      </div>
      <div class="qx fr">取消</div>
    </header>
    <div class="main">
      <div class="lishi list">
        <span class="fl">历史搜索</span>
        <img src="../../static/images/tubiao/search_lajitong.png" class="fr"/>
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
    components: {
      "v-footer": Footer
    }
  }
</script>

<style scoped>
  header {
    padding: 0 50px;
    margin-top: 20px;
    height: 100px;
    border-bottom: 1px solid #C0D3AC;
    overflow: hidden;
  }

  .search {
    width: 529px;
    height: 76px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    opacity: 0.42;
    border-radius: 38px;
    box-shadow:  4px 0 10px rgba(0, 0, 0, 0.36);
    vertical-align: middle;
  }

  .search img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 29px 21px 24px 31px;
    vertical-align: middle;
  }

  .search input {
    display: inline-block;
    vertical-align: middle;
    outline: none;
    font-size: 24px;
    border: 0;
    width: 400px;
    height: 70px;
    line-height: 70px;
  }

  header .qx {
    font-size: 34px;
    vertical-align: middle;
    height: 70px;
    line-height: 70px;
  }

  .main {
    margin: 0 50px;
  }

  .main .list {
    border-bottom: 1px solid #C0D3AC;
    height: 117px;
    line-height: 117px;
    font-size: 30px;
  }

  .main .lishi {
    overflow: hidden;
  }

  .main .lishi span, .main .lishi img {
    opacity: .5;
  }

  .main .lishi img {
    width: 30px;
    height: 30px;
    margin-top: 45px;
  }
</style>
