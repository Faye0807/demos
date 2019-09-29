import React, { Component } from 'react';
import styled, { ThemeConsumer, ThemeProvider } from 'styled-components';
import Header from '../component/styledComponents/Header/index';
import Rotate from '../component/styledComponents/Rotate';
import List from '../component/Home/List';

// attrs
const Input = styled.input.attrs({
  placeholder:  '请输入...',
  // placeholder:  props => props.placeholder || '请输入...'
})`
  color: red;
  // color: ${props => props.theme.color};
  content: ${props => {
    console.log('props', props);
    return 'props'
  }};
  padding: props => props.size || 1em;
  @media (max-width: 700px) {
    background: palevioletred;
  }
`;

// React 组件继承
/* const StyledList = styled(List)`
  background: yellow;
`; */

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      listData: [
        {
          title: 'title',
          desc: 'desc'
        },
        {
          title: 'title2',
          desc: 'desc2'
        }
      ]
    };
    // this.headerRef = React.createRef();
    // this.listRef = React.createRef();
  }
  componentDidMount() {
    console.log('headerRef', this.headerRef);
    console.log('listRef', this.listRef);
  }
  render() {
    const { listData } = this.state;
    return (
      <div>
        <Header ref={e => {this.headerRef = e}}>HOME</Header>
        <List ref={e => {this.listRef = e;}} data={listData} />
        {/* <StyledList data={listData} /> */}
        {/* {/* <Input placeholder="请输入" /> */}
        <Input placeholder="请输入2" someProps="something" /> 
        <Rotate />
      </div>
    )
  }
}