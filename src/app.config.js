export default {
  pages: [
    'pages/index/index',
    'pages/orders/order',
    'pages/mine/mine',
    'pages/orders/newOrder/newOrder',
    'pages/orders/acceptOrder/acceptOrder',
    'pages/mine/register/register'
  ],
  tabBar: {
    list: [ 
      {
        pagePath: "pages/index/index",
        iconPath: "./image/homeS.png",
        selectedIconPath: "./image/home.png",
        text: "首页"
      },{
        pagePath: "pages/orders/order",
        iconPath: "./image/orderS.png",
        selectedIconPath: "./image/order.png",
        text: "订单中心"
      },{
        pagePath: "pages/mine/mine",
        iconPath: "./image/mineS.png",
        selectedIconPath: "./image/mine.png",
        text: "个人中心"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '速送校园服务平台',
    navigationBarTextStyle: 'black'
  }
}
