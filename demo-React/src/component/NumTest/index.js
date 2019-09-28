import React, {Component} from 'react';
import styled from 'styled-components';

export default class Num extends Component{
  constructor(props){
    super(props);
  }
  // 父元素传入num属性变化时候将会触发该函数
  componentWillReceiveProps(newProps) {
    // console.log('~~~~~~~~~~', newProps);
  }
  getFather() {
    const P = styled.p`
      color: red;
      font-size: 12px;
    `;
    return <P>this is a styledComponent</P>
  }
  render() {
    const { num, add } = this.props;
    return (
      <div>
        {this.getFather()}
        {this.getFather()}
        <p>父亲的状态Num: {num}</p>
        <button onClick={() => {add()}}>ADD</button>
      </div>
    )
  }
}
