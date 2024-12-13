import React, { useState } from 'react';
import useDark from '../customhooks/UseDark';


export default function Header() {
  const {toggleTheme , theme } = useDark(); 


  return (
    <nav className="header" id="header">
      <div className="left-side">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#proj">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#connect">Contact</a>
          </li>
          <li className="nav-item">
         
              <i onClick={()=>{
  toggleTheme ();
//   setTheme(!theme);
            }}
                className={`fa-regular ${theme ? 'fa-moon' : 'fa-sun'}`}
                style={{ color: '#9c9c9c' }}
              />
         
          </li>
        </ul>
      </div>
    </nav>
  );
}
