import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartContext';

import { getCategory } from '../helpers/getCategory';

export const ItemList = ({ item }) => {
  const [categoryName, setCategoryName] = useState('');
  const {addItemToCart} = useContext(cartContext);
  const { id, image, price, name, 'short-description': short, category } = item;

  useEffect(() => {
    const getData = async () => {
      const catgo = await getCategory(category);
      setCategoryName(catgo);
    };

    getData();
  }, [category]);

  const handleAddCart = (e) => {
    e.preventDefault();
    addItemToCart({image, name, price, id})
  }

  // Transformar a pesos argentinos
  const formatterARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  return (
    <article className="col-sm-4">
      <div className="card">
        <div
          className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light"
        >
          <img src={image} className="image-item" alt="" />
        </div>
        <div className="card-body">
          <Link to={`/item/${id}`} className="text-reset text-decoration-none">
            <h3 className="card-title text-primary mb-3">{name}</h3>
          </Link>
          <p>
            <span className="fw-bold">Categoria: </span>
            {categoryName}
          </p>
          <p>{short}</p>
          <h6 className="mb-3">{formatterARS.format(price)}</h6>
          <div className="d-flex">
            <button
              className="btn btn-primary flex-shrink-0"
              type="button"
              onClick={handleAddCart}
            >
              <i className="bi-cart-fill me-1"></i>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
