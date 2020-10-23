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
