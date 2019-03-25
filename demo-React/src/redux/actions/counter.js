export const ADD = "counter/ADD";
export const DELETE = "counter/DELETE";
export const RESET = "counter/RESET";

export function increment(){
  return {type: ADD };
}

export function decrement(){
  return {type: DELETE };
}

export function reset(){
  return {type: RESET };
}
