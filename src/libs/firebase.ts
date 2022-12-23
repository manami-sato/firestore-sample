import { getApp, getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import {
  collection,
  getDocs,
  getFirestore,
} from 'firebase/firestore';

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

const TARGET_COLLECTION_NAME = 'users';

export default async function () {
  try {
    const db = getFirestore(firebaseApp);
    // const q = collection(db, TARGET_COLLECTION_NAME);
    const querySnapshot = await getDocs(collection(db, TARGET_COLLECTION_NAME));
    const ret: any = [];
    querySnapshot.forEach((doc) => {
      ret.push(doc.data());
    });
    return ret;
  } catch (error) {
    console.log('error');
  }
}
