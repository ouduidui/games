export const menuButton = typeof uni.getMenuButtonBoundingClientRect === 'function'
  ? uni.getMenuButtonBoundingClientRect()!
  : null
export const systemInfo = uni.getSystemInfoSync()!

export const statusBarHeight = '45px'

export const height = systemInfo && systemInfo.statusBarHeight
  ? `calc(100vh - ${systemInfo.statusBarHeight!}px - ${statusBarHeight})`
  : '100vh'
