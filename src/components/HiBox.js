import { FiArrowRight } from 'react-icons/fi';

const HiBox = () =>
  <div className="flex flex-wrap md:flex-nowrap justify-around text-slate-800">
    <div className="clipped-shadow flex-grow shadow-lg md:shadow-none my-2 md:m-0">
      <div className="flex flex-col text-4xl md:text-6xl my-2 px-8 py-4 md:my-5 md:px-24 md:py-10 flex-grow
       font-aboutfont tracking-wide bg-white/90 clipped-card-right">
        <span className="my-1">Hi,</span>
        <span className="my-1">I'm Syed</span>
        <span className="my-1">Web Developer</span>
        <a href="/resume-latest.pdf" className="flex items-center mt-5 mr-auto p-1 text-xl md:text-2xl border
         border-slate-400 bg-slate-200 hover:underline hover:text-white hover:bg-slate-600 active:text-white
          active:bg-slate-500 transition-all duration-200">Résumé <FiArrowRight /></a>
      </div>
    </div>
    <div className="clipped-shadow flex-grow shadow-lg md:shadow-none my-2 md:m-0">
      <div className="flex flex-col text-3xl md:text-5xl my-2 px-8 py-4 md:my-5 md:px-24 md:py-10 flex-grow
       font-cardtitle items-center bg-white/90 clipped-card-left">
        <i>About Me</i>
      </div>
    </div>
  </div>;

export default HiBox;