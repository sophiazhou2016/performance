class Student {
    fullName: string;
    // 还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user1 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);