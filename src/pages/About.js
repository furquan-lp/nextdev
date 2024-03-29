import { Link } from 'react-router-dom';

import { Tooltip } from '@material-tailwind/react';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

import { usePageTitle } from '../myHooks';

export const About = ({ backendInfo }) => {
  usePageTitle('About');
  return (<div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
    <TopBar page="about" highlight={[false, true, false, false, false]} />
    <div className="flex flex-col md:mx-6 xl:mx-32 2xl:mx-60 my-2 text-slate-800">
      <div className="flex flex-col md:flex-row md:mb-2 bg-white/95">
        <div className="flex flex-col justify-center items-center md:items-stretch md:justify-around py-2
         md:px-1 md:py-1 mx-1 md:mr-px md:ml-0 border shadow-lg">
          <img src="/me.webp" className="rounded-lg w-3/4 md:w-full h-max mb-2 md:mb-0"
            alt="a profile photograph of me" />
          <div className="flex shrink my-0 items-center justify-around">
            <Tooltip content="Check my LinkedIn">
              <a href="https://www.linkedin.com/in/syed-ahmad-nextdev/" className="p-2 border mx-2 md:mx-0
             hover:bg-gray-100 hover:border-gray-100 rounded-full justify-center items-center transition-all
              duration-200">
                <FiLinkedin />
              </a>
            </Tooltip>
            <Tooltip content="Contact my Gmail">
              <a href="mailto:furquan.lp@gmail.com" className="p-2 border mx-2 md:mx-0 hover:bg-gray-100
             hover:border-gray-100 rounded-full justify-center items-center transition-all duration-200">
                <SiGmail />
              </a>
            </Tooltip>
            <Tooltip content="Contact my email">
              <a href="mailto:syed@nextdev.in" className="p-2 border mx-2 md:mx-0 hover:bg-gray-100
             hover:border-gray-100 rounded-full justify-center items-center transition-all duration-200">
                <FiMail />
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="block md:hidden mt-2 mb-0 md:my-0"><Bar /></div>
        <div className="border shadow-lg mx-1 my-2 md:ml-px md:mr-0 md:my-0 p-1 md:max-w-xl xl:max-w-3xl 2xl:max-w-5xl">
          <div className="flex font-aboutfont text-4xl md:text-5xl justify-center">About Me</div>
          <div className="flex flex-col justify-between text-xl md:text-2xl py-2 font-abouttext">
            <div className="my-1">Hello! I'm Syed Ahmad and I like to build stuff on the web. Ever since I remember
              coming into contact with computers and had an idea of how they worked, I have loved to program.</div>
            <div className="my-1">So far I'm learning and have worked with various web technologies and frameworks like
              Next.js, React, React Native, Tailwind CSS, etc. (see further down below for more on that). And I am
              learning everyday, furthering my skills so I can be a better full-stack developer. I'm based in Kolkata,
              India (though open to relocating, given the opportunity) and currently pursuing a bachelor's degree in
              engineering.</div>

            <div className="mt-8">If this has interested you enough, maybe you'd like to see some of the <Link
              className="underline text-blue-500 hover:text-inherit transition-all duration-200" to="/portfolio">
              things I've built</Link> or perhaps you just want to <Link className="underline text-blue-500
               hover:text-inherit transition-all duration-200" to="/contact">chat for a bit</Link>. I'm always actively
              looking for opportunities to utilize and further my skills. Thank you for your time.</div>
          </div>
        </div>
      </div>
      <Bar />
      <div className="flex flex-col font-abouttext bg-white/95 my-2 border shadow-lg p-2 md:p-4 mx-1 md:mx-0">
        <span className="font-bold text-3xl md:text-4xl">Stuff I have worked with...</span>
        <span className="text-xl md:text-2xl my-2">These days I mostly work on websites/web-apps usually using
          TypeScript with <u>Next.js</u> or <u>React</u> (which this website is also built on). I have built websites
          using pure JavaScript/HTML/CSS where storage and performance constraints demanded so (with my tiny website at
          espdev.cloud) but I would always prefer React or Next.js simply because of the development convenience.</span>
        <span className="text-xl md:text-2xl my-2">I've also worked with <u>React Native</u> for quite a bit, for my <i>
          WebEnv</i> frontend (for my envmon microcontroller). React Native seemed like the natural evolution from React
          but the developer experience made me realize that it has critical differences with regular React and web
          development in general.</span>
        <span className="text-xl md:text-2xl my-2">I've also worked with <u>Gatsby</u> having used it in my <i>The Chip
          Tinker Project (TCTP)</i> blog which I ran for a year. Gatsby is a nice static site generator (SSG) but it's
          not simple to use and I had to learn GraphQL to work with it. I've since switched to
          using <u>Next.js</u> or <u>Astro.build</u> for new static site projects.</span>
        <span className="text-xl md:text-2xl my-2">On the backend side, I've worked with Node.js and Flask and in
          databases I've used both PostgreSQL and MongoDB for my projects.</span>
        <span className="text-xl md:text-2xl my-2">On the embedded side, I've worked with microcontrollers like Arduino,
          ESP32 and ESP8266 (NodeMCU) with my <i>WebEnv</i> project using an ESP32 backend and <i>ESPWeb</i> using a
          NodeMCU backend.
        </span>
      </div>
      <Bar />
      <div className="flex flex-col font-abouttext bg-white/95 my-2 border shadow-lg p-2 md:p-4 mx-1 md:mx-0">
        <span className="font-bold text-3xl md:text-4xl">Programming languages and technologies I'm
          learning right now...</span>
        <span className="text-xl md:text-2xl my-2">At the moment I'm learning the ins and outs of the backend of web
          development. It has become especially crucial the further I've dived into web development. Even during the
          development of this website, jumping in with relatively little idea of the backend made the development
          somewhat cumbersome.</span>
        <span className="text-xl md:text-2xl my-2">As a part of that endeavor I've been learning SQL (PostgreSQL
          specifically) and databases in general. Among
          web frameworks, I don't plan to hop on to every hot new framework being released since JavaScript frameworks
          from my experience often tend to lack staying power. That being said, I've been learning <u>Next.js</u> and
          using it for my <i>frontend-2023</i> project, and so far it's been a smooth experience.</span>
        <span className="text-xl md:text-2xl my-2">In the meantime I also plan to learn machine learning for a cool
          project—<i>maze4two.com</i>—I've been meaning to do for a while involving a maze generator and training a
          model to solve procedurally generated mazes.</span>
      </div>
    </div>
    <Footer version={backendInfo.version} backend={backendInfo.backendName} />
  </div>);
};