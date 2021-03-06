import Vue from 'vue'
import App from './App'
import router from './router'

import ECharts from 'vue-echarts/components/ECharts'
// import 'echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markArea'
// import 'echarts/lib/component/brush'
import 'echarts/lib/component/graphic'

Vue.config.productionTip = false
Vue.component('echart', ECharts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
