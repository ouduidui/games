<script setup lang="ts">
import type { SudokuNumber } from '~/composables/sudoku'
import { NUMS } from '~/composables/sudoku'

defineProps<{
  notes: SudokuNumber[]
}>()
</script>

<template>
  <view class="absolute z-1 inset-0 grid grid-cols-3">
    <view
      v-for="i in NUMS"
      v-show="notes?.includes(i)"
      :key="i"
      class="font-xs scale-50 tip-num text-center"
    >
      {{ i }}
    </view>
  </view>
</template>

<style lang="scss" scope>
$side-padding: 2px;
.tip-box {
  padding: $side-padding;
}

$tip-num-size: calc((100vw / 9 - 2 * #{$side-padding}) / 3);

.tip-num {
  width: $tip-num-size;
  height: $tip-num-size;
  line-height: $tip-num-size;
}

</style>
