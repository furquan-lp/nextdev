import TopBar from '../components/TopBar';
import WelcomeCarousel from '../components/Welcome';
import HiBox from '../components/HiBox';
import Bar from '../components/Bar';
import Footer from '../components/Footer';
import AboutSite from '../components/AboutSite';

import { usePageTitle } from '../myHooks';

const Home = ({ carouselData, apiURL, backendVersion }) => {
  usePageTitle('Home');
  return (
    <div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
      <TopBar page="home" highlight={[true, false, false, false, false]} />
      <div className="flex flex-col md:mx-24">
        <WelcomeCarousel carouselData={carouselData} apiURL={apiURL} />
        <Bar />
        <HiBox api={apiURL} />
        <Bar />
        <AboutSite />
      </div>
      <Footer version={backendVersion.version} />
    </div>
  );
};

export default Home;