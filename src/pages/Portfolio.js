import { FiExternalLink } from 'react-icons/fi';
import {
  SiJavascript, SiReact, SiTailwindcss, SiGatsby, SiMui, SiMaterialdesign, SiArduino, SiCplusplus, SiGnubash,
  SiNodedotjs, SiExpress, SiMongodb
} from 'react-icons/si';
import { TbBrandReactNative, TbQuestionMark } from 'react-icons/tb';
import { BiMicrochip } from 'react-icons/bi';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

import { usePageTitle } from '../myHooks';

const resolvePTagIcon = (tech) => {
  switch (tech) {
    case 'js': return <SiJavascript />;
    case 'react': return <SiReact />;
    case 'react-native': return <TbBrandReactNative />;
    case 'tailwind': return <SiTailwindcss />;
    case 'gatsby': return <SiGatsby />;
    case 'mui': return <SiMui />;
    case 'material': return <SiMaterialdesign />;
    case 'arduino': return <SiArduino />;
    case 'cpp': return <SiCplusplus />;
    case 'bash': return <SiGnubash />;
    case 'esp': return <BiMicrochip />;
    case 'node': return <SiNodedotjs />;
    case 'express': return <SiExpress />;
    case 'mongodb': return <SiMongodb />;
    default: return <TbQuestionMark />;
  }
};

const resolvePTagColor = (tech) => {
  switch (tech) {
    case 'js': return 'bg-yellow-js text-slate-800';
    case 'react': return 'bg-slate-600 text-blue-react';
    case 'react-native': return 'bg-blue-react text-white';
    case 'tailwind': return 'bg-blue-tailwind text-white';
    case 'gatsby': return 'bg-purple-gatsby text-white';
    case 'mui': return 'bg-blue-mui text-white';
    case 'material': return 'bg-blue-400 text-white';
    case 'arduino': return 'bg-green-arduino text-white';
    case 'cpp': return 'bg-blue-cpp text-white';
    case 'bash': return 'bg-gray-bash text-white';
    case 'esp': return 'bg-gray-chip text-white';
    case 'node': return 'bg-slate-50 text-green-500';
    case 'express': return 'bg-slate-100 text-slate-500';
    case 'mongodb': return 'bg-green-500 text-white';
    default: return 'bg-red-700 text-white';
  }
};

const PortfolioCardImage = ({ image, alt }) =>
  <img src={image} alt={alt} className="p-1 bg-white/90 border shadow-lg" />;

const PortfolioCardTag = ({ tech, text }) =>
  <div className={`flex items-center p-1 md:p-1.5 mr-1 md:mr-2 rounded my-1 md:my-0 md:text-lg
   ${resolvePTagColor(tech)}`}>
    {resolvePTagIcon(tech)}
    <span className="ml-1">{text}</span>
  </div>;

const PortfolioCardText = ({ title, text, tags, code, link }) =>
  <div className="flex flex-col max-h-fit justify-around grow p-4 text-slate-700 bg-white/90 border shadow-lg mt-1">
    <span className="flex flex-col">
      <span className="my-2 md:my-6 font-abouttext text-3xl md:text-4xl">{title}</span>
      <span className="my-2 text-lg md:text-xl">{text}</span>
    </span>
    <span className="flex md:my-0 my-2 flex-wrap">
      {tags.map(t => <PortfolioCardTag tech={t.tech} text={t.text} />)}
    </span>
    <span className="flex">
      {code && <a href={code} className="flex items-center mr-2 p-1 text-lg md:text-xl border
         border-slate-400 bg-slate-200 hover:underline hover:text-white hover:bg-slate-600 active:text-white
          active:bg-slate-500 transition-all duration-200">Source Code<FiExternalLink className="ml-1" /></a>}
      {link && <a href={link} className="flex items-center mr-auto p-1 text-lg md:text-xl border
         border-slate-400 bg-slate-200 hover:underline hover:text-white hover:bg-slate-600 active:text-white
          active:bg-slate-500 transition-all duration-200">Visit site<FiExternalLink className="ml-1" /></a>}
    </span>
  </div>;

const PortfolioCard = ({ image, title, text, tags, codeLink, siteLink }) =>
  <div className="flex flex-col mb-2 md:mb-20">
    <PortfolioCardImage image={image} alt={title} />
    <PortfolioCardText title={title} text={text} tags={tags} code={codeLink} link={siteLink} />
  </div>;

const PortfolioCardPlaceholder = () =>
  <div className="flex flex-col md:flex-row">
    <div className="border bg-white/90 shadow-lg md:grow md:max-w-xl">
      <div className="p-20 md:p-0 rounded-md m-2 md:h-72 bg-slate-200 animate-pulse" />
    </div>
    <div className="flex flex-col max-h-fit justify-around grow p-4 text-slate-700 bg-white/90 border shadow-lg mt-1
     md:mt-0 md:ml-1">
      <span className="p-3 my-1 md:p-6 md:my-4 bg-slate-300 animate-pulse" />
      <span className="p-3 my-1 px-28 mr-auto md:p-5 md:mr-20 md:mb-5 bg-slate-300 animate-pulse" />
      <span className="p-3 my-1 px-20 mr-auto md:p-4 md:mr-32 md:my-10 bg-slate-300 animate-pulse" />
    </div>
  </div>;

export const Portfolio = ({ portfolio, apiURL, backendVersion }) => {
  usePageTitle('Portfolio');
  return (<div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
    <TopBar page="portfolio" highlight={[false, false, false, true, false]} />
    <div className="flex flex-col mx-1 lg:mx-24 xl:mx-80">
      <span className="font-aboutfont text-4xl md:text-5xl my-2 mt-4">Stuff I've built (and have been working on)</span>
      <span className="mb-4 md:mb-12"><Bar /></span>
      {portfolio ? portfolio.map(p =>
        <PortfolioCard image={`${apiURL}${p.image}`} title={p.title} text={p.text} tags={p.tags} codeLink={p.repo}
          siteLink={p.site} key={p.id} />) : <PortfolioCardPlaceholder />}
    </div>
    <Footer version={backendVersion.version} />
  </div>);
}