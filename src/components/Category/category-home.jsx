import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faCar, faMobileScreen, faGem, faBaby, faShirt, faBaseball, faComputer, faPhotoFilm, faMicrophone, faIndustry, faGamepad} from '@fortawesome/free-solid-svg-icons'


const CategoryHome = () => {
  return (
    <section className="section-catg">
      <div className="category">
        <div className="box-catgr">
          <FontAwesomeIcon icon={faHome} className="icons-category" />
          <p>Hogar y Muebles</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faCar} className="icons-category"/>
          <p>Accesorios para Vehiculos</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faMobileScreen} className="icons-category"/>
          <p>Celulares y Telefonos</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faGem} className="icons-category"/>
          <p>Reloj y Joyeria</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faBaby} className="icons-category"/>
          <p>Bebes</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faShirt} className="icons-category"/>
          <p>Ropa, Zapatos y Accesorios</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faBaseball} className="icons-category"/>
          <p>Deportes y Fitness</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faComputer} className="icons-category"/>
          <p>Computacion</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faPhotoFilm} className="icons-category"/>
          <p>Camara y Accesorios</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faMicrophone} className="icons-category"/>
          <p>Electronica, Audio y Video</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faIndustry} className="icons-category"/>
          <p>Industrias</p>
        </div>

        <div className="box-catgr">
            <FontAwesomeIcon icon={faGamepad} className="icons-category"/>
          <p>Juegos y Juguetes</p>
        </div>
        <div className="box-catgr">
            <FontAwesomeIcon icon={faGamepad} className="icons-category"/>
          <p>Juegos y Juguetes</p>
        </div>
        <div className="box-catgr">
            <FontAwesomeIcon icon={faGamepad} className="icons-category"/>
          <p>Juegos y Juguetes</p>
        </div>
        <div className="box-catgr">
            <FontAwesomeIcon icon={faGamepad} className="icons-category"/>
          <p>Juegos y Juguetes</p>
        </div>
        <div className="box-catgr">
            <FontAwesomeIcon icon={faGamepad} className="icons-category"/>
          <p>Juegos y Juguetes</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHome;
