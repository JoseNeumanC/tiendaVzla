import { loadCategories } from './loadCategories';

export const getCategory = async (id = '') => {
  // Obtener Las catorias y los productos
  const categories = await loadCategories();

  // Obtener el key segun el key de la categoria
  const {description} = categories.find(category => category.id === id);
  return description;
};
