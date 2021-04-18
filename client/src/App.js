import './App.css'
import LoginForm from './components/pages/LoginForm'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import SignOut from './components/pages/SignOut'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={LoginForm} />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/sign-out' component={SignOut} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
