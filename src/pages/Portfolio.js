import { FiExternalLink } from 'react-icons/fi';
import { SiReact } from 'react-icons/si';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

import testImg from '../assets/simpledev-screenshot.png';

const PortfolioCardImage = ({ image, alt }) =>
  <img src={image} alt={alt} className="p-1 h-1/2 md:w-1/3 md:h-80 bg-white/90 border shadow-lg" />;

const PortfolioCardTag = ({ text, color, children }) =>
  <div className={`flex p-1.5 mr-auto rounded my-2 md:my-0 md:text-lg ${color}`}>
    {children}
    <span className="ml-1">{text}</span>
  </div>;

const PortfolioCardText = ({ title, text, tags, code, link, margin }) =>
  <div className={`flex flex-col max-h-fit justify-around grow p-4 text-slate-700 bg-white/90 border shadow-lg
   ${margin}`}>
    <span className="flex flex-col">
      <span className="my-2 md:my-6 font-abouttext text-3xl md:text-4xl">{title}</span>
      <span className="my-2 text-lg md:text-xl">{text}</span>
    </span>
    <PortfolioCardTag text="React" color="bg-blue-react text-white">
      <SiReact className="self-center" />
    </PortfolioCardTag>
    <span className="flex">
      {code && <a href={code} className="flex items-center mr-2 p-1 text-lg md:text-xl border
         border-slate-400 bg-slate-200 hover:underline hover:text-white hover:bg-slate-600 active:text-white
          active:bg-slate-500 transition-all duration-200">Source Code<FiExternalLink className="ml-1" /></a>}
      {link && <a href={link} className="flex items-center mr-auto p-1 text-lg md:text-xl border
         border-slate-400 bg-slate-200 hover:underline hover:text-white hover:bg-slate-600 active:text-white
          active:bg-slate-500 transition-all duration-200">Visit site<FiExternalLink className="ml-1" /></a>}
    </span>
  </div>;

const PortfolioCard = ({ image, title, text, tags, codeLink, siteLink, reverse }) => {
  if (reverse) {
    return <div className="flex flex-col md:flex-row">
      <PortfolioCardText title={title} text={text} tags={tags} code={codeLink} link={siteLink}
        margin="mb-1 md:mb-0 md:mr-1" />
      <PortfolioCardImage image={image} alt={title} />
    </div>;
  } else {
    return <div className="flex flex-col md:flex-row">
      <PortfolioCardImage image={image} alt={title} />
      <PortfolioCardText title={title} text={text} tags={tags} code={codeLink} link={siteLink}
        margin="mt-1 md:mt-0 md:ml-1" />
    </div>;
  }
};

export const Portfolio = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
    <TopBar page="portfolio" highlight={[false, false, false, true, false]} />
    <div className="flex flex-col mx-1 md:mx-24">
      <span className="font-aboutfont text-4xl md:text-5xl my-2 mt-4">Stuff I've built (and have been working on)</span>
      <span className="mb-4 md:mb-6"><Bar /></span>
      <PortfolioCard image={testImg} title="SimpleDev.site" text="SimpleDev.site is my portfolio website built with
       React. You are HERE." codeLink="https://github.com/furquan-lp/" siteLink="https://oldsite.nextdev.in/" />
    </div>
    <div className="sticky top-[100vh]"><Footer /></div>
  </div>;