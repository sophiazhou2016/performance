const Ajv = require('ajv')
const localize = require('ajv-i18n');

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            test: false
            // format: 'test'
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
// ajv.addFormat('test', (data) => {
//     console.log('data:-------', data)
//     return data === 'haha'
// })
ajv.addKeyword('test', {
    validate(schema, data) {
        // console.log('addKeyword: ', schema, 'data:' ,data)
        if(schema === true) {
            return true
        }else {
            return schema.length === 6
        }
    }
})
const validate = ajv.compile(schema)
const valid = validate({
    name: 'haha',
    age: 18,
    pets: ['mini', 'mani'],
    isWorker: true
})
if(!valid) {
    localize.zh(validate.errors)
    console.log(validate.errors)
}
