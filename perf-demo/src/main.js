import { createApp } from 'vue';
import App from './App.vue'
// import store from './store/index'
import router from './router/index'

console.log('router:', router)

const app = createApp(App);
// app.config.globalProperties.$store = store;
app.use(router)
app.mount('#app')

