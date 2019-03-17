import React from 'react'
class About extends React.Component{
  static async getInitialProps(prop){
    console.log('prop', prop);
    return {name: 'test'}
  }
  render() {
    return <div>about page</div>
  }
}

export default About;