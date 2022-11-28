import { FiGithub } from 'react-icons/fi';

const Footer = () => <div className="flex justify-between items-center bg-green-dark text-white p-1.5">
  <code>Copyright (C) 2022 Syed Furquan Ahmad</code>
  <a href="https://github.com/furquan-lp/simpledev.site">
    <FiGithub className="mx-2 md:w-3/4 md:h-3/4 sm:w-fit sm:h-fit" />
  </a>
</div>;

export default Footer;