import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Home: NextPage = () => {
  const Map = dynamic(() => import('../components/Map'), {
    loading: () => <p>A map is loading</p>,
    ssr: false, // prevent server side rendering
  });
  return <Map />;
};

export default Home;
