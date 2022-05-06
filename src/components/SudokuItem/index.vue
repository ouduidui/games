<script setup lang="ts">
import type { SudokuNumber } from '~/composables/sudoku'

const props = defineProps<{
  x: number
  y: number
  num?: number
  bg?: boolean
  activeBg?: boolean
  tips?: SudokuNumber[]
}>()
</script>

<template>
  <view
    class="sudoku-item font-sans text-xl text-center"
    :class="{
      'small-border-right': !(x === 2 || x === 5 || x === 8),
      'small-border-bottom': !(y === 2 || y === 5 || y === 8),
    }"
  >
    <view
      v-show="num"
      class="relative z-1"
    >
      {{ num }}
    </view>

    <!-- <sudoku-tip-box /> -->
    <view
      v-show="bg"
      class="absolute rounded-full circle-bg"
      :class="{
        'circle-active-bg': activeBg,
      }"
    />
  </view>
</template>

<style lang="scss" scope>
$sudoku-item-size: calc(100vw / 9);

.sudoku-item {
  width: $sudoku-item-size;
  height: $sudoku-item-size;
  line-height: $sudoku-item-size;
  position: relative;
}

$small-border-margin: 10px;
$small-border-width: 1px;
$small-border-height: calc(#{$sudoku-item-size} - #{$small-border-margin});

@mixin smallBorder($side) {
  content: '';
  position: absolute;
  background: $color-grey;

  @if $side == 'right' {
    width: $small-border-width;
    height: $small-border-height;
    right: $small-border-width * -0.5;
    top: 50%;
    transform: translateY(-50%);
  }@else if  $side == 'bottom' {
    height: $small-border-width;
    width: $small-border-height;
    bottom: $small-border-width * -0.5;
    left: 50%;
    transform: translateX(-50%);
  }
};

.small-border-right::before {
  @include smallBorder("right");
}

.small-border-bottom::after {
  @include smallBorder("bottom");
}

.circle-bg {
  $margin: 3px;
  background: $color-grey;
  opacity: .5;
  top: $margin;
  left: $margin;
  bottom: $margin;
  right: $margin;
}

.circle-active-bg {
  background: $color-blue;
}
</style>
