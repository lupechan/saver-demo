<template>
  <div class="group-item">
    <el-radio class="group-item" :label="data.id">
      <div class="group-item__box">
        <div class="group-item__avatar">
          <img src="@/assets/map_images/1.png" alt="Avatar" width="100%">
        </div>
        <div class="group-item__info">
          <div class="group-item__name">长城三组</div>
          <div class="group-item__descr">
            <span>队长：张三</span>
            <span>人数：5人</span>
          </div>
          <div>与救助人员距离：20km</div>
          <div>最新定位时间：2020.11.01 12:36</div>
        </div>

        <div class="group-item__status">
          可执行
        </div>
      </div>
    </el-radio>
  </div>
</template>

<script>
export default {
  name: 'GroupItem',
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      // checked: true
    }
  }
}
</script>

<style lang="scss">
.group-item {
  display: flex;
  align-items: center;

  & + & {
    margin-top: 32px;
  }
  &__box {
    position: relative;
    display: flex;
    padding: 28px 20px;
    margin-left: 12px;
    width: 340px;
    height: 170px;
    background: rgba(7, 18, 52, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #FFFFFF77 !important;
    // opacity: .3;
    border-radius: 4px;
    overflow: hidden;
  }

  &.is-checked {
    .group-item__box {
      border-color: #155EAF;
      color: white !important;
      box-shadow: inset 2px 2px 20px rgba(52, 3, 191, 0.8);
    }
  }

  &__info {
    font-size: 14px;
    line-height: 14px;
    margin-left: 14px;
    div + div {
      margin-top: 18px;
    }
  }

  &__avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #FFFFFF 50%;
    & > img {
      border-radius: 8px;
    }
  }

  &__descr {
    margin: 11px 0 30px !important;
    font-size: 12px;
    line-height: 12px;
    span + span {
      margin-left: 26px;
    }
  }

  &__status {
    font-size: 12px;
    line-height: 14px;
    position: absolute;
    right: 20px;
    top: 28px;
    padding: 5px 10px;
    background: #2762FC;
    border-radius: 16px;
    color: white;
  }
}
</style>
