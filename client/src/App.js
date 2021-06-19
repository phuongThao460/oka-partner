/* eslint-disable react/no-direct-mutation-state */
import "./App.css";
import LoginForm from "./components/pages/LoginForm";
import RegisterForm from "./components/pages/RegisterForm";
import Home from "./components/pages/Home";
import PersonalDetail from "./components/pages/PersonalDetail";
import PasswordCheck from "./components/pages/PasswordCheck";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import AddHomeBlock from "./components/pages/AddHomeBlock";
import RegistrationDetail from "./components/pages/RegistrationDetail";
import ListApartment from "./components/pages/ListApartment";
import Order from "./components/pages/Order";
import DetailAndEditProfile from "./components/pages/DetailAndEditProfile"
import StatusContent from "./components/pages/StatusContent";
import OrderDetail from "./components/pages/OrderDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      logged: false,
      accountID: 0
    }
  }
  SetLogged = (id) =>{
    this.state.accountID = id;
    if(this.state.logged){
      this.state.logged = false;
      this.setState(this);
    }
    else{
      this.state.logged = true;
      this.setState(this);
    }
  }
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={LoginForm}/>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/AddHomeBlock/:idTk" exact component={AddHomeBlock} />
            <Route path="/personal-detail" component={PersonalDetail} />
            <Route path="/password-check" component={PasswordCheck} />
            <Route path="/services" component={Services} />
            <Route path="/products/:id" component={Products} />
            <Route path="/registrationDetail" component={RegistrationDetail} />
            <Route path="/statusContent/:idTk" component={StatusContent}/>
            {/* <Route path="/lstApartment/:idTk" component={ListApartment} /> */}
            <Route path="/lstOrder/:idTk" component={Order} />
            <Route path="/orderDetail/:idOrder" component={OrderDetail} />
            <Route path="/detailAndEditProfile" component={DetailAndEditProfile} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
