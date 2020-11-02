<template>
  <div class="group-list">
    <el-radio-group v-model="checked" class="group-list__wrap">
      <group-item v-for="(item, index) in data" :key="item.id" :data="item" :label="index" />
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
    },
    checkedIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    checked: {
      get() {
        return this.checkedIndex
      },
      set(val) {
        this.$emit('update:checkedIndex', val)
      }
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
