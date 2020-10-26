<template>
  <div class="page-main">
    <div class="head">
      <i class="square" />
      <span style="padding-left:8px">报警日志</span>
    </div>
    <div class="head-select">
      <div>
        <el-input value="国家" style="width:76px;height:36px" readonly />
        <el-select v-model="selectData1" style="width:94px;height;36px" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div style="margin-left:32px">
        <el-input value="城市" style="width:76px;height:36px" readonly />
        <el-select v-model="selectData2" style="width:94px;height;36px" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div style="margin-left:32px">
        <el-input value="日期" style="width:76px;height:36px" readonly />
        <el-select v-model="selectData3" style="width:94px;height;36px" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div style="margin-left:32px">
        <el-input value="报警方式" style="width:104px;height:`36px`" readonly />
        <el-select v-model="selectData5" style="width:94px;height;36px" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div style="margin-left:32px">
        <el-input value="处理结果" style="width:104px;height:36px" readonly />
        <el-select v-model="selectData6" style="width:94px;height;36px" clearable placeholder="请选择">
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
      <el-input v-model="inputData" style="width:60%;margin-right:22px" placeholder="请输入姓名或手机号或用户账号" />
      <el-button class="search-button" type="primary">搜索</el-button>
    </div>
    <div class="head-table">
      <el-table
        :data="tableData"
      >
        <el-table-column prop="alarmNumber" label="报警编号" width="108" />
        <el-table-column
          prop="grade"
          label="报警等级"
          width="82"
        />
        <el-table-column
          prop="alarmType"
          label="报警类型"
          width="100"
        />
        <el-table-column
          prop="country"
          label="国家"
          width="104"
        />
        <el-table-column
          prop="city"
          label="城市"
          width="104"
        />
        <el-table-column
          prop="date"
          label="日期"
          width="148"
        />
        <el-table-column
          prop="time"
          label="时间"
          width="96"
        />
        <el-table-column
          prop="helper"
          label="求救人"
          width="112"
        />
        <el-table-column
          prop="phoneNumber"
          label="求救人手机号"
          width="150"
        />
        <el-table-column
          prop="rescueMan"
          label="救援人员"
          width="112"
        />
        <el-table-column
          prop="rescueResult"
          label="救援结果"
          width="114"
        />
        <el-table-column
          prop="opration"
          label="操作"
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
