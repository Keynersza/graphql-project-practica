import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAllProducts } from '../components/Context/Products/customHooks-products';

const Producto = () => {
const [productoId, setProductoId] = useState([])
const { loading, data, error } = useAllProducts();
const { id } = useParams();
console.log('id', id);
 const getProductsId = () => {
    let datos = data.allProducts.filter((product) => product.id === id)
    setProductoId(datos)
    console.log("hola", datos);
};
useEffect(() => {
 getProductsId()
}, [])

return(
 <h1>
    {productoId.map((product) => (
      <div>
        <img src= {`data:image/png;base64${product.imageProduct}`}  />
        <h1>Nombre: {product.nameProduct}</h1>
        <h1>Descripcion: {product.description}</h1>
        <h1>Precio: {product.price}</h1>
        <h1>Due Date: {product.dueDate}</h1>
      </div>
    ))}
 </h1>   
)
};

export default Producto;
