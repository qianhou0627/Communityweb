import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router, { setPinia } from './router'
import './assets/tailwind.css'
import './assets/css/style.css'
import './assets/css/icons.css'
import App from './App.vue'

const app = createApp(App)
// 配置Vue以忽略自定义元素
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')

// 创建pinia实例
const pinia = createPinia()

// 设置pinia实例到路由中
setPinia(pinia)

app.use(pinia)
app.use(router)
app.mount('#app')
