<template>
  <div>
    <transition>
      <router-view></router-view>
    </transition>

    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  import {mapActions} from  'vuex'
    export default {
      async mounted(){
        // this.$store.dispatch('getAddress')
        this.getAddress()
        this.getUserInfo()
      },
      methods:{
        ...mapActions(['getAddress','getUserInfo'])
      },
      components:{
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
