import React, {Component} from 'react';
import styled from 'styled-components';

export default class Num extends Component{
  constructor(props){
    super(props);
  }
  // 每次生成一个styledComponent都会在
  // Head内插入对应样式；而之前生成的样式仍然保留不清除【对于单页面应用】
  getFather() {
    const P = styled.p`
      color: red;
      font-size: 12px;
    `;
    return <P>this is a styledComponent</P>
  }
  render() {
    return (
      <div>
        {this.getFather()}
        {this.getFather()}
      </div>
    )
  }
}
