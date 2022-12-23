import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState, FC } from 'react';
import { firebaseApp, TARGET_COLLECTION_NAME } from '../libs/firebase';

const Set: FC = () => {
  const [data, setData] = useState<string>();
  const setValue = (e: string) => {
    setData(e);
  };
  const firebase = async () => {
    try {
      const db = getFirestore(firebaseApp);
      const col = collection(db, TARGET_COLLECTION_NAME);
      await addDoc(col, { name: data });
      console.log('success!' + data + '(please reload)');
    } catch (error) {
      console.log('error');
    }
  };
  return (
    <div>
      <input type="text" onChange={(e: any) => setValue(e.target.value)} />
      <button onClick={() => firebase()}>set nijisanji</button>
    </div>
  );
};

export default Set;
