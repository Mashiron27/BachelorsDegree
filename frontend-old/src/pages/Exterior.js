import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddUser from '../components/data/AddUser';
import AddSensor from '../components/data/AddSensor';
import AddSensorTrace from '../components/data/AddSensorTrace';
import AddNotification from '../components/data/AddNotification';

import UserList from '../components/data/UserList';
import SensorList from '../components/data/SensorList';
import SensorTraceList from '../components/data/SensorTraceList';
import NotificationList from '../components/data/NotificationList';

import EditUser from '../components/data/EditUser';
import EditSensor from '../components/data/EditSensor';

const Exterior = () => {
    return (
        <Router>
            <Route path="/exterior/" exact component = { AddUser } />
            <div>-----------------</div>
            <Route path="/exterior/" exact component = { UserList } />
            <Route path="/edit/:id" exact component = { EditUser } />
        </Router>
    )
}

export default Exterior
