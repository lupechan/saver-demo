<template>
  <div class="mark-stick">
    <div class="stick-icon" :style="`background-image: url(${stickIcon})`">
      <span class="stick-title">{{ title }}</span>
      <!-- <img src="@/assets/map_images/stick2.png" width="20"> -->
    </div>
  </div>
</template>

<script>
import stickIcon from '@/assets/map_images/stick2.png'

export default {
  name: 'MarkStick',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      stickIcon
    }
  }
}
</script>

<style lang="scss">
.mark-stick {
  position: absolute;

  .stick-icon {
    width: 20px;
    height: 23px;
    position: absolute;
    left: -3px;
    bottom: 10px;
    background-size: 100% 100%;
    // animation: float 1s ease-in-out infinite alternate;
    text-align: center;
    overflow: hidden;
    z-index: 10;
  }

  .stick-title {
    font-size: 12px;
    line-height: 12px;
  }
}

</style>
