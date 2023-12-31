import React from 'react';
import Producto from '../../Views/Producto';
import { Link } from 'react-router-dom';

const Products = ({ productos }) => {
  console.log('productos', productos.id);


  return (
    <div>
      <article className="card">
        <div className="conta-prod">
          {productos.map((product) => (
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="box-product" key={product.id}>
                <img
                  src={`data:image/jpeg;base64${product.imageProduct}`}
                  style={{ width: '190px', objectFit: 'cover', height: '22vh' }}
                />
                <div style={{ border: '1px solid #80808014' }}></div>
                <h2 className="title-produc">{product.nameProduct}</h2>
                <p className="dp-product">{product.description}</p>
                <div className="box-price">
                  <h5>Price:</h5>
                  <p className="price-product">{product.price}</p>
                </div>
                <p className="date-product">{product.dueDate}</p>
                <p>{product.name}</p>
                <Link to={`/produc/${product.id}`}><button className="btn-product"
                /* {
                 ...productos? <Producto productoId={productos}/>
                 : null
                } */
               >Ver Producto</button></Link>
              </div>
          </div>
          ))}
        </div>
      </article>
      </div>
  );
};

export default Products;
