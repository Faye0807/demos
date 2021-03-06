import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset} from '@actions/counter';
import NumTest from '@component/NumTest';
console.log('NumTest', NumTest);
// 而这种引入的方式 ComponentId 和className的值 在定义时已经生成 是不会在变了
// className不变意味着 Head style里面样式是一直保持不增不减
import Header from '@component/Header/index';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 0};
  }
  add() {
    const {num} = this.state;
    this.setState({
      num: num + 1
    })
  }
  render() {
    const {counterState} = this.props;
    const {num} = this.state;
    return (
      <div className="outer">
        <Header>Counter</Header>
        <p>当前值： {counterState.count}</p>
        <button onClick={() => {this.props.incrementProps()}}>ADD</button>
        <button onClick={() => {this.props.decrement()}}>DELETE</button>
        <button onClick={() => {this.props.reset()}}>RESET</button>
        <hr/>
        <NumTest num={num} add={() => {this.add()}} />
      </div>
    )
  }
}
const mapStateToProps = state => {
  // console.log('state',state);
  // state 是整个状态树
  // 注意 counterState 字段值取自 /redux/reducers 内合并状态树时的属性值
  return {
    counterState: state.counterState
  }
}

const mapDispatchtoProps = dispatch => {
  // increment 取自上面引入的方法 返回的是个对象 {type: 'xxxx'}
  // 实际动作就是 dispatch{type/: 'xxxx'}
  // 还可以添加传参 dispatch{type/: 'xxxx', payload: 'data'}
  return {
    incrementProps: () => {
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
