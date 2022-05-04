import { computed, ref } from 'vue'

const getTime = (): number => new Date().getTime()

let start = getTime()
const end = ref(start)
const format = (time: number): string => {
  if (time < 10) return `0${time}`
  else return `${time}`
}

const _timer = computed(() => end.value - start)
export const timer = computed(() => {
  const timeStamp = (_timer.value / 1000) >> 0
  const secends = timeStamp % 60
  const minutes = ((timeStamp / 60) >> 0) % 60
  const hours = ((timeStamp / 3600) >> 0) % 24
  const days = (timeStamp / 86400) >> 0
  if (days)
    return `${days}:${format(hours)}:${format(minutes)}:${format(secends)}`
  else if (hours)
    return `${format(hours)}:${format(minutes)}:${format(secends)}`
  else
    return `${format(minutes)}:${format(secends)}`
})

const DELAY = 800
let intervalId: number | undefined
const updateEndTime = () =>
  intervalId = setInterval(() => end.value = getTime(), DELAY)

export const resetTimer = () => {
  end.value = (start = getTime())
}

export const startTimer = () => {
  resetTimer()
  updateEndTime()
}

export const stopTimer = () => {
  intervalId && clearInterval(intervalId)
}

export const continueTimer = (lastTime = _timer.value) => {
  stopTimer()
  start = getTime() - lastTime
  updateEndTime()
}
