import { defineComponent, reactive, ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'

const img = require('./assets/logo.png') // eslint-disable-line

function renderHelloWorld(num: number) {
    return <HelloWorld age={num} />
}
export default defineComponent({
    setup() {
        const state = reactive({
            name: 'Elsa',
        })

        const numberRef = ref(1)

        // setInterval(() => {
            // state.name += '1'
            // numberRef.value += 1
        // }, 1000)

        return () => {
            const number = numberRef.value // B 位置：想简写下，reactive 或者 ref 变量的变化会触发这个return 函数的执行，重新渲染
            console.log('state.name: ', state.name)

            return <div id="app">
                <img src={img} alt="Vue logo" />
                <p>{state.name + number}</p>
                <h2>哈哈 ，我做了一个jsx</h2>
                <input type='text' v-model={state.name} />
                {renderHelloWorld(16)}
            </div>
        }
    }
})
