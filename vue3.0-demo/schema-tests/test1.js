const Ajv = require('ajv')

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            format: 'test'
        },
        age: {
            type: 'number'
        },
        pets: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        isWorker: {
            type: 'boolean'
        }
    },
    required: ['name', 'age']
};
const ajv = new Ajv()
// 自定义format : test
ajv.addFormat('test', (data) => {
    console.log('data:-------', data)
    return data === 'haha'
})
const validate = ajv.compile(schema)
const valid = validate({
    name: 'haha',
    age: 18,
    pets: ['mini', 'mani'],
    isWorker: true
})
if(!valid) {
    console.log(validate.errors)
}
