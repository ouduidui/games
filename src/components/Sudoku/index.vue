<script setup lang="ts">
import type { SudokuNumberWithEmply, SudokuType } from '~/composables/sudoku'

const props = defineProps<{
  startingPuzzle: SudokuType<SudokuNumberWithEmply>
}>()

const ranges = Array(9).fill(0).map((_, i) => i)
</script>

<template>
  <view class="sudoku grid grid-cols-9 relative">
    <view v-for="i in ranges" :key="i">
      <view v-for="j in ranges" :key="j">
        <sudoku-item
          :x="i"
          :y="j"
          :num="startingPuzzle[i][j]"
          :bg="startingPuzzle[i][j] !== 0"
        />
      </view>
    </view>

    <view class="absolute top-0 bottom-0 large-border-col-1" />
    <view class="absolute top-0 bottom-0 large-border-col-2" />
    <view class="absolute left-0 right-0 large-border-row-1" />
    <view class="absolute left-0 right-0 large-border-row-2" />
  </view>
</template>

<style lang="scss" scope>
.sudoku {
  $large-border-width: 2px;

  @mixin largeBorder($side, $idx) {
    background: $color-blue;
    @if $side == 'col' {
      width: $large-border-width;
      margin-left: $large-border-width * -0.5;
      @if $idx == 1 {
        left :calc(100vw / 3);
      }@else if $idx == 2 {
        left :calc(100vw / 3 * 2);
      }
    } @else {
      height: $large-border-width;
      margin-top: $large-border-width * -0.5;
      @if $idx == 1 {
        top :calc(100vw / 3);
      }@else if $idx == 2 {
        top :calc(100vw / 3 * 2);
      }
    }
  };

  .large-border-col-1 {
    @include largeBorder('col', 1);
  }

  .large-border-col-2 {
    @include largeBorder('col', 2);
  }

  .large-border-row-1 {
    @include largeBorder('row', 1);
  }

  .large-border-row-2 {
    @include largeBorder('row', 2);
  }
}
</style>
