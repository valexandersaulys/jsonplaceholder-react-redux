import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import FrontPage from './FrontPage';
import Post from './Post';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/post/:id" component={Post}/>
            <Route path="/" component={FrontPage}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
