import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadCategories = async () => {
  // if (!uid) throw new Error('El uid del usuario no exite');

  const collectionRef = collection(FirebaseDB, `categories/`);
  const docs = await getDocs(collectionRef);

  const categories = [];
  docs.forEach((doc) => {
    if (doc) {
      categories.push({ id: doc.id, ...doc.data() });
    }
  });

  return categories;
};
