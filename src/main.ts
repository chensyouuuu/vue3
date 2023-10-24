import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

import "./assets/css/index.css"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router as any)
app.use(ElementPlus)

app.mount('#app')
