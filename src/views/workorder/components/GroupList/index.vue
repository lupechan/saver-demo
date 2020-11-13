<template>
  <div class="group-list">
    <el-checkbox-group v-model="currentChecked" class="group-list__wrap" @change="handleCheckedChange">
      <group-item v-for="(item, index) in data" :key="item.id" :data="item" :label="index" />
    </el-checkbox-group>
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
    checkedList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentChecked: this.checkedList
    }
  },
  methods: {
    handleCheckedChange(val) {
      this.currentChecked = val
      this.$emit('update:checkedList', val)
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
