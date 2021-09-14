import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDisqus from 'vue-disqus'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add([faClock, faUsers, faUtensils, faTools])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueDisqus, {
  shortname: 'receitas-do-lucas',
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
