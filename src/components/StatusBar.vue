<script setup lang="ts">
// #ifdef MP-WEIXIN
const filterBoxTop = ref(`${uni.getSystemInfoSync().statusBarHeight + 45}px`)
// #endif
</script>

<template>
  <!-- #ifdef MP-WEIXIN -->
  <view class="status-bar" />
  <!-- #endif -->
</template>

<style scope>
/* #ifdef MP-WEIXIN */
.status-bar {
  height: v-bind(filterBoxTop);
  width: 100%
}
/* #endif */
</style>
