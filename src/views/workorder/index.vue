<template>
  <div class="workorder-container">
    <dogear-box title="求救人：张三">
      <div class="workorder">
        <group-list :data="groups" class="workorder__groups-block" />
        <div class="workorder__info-block">

        </div>
      </div>
    </dogear-box>
  </div>
</template>

<script>
import Mock from 'mockjs'
import DogearBox from '@/components/DogearBox'
import GroupList from './components/GroupList/index'

const data = Mock.mock({
  'groups|10': [{
    id: '@id'

  }]
})

export default {
  name: 'WorkOrder',
  components: { DogearBox, GroupList },
  computed: {
    groups() {
      return data.groups
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
  }
}

</style>
