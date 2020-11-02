<template>
  <dogear-box :no-scoll="true" class="entry-map" :style="`background-image:url(${mapbg})`">
    <img src="@/assets/map_images/Group_247.png" width="355" style="bottom: 20px;right:20px;">

    <inout-tips :in-num="100" :out-num="18" style="top: 38%;left:17%;" />
    <inout-tips :in-num="35" :out-num="18" style="top: 58%;left:28%;" />
    <inout-tips :in-num="26" :out-num="16" style="top: 52%;left:48%;" />
    <inout-tips :in-num="52" :out-num="12" style="top: 36%;left:70%;" />
    <inout-tips :in-num="10" :out-num="8" style="top: 67.5%;left:79.5%;" />

    <boundry title="入境地区：北美" :src="BoundryImg1" width="28%" top="25%" left="5%" />
    <boundry title="入境地区：格陵兰" :src="BoundryImg2" width="14%" top="16.8%" left="29%" />
    <boundry title="入境地区：亚欧" :src="BoundryImg3" width="47.5%" top="21%" left="44.8%" />
    <boundry title="入境地区：南美" :src="BoundryImg4" width="11.7%" top="53.7%" left="26.7%" />
    <boundry title="入境地区：非洲" :src="BoundryImg5" width="17.4%%" top="43.2%" left="42.8%" />
    <boundry title="入境地区：澳洲" :src="BoundryImg6" width="10%" top="63.6%" left="75.8%" />

    <div class="entry-map__airline-box" style="width: 28%;top: 33.5%;left:49.7%;">
      <img class="entry-map__airline" src="@/assets/map_images/airline1.png">
      <air-plane plane-style="transform:translate(132px, 9px) rotate(-13deg)" />
    </div>

    <div class="entry-map__airline-box" style="width: 24%;top: 34%;left:53.4%;">
      <img class="entry-map__airline" src="@/assets/map_images/airline2.png">
      <air-plane plane-style="transform:translate(132px, 12px) rotate(-20deg)" />
    </div>

    <div class="entry-map__airline-box" style="width: 51%;top: 29.7%;left:26.7%;">
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
    </div>

    <div class="entry-map__point-out" style="top:33.3%;left:77%;" />
    <div class="entry-map__point-out" style="top:41.8%;left:70.6%;" />

    <div class="entry-map__point-in" style="top:32.4%;left:19.2%;" />
    <div class="entry-map__point-in" style="top:36%;left:26.1%;" />
    <div class="entry-map__point-in" style="top:62%;left:34.2%;" />
    <div class="entry-map__point-in" style="top:59.7%;left:53%;" />
    <div class="entry-map__point-in" style="top:50%;left:49.4%;" />
    <div class="entry-map__point-in" style="top:68.7%;left:78.8%;" />

  </dogear-box>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import AirPlane from './AirPlane'
import Boundry from './Boundry'
import InoutTips from './InoutTips'
import mapbg from '@/assets/map_images/map.png'

import BoundryImg1 from '@/assets/map_images/boundry1.png'
import BoundryImg2 from '@/assets/map_images/boundry2.png'
import BoundryImg3 from '@/assets/map_images/boundry3.png'
import BoundryImg4 from '@/assets/map_images/boundry4.png'
import BoundryImg5 from '@/assets/map_images/boundry5.png'
import BoundryImg6 from '@/assets/map_images/boundry6.png'

export default {
  components: { DogearBox, AirPlane, Boundry, InoutTips },
  data() {
    return {
      mapbg,
      BoundryImg1,
      BoundryImg2,
      BoundryImg3,
      BoundryImg4,
      BoundryImg5,
      BoundryImg6
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
