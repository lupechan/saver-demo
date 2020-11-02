<template>
  <div class="member-item">
    <div style="display: flex;">
      <img class="member-item__avatar" :src="data.avatar" alt="" width="40">
      <div class="member-item__info">
        <div>{{ data.name }}（{{ data.role }}）</div>
        <div>手机号：{{ data.tel }}</div>
      </div>
    </div>

    <div style="margin-top:16px;opacity:.6;">
      <div style="white-space:nowrap">最新定位时间：{{ data.posTime }}</div>
      <div style="margin-top: 12px;white-space:nowrap">技能：{{ data.skills }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.member-item {
  display: inline-block;
  width: 260px;
  background: rgba(7, 18, 52, 0.7);
  border: 1px solid #2762FC;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 23px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 14px;

  &__avatar {
    height: 40px;
    flex: 0 0 40px;
    border-radius: 50%;
    margin-right: 14px;
  }

  &__info {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    white-space: nowrap;
  }
}
</style>
