const nav = require('../nav/')
module.exports = {
    '/': {
        lang: 'zh-CN',
        selectText: 'language',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        serviceWorker: {
            updatePopup: {
                message: "发现新内容可用.",
                buttonText: "刷新"
            }
        },
        recoLocales: {
            homeBlog: {
                tag: '标签',
                category: '分类',
                friendLink: '友链' // 默认 友情链接
            },
            pagation: {
                prev: '上一页',
                next: '下一页',
                go: '前往',
                jump: '跳转至'
            }
        },
        nav,
        sidebar: 'auto'
    }
}