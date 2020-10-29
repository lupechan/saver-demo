<template>
  <div class="tracing-container">
    <div class="tracing-slider">
      <dogear-box title="求救人" style="flex: 0 0 348px" :no-scoll="true">
        <humen-list :info="helpSeekerData">
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
        </humen-list>
      </dogear-box>

      <dogear-box title="搜救组">
        <template v-slot:header-append>
          <div class="tracing__team">
            <div>搜救组： {{ rescueTeamData.name }}</div>
            <div>人数： {{ rescueTeamData.size }}人</div>
            <div>队长： {{ rescueTeamData.captain }}</div>
          </div>
        </template>
        <humen-list v-for="info in rescueTeamData.members" :key="info.userId" :info="info" />
      </dogear-box>
    </div>

    <div class="tracing-main">
      <div class="tracing__map">
        <dogear-box :no-scoll="true" class="tracing__mapbg" :style="`background-image:url(${mapbg})`">
          <div style="width:100%;">
            <img src="@/assets/map_images/Group_101.png" width="326" style="position:absolute;bottom:20px;right:20px">

            <singal-stick style="top:45%;left:35%" />
            <singal-stick style="top:51%;left:24%" />
            <singal-stick style="top:57%;left:35%" />

            <mark-stick style="top:53.5%;left:31.5%" title="1" />
            <mark-stick style="top:70%;left:50%" title="2" />

            <seeker-stick style="top:56%;left:40%" />
          </div>
          <template v-for="item in rescueTeamData.members">
            <stickies
              :key="item.userId"
              active-color="#0085FF"
              active-trigger="always"
              :title="`搜救组： ${ rescueTeamData.name }`"
              :sub-title="`${ item.role }：${ item.name }`"
              @click.native="handleStickClick"
            >
              <div>搜救能力：谈判、狙击、医务</div>
              <div>携带装备：搜救犬、无人机</div>
            </stickies>
          </template>
        </dogear-box>
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

    <humeninfo-dialog title="求救人信息" :visible.sync="showHumenInfo" />
  </div>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import HumenList from '@/components/HumenList'
import MsgList from '@/components/MsgList'
import Stickies from '@/components/Stickies'
import HumeninfoDialog from '@/components/HumenInfoDialog'
import SeekerStick from './components/SeekerStick'
import SingalStick from './components/SingalStick'
import MarkStick from './components/MarkStick'

import mapbg from '@/assets/map_images/map02.png'

import Mock, { Random } from 'mockjs'

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
    size: 6,
    'members|6': [{
      'id|+1': 0,
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
    captain: function() {
      return this.members[0].name
    },
    'radar|5': ['@integer(40, 90)'],
    equips: '无人机、搜救犬、医疗包',
    distance: '@integer(10, 80)km'
  },
  'records|20': [{
    'title': '@datetime("yyyy.MM.dd HH:mm")',
    'subTitle': '李四位置坐标：35.1234.23.1234'
  }],
  'keyInfo|4': [{
    'title': () => {
      return `${Random.datetime('yyyy.MM.dd HH:mm')}    ${Random.pick(['正在谈判', '救助状态', '正在搜救'])}`
    }
  }]
})

export default {
  name: 'Tracing1',
  components: { DogearBox, HumenList, MsgList, Stickies, HumeninfoDialog, SeekerStick, SingalStick, MarkStick },
  data() {
    return {
      showHumenInfo: false,
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
  },
  methods: {
    handleStickClick() {
      // this.$router.push('/workorder')
    }
  }

}
</script>

<style lang="scss">

.tracing-container {
  display: flex;
  // height: calc(100vh - 110px);
  width: 100%;
  height: 750px;

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
  background-size: cover;
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
