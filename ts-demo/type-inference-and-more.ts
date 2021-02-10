// type inference 
let str = 'str'
str = 123

// union types 
let numberOrString: number | string
numberOrString = 'abc'
numberOrString = 123
numberOrString.toString()

// 类型断言
function getLength(input: string | number): number {
    const str = input as string // 只可以声明成联合类型中的一个，不能是其他的
    if (str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
    }
}

// type guard
function getLength2(input: string | number): number {
    if (typeof input === 'string') { // 条件if中智能得缩小了类型范围，自动变成string
        return input.length
    } else { // 自动变成number类型
        return input.toString().length
    }
}