let arrayOfNumber: number[] = [1, 2, 3]
arrayOfNumber.push(4)

function test() {
    console.log(arguments)
    // arguments.forEach() // 报错
    // array-like 类型
    // let htmlCollection: HTMLCollection
    // let nodeList = NodeList
}

let user: [string, number] = ['jingjing', 12] // 元组类型，限定了类型的数组
user.push(true) // 只可以push string 或者 number

let users: Array<string> = []