/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-03-30 11:22:55
 * @FilePath: /vuePress-web-view/docs/.vuepress/config.js
 */
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    // navbar: false, // 你可以使用 themeConfig.navbar 来禁用所有页面的导航栏：
    logo: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2F0eb30f2442a7d9332bae5cd5f26fcb1972f001c4.jpeg%3Ftoken%3Dbae4c26a1923d14e49d029ad29bc9565&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1648746000&t=b136ec96b72c6b116cfc2e9cc7f744be',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
      { text: 'Guide', link: '/guide/', target: '_blank' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: [{
        title: '核心功能',
        collapsable: true,
        children: [
          '/senior-js/jquery/1',
          '/senior-js/jquery/2',
        ]
      },
      {
        title: '回调对象设计',
        collapsable: true,
        children: [
          '/senior-js/jquery/3',
          '/senior-js/jquery/4',
        ]
      },
      {
        title: 'Group 1',   // 必要的
        path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ],
    sidebarDepth: 2,
    displayAllHeaders: true // 默认值：false 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：
  }
}