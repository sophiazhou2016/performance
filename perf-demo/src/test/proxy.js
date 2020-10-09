/**
 * proxy 代理器
*/
// proxy 基础例子1
var obj1 = new Proxy({}, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
      console.log(`setting ${propKey}!`);
      return Reflect.set(target, propKey, value, receiver);
    }
});

obj1.count = 1;
++obj1.count;

// setting count!
// getting count!
// setting count!
// 对一个空对象架设了一层拦截 
// Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。


// proxy 基础例子2
let obj = {
    a : 1
}
let proxyObj = new Proxy(obj,{
    get : function (target,prop) {
        return prop in target ? target[prop] : 0
    },
    set : function (target,prop,value) {
        target[prop] = 888;
    }
})

console.log('proxyObj.a:', proxyObj.a);        // 1
console.log('proxyObj.b', proxyObj.b);        // 0

proxyObj.a = 666;
console.log('proxyObj.a 666?', proxyObj.a)         // 888
// 要想 Proxy 起作用，我们就不能去操作原来对象的对象，也就是目标对象 target （上例是 obj 对象 ）
// 必须针对的是 Proxy 实例（上例是 proxyObj 对象）进行操作，否则达不到预期的效果，以刚开始的例子来看，
// 我们设置 get 方法后，试图继续从原对象 obj 中读取一个不存在的属性 b ， 结果依旧返回 undefined ：
console.log( obj.a);        // 888
// 通过 proxyObj.a = 666 操作后的结果同样也会作用于原来目标对象（obj 对象）上，因此 obj 对象的 a 的值也将会变为 888



