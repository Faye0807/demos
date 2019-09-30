import React, { Component } from 'react';
import styled, { ThemeConsumer, ThemeProvider } from 'styled-components';
import Header from '../component/styledComponents/Header/index';
import Rotate from '../component/styledComponents/Rotate';
import Button, { BlueButton } from '../component/styledComponents/Button';
import List from '../component/Home/List';

// attrs theme
// color: ${props => props.theme.color};
const Input = styled.input.attrs({
  placeholder:  '请输入...',
  // placeholder:  props => props.placeholder || '请输入...'
})`
  color: red;
  content: ${props => {
    console.log('props', props);
    return 'props'
  }};
  padding: props => props.size || 1em;
`;

const StyledList = styled(List)`
  background: #eee;
`;


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      inputColor: 'red',
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
  }
  componentDidMount() {
  }
  changeColor(curColor) {
    this.setState({inputColor: curColor === 'red' ? 'green' : 'red'})
  }
  render() {
    const { listData, inputColor } = this.state;
    return (
      <div>
        <Header title="title" color={inputColor} ref={e => {this.headerRef = e}}>HOME</Header>
        <List ref={e => {this.listRef = e;}} data={listData} />
        <StyledList as={Header}  ref={e => {this.listRef = e;}} data={listData} />
        <Input placeholder="请输入" someProps="something" /> 
        <br/>
        <Button onClick={() => this.changeColor(inputColor)}>button</Button>
        <Button as="a">button</Button>
        <BlueButton onClick={() => this.changeColor(inputColor)}>BlueButton</BlueButton>
        <br/>
        <br/>
        {/* <Rotate /> */}
      </div>
    )
  }
}