<script setup lang="ts"></script>

<template>
  <div
    font="mono"
    text="center gray-900 dark:gray-400"
  >
    <div>
      <div
        v-for="i in 9"
        :key="'row'+i"
        flex="~ row"
        justify-center
        item-center
      >
        <div
          v-for="j in 9"
          :key="'row'+j"
          flex="~ col"
          justify-center
          item-center
          w-12
          h-12
          :class="{
            'border-r-2': j === 9,
            'border-b-2': i === 9,
            'border-t-2': i % 3 === 1,
            'border-t-1': i % 3 !== 1,
            'border-l-2': j % 3 === 1,
            'border-l-1': j % 3 !== 1,
          }"
        >
          <sudoku-item />
        </div>
      </div>
    </div>
  </div>
</template>

<style scope></style>
