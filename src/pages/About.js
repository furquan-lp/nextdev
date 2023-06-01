import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export const About = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat ">
    <TopBar page="home" highlight={[false, true, false, false, false]} />
    <div className="flex flex-col md:mx-24">
      <span className="font-bold text-4xl text-slate-600">About:</span>
    </div>
    <Footer />
  </div>;