import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export const Contact = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat">
    <TopBar page="contact" highlight={[false, false, false, false, true]} />
    <div className="flex flex-col md:mx-24">
    </div>
    <Footer />
  </div>;