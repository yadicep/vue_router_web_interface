import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../src/main.js'
import '../src/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router)

app.mount('#app')