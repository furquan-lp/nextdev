import { Tooltip } from '@material-tailwind/react';
import { FiGithub } from 'react-icons/fi';

const Footer = ({ version, backend }) => <div className="flex justify-between items-center bg-white text-sm
 md:text-base text-slate-600 p-1.5 border border-slate-300 sticky top-[100vh]">
  <span>
    <span className="hidden md:inline">Powered by Vercel{backend && <>, {backend}</>} and MongoDB Atlas. </span>
    <a className="md:underline decoration-slate-600 md:decoration-transparent md:hover:decoration-slate-600
     transition-all duration-200" href="https://github.com/furquan-lp/nextdev/blob/master/LICENSE">
      Copyright &#169; 2023 Syed Furquan Ahmad.</a>
  </span>
  <span className="flex items-center">
    <span className="hidden md:inline">Backend version {version}</span>
    <Tooltip content="Check the source code">
      <a href="https://github.com/furquan-lp/nextdev">
        <FiGithub className="mx-2 w-2/3 h-2/3" />
      </a>
    </Tooltip>
  </span>
</div>;

export default Footer;