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

### API 设计

```jsx
  <JsonSchemaForm
    schema={schema}
    value={value}
    onChange={handleChange}
    locale={locale}
    contextRef={someRef}
    uiSchema={uiSchema}
    >
```

### schema

Json schema 对象，用来定义数据，同时也是我们定义表单的依据

### value

表单的数据结果，你可以从外部改变这个 value, 在表单被编辑的时候，会通过'onChange'透出 value
需要注意的是，因为 Vue 使用的是可变数据，如果每次数据变化我们都去改变'value'的对象地址，
那么会导致整个表单重新渲染，这会导致性能降低。
从实践中来看，我们传入的对象，在内部修改其 field 的值根本不会有什么副作用,所以使用这种方式实现，也就是说 'value' 是一个对象。
那么从'JsonSchemaForm'内部修改的值，并不会改变‘value’对象本身，我们仍然会触发'onChange'，因为可能在表单变化之后，使用者需要进项一些操作。

### onChange

在表单值有任何变化的时候会触发该回调方法，并把新的值进行返回

### locale

语言，使用'ajv-i18n'指定错误信息使用的语言

### contextRef

你需要传入一个 vue3 的 'Ref' 对象，我们会在这个对象上挂载'doValidate'方法，你可以通过

```ts
;<Comp ref="comp" />
this.$refs.comp.xxx()

const yourRef = ref()
onMounted(() => {
  yourRef.value.doValidate()
})
<JsonSchemaForm contextRef={yourRef} />
```

这样来主动让表单进行校验。

### uiSchema

对表单的展现进行一些定制，其类型如下：

```ts
export interface VueJsonSchemaConfig {
  title?: string
  description?: string
  component?: string
  aditionProps?: {
    [key: string]: any
  }
  withFormItem?: boolean
  widget?: 'checkbox' | 'textarea' | 'select' | 'radio' | 'range' | string
  items?: UISchema | UISchema[]
}
export interface UISchema extends VueJsonSchemaConfig {
  properties?: {
    [property: string]: UISchema
  }
}
```
