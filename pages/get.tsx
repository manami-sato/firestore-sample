import { collection, getDocs, getFirestore } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { firebaseApp, TARGET_COLLECTION_NAME } from '../src/libs/firebase';

type dataType = {
  name: string;
};

const Set: NextPage = () => {
  const [data, setData] = useState<dataType[]>();
  useEffect(() => {
    const firebase = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const col = collection(db, TARGET_COLLECTION_NAME);
        const querySnapshot = await getDocs(col);
        const ret: any = [];
        querySnapshot.forEach((doc) => {
          ret.push(doc.data());
        });
        setData(ret);
      } catch (error) {
        console.log('error');
      }
    };
    firebase();
  }, []);

  return (
    <div>
      {data !== undefined && (
        <>
          {data.map((item: dataType, i: number) => (
            <div key={i}>{item.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Set;
