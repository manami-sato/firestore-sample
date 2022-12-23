import { addDoc, collection, getFirestore } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useState } from 'react';
import { firebaseApp, TARGET_COLLECTION_NAME } from '../src/libs/firebase';

const Get: NextPage = () => {
  const [data, setData] = useState<string>();
  const setValue = (e: string) => {
    setData(e);
  };
  const firebase = async () => {
    try {
      const db = getFirestore(firebaseApp);
      const col = collection(db, TARGET_COLLECTION_NAME);
      await addDoc(col, { name: data });
      console.log('success!' + data);
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

export default Get;
