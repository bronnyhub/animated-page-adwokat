import React from 'react';
import './navbar.css';

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/"><img src={'./logo.png'} alt='logo' className='logo'></img></a>
          </li>
          <li>
            <a href="/">Strona Główna</a>
          </li>
          <li>
            <a href="/about">O mnie</a>
          </li>
          <li>
            <a href="/contact">Usługi</a>
          </li>
          <li>
            <a href="/contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;