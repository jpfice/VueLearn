// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AFTableColumn from 'af-table-column'

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
    baseURL:'http://localhost:3000/apis'
})
Vue.use(Element)
Vue.use(AFTableColumn)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
