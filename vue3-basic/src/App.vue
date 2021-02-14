<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <h1>{{double}}</h1>
    <button @click="increase">点赞+1</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed } from 'vue';

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
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
    const data: DataProps = reactive({
      count: 0,
      increase: () => { data.count++ },
      double: computed(() => data.count * 2)
    })
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
