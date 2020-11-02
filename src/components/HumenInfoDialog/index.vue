<template>
  <el-dialog :visible.sync="isVisible" v-bind.sync="$attrs" width="860px">
    <div class="humeninfo">
      <div class="humeninfo__row">
        <div class="humeninfo-avatar">
          <img src="@/assets/map_images/1.png" alt="Avatar" width="100%">
        </div>
        <div class="humeninfo-list">
          <div class="humeninfo-list__title">个人信息</div>
          <div class="humeninfo-list__body">
            <div><span>姓名：</span><span>{{ data.username }}</span></div>
            <div><span>性别：</span><span>男</span></div>
            <div><span>手机号：</span><span>+86 158 8888 8888</span></div>
            <div><span>出生日期：</span><span>1976.01.01</span></div>
            <div><span>证件号：</span><span>43070319761012396（身份证）</span></div>
            <div><span>家庭住址：</span><span>Lower Parel,Maharashtra 印度</span></div>
            <div><span>求救时间：</span><span>2020.11.01 12:36</span></div>
            <div><span>最新定位时间：</span><span>2020.11.01 12:36</span></div>
            <div><span>最新定位：</span><span>纽约（23.1234.33.1234）</span></div>
          </div>
        </div>
      </div>

      <div class="humeninfo__row">
        <div class="humeninfo-list">
          <div class="humeninfo-list__title">医疗信息</div>
          <div class="humeninfo-list__body">
            <div><span>血型：</span><span>A</span></div>
            <div><span>既往病史：</span><span>无</span></div>
            <div><span>过敏原：</span><span>无</span></div>
            <div><span>保险账号：</span><span>B88399332</span></div>
            <div><span>DNA：</span><span>CNKI:SUN:GDXH.0.1976-12-008</span></div>
          </div>
        </div>
        <div class="humeninfo-list">
          <div class="humeninfo-list__title">轨迹信息</div>
          <div class="humeninfo-list__body">
            <div><span>出境口岸：</span><span>首都国际机场</span></div>
            <div><span>出境时间：</span><span>2020.11.01 12:36</span></div>
            <div><span>入境国家：</span><span>印度</span></div>
            <div><span>航班：</span><span>国航CA12778</span></div>
            <div><span>机场：</span><span>纽约机场</span></div>
            <div><span>航班时间：</span><span>2020.11.01 12:36</span></div>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'HumenInfoDialog',
  props: {
    visible: Boolean,
    data: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    }
  }
}
</script>

<style lang="scss">
.humeninfo {
  padding: 10px 10px 0 10px;
  display: flex;
  &__row {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 58px;
  }
}

.humeninfo-avatar {
  width: 80px;
  height: 80px;
  margin-bottom: 50px;
  margin-top: 10px;
  & > img {
    border-radius: 50%;
  }
}
.humeninfo-list {
  color: white;
  margin-bottom: 36px;
  &__title {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 18px;
    border-bottom: 1px solid #fff;
    margin-bottom: 20px;
  }

  &__body {
    div {
      margin-top: 20px;
      display: flex;

      span:first-child {
        white-space: nowrap;
        opacity: .5;
      }
      span:last-child {
        margin-left: 10px;
      }
    }
  }

}
</style>
