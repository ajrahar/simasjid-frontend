import { createApp } from 'vue'
import router from './router'
import HomeView from './views/HomeView.vue'
import './assets/main.css' // Import Tailwind CSS file

// Buat instance aplikasi menggunakan HomeView sebagai root component
const app = createApp(HomeView)

app.use(router)
app.mount('#app')
