import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        <div>hello, willCome My home111~</div>
        <div>{count}~~~</div>
        <button onClick={() => {
          this.setState({count: count + 1});
        }}>count + 1</button>
      </div>
    )
  }
}