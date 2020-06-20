// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import Vuetify from 'vuetify'
import theme from './plugins/theme'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import excel from 'vue-excel-export'
import VueCharts from 'vue-chartjs'
import Spinner from 'vue-simple-spinner'
import Notify from 'vue-notify-me'
import Clock from 'vue-clock2';
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import mapInit from 'highcharts/modules/map'
import stockInit from 'highcharts/modules/stock'
import VueHighcharts from './components/DashViews/VueHighcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueDragscroll from 'vue-dragscroll'
import MarqueeText from 'vue-marquee-text-component'
Vue.use(VueDragscroll)
Highcharts3D(Highcharts)



export default VueHighcharts;
Vue.use(vueSmoothScroll)
Vue.use(VueNoty)
Vue.use(HighchartsVue)
Vue.use(Spinner)
Vue.use( Notify)
Vue.use(VueCharts)
Vue.component('marquee-text', MarqueeText)
Vue.use(excel)
Vue.use(Clock)
mapInit(Highcharts)
stockInit(Highcharts)
Vue.prototype.$http = axios;
// Sets the default url used by all of this axios instance's requests

axios.defaults.baseURL = 'http://127.0.0.1:5000'
axios.defaults.headers.get['Accept'] = 'application/json'


const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

// Sync store with router
sync(store, router)

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
