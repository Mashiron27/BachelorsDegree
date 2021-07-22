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
import { IoMdNotifications } from 'react-icons/io';

function App() {
  const [ showNav, setShowNav ] = useState(false);
  const [ showNotif, setShowNotif ] = useState(false);
  const [ showProf, setShowProf ] = useState(false);
  return (
    <>
    <Router>
      <header>
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
                <li>
                  This is a notification text.
                </li>
                <li class="tooltip">
                  This is a notification text that is way to long to be displayed in a single row. What do we do with it?
					<span class="tooltiptext">This is a notification text that is way to long to be displayed in a single row. What do we do with it?</span>
				</li>
                 <li class="tooltip">
                  This is also a notification text that is way to long to be displayed in a single row. What do we do with it?
					<span class="tooltiptext">This is also a notification text that is way to long to be displayed in a single row. What do we do with it?</span>
				</li>
                 <li class="tooltip">
                  This is another notification text that is way to long to be displayed in a single row. What do we do with it?
					<span class="tooltiptext">This is another notification text that is way to long to be displayed in a single row. What do we do with it?</span>
				</li>
                <li>
                  Nortif5
                </li>
                <li>
                  Nortif6
                </li>
                <li>
                  Nortif7
                </li>				            
              </ul>
			  <div style={{borderTop: '1px solid #fff'}}></div>
			  <text>See all notifications</text>
            </div>
            : null
          }
		  
		   {
            showProf ?
            <div class="prof-dropdown">
              <ul >
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
      </div>
    </Router>
    </>
  );
}

export default App;
