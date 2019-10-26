import React from 'react';
import {Link } from 'react-router-dom';
import Intention_Logo from './Intention_Logo.png';



const NavComponent = () => {
return (
<nav>
    <div  className="nav-wrapper">
    
    <Link to="/home" className="brand-logo center" ><img src={Intention_Logo} alt="Intention Logo" className="nav-logo"></img></Link>
    
   

                <ul className="center">
                    <li className="nav-links right"><Link to="/" >Healing Circle</Link></li>
                    <li className="nav-links left"><Link to="/user" >Create Healer</Link></li>
                    <li className="nav-links left"><Link to="/disclaimer" >Heal Request</Link></li>                 
                    <li className="nav-links right"><Link to="/instructions" >Instructions</Link></li>
                </ul>
            </div>
        
    
   
</nav>

);

};

export default NavComponent;