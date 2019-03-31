// document.body.innerHtml = 'hello world';

// window.onload = function () {
//   document.querySelector('#root').innerHTML="hello world~~~";
// }
// window.onload = () => {
//     document.querySelector('#root').innerHTML="hello world~~~";
// }

import React from 'react';
import ReactDOM from 'react-dom';
import getRouter from './router/router';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store';
// 让所有组件都可以访问 store
renderWithHotLoad(getRouter());

// 处理热更新 【只更新修改处而非刷新整个页面】
if(module.hot) {
  module.hot.accept('./router/router', ()=> {
    const getRouter = require('./router/router').default;
    renderWithHotLoad(getRouter());
  });
}

function renderWithHotLoad(ele) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {ele}
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

}