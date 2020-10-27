<template>
  <div class="page-main">
    <div class="head">
      <i class="square" />
      <span style="padding-left:8px;font-size: 14px;">救援历史记录</span>
    </div>
    <div class="head-select">
      <div class="head-select-item">
        <div>国家</div>
        <el-select slot="append" v-model="selectData1" style="width:100px;" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="head-select-item">
        <div>城市</div>
        <el-select slot="append" v-model="selectData2" style="width:100px;" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="head-select-item">
        <div>日期</div>
        <el-select slot="append" v-model="selectData3" style="width:100px;" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="head-select-item">
        <div>时间</div>
        <el-select slot="append" v-model="selectData4" style="width:100px;" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="head-select-item">
        <div>报警类型</div>
        <el-select slot="append" v-model="selectData5" style="width:100px;" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>

      <div class="head-select-item">
        <div>事件登记</div>
        <el-select slot="append" v-model="selectData6" style="width:100px;" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="head-search">
      <el-input v-model="inputData" size="small" style="width:60%;margin-right:22px" placeholder="请输入姓名或手机号或用户账号" />
      <el-button size="small" class="search-button" type="primary">搜索</el-button>
    </div>
    <div class="head-table">
      <el-table
        :data="tableData"
        border
        size="small"
      >
        <el-table-column prop="alarmNumber" label="报警编号" width="108" align="center" />
        <el-table-column
          prop="grade"
          label="报警等级"
          align="center"
        />
        <el-table-column
          prop="alarmType"
          label="报警类型"
          align="center"
        />
        <el-table-column
          prop="country"
          label="国家"
          align="center"
        />
        <el-table-column
          prop="city"
          label="城市"
          align="center"
        />
        <el-table-column
          prop="date"
          label="日期"
          align="center"
        />
        <el-table-column
          prop="time"
          label="时间"
          align="center"
        />
        <el-table-column
          prop="helper"
          label="求救人"
          align="center"
        />
        <el-table-column
          prop="phoneNumber"
          label="求救人手机号"
          align="center"
        />
        <el-table-column
          prop="rescueMan"
          label="救援人员"
          align="center"
        />
        <el-table-column
          prop="rescueResult"
          label="救援结果"
          align="center"
        />
        <el-table-column
          prop="opration"
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button type="text" size="medium" @click="handleClick(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin:30px -6px 0px 0px;float:right"
        background
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'History',
  data() {
    return {
      inputData: '',
      selectData1: '',
      selectData2: '',
      selectData3: '',
      selectData4: '',
      selectData5: '',
      selectData6: '',
      // 选择框数据
      options: [{
        value: '选项1',
        label: '印度'
      }, {
        value: '选项2',
        label: '美国'
      }, {
        value: '选项3',
        label: '中国'
      }, {
        value: '选项4',
        label: '英国'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      // 搜救表格数据
      tableData: [{
        alarmNumber: '00001',
        grade: '高',
        alarmType: '火灾',
        country: '印度',
        city: '孟买',
        date: '2016-05-03',
        time: '14:26',
        helper: '张三',
        phoneNumber: '1524688729',
        rescueMan: '李四',
        rescueResult: '已成功救援',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        opration: '1'
      }, {
        alarmNumber: '00001',
        grade: '高',
        alarmType: '火灾',
        country: '印度',
        city: '孟买',
        date: '2016-05-03',
        time: '14:26',
        helper: '张三',
        phoneNumber: '1524688729',
        rescueMan: '李四',
        rescueResult: '已成功救援',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        opration: '1'
      }, {
        alarmNumber: '00001',
        grade: '高',
        alarmType: '火灾',
        country: '印度',
        city: '孟买',
        date: '2016-05-03',
        time: '14:26',
        helper: '张三',
        phoneNumber: '1524688729',
        rescueMan: '李四',
        rescueResult: '已成功救援',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        opration: '1'
      }, {
        alarmNumber: '00001',
        grade: '高',
        alarmType: '火灾',
        country: '印度',
        city: '孟买',
        date: '2016-05-03',
        time: '14:26',
        helper: '张三',
        phoneNumber: '1524688729',
        rescueMan: '李四',
        rescueResult: '已成功救援',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        opration: '1'
      }, {
        alarmNumber: '00001',
        grade: '高',
        alarmType: '火灾',
        country: '印度',
        city: '孟买',
        date: '2016-05-03',
        time: '14:26',
        helper: '张三',
        phoneNumber: '1524688729',
        rescueMan: '李四',
        rescueResult: '已成功救援',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        opration: '1'
      }, {
        alarmNumber: '00001',
        grade: '高',
        alarmType: '火灾',
        country: '印度',
        city: '孟买',
        date: '2016-05-03',
        time: '14:26',
        helper: '张三',
        phoneNumber: '1524688729',
        rescueMan: '李四',
        rescueResult: '已成功救援',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        opration: '1'
      }, {
        alarmNumber: '00001',
        grade: '高',
        alarmType: '火灾',
        country: '印度',
        city: '孟买',
        date: '2016-05-03',
        time: '14:26',
        helper: '张三',
        phoneNumber: '1524688729',
        rescueMan: '李四',
        rescueResult: '已成功救援',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        opration: '1'
      }]
    }
  }
}
</script>

<style lang="scss">
.head-search input {
  height: 36px !important;
}
.head-select {
  display: flex;
  flex-wrap: wrap;
}

.head-select-item {
  display: flex;
  align-items: center;
  border: 1px solid #155eaf;
  border-radius: 4px;
  & > div:first-child{
    font-size: 14px;
    line-height: 14px;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    border-right: 1px solid #155eaf;
    border-radius: 4px 0 0 4px;
    background-color: rgba(7, 18, 52, 0.7);
  }

  & + & {
    margin-left: 30px;
  }

  .el-input > input {
    border: 0;
    height: 36px;
  }
}
</style>
