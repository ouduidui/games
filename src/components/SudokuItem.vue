<script setup lang="ts">

</script>

<template>
  <div>
    <div
      text-xl
      bg="gray-500/50"
      w-8
      leading-8
      rounded-full
      m-auto
    >
      3
    </div>
    <div
      v-if="false"
      grid
      grid-cols-3
      text-xs
      leading-none
      w-full
      h-full
    >
      <div
        v-for="i in 9"
        :key="i"
        m-auto
        text="gray-500/50 dark:gray-500"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style scope></style>
