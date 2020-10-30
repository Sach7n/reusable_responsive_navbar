import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import "./Navbar1.css"

const Navbar1 = props => {
    return (
        <nav className="main-nav">
        
        <div className="nav-logo">LOGO</div>
        
        <div/>
        
        <div className="nav-items">
        <li>
            Home
        </li>
        <li>
            Profile
        </li>        
        <li>
            About
        </li>  
          <li>
            Contact
        </li>
        </div>
        
        <div className="toggle-button"><DrawerToggleButton click1={props.drawerClick} show={props.show}/></div>

        </nav>
    );
};

export default Navbar1;