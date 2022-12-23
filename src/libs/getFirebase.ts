import { getApp, getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { TARGET_COLLECTION_NAME } from './targetCollectionName';

export const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const db = { firebaseApp };

const firebase = async () => {
  try {
    const db = getFirestore(firebaseApp);
    const q = collection(db, TARGET_COLLECTION_NAME);
    const querySnapshot = await getDocs(q);
    const ret: any = [];
    querySnapshot.forEach((doc) => {
      ret.push(doc.data());
    });
    return ret;
  } catch (error) {
    console.log('error');
  }
};

export default firebase;
