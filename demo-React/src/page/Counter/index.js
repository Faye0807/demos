import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset} from '@actions/counter';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const {counterState} = this.props;
    return (
      <div className="outer">
        <p>当前值： {counterState.count}</p>
        <button onClick={() => {this.props.increment()}}>ADD</button>
        <button onClick={() => {this.props.decrement()}}>DELETE</button>
        <button onClick={() => {this.props.reset()}}>RESET</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('state',state);
  // state 是整个状态树
  // 注意 counterState 字段值取自 /redux/reducers 内合并状态树时的属性值
  return {
    counterState: state.counterState
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Counter)
