import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pngwing.com (6).png';
import logoInput from '../../assets/Magnifying-Glass-PNG-Transparent-HD-Photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Logaout } from '../../controllers/logaout';

export const Navigation = () => {

  
  return (
    <nav>
      <ul className="list-ul">
        <div>
          <img
            src={logo}
            style={{
              width: '199px',
              objectFit: 'cover',
              height: '16vh',
              marginLeft: '10px',
            }}
          />
        </div>

        <input
          type="search"
          placeholder="Busque lo que desee"
          className="input-search"
        />
        <div className="border-input"></div>
        <button className="icone">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-log" />
        </button>
        <div className="men-list">
          <Link>
            <li>Contacto</li>
          </Link>
          <Link>
            <li>Productos</li>
          </Link>
          <Link>
            <li>Historial</li>
          </Link>
          {
          localStorage.getItem('User') 
          ? (
            <>
            <button onClick={Logaout} className='box-signOut'>Sign Out</button>

          <button className="notify">
          <FontAwesomeIcon icon={faBell} className="icon-notify" />
          </button>
            </>
            ) 
          : (
            <>
              <Link to={'/sesion'}>
                <li>Sign In</li>
              </Link>
              <Link to={'/register'}>
                <li>Sign Up</li>
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};
