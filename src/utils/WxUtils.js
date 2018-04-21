import wepy from 'wepy'
import Tips from './Tips'

export default class WxUtils {
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
}
