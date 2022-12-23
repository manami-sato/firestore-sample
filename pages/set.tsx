import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { firebaseApp } from '../src/libs/firebase';
import firebase from '../src/libs/getFirebase';
import { TARGET_COLLECTION_NAME } from '../src/libs/targetCollectionName';

const Get: NextPage = () => {
  const [db, setDb] = useState<any>();
  const [col, setCol] = useState<any>();
  const [data, setData] = useState<string>();
  // const [data, setData] = useState<{ name: string }>({ name: 'fuwa' });
  // useEffect(() => {
  //   const firebaseSetting = async () => {
  //     setDb(getFirestore(firebaseApp));
  //     setCol(collection(db, TARGET_COLLECTION_NAME));
  //   };
  //   firebaseSetting();
  // }, []);
  const setValue = (e: string) => {
    setData(e);
  };
  const setFirebase = async () => {
    const db = getFirestore(firebaseApp);
    const col = collection(db, TARGET_COLLECTION_NAME);
    await addDoc(col, { name: data });
    console.log('success!' + data);
  };
  return (
    <div>
      <input type="text" onChange={(e: any) => setValue(e.target.value)} />
      <button onClick={() => setFirebase()}>set fuwa</button>
      {/* {hoge !== undefined && (
        <>
          {hoge.map((item: hogeType, i: number) => (
            <div key={i}>{item.name}</div>
          ))}
        </>
      )} */}
    </div>
  );
};

export default Get;
