import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "daricyang's 知识库网站",
  description: "知识库网站",
  base: "/myBlog/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '大纲', // 文档内容目录标题
    outline: [2, 6], // 显示的标题层级范围
    logo: '/assets/logo.png', // 首页左上角logo
    sidebar: true, // 关闭侧边栏，同时要删除sidebar配置
    aside: 'right', // 文档内容目录位置

    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '工具',
        items: [
          { text: 'VS Code插件', link: '/markdown-examples' },
          { text: 'Git指南', link: '/api-examples' },
          { text: '常用工具网站链接', link: '/api-examples' }
        ]
      },
      { text: '前端',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
    ],

    // 侧边栏文档索引目录
    sidebar: [
      {
        text: '工具',
        items: [
          { text: 'VS Code插件', link: '/markdown-examples' },
          { text: 'Git指南', link: '/api-examples' },
          { text: '常用工具网站链接', link: '/api-examples' }
        ]
      },
      {
        text: '前端',
        items: [
          { text: '示例', link: '/markdown-examples' },
          { text: 'api示例', link: '/api-examples' }
        ]
      },
      {
        text: 'ZNS SSD实验指南',
        items: [
          { text: '示例', link: '/markdown-examples' },
          { text: 'api示例', link: '/api-examples' }
        ]
      }
    ],

    // 社交媒体链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 底部
    footer: {
      copyright: 'Copyright © 2025-present Daric'
    }
  }
})
