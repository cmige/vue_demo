import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
// const Home =() => import ("../views/Home/Home")

import Home from "../views/Home/Home";
import Search from "../views/Search/Search";
import Order from "../views/Order/Order";
import Profile from "../views/Profile/Profile";
import Login from "../views/Login/Login";
import Shop from "../views/Shop/Shop";
import ShopGoods from "../views/Shop/ShopGoods/ShopGoods";
import ShopInfo from "../views/Shop/ShopInfo/ShopInfo";
import ShopRating from "../views/Shop/ShopRating/ShopRating";

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'/shop/ratings',
          component:ShopRating
        },
        {
          path:'',
          redirect:'/shop/goods'
        },
      ]
    },

  ]
})
