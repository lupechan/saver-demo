<template>
  <div class="dogear-block">
    <slot name="header">
      <div v-show="title !== ''" class="dogear-header">
        <div class="dogear-title">{{ title }}</div>
      </div>
    </slot>
    <slot name="header-append" />
    <div class="dogear-body" :style="myStyle">
      <slot />
    </div>
    <div class="dotban-bottom" />
  </div>
</template>

<script>
export default {
  name: 'DogearBox',
  props: {
    title: {
      type: String,
      default: ''
    },
    noScoll: Boolean,
    noDogear: Boolean
  },
  computed: {
    myStyle() {
      return this.noScoll ? { overflow: 'hidden' } : {}
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.dogear-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(7, 18, 52, 0.7);
  mix-blend-mode: normal;
  // opacity: 0.7;
  // border: 1px solid transparent;
  box-sizing: border-box;
  box-shadow: inset 2px 2px 20px rgba(52, 3, 191, 0.8);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid $primaryBorderColor;
    // padding: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: #0f0a23;
    border-color: $primaryBorderColor;
    border-width: 1px;
    border-style: none none solid none;
    transform: rotate(45deg) translateY(-35px);
  }
}

.dogear-header {
  background: linear-gradient(90deg, rgba(56, 7, 198, 0.7) 0%, rgba(8, 32, 128, 0) 100%);
  mix-blend-mode: normal;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  color: white;
}

.dogear-title {
  font-weight: 500;
  font-size: 14px;
}

.dogear-body {
  margin: 15px 0;
  overflow-y: auto;
}
</style>
