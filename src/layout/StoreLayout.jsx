import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export const StoreLayout = ({ children }) => {
  return (
    <>
      <header className="container">
        <div className="d-flex flex-wrap justify-content-between py-3 mb-4">
          <Link to="/" className="text-decoration-none">
            <h1 className="logo">Tienda Vzla</h1>
          </Link>
          <NavBar />
        </div>
      </header>

      <main>{children}</main>
    </>
  );
};
