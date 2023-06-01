import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const HomeLogo = ({ path }) =>
  <div className="font-logofont text-xl md:text-2xl p-2 m-1 text-slate-800 outline-1">
    <span className="home-logo-ul select-none">
      <span className="font-bold underline md:no-underline">NEXT</span>
      DEV.IN
    </span>
    {` // ${path.toUpperCase()}`}
  </div>;

const GrayButton = ({ text, highlight }) => {
  console.log(text, 'for', highlight)
  if (highlight) {
    return (<li className="inline md:p-3 p-1 tracking-widest hover:underline text-white-light
  bg-slate-600 active:bg-slate-500 active:text-white-light select-none transition-all duration-200">
      {text}
    </li>);
  } else {
    return (
      <li className="inline md:p-3 p-1 tracking-widest hover:underline hover:text-white-light
       hover:bg-slate-600 active:bg-slate-500 active:text-white-light select-none transition-all duration-200">
        {text}
      </li>);
  }
}

const TopBarButton = ({ link, linktext, extern, highlight }) => {
  if (extern) {
    return <a href={link} className="text-slate-800 m-1">
      <GrayButton text={linktext} highlight={highlight} />
    </a>;
  } else {
    return <Link className="text-slate-800 m-1" to={link}>
      <GrayButton text={linktext} highlight={highlight} />
    </Link>;
  }
};

const TopBarLinks = ({ navToggled, highlight }) => {
  if (navToggled)
    return <ul className="flex flex-col md:flex-row md:items-center list-none text-sm md:text-base md:m-1 p-0
     fade-in-element">
      <TopBarButton link="/" linktext="Home" highlight={highlight[0]} />
      <TopBarButton link="/about" linktext="About" highlight={highlight[1]} />
      <TopBarButton link="https://blog.nextdev.in/" linktext="Blog" extern={true} highlight={highlight[2]} />
      <TopBarButton link="/portfolio" linktext="Portfolio" highlight={highlight[3]} />
      <TopBarButton link="/contact" linktext="Contact" highlight={highlight[4]} />
    </ul>;
};

const TopBar = ({ page, highlight }) => {
  const [navButtonToggled, setNav] = useState(window.innerWidth < 720 ? 0 : 1);
  const menuStyle = navButtonToggled ? 'border-0 text-white bg-slate-500 active:bg-slate-600' : 'active:bg-slate-200';

  return <div className="flex flex-col md:flex-row justify-between text-slate-800 bg-white p-1 border">
    <div className="flex flex-row justify-between">
      <Link to="/"><HomeLogo path={page} /></Link>
      <div className={`flex items-center m-2 p-2 md:hidden rounded-sm transition-colors duration-200 border
       border-slate-300 ${menuStyle}`}
        onClick={() => setTimeout(() => setNav(!navButtonToggled), 20)}>
        <FiMenu />
      </div>
    </div>
    <TopBarLinks navToggled={navButtonToggled} highlight={highlight} />
  </div>;
};

export default TopBar;