import React from 'react';
import "./Side-drawer.css"

const Sidedrawer = props => {
    
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }

    return (
        
  <nav className={drawerClasses} onClick={props.click1}>
    <div className="sidedrawer_items" >
                   <ul>
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
                    </ul>
    </div>
</nav>
)
};

export default Sidedrawer;

