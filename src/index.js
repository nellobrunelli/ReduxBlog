import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import NoMatch from './components/NoMatch';
import PostsIndex from './containers/PostsIndex';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
        <Route path="/" component={App} >
            <IndexRoute component={PostsIndex} />
            <Route path="posts" component={PostsIndex}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
