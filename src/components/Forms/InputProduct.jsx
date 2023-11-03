import React from 'react';
import { useState } from 'react';
import { useAddProducts } from '../Context/Products/customHooks-products';
import { upload } from '@testing-library/user-event/dist/upload';
import { useEffect } from 'react';

const InputProduct = () => {
 
  const [imageProduct, setImageProduct] = useState('');
  const [nameProduct, setNameProduct] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [dueDate, setDue_Date] = useState(Date.now());

  const [addProduct] = useAddProducts();
  const createProduct = async (e) => {
    e.preventDefault();
    await addProduct(
      {
        variables: {
          imageProduct,
          nameProduct,
          description,
          price,
          dueDate,
        },
      },
      console.log('addProduct', addProduct)
    );
  };

  const imageCard = (e) => {
    if (window.FileReader) {
      let file = e.target.files[0];
      let reader = new FileReader();
      if (file && file.type.match('image.*')) {
        reader.readAsDataURL(file);
      } else {
        alert('El archivo no es una imagen');
      }
      reader.onload = () => {
        setImageProduct(reader.result);
      };
    }
  };

  return (
    <div>
      <form onSubmit={createProduct} className="formulario">
        <input type="file" name="file" onChange={imageCard} />

        <div className="one-input">
          <label>Nombre del Producto</label>
          <input
            type="text"
            name="name"
            placeholder="Producto..."
            onBlur={(e) => console.log(e.target.value)}
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </div>

        <div className="two-input">
          <label>Descripcion del Producto</label>
          <input
            type="text"
            name="description"
            placeholder="Descripcion..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="three-input">
          <label>Precio del Producto</label>
          <input
            type="text"
            name="price"
            placeholder="Precio..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="for-input">
          <label>Fecha de Creacion del Producto</label>
          <input
            type="date"
            name="date"
            placeholder="0/0/0000"
            value={dueDate}
            onChange={(e) => setDue_Date(e.target.value)}
          />
        </div>
        <button className="button-formulario">Crear producto</button>
      </form>
    </div>
  );
};

export default InputProduct;
