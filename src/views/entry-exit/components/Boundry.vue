<template>
  <el-popover
    ref="popover"
    placement="top-start"
    trigger="hover"
    :offset="10"
    popper-class="boundry-tipbox"
  >
    <img
      slot="reference"
      class="boundry"
      :src="src"
      :style="`left:${left};top:${top};width:${width}`"
    >

    <div slot="default">
      <strong class="boundry__title">{{ title }}</strong>
      <div class="boundry__descr">
        <span>入境人员总数：185人</span>
        <span>男性：<el-link type="primary">86</el-link>人</span>
        <span>女性：<el-link type="primary">99</el-link>人</span>
      </div>
      <div class="boundry__descr">
        <span>待入境总数：100人</span>
        <span>男性：<el-link type="primary">55</el-link>人</span>
        <span>女性：<el-link type="primary">45</el-link>人</span>
      </div>
    </div>
  </el-popover>
</template>

<script>

export default {
  name: 'Boundry',
  props: {
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    left: {
      type: String,
      default: '0%'
    },
    top: {
      type: String,
      default: '0%'
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
.boundry{
  position: absolute;
  cursor: pointer;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
}

.boundry__title {
  display: block;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid white;
}

.boundry__descr {
  font-size: 12px;
  white-space: pre;
  & >  span {
    margin-right: 10px;
  }
  .el-link {
    vertical-align: baseline;
  }

  & + & {
    margin-top: 20px;
  }

}

</style>
