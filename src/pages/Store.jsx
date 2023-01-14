import { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import { ItemList } from '../components/ItemList';
import { Loading } from '../components/Loading';
import { loadItems } from '../helpers/loadItems';
import { ItemListContainer } from '../layout/ItemListContainer';
import { StoreLayout } from '../layout/StoreLayout';

export const Store = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const firebaseItems = await loadItems();
      setItems(firebaseItems);
    };
    getData();
  }, []);

  useEffect(() => {
    setLoading(true);
    if (items.length) {
      setLoading(setLoading(false));
    }
  }, [items]);

  return (
    <StoreLayout>
      <Hero>Nuestros mejores productos</Hero>
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
