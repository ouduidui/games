<script setup lang="ts">
import { ref } from 'vue'

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
.status-bar {
  height: v-bind(filterBoxTop);
  width: 100%
}
</style>
