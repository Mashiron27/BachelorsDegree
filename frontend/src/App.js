import './App.css';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Exterior from './pages/Exterior';
import Floor0 from './pages/Floor0';
import Floor1 from './pages/Floor1';
import Floor2 from './pages/Floor2';
import Floor3 from './pages/Floor3';
import Floor4 from './pages/Floor4';
import Floor5 from './pages/Floor5';
import Rooftop from './pages/Rooftop';
import CCTVs from './pages/CCTVs';
import FullStack from './pages/Fullstack';

import { IoMdNotifications } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import AddUser from './components/data/AddUser';
import UserList from './components/data/UserList';
import EditUser from './components/data/EditUser';
import NotificationList, {NotifListShow} from './components/data/NotificationList';

function Home() {

  const [ showNav, setShowNav ] = useState(false);
  const [ showNotif, setShowNotif ] = useState(false);
  const [ showProf, setShowProf ] = useState(false);
  
  return (
    <>
    <Router>
      <header style={{zIndex: 2}}>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} style={{cursor:'pointer'}}/>
        <div className="right">
          <button id="notificationsIcon" onClick={() => setShowNotif(!showNotif)}>
            <IoMdNotifications size={20}/>
          </button>
          <button id="profileIcon" onClick={() => setShowProf(!showProf)}> VP </button>
        </div>
      </header>
	 
	  {
      showNotif ? 				
      <div className="notif-dropdown">			
        <ul>
           <NotifListShow/>                      	            
        </ul>
			  <div style={{borderTop: '1px solid #fff'}}></div>
			  <NavLink className="notif-dropdown-text" exact to="/notificationslist"> See all notifications </NavLink>
       
      </div>
      : null
    }  
		{
      showProf ?
      <div className="prof-dropdown">
        <ul>
          <li>
            Show Profile
          </li>
				  <div style={{borderTop: '1px solid #fff'}}></div>
          <li>
            Logout
          </li>
        </ul>
      </div>
      : null
    }		  		
	  
      <Navbar show={ showNav } />
      <div className='main'>
        <Route path="/" exact={ true } component={ Dashboard } />
        <Route path="/exterior" exact={ true } component={ Exterior } />
        <Route path="/floor0" exact={ true } component={ Floor0 } />
        <Route path="/floor1" exact={ true } component={ Floor1 } />
        <Route path="/floor2" exact={ true } component={ Floor2 } />
        <Route path="/floor3" exact={ true } component={ Floor3 } />
        <Route path="/floor4" exact={ true } component={ Floor4 } />
        <Route path="/floor5" exact={ true } component={ Floor5 } />
        <Route path="/rooftop" exact={ true } component={ Rooftop } />
        <Route path="/cctv" exact={ true } component={ CCTVs } />
        <Route path="/fullstack" exact={ true } component={ FullStack } />
      </div>
      <Route path="/notificationslist" exact={ true } component={ NotificationList } />
      <Route path="/UserManagement/" exact={ true } component={ AddUser } />
      
      <div>-----------------</div>
      <Route path="/UserManagement/" exact component = { UserList } />
      <Route path="/editUser/:id" exact={ true } component = { EditUser } />
    </Router>
    </>
  );
}

export default Home;
