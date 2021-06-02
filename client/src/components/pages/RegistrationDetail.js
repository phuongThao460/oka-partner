import React from 'react'
import '../../RegistrationDetail.css';
import Navbar from '../paner-form/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainContact from '../pages/MainContact'
import GenerationInformation from '../pages/GenerationInformation'
import PropertyFacilities from '../pages/PropertyFacilities'
import Rooms from '../pages/Rooms'
import RoomFacilities from '../pages/RoomFacilities'

function RegistrationDetail() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/registrationDetail/mainContact/:idTk"  component={MainContact}/>
          <Route path="/registrationDetail/generationInformation" component={GenerationInformation}/>
          <Route path="/registrationDetail/propertyFacilities" component={PropertyFacilities}/>
          <Route path="/registrationDetail/rooms" component={Rooms}/>
          <Route path="/registrationDetail/roomFacilities" component={RoomFacilities}/>
          
        </Switch>
      </Router>
    </div>
  )
}

export default RegistrationDetail
