<template>
  <div class="search-box">

    <label-input class="search-box__item" label="开始时间" :label-width="labelWidth">
      <el-date-picker v-model="data.startTime" type="datetime" format="2020-MM-dd HH:mm" :placeholder="`请选择开始时间`" />
    </label-input>

    <label-input class="search-box__item" label="结束时间" :label-width="labelWidth">
      <el-date-picker v-model="data.endTime" type="datetime" format="2020-MM-dd HH:mm" :placeholder="`请选择结束时间`" />
    </label-input>

    <label-input class="search-box__item" label="出境城市" :label-width="labelWidth">
      <el-select v-model="data.outCity" placeholder="请选择出境城市">
        <el-option v-for="item in outCitys" :key="item" :label="item" :value="item" />
      </el-select>
    </label-input>

    <label-input class="search-box__item" label="入境国家" :label-width="labelWidth">
      <el-select v-model="data.inCountry" placeholder="请选择入境国家">
        <el-option v-for="item in countries" :key="item" :label="item" :value="item" />
      </el-select>
    </label-input>

    <label-input class="search-box__item" label="入境城市" :label-width="labelWidth">
      <el-select v-model="data.inCity" placeholder="请选择入境城市">
        <el-option v-for="item in inCitys" :key="item" :label="item" :value="item" />
      </el-select>
    </label-input>

    <label-input class="search-box__item" label="出行方式" :label-width="labelWidth">
      <el-select v-model="data.traffic" placeholder="请选择出行方式">
        <el-option v-for="item in traffics" :key="item" :label="item" :value="item" />
      </el-select>
    </label-input>

    <label-input class="search-box__item" label="航班号" :label-width="labelWidth">
      <el-input v-model="data.tripNo" placeholder="请输入航班号" />
    </label-input>

    <label-input class="search-box__item" label="出境目的" :label-width="labelWidth">
      <el-select v-model="data.purpose" placeholder="请选择出境目的">
        <el-option v-for="item in purposes" :key="item" :label="item" :value="item" />
      </el-select>
    </label-input>

    <label-input class="search-box__item" label="姓名" :label-width="labelWidth">
      <el-input v-model="data.name" placeholder="请输入姓名" />
    </label-input>

    <label-input class="search-box__item" label="证件类型" :label-width="labelWidth">
      <el-select v-model="data.creditType" placeholder="请选择证件类型">
        <el-option v-for="item in creditTypes" :key="item" :label="item" :value="item" />
      </el-select>
    </label-input>

    <label-input class="search-box__item" label="证件号码" :label-width="labelWidth">
      <el-input v-model="data.creditId" placeholder="请输入证件号码" />
    </label-input>

    <label-input class="search-box__item" label="手机号码" :label-width="labelWidth">
      <el-input v-model="data.phoneNo" placeholder="请输入手机号码" />
    </label-input>

    <el-button type="primary" size="small" style="width:100px;margin-top:18px" @click="handleClick">搜索</el-button>
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
        return {
          startTime: '',
          endTime: '',
          outCity: '',
          inCountry: '',
          inCity: '',
          traffic: '',
          tripNo: '',
          purpose: '',
          name: '',
          creditType: '',
          creditId: '',
          phoneNo: ''
        }
      }
    }
  },
  data() {
    return {
      labelWidth: '84px',
      outCitys: ['北京', '深圳', '上海', '香港', '澳门', '广州', '杭州'],
      inCitys: ['纽约', '华盛顿', '旧金山', '西雅图', '芝加哥', '休斯敦', '洛杉矶'],
      countries: ['美国', '德国', '日本', '英国', '法国', '西班牙'],
      traffics: ['飞机', '轮船', '火车', '汽车', '其他'],
      purposes: ['留学', '旅游', '工作', '外交', '其他'],
      creditTypes: ['身份证', '社保号', '军官证', '其他']
    }
  },
  methods: {
    handleClick() {
      this.$emit('search')
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

    .el-date-editor {

      & > .el-input__inner {
        padding-left: 15px;
        padding-right: 15px;
      }

      & > .el-input__prefix {
        display: none;
      }
    }
    .el-input {
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
