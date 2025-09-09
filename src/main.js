import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles.css' // custom styles

const app = createApp(App)
app.use(router)
app.mount('#app')

// ensure initial theme (light by default); if stored in localStorage, apply
const saved = localStorage.getItem('td_theme') || 'light'
if (saved === 'dark') document.documentElement.classList.add('dark')
else document.documentElement.classList.remove('dark')
