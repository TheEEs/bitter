import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Badge from "./components/supports/badge.vue"

Vue.config.productionTip = false

Vue.component("Badge", Badge)

const app = new Vue({
  render: h => h(App),
})

app.$mount('#app')
