import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ItemDetail } from '../components/ItemDetail';
import { Loading } from '../components/Loading';
import { getItem } from '../helpers/getItem';
import { ItemDetailContainer } from '../layout/ItemDetailContainer';
import { StoreLayout } from '../layout/StoreLayout';

export const Items = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const item = await getItem(id);
      setItem(item);
    };

    getData();
  }, [id]);

  useEffect(() => {
    setLoading(true);
    if (Object.keys(item)) {
      setLoading(setLoading(false));
    }
  }, [item]);

  return (
    <StoreLayout>
      <Hero>Nuestros mejores productos</Hero>
      <section>
        <ItemDetailContainer>
          {loading ? <Loading /> : <ItemDetail item={item} />}
        </ItemDetailContainer>
      </section>
    </StoreLayout>
  );
};
