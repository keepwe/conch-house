<template>
	<div>
		<header>
      <span class="iconfont icon-navbankicon"></span>
      <div class="sy_search_kuang">
        <i class="iconfont icon-sousuo1"></i>
        <input type="text"   placeholder="请输入小区或商圈名" />
      </div>
    </header>
	</div>
</template>

<script>
	export default{
		name:"ESFang"
	}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
  }
  .sy_search_kuang{
    width:500px;
    height:60px;
    background:rgba(255,255,255,1);
    border-radius:38px;
    box-shadow:4px 2px 10px rgba(0,0,0,0.12);
    padding: 18px 69px 16px;
    box-sizing: border-box;
  }
  .sy_search_kuang input {
    text-indent: 17px;
    width: 300px;
    height: 58px;
    line-height: 58px;
    border: 1px solid #000;
    font-size: 30px;
    font-weight: 100;
    color: rgba(0, 0, 0, 1);
    opacity: 0.5;
  }
</style>
