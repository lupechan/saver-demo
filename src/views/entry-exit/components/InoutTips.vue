<template>
  <div class="inout">
    <div class="inout__in">{{ inNum }}</div>
    <div class="inout__out">{{ outNum }}</div>
  </div>
</template>

<script>
export default {
  props: {
    inNum: {
      type: Number,
      default: 0
    },
    outNum: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.inout {
  position: absolute;
  display: flex;
  font-size: 12px;
  line-height: 1;
  &__in, &__out {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2em;
    height: 2.2em;
    border: 1px solid transparent;
    border-radius: 50%;
    // height: 0px;
    box-sizing: border-box;
    margin: 2px;
    overflow: hidden;
  }

  &__in {
    color: #24CBFF;
    border-color: #24CBFF;
  }

  &__out {
    color: #FF2482;
    border-color: #FF2482;
  }
}
</style>
