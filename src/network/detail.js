import { request } from "./request";

// 根据商品的id请求商品信息
export function getDetail(iid) {
  return request({
    url: 'detail',
    params: {
      iid,
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class getDetailBaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.price = itemInfo.highPrice
  }
}

export class getShop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class getGoodsParams {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
    this.disclaimer = rule.disclaimer
  }
}