import React from 'react';

export const Checkout = () => {
  return (
    <div className="col-lg-5">
      <div className="card bg-primary text-white rounded-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0">Detalles de la compra</h5>
          </div>

          <form className="mt-4">
            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="form-control form-control-lg"
                siez="17"
                placeholder="Jose"
              />
            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="phone">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                className="form-control form-control-lg"
                siez="17"
                placeholder="Neuman"
              />
            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="phone">
                Telefono
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control form-control-lg"
                siez="17"
                placeholder="+549555555555"
              />
            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="email">
                Correo Electronico
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                siez="17"
                placeholder="test@test.com"
              />
            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="confirm">
                Confirmar Correo Electronico
              </label>
              <input
                type="email"
                id="confirm"
                className="form-control form-control-lg"
                siez="17"
                placeholder="test@test.com"
              />
            </div>
          </form>

          <hr className="my-4" />

          <div className="d-flex justify-content-between mb-4">
            <p className="mb-2">Total</p>
            <p className="mb-2">$1800</p>
          </div>

          <button type="button" className="btn btn-light btn-block btn-lg text-primary w-100">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};
