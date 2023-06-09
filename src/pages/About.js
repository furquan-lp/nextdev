import { Link } from 'react-router-dom';

import { FiLinkedin, FiMail } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

export const About = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat">
    <TopBar page="about" highlight={[false, true, false, false, false]} />
    <div className="flex flex-col md:mx-60 my-2 text-slate-800">
      <div className="flex flex-col md:flex-row md:mb-2 bg-white/95">
        <div className="flex flex-col justify-center items-center md:items-stretch md:justify-around grow py-2
         md:px-1 md:py-1 mx-1 md:mr-px md:ml-0 border shadow-lg">
          <img src="/me.webp" className="rounded-lg w-3/4 md:w-full mb-2 md:mb-0" alt="a profile photograph of myself" />
          <div className="flex shrink my-0 items-center justify-around">
            <a href="https://www.linkedin.com/in/syed-ahmad-8226b7221/" className="p-2 border mx-2 md:mx-0
             hover:bg-gray-100 hover:border-gray-100 rounded-full justify-center items-center transition-all
              duration-200">
              <FiLinkedin />
            </a>
            <a href="mailto:mail@example.com" className="p-2 border mx-2 md:mx-0 hover:bg-gray-100
             hover:border-gray-100 rounded-full justify-center items-center transition-all duration-200">
              <SiGmail />
            </a>
            <a href="mailto:mail@example.com" className="p-2 border mx-2 md:mx-0 hover:bg-gray-100
             hover:border-gray-100 rounded-full justify-center items-center transition-all duration-200">
              <FiMail />
            </a>
          </div>
        </div>
        <div className="block md:hidden mt-2 mb-0 md:my-0"><Bar /></div>
        <div className="border shadow-lg mx-1 my-2 md:ml-px md:mr-0 md:my-0 p-1 max-w-5xl">
          <div className="flex font-aboutfont text-4xl md:text-5xl justify-center">About Me</div>
          <div className="flex flex-col justify-between text-xl md:text-2xl py-2 font-abouttext">
            <div className="my-1">Hello! I'm Syed Ahmad and I like to build web applications. Ever since I remember
              coming into contact with computers and had a vague idea of how they worked, I have loved to program.</div>
            <div className="my-1">So far I'm learning and have worked with various JavaScript frameworks like Node,
              React, React Native, Tailwind CSS and GatsbyJS. And I am learning everyday, furthering my skills towards
              the eventual goal of becoming a true full stack developer. I'm based in Kolkata, India (though okay with
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
      <Bar />
      <div className="flex flex-col font-abouttext bg-white/95 my-2 border shadow-lg p-2 md:p-4 mx-1 md:mx-0">
        <span className="font-bold text-3xl md:text-4xl">Stuff I have worked with...</span>
        <span className="text-xl md:text-2xl my-2">These days I mostly work on websites (or a web fontend for some
          other piece of tech) with my preferred framework being <u>React</u> (which this website is also built on). I
          have built websites using pure JavaScript, HTML and CSS where storage and performance constraints demanded so
          (with my tiny website at espdev.cloud) but I would always prefer React (or Next.js) simply because of the
          development convenience.</span>
        <span className="text-xl md:text-2xl my-2">I've also worked with <u>React Native</u> for quite a bit,
          for my <i>WebEnv</i> frontend (for my envmon microcontroller) for almost a year. At the time, React Native
          seemed like the natural evolution from React for me but the developer experience made me realize that it has
          critical differences with regular React and web development in general.</span>
        <span className="text-xl md:text-2xl my-2">Among major JavaScript frameworks based on React, I've also worked
          with <u>Gatsby</u> having used it in my <i>The Chip Tinker Project (TCTP)</i> blog which I ran for a year.
          Gatsby is a nice static site generator (SSG) but it's not simple to use and I had to learn GraphQL to work
          with it. I've since switched to using <u>Astro.build</u> for my new projects.</span>
        <span className="text-xl md:text-2xl my-2">I've worked with microcontrollers like Arduino and ESP32 with my
          <i>WebEnv</i> project using an ESP32 backend and <i>ESPWeb</i> using a NodeMCU backend. I prefer to program
          in mostly pure C with some C++ features where needed. I haven't committed to learning C++ yet so I avoid using
          more than a bare minimum of its features. C on the other hand is a great language with relatively simple
          syntax but its semantic depth seems unending.</span>
      </div>
      <Bar />
      <div className="flex flex-col font-abouttext bg-white/95 my-2 border shadow-lg p-2 md:p-4 mx-1 md:mx-0">
        <span className="font-bold text-3xl md:text-4xl">Programming languages and technologies I'm
          learning right now...</span>
        <span className="text-xl md:text-2xl my-2">At the moment I'm learning the ins and outs of the backend of web
          development. It has become especially crucial the further I've dived into web development. Even during the
          development of this website, jumping in with relatively little idea of the backend made the developer
          experience quite cumbersome.</span>
        <span className="text-xl md:text-2xl my-2">As a part of that endeavor I've been learning SQL (PostgresSQL
          specifically) and databases in general. For web development in general, I plan to learn TypeScript soon. Among
          web frameworks, I don't plan to hop on to every hot new framework being released since JavaScript frameworks
          from my experience often tend to lack staying power. That being said, I've been learning <u>Astro</u> and
          using it for my <i>blog.nextdev</i> project, and so far it's been a smooth experience.</span>
        <span className="text-xl md:text-2xl my-2">In the meantime I also plan to learn machine learning for a cool
          project—<i>maze4two.com</i>—I've been meaning to do for a while involving a maze generator and training a
          model to solve procedurally generated mazes.</span>
      </div>
    </div>
    <Footer />
  </div>;