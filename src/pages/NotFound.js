import { Link } from 'react-router-dom';
import { FiArrowUpCircle } from 'react-icons/fi';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

import { usePageTitle } from '../myHooks';

export const NotFound = ({ backendInfo }) => {
  usePageTitle('Page Not Found');
  return (<div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
    <TopBar page="home" highlight={[false, false, false, false, false]} />
    <div className="flex flex-col md:items-center text-slate-700 mx-2 md:mx-0">
      <img src="./notfound.webp" alt="Empty cardboard boxes with the word 'oops'" className="md:w-1/2 border my-6" />
      <span className="my-2 md:my-6 font-bold text-2xl md:text-4xl font-aboutmono">Uh oh! The page you were looking for
        doesn't exist.</span>
      <Link to="/" className="flex text-xl md:text-3xl underline hover:no-underline hover:text-slate-500
       transition-colors duration-200"><FiArrowUpCircle className="self-center mr-1" />Back to home.</Link>
    </div>
    <Footer version={backendInfo.version} backend={backendInfo.backendName} />
  </div>);
};