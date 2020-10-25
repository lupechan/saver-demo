<template>
  <div class="msglist-block">
    <div v-for="(item, index) in data" :key="index" class="msglist-item">
      <div class="msglist__title">{{ item.title }}</div>
      <div class="msglist__subtitle">{{ item.subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsgList',
  props: {
    data: {
      type: Array,
      default() { return [] }
    }
  }
}
</script>

<style lang="scss">
.msglist-block {
  padding: 20px;
}

.msglist-item {
  & + & {
    margin-top: 25px;
  }
}

.msglist__title {
  font-size: 14px;
  line-height: 1.2;
  color: white;
  position: relative;

  & + .msglist__subtitle {
    margin-top: 8px;
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

.msglist__subtitle {
  font-size: 12px;
  line-height: 12px;
  color: white;
  opacity: 0.5;
}
</style>
