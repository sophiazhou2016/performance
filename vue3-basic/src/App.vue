<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">点赞+1</button>
    <h1>X:{{x}}, Y: {{y}}</h1>
    <h1 v-if="loading">Loading !...</h1>
    <img v-if="loaded" :src="result[0].url" />
    <ul>
      <li v-for="number in numbers" :key="number"><h1>{{number}}</h1></li>
    </ul>
    <h1>{{person.name}}</h1>
    <button @click="updateGreetings">update title</button>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted, onUnmounted, onUpdated, computed,watch, onRenderTriggered } from 'vue';
import useMousePosition from './hooks/useMousePosition';
import useURLLoader from './hooks/useURLLoader';
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string};
}
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default defineComponent({
  name: 'App',
  setup() {
    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    const greetings = ref('')
    const updateGreetings = () => {
      greetings.value += 'Hello! '
    }
    const { x, y } = useMousePosition()
    // const { result, loading, loaded } = useURLLoader<DogResult>('https://api.thecatapi.com/v1/images/search?limit=1')
    const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if(result.value) {
        console.log(result.value[0])
      }
    })
    watch([greetings, () => data.count], (newValue, oldValue) => {
      // watch的东西必须是响应式的
      console.log('old', oldValue)
      console.log('new', newValue)
      document.title = 'updated' + greetings.value + data.count
    })
    data.numbers[0] = 5
    data.person.name = 'jing'
    const refData = toRefs(data)
    refData.count // 他里面的每一项都会变成响应式的，可以看到是Ref<number>
    return {
      ...refData,
      greetings,
      updateGreetings,
      x,
      y,
      result,
      loading,
      loaded
      // ...data
      // 把值取出来会变成普通的值，失去响应式
      // count: data.count,
      // double: data.double,
      // increase: data.increase
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
