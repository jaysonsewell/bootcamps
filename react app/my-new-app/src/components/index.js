import React from 'react';
import { render } from 'react-dom';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from 'react-router-dom'

import App from 'App';
import NotFound from './components/App/NotFound';

import Home from 'Home';

import Main from 'main';

import 'styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
