import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify expo
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
