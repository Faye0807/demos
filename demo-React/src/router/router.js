import React from 'react';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import Home from '@page/Home';
import Counter from '@page/Counter';

export default function getRoute() {
  return (
    <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
    </BrowserRouter>
  );
}
