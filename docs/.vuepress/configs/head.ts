import type { HeadConfig } from '@vuepress/core'

// VuePress的站点配置项
// 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
// https://v2.vuepress.vuejs.org/zh/reference/config.html#head
export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      href: `/images/BFUI-logo.png`,
    },
  ],
]