<template>
  <div class="group-list">
    <el-radio-group v-model="checked" class="group-list__wrap">
      <group-item v-for="item in data" :key="item.id" :data="item" />
    </el-radio-group>
  </div>
</template>

<script>
import GroupItem from './item'
export default {
  components: { GroupItem },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const checked = this.data.length ? this.data[0].id : ''
    return {
      checked: checked
    }
  }
}
</script>

<style lang="scss">
.group-list {
  overflow-y: auto;
  padding: 0 10px 0 20px;
  &__wrap {
    height: 100%;
  // width: 400px;
  }
}
</style>
