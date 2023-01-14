import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardWidget } from './CardWidget';

import { ReactComponent as Cart } from '../assets/cart.svg';
import { loadCategories } from '../helpers/loadCategories';
import { cartContext } from '../context/cartContext';

export const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const [categories, setCategories] = useState([]);
  const { cartItems } = useContext(cartContext)

  const [productsLength, setProductsLength] = useState(0)
  useEffect(() => {
    const length = cartItems.reduce((prev, curr) => prev + curr.qty, 0)
    setProductsLength(length)
  }, [cartItems])

  useEffect(() => {
    const getData = async () => {
      const firebaseCategories = await loadCategories();
      setCategories(firebaseCategories);
    };
    getData();
  }, []);

  const handleCartButton = () => {
    setShowCart(!showCart);
  };

  return (
    <nav>
      <ul className="nav nav-pills align-items-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
        </li>

        <li className="nav-item">
          <span className="nav-link">Categorias</span>

          <ul className="dropdown-menu">
            <li className="">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  className="dropdown-item"
                  to={`/categories/${category.key}`}
                >
                  {category.description}
                </Link>
              ))}
            </li>
          </ul>
        </li>

        <li className="nav-item position-relative">
          {
            productsLength > 0 ? (<span className='length'>{productsLength}</span>) : ''
          }
          <button className="btn text-primary" onClick={handleCartButton}>
            <Cart />
          </button>
          <CardWidget showCart={showCart} />
        </li>
      </ul>
    </nav>
  );
};
