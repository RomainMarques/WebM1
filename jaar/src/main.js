import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBasketShopping, faTrainSubway, faCartShopping, faRightFromBracket, faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faBasketShopping, faTrainSubway, faCartShopping, faRightFromBracket, faCheck, faCircleXmark)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

/* add icons to the library */