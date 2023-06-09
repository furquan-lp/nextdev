import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export const NotFound = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
    <TopBar page="home" highlight={[false, false, false, false, false]} />
    <div className="flex flex-col md:mx-24">
      404 Not Found
    </div>
    <div className="sticky top-[100vh]"><Footer /></div>
  </div>;