<script setup lang="ts">
import { nav } from 'router/index'
const title = ref('Hello')

const toAbout = () => {
  nav('about')
}
</script>

<template>
  <status-bar />
  <view
    class="font-momo font-light"
    @tap="toAbout"
  >
    HelloWorld
  </view>
</template>

<style>
</style>
