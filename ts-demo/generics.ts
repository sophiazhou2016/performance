function echo<T>(arg: T): T {
    return arg
}
const _str1: string = 'str'
const result = echo(_str1)

const gene_str1 = echo('haha') // 类型推论
const gene_n1 = echo(12)

// 丧失类型

function gene_swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const gene_res1 = gene_swap(['haha', 1234]) // 真的交换了元组的类型

function gene_swap2(tuple) {
    return [tuple[1], tuple[0]]
}
const gene_res2 = gene_swap2(['string', 123]) // 得到的是any类型

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const gene_arr1 = echoWithArr([1, 2, 3, 4])

interface IWithLength{
    length: number
}
// 约束泛型
function echoWithLenth<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
const gene_length_str = echoWithLenth('student')
const gene_length_obj = echoWithLenth({
    length: 10,
    width: 10
})
const gene_leength_arr = echoWithLenth([1,2,3])
// echoWithLenth(12) // 会报错

// 泛型在class中的应用
class Queue<T> {
    private data = []
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}
const gene_quene = new Queue<number>()
gene_quene.push(1)
// gene_quene.push('str')
console.log(gene_quene.pop().toFixed())

// 泛型在接口中的应用
interface KeyPair<T, U> {
    key: T
    value: U
}
let kp1: KeyPair<number, string> = {
    key: 1,
    value: 'string'
}
let kp2: KeyPair<string, number> = {
    key: 'str',
    value: 2
}
// 两种写法等价
let gene_arr2: number[] = [1, 2, 3]
let gene_arr3: Array<number> = [1, 2, 3]