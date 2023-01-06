import { FiGithub } from 'react-icons/fi';
import { Tooltip } from 'flowbite-react';

const Footer = () => <div className="flex justify-between items-center bg-green-dark text-sm md:text-base
text-white p-1.5">
  <div>
    <span className="hidden md:inline">Powered by GitHub Pages.</span> Copyright &#169; 2022 Syed Furquan Ahmad.
  </div>
  <Tooltip content="Check the source code">
    <a href="https://github.com/furquan-lp/simpledev.site">
      <FiGithub className="mx-2 w-2/3 h-2/3" />
    </a>
  </Tooltip>
</div>;

export default Footer;