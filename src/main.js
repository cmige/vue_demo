import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './mock/mockServer'
import './filters'

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
