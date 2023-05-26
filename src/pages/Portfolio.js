import { FiExternalLink } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiMui } from 'react-icons/si';
import { SiArduino } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiGnubash } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiMicrochip } from 'react-icons/bi';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

import projects from '../projects.json';

const resolvePTag = (tech) => {
  switch (tech) {
    case 'js': return {
      text: 'JavaScript', bg: 'bg-yellow-js', textcolor: 'text-slate-800'
    };
    case 'react': return {
      text: 'React',
      bg: 'bg-slate-600 hover:bg-slate-600/50',
      textcolor: 'text-blue-react',
      link: 'https://reactjs.org/'
    };
    case 'react-native': return {
      text: 'React Native',
      bg: 'bg-blue-react hover:bg-blue-react/50',
      textcolor: 'text-white',
      link: 'https://reactnative.dev/'
    };
    case 'tailwind': return {
      text: 'Tailwind CSS',
      bg: 'bg-blue-tailwind hover:bg-blue-tailwind/50',
      textcolor: 'text-white',
      link: 'https://tailwindcss.com/'
    };
    case 'flowbite': return {
      text: 'Flowbite (with Tailwind)',
      bg: 'bg-blue-700 hover:bg-blue-700/50',
      textcolor: 'text-white',
      link: 'https://flowbite.com/'
    };
    case 'gatsby': return {
      text: 'Gatsby',
      bg: 'bg-purple-gatsby hover:bg-purple-gatsby/50',
      textcolor: 'text-white',
      link: 'https://www.gatsbyjs.com/'
    };
    case 'mui': return {
      text: 'Material UI',
      bg: 'bg-blue-mui hover:bg-blue-mui/50',
      textcolor: 'text-white',
      link: 'https://mui.com/material-ui/'
    };
    case 'arduino': return {
      text: 'Arduino',
      bg: 'bg-green-arduino hover:bg-green-arduino/50',
      textcolor: 'text-white',
      link: 'https://www.arduino.cc/'
    };
    case 'cpp': return { text: 'C++', bg: 'bg-blue-cpp', textcolor: 'text-white' };
    case 'bash': return { text: 'bash (shell script)', bg: 'bg-gray-bash', textcolor: 'text-white' };
    case 'esp32': return {
      text: 'ESP32 Microcontroller',
      bg: 'bg-gray-chip hover:bg-stone-700',
      textcolor: 'text-white',
      link: 'https://www.espressif.com/en/products/socs/esp32'
    };
    default: return { text: 'An error occurred', bg: 'bg-red-700', textcolor: 'text-white' };
  }
};

const resolvePTagIcon = (tech) => {
  switch (tech) {
    case 'js': return <SiJavascript className="mr-1" />;
    case 'react': return <SiReact className="mr-1" />;
    case 'react-native': return <TbBrandReactNative className="mr-1" />;
    case 'tailwind': return <SiTailwindcss className="mr-1" />;
    case 'flowbite': return <MdOutlineViewCarousel className="mr-1" />;
    case 'gatsby': return <SiGatsby className="mr-1" />;
    case 'mui': return <SiMui className="mr-1" />;
    case 'arduino': return <SiArduino className="mr-1" />;
    case 'cpp': return <SiCplusplus className="mr-1" />;
    case 'bash': return <SiGnubash className="mr-1" />;
    case 'esp32': return <BiMicrochip className="mr-1" />;
    default: return undefined;
  }
};

const resolvePTagImgSize = (imgsize) => {
  switch (imgsize) {
    case 'rect': return "h-1/2 w-full md:w-1/2 md:h-80";
    case 'square': return "h-full w-80 md:w-96 md:h-96";
    default: return "md-full w-full";
  }
};

const PCardTag = ({ ptag, children }) => {
  if (ptag.link) {
    return (
      <a href={ptag.link} className={`${ptag.textcolor} hover:underline`}>
        <div className={`flex items-center rounded-md p-1 m-1 text-sm md:text-base ${ptag.bg} transition-all duration-200`}>
          {children}
          {ptag.text}
        </div>
      </a>);
  } else {
    return (<div className={`flex items-center rounded-md p-1 m-1 text-sm md:text-base ${ptag.bg} ${ptag.textcolor}`}>
      {children}
      {ptag.text}
    </div>);
  }
};

const PCardTags = ({ tech }) =>
  <div className="flex flex-wrap md:flex-nowrap mx-1">
    {tech.map((t, i) => <PCardTag ptag={resolvePTag(t)} key={`${tech}${String.fromCharCode(i + 32)}${i}`}>
      {resolvePTagIcon(t)}
    </PCardTag>
    )}
  </div>;

const ExternalLinkButton = ({ linktext, link }) =>
  <a href={link} className="flex items-center text-lg md:text-2xl underline md:no-underline mx-2 my-5 p-1.5 rounded
  bg-blue-gray hover:text-green-light active:text-white hover:bg-transparent md:hover:underline
transition-all duration-200">
    {linktext}
    <FiExternalLink className="ml-0.5 md:h-2/3" />
  </a>;

const PCard = ({ title, description, tech, source, demo, demotext, image, imgsize }) =>
  <div className="flex flex-wrap md:flex-nowrap justify-between m-2 md:m-5 px-2 md:px-6 py-4 shadow-md rounded-md
   bg-green-dark/75 text-white">
    <div className="flex flex-col">
      <span className="p-2 text-3xl md:text-5xl font-bold">{title}</span>
      <div className="p-2 my-4 text-lg md:text-xl">{description}</div>
      <PCardTags tech={tech} />
      <div className="flex">
        <ExternalLinkButton linktext="Source Code" link={source} />
        {demo ?
          <ExternalLinkButton linktext={demotext ? demotext : "Visit demo"} link={source} /> : <></>}
      </div>
    </div>
    <img src={image} className={`${resolvePTagImgSize(imgsize)} rounded-lg`} alt={`${title} screenshot`} />
  </div>;

const PCards = ({ projects }) =>
  <>
    {projects.map((p, i) => <PCard title={p.name} description={p.description} tech={p.tech} source={p.source}
      demo={p.demo} demotext={p.demotext} image={p.img} imgsize={p.imgsize}
      key={`${Object.keys(p)}${String.fromCharCode(i + 32)}${i}`} />)}
  </>;

const Portfolio = () =>
  <div className="bg-mountains-blur bg-center bg-cover bg-no-repeat">
    <TopBar page="portfolio" />
    <div className="mx-1 md:mx-auto md:max-w-screen-xl">
      <p className="text-white text-2xl md:text-4xl my-5 mx-5 font-bold">
        Here are the projects that I've worked (and am working) on:
      </p>
      <PCards projects={projects} />
    </div>
    <Footer />
  </div>;

export default Portfolio;