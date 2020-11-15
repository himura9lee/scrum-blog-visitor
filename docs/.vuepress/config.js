const themeConfig = require('./config/theme/')

module.exports = {
  title: "如梦似幻",
  description: '我如朝露降人间，和风樱花随春谢。',
  dest: 'public',
  port: '8088',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { 'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests' }],
    ['meta', { name: 'author', content: 'himura' }],
    ['meta', { name: 'keywords', content: 'vuepress,golang blog,golang技术博客' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png' }],
    ['link', { rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#fff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/randomRibbon.js"
    }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    ["cursor-effects",
    {
      size: 2,                    // size of the particle, default: 2
      shape: ['star'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }],
    ["dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
      ],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!"
        }
      }
      ],
    ['flowchart'],
    ['@vuepress/medium-zoom'],
    ['@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
      ],
    ['sitemap',
      {
      hostname: 'https://himura.xyz'
      }
    ],
    ['@vuepress/google-analytics',
      {
        ga: 'UA-182341879-1'
      }
      ],
    ["vuepress-plugin-google-adsense",
      {
        ad_client: "ca-pub-9552990452916134" // replace it with your ad_client
      }
      ]
  ]
}  