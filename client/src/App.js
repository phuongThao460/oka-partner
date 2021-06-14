import './App.css'
import LoginForm from './components/pages/LoginForm'
import RegisterForm from './components/pages/RegisterForm'
import Home from './components/pages/Home'
import PersonalDetail from './components/pages/PersonalDetail'
import PasswordCheck from './components/pages/PasswordCheck'
import Services from './components/pages/Services';
import Products from './components/pages/Products'
import RegistrationDetail from './components/pages/RegistrationDetail'
import AddHomeBlock from './components/pages/AddHomeBlock'
import ListHome from './components/pages/ListHome'
import ListApartment from './components/pages/ListApartment'
<<<<<<< HEAD
=======
import StatusContent from './components/pages/StatusContent'
//import PropertyFacilities from './components/pages/PropertyFacilities'
>>>>>>> c280375f8b29d1d56fb7e19d515dcaa690b2c378
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={LoginForm} />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/personal-detail' component={PersonalDetail} />
          <Route path='/password-check' component={PasswordCheck} />
          <Route path='/services' component={Services} />
          <Route path='/products/:id' component={Products} />
          <Route path='/registrationDetail' component={RegistrationDetail}/>
          <Route path='/AddHomeBlock/:idTk' component={AddHomeBlock}/>
          <Route path='/ListHome' component={ListHome}/>
<<<<<<< HEAD
          <Route path="/lstApartment/:idTk" component={ListApartment} />
          
=======
          <Route path="/lstApartment" component={ListApartment} />
          <Route path="/StatusContent" component={StatusContent} />
>>>>>>> c280375f8b29d1d56fb7e19d515dcaa690b2c378
        </Switch>
      </Router>
      {/* <PropertyFacilities/> */}
    </>
  );
}

export default App;
