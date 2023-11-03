import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Nav/navigation';
import imgHeader from '../assets/pngegg (1).png';
import Products from '../components/Cards/card-Product';
import { useAllProducts } from '../components/Context/Products/customHooks-products';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CategoryHome from '../components/Category/category-home';

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { loading, data, error } = useAllProducts();
  console.log('data', data);
  return (
    <div>
      <header>
        <Navigation />
        <div className="container">
          <div className="textos">
            <h1>Manten tu casa en buen estado</h1>
            <p>No dudes en comprar tus productos aca</p>
            <Link to={'/create-product'}>
              <button className="btn-header">Crear mi Producto</button>
            </Link>
          </div>
          <img src={imgHeader} className="img-header" />
        </div>
        <div className="wave">
          <div style={{ height: '150px', overflow: 'hidden' }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: '100%', width: '100%' }}
            >
              <path
                d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: 'none', fill: '#fff' }}
              ></path>
            </svg>
          </div>
        </div>
      </header>
      <br />
      <br />
      <br />
      {loading ? loading : <Products productos={data?.allProducts} />}
      <div>
        <h2 className="pop-cat">Categorias Populares: </h2>
      </div>
      <CategoryHome />
    </div>
  );
};

export default Home;
