<template>
  <div class="label-input">
    <div class="label-input__label" :style="`width: ${labelWidth}`"> {{ label }} </div>
    <div class="label-input__input">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabelInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.label-input {
  display: flex;
  align-items: center;
  border: 1px solid $primaryBorderColor;
  border-radius: 4px;
  &__label {
    text-align: justify;
    text-align-last: justify;
    flex: 1 0 auto;
    font-size: 14px;
    line-height: 14px;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    border-right: 1px solid $primaryBorderColor;
    border-radius: 4px 0 0 4px;
    background-color: rgba(7, 18, 52, 0.7);
    white-space: nowrap;
    // text-overflow: ellipsis;
    // overflow: hidden;
  }

  .el-input > input{
    border: 0;
    height: 36px;
  }
}
</style>
