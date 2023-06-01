import { Link } from 'react-router-dom';

import { FiLinkedin, FiMail } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

export const About = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat ">
    <TopBar page="home" highlight={[false, true, false, false, false]} />
    <div className="flex flex-col md:mx-60 my-2 text-slate-800">
      <div className="flex flex-col md:flex-row bg-white/95">
        <div className="flex flex-col justify-center items-center md:items-stretch md:justify-around flex-grow py-2 md:px-1 md:py-1 mx-1
         md:mr-px md:ml-0 border shadow-lg">
          <img src="/me.webp" className="rounded-lg w-3/4 md:w-full mb-2 md:mb-0" alt="a profile photo of myself" />
          <div className="flex flex-shrink my-0 items-center justify-around">
            <a href="https://www.linkedin.com/in/syed-ahmad-8226b7221/" className="p-2 border mx-2 md:mx-0 hover:bg-gray-100
             hover:border-gray-100 rounded-full justify-center items-center transition-all duration-200">
              <FiLinkedin />
            </a>
            <a href="mailto:mail@example.com" className="p-2 border mx-2 md:mx-0 hover:bg-gray-100 hover:border-gray-100
             rounded-full justify-center items-center transition-all duration-200"><SiGmail /></a>
            <a href="mailto:mail@example.com" className="p-2 border mx-2 md:mx-0 hover:bg-gray-100 hover:border-gray-100
             rounded-full justify-center items-center transition-all duration-200"><FiMail /></a>
          </div>
        </div>
        <div className="border shadow-lg mx-1 my-2 md:ml-px md:mr-0 md:my-0 p-1 max-w-5xl ">
          <div className="flex font-aboutfont text-4xl md:text-5xl justify-center">About Me</div>
          <div className="flex flex-col justify-between text-xl md:text-2xl py-2 font-abouttext">
            <div className="my-1">Hello! I'm Syed Ahmad and I like to build web applications. Ever since I remember coming
              into contact with computers and had a vague idea of how they worked, I have loved to program.</div>
            <div className="my-1">So far I'm learning and have worked with various JavaScript frameworks like Node, React,
              React Native, Tailwind CSS and GatsbyJS. And I am learning everyday, furthering my skills towards the
              eventual goal of becoming a true full stack developer. I'm based in Kolkata, India (though okay with
              relocating, given the opportunity) and presently pursuing an undergrad degree in engineering.</div>

            <div className="mt-12">If this interested you enough, maybe you'd like to see some of the <Link
              className="underline hover:text-blue-500 hover:underline transition-all duration-200" to="/portfolio">
              things I've built</Link> or perhaps you just want to <Link
                className="underline hover:text-blue-500 hover:underline transition-all duration-200" to="/contact">
                chat for a bit</Link>. I'm always actively looking for opportunities to utilize and further my skills so
              thank you for your time.</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>;