import base from './base'

/**
 * 商品服务类
 */
export default class goods extends base {
  /** ********************* 数据处理方法 ***********************/

  static _createGoodsCategories (data) {
    const list = []
    if (data != null) {
      list.push(...data.map(item => {
        return {
          id: item.id,
          title: item.name
        }
      }))
    }
    const selectedId = list.length > 0 ? list[0].id : null
    return {
      list,
      selectedId,
      scroll: false
    }
  }
}
