import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

import testImg from '../assets/simpledev-screenshot.png';

const PortfolioCardImage = ({ image, alt }) =>
  <img src={image} alt={alt} className="p-1 h-1/2 md:w-1/3 md:h-80 bg-white/90 border shadow-lg" />;

const PortfolioCardText = ({ title, text, tags, margin }) =>
  <div className={`flex flex-col max-h-fit justify-around grow p-4 text-slate-700 bg-white/90 border shadow-lg ${margin}`}>
    <span className="flex flex-col">
      <span className="my-2 md:my-6 font-abouttext text-4xl">{title}</span>
      <span className="my-2 text-xl">{text}</span>
    </span>
  </div>;

const PortfolioCard = ({ image, title, text, tags, reverse }) => {
  if (reverse) {
    return <div className="flex flex-col md:flex-row">
      <PortfolioCardText title={title} text={text} tags={tags} margin="md:mr-1" />
      <PortfolioCardImage image={image} alt={title} />
    </div>;
  } else {
    return <div className="flex flex-col md:flex-row">
      <PortfolioCardImage image={image} alt={title} />
      <PortfolioCardText title={title} text={text} tags={tags} margin="md:ml-1" />
    </div>;
  }
};

export const Portfolio = () =>
  <div className="bg-minimal-react bg-contain bg-center bg-no-repeat min-h-screen">
    <TopBar page="portfolio" highlight={[false, false, false, true, false]} />
    <div className="flex flex-col md:mx-24">
      <span className="font-aboutfont text-4xl md:text-5xl my-2 md:my-6">Stuff I've built (and have been working on)</span>
      <PortfolioCard image={testImg} title="SimpleDev.site" text="SimpleDev.site is my portfolio website built with
       React. You are HERE."/>
    </div>
    <div className="sticky top-[100vh]"><Footer /></div>
  </div>;