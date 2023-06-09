import { Link } from 'react-router-dom';
import { FiArrowUpCircle } from 'react-icons/fi';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export const NotFound = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
    <TopBar page="home" highlight={[false, false, false, false, false]} />
    <div className="flex flex-col items-center text-slate-700 mx-1 md:mx-0">
      <img src="./notfound.webp" alt="Empty cardboard boxes with the word 'oops'" className="w-1/2 border my-6" />
      <span className="my-2 md:my-6 font-bold text-2xl md:text-4xl font-aboutmono">Uh oh! The page you were looking for
        doesn't exist.</span>
      <Link to="/" className="flex text-xl md:text-3xl"><FiArrowUpCircle className="self-center mr-2" />Back to home.
      </Link>
    </div>
    <div className="sticky top-[100vh]"><Footer /></div>
  </div>;