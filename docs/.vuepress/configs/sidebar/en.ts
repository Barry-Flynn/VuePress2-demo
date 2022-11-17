import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en/guide/': [
    {
      text: 'Guide',
      children: [
        '/en/guide/',
        '/en/guide/getting-started',
        '/en/guide/faq',
        '/en/guide/changelog',
        '/en/guide/i18n',
        '/en/guide/contributing',
      ],
    },
  ],
}