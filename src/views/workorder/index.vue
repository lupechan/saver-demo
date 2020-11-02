<template>
  <div class="workorder-container">
    <dogear-box title="求救人：张三">
      <div class="workorder">
        <group-list :checked-index.sync="checkedIndex" :data="groups" class="workorder__groups-block" />
        <div class="workorder__info-block">
          <group-info :data="activeGroup" />
        </div>
      </div>
    </dogear-box>
  </div>
</template>

<script>
import Mock from 'mockjs'
import DogearBox from '@/components/DogearBox'
import GroupList from './components/GroupList/index'
import GroupInfo from './components/GroupInfo/index'

import avatars from '@/assets/map_images/avatars.js'

const data = Mock.mock({
  'groups|10': [{
    'id|+1': 0,
    name: function() {
      const no = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'][this.id]
      return `长城${no}组`
    },
    size: 6,
    'members|6': [{
      'id|+1': 0,
      'avatar|1': avatars,
      name: '@cname',
      tel: /\130\d{8}/,
      role: function(a, b) {
        const no = (this.id + 1) % 6
        if (no === 1) return '队长'
        if (no === 2) return '副队长'
        return '队员'
      },
      posTime: '@datetime("2020.MM.dd HH:mm")',
      skills: function() {
        return ['狙击', '谈判', '医务', '搜救'][~~(Math.random() * 4)]
      }
    }],
    posTime: '@datetime("2020.MM.dd HH:mm")',
    avatar: function() {
      return this.members[0].avatar
    },
    captain: function() {
      return this.members[0].name
    },
    'radar|5': ['@integer(40, 90)'],
    equips: '无人机、搜救犬、医疗包',
    distance: '@integer(10, 80)km'
  }]
})

export default {
  name: 'WorkOrder',
  components: { DogearBox, GroupList, GroupInfo },
  data() {
    return {
      checkedIndex: 0
    }
  },
  computed: {
    groups() {
      return data.groups.sort((a, b) => { return parseInt(a.distance) - parseInt(b.distance) })
    },
    activeGroup() {
      return this.groups[this.checkedIndex]
    }
  }
}
</script>

<style lang="scss">

.workorder-container {
  padding: 0 18px;
}
.workorder {
  display: flex;
  height: calc(100vh - 110px);
  min-height: 686px;
  &__groups-block {
    // flex: 0 0 400px;
    height: 100%;
    margin-right: 20px;
    // overflow-y: auto;
  }

  &__info-block {
    flex: 0 0 884px;
    height: 100%;
    background: rgba(7, 18, 52, 0.7);
    mix-blend-mode: normal;
    border: 1px solid #155EAF;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 20px rgba(52, 3, 191, 0.8);
    border-radius: 4px;
    padding: 30px;
    overflow-y: auto;
  }
}

</style>
