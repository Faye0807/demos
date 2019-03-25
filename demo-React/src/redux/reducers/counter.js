import { ADD, DELETE, RESET } from '@actions/counter';

const initState = {
  count: 0
}

export default function reducer(state = initState, action) {
  console.log(state, action);
  switch(action.type) {
    case ADD:
      return {
        count: state.count + 1
      }
    case DELETE:
      return {
        count: state.count - 1
      }
    case RESET:
      return {
        count: 0
      }
    default: 
      return state
  }
}

