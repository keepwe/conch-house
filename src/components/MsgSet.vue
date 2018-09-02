<template>
  <div class="msgSet_box">
    <header>
      <p class="title">
        <span class="iconfont icon-navbankicon" @click="goback()"></span>
        <span>消息推送</span>
        <span class="iconfont icon-xiaoxi2"></span>
      </p>
    </header>
    <div class="rec_new">
      <div class="bar_name">
        <span>推送设置</span>
        <el-tooltip :content="'Switch value: ' + value1" placement="top">
          <el-switch
            v-model="value1"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
    </div>
    <div class="voice">
      <div class="bar_name">
        <span>声音</span>
        <el-tooltip :content="'Switch value: ' + value2" placement="top">
          <el-switch
            v-model="value2"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>震动</span>
        <el-tooltip :content="'Switch value: ' + value3" placement="top">
          <el-switch
            v-model="value3"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
    </div>
    <div class="set_fy">
      <div class="bar_name">
        <span>海螺找房团队</span>
        <el-tooltip :content="'Switch value: ' + value4" placement="top">
          <el-switch
            v-model="value4"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>房源调价</span>
        <el-tooltip :content="'Switch value: ' + value5" placement="top">
          <el-switch
            v-model="value5"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>房源成交</span>
        <el-tooltip :content="'Switch value: ' + value6" placement="top">
          <el-switch
            v-model="value6"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>房源停售</span>
        <el-tooltip :content="'Switch value: ' + value7" placement="top">
          <el-switch
            v-model="value7"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>小区新上二手房</span>
        <el-tooltip :content="'Switch value: ' + value8" placement="top">
          <el-switch
            v-model="value8"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>小区新上租房</span>
        <el-tooltip :content="'Switch value: ' + value9" placement="top">
          <el-switch
            v-model="value9"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>小区月报</span>
        <el-tooltip :content="'Switch value: ' + value10" placement="top">
          <el-switch
            v-model="value10"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>聊天消息</span>
        <el-tooltip :content="'Switch value: ' + value11" placement="top">
          <el-switch
            v-model="value11"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>业主动态</span>
        <el-tooltip :content="'Switch value: ' + value12" placement="top">
          <el-switch
            v-model="value12"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>评价带看</span>
        <el-tooltip :content="'Switch value: ' + value13" placement="top">
          <el-switch
            v-model="value13"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>我的问答</span>
        <el-tooltip :content="'Switch value: ' + value14" placement="top">
          <el-switch
            v-model="value14"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>我关注的问答</span>
        <el-tooltip :content="'Switch value: ' + value15" placement="top">
          <el-switch
            v-model="value15"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>点评消息</span>
        <el-tooltip :content="'Switch value: ' + value16" placement="top">
          <el-switch
            v-model="value16"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
      <div class="bar_name">
        <span>搜索订阅</span>
        <el-tooltip :content="'Switch value: ' + value17" placement="top">
          <el-switch
            v-model="value17"
            active-color="#ff9722"
            inactive-color="#dfdfdf"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MsgSet",
    data() {
      return {
        value1: '100',
        value2: '100',
        value3: '100',
        value4: '0',
        value5: '100',
        value6: '100',
        value7: '100',
        value8: '100',
        value9: '0',
        value10: '100',
        value11: '100',
        value12: '100',
        value13: '0',
        value14: '0',
        value15: '100',
        value16: '0',
        value17: '100',
      }
    },
    methods: {
      goback() {
        this.$router.back(-1);
      },

    }
  }
</script>

<style>
  .msgSet_box {
    height: 100%;
    background: #f2f2f2;
  }

  .msgSet_box header {
    background: #fff;
    padding: 0 0.5rem;
  }

  .msgSet_box header .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.88rem;
    font-size: 0.34rem;
  }
  .rec_new,.voice,.set_fy{
    background: #fff;
    padding: 0 0.5rem;
    margin-top: 0.35rem;
  }
   .bar_name{
    display: flex;
    height: 1.1rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    font-size: 0.32rem;
    padding: 0 0.3rem;
  }
  .msgSet_box .el-switch__core:after {
    top: 0;
    width: 34px;
    height: 33px;
    box-shadow: 4px 4px 10px #aaa;
  }
  .msgSet_box .el-switch.is-checked .el-switch__core::after {
    margin-left: -29px;
  }
  .msgSet_box .el-switch__core{
    width: 80px !important;
    height: 40px;
    border-radius: 60px;
    outline: none !important;
  }
</style>
