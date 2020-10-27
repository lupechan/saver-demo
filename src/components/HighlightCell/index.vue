<template>
  <div class="highlight-cell">
    <div class="dotban" />
    <div class="dotban" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HighlightCell',
  props: {
    // show
  }
}
</script>

<style lang="scss">
$dotWidth: 11px;
$dotHeight: 11px;
$dotBorderWidth: 3px;
$dotColor: #3ECED0;

$pix: -2.3px;

@mixin dot {
  content: ' ';
  display: block;
  position: absolute;
  width: $dotWidth;
  height: $dotHeight;
  border-width: $dotBorderWidth;
  border-color: $dotColor;
}

.highlight-cell {
  position: relative;
  border: 1px solid #113040;
  background: rgba(5, 5, 15, 0.4);
  padding: 10px;
  overflow: visible;
  & > .dotban {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & > .dotban:nth-child(1) {
    &::before {
      @include dot;
      top: $pix;
      left: $pix;
      border-style: solid none none solid;
    }

    &::after {
      @include dot;
      top: $pix;
      right: $pix;
      border-style: solid solid none none;
    }
  }

  & > div:nth-child(2) {
    &::before {
      @include dot;
      bottom: $pix;
      left: $pix;
      border-style: none none solid solid;
    }

    &::after {
      @include dot;
      bottom: $pix;
      right: $pix;
      border-style: none solid solid none;
    }
  }
}
</style>
