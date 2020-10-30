<template>
  <div class="search-box">

    <!-- <label-input class="search-box__item" label="开始时间" :label-width="labelWidth">
      <el-date-picker v-model="data.startTime" :placeholder="`请选择开始时间`" prefix-icon="false" />
    </label-input> -->

    <label-input v-for="item in inputs" :key="item" class="search-box__item" :label="item" :label-width="labelWidth">
      <el-select v-model="data.startTime" :placeholder="`请选择${item}`" />
    </label-input>
    <el-button type="primary" size="small" style="width:100px;margin-top:18px">搜索</el-button>
  </div>
</template>

<script>
import LabelInput from '@/components/LabelInput'
export default {
  components: { LabelInput },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      labelWidth: '84px',
      inputs: ['开始时间', '结束时间', '出境城市', '入境国家', '入境城市', '出行方式', '航班号', '出境目的', '姓名', '证件类型', '证件号码', '手机号码']
    }
  }
}
</script>

<style lang="scss">
.search-box {
  padding: 0 20px;

  &__item {
    & + & {
      margin-top: 18px;
    }
  }
}
</style>
