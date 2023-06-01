import preval from 'preval.macro';
import { SiReact, SiTailwindcss, SiMaterialdesign } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';

const AboutSite = () =>
  <details className="font-aboutmono font-bold text-slate-600 md:text-2xl text-lg my-4 md:my-6 ">
    <summary className="">This website is built using:</summary>
    <ul className="flex flex-col mb-5 font-normal open:font-bold md:text-xl text-base">
      <li className="mr-auto"><a href="https://reactjs.org/" className="flex items-center mx-1 my-2 p-1 border
       border-blue-react hover:bg-blue-react hover:text-white hover:underline transition-all duration-200">
        <SiReact className="mr-1" />ReactJS</a></li>
      <li className="mr-auto"><a href="https://tailwindcss.com/" className="flex items-center mx-1 my-2 p-1 border
       border-blue-tailwind hover:bg-blue-tailwind hover:text-white hover:underline transition-all duration-200">
        <SiTailwindcss className="mr-1" />Tailwind CSS</a></li>
      <li className="mr-auto"><a href="https://www.material-tailwind.com/" className="flex items-center mx-1 my-2 p-1
       border border-blue-mui hover:bg-blue-mui hover:text-white hover:underline transition-all duration-200">
        <SiMaterialdesign className="mr-1" />Material Tailwind</a></li>
    </ul>
    Check the source code <a
      href="https://github.com/furquan-lp/simpledev.site/" className="underline hover:text-blue-500">here</a>.
    Report bugs <a href="https://github.com/furquan-lp/simpledev.site/issues"
      className="underline hover:text-blue-500">here</a>.
    <p>Build {preval`module.exports = new Date().toISOString();`}</p>
  </details>;

export default AboutSite;