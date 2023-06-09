import { Link } from "react-router-dom";

import { FiGithub } from "react-icons/fi";

import { usePageTitle } from "../myHooks";

const BlogTopBar = () =>
  <div className="p-4 flex items-center justify-between text-slate-100">
    <div className="font-logofont text-xl md:text-2xl p-2 m-1 outline-1">
      <span className="select-none">blog.
        <span className="font-bold underline md:no-underline">NEXT</span>DEV
      </span>
    </div>
    <a href="https://github.com/furquan-lp/nextdev-blog" className="flex items-center text-lg md:text-xl p-1 md:p-2
     rounded border border-teal-400"><FiGithub /></a>
  </div>;

export const BlogComingSoon = () => {
  usePageTitle('blog.NEXTDEV (Coming Soon)');
  return (<div className="bg-slate-800 min-h-screen ">
    <BlogTopBar />
    <div className="flex flex-col text-white text-center">
      <span className="md:p-28 p-6 py-28 text-xl">Sorry, the blog isn't available at the moment.</span>
      <span className="flex flex-col items-center bg-teal-600 md:p-28 p-6 py-28">
        <span className="text-5xl md:text-6xl font-blogfont italic">Coming Soon.</span>
        <span className="my-6 md:my-10 text-3xl md:text-4xl font-aboutmono">
          Don't worry, great things are happening @NEXTDEV.
        </span>
        <Link to="/" className="text-xl md:text-2xl p-2 font-sans rounded border border-blue-500 bg-cyan-800
         hover:underline hover:bg-blue-600 transition-colors duration-200">Back to <span className="tracking-wider">
            NEXTDEV</span>.</Link>
      </span>
    </div>
  </div>);
};