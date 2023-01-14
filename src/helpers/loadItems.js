import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadItems = async () => {
  // if (!uid) throw new Error('El uid del usuario no exite');

  const collectionRef = collection(FirebaseDB, `items/`);
  const docs = await getDocs(collectionRef);

  const items = [];
  docs.forEach((doc) => {
    if (doc) {
      items.push({ id: doc.id, ...doc.data() });
    }
  });

  return items;
};
