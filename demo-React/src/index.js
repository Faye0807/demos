import React from 'react';
import ReactDOM from 'react-dom';
import getRouter from './router/router';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store';
import styled, { GlobalStyleComponent, createGlobalStyle, ThemeProvider } from 'styled-components';
// 让所有组件都可以访问 store
renderWithHotLoad(getRouter());

// 处理热更新 【只更新修改处而非刷新整个页面】
if(module.hot) {
  module.hot.accept('./router/router', ()=> {
    const getRouter = require('./router/router').default;
    renderWithHotLoad(getRouter());
  });
}
const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;
function renderWithHotLoad(ele) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {/* <GlobalStyle /> */}
        {/* <ThemeProvider theme={{color: 'red'}} > */}
        {ele}
        {/* </ThemeProvider> */}
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

}