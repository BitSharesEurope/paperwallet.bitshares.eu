import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,
         faPrint,
         faKey,
         faEye,
         faEyeSlash,
         faArrowCircleRight,
         faSpinner,
         faQrcode,
         faDice,
         faGift
       } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
    faUser,
    faPrint,
    faKey,
    faEye,
    faEyeSlash,
    faArrowCircleRight,
    faSpinner,
    faQrcode,
    faDice,
    faGift
])
Vue.component('fa', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
