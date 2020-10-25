<template>
  <div class="page-main">
    <div class="head">
      <i class="square" />
      <span style="padding-left:8px">救援历史记录</span>
    </div>
    <div class="head-select">
      <div>
        <el-input value="国家" style="width:76px;height:36px" readonly />
        <el-select v-model="value" style="width:94px;height;36px" clearable placeholder="请选择" />
      </div>
      <div style="margin-left:32px">
        <el-input value="城市" style="width:76px;height:36px" readonly />
        <el-select v-model="value" style="width:94px;height;36px" clearable placeholder="请选择" />
      </div>
      <div style="margin-left:32px">
        <el-input value="日期" style="width:76px;height:36px" readonly />
        <el-select v-model="value" style="width:94px;height;36px" clearable placeholder="请选择" />
      </div>
      <div style="margin-left:32px">
        <el-input value="时间" style="width:76px;height:36px" readonly />
        <el-select v-model="value" style="width:94px;height;36px" clearable placeholder="请选择" />
      </div>
      <div style="margin-left:32px">
        <el-input value="报警类型" style="width:76px;height:`36px`" readonly />
        <el-select v-model="value" style="width:94px;height;36px" clearable placeholder="请选择" />
      </div>
      <div style="margin-left:32px">
        <el-input value="事件登记" style="width:76px;height:36px" readonly />
        <el-select v-model="value" style="width:94px;height;36px" clearable placeholder="请选择" />
      </div>
    </div>
    <div class="head-search">
      <el-input />
      <el-button />
    </div>
  </div>
</template>
<script>
export default {
  name: 'History',
  data() {
    return {
      input: '国家'
    }
  }
}
</script>
