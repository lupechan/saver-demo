<template>
  <!-- <div class="stickies-block" :style="{top, left}"> -->
  <el-popover
    ref="popover"
    class="stickies-block"
    :style="{top, left}"
    placement="top-start"
    trigger="hover"
    :offset="10"
    popper-class="stickies-tipbox"
    @show="handleShow"
    @hide="handleHide"
  >
    <div
      slot="reference"
      class="stickies__pos"
      :style="`background-image:url(${avatar});border-color:${posColor}`"
    />

    <div slot="default">
      <div class="stickies__user">
        <div class="stickies__avatar" :style="`background-image:url(${avatar})`" />
        <div class="stickies__userinfo">
          <div class="stickies__title">{{ title }}</div>
          <div class="stickies__subtitle">{{ subTitle }}</div>
        </div>
      </div>
      <div class="stickies__info">
        <slot />
      </div>
    </div>
  </el-popover>
</template>

<script>

export default {
  name: 'Stickies',
  props: {
    pos: {
      type: Array,
      default() {
        return []
      }
    },
    avatar: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: '#FF2482'
    },
    inactiveColor: {
      type: String,
      default: '#65666F'
    },
    activeTrigger: {
      type: String,
      default: 'hover'
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    top() {
      return this.pos[1] || ~~(10 + Math.random() * 70) + '%'
    },
    left() {
      return this.pos[0] || ~~(10 + Math.random() * 70) + '%'
    },
    posColor() {
      return (this.activeTrigger === 'always' || this.isActive) ? this.activeColor : this.inactiveColor
    }
  },
  methods: {
    handleShow() {
      this.isActive = true
    },
    handleHide() {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss">
.stickies-block {
  position: absolute;
}

.stickies__pos {
  position: relative;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 3px solid #65666F;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 6px;
    width: 0px;
    height: 0px;
    border-color: transparent;
    border-top-color: inherit;
    border-style: solid;
    border-width: 5px;
  }
}

.stickies-tipbox {
  padding: 16px;
  border-radius: 8px;
}

.stickies__user {
  display: flex;
  margin-bottom: 14px;
}

.stickies__avatar {
  flex: 0 0 40px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  background-size: cover;
  margin-right: 14px;
}

.stickies__title {
  font-weight: 500;
  font-size: 14px;
  color: white;
  margin-bottom: 7px;
}

.stickies__subtitle {
  font-size: 12px;
  line-height: 1.2;
  white-space: pre;
}

.stickies__info {
  font-size: 12px;
  line-height: 1.2;
  color: white;
  opacity: 0.8;
}
</style>
