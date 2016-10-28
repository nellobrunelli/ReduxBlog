import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './components/app';
import NoMatch from './components/NoMatch';
import PostsIndex from './containers/PostsIndex';
import PostNew from './containers/PostNew';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
        <Route path="/" component={App} >
            <IndexRoute component={PostsIndex} />
            <Route path="posts" component={PostsIndex}/>
            <Route path="post/new" component={PostNew}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
