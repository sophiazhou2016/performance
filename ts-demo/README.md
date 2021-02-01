# 安装 npm install -g typescript

# 执行命令： tsc greeter.ts

# 基础

## 类型注解

> 函数的参数约束为某种类型 如:

    ```js
        function greeter(person: string){ // person的类型错误或者不传值都会警告
    }
    ```

## 接口

> 使用接口来描述一个拥有 firstName 和 lastName 字段的对象

```js
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = { firstName: 'Jane', lastName: 'User' }

document.body.innerHTML = greeter(user)
```

## 类

# 基础类型

## 布尔值

```js
let isDone: boolean = false
```

## 数字 :number

## 字符串 :strings

## 数组

### 1 :

> :let list: number[] = [1, 2, 3];

### 2:

> let list: Array<number> = [1, 2, 3];

## 元组 Tuple

> 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。

## 枚举

> enum 类型是对 JavaScript 标准数据类型的一个补充。 像 C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green
```

# 变量声明

## var 函数作用域

> for 循环怪异模式，使用 let 可以避免

## let const 代码块作用域

# 接口

## 接口的含义，基本用法

```ts
interface obj {
  label: string
}
function a(hahaObj: obj) {
  console.log(hahaObj.label)
} // 会检查hahaObj的label是否存在且类型是string
a({ name: 'xixi', label: 'xxx' })
```

### 可选属性

```ts
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black' })
```

> 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
