import React from 'react';
import { CartItems } from '../components/CartItems';
import { Checkout } from '../components/Checkout';
import { Hero } from '../components/Hero';
import { StoreLayout } from '../layout/StoreLayout';

export const Cart = () => {
  return (
    <StoreLayout>
      <Hero>Checkout</Hero>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <CartItems />
                    <Checkout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StoreLayout>
  );
};
