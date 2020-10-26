// import { createApp } from 'vue'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
// import App from './App.vue'

import HelloWorld from './components/HelloWorld.vue'
const img = require('./assets/logo.png') // eslint-disable-line

const App = defineComponent({
    setup() {
        const state = reactive({
            name: 'Elsa',
        })

        const numberRef = ref(1)

        setInterval(() => {
            state.name += '1'
            numberRef.value += 1
        }, 1000)

        // const number = numberRef.value // A 位置 ： setup只会执行1次
        
        return () => {
            const number = numberRef.value // B 位置：想简写下，reactive 或者 ref 变量的变化会触发这个return 函数的执行，重新渲染
            return h('div', {id: 'app'}, [
                h('img', {
                    alt: 'Vue logo',
                    src: img
                }),
                h('p', state.name + number)
            ])
        }
    }
    // render() {
    //     return createVNode('div', {id: 'app'}, [
    //         createVNode('img', {
    //             alt: 'Vue logo',
    //             src: img
    //         }),
    //         v(HelloWorld, {
    //             msg: 'Welcome to Your Vue.js + TypeScript App',
    //             age: 12
    //         })
    //     ])
    // }
})

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
