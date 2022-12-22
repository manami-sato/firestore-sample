import {
  addDoc,
  getDocs,
  getDoc,
  collection,
  doc,
  Firestore,
} from 'firebase/firestore';
import type { NextPage } from 'next';
import { SetStateAction, useState } from 'react';
import db from '../src/libs/firebase';

const Home: NextPage = () => {
  const [nameText, setNameText] = useState('');

  const aaa = async (db: Firestore) => {
    const citiesCol = collection(db, 'hoge');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(cityList);

    return cityList;
  };
  aaa(db);

  const onChangeName = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setNameText(event.target.value);
  };

  const onClickAdd = async () => {
    console.log('Ok');

    try {
      const docRef = await addDoc(collection(db, 'hoge'), {
        name: nameText,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="App">
      <input type="text" value={nameText} onChange={onChangeName} />
      <button onClick={() => onClickAdd()}>追加</button>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const citiesCol = collection(db, 'hoge');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  return {
    props: {
      cityList: cityList,
    },
  };
};
