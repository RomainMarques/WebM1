import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBasketShopping, faTrainSubway } from '@fortawesome/free-solid-svg-icons'

library.add(faBasketShopping, faTrainSubway)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

/* add icons to the library */
