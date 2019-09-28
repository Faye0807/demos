import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Router, history } from 'react-router-dom';
import Header from '../component/Header/index';
console.log('Header', Header);
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <Header>HOME</Header>
        <Header>HOME</Header>
        <div>hello, willCome My home111~</div>
        <div>{count}~~~</div>
        <button onClick={() => {
          this.setState({count: count + 1});
        }}>count + 1</button>
        <li><Link to="/counter">计数器</Link></li>
      </div>
    )
  }
}