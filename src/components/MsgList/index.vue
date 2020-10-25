<template>
  <div class="msglist-block">
    <div v-for="item in data" :key="item" class="msglist__title">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'MsgList',
  props: {
    data: {
      type: Object,
      default() { return {} }
    }
  }
}
</script>

<style lang="scss">
.msglist-block {
  padding: 20px;
}

.msglist__title {
  font-size: 14px;
  line-height: 14px;
  color: white;
  position: relative;

  & + & {
    margin-top: 25px;
  }

  &::after {
    content: '';
    width: 3px;
    height: 12px;
    position: absolute;
    top: 2px;
    left: -10px;
    background-color: #0084FF;
  }
}
</style>
