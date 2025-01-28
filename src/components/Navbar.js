import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false); 
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960)
      setButton(false);
    else
      setButton(true);
  };
  useEffect(() => {
    showButton()
  },[]);

    window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={click ? 'nav-menu active'  : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/OurStory' className='nav-links' onClick={closeMobileMenu}>
                Our Story
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/RSVP' className='nav-links' onClick={closeMobileMenu}>
                RSVP
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/GuestAttireInfo' className='nav-links' onClick={closeMobileMenu}>
                Guest Attire Info
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Gifts' className='nav-links' onClick={closeMobileMenu}>
                Gifts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
