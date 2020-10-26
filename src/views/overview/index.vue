<template>
  <div class="overview-container">
    <div class="overview-slider">
      <dogear-box title="重点关注">
        <humen-info v-for="info in focusData" :key="info.userId" :info="info" />
      </dogear-box>
    </div>

    <div class="overview-main">
      <div class="overview__tipsbar">
        <tips-box v-for="tip in tipsData" :key="tip.name" :name="tip.name" :value="tip.value" />
      </div>

      <div class="overview__map">
        <dogear-box :no-scoll="true" class="overview__mapbg" :style="`background-image:url(${mapbg})`">
          <div class="overview__mapfront">
            <img :src="map" width="100%">
            <template v-for="item in helpSeekerData">
              <stickies
                :key="item.userId"
                :pos="[20, 20]"
                :title="`${item.username}（${item.status}）`"
                :sub-title="item.tel"
                active-trigger="always"
                @click.native="handleStickClick"
              >
                <span>最新定位时间：2020.11.01 17:33:26</span>
              </stickies>
            </template>
          </div>
        </dogear-box>
      </div>

      <div class="overview__table">
        <dogear-box>
          <el-table :data="tableData">
            <el-table-column align="center" prop="status" label="状态" width="60" />
            <el-table-column align="center" prop="username" label="姓名" />
            <el-table-column align="center" prop="job" label="职务" />
            <el-table-column align="center" prop="posTime" label="最新定位时间" width="150" />
            <el-table-column align="center" prop="posCity" label="最新定位城市" width="120" />
            <el-table-column align="center" prop="posPoint" label="最新定位坐标" width="130" />
          </el-table>
        </dogear-box>
      </div>
    </div>

    <div class="overview-slider">
      <dogear-box title="求救人员" style="flex:3">
        <humen-info v-for="info in helpSeekerData" :key="info.userId" :info="info" />
      </dogear-box>

      <dogear-box title="求救信息" style="flex:1">
        <msg-list :data="helpSeekData" />
      </dogear-box>
    </div>
  </div>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import HumenInfo from '@/components/HumenInfo'
import MsgList from '@/components/MsgList'
import Stickies from '@/components/Stickies'
import TipsBox from './components/TipsBox'

import mapbg from '@/assets/map_images/mapbg.png'
import map from '@/assets/map_images/map01.png'

import Mock, { Random } from 'mockjs'

const data = Mock.mock({
  'focus|30': [{
    userId: '@id',
    username: '@cname',
    account: /[a-zA-Z0-9]{8,13}/,
    'status|1': ['失联状态', '正在搜救', '谈判状态', '告警状态'],
    tel: /\+86 130\d{8}/,
    callTime: '@datetime("yyyy.MM.dd HH:mm")',
    posTime: '@datetime("yyyy.MM.dd HH:mm")',
    pos: '孟买（23.2345.33.1234）',
    job: '外交官',
    age: '@integer(30, 60)',
    'abo|1': ['A', 'B', 'O', 'AB'],
    history: '无',
    allergen: '无'
  }],
  tips: [
    { name: '突发事件数', value: '@integer(2, 20)' },
    { name: '求救人员总数', value: '@integer(2, 20)' },
    { name: '重要求救人员总数', value: '@integer(2, 20)' }
  ],
  'table|2': [{
    id: '@id',
    username: '@cname',
    job: '外交官',
    tel: /130\d{8}/,
    status: '失联',
    posTime: '@datetime("yyyy.MM.dd HH:mm:ss")',
    posCity: '孟买',
    posPoint: '23.2345.33.1234'
  }],
  'helpSeeker|20': [{
    userId: '@id',
    username: '@cname',
    'status|1': ['正在搜救', '救助状态', '告警状态'],
    tel: /\+86 130\d{8}/,
    posTime: '@datetime("yyyy.MM.dd HH:mm")',
    pos: '孟买（23.2345.33.1234）'
  }],
  'helpSeek|20': [{
    'title': () => {
      return `${Random.cname()} 于${Random.datetime('yyyy.MM.dd HH:mm')}在印度孟买求救`
    }
  }]
})

export default {
  name: 'Overview',
  components: { DogearBox, HumenInfo, TipsBox, MsgList, Stickies },
  data() {
    return { mapbg, map }
  },
  computed: {
    focusData() {
      return data.focus
    },
    tipsData() {
      return data.tips
    },
    tableData() {
      return data.table
    },
    helpSeekerData() {
      return data.helpSeeker
    },
    helpSeekData() {
      return data.helpSeek
    }
  },
  methods: {
    handleStickClick() {
      this.$router.push('/tracing/page1')
    }
  }

}
</script>

<style lang="scss">
.overview-container {
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

.overview-slider {
  width: 0;
  flex:0 0 307px;
}

.overview-main {
  width: 0;
  flex: auto;
}

.overview__tipsbar {
  display: flex;
}

.overview__map {
  height: 0;
  flex: auto;
}

.overview__mapbg {
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  padding: 20px;
}

.overview__table {
  flex: 0 0 148px;
  th, td {
    border: none !important;
  }
  .el-table::before {
    height: 0
  }
}
</style>
