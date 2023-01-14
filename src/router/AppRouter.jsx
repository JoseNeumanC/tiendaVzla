import { Route, Routes } from 'react-router-dom';
import { Cart } from '../pages/Cart';
import { Categories } from '../pages/Categories';
import { Items } from '../pages/Items';
import { Store } from '../pages/Store';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/categories/:categoryId" element={<Categories />} />

        <Route path="/item/:id" element={<Items />} />
      </Routes>
    </>
  );
};
