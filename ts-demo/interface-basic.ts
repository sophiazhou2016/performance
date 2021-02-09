interface Person {
    readonly id: number;
    name: string;
    age?: number;
}

// 赋值的时候必须完全保持一致，属性类型必须对，其次属性必须都要有，且不能多出属性
let vivo: Person = {
    id: 1,
    name: 'jingjing',
}

vivo.id = 2