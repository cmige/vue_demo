<template>
    <div class="on">
      <section class="msite">

        <Header :title="address.name">
           <router-link to="/search" class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
          <router-link :to="userInfo._id ? '/userinfo': '/login'" class="header_login" slot="right">
            <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
            <span class="header_login_text" v-else>
              <i class="iconfont icon-person"></i>
            </span>
          </router-link>
        </Header>

        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+ category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>

              </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination">

            </div>
          </div>
        </nav>
        <!--首页附近商家-->

        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList />
        </div>

      </section>

    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'

  import Header from '../../components/Header/Header'
  import ShopList from '../../components/ShopList/ShopList'

  import { mapState } from 'vuex'
    export default {
      data(){
        return{
          baseImageUrl:'https://fuss10.elemecdn.com'
        }
      },
      mounted(){
       this.$store.dispatch('getCategorys')
       this.$store.dispatch("getShops")

      },
      computed:{
        ...mapState(['address','categorys','userInfo']),

        //  根据 categorys 一维数组生成一个二维数组，小数组中元素个数最大是 8
        categorysArr(){
          const {categorys} = this
          const arr = []
          let minArr = []
          categorys.forEach(c =>{
            if (minArr.length === 8){
              minArr = []
            }
            if (minArr.length === 0){
              arr.push(minArr)
            }
            minArr.push(c)
          })

          return arr
        }

      },
      watch:{
        //  界面跟新就立即创建 swiper 对象
        categorys(value){
          this.$nextTick(() => {
            new Swiper('.swiper-container',{
              loop: true,
              pagination: {
                el: '.swiper-pagination',
              }
            })
          })
        }
      },

      // updated(){
      //   this.$nextTick(function () {
      //     new Swiper('.swiper-container',{
      //       loop: true,
      //       pagination: {
      //         el: '.swiper-pagination',
      //       }
      //     })
      //   })
      // },
      components:{
        Header,
        ShopList
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  &.msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
