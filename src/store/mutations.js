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
import Vue from 'vue'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_GATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USERINFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RECEIVE_LOGOUT](state){
    state.userInfo = {}
  },

  [RECEIVE_GOODS](state,goods){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,ratings){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,info){
    state.info = info
  },

  [INCREMENT_FOODCOUNT](state,{food}){
    if (!food.count){
      Vue.set(food,'count',1)
      state.cartFood.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOODCOUNT](state,{food}){
    if (food.count){
      food.count--
      if(food.count === 0){
        state.cartFood.splice(state.cartFood.indexOf(food),1)
      }
    }
  },
  [RECEIVE_SEARCHSHOP](state,searchShops){
    state.searchShops = searchShops
  },



}
