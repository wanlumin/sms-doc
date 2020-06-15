module.exports = {
    base: '/',
    title: '开发文档',
    description: 'Just playing around',
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'foo', link: '/foo/'},
            {text: 'bar', link: '/bar/'},
            {text: 'External', link: 'https://baidu.com'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            },
            {
                text: 'Languages',
                items: [
                    {text: 'Group1', items: [{text: 'chinese', link: '/chinese'}]},
                    {text: 'Group2', items: [{text: 'english', link: '/english'}]}
                ]
            }
        ],
        sidebar: 'auto',
        displayAllHeaders: false // 默认值：false
    }
}
