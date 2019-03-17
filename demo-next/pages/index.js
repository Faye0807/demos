// export default () => <div>Welcome to next.js! hello</div>
import React from 'react';
import Link from 'next/link';
class Home extends React.Component{
  // getInitialProps 不能使用在子组件 只能在pages页面中
  static async getInitialProps(prop){
    // console.log('prop', prop);
    return {name: 'test'}
  }
  render() {
    return (
      <div>
        <div>Welcome!!{this.props.name}</div> 
        <Link href="/about"><a>click here</a></Link>
      </div>
    )
  }
}
export default Home;