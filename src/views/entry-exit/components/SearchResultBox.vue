<template>
  <div class="search-result-box">
    <div class="search-result-box__item">
      <div class="dot-list-title">时间</div>
      <div class="dot-list-subtitle">2020.11.01 ~ 2020.11.02</div>
    </div>

    <div class="search-result-box__item">
      <div class="dot-list-title">总出境人数</div>
      <div class="dot-list-subtitle">
        <span>男性：<el-link type="primary">6</el-link> 人</span>
        <span>女性：<el-link type="primary">4</el-link> 人</span>
      </div>
    </div>

    <div class="search-result-box__item">
      <div class="dot-list-title">目的国家：印度</div>
      <div class="dot-list-subtitle">
        <span>已入境：<el-link type="primary">6</el-link> 人</span>
        <span>待入境：<el-link type="primary">6</el-link> 人</span>
      </div>
    </div>

    <div class="search-result-box__item">
      <div class="dot-list-title">出境目的</div>
      <div class="dot-list-subtitle">留学</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.search-result-box {
  padding: 20px;

  &__item + &__item{
    margin-top: 30px;
  }
}
.dot-list-title {
  position: relative;
  font-size: 14px;
  line-height: 14px;
  text-indent: 1em;
  &::after {
    content: '';
    width: 3px;
    height: 1em;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #2762FC;
    border-radius: 26px;
  }
}

.dot-list-subtitle {
  text-indent: 14px;
  font-size: 12px;
  line-height: 12px;
  color: white;
  margin-top: 14px;
  // opacity: 0.5;
  span {
    text-indent: 0;
  }
  span + span {
    margin-left: 55px;
  }
}
</style>
