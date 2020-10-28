const Ajv = require('ajv')

const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            format: 'email'
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
const validate = ajv.compile(schema)
const valid = validate({
    name: 'elsa',
    age: 18,
    pets: ['mini', 'mani'],
    isWorker: true
})
if(!valid) {
    console.log(validate.errors)
}