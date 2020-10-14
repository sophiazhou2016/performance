function createStore () {
    // let state;
    //分发action
    //分发action
    let dispatch = (action)=>{
        //判断 action 的 type 值
        if( typeof action !== 'object') throw Error('Expected the action to be a object.');
        if( action.type === undefined ) throw Error('The action.type is not defined');
        //获取新的 state
        state = reducer(state, action);
    }

    
    //订阅数据更新
    let subscribe = ()=> {
    
    };
    
    //获取store的状态
    let getState = ()=>{
    
    }
    
    return {
        dispatch,
        subscribe,
        getState
    }

}

export {
    createStore
}
