<template>
  <div class="seeker-stick">
    <img class="stick-icon" src="@/assets/map_images/stick1.png" width="20">
    <div class="stick-point" />
    <div class="stick-bound" />
    <div class="stick-wave" />
    <!-- <div class="stick-icon" /> -->
  </div>
</template>

<script>
export default {
  name: 'SeekerStick'
}
</script>

<style lang="scss">

.seeker-stick {
  position: absolute;
  overflow: visible;

  .stick-icon {
    width: 20px;
    height: 23px;
    position: absolute;
    left: -3px;
    bottom: 10px;
    animation: float 1s ease-in-out infinite alternate;
    z-index: 10;
  }

  .stick-point {
    width: 14px;
    height: 14px;
    position: relative;
    top: 0;
    left: 0;
    background: #C347BD;
    border-radius: 50%;
    z-index: 9;
  }

  .stick-bound, .stick-wave {
    width: 268px;
    height: 268px;
    border-radius: 50%;
    position: absolute;
    left: -127px;
    top: -127px;
    // transform: translate(-50%, -50%);
    background: #193AEC;;
    opacity: 0.2;
    z-index: 1;
  }

  .stick-wave {
    transform: scale(0);
    animation: wave 2s ease-in-out 1s infinite;
  }

  // .stick-icon {
  //   position: relative;
  //   width: 20px;
  //   height: 20px;
  //   background: linear-gradient(0deg, #6167F7 -6.27%, #F436A0 120.24%);
  //   box-sizing: border-box;
  //   border-radius: 50%;
  //   overflow: visible;
  //   &::after {
  //     content: '';
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     width: 100%;
  //     height: 100%;
  //     border: 1px solid rgba(255, 255, 255, 0.3);
  //     border-radius: 50%;
  //     z-index: 1;
  //   }
  // }
}
</style>
