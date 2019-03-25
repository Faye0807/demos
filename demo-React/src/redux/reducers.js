import counter from "@reducers/counter";

export default function combineReducers(state = {}, action){
  console.log('~~~', state);
  return {
    counterState: counter(state.counter, action)
  }
}
