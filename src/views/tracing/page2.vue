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
        <dogear-box :no-scoll="true" class="tracing__mapbg" :style="`background-image:url(${mapbg})`">
          <div style="width:100%;">
            <img src="@/assets/map_images/Group_90.png" style="position:absolute;top:40%;left:24%">
            <img src="@/assets/map_images/Group_102.png" style="position:absolute;bottom:20px;right:20px">
            <img src="@/assets/map_images/Group_146.png" style="position:absolute;top:calc(40% + 100px);left:calc(24% + 105px)">
            <div style="position:absolute;top:50%;left:10%">
              <img src="@/assets/map_images/Vector_51.png" style="position:absolute;top:0;left:0">
              <img src="@/assets/map_images/Vector_5.png" style="position:absolute;top:20px;left:20px">
            </div>
            <div style="position:absolute;top:66%;left:53%">
              <img src="@/assets/map_images/Vector_61.png" style="position:absolute;top:0;left:0">
              <img src="@/assets/map_images/Vector_6.png" style="position:absolute;top:20px;left:40px">
            </div>
            <div style="position:absolute;top:23%;left:55%">
              <img src="@/assets/map_images/Vector_41.png" style="position:absolute;top:0;left:0">
              <img src="@/assets/map_images/Vector_4.png" style="position:absolute;top:100px;left:30px">
            </div>
          </div>
          <template v-for="item in rescueTeamData.members">
            <stickies
              :key="item.userId"
              :pos="[20, 20]"
              :title="`搜救组： ${ rescueTeamData.name }`"
              :sub-title="`队长：${ rescueTeamData.captain }   人数：${ rescueTeamData.size }人`"
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
  </div>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import HumenInfo from '@/components/HumenInfo'
import MsgList from '@/components/MsgList'
import Stickies from '@/components/Stickies'

import Mock, { Random } from 'mockjs'
import mapbg from '@/assets/map_images/map02.png'

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
  components: { DogearBox, HumenInfo, MsgList, Stickies },
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
