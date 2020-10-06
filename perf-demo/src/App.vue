<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <img height="200" :src="item.image" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
    const host = 'https://mauloan.ppdaicdn.com/pro';
    const items = reactive([
      {
        image: `${host}/202009/371137504268386305.png`
      },
      {
        image: `${host}/202009/371137603052634113.png`
      },
      {
        image: `${host}/202009/371141803531894785.png`
      },
      {
        image: `${host}/202009/371142984647835649.png`
      }
    ])
    console.log('items:', items);
    return {items};
  },
  components: {
    // HelloWorld
  }
}
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
