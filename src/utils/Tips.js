import wepy from 'wepy'
/**
 * 提示与加载工具类
 */
export default class Tips {
  /**
   * 弹出确认窗口
   */
  static modal (text, title = '提示') {
    return new Promise((resolve, reject) => {
      wepy.showModal({
        title: title,
        content: text,
        showCancel: false,
        success: res => {
          resolve(res)
        },
        fail: res => {
          reject(res)
        }
      });
    });
  }
}
