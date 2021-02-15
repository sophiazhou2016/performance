<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">点赞+1</button>
    <ul>
      <li v-for="number in numbers" :key="number"><h1>{{number}}</h1></li>
    </ul>
    <h1>{{person.name}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, onMounted, onUpdated, computed, onRenderTriggered } from 'vue';

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
  numbers: number[];
  person: { name?: string};
}
export default defineComponent({
  name: 'App',
  setup() {
    // const count = ref(0)
    // const double = computed(() => {
    //   return count.value * 2
    // })
    // const increase = () => {
    //   count.value ++
    // }
    onMounted(() => {
      console.log('mounted')
    })
    onUpdated(() => {
      console.log('updated')
    })
    onRenderTriggered((event) => {
      console.log('onRenderTriggered', event)
    })
    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count * 2),
      numbers: [0, 1, 2],
      person: {}
    })
    data.numbers[0] = 5
    data.person.name = 'jing'
    const refData = toRefs(data)
    refData.count // 他里面的每一项都会变成响应式的，可以看到是Ref<number>
    return {
      ...refData
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
