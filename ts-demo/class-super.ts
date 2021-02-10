class Animal {
    readonly name: string
    constructor(name) {
        this.name = name
    }
    protected run() {
        return `${this.name} is runing`
    }
}

const snake = new Animal('lily')
console.log(snake.run())

// 类的封装就是把所有的东西封装起来，只暴露接口给外部访问
// 继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const dog = new Dog('xiaoxiao')
console.log(dog.run())
console.log(dog.bark())

class Cat extends Animal {
    static categeories = ['mamal'] // 静态属性
    constructor(name) {
        super(name) // 
        console.log('cat constructor', this.name)
    }
    run() {
        return 'merow, ' + super.run() // 调用父类方法
    }
}

const cat = new Cat('maomao')
console.log(cat.run())
console.log(Cat.categeories) // 可以直接访问，跟实例的状态定义没有关系