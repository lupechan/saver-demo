<template>
  <div class="tipsbox">
    <span>{{ name }}</span>
    <span>{{ value }}</span>
    <div class="dotban-bottom" />
    <div class="dotban-top" />
  </div>
</template>

<script>
export default {
  name: 'TipsBox',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.tipsbox {
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  height: 66px;
  padding: 20px;
  // overflow: hidden;

  background: rgba(7, 18, 52, 0.7);
  mix-blend-mode: normal;
  // opacity: 0.7;
  border: 1px solid $primaryBorderColor;
  // border-image: linear-gradient(#ddd,#000);
  box-sizing: border-box;
  box-shadow: inset 2px 2px 20px rgba(52, 3, 191, 0.8);

  & + & {
    margin-left: 20px;
  }

  & > span {
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1;
    font-weight: 500;
  }

  & > span:nth-child(2) {
    color: #24CBFF;
    padding-left: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid $primaryBorderColor;
    border-image: linear-gradient(90deg, #155EAF00 20%, #24CBFFFF 50%, #155EAF00 80%) 0 30 30 30
  }
}
</style>
