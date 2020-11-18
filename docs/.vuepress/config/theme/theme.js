module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'himura',
  authorAvatar: '/head.png',
  noFoundPageByTencent: false,
  // 项目开始时间
  startYear: '2020',
  search: true,
  searchMaxSuggestions: 10,
  algolia: {
    apiKey: 'fa557a01b6b0b94b690cca1ebe1b4afb',
    indexName: 'scrum'
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // valine 设置
  valineConfig: {
    appId: 'Fqwwb9ktYuajrIr1tqri2etF-MdYXbMMI',
    appKey: '4aSJNmlklFRH4foGoRPY0RWQ',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, //
    recordIP: true,
    showComment: true
  },
  subSidebar: 'auto',
  codeTheme: 'tomorrow'
}