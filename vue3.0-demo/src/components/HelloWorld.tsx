import { defineComponent, PropType } from 'vue'

interface Config {
  name: string
  age: number
}
const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true,
  },
  // config: {
  //   type: Object as PropType<Config>,
  //   required: true
  // }
} as const

export default defineComponent({
  name: 'HelloWorld',
  props: PropsType,
})