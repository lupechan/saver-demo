<template>
  <div class="humeninfo-block">
    <div class="humeninfo-user humeninfo-item">
      <div class="humeninfo-user__avatar" :style="`background-image:url(${avatar})`" />
      <div class="humeninfo-user__title">
        <span>{{ info.username }}</span>
        <span v-show="'status' in info">（{{ info.status }}）</span>
      </div>
      <slot name="userinfo-append" />
    </div>

    <div v-for="item in validInfo" :key="item" class="humeninfo-item">
      {{ item }}
    </div>

  </div>
</template>

<script>
const infoWords = [
  { key: 'tel', name: '手机号' },
  { key: 'account', name: '用户账号' },
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

export default {
  name: 'HumenInfo',
  props: {
    info: {
      type: Object,
      default() { return {} }
    }
  },
  computed: {
    avatar() {
      return defaultAvatar
    },
    validInfo() {
      const info = []
      infoWords.forEach(word => {
        if (word.key in this.info) info.push(`${word.name}：${this.info[word.key]}`)
      })
      return info
    }
  }
}
</script>

<style lang="scss">
.humeninfo-block {
  padding: 0 20px;
  & + &{
    padding-top: 20px;
    .humeninfo-user {
      padding-top: 20px;
      border-top: 1px solid #154689;
    }
  }
}

.humeninfo-item {
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

.humeninfo-user {
  display: flex;
  align-items: center;
  opacity: 1;
  &__avatar {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border: 1px solid #FFFFFF77;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  &__title {
    font-weight: 500;
  }
}

</style>
