import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export const Portfolio = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat">
    <TopBar page="home" highlight={[false, false, false, true, false]} />
    <div className="flex flex-col md:mx-24">
    </div>
    <Footer />
  </div>;