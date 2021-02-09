// 原始数据
let isDone: boolean = false

let age: number = 10

let firstName: string = 'Sophia'
let message = `Hello, ${firstName}`

let u:undefined = undefined
let n: null = null
// undefined 跟 null 是所有类型的子类型

let num: number = undefined // 不会报错


let notSure: any = 4;
notSure = 'maybe a string'
notSure = true
notSure.myName
notSure.getName()