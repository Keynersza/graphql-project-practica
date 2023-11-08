import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAllProducts } from '../components/Context/Products/customHooks-products';
import { LodInit } from '../components/Loader/lodInit';
import { Navigation } from '../components/Nav/navigation';

const Producto = () => {
  const [productoId, setProductoId] = useState([]);
  const [loaderProduct, setLoaderProduct] = useState(false);
  const { loading, data, error } = useAllProducts();
  const { id } = useParams();

  console.log('id', id);
  const getProductsId = () => {
    setLoaderProduct(true);
    let datos = data.allProducts.filter((product) => product.id === id);
    setTimeout(() => {
      console.log('hola', datos);
      setProductoId(datos);
      setLoaderProduct(false);
    }, 1000);
  };
  useEffect(() => {
    getProductsId();
  }, []);

  return (
    <div>
      <header>
        <Navigation />
      </header>
    
    <div className="box-one-product">
      {loaderProduct ? (
        <LodInit />
      ) : (
        <div className="bord-box-product">
          <>
            {productoId.map((product) => (
              <div className="product-completee">
                <img
                  src={`data:image/png;base64${product.imageProduct}`}
                  className="img-product-box"
                />
                <div className="box-productosss">
                  <h2 className="box-nameee">{product.nameProduct}</h2>
                  <p className="box-descrippp">
                    Descripcion: {product.description}
                  </p>
                  <h2 className="box-priceee">{product.price}</h2>
                  <Link to={'/pasarelaPago'}>
                  <button className="btn-box-product">Realizar Compra</button>
                  </Link>
                  <p className="box-dateee">{product.dueDate}</p>
                </div>
              </div>
            ))}
          </>
        </div>
      )}
    </div>
    </div>
  );
};

export default Producto;
