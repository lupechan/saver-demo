<template>
  <div class="workorder-page">
    <div class="workorder-header">
      <div class="header-title">
        <i class="border-line"></i>
        指派救援工单
      </div>
      <div class="header-content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="搜救组" width="400">
            <template v-slot="{row}">
              <el-select v-model="row.rescueGroup" style="width:300px" placeholder="某某搜救组">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="captain" label="队长" width="240" style="text-align:center">
          </el-table-column>
          <el-table-column prop="people" label="人数" width="240">
          </el-table-column>
          <el-table-column prop="distance" label="与救助人员距离">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="workorder-content">
      <div class="content-card">
        <div v-for="(item,index) in cardData " :key="index" :class="{'b': index%num==(num-1)}" class="card-item">
          <div class="card-item-logo">
            <img src="" alt="" class="avatar-img">
          </div>
          <p class="captain-name">张三 <span>(队长)</span></p>
          <p class="telephone"><span>手机号码：</span> 15287492152</p>
          <p class="lasted-time"><span>最新定位时间：</span> 2020.11.01 12:36</p>
          <p class="skill"><span>技能：</span> 领导</p>
        </div>
      </div>
    </div>
    <div class="workorder-footer">
      <el-button class="workorder-btn">确认</el-button>
    </div>
  </div>
</template>
<script>
import $ from '../../jquery.min'
export default {
  name: 'Workorder',
  data () {
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
          captainName: '张三',
          position: '队长',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '领导'
        },
        {
          captainName: '张三',
          position: '队长',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '领导'
        },
        {
          captainName: '张三',
          position: '队长',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '领导'
        },
        {
          captainName: '张三',
          position: '队长',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '领导'
        },
        {
          captainName: '张三',
          position: '队长',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '领导'
        },
        {
          captainName: '张三',
          position: '队长',
          telephone: '15287492152',
          lastedTime: '2020.11.01 12:36',
          skill: '领导'
        }
      ],
      num: 3
    }
  },
  updated () {
    this.elect()
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.elect()
    })
    this.elect()
  },
  methods: {
    // 自适应盒子大小
    elect () {
      this.num = Math.round($('.content-card').width() / 428)
      var wid = 'calc(' + 100 / this.num + '%' + ' - ' + (this.num - 1) / this.num * 12 + 'px' + ')'
      var ii = 0
      var inter = setInterval(() => {
        $('.card-item').css({
          width: wid,
        })
        ii++
        if ($('.card-item').length > 0 || ii > 1000) {
          clearInterval(inter)
          inter = null
        }
      }, 1)
    },
  }
}
</script>
<style scoped lang="scss">
.workorder-header {
  margin: 28px 48px;
  .header-title {
    margin-bottom: 40px;
    .border-line {
      margin-right: 8px;
      border-left: 3px solid #2b7df8;
    }
  }
}
.workorder-content {
  margin: 0 48px;
  .content-card {
    display: flex;
    flex-flow: row wrap;
    .card-item {
      position: relative;
      height: 202px;
      margin-top: 21px;
      margin-right: 12px;
      border: 1px solid #155eaf;
      .avatar-img {
        position: absolute;
        left: 30px;
        top: 30px;
        width: 40px;
        height: 40px;
      }
      .captain-name {
        margin: 45px 0 0 80px;
      }
      .telephone,
      .lasted-time,
      .skill {
        margin-left: 80px;
      }
    }
  }
  .card-item.b {
    margin-right: 0;
  }
}
.workorder-footer {
  margin: 28px 48px;
  .workorder-btn {
    width: 108px;
    height: 48px;
    border: 0;
    background-color: #2762fc;
    color: #fff;
  }
}
</style>
