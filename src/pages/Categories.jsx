import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ItemList } from '../components/ItemList';
import { Loading } from '../components/Loading';
import { loadItemCategory } from '../helpers/loadItemCategory';
import { ItemListContainer } from '../layout/ItemListContainer';
import { StoreLayout } from '../layout/StoreLayout';

export const Categories = () => {
  // Obtener el id por parametro
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const fireItems = await loadItemCategory(categoryId);
      setItems(fireItems);
    };
    getData();
  }, [categoryId]);

  useEffect(() => {
    setLoading(true);
    if (items.length) {
      setLoading(setLoading(false));
    }
  }, [items]);

  return (
    <StoreLayout>
      <Hero>
        La mejor selección de{' '}
        <span className="text-capitalize">{categoryId}</span>
      </Hero>
      <section>
        <ItemListContainer>
          {loading ? (
            <Loading />
          ) : (
            items.map((item) => <ItemList item={item} key={item.id} />)
          )}
        </ItemListContainer>
      </section>
    </StoreLayout>
  );
};
