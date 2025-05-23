import { createApp } from 'vue'
import '@A/styles/global.scss'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(pinia).use(router)

app.mount('#app')
