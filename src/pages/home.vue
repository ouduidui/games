<script setup lang="ts">
type GamesCategory = {
  id: string
  label: { cn: string; en: string }
  path: string
}[]

const games: GamesCategory = [
  { id: 'sudoku', label: { cn: '数独', en: 'Sudoku' }, path: '' },
]
</script>

<template>
  <div
    font="mono"
    text="xl center gray-500 dark:gray-400"
    class="flex"
    flex-col
    justify-center
    items-center
    min-h-full
  >
    <div
      v-for="game in games" :key="game.id"
      cursor-pointer
      mb-5
      text="hover:gray-800 dark:hover:gray-50"
    >
      {{ game.label.en }} - {{ game.label.cn }}
    </div>
  </div>
</template>

<style scope></style>
