import preval from 'preval.macro';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import { MdOutlineViewCarousel } from 'react-icons/md';

const AboutSite = () =>
  <details className="font-aboutmono font-bold text-slate-600 md:text-2xl text-lg my-4 md:my-6 ">
    <summary className="">This website is built using:</summary>
    <div className="flex flex-col mb-5 font-normal open:font-bold">
      ??
      {/*<TechLinkButton link="https://reactjs.org/" linktext="ReactJS">
      <SiReact className="mr-1" />
    </TechLinkButton>
    <TechLinkButton link="https://tailwindcss.com/" linktext="Tailwind CSS">
      <SiTailwindcss className="mr-1" />
    </TechLinkButton>
    <TechLinkButton link="https://flowbite.com/" linktext="Flowbite">
      <MdOutlineViewCarousel className="mr-1" />
</TechLinkButton>*/}
    </div>
    Check the source code <a
      href="https://github.com/furquan-lp/simpledev.site/" className="underline hover:text-blue-500">here</a>.
    Report bugs <a href="https://github.com/furquan-lp/simpledev.site/issues"
      className="underline hover:text-blue-500">here</a>.
    <p>Build {preval`module.exports = new Date().toISOString();`}</p>
  </details>;

export default AboutSite;