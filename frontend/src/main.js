import * as Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api/api'
import title from './mixins/title'
// Bootstrap 5
import 'bootstrap'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = Vue.createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mixin(title)

app.config.globalProperties.api = api;
store.api = api;

app.mount('#app')