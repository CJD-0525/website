module.exports = {
  title: "CJD's Blog", 
  description: "太阳系的一颗尘埃", 
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco", 
  themeConfig: {
    type: "blog", 
    fullscreen: true,
    blogConfig: {
      category: {
        location: 2, 
        text: "分类", 
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    nav: [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/CJD-0525",
            "icon": "reco-github"
          },
          {
            "text": "哔哩哔哩", 
            "link": "https://space.bilibili.com/101657554",
            "icon": "reco-bilibili"
          },
          {
            "text": "简书",
            "link": "https://www.jianshu.com/u/ce36372e61fb",
            "icon": "reco-jianshu"
          }
        ]
      }
    ],
    sidebar: "auto", 
    record: "蜀ICP备20005033号-1",
    recordLink: "https://icp.chinaz.com/home/info?host=tsanfer.xyz",
    cyberSecurityRecord: "XXXXXX",
    cyberSecurityLink:
      "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51110202000301",
    startYear: "2020", 
    lastUpdated: "最后更新时间", 
    author: "Tsanfer",
    authorAvatar: "/post.jpg", //作者头像
    mode: "light", //默认显示白天模式
    codeTheme: "okaidia", // default 'tomorrow'
    smooth: "true", //平滑滚动
    // 评论设置
    valineConfig: {
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
    },
  },
  markdown: {
    lineNumbers: true, 
  }, 
  search: true,
  searchMaxSuggestions: 10, 
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", 
      {
        audios: [
          {
            name: "寂しい夜",
            artist: "三輪学",
            url:
              "https://cdn-image.tsanfer.xyz/music/%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20%E5%AF%82%E3%81%97%E3%81%84%E5%A4%9C.flac",
            cover:
              "https://p2.music.126.net/RIOvUtQejxeI5S2sP_nmiw==/3434874333355654.jpg",
          }
        ],
      },
    ],

    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ["blackCat", "whiteCat", "haru1", "haru2", "haruto", "koharu", "izumi", "shizuku", "wanko", "miku", "z16"],
      clean: false,
      message: {
        welcome: "欢迎来到我的博客" ,
        home: "心里的花，我想要带你回家",
        theme: "好吧，希望你能喜欢我的其他小伙伴",
        close: "你知道我喜欢吃什么吗？痴痴地望着你" 
      },
      width: 120,
      height: 186
    }
    ],

    [
      "social-share", //分享插件
      {
        networks: ["qq", "weibo", "twitter", "facebook", "email"], //分享类型
        email: "a1124851454@gmail.com", //email地址
        twitterUser: "a1124851454", //Twitter账号
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-rss", //RSS插件
      {
        site_url: "https://tsanfer.xyz", //网站地址
        copyright: "Tsanfer", //版权署名
      },
    ],
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
  ],
};
