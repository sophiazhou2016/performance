function echo(arg) {
    return arg;
}
var _str1 = 'str';
var result = echo(_str1);
var gene_str1 = echo('haha'); // 类型推论
var gene_n1 = echo(12);
// 丧失类型
function gene_swap(tuple) {
    return [tuple[1], tuple[0]];
}
var gene_res1 = gene_swap(['haha', 1234]); // 真的交换了元组的类型
function gene_swap2(tuple) {
    return [tuple[1], tuple[0]];
}
var gene_res2 = gene_swap2(['string', 123]); // 得到的是any类型
function echoWithArr(arg) {
    console.log(arg.length);
    return arg;
}
var gene_arr1 = echoWithArr([1, 2, 3, 4]);
function echoWithLenth(arg) {
    console.log(arg.length);
    return arg;
}
var gene_length_str = echoWithLenth('student');
var gene_length_obj = echoWithLenth({
    length: 10,
    width: 10
});
var gene_leength_arr = echoWithLenth([1, 2, 3]);
// echoWithLenth(12) // 会报错
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var gene_quene = new Queue();
gene_quene.push(1);
gene_quene.push('str');
console.log(gene_quene.pop().toFixed());
console.log(gene_quene.pop().toFixed());
