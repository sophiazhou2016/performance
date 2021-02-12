// type aliase
let type_alias_sum: (x: number, y: number) => number
const type_allias_result = type_alias_sum(1, 2)

// 定义一个别名
type PlusType = (x: number, y: number) => number
let type_allias_sum2: PlusType
const type_allias_result2 = type_allias_sum2(2, 3)

// 
type StrOrNumber = string | number
let type_allias_result3: StrOrNumber = 'str'
type_allias_result3 = 123
type_allias_result3 = true // 报错

// 字面量
const type_alias_str: 'name' = 'name' // 只能等于name
const type_alias_number: 1 = 1 // 只能等于1

type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere: Directions = 'Left'

// 交叉类型
interface IName {
    name: string
}
type IPerson = IName & { age: number}
let type_alias_person: IPerson = {
    name: 'alsa',
    age: 5
}