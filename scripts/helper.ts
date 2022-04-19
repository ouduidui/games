import type { Color } from 'chalk'
import chalk from 'chalk'

/**
 * data
 */

export const PLATFORMS: {
  id: string
  alias: string
  command: string
  commandArgs: string[]
}[] = [
  {
    id: 'h5',
    alias: 'h5',
    command: 'uni',
    commandArgs: [],
  },
  {
    id: 'h5:ssr',
    alias: 'ssr',
    command: 'uni',
    commandArgs: ['--ssr'],
  },
  {
    id: 'mp-weixin',
    alias: 'wx',
    command: 'uni',
    commandArgs: ['-p', 'mp-weixin'],
  },
  {
    id: 'app',
    alias: 'app',
    command: 'uni',
    commandArgs: ['-p', 'app'],
  },
  {
    id: 'custom',
    alias: 'cs',
    command: 'uni',
    commandArgs: ['-p'],
  },
  {
    id: 'mp-alipay',
    alias: 'ali',
    command: 'uni',
    commandArgs: ['-p', 'mp-alipay'],
  },
  {
    id: 'mp-baidu',
    alias: 'bd',
    command: 'uni',
    commandArgs: ['-p', 'mp-baidu'],
  },
  {
    id: 'mp-kuaishou',
    alias: 'ks',
    command: 'uni',
    commandArgs: ['-p', 'mp-kuaishou'],
  },
  {
    id: 'mp-lark',
    alias: 'fs',
    command: 'uni',
    commandArgs: ['-p', 'mp-lark'],
  },
  {
    id: 'mp-qq',
    alias: 'qq',
    command: 'uni',
    commandArgs: ['-p', 'mp-qq'],
  },
  {
    id: 'mp-toutiao',
    alias: 'tt',
    command: 'uni',
    commandArgs: ['-p', 'mp-toutiao'],
  },
  {
    id: 'mp-toutiao',
    alias: 'tt',
    command: 'uni',
    commandArgs: ['-p', 'mp-toutiao'],
  },
  {
    id: 'quickapp-webview',
    alias: 'qa',
    command: 'uni',
    commandArgs: ['-p', 'quickapp-webview'],
  },
  {
    id: 'quickapp-webview-huawei',
    alias: 'qa-hw',
    command: 'uni',
    commandArgs: ['-p', 'quickapp-webview-huawei'],
  },
  {
    id: 'quickapp-webview-union',
    alias: 'qa-un',
    command: 'uni',
    commandArgs: ['-p', 'quickapp-webview-union'],
  },
]

/**
 * log
 */

// eslint-disable-next-line no-console
export const log = (msg: string, color: Color = 'green') => console.log(chalk[color](msg))
