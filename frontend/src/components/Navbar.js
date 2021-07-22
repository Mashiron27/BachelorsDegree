import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { RiDashboard2Line } from 'react-icons/ri';
import { GiCctvCamera, GiLighthouse } from 'react-icons/gi';
import { ImMap } from 'react-icons/im';
import { FaBuilding } from 'react-icons/fa';

const Navbar = ({ show }) => {
    return (
        <div>
            <div className={ show ? 'sidenav active' : 'sidenav' }>
                <img src={ logo } alt="Logo" className="logo"/> MLSB App
                <br></br><br></br><br></br>
                <ul>
                    <li><NavLink exact activeClassName="active-page" to="/"><RiDashboard2Line /> Dashboard </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/exterior"><FaBuilding /> Exterior </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/floor0"><ImMap /> Basement </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/floor1"><ImMap /> 1st Floor </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/floor2"><ImMap /> 2nd Floor </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/floor3"><ImMap /> 3rd Floor </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/floor4"><ImMap /> 4th Floor </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/floor5"><ImMap /> 5th Floor </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/rooftop"><GiLighthouse /> Rooftop </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/cctv"><GiCctvCamera /> CCTV Room </NavLink></li>
                    <li><NavLink exact activeClassName="active-page" to="/fullstack"><GiCctvCamera /> FullStack </NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar
