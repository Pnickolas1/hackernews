import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './route'
import { createStore, applyMiddleware } from 'redux'
import { loadAllCategories } from './actions/categories';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

store.dispatch(loadAllCategories())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
