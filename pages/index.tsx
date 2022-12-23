import type { NextPage } from 'next';
import firebaseApp from '../src/libs/firebase';

const Home: NextPage = () => {
  const db = firebaseApp();
  console.log(db);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Home;
