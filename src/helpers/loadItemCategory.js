import { loadCategories } from './loadCategories';
import { loadItems } from './loadItems';

export const loadItemCategory = async (key = '') => {
  // Obtener Las catorias y los productos
  const categories = await loadCategories();
  const items = await loadItems();

  // Obtener el ID segun el key de la categoria
  const {id} = categories.find(category => category.key === key);

  // Filtrar los productos segun el id de la categoria
  const itemsFilter = items.filter( item => item.category === id)

  return itemsFilter;
};
