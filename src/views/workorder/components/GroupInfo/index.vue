<template>
  <div class="grouplist">
    <div style="display:flex;justify-content:space-between">
      <div class="groupinfo-list">
        <div class="groupinfo-list__title list-item">搜救队信息</div>
        <div class="groupinfo-list__body">
          <div><span>队名：</span><span>{{ data.name }}</span></div>
          <div><span>队长：</span><span>{{ data.captain }}</span></div>
          <div><span>与救助人员距离：</span><span>{{ data.distance }}</span></div>
          <div><span>最新定位时间：</span><span>{{ data.posTime }}</span></div>
          <div><span>物资：</span><span>{{ data.equips }}</span></div>
        </div>
      </div>

      <div class="groupinfo-radar">
        <div class="list-item">搜救队能力雷达</div>
        <skills-radar class="groupinfo-radar__cvs" width="260px" height="240px" :data="data.radar" />
      </div>

    </div>

    <el-row :gutter="22">
      <el-col v-for="item in data.members" :key="item.id" :span="8">
        <member-item :data="item" />
      </el-col>
    </el-row>

    <el-button type="primary" @click="handleClick">确认派单</el-button>

  </div>
</template>

<script>
import MemberItem from './MemberItem'
import SkillsRadar from '@/components/SkillsRadar'

export default {
  components: { MemberItem, SkillsRadar },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    handleClick() {
      this.$router.push('/tracing')
    }
  }
}
</script>

<style lang="scss">
.list-item {
  position: relative;
  font-size: 14px;
  line-height: 14px;
  text-indent: 1em;
  &::after {
    content: '';
    width: 3px;
    height: 1em;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #2762FC;
    border-radius: 26px;
  }
}

.groupinfo-list {
  color: white;
  width: 287px;
  margin-bottom: 36px;
  &__title {
    font-weight: 500;
    padding-bottom: 18px;
    border-bottom: 1px solid #ffffff77;
    margin-bottom: 20px;
  }

  &__body {
    div {
      margin-top: 18px;
      display: flex;
      font-size: 14px;
      line-height: 14px;

      span:first-child {
        white-space: nowrap;
        // opacity: .5;
      }
      span:last-child {
        // margin-left: 10px;
      }
    }
  }
}
.groupinfo-radar {
  position: relative;
  width: 325px;
  height: 250px;

  &__cvs {
    position: absolute;
    right: 0px;
    top: 0px;
  }
}
</style>
