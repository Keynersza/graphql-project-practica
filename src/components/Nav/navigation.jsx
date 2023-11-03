import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pngegg (2).png';
import logoInput from '../../assets/Magnifying-Glass-PNG-Transparent-HD-Photo.png'

export const Navigation = () => {
  return (
    <nav>
        <ul className="list-ul">
          <div>
          <img
            src={logo}
            style={{ width: '250px', objectFit: 'cover', height: '16vh', marginLeft: '10px' }}
          />
          </div>
        
          <input type="search" placeholder='Busque lo que desee'  className='input-search'/>
          <div className='border-input'>
            
          </div>
          <button className='icone'>
              <img
                src={logoInput}
                className='icon-log'
              />
          </button>
          <div className='men-list' >
          <Link>
            <li>Contacto</li>
          </Link>
          <Link>
            <li>Productos</li>
          </Link>
          <Link>
            <li>Historial</li>
          </Link>
          <Link to={'/sesion'}>
            <li>Sign In</li>
          </Link>
          <Link to={'/register'}>
            <li>Sign Up</li>
          </Link>
          </div>
        </ul>
    </nav>
  );
};
