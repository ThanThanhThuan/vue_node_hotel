import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// CHANGE THIS LINE: matches <div id="app"> in index.html
app.mount('#app')