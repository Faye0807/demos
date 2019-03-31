import React, {Component} from 'react';

export default class Num extends Component{
  constructor(props){
    super(props);
  }
  render() {
    const { num, add } = this.props;
    return (
      <div>
        <p>父亲的状态Num: {num}</p>
        <button onClick={() => {add()}}>ADD</button>
      </div>
    )
  }
}
