<template>
  <div class="entry-exit">
    <div class="entry-exit__block">
      <dogear-box class="entry-exit__search" title="搜索">
        <search-box @search="handleSearch" />
      </dogear-box>

      <entry-map class="entry-exit__map" />
    </div>

    <dogear-box v-show="showResultBox" title="搜索结果" class="entry-exit__result" :no-scoll="true">
      <template v-slot:header-append>
        <i class="el-dialog__close el-icon el-icon-close entry-exit__result-close" @click="handleCloseResult" />
      </template>
      <search-result-box />
    </dogear-box>
  </div>
</template>

<script>
import DogearBox from '@/components/DogearBox'
import SearchBox from './components/SearchBox'
import SearchResultBox from './components/SearchResultBox'
import EntryMap from './components/EntryMap'

export default {
  components: { DogearBox, SearchBox, SearchResultBox, EntryMap },
  data() {
    return {
      showResultBox: false
    }
  },
  methods: {
    handleSearch() {
      this.showResultBox = true
    },
    handleCloseResult() {
      this.showResultBox = false
    }
  }
}
</script>

<style lang="scss">
.entry-exit {
  position: relative;
  // overflow: auto;

  &__block {
    display: flex;
    width: 100%;
  }

  &__search {
    flex: 0 0 278px;
  }

  &__map {
    margin-left: 30px;
    height: 100%;
    min-height: 775px;
  }

  &__result {
    position: absolute;
    right: 22px;
    top: 40px;
    width: 280px;
    height: 356px;
  }

  &__result-close {
    position: absolute;
    right: 50px;
    top: 0;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>
