<template>
  <dogear-box :no-scoll="true" class="entry-map" :style="`background-image:url(${mapbg})`" @mousemove.native="handleMouseMove">
    <img src="@/assets/map_images/Group_247.png" width="355" style="bottom: 20px;right:20px;">

    <inout-tips :in-num="100" :out-num="18" style="top: 38%;left:17%;" />
    <inout-tips :in-num="35" :out-num="18" style="top: 28%;left:28%;" />
    <inout-tips :in-num="26" :out-num="16" style="top: 32%;left:68%;" />
    <inout-tips :in-num="52" :out-num="12" style="top: 67.5%;left:75.5%" />
    <!-- <inout-tips :in-num="10" :out-num="8" style="top: 67.5%;left:79.5%;" /> -->

    <boundry :title="boundry('加拿大')" :src="BoundryImg1" width="200.59px" top="169px" left="260px" />
    <boundry :title="boundry('美国')" :src="BoundryImg2" width="180px" top="145px" left="170px" />
    <boundry :title="boundry('中国')" :src="BoundryImg3" width="202.98px" top="130px" left="718px" />
    <boundry :title="boundry('俄罗斯')" :src="BoundryImg4" width="274px" top="100px" left="509.74px" />
    <!-- <boundry title="当前经纬度：印度（45°N，76°W）" :src="BoundryImg5" width="6%" top="43.2%" left="82.4%" /> -->

    <div class="entry-map__airline-box" style="width: 60%;top: 33.5%;left:20%;">
      <img class="entry-map__airline" src="@/assets/map_images/airline.png">
      <air-plane plane-style="transform:translate(132px, 9px) rotate(-13deg)" />
    </div>

    <div v-show="!showAirLine" class="entry-map__airline-box" style="width: 595px;top: 34%;right:250px;">
      <img class="entry-map__airline" src="@/assets/map_images/airplane1.png">
      <air-plane plane-style="transform:translate(132px, 12px) rotate(-20deg)" />
    </div>

    <!-- <div class="entry-map__airline-box" style="width: 51%;top: 29.7%;left:26.7%;">
      <img class="entry-map__airline" src="@/assets/map_images/airline3.png">
      <air-plane plane-style="transform:translate(272px, -8px) rotate(10deg)" />
    </div>

   <div class="entry-map__airline-box" style="width: 43%;top: 33.3%;left:34.5%;">
      <img class="entry-map__airline" src="@/assets/map_images/airline4.png">
      <air-plane plane-style="transform:translate(132px, 53px) rotate(-24deg)" />
    </div>

    <div class="entry-map__airline-box" style="width: 5%;top: 34%;left:74%;">
      <img class="entry-map__airline" src="@/assets/map_images/airline5.png">
      <air-plane plane-style="transform:translate(-7px, 109px) rotate(-83deg)" />
    </div>

    <div class="entry-map__airline-box" style="width: 51.4%;top: 31.4%;left:19.5%;">
      <img class="entry-map__airline" src="@/assets/map_images/airline6.png">
      <air-plane plane-style="transform:translate(250px, 41px) rotate(17deg)" />
    </div> -->

    <!-- <div class="entry-map__point-out" style="top:33.3%;left:77%;" />
    <div class="entry-map__point-out" style="top:41.8%;left:70.6%;" />

    <div class="entry-map__point-in" style="top:32.4%;left:19.2%;" />
    <div class="entry-map__point-in" style="top:36%;left:26.1%;" />
    <div class="entry-map__point-in" style="top:62%;left:34.2%;" />
    <div class="entry-map__point-in" style="top:59.7%;left:53%;" />
    <div class="entry-map__point-in" style="top:50%;left:49.4%;" />
    <div class="entry-map__point-in" style="top:68.7%;left:78.8%;" /> -->

  </dogear-box>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import AirPlane from './AirPlane'
import Boundry from './Boundry'
import InoutTips from './InoutTips'
import mapbg from '@/assets/map_images/map.png'

import BoundryImg1 from '@/assets/map_images/jianada.png'
import BoundryImg2 from '@/assets/map_images/meiguo.png'
import BoundryImg3 from '@/assets/map_images/zhongguo.png'
import BoundryImg4 from '@/assets/map_images/eluosi.png'
import BoundryImg5 from '@/assets/map_images/yindu.png'

export default {
  components: { DogearBox, AirPlane, Boundry, InoutTips },
  props: {
    showAirLine: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mapbg,
      BoundryImg1,
      BoundryImg2,
      BoundryImg3,
      BoundryImg4,
      BoundryImg5,
      nlData: []
    }
  },
  methods: {
    handleMouseMove() {
      this.nlData = [Math.floor(Math.random() * 180), Math.floor(Math.random() * 90)]
    },

    boundry(area) {
      return `当前经纬度：${area}（${this.nlData[0]}°N，${this.nlData[1]}°W）`
    }
  }
}
</script>

<style lang="scss">
@keyframes ani {
  0% { transform: scale(1);opacity: 0;}
  30% { opacity: .5; }
  100% { transform: scale(0.5);opacity: 0.2;}
}
.entry-map {
  position: relative;
  flex: auto;
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50% 50%;

  img {
    position: absolute;
  }

  &__airline-box{
    position: absolute;
  }

  &__airline {
    width: 100%;
    pointer-events: none;
  }

  &__point-out,
  &__point-in {
    position: absolute;
    border-radius: 50%;

    &::before, &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background-color: inherit;
      border-radius: 50%;
      opacity: 0;
    }

    &::before {
      animation: ani 3s linear 1.5s infinite;
    }

    &::after {
      animation: ani 3s linear infinite;
    }
  }

  &__point-out {
    width: 12px;
    height: 12px;
    background: #24CBFF;
  }

  &__point-in {
    width: 8px;
    height: 8px;
    background: #FF2482;
  }
}
</style>
