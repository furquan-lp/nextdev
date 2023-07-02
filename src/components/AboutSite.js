import preval from 'preval.macro';
import { SiReact, SiTailwindcss, SiMaterialdesign } from 'react-icons/si';

const AboutSite = () =>
  <details className="font-aboutmono font-bold text-slate-600 md:text-2xl text-lg my-4 md:my-6 mx-1 md:mx-0">
    <summary className="cursor-pointer">More about this website...</summary>
    <div className="flex flex-col md:items-center">
      This website is built using
      <div className="flex flex-col md:flex-row my-2 md:my-4">
        <span className="flex flex-col border border-blue-react text-blue-react items-center m-1 md:mx-2">
          <SiReact className="text-6xl m-2" />
          <a href="https://reactjs.org/" className="border-t border-blue-react mt-1 p-2 text-xl hover:bg-blue-react
           hover:text-white hover:underline active:text-white active:bg-blue-react transition-all duration-200">
            ReactJS</a>
        </span>
        <span className="flex flex-col border border-blue-tailwind text-blue-tailwind items-center m-1 md:mx-2">
          <SiTailwindcss className="text-6xl m-2" />
          <a href="https://reactjs.org/" className="border-t border-blue-tailwind mt-1 p-2 text-xl
           hover:bg-blue-tailwind hover:text-white hover:underline active:text-white active:bg-blue-tailwind
            transition-all duration-200">Tailwind</a>
        </span>
        <span className="flex flex-col border border-blue-mui text-blue-mui items-center m-1 md:mx-2">
          <SiMaterialdesign className="text-6xl m-2" />
          <a href="https://reactjs.org/" className="border-t border-blue-mui mt-1 p-2 text-xl hover:bg-blue-mui
           hover:text-white hover:underline active:text-white active:bg-blue-mui transition-all duration-200">
            Material<br />Tailwind</a>
        </span>
      </div>
    </div>
    Check the source code <a
      href="https://github.com/furquan-lp/nextdev/" className="underline hover:text-blue-500">here</a>.
    Report bugs <a href="https://github.com/furquan-lp/nextdev/issues"
      className="underline hover:text-blue-500">here</a>.
    <p>Build {preval`module.exports = new Date().toISOString();`}</p>
  </details>;

export default AboutSite;