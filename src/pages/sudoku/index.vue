<script lang="ts" setup>
import { activeNumBtn, initSudoku, numBtnTapHandle } from './sudoku'
import { timer } from '~/composables/timer'
import { height } from '~/composables/systemInfo'

const {
  numButtons,
  puzzle,
} = initSudoku('easy')
</script>

<template>
  <!-- #ifdef MP-WEIXIN -->
  <status-bar title="Sudoku" />
  <!-- #endif -->
  <view class="main flex flex-col justify-between">
    <view class="opacity-90 pt-7 text-l font-mono text-center">
      {{ timer }}
    </view>

    <sudoku
      v-if="puzzle"
      :puzzle="puzzle!"
      :active-num="activeNumBtn"
    />

    <view class="grid grid-cols-5 num-btn-box">
      <button
        v-for="btn in numButtons"
        :key="btn.num"
        class="relative bg-transparent text-xl flex justify-center items-center m-auto rounded-full transition-colors num-btn"
        :class="{'num-btn-active': activeNumBtn === btn.num}"
        @tap="numBtnTapHandle(btn.num)"
      >
        {{ btn.num }}
        <view class="absolute scale-50 remain">
          {{ btn.remain }}
        </view>
      </button>
      <button class="text-xl bg-transparent flex justify-center items-center m-auto rounded-full num-btn">
        <view class="i-akar-icons-cross" />
      </button>
    </view>

    <view class="tool-btn-box flex flex-row justify-between items-center">
      <view class="text-xl i-akar-icons-arrow-clockwise" />
      <view class="text-xl i-akar-icons-check" />
      <view class="text-xl i-akar-icons-pencil" />
      <view class="text-xl i-akar-icons-arrow-back" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.main {
  height: v-bind(height);
}

$side-padding: 30px;

.num-btn-box {
  $btn-width: 12vw;
  padding: 0 $side-padding ;
  grid-gap: 10px calc((100vw - 2 * #{$side-padding} - 5 * #{$btn-width}) / 4);

  .num-btn {
    width: $btn-width;
    height: $btn-width;
    border: 1px solid $color-grey;
    color: $color-text;
  }

  .num-btn-active {
    background-color: $color-grey;
  }

  .remain {
    bottom: -7px;
  }
}

.tool-btn-box {
  padding: 0 calc(#{$side-padding} + 10px) 20px;
}
</style>
