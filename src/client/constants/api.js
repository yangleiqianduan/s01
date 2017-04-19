// 用户信息
export const userInfo = '/web/user/buyer/get_info'

// 首页
export const getCollocationList = '/web/product/mix/list'                   // 获取搭配列表
export const getHotItems = '/web/product/recommend/list'                    // 获取推荐商品
export const getCategoryList = '/web/category/list'                         // 获取类目列表

// 商品列表页
export const getItems = '/web/product/search/list'                          // 获取商品列表

// 需要页面
export const upload = '/web/product/image/upload'                           // 图片上传
export const submitRequire = '/web/product/want/create'                     // 提交想要买什么

// 商品详情
export const itemDetail = '/web/product/detail'                             // 商品详情

// 搭配详情
export const collocation = '/web/product/mix/details'                       // 获取搭配详情

export const host = {
  dev: 'http://mall.lj-web-30.lianjia.com',
  // dev: 'http://lmall.lianjia.com:8070',
  prod: ''
}
