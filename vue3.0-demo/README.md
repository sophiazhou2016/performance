# vue3.0-demo

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### defineComponent

```js
defineComponent({
  props: {},
  setup() {
    // return {...}
  },
  data() {},
  computed: {},
  methods: {},
})
type MyComponent = DefineComponent<
  { a: string },
  { name: string },
  {},
  {
    count: () => number,
  },
>
```

### vue 的 h 函数详解(第一个参数是标签，第二个参数是属性，第三个参数是 children)

```js
import HelloWorld from './components/HelloWorld.vue'
const img = require('./assets/logo.png') // eslint-disable-line

const App = defineComponent({
  render() {
    return h('div', { id: 'app' }, [
      h('img', {
        alt: 'Vue logo',
        src: img,
      }),
      h(HelloWorld, {
        msg: 'Welcome to Your Vue.js + TypeScript App',
        age: 12,
      }),
    ])
  },
})
```
