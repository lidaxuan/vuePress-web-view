/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-03-30 11:22:55
 * @FilePath: /vuePress-web-view/docs/.vuepress/config.js
 */



module.exports = {
  port: '2062', //端口号
  hot: true,
  title: '前端开发-李大玄',
  description: 'Just playing around',
  // head: [
  //   ['link', { rel: 'icon', href: '/logo.png' }]
  // ],
  themeConfig: {
    // navbar: false, // 你可以使用 themeConfig.navbar 来禁用所有页面的导航栏：
    logo: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2F0eb30f2442a7d9332bae5cd5f26fcb1972f001c4.jpeg%3Ftoken%3Dbae4c26a1923d14e49d029ad29bc9565&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1648746000&t=b136ec96b72c6b116cfc2e9cc7f744be',
    nav: [
      { text: 'Home', link: '01.前端/25.JavaScript文章/01.33个非常实用的JavaScript一行代码' },
      // { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
      // {
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    sidebar: [{
        title: '01前端',
        collapsable: true,
        children: [
          ['01.前端/25.JavaScript文章/01.33个非常实用的JavaScript一行代码', '33个非常实用的JavaScript一行代码'],
          ['01.前端/25.JavaScript文章/02.new命令原理', 'new命令原理']
        ]
      },
      {
        title: '回调对象设计',
        collapsable: true,
        children: [
          ['/jquery/1', 'ccc'],
          ['/jquery/2', 'ddd']
        ]
      },
    ],
    // sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    // author: {
    //   name: '', // 必需
    //   link: '', // 可选的
    // },

    // // 博主信息 (显示在首页侧边栏)
    // blogger: {
    //   avatar: '',
    //   name: '',
    //   slogan: '',
    // },

    sidebarDepth: 2,
    displayAllHeaders: false // 默认值：false 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接，你可以将 themeConfig.displayAllHeaders 设置为 true 来显示所有页面的标题链接：
  }
}