<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age='12' :config="config" />
    <p>{{name}} : {{computedNameRef}} - {{name2}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed, watchEffect } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    console.log('this.name : ', this.name);
  },
  setup(props, {slots, attrs, emit}) {
    // { value: 'Jing'}
    const nameRef = ref('Jing')
    const name2 = ref(22)

    setInterval(() => {
      nameRef.value += '1'
    }, 1000)

    setInterval(() => {
      name2.value += 10
    }, 1000)

    const computedNameRef = computed(() => {
      return nameRef.value + '2'
    })

    watchEffect(() => {
      console.log(nameRef.value) // 只要在这个函数里面的变量都会被watch
    })

    return {
      name: nameRef,
      computedNameRef,
      name2
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
