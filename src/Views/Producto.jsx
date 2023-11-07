import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAllProducts } from '../components/Context/Products/customHooks-products';

const Producto = () => {
  const [productoId, setProductoId] = useState([]);
  const { loading, data, error } = useAllProducts();
  const { id } = useParams();
  console.log('id', id);
  const getProductsId = () => {
    let datos = data.allProducts.filter((product) => product.id === id);
    setProductoId(datos);
    console.log('hola', datos);
  };
  useEffect(() => {
    getProductsId();
  }, [productoId]);

  return (
    <h1>
      {loading ? (
        loading
      ) : (
        <>
          {productoId.map((product) => (
            <div className="product-completee">
              <img src={`data:image/png;base64${product.imageProduct}`} className='img-product-box'  />
              <div className="box-productosss">
                <h2 className="box-nameee">Nombre: {product.nameProduct}</h2>
                <p className="box-descrippp">
                  Descripcion: {product.description}
                </p>
                <h2 className="box-priceee">Precio: {product.price}</h2>
                <p className="box-dateee">Due Date: {product.dueDate}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </h1>
  );
};

export default Producto;
