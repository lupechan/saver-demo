<template>
  <el-popover
    ref="popover"
    placement="top-start"
    trigger="hover"
    :offset="10"
    popper-class="airplane-tipbox"
  >
    <img
      slot="reference"
      class="airplane__icon"
      src="@/assets/map_images/airplane.png"
      :style="planeStyle"
    >

    <div slot="default">
      <strong class="aiplane__title">航班CA1342</strong>
      <div class="aiplane__descr">
        <span>人员总数：100人</span>
        <span>男性：<el-link type="primary">55</el-link>人</span>
        <span>女性：<el-link type="primary">45</el-link>人</span>
      </div>
    </div>
  </el-popover>
</template>

<script>

export default {
  name: 'AirPlane',
  props: {
    planeStyle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
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
.airplane__icon {
  position: absolute;
  width: 19px;
  height: 19px;
  cursor: pointer;
}

.airplane__tipBox {
  padding: 18px 17px;
}

.aiplane__title {
  display: block;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid white;
}

.aiplane__descr {
  font-size: 12px;
  // white-space: pre;
  & >  span {
    margin-right: 10px;
  }
  .el-link {
    vertical-align: baseline;
  }

}

</style>
