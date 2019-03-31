import React, {Component} from 'react';

export default class Num extends Component{
  constructor(props){
    super(props);
  }
  // 父元素传入num属性变化时候将会触发该函数
  componentWillReceiveProps(newProps) {
    console.log('~~~~~~~~~~', newProps);
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
