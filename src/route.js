import React from 'react'
import CategoryPage from './components/Category/CategoryPage';
import PostsPage from './components/Posts/PostsPage'
import PostPage from './components/Posts/PostPage'
import { Route, Switch } from 'react-router';


export default (
  <div>
    <Switch>
      <Route exact path="/" component={PostsPage} />
      <Route exact path=":category" component={CategoryPage} />
      <Route expath path="/:category/:id" component={PostPage} />
    </Switch>
  </div>
);