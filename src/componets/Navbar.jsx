
import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar () {
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

        return (
            
            <nav className="navItem">
                <h1 className="navLogo"> Pet Foster </h1> 
                <div className="menuIcon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/service'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Service
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link
                        to='/volunteer'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Volunteer
                    </Link>
                    </li>

                    <li>
                    <Link
                        to='/foster'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Foster
                    </Link>
                    </li>
                    <li>
                    <Link
                        to='/privacy'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Privacy
                    </Link>
                    </li>
                    
                        
                    
                </ul>
            </nav>
        )

    
}
export default Navbar;