// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'


import '@/assets/icomoon/style.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import teal from 'muse-ui/dist/theme-teal.css'
Vue.use(MuseUI)


/*
import 'muse-components/styles/base.less' // 加载基础的样式

import Paper from 'muse-components/paper'
import bottomNav from 'muse-components/bottomNav/bottomNav'
import bottomNavItem from 'muse-components/bottomNav/bottomNavItem'


Vue.component(Paper.name, Paper)
Vue.component(bottomNav.name, bottomNav)
Vue.component(bottomNavItem.name, bottomNavItem)
*/



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
