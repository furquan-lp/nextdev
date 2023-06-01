import { Tooltip } from '@material-tailwind/react';
import { FiGithub } from 'react-icons/fi';

const Footer = () => <div className="flex justify-between items-center bg-white text-sm md:text-base
text-slate-600 p-1.5 border border-slate-300">
  <div>
    <span className="hidden md:inline">Powered by GitHub Pages.</span> <a className="underline decoration-slate-600
    md:decoration-transparent md:hover:decoration-slate-600 transition-all duration-200"
      href="https://github.com/furquan-lp/simpledev.site/blob/master/LICENSE">
      Copyright &#169; 2023 Syed Furquan Ahmad.</a>
  </div>
  <Tooltip content="Check the source code">
    <a href="https://github.com/furquan-lp/nextdev">
      <FiGithub className="mx-2 w-2/3 h-2/3" />
    </a>
  </Tooltip>
</div>;

export default Footer;