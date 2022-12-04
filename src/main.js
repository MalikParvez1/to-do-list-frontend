import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Datepicker from 'vue3-datepicker'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
// eslint-disable-next-line vue/multi-word-component-names
app.component('Datepicker', Datepicker)
app.use(router)
app.mount('#app')
