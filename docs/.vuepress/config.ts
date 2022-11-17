// 配置文件
// https://v2.vuepress.vuejs.org/guide/configuration.html#config-file
// 配置项参考：https://v2.vuepress.vuejs.org/zh/reference/config.html


// 站点配置相关引入
import { defineUserConfig } from 'vuepress'
// 主题配置相关引入
import { defaultTheme } from 'vuepress'
import {
  head,
  navbarZh,
  navbarEn,
  sidebarZh,
  sidebarEn,
} from './configs/index.js'
// 插件配置相关引入
import { searchPlugin } from '@vuepress/plugin-search'

// 前往VuePress2.x官网查看所有配置项
// https://v2.vuepress.vuejs.org/zh/reference/config.html
export default defineUserConfig({
  //【站点配置】
  base: '/BFUI/', // 部署站点的基础路径
  lang: 'zh-CN', // 站点的语言
  title: 'BFUI', // 站点的标题
  description: '一个正在成长的前端开发工具箱', //站点的描述
  head: head, // 在最终渲染出的 HTML 的 <head> 标签内加入的额外标签
  locales: {
    // 多语言支持的各个语言 locales
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // 但是为了使多语言文档并列起来结构清晰，我将默认语言也建立了自己的目录，而不是直接放在docs目录
    '/zh/': {
      lang: 'zh-CN', // 简体中文
      title: 'BFUI',
      description: '一个正在成长的前端开发工具箱',
    },
    '/en/': {
      lang: 'en-US', // English
      title: 'BFUI',
      description: 'A Growing Front-end Development Toolbox',
    },
  },

  //【主题配置】
  // 设置站点要使用的主题，注意要在最上方import引入
  // 前往VuePress2.x官网查看默认主题所有配置项
  // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html
  theme: defaultTheme({
    //【基础配置】
    // 多语言支持的各个语言 locales
    // 该配置项仅能在默认主题内生效，注意不要和 站点配置 中的locales混淆
    locales: {
      '/zh/': {
        navbar: navbarZh, // 导航栏配置
        sidebar: sidebarZh, // 侧边栏配置
        selectLanguageText: '选择语言', // 选择语言菜单 的文字
        selectLanguageName: '简体中文', // Locale的语言名称
        editLink: true, // 是否启用 编辑此页 链接
        editLinkText: '为此页提供修改建议', // 编辑此页 链接的文字
        lastUpdated: true, // 是否启用 最近更新时间戳
        lastUpdatedText: '上次更新', // 是否启用 最近更新时间戳
        contributors: true, // 是否启用 贡献者列表
        contributorsText: '贡献者', // 贡献者列表 标签的文字
        tip: '提示', // Tip 自定义容器 的默认标题
        warning: '注意', // Warning 自定义容器 的默认标题
        danger: '警告', // Danger 自定义容器 的默认标题
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ], // 404 页面的提示信息，数组中随机选取一条信息进行展示
        backToHome: '返回首页', // 404 页面中 返回首页 链接的文字
        toggleColorMode: '切换颜色模式', // 切换颜色模式按钮的标题文字
      },
      '/en/': {
        navbar: navbarEn, // 导航栏配置
        sidebar: sidebarEn, // 侧边栏配置
        selectLanguageText: 'Languages', // 选择语言菜单 的文字
        selectLanguageName: 'English', // Locale的语言名称
        editLink: true, // 是否启用 编辑此页 链接
        editLinkText: 'Suggest changes to this page', // 编辑此页 链接的文字
        lastUpdated: true, // 是否启用 '上次更新'列表
        lastUpdatedText: 'Last Updated', // 是否启用 最近更新时间戳
        contributors: true, // 是否启用 贡献者列表
        contributorsText: 'Contributors', // 贡献者列表 标签的文字
        tip: 'Tip', // Tip 自定义容器 的默认标题
        warning: 'Warning', // Warning 自定义容器 的默认标题
        danger: 'Danger', // Danger 自定义容器 的默认标题
        notFound: [
          `There's nothing here.`,
          `How did we get here?`,
          `That's a Four-Oh-Four.`,
          `Looks like we've got some broken links.`,
        ], // 404 页面的提示信息，数组中随机选取一条信息进行展示
        backToHome: 'Back to home', // 404 页面中 返回首页 链接的文字
        toggleColorMode: 'toggle color mode', // 切换颜色模式按钮的标题文字
      },
    },
    //【Locale 配置】
    // Locale配置项可以作为一般配置使用，也可以使用在locales内
    // 前往VuePress2.x官网查看所有Locale配置项
    // https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#locale-config
    logo: '/images/BFUI-logo.png', // 导航栏的左端Logo图片的URL
    repo: 'https://github.com/Barry-Flynn/BFUI', // 项目仓库的URL，显示为导航栏的最后一个元素
    docsRepo: 'https://github.com/Barry-Flynn/BFUI-docs', // 文档源文件的仓库URL，它将会用于生成 编辑此页 的链接，默认使用 repo 配置项
  }), 

  //【打包工具配置】
  // 设置站点要使用的打包工具，VuePress2.x默认的打包工具是Vite
  // bundler:

  //【通用配置项】
  // dest: `${sourceDir}/.vuepress/dist`, // 指定vuepress build命令的输出目录
  // temp: `${sourceDir}/.vuepress/.temp`, // 指定临时文件目录
  // cache: `${sourceDir}/.vuepress/.cache`, // 指定缓存文件目录
  // public: `${sourceDir}/.vuepress/public`, // 指定Public文件目录
  // debug: false, // 是否启用Debug模式
  // pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'], // 指定页面文件的Patterns，这些Patterns是相对于Source目录的
  // permalinkPattern: null, // 指定为页面生成永久链接的Pattern，它会被每个页面的Frontmatter中的permalinkPattern字段覆盖

  //【Dev 配置项】
  // host: '0.0.0.0', // 指定开发服务器的主机名
  // port: 8080, // 指定开发服务器的端口号
  // open: false, // 是否在开发服务器启动后打开浏览器
  // templateDev: '@vuepress/client/templates/dev.html', // 指定开发时使用的HTML模板

  //【Build 配置项】
  // shouldPreload: true, // 一个函数，用来控制哪些文件是需要生成对应的 <link rel="preload"> 标签的。设置为 true 或者 false 来完全启用或禁用它。默认情况下，只有当前页面所需的文件会被预加载。所以在绝大部分情况下，你只需要使用 true 就可以了。
  // shouldPrefetch: true, // 一个函数，用来控制哪些文件是需要生成对应的 <link rel="prefetch"> 标签的。设置为 true 或者 false 来完全启用或禁用它。如果你将它设置为 true ，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  // templateBuild: '@vuepress/client/templates/build.html', // 指定构建时使用的 HTML 模板

  //【Markdown 配置】
  // https://v2.vuepress.vuejs.org/reference/config.html#markdown-config

  //【插件配置】
  // 插件：https://v2.vuepress.vuejs.org/reference/config.html#plugin-config
  // 官方插件参考：https://v2.vuepress.vuejs.org/zh/reference/plugin/back-to-top.html
  plugins: [
    // 本地搜索配置项
    searchPlugin({
      locales: {
        '/zh/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      }, // 搜索框在不同locales下的文字
      maxSuggestions: 10, // 指定搜索结果的最大条数
    }), 
  ],

  //【插件 API】
  // https://v2.vuepress.vuejs.org/reference/config.html#plugin-api
})