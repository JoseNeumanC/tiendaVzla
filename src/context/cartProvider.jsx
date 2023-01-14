import { useEffect, useState } from 'react';
import { cartContext } from './cartContext';


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productsLS = localStorage.getItem('cartProducts');
      return productsLS ? JSON.parse(productsLS) : [];
    } catch (error) {
      return [];
    }
  });

  // Modificar cada vez que se agrega al carrito
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    // Encuentra si hay una ID en el carrito
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    // Condicional para agregar un producto nuevo al carrito o aumentar la cantidad
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return {
              ...inCart,
              qty: inCart.qty + 1,
            };
          } else {
            return productInCart;
          }
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const deleteItemToCart = (product) => {
    localStorage.setItem('cartProducts', []);
  };

  return(
    <cartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart}}>
      {children}
    </cartContext.Provider>
  )
};