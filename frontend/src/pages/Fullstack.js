import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddUser from '../components/data/AddUser';
import AddSensor from '../components/data/AddSensor';
import AddSensorTrace from '../components/data/AddSensorTrace';
import AddNotification from '../components/data/AddNotification';

import UserList from '../components/data/UserList';
import SensorList, {SensorListSimple} from '../components/data/SensorList';
import SensorTraceList from '../components/data/SensorTraceList';
import NotificationList from '../components/data/NotificationList';

import EditUser from '../components/data/EditUser';
import EditSensor from '../components/data/EditSensor';

const Fullstack = () => {
    return (
        <Router>        
            <div style={{position: 'absolute', marginTop: '80%',marginLeft: '5%', width: '100%', }}>
                        <Route path="/fullstack/" exact component = { AddNotification} />
                           
          
            
            </div>
            <NotificationList/>         
            
            
            <Route path="/exterior/" exact component = { SensorList } />
            <Route path="/edit/:id" exact component = { EditSensor } />
        </Router>
    )
}

export default Fullstack
