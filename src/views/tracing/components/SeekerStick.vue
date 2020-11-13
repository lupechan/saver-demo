<template>
  <div class="seeker-stick">
    <img class="stick-icon" src="@/assets/map_images/stick1.png" width="20">
    <div class="stick-point" />
    <div class="stick-bound" />
    <div class="stick-car" />
    <img class="stick-airplane" src="@/assets/map_images/airplane.png" alt="">
    <img class="stick-boat" src="@/assets/map_images/boat.png" alt="">
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
    top: 50%;
    left: 50%;
    margin-left: -10px;
    margin-top: -30px;
    animation: float 1s ease-in-out infinite alternate;
    z-index: 10;
  }

  .stick-point {
    width: 14px;
    height: 14px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #C347BD;
    border-radius: 50%;
    z-index: 9;
  }

  .stick-bound,
  .stick-wave {
    width: 150px;
    height: 150px;
    margin-left: -75px;
    margin-top: -75px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    background: #193AEC;
    opacity: 0.2;
    z-index: 2;
  }

  .stick-wave {
    animation: wave 2s ease-in-out 1s infinite;
  }

  .stick-car {
    width: 472px;
    height: 472px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #7F47B5;
     opacity: 0.2;
     z-index: 1;
  }

  .stick-boat {
    position: absolute;
    right: 2%;
    bottom: 6%;
    width: 271px;
    transform: rotate(2deg);
  }

  .stick-airplane {
    position: absolute;
    left: 40%;
    top: 10%;
    width: 121px;
    height: 83px;
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
