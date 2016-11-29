import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

const store = configureStore();
import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(browserHistory, store);

import App from './components/app';
import NoMatch from './components/NoMatch';
import Blog from './components/Blog';
import PostNew from './containers/PostNew';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Blog}/>
                <Route path="posts" component={Blog}/>
                <Route path="post/new" component={PostNew}/>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>, document.querySelector('.container'));
