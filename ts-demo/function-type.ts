function add(x: number, y: number, z?: number): number {
    // 注意可选参数后面不能有确定参数
    if(typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

add(1, 2) // 参数变多会发生错误

const add1 = (x: number, y: number, z?: number): number => {
    // 注意可选参数后面不能有确定参数
    if(typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}

const str: string = add1 // 会报错，函数不能赋值给字符串

interface ISum {
    (x: number, y: number, z?: number): number
}

// let add2: (x: number, y: number, z?: number) => number = add1
// 这里的箭头不是es6里面的箭头函数，而是ts里面的声明函数返回的类型

let add2: ISum = add1