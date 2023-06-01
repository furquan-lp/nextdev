import { FiArrowRight, FiSend } from 'react-icons/fi';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const HiBox = () =>
  <div className="flex flex-wrap md:flex-nowrap justify-around text-slate-800">
    <div className="flex flex-col text-4xl md:text-6xl my-2 mx-1 px-8 py-4 md:my-5 md:mr-5 md:px-24 md:py-10 flex-grow
       font-aboutfont tracking-wide bg-white/90 shadow-lg border border-slate-100">
      <span className="my-1">Hi,</span>
      <span className="my-1">I'm Syed</span>
      <span className="my-1">Web Developer</span>
      <a href="/resume-latest.pdf" className="flex items-center mt-5 mr-auto p-1 text-xl md:text-2xl border
         border-slate-400 bg-slate-200 hover:underline hover:text-white hover:bg-slate-600 active:text-white
          active:bg-slate-500 transition-all duration-200">Résumé <FiArrowRight /></a>
    </div>
    <div className="flex flex-col text-3xl md:text-5xl my-2 mx-1 px-8 py-4 md:my-5 md:ml-5 md:px-20 md:py-10 flex-grow
       font-cardtitle bg-white/90 shadow-lg border border-slate-100">
      <i className="flex mb-4 self-center"><MdKeyboardDoubleArrowRight />About Me</i>
      <div className="flex justify-center font-aboutmono text-teal-600 text-3xl typewriter ">//---Coder---//</div>
      <div className="flex justify-center font-aboutmono text-orange-600 text-3xl typewriter ">//--Tinkerer--//</div>
      <div className="flex justify-center font-aboutmono text-green-600 text-3xl typewriter ">//---Hacker---//</div>
      <div className="flex justify-center font-aboutmono text-3xl mt-5 lineUp ">The next developer for your organization?</div>
      <div className='self-center'>
        <a href="mailto:mail@exmaple.com" className="flex items-center mt-3 mr-auto p-1 text-xl md:text-2xl border
         border-slate-400 bg-slate-200 hover:underline hover:text-white hover:bg-slate-600 active:text-white
          active:bg-slate-500 transition-all duration-200">Contact <FiSend className="ml-0.5" /></a></div>
    </div>
  </div>;

export default HiBox;