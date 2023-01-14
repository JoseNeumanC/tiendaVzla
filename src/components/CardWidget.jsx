import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartContext';

export const CardWidget = ({ showCart }) => {
  const { cartItems } = useContext(cartContext)

  const formatterARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
  return (
    <div className={`cart-preview ${showCart && 'active'}`}>
      <div>
        <ul className="cart-items overflow-y-auto ps-0">
          {cartItems.length ? (
            cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <img className="product-image" src={item.image} alt="" />
                <div className="product-info">
                  <p className="product-name">{item.name}</p>
                  <p className="product-price">{formatterARS.format(item.price)}</p>
                </div>
                <div className="product-total">
                  <p className="quantity">cant. {item.qty}</p>
                  <p className="amount">{formatterARS.format(item.qty * item.price)}</p>
                </div>
              </li>
            ))
          ) : (
            <li>No Ha producto</li>
          )}
        </ul>

        <div className="p-3">
          <Link className="btn btn-primary w-100" to={'/cart'}>
            Ir al carrito
          </Link>
        </div>
      </div>
    </div>
  );
};
