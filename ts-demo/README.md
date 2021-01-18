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
