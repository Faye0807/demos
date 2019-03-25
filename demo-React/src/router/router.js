import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '@page/Home';
import Counter from '@page/Counter/index';

export default function getRoute() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/Counter">计数器</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Counter" component={Counter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
