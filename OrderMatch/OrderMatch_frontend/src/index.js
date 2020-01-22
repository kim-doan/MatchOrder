import React from "react";
import ReactDOM from "react-dom";
import { createHashHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

const hist = createHashHistory();
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
