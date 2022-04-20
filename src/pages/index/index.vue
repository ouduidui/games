<script setup lang="ts">
import type { GameType } from './types'
import { nav } from '~/router'

const activeIndex = ref(0)

const games: GameType[] = [
  {
    id: 'sudoku',
    name: 'Sudoku',
    iconClass: 'i-arcticons-opensudoku',
    gradients: ['#ff7e5f', '#feb47b'],
    routeKey: 'sudoku',
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    iconClass: 'i-arcticons-minesweeper',
    gradients: ['#4ecdc4', '#556270'],
  },
  {
    id: 'tetris',
    name: 'Tetris',
    iconClass: 'i-arcticons-tetris',
    gradients: ['#f85032', '#e73827'],
  },
  {
    id: '2048',
    name: '2048',
    iconClass: 'i-arcticons-a2048',
    gradients: ['#56ab2f', '#a8e063'],
  },
]

const changeGames = ({ detail: { current } }: { detail: { current: number } }) => activeIndex.value = current

const gameTapHandle = (game: GameType) => {
  const routeKey = game.routeKey
  if (!routeKey) {
    uni.showToast({
      icon: 'none',
      title: 'The game is still in development...',
    })
  }
  else {
    nav(routeKey!)
  }
}
</script>

<template>
  <!-- #ifdef MP-WEIXIN -->
  <status-bar />
  <!-- #endif -->
  <view class="page fixed left-0 right-0">
    <!-- Swiper -->
    <swiper
      class="swiper"
      circular
      :current="activeIndex"
      previous-margin="50px"
      next-margin="50px"
      @change="changeGames"
    >
      <swiper-item
        v-for="game in games"
        :key="game.id"
        @tap="gameTapHandle(game)"
      >
        <view
          class="game rounded-3xl h-full overflow-hidden mx-5 relative"
          :style="{background: `linear-gradient(${game.gradients.join(',')})`}"
        >
          <view
            class="absolute icon rotate-30"
            :class="game.iconClass"
          />
          <view class="name px-3 pb-5 break-all text-3xl font-light">
            {{ game.name }}
          </view>
        </view>
      </swiper-item>
    </swiper>

    <!-- Swiper Indicator -->
    <view class="mt-7 flex items-center justify-center">
      <view
        v-for="(game, i) in games"
        :key="game.id"
        class="indicator w-4 h-4 rounded-full bg-gray-300 transition-all duration-300 ease-in-out"
        :class="i === activeIndex ? 'opacity-100' : 'opacity-20 scale-70'"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.page {
  top: 50%;
  transform: translateY(-50%);

}

.swiper {
  min-height: 90vw;
}
.game {

  .icon {
    width: 65vw;
    height: 65vw;
  }

  .name {
    padding-top: 72vw;
  }
}

.indicator {
  margin: 0px 5px;
}
</style>
