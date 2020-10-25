<template>
  <div class="tracing-container">
    <div class="tracing-slider">
      <dogear-box title="求救人">
        <humen-info :info="helpSeekerData">
          <template v-slot:userinfo-append>
            <el-dropdown class="tracing__dropdown">
              <el-button type="primary" size="mini">
                搜救状态<i class="el-icon-arrow-down el-icon--right" />
              </el-button>
              <el-dropdown-menu slot="dropdown" class="tracing__dropdown-menu">
                <el-dropdown-item v-for="item in statusOptions" :key="item">{{ item }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </humen-info>
      </dogear-box>

      <dogear-box title="搜救组">
        <template v-slot:header-append>
          <div class="tracing__team">
            <div>搜救组： {{ rescueTeamData.name }}</div>
            <div>人数： {{ rescueTeamData.size }}人</div>
            <div>队长： {{ rescueTeamData.captain }}</div>
          </div>
        </template>
        <humen-info v-for="info in rescueTeamData.members" :key="info.userId" :info="info" />
      </dogear-box>
    </div>

    <div class="tracing-main">
      <div class="tracing__map">
        <dogear-box :no-scoll="true" class="tracing__mapbg" :style="`background-image:url(${mapbg})`" />
      </div>
    </div>

    <div class="tracing-slider">
      <dogear-box title="追踪日志" style="flex:2">
        <msg-list :data="records" />
      </dogear-box>

      <dogear-box title="当前状态重要信息" style="flex:1">
        <msg-list :data="keyInfo" />
      </dogear-box>
    </div>
  </div>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import HumenInfo from '@/components/HumenInfo'
import MsgList from '@/components/MsgList'

import Mock, { Random } from 'mockjs'
import mapbg from '@/assets/map_images/03.jpg'

const data = Mock.mock({
  'helpSeeker': {
    userId: '@id',
    username: '@cname',
    account: /[a-zA-Z0-9]{8,13}/,
    tel: /\+86 130\d{8}/,
    callTime: '@datetime("yyyy.MM.dd HH:mm")',
    posTime: '@datetime("yyyy.MM.dd HH:mm")',
    'abo|1': ['A', 'B', 'O', 'AB'],
    history: '无',
    allergen: '无'
  },
  'rescueTeam': {
    name: '长城三组',
    captain: '张三',
    size: 6,
    'members|6': [{
      username: '@cname',
      tel: /\+86 130\d{8}/,
      status: '队员',
      posTime: '@datetime("yyyy.MM.dd HH:mm")'
    }]
  },
  'records|20': [{
    'title': '@datetime("yyyy.MM.dd HH:mm")',
    'subTitle': '李四位置坐标：35.1234.23.1234'
  }],
  'keyInfo|4': [{
    'title': () => {
      return `${Random.datetime('yyyy.MM.dd HH:mm')} ${Random.pick(['正在谈判', '救助状态', '正在搜救'])}`
    }
  }]
})

export default {
  name: 'Tracing2',
  components: { DogearBox, HumenInfo, MsgList },
  data() {
    return {
      statusOptions: ['失联状态', '正在搜救', '谈判状态', '告警状态'],
      mapbg
    }
  },
  computed: {
    helpSeekerData() {
      return data.helpSeeker
    },
    rescueTeamData() {
      return data.rescueTeam
    },
    records() {
      return data.records
    },
    keyInfo() {
      return data.keyInfo
    }
  }

}
</script>

<style lang="scss">
.tracing-container {
  display: flex;
  height: calc(100vh - 110px);
  width: 100%;
  // over
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    & > div + div {
      margin-top: 20px;
    }
  }
  & > div + div{
    margin-left: 30px;
  }
}

.tracing-slider {
  flex:0 0 307px;
}

.tracing-main {
  width: 0;
  flex: auto;
}

.tracing__tipsbar {
  display: flex;
}

.tracing__map {
  height: 0;
  flex: auto;
}

.tracing__mapbg {
  background-size: contain;
  background-repeat: no-repeat;
}

.tracing__team {
  padding: 20px 20px 0 20px;
  font-size: 14px;
  line-height: 14px;
  color: #FFFFFF;

  & > div {
    padding-bottom: 24px;
  }

  & > div:last-child {
    border-bottom: 1px solid #154689;
  }
}

.tracing__dropdown {
  position: absolute;
  right: 0;
  .el-button {
    background-color: rgba(7, 18, 52, 0.7);
    border: 1px solid #155EAF;
  }
}

.tracing__dropdown-menu {
  background: rgba(7, 18, 52, 0.7);
  border: 1px solid #155EAF;
  .el-dropdown-menu__item {
    color: white;
  }

  .el-dropdown-menu__item:hover {
    background: rgb(5, 28, 95)
  }
}
</style>
