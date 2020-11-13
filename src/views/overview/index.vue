<template>
  <div class="overview-container">
    <div class="overview-slider">
      <dogear-box title="重点关注">
        <humen-list v-for="info in focusData" :key="info.userId" :info="info" />
      </dogear-box>
    </div>

    <div class="overview-main">
      <div class="overview__tipsbar">
        <tips-box v-for="tip in tipsData" :key="tip.name" :name="tip.name" :value="tip.value" />
      </div>

      <div class="overview__map">
        <dogear-box :no-scoll="true" class="overview__mapbg">
          <div class="overview__mapfront">
            <img :src="map" width="100%">
            <img src="@/assets/map_images/Group_262.png" width="118" style="position:absolute;bottom:20px;right:20px">
            <template v-for="(item, index) in helpSeekerData">
              <stickies
                :key="item.userId"
                :pos="poses[index]"
                :avatar="item.avatar"
                :title="`${item.username}（${item.status}）`"
                :sub-title="item.tel"
                :active-color="item.status === '失联状态' ? '#FF2482' : '#24CBFFFF'"
                active-trigger="always"
                @click.native="handleStickClick(item)"
              >
                <span>最新定位时间：{{ item.posTime }}</span>
              </stickies>
            </template>
          </div>
        </dogear-box>
      </div>

      <div class="overview__table">
        <dogear-box>
          <el-table :data="tableData" height="135px" style="overflow:hidden">
            <el-table-column align="center" prop="status" label="状态" :width="fixPx(80)" />
            <el-table-column align="center" prop="username" label="姓名" :width="fixPx(80)" />
            <el-table-column align="center" prop="job" label="职务" :width="fixPx(90)" />
            <el-table-column align="center" prop="posTime" label="最新定位时间" :width="fixPx(160)" />
            <el-table-column align="center" prop="posCity" label="最新定位城市" :width="fixPx(130)" />
            <el-table-column align="center" prop="posPoint" label="最新定位坐标" :width="fixPx(160)" />
          </el-table>
        </dogear-box>
      </div>
    </div>

    <div class="overview-slider">
      <!-- <dogear-box title="求救人员" style="flex:3">
        <humen-list v-for="info in helpSeekerData" :key="info.userId" :info="info" />
      </dogear-box> -->

      <dogear-box title="求救信息" style="flex:1">
        <msg-list :data="helpSeekData" />
      </dogear-box>
    </div>
  </div>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import HumenList from '@/components/HumenList'
import MsgList from '@/components/MsgList'
import Stickies from '@/components/Stickies'
import TipsBox from './components/TipsBox'

import { fixPx } from '@/utils'

import map from '@/assets/map_images/map.png'
import avatars from '@/assets/map_images/avatars.js'

import Mock, { Random } from 'mockjs'

const data = Mock.mock({
  'focus|16': [{
    'msgid|+1': 0,
    'avatar|1': function() {
      const no = (this.msgid + 1) % 16
      return avatars[no]
    },
    userId: '@id',
    creditId: '@id',
    username: '@cname',
    'status|1': ['失联状态', '正在搜救', '谈判状态', '告警状态'],
    tel: /\+86 130\d{8}/,
    posTime: '@datetime("2020.MM.dd HH:mm")',
    pos: '孟买（23.2345.33.1234）',
    job: '外交官',
    age: '@integer(30, 60)'
  }],
  tips: [
    { name: '突发事件数', value: '@integer(2, 20)' },
    { name: '求救人员总数', value: '@integer(2, 20)' },
    { name: '求救要客总数', value: '@integer(2, 20)' }
  ],
  'table|3': [{
    'avatar|1': avatars,
    id: '@id',
    username: '@cname',
    job: '外交官',
    tel: /130\d{8}/,
    status: '失联',
    posTime: '@datetime("2020.MM.dd HH:mm:ss")',
    posCity: '孟买',
    posPoint: '23.2345.33.1234'
  }],
  'helpSeeker|10': [{
    'msgid|+1': 0,
    'avatar|1': function() {
      const no = (this.msgid + 1) % 10
      return avatars[no]
    },
    userId: '@id',
    username: '@cname',
    'status|1': ['失联状态', '失联状态', '正在搜救', '救助状态', '告警状态'],
    tel: /\+86 130\d{8}/,
    posTime: '@datetime("2020.MM.dd HH:mm")',
    pos: '孟买（23.2345.33.1234）'
  }],
  'helpSeek|20': [{
    'title': () => {
      return `${Random.cname()} 于${Random.datetime('2020.MM.dd HH:mm')}在印度孟买求救`
    }
  }]
})

const poses = [
  ['30%', '30%'],
  ['70%', '30%'],
  ['76%', '40%'],
  ['30%', '44%'],
  ['20%', '35%'],
  ['28%', '45%'],
  ['70%', '50%'],
  ['80%', '65%'],
  ['37%', '25%'],
  ['60%', '40%']
]

export default {
  name: 'Overview',
  components: { DogearBox, HumenList, TipsBox, MsgList, Stickies },
  data() {
    return {
      map,
      timer: [],
      poses,
      tableData: data.table
    }
  },
  computed: {
    focusData() {
      return data.focus
    },
    tipsData() {
      return data.tips
    },
    helpSeekerData() {
      return data.helpSeeker
    },
    helpSeekData() {
      return data.helpSeek
    }
  },
  mounted() {
    this.timer.push(setInterval(() => {
      this.tableMove()
    }, 1200))
  },
  beforeDestroy() {
    this.timer.forEach(item => clearInterval(item))
  },
  methods: {
    getTableData() {
      const row = Mock.mock({
        id: '@id',
        username: '@cname',
        job: '外交官',
        tel: /130\d{8}/,
        status: '失联',
        posTime: '@datetime("2020.MM.dd HH:mm:ss")',
        posCity: '孟买',
        posPoint: '23.2345.33.1234'
      })

      // this.tableData.pop()
      // this.tableData.unshift(row)
      // this.tableMove()
      return row
    },
    tableMove() {
      // 48px 为表格行高
      const t = document.getElementsByClassName('el-table__body')
      setTimeout(() => {
        t[0].style.transition = 'transform .5s'
        t[0].style.transform = 'translateY(0)'
      }, 500)

      setTimeout(() => {
        // this.getTableData();
        if (this.tableData.length > 3) {
          this.tableData.pop()
        }
        this.tableData.unshift(this.getTableData())
        t[0].style.transition = 'transform 0s ease 0s'
        t[0].style.transform = 'translateY(-45px)'
      }, 1000)
    },
    handleStickClick(item) {
      const to = item.status === '失联状态' ? '/workorder' : '/tracing'
      this.$router.push(to)
    },
    fixPx
  }

}
</script>

<style lang="scss">
.overview-container {
  display: flex;
  height: 750px;
  width: 100%;
  overflow: auto;
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

  .el-table__body-wrapper {
    overflow: hidden;
    & > table {
      transition: transform 0.5s;
      transform: translateY(-45px);
    }
  }
}
</style>
