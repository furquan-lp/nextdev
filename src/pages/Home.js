import preval from 'preval.macro';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';

import TopBar from '../components/TopBar';
import WelcomeCarousel from '../components/Welcome';
import HiBox from '../components/HiBox';

const Home = () => {

  return (
    <div className="bg-minimal-react bg-contain bg-center bg-no-repeat ">
      <TopBar page="home" highlight={[true, false, false, false, false]} />
      <div className="flex flex-col md:mx-24">
        <WelcomeCarousel />
        <HiBox />
        <div className="font-sans font-bold text-slate-600 md:text-2xl text-lg mx-4 lg:p-10 p-4 ">This website
          is built using:
          <div className="flex flex-col mb-5 font-normal">
            {/*<TechLinkButton link="https://reactjs.org/" linktext="ReactJS">
              <SiReact className="mr-1" />
            </TechLinkButton>
            <TechLinkButton link="https://tailwindcss.com/" linktext="Tailwind CSS">
              <SiTailwindcss className="mr-1" />
            </TechLinkButton>
            <TechLinkButton link="https://flowbite.com/" linktext="Flowbite">
              <MdOutlineViewCarousel className="mr-1" />
  </TechLinkButton>*/}
          </div>
          Check the source code <a
            href="https://github.com/furquan-lp/simpledev.site/" className="underline hover:text-green-light">here</a>.
          Report bugs <a href="https://github.com/furquan-lp/simpledev.site/issues"
            className="underline hover:text-green-light">here</a>.
          <p>Build {preval`module.exports = new Date().toISOString();`}</p>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
};

export default Home;