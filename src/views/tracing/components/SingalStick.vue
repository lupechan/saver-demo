<template>
  <div class="singal-stick">
    <img class="stick-point" src="@/assets/map_images/singal.png" width="20">
    <div class="stick-bound" />
  </div>
</template>

<script>
export default {
  name: 'SinalStick'
}
</script>

<style lang="scss">
.singal-stick {
  position: absolute;

  .stick-point {
    width: 14px;
    height: 17px;
    z-index: 10;
  }

  .stick-bound {
    width: 111px;
    height: 111px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #F9C339;
    opacity: 0.3;
    z-index: 2;
  }
}
</style>
