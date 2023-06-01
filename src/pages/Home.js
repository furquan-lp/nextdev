import preval from 'preval.macro';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';

import TopBar from '../components/TopBar';
import WelcomeCarousel from '../components/Welcome';
import HiBox from '../components/HiBox';
import Bar from '../components/Bar';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div className="bg-minimal-react bg-contain bg-center bg-no-repeat ">
      <TopBar page="home" highlight={[true, false, false, false, false]} />
      <div className="flex flex-col md:mx-24">
        <WelcomeCarousel />
        <Bar />
        <HiBox />
        <Bar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;