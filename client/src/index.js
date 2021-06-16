import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Order from "./components/pages/Order";
//import OrderDetail from "./components/pages/OrderDetail";
ReactDOM.render(
  // <Router>
  //   <Route path="/lstOrder/:idTk" component={Order} />
  //   <Route path="/orderDetail/:idOrder" component={OrderDetail} />
  // </Router>,
  <App/>,
  document.getElementById("root")
);
