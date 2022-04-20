<script setup lang="ts">
import { back, redirect } from '~/router'
import { menuButton, systemInfo } from '~/composables/systemInfo'
const filterBoxTop = `${systemInfo.statusBarHeight!}px`
const menuButtonLeft = `calc(100vw - ${menuButton.left}px + 10px)`

const props = defineProps<{
  title?: string
}>()

const currentPages = getCurrentPages()
const isShowBackIcon = currentPages.length > 1
const isShowHomeIcon = !isShowBackIcon && currentPages[0].route !== 'pages/index/index'
</script>

<template>
  <view class="status-bar flex items-center">
    <view
      v-if="isShowBackIcon"
      class="px-3"
      @tap="back()"
    >
      <view class="i-iconoir-nav-arrow-left w-6 h-6" />
    </view>
    <view
      v-if="isShowHomeIcon"
      class="px-3"
      @tap="redirect('index')"
    >
      <view class="i-iconoir-home w-6 h-6" />
    </view>
    <view
      v-if="title"
      class="title truncate"
    >
      {{ title }}
    </view>
  </view>
</template>

<style lang="scss" scope>
.status-bar {
  margin-top: v-bind(filterBoxTop);
  margin-right: v-bind(menuButtonLeft);
  height: 45px;
}

.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
