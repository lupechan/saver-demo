<template>
  <div class="dogear-block">
    <slot name="header">
      <div v-show="title !== ''" class="dogear-header">
        <div class="dogear-title">{{ title }}</div>
      </div>
    </slot>

    <div class="dogear-body" :style="myStyle">
      <slot />
    </div>
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
    noScoll: Boolean
  },
  computed: {
    myStyle() {
      return this.noScoll ? { overflow: 'hidden' } : {}
    }
  }
}
</script>

<style lang="scss">
.dogear-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(7, 18, 52, 0.7);
  mix-blend-mode: normal;
  // opacity: 0.7;
  border: 1px solid #155EAF;
  box-sizing: border-box;
  box-shadow: inset 2px 2px 20px rgba(52, 3, 191, 0.8);
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
  font-size: 14px;
}

.dogear-body {
  overflow-y: auto;
}
</style>
