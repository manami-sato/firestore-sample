import { FC, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp, TARGET_COLLECTION_NAME } from '../libs/firebase';

type dataType = {
  name: string;
};

const Get: FC = () => {
  const [data, setData] = useState<dataType[]>();
  useEffect(() => {
    const firebase = async () => {
      const db = getFirestore(firebaseApp);
      const col = collection(db, TARGET_COLLECTION_NAME);
      const querySnapshot = await getDocs(col);
      const ret: any = [];
      querySnapshot.forEach((doc) => {
        ret.push(doc.data());
      });
      setData(ret);
    };
    firebase();
  }, []);

  return (
    <div>
      {data && (
        <>
          {data.map((item: dataType, i: number) => (
            <div key={i}>{item.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Get;
