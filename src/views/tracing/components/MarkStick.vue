<template>
  <div class="mark-stick">
    <div class="stick-icon" :style="`background-image: url(${stickIcon})`">
      <span class="stick-title">{{ title }}</span>
      <!-- <img src="@/assets/map_images/stick2.png" width="20"> -->
    </div>
    <div v-if="showBoundary" class="stick-bound" />
    <div v-if="showBoundary" class="stick-wave" />
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
    },
    showBoundary: Boolean
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

  .stick-bound, .stick-wave {
    width: 268px;
    height: 268px;
    border-radius: 50%;
    position: absolute;
    left: -127px;
    top: -144px;
    // transform: translate(-50%, -50%);
    background: #193AEC;;
    opacity: 0.2;
    z-index: 1;
  }

  .stick-wave {
    transform: scale(0);
    animation: wave 2s ease-in-out 1s infinite;
  }
}

</style>
