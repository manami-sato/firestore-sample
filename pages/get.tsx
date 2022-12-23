import { collection, getDocs, getFirestore } from 'firebase/firestore';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import firebase from '../src/libs/getFirebase';

type hogeType = {
  name: string;
};

const Set: NextPage = () => {
  const [hoge, setHoge] = useState<hogeType[]>();
  useEffect(() => {
    const fuga = async () => {
      setHoge(await firebase());
    };
    fuga();
  }, []);

  return (
    <div>
      {hoge !== undefined && (
        <>
          {hoge.map((item: hogeType, i: number) => (
            <div key={i}>{item.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Set;
