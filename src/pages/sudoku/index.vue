<script lang="ts" setup>
// #ifdef MP-WEIXIN
import { systemInfo } from '~/composables/systemInfo'
// #endif

let height = '100vh'
// #ifdef MP-WEIXIN
height = `calc(100vh - ${systemInfo.statusBarHeight!}px - 45px)`
// #endif

</script>

<template>
  <!-- #ifdef MP-WEIXIN -->
  <status-bar title="Sudoku" />
  <!-- #endif -->
  <Sudoku :height="height" />
</template>
