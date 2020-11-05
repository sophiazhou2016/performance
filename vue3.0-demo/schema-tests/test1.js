const Ajv = require('ajv')
const localize = require('ajv-i18n');

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            // test: false,
            errorMessage: {
                type: '必须是个字符串',
                minLength: '长度不能少于10个哦~'
            },
            minLength: 10 // macro 会自动加上
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
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
require('ajv-errors')(ajv)
// 自定义format : test
// ajv.addFormat('test', (data) => {
//     console.log('data:-------', data)
//     return data === 'haha'
// })
ajv.addKeyword('test', {
    macro(schema, parentSchema) {
        return {
            minLength: 10
        }
    },
    // compile(sch, parentSchema) {
    //     console.log('compile:', sch, parentSchema)
    //     return () => true
    // },
    // metaSchema: {
    //     type: 'boolean'
    // }
    validate: function fun (schema, data) {
        fun.errors = [
            {
                keyword: 'test',
                dataPath: '.name',
                schemaPath: '#/properties/name/test11',
                params: { keyword: 'test' },
                message: 'hello errormessage'
            }
        ]
        console.log('xxxx')
        return false
        // console.log('addKeyword: ', schema, 'data:' ,data)
        // if(schema === true) {
        //     return true
        // }else {
        //     return schema.length === 6
        // }
    }
})
const validate = ajv.compile(schema)
const valid = validate({
    name: '11',
    age: 18,
    pets: ['mini', 'mani'],
    isWorker: true
})
if(!valid) {
    localize.zh(validate.errors)
    console.log(validate.errors)
}
