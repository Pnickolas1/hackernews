import React from 'react'
import CategoryPage from './components/Category/CategoryPage';
import PostsPage from './components/Posts/PostsPage'
import { Route, Switch } from 'react-router';


export default (
  <div>
    <Switch>
      <Route exact path="/" component={CategoryPage} />
      <Route expath path="/postspage" component={PostsPage} />
      <Route exact path="/:category" component={CategoryPage} />
    </Switch>
  </div>
);