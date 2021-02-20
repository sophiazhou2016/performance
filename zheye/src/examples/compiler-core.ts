import { baseCompile as compile } from '@vue/compiler-core'

const template = '<p>{{ state.text }}</p>'
const { ast, code } = compile(template)

console.log('ast\n----')
console.log(ast)
console.log('code\n----')
console.log(code)