// global objects
const buildInType_arr1: Array<number> = [1, 2, 3]
const buildInType_date = new Date()
buildInType_date.getDate()
const buildInType_reg = /abc/
buildInType_reg.test('abc')

// build-in object
Math.pow(2, 2) 

// Dom and Bom
let buildInType_body = document.body
let buildInType_allList = buildInType_body.querySelectorAll('li')
buildInType_allList.forEach

document.addEventListener('click', (e) => {
    e.preventDefault()
}, false)

// Utility Types
interface IPerson3 {
    name: string,
    age: number
}
let sophia1: IPerson3 = {
    name: 'jingjing',
    age: 20
}
type IPartial = Partial<IPerson3> // 都变成了可选的
let sophia2: IPartial = {
    name: 'jing'
}
type IOmit = Omit<IPerson3, 'name'> // 忽略了一个