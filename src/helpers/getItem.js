import { loadItems } from './loadItems';

export const getItem = async (id = '') => {
  // Obtener los productos
  const items = await loadItems();
  
  // Obtener el producto segun el id 
  const item = items.find(item => item.id === id);
  return item;
};
