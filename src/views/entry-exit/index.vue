<template>
  <div class="entry-exit">
    <dogear-box class="entry-exit__search" title="搜索">
      <search-box />
    </dogear-box>

    <dogear-box :no-scoll="true" class="entry-exit__map" :style="`background-image:url(${mapbg})`">
      <img :src="tipsImg" width="355" style="position: absolute;bottom: 20px;right:20px;">

      <dogear-box v-show="showResultBox" title="搜索结果" class="entry-exit__result" :no-scoll="true">
        <search-result-box />
      </dogear-box>
    </dogear-box>
  </div>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import SearchBox from './components/SearchBox'
import SearchResultBox from './components/SearchResultBox'

import mapbg from '@/assets/map_images/airline.png'
import tipsImg from '@/assets/map_images/Group_247.png'

export default {
  components: { DogearBox, SearchBox, SearchResultBox },
  data() {
    return {
      showResultBox: true,
      mapbg,
      tipsImg
    }
  }
}
</script>

<style lang="scss">
.entry-exit {
  display: flex;
  position: relative;
  width: 100%;
  overflow: auto;

  &__search {
    flex: 0 0 278px;
  }

  &__map {
    position: relative;
    flex: auto;
    margin-left: 30px;
    height: 100%;
    min-height: 775px;
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: 50% 50%;
  }

  &__result {
    position: absolute;
    right: 22px;
    top: 40px;
    width: 280px;
    height: 356px;
  }
}
</style>
