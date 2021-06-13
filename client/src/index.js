import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import Order from './components/pages/Order'
ReactDOM.render(
  <Provider store={store}>
    <Order />
  </Provider>,
  document.getElementById("root")
);
