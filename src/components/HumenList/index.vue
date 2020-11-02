<template>
  <div class="humenlist-block">
    <div class="humenlist-user humenlist-item">
      <div class="humenlist-user__avatar">
        <img :src="avatar" width="100%">
      </div>
      <div class="`humenlist-user__title`">
        <a v-if="info.username" @click="handleShowInfo">{{ info.username }}</a>
        <span v-else>{{ info.name }}</span>
        <span v-show="info.role != null">（{{ info.role }}）</span>
        <div v-if="info.status != null" class="humenlist-user__status">状态：{{ info.status }} </div>
      </div>
      <slot name="userinfo-append" />
    </div>

    <div v-for="item in validInfo" :key="item" class="humenlist-item">
      {{ item }}
    </div>

    <humeninfo-dialog v-if="info.username" title="求救人信息" :visible.sync="showHumenInfo" :data="info" />
  </div>
</template>

<script>
const infoWords = [
  { key: 'tel', name: '手机号' },
  { key: 'creditId', name: '证件号' },
  { key: 'callTime', name: '求救时间' },
  { key: 'posTime', name: '最新定位时间' },
  { key: 'pos', name: '最新定位' },
  { key: 'job', name: '职位' },
  { key: 'age', name: '年龄' },
  { key: 'abo', name: '血型' },
  { key: 'history', name: '既往病史' },
  { key: 'allergen', name: '过敏原' }
]

import defaultAvatar from '@/assets/map_images/1.png'
import HumeninfoDialog from '@/components/HumenInfoDialog'

export default {
  name: 'HumenList',
  components: { HumeninfoDialog },
  props: {
    info: {
      type: Object,
      default() { return {} }
    }
  },
  data() {
    return {
      showHumenInfo: false
    }
  },
  computed: {
    avatar() {
      return this.info.avatar || defaultAvatar
    },
    validInfo() {
      const info = []
      infoWords.forEach(word => {
        if (word.key in this.info) info.push(`${word.name}：${this.info[word.key]}`)
      })
      return info
    }
  },
  methods: {
    handleShowInfo() {
      this.showHumenInfo = true
    }
  }
}
</script>

<style lang="scss">
.humenlist-block {
  padding: 0 20px;
  & + &{
    padding-top: 20px;
    .humenlist-user {
      padding-top: 20px;
      border-top: 1px solid #154689;
    }
  }
}

.humenlist-item {
  position: relative;
  font-size: 14px;
  line-height: 14px;
  opacity: 0.8;
  color: #FFFFFF;
  white-space: nowrap;

  & + & {
    margin-top: 20px
  }
}

.humenlist-user {
  display: flex;
  align-items: center;
  opacity: 1;
  &__avatar {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border: 1px solid #FFFFFF77;
    border-radius: 50%;
    overflow: hidden;
  }

  &__title {
    font-weight: 500;
    & > a:hover {
      text-decoration: underline;
    }
  }

  &__status {
    font-size: 12px;
    margin-top: 8px;
  }
}

</style>
