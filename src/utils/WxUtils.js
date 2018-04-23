import wepy from 'wepy'
import Tips from './Tips'
console.log(wepy)

export default class WxUtils {
  static isTab (url) {
    const type = wepy.$instance.globalData.shopType
    return type === 1 && this.tabUrls.some(path => path === url)
  }
  /**
   * 检查SDK版本
   */
  static isSDKExipred() {
    const {SDKVersion} = wepy.getSystemInfoSync()
    console.info(`[version]sdk ${SDKVersion}`)
    return SDKVersion == null || SDKVersion < '1.2.0'
  }
  /**
   * 检查SDK版本
   */
  static checkSDK() {
    if (this.isSDKExipred()) {
      Tips.modal('您的微信版本太低，为确保正常使用，请尽快升级')
    }
  }
  /**
   * 如果能够后退（多层），则navigaetBack，否则调用redirectTo
   */
  static backOrRedirect(url) {
    url = this.mapUrl(url)
    if (this.isTab(url)) {
      wepy.switchTab({
        url: url
      })
    } else {
      const pages = getCurrentPages()
      // route在低版本不兼容
      const index = pages.findIndex(item => ('/' + item.__route__) === url)
      if (pages.length < 2 || index < 0) {
        wepy.redirectTo({
          url: url
        });
      } else {
        const delta = pages.length - 1 - index
        wepy.navigateBack({
          delta: delta
        })
      }
    }
  }
}
