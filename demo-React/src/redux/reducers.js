import counter from "@reducers/counter";
// reducers 是改变状态值的纯函数
export default function combineReducers(state = {}, action){
  console.log('~~~', state);
  return {
    counterState: counter(state.counter, action),
    otherState: {
      name: 'nameee',
      age: 20
    }
  }
}
