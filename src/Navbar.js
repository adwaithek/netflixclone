import React from 'react';
import './Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {
    const [show,handleshow] = useState(false)

    useEffect(() => {
      //to check events happen or not
      window.addEventListener('scroll',() => {
          if(window.scrollY>600){
            handleshow(true)
          }else{
            handleshow(false)
          }
      })

    },[])
    console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img className='logo'
         src='https://i2.wp.com/www.verifiedmom.com/wp-content/uploads/2014/07/Netflix_Logo_Print_OneColorPMS.png?fit=8685%2C2333&ssl=1' alt='Netflix logo'/>
    </div>
  )
}

export default Navbar