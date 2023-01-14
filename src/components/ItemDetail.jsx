import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export const ItemDetail = ({item}) => {
  const { description, image, name, price, id } = item;

  const {addItemToCart} = useContext(cartContext);

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
    <>
      <div className="col-md-6">
        <img className="card-img-top mb-5 mb-md-0" src={image} alt={name} />
      </div>

      <div className="col-md-6">
        <h1 className="display-5 fw-bolder">{name}</h1>
        <div className="fs-5 mb-5">
          <span>{formatterARS.format(price)}</span>
        </div>
        <p className="lead">{description}</p>
        <div className="d-flex">
          <button className="btn btn-primary flex-shrink-0" type="button" onClick={handleAddCart}>
            <i className="bi-cart-fill me-1"></i>
            Añadir al carrito
          </button>
        </div>
      </div>
    </>
  );
};
