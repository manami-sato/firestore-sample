import type { NextPage } from 'next';
import Get from "../src/components/Get"
import Set from "../src/components/Set"

const Home: NextPage = () => {
  return (
    <div>
      <Get />
      <Set />
    </div>
  );
};

export default Home;
