import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';

const HomeLogo = ({ path }) =>
  <div className="font-logofont md:text-2xl p-2 m-1 text-slate-800 outline-1">
    <span className="home-logo-ul"><b>NEXT</b>DEV.IN</span> // HOME
  </div>;

const TopBarButton = ({ link, linktext, extern }) => {
  if (extern) {
    return <a href={link} className="text-slate-800 m-1">
      <li className="inline md:p-3 p-1 tracking-widest hover:underline hover:text-white-light
       hover:bg-slate-600 transition-all duration-200">
        {linktext}
      </li>
    </a>;
  } else {
    return <Link className="text-slate-800 m-1" to={link}>
      <li className="inline md:p-3 p-1 tracking-widest hover:underline hover:text-white-light
       hover:bg-slate-600 transition-all duration-200">
        {linktext}
      </li>
    </Link>;
  }
};

const TopBarLinks = () =>
  <ul className="flex flex-col md:flex-row md:items-center list-none text-sm md:text-base md:m-1 p-0">
    <TopBarButton link="/" linktext="Home" />
    <TopBarButton link="/about" linktext="About" />
    <TopBarButton link="https://tctp.xyz/" linktext="Blog" extern={true} />
    <TopBarButton link="/portfolio" linktext="Portfolio" />
    <TopBarButton link="/contact" linktext="Contact" />
  </ul>;

const TopBar = ({ page }) => {
  return <div className="flex flex-col md:flex-row justify-between text-slate-800 bg-white pb-2 md:p-1 border">
    <div className="flex flex-row justify-between">
      <Link to="/"><HomeLogo path={page} /></Link>
      <div className='flex items-center p-2 md:hidden'>
        <FiMenu />
      </div>
    </div>
    <TopBarLinks />
  </div>;
};

export default TopBar;