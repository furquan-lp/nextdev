import { Link } from "react-router-dom";

import { FiGithub } from "react-icons/fi";

const BlogTopBar = () =>
  <div className="p-4 flex items-center justify-between text-slate-100">
    <div className="font-logofont text-xl md:text-2xl p-2 m-1 outline-1">
      <span className="select-none">blog.
        <span className="font-bold underline md:no-underline">NEXT</span>DEV
      </span>
    </div>
    <a href="https://github.com/furquan-lp/nextdev-blog" className="flex items-center text-lg md:text-xl p-1 md:p-2
     rounded border border-teal-400"><FiGithub /></a>
  </div>

export const BlogComingSoon = () =>
  <div className="bg-slate-800 min-h-screen ">
    <BlogTopBar />
    <div className="flex flex-col text-white text-center">
      <span className="p-28 text-xl">Sorry, the blog isn't available at the moment.</span>
      <span className="flex flex-col items-center bg-teal-600 p-28">
        <span className="text-6xl font-blogfont italic">Coming Soon.</span>
        <span className="my-4 md:my-10 text-4xl font-aboutmono">Don't worry, great things are happening @NEXTDEV.</span>
        <Link to="/" className="text-2xl p-2 font-sans rounded border border-blue-500 bg-cyan-800
         hover:underline hover:bg-blue-600">Back to <span className="tracking-wide">NEXTDEV</span>.</Link>
      </span>
    </div>
  </div>;