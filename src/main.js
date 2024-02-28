import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/Home.css'
import './css/footers.css'
import './css/Header.css'
import './css/Products.css'
import './css/detail.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
