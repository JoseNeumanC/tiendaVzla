import React from 'react';

export const ItemListContainer = ({ children }) => {
  return (
    <div className="container">
      <div className='row row-gap-4'>
        {children}
      </div>
    </div>
  );
};
