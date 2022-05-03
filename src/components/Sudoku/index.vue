<script setup lang="ts">
const props = defineProps<{
  height: string
}>()

const numButtons = reactive<{ num: number; remain: number }[]>(
  Array(9).fill(0).map((_, i) => ({ num: i + 1, remain: 9 })),
)
</script>

<template>
  <view class="flex flex-col justify-between page">
    <view class="opacity-90 pt-7 text-l font-mono text-center">
      1:32:46
    </view>

    <view class="sudoku grid grid-cols-9 relative">
      <view v-for="i in 9" :key="i">
        <view v-for="j in 9" :key="j">
          <sudokuItem :x="i" :y="j" />
        </view>
      </view>

      <view class="absolute top-0 bottom-0 large-border-col-1" />
      <view class="absolute top-0 bottom-0 large-border-col-2" />
      <view class="absolute left-0 right-0 large-border-row-1" />
      <view class="absolute left-0 right-0 large-border-row-2" />
    </view>

    <view class="grid grid-cols-5 num-btn-box">
      <button
        v-for="btn in numButtons"
        :key="btn.num"
        class="relative bg-transparent text-xl flex justify-center items-center m-auto rounded-full num-btn"
      >
        {{ btn.num }}
        <view class="absolute scale-50 remain">
          {{ btn.remain }}
        </view>
      </button>
      <button class="text-xl bg-transparent flex justify-center items-center m-auto rounded-full num-btn ">
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

<style lang="scss" scope>
.page {
  height: v-bind(height);
}

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

  .remain {
    bottom: -7px;
  }
}

.tool-btn-box {
  padding: 0 calc(#{$side-padding} + 10px) 20px;
}
</style>
