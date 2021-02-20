"use strict";
exports.__esModule = true;
var compiler_core_1 = require("@vue/compiler-core");
var template = '<p>{{ state.text }}</p>';
var _a = compiler_core_1.baseCompile(template), ast = _a.ast, code = _a.code;
console.log('ast\n----');
console.log(ast);
console.log('code\n----');
console.log(code);
