import {
  RECEIVE_ADDRESS,
  RECEIVE_GATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RECEIVE_LOGOUT,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOODCOUNT,
  DECREMENT_FOODCOUNT,
  RECEIVE_SEARCHSHOP
} from './mutations-types'

import {
  reqAddress ,
  reqFoodCategorys ,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings,
  reqSearchShop
} from '../api'
import ajax from "../api/ajax";
export default {
  //异步获取地址
  async getAddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude
    const  result = await reqAddress(geohash)
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取视频分类列表
  async getCategorys({commit}){
    const  result = await reqFoodCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_GATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const  result = await reqShops(longitude,latitude)
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  //  同步记录用户信息（已经发过请求拿到 user 数据）
  recordUser({commit},userInfo){
    commit(RECEIVE_USERINFO,{userInfo})
  },

  //  异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USERINFO,{userInfo})
    }
  },
  //  异步退出
  async logout({commit}){
    const result = await reqLogout()
    if(result.code === 0){
      commit(RECEIVE_LOGOUT)
    }
  },

  async getShopGoods({commit},callback){
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS,goods)
      callback && callback()
    }

  },
  async getShopRatings({commit},callback){
    const result = await reqShopRatings()
    const ratings = result.data
    if(result.code === 0){
      commit(RECEIVE_RATINGS,ratings)
      callback && callback()
    }
  },
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    const info = result.data
    if(result.code === 0){
      commit(RECEIVE_INFO,info)
    }
  },
  // 同步更新 count
  updataCount({commit},{isAdd,food}){
    if (isAdd){
      commit(DECREMENT_FOODCOUNT,{food})
    } else {
      commit(INCREMENT_FOODCOUNT,{food})
    }
  },
  async searchShops ({commit,state},keyword,callback){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash,keyword)
    if(result.code === 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCHSHOP,searchShops)
      callback && callback()
    }
  },

}
