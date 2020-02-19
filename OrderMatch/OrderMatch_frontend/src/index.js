/*!

=========================================================
* Material Dashboard PRO React - v1.8.0
=========================================================

* Product Page: https:////product/material-dashboard-pro-react
* Copyright 2019 ORDER MATCH (https:///)

* Coded by ORDER MATCH

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import AuthLayout from "layouts/Auth.js";
import RtlLayout from "layouts/RTL.js";
import MainLayout from "layouts/Main.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

const hist = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {/* <Route path="/rtl" component={RtlLayout} /> */}
        <Route path="/auth" component={AuthLayout} />
        <Route path="/admin" component={MainLayout} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
