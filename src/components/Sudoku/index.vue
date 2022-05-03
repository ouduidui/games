<script setup lang="ts">
</script>

<template>
  <view class="grid grid-cols-9 relative">
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
</template>

<style lang="scss" scope>
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
</style>
