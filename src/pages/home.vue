<script setup lang="ts">
type GamesCategory = {
  id: string
  label: { cn: string; en: string }
  routeName: string
}[]

const games: GamesCategory = [
  { id: 'sudoku', label: { cn: '数独', en: 'Sudoku' }, routeName: 'Sudoku' },
]

const router = useRouter()

const pageNavHandle = (routeName: string) => router.push({ name: routeName })
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
    <p
      v-for="game in games" :key="game.id"
      cursor-pointer
      mb-5
      transition-colors
      text="hover:gray-800 dark:hover:gray-50"
      @click="pageNavHandle(game.routeName)"
    >
      {{ game.label.en }} - {{ game.label.cn }}
    </p>
  </div>
</template>

<style scope></style>
