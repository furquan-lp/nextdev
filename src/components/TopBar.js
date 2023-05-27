import { Link } from 'react-router-dom';

const HomeLogo = ({ path }) =>
  <div className="font-logofont md:text-2xl p-2 m-1 text-slate-800 outline-1">
    <span className="home-logo-ul"><b>NEXT</b>DEV.IN</span> // HOME
  </div>;

const TopBarButton = ({ link, linktext, extern }) => {
  if (extern) {
    return <a href={link} className="text-slate-800">
      <li className="inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:underline hover:text-white-light
       hover:bg-slate-600 transition-all duration-200">
        {linktext}
      </li>
    </a>;
  } else {
    return <Link className="text-slate-800" to={link}>
      <li className="inline md:m-1 m-px md:p-3 p-1 tracking-widest hover:underline hover:text-white-light
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

const TopBar = ({ page }) =>
  <div className="flex flex-col md:flex-row justify-between text-slate-800 bg-white pb-2 md:p-1 border">
    <Link to="/"><HomeLogo path={page} /></Link>
    <TopBarLinks />
  </div>;

export default TopBar;