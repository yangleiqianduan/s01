import { fromJS } from 'immutable'
import * as actions from 'actions/detail'

export default (state = fromJS(initState), action) => {
  switch (action.type) {
    case actions.UPDATE_ITEM_DETAIL:
      return state.merge({reqData: action.payload})
    default:
      return state
  }
}

const initState = {
  goodsStandard: [
    {
      key: '编号',
      value: 'HBmns32'
    },
    {
      key: '发货地',
      value: '北京'
    },
    {
      key: '毛重',
      value: '10KG'
    },
    {
      key: '是否可定制',
      value: '是',

    },
    {
      key: '尺寸',
      value: '1.8m x 2m x 0.6m',
      long: true
    },
    {
      key: '其它说明',
      value: '暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无暂无',
      long: true
    }
  ],
  ensureInfo: [
    {
      type: 1,
      icon: 'data:image/png;base64,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',
      tit: '7天发货',
      info: '链家承诺，非定制商品，下订单次日起7日内发货'
    },
    { 
      type: 2,
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAYAAACIC2hQAAAABGdBTUEAALGPC/xhBQAABWFJREFUWAntWHlMXEUY/+1jFxKuIsVCS7kpyL0cai2l3Ec5lmKiprGmjTURm5JUo+n/xn9MjWI0pn9oxJjGHhrKcl8tR7lqy5EWWmmRq6QLFITlEMgudWaaJcuebx+HmvTbbN6bme/75jfz5rtG9JQQeNLKygrab/6OhwMD4DgOgQEBeDkmGmIrK54ahLOJ+ACla2lt70B5VTWUSiWcduyAenUVc3NzcHZ2hizzMGKio4Sj4CFpFmhv3z1cLS3DY4UC/n6+yM3Jho+XF1Pd/+AhGxsZHYWnhwfycnOwz8+Px7SWsxgFOvpoDMVyOSgY1127CMAshIeGGpzh1u1OyCsqMT09jbCQEByRZTMZg8wCO/WA/jUzA3l5Bejk9nZ2yMxIR+xr+9mZNDWHSq1GQ2MTaurqsbS8jAP7X0UWkXVwcDAlxntsDejS0hKqySQNTc0QiYDE+HikJSfBxsaGtzLKuLC4iKqaWjTdaIFYLEZKUiKSE+JhbW1tkR5dZgZUoRjHN+fPE+OYxysxMcjOzGAGo8tsSfvJ1BTkZeXo7O6Bi8tOFHyQj53E8ISSiCh8eu7LQtja2uLkieNw37NbqC6DcoPDw/ih6CeIyO/sxx+x42SQ0Uwn19Laxj5Xwan8TQdJ56YeIv+9k6Bnv4P4YKHEKSYm4ObmihecnITqMCu3190djsSoJiYnzfIaY+BWieO2lkjWjdNP9cvlK5ifn1/Xz6cxPDKCwm+/Y9avzS8hc6iJZxBKYkOCL7q4oKb+Gm51diElMQHJ5G/OaqemplFSToynq5sFBhocNpMMApVlZyEsNAQlZRUsbDa3tBJ/mkZ8o74/XVz8G1W1z9wR/bzvHn8HUVLpZmJkugwCpSM+3t44c/oU7t3/gwWAi1d+w/XGZuRkZUIaHgbq4JuabzCfqVKrkJ6STHxmEiQSoyo3BN6s1qCXAkH/nd3dKK+sxvc/FsHby5P53CkSMqMjI5FHQqbTFhojXaFZoJptoJ9TGh7O0rxieSkc7O3xYcFp+Pn6aFi29MkbKEVBc1Aaw1va2tmubhSkYnwcFy5eMrtAjrPiv6NmtQlgWF5eweDQMEteTHkVESf6d4Fq1nboYCzsSKZmijhTg/+lMc7G2gazpLzYSqLRb35hweKUURsTRw1iZmYWXT092v2b+t7a3o5lkkxvxPjE1Irv9Pai6OcLGBt7jNTkxA2tXHuFNGpV1tSwZDwqUorIiAjtYYveSRIuxvskDbt4+VeS4dehhaw+y0i41GjmiBWKaBlghGjUaiSVQnVtHStLEg7F4fVcmUkZI6rWupkfpXX5saNvIT4uFsUlpdCEyyOk4qQxX5ciwsKMFm80kaE1Fy30QkOCQXW4ubrqqrC4vVYzaUve7evDVXkZqEOmWVCeTAYvTw9tFr33B+RSgi7yWem8l8ns8zddOg+PjOLcV4X4/LNPzbong5EpNDgYIUFBa5cOXxR+TWK6lCUkunXPOEm86aLoOaeXESeOvb12GUFzAVM0q5w1NbxuzOCOanPQa5y6a9dR39DIEt+42APEKMKhUqlxu6sLbR03mfHR7ImeRXrmKalUKpz55Ky2KqPvfHbULFCNdqVyjuSmVSwp0WTqEgLqIAGekZYKO1IcapMGqD+5OQkKDNAe0ntPIuU0rQBMkcFPb0jA0dEBR998A9mHM/Dn0BA4EQdf4oN1AerK+vl4Iz01Rbfb4jZvoBrN9OaDWv120/8n1m/3zgid7/mOCt05Y3LPd9TYzgjtt9g9aSa6c7cXA4ODmqbekybLm0mCgd7v70cjuYDYLuIdQnUBPRobw+TkE91uvbYrSfH27HbT67e04x/3u/yZ0e8TmwAAAABJRU5ErkJggg==',
      tit: '送货入户',
      info: '链家承诺，所有商品均送货入户'
    },
    {
      type: 3,
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAABGdBTUEAALGPC/xhBQAAAu9JREFUWAntWEtPE1EU/lr6SkrbKRQwPnFL3GgQ485CSTCYYGKikYU/wrgwbF0Ywx8wEYOa6IKF0Y3RUhdqYlB0UakEUUQjCLGlM31gH1r0nAszMqXUFpsYkrnJzX3Muef75ru3c3uO6RcVbFJWVlbwfOyFqN+iUdhsNngliaoHkmglaj1ijscetxt1dXWbeCs9bSpH4NbtO3j56jV279oJX6MPSkKBrChIpdJgcsXFZDLB5XIJgkyUSUkeIujlloiL1gOz2awttWi9os7U9LQA7zjcjnP9Z3VPGTyRTEKWFUFKURKCmELkmCCPv8zNlyRpt9txoK0Np072we12QSgwEXmLh6OjWFhcJJntQtJMJoPY0hL6TvSiu6tTR6CSgUqSSRUTfP9hBlarFRcvnIclPBHB0PANkrgR9c56pNJpYj9XCUZZG5Z59bxIG+z4PF26fAUPHgVhCYZCOHqkA/1nTmuG2VwOd+/dF4dPm6xhp7mpCVyn3k3DzLI7HA6dewftU/GczqAGA1ZoKR6HuVDYeJpr4L8iF/wF+PN7qGhJ7Y0MAoYChgLbS4HBwUGMjIzU9GOw6XVcCiUcDiObzZZ6tOW57bUFW37NMgur2oI2+ifT2tpaxl31j6oiMDAwUD3CX1YYZ8BQwFDAUID+nv8/ERjbvKOlBfl8Xve9ylFkVOtbTwdAA8bk6MjS5T8GDsNnP31GLp9DMpnaQKh48b+OZz7Oiqio93gPLO2HDgp/wdBjEW7bKQnRTPmA75ks4hQ6bbWkl5dpvUzhuow4hfEy+YrL3Jcx/3UB+/buQcDvh7iMmIRKRAWMTE7i6rXriMZi6pTWcuitJBICgB3Ka44FwBpoPv9Ds1c7vOdNPh8CnX70dAcoRLes5gdUg/Utx21DwzfxJhLBfrqCGyi7Id6EwDg5USpDYrNZKST3oqGBqne1erWWUzuSLjvCeGVTND8LBTx5+gxj4+OIRWOwUxTNRHTOCUwFrXc6179DRf3fpgJCGj9qeHYAAAAASUVORK5CYII=',
      tit: '送货上门取件',
      info: '所有商品30天试用无理由退货，并上门取件退款'
    }
  ]

}
