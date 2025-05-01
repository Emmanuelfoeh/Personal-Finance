import './assets/main.css'
import "primeicons/primeicons.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@/assets/presets/aura'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, { unstyled: true, pt: Aura })
app.use(createPinia())
app.use(router)

app.mount('#app')
