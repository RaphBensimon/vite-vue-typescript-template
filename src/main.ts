import { createApp } from 'vue'
import App from './App.vue'
import i18n from './translations/i18n'
import routes from './router/index'
import { store } from '@/store/index'
import { http } from '@/utils/https'
const app = createApp(App)
app.config.globalProperties.$http = http
app.use(store)
app.use(i18n)
app.use(routes)

app.mount('#app')
