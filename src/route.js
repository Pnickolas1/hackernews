import React from 'react'
import CategoryPage from './components/Category/CategoryPage';
import { Route, Switch } from 'react-router';


export default (
  <div>
    <Switch>
      <Route exact path="/:category" component={CategoryPage} />
    </Switch>
  </div>
);