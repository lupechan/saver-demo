<template>
  <div class="workorder-page">
    <div class="workorder-header">
      <div class="header-title">
        <i class="border-line" />
        指派救援工单
      </div>
      <div class="header-content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="搜救组" width="400" align="center">
            <template v-slot="{row}">
              <el-select v-model="row.rescueGroup" style="width:300px" placeholder="某某搜救组" size="small">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="captain" label="队长" width="240" align="center" style="text-align:center" />
          <el-table-column prop="people" label="人数" width="240" align="center" />
          <el-table-column prop="distance" label="与救助人员距离" align="center" />
        </el-table>
      </div>
    </div>
    <div class="workorder-content">
      <div class="content-card">
        <div v-for="(item,index) in cardData " :key="index" :class="{'b': index%num==(num-1)}" class="card-item">
          <div class="card-item-logo">
            <img :src="item.imgUrl" alt="" class="avatar-img">
          </div>
          <p class="captain-name">
            <strong>{{ item.captainName }} <span v-if="item.position">({{ item.position }})</span></strong>
          </p>
          <p class="telephone"><span>手机号码：</span> {{ item.telephone }}</p>
          <p class="lasted-time"><span>最新定位时间：</span> {{ item.lastedTime }}</p>
          <p class="skill"><span>技能：</span> {{ item.skill }}</p>
        </div>
      </div>
    </div>
    <div class="workorder-footer">
      <el-button class="workorder-btn" mini="sm" @click="handleConfirm">确认</el-button>
    </div>
  </div>
</template>
<script>
import $ from '../../jquery.min'
import avatar_1 from '@/assets/map_images/1.png'
import avatar_2 from '@/assets/map_images/2.png'
import avatar_3 from '@/assets/map_images/3.png'
import avatar_4 from '@/assets/map_images/4.png'
import avatar_5 from '@/assets/map_images/5.png'
export default {
  name: 'Workorder',
  data() {
    return {
      // 搜救表格数据
      tableData: [{
        rescueGroup: '',
        captain: '张三',
        people: '5人',
        distance: '500m'
      }],
      // 搜救组选项数据
      options: [{
        value: '选项1',
        label: '搜救组1'
      }, {
        value: '选项2',
        label: '搜救组2'
      }, {
        value: '选项3',
        label: '搜救组3'
      }, {
        value: '选项4',
        label: '搜救组4'
      }, {
        value: '选项5',
        label: '搜救组5'
      }],
      cardData: [
        {
          imgUrl: avatar_1,
          captainName: '张三',
          position: '队长',
          telephone: '15287492156',
          lastedTime: '2020.11.01 12:36',
          skill: '领导'
        },
        {
          imgUrl: avatar_2,
          captainName: '李四',
          position: '副队长',
          telephone: '15287492156',
          lastedTime: '2020.11.01 12:36',
          skill: '狙击'
        },
        {
          imgUrl: avatar_3,
          captainName: '王五',
          position: '应急医务',
          telephone: '15287492156',
          lastedTime: '2020.11.01 12:36',
          skill: '狙击'
        },
        {
          imgUrl: avatar_4,
          captainName: '杨柳',
          position: '队员',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '谈判'
        },
        {
          imgUrl: avatar_5,
          captainName: '王二',
          position: '',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '狙击'
        }
      ],
      num: 3
    }
  },
  updated() {
    this.elect()
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.elect()
    })
    this.elect()
  },
  methods: {
    // 自适应盒子大小
    elect() {
      this.num = Math.round($('.content-card').width() / 428)
      var wid = 'calc(' + 100 / this.num + '%' + ' - ' + (this.num - 1) / this.num * 30 + 'px' + ')'
      var ii = 0
      var inter = setInterval(() => {
        $('.card-item').css({
          width: wid
        })
        ii++
        if ($('.card-item').length > 0 || ii > 1000) {
          clearInterval(inter)
          inter = null
        }
      }, 1)
    },
    handleConfirm() {
      this.$router.push('/tracing/page2')
    }
  }
}
</script>
<style lang="scss">
.workorder-header {
  margin-bottom: 40px;
  .header-title {
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 14px;
    .border-line {
      margin-right: 8px;
      border-left: 4px solid #2b7df8;
    }
  }
  .header-content {
    box-shadow: 2px 2px 20px 0px rgba(52, 3, 191, 0.8) inset;
    .el-table {
      th, td {
        color: white !important;
        font-weight: normal;
      }
    }
  }
}
.workorder-content {
  .content-card {
    display: flex;
    flex-flow: row wrap;
    p {
      margin-bottom: 20px;
      font-size: 14px;
    }
    .card-item {
      box-shadow: 2px 2px 20px 0px rgba(52, 3, 191, 0.8) inset;
      position: relative;
      height: 202px;
      margin-bottom: 30px;
      margin-right: 30px;
      border: 1px solid #155eaf;
      .avatar-img {
        position: absolute;
        left: 30px;
        top: 30px;
        width: 40px;
        height: 40px;
        border-radius: 4px;
      }
      .captain-name {
        margin: 45px 0 33px 84px;
      }
      .telephone,
      .lasted-time,
      .skill {
        margin-left: 84px;
      }
    }
  }
  .card-item.b {
    margin-right: 0;
  }
}
.workorder-footer {
  .workorder-btn {
    width: 108px;
    // height: 36px;
    border: 0;
    background-color: #2762fc;
    color: #fff;
  }
}
</style>
