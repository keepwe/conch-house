<template>
  <div>
    <div class="dialog-modal"> <!-- 根元素，z-index 需要高于父容器其他元素 -->
      <div class="dialog-wrapper" @click="onClose()" v-show="isShow"></div> <!-- 加载一个具有透明度的背景，使根元素透明，子元素会继承该透明度 -->
      <transition name="drop">
        <div class="dialog-container" v-show="isShow">  <!-- 模态框容器，z-index 需要高于背景 -->
          <div class="kefu_box">
            <span class="work_date">周一至周日 9:00-20:00</span>
            <span class="num router-link-active">呼叫1001011</span>
          </div>
          <span class="close-btn" @click="onClose()">取消</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MoT",
    data() {
      return {
        isShow:false,
        }
    },
    methods: {
      onClose() {
        this.isShow=false;
      }
    },
  }
</script>

<style>
  .drop-enter-active {
    transition: all .5s;
  }

  .drop-enter {
    transform: translateY(-100px);
  }

  .dialog-modal {
    position: absolute;
    z-index: 5;
  }

  .dialog-wrapper {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

  }

  .dialog-wrapper {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dialog-container {
    position: fixed;
    z-index: 80;
    bottom: 0.32rem;
    /*left: 0.5rem;*/
    left: 0;
    width: 100%;
  }
  .dialog-container .kefu_box{
    margin-bottom: 0.25rem;
  }
  .dialog-container .kefu_box span{
    display:block;
    font-size: 0.24rem;
    width: 6.51rem;
    margin-left: 0.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #fff;
  }
  .dialog-container .kefu_box .work_date{
    border-radius: 0.1rem 0.1rem 0 0;
    color: #979797;
    border-bottom: 1px solid #e2e2e2;
  }
  .dialog-container .kefu_box .num{
    border-radius: 0 0 0.1rem 0.1rem;
  }
  .dialog-container span.close-btn {
    display: inline-block;
    /*float: right;*/
    cursor: pointer;
    font-size: 0.32rem;
    color: #ff9722;
    width: 6.51rem;
    margin-left: 0.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    background-color: #fff;
    border-radius: 0.1rem;
  }
</style>
