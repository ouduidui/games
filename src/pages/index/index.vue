<script setup lang="ts">
import type { GameType } from './games'
import { games } from './games'
import { nav } from '~/router'

const activeIndex = ref(0)

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
  <status-bar />
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
