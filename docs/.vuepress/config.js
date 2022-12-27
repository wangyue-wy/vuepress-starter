module.exports = {
    title: "Happy Ms. Dan",
    description: 'My personal blog',
    base: '/vuepress-starter/', // 此处设置仓库名称
    head: [
        ['link', { rel: 'icon', href: '/images/wd-img.jpg' }]
    ],
    themeConfig: {
        lastUpdated: true,
        lastUpdated: '上次更新时间', // string | boolean 最后更新时间  --基于git
        sidebarDepth: 2,   // 设置嵌套的标题链接深度
        logo: '/images/wd-img.jpg',
        smoothScroll: true,
        nav: [  // 头部导航
            { text: '首页', link: '/index/' },
            // { 
            //     text: 'JS',
            //     items: [
            //         { text: '数据结构',  link: '/javaScript/dataStructure/dataStructure' },
            //         { text: 'js笔记',  link: '/javaScript/jsNote/reduce' },
            //     ]
            // },
            { text: '数据结构', link: '/javaScript/dataStructure/dataStructure' },
            {
                text: 'vuepress',
                items: [
                    { text: 'vuepress搭建', link: '/pressWord/pressBuild/pressBuild' },
                    { text: 'vuepress部署', link: '/pressWord/pressDeploy/pressDeploy' }
                ]
            },
            { text: 'js知识点', link: '/javaScript/knowledge/knowledge' },
            { text: 'openLayers', link: '/openLayers/openLayers'}
            
        ],
        sidebar: {  //配置侧边栏
            '/javaScript/dataStructure/': [
                'dataStructure'
            ],
            '/javaScript/knowledge/': [
                'knowledge'
            ],
            '/openLayers/': [
                'openLayers'
            ]
        }
    },
    markdown: { // 为每个代码块显示行号
    	lineNumbers: true
  	}
}