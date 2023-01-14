import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../context/cartContext';

export const CartItems = () => {
  const { cartItems } = useContext(cartContext);
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    const length = cartItems.reduce((prev, curr) => prev + curr.qty, 0);
    setProductsLength(length);
  }, [cartItems]);

  const formatterARS = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  return (
    <div className="col-lg-7">
      <div className="mb-4">
        <p className="mb-1">Carrito de Compra</p>
        <p className="mb-0">Tienes {productsLength} items en tu carrito</p>
      </div>

      {cartItems.length ? (
        cartItems.map((item) => (
          <div className="card mb-3" key={item.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">

                <div className="d-flex flex-row align-items-center">
                  <div>
                    <img
                      src={item.image}
                      className="img-fluid rounded-3"
                      alt="Shopping item"
                      style={{ width: '65px' }}
                    />
                  </div>
                  <div className="ms-3">
                    <h5>{item.name}</h5>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center">
                  <div style={{ width: '50px' }}>
                    <h5 className="fw-normal mb-0">{item.qty}</h5>
                  </div>
                  <div style={{ width: '150px' }}>
                    <h5 className="mb-0">{formatterARS.format(item.price)}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};
