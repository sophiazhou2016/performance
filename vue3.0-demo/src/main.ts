import { createApp } from 'vue'
// import { createApp, defineComponent, createVNode } from 'vue'
import App from './App.vue'

// import HelloWorld from './components/HelloWorld.vue'
// const img = require('./assets/logso.png') // eslint-disable-line

// const App = defineComponent({
//     render() {
//         return createVNode('div', {id: 'app'}, [
//             createVNode('img', {
//                 alt: 'Vue logo',
//                 src: img
//             }),
//             createVNode(HelloWorld, {
//                 msg: 'Welcome to Your Vue.js + TypeScript App',
//                 age: 12
//             })
//         ])
//     }
// })

createApp(App).mount('#app')
