import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { FC, useEffect, useState } from 'react';
import { firebaseApp, TARGET_COLLECTION_NAME } from '../libs/firebase';

type dataType = {
  name: string;
};

const Set: FC = () => {
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
