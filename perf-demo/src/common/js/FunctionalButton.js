export default {
    name: 'functional-button',
    functional: true,
    // 初级写法
    // render(createElement, context) {
        // 函数式组件没有this，
        // 参数就是靠context来传递的了
        // 下面我们看下context有哪些属性呢
        // props
        // children
        // slots (a slots object)
        // parent
        // listeners
        // injections
        // data
    //     console.log('context:', context);
    //     return createElement('button', 'click me~~')
    // }
    // 稍微高级
    // render(createElement, { children, props, listeners }) {
    //     return createElement(
    //         'button',
    //         {
    //           attrs: props,
    //           on: {
    //             click: listeners.click
    //           }
    //         },
    //         children
    //     );
    // }
    // 最终写法
    render(createElement, {data, children}) {
        return createElement('button', data, children);
    }
}
