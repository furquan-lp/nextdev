import { Carousel } from "@material-tailwind/react";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

import webenvImg from '../assets/webenv-screenshot.webp';
import tctpImg from '../assets/tctp-screenshot-chrome.webp';
import iotImg from '../assets/device.gif';
import githubImg from '../assets/github-screenshot.webp';

const CarouselCard = ({ title, tags, text, buttonLink, buttonText, image }) =>
  <div className="flex flex-col md:flex-row bg-white/90 text-slate-700">
    <img className="md:w-6/12 w-full md:h-96 h-auto" src={image}
      alt={`${title} screenshot"`} />
    <div className="flex flex-col m-4 max-w-3xl justify-between">
      <div className="flex flex-col">
        <span className="font-cardtitle text-xl my-2 font-bold">
          {tags.map((e, i) => <span className="m-1 text-red-600" key={buttonLink + e + i}>#{e}</span>)}
        </span>
        <span className="font-cardtitle text-3xl md:text-5xl">{title}</span>
        <span className="text-xl md:text-2xl mt-2 font-light">{text}</span>
      </div>
      <a href={buttonLink} className="flex mr-auto mt-1 text-lg md:text-xl p-1 md:p-1.5 border bg-gray-50
       border-slate-400 hover:underline hover:bg-slate-600 hover:text-white hover:border-slate-600
        active:bg-slate-500 active:border-slate-500 active:text-white items-center transition-all duration-200">
        {buttonText}<FiExternalLink className="ml-1" />
      </a>
    </div>
  </div>;

const CarouselPlaceholder = () =>
  <div className="flex flex-col md:flex-row bg-white/90 text-slate-700 h-full w-full">
    <div className="md:h-80 p-20 md:p-0 md:grow rounded-md m-1 mx-2 md:m-2 bg-slate-200 animate-pulse" />
    <div className="flex flex-col grow mx-2 md:mx-4">
      <span className="p-3 my-1 md:p-6 md:my-4 bg-slate-300 animate-pulse" />
      <span className="p-3 my-1 px-28 mr-auto md:p-5 md:mr-20 md:mb-5 bg-slate-300 animate-pulse" />
      <span className="p-3 my-1 px-20 mr-auto md:p-4 md:mr-32 md:my-10 bg-slate-300 animate-pulse" />
    </div>
  </div>;

const CarouselButton = ({ onClick, nav }) =>
  <div className={`${nav === 0 ?
    '!absolute top-2/4 -translate-y-2/4 left-1' : '!absolute top-2/4 -translate-y-2/4 !right-1'}
      px-1 py-6 md:px-3 md:py-3 md:rounded-full text-xl text-slate-500 bg-slate-200/50 md:text-slate-100
       md:bg-slate-600/50 cursor-pointer hover:text-blue-200 hover:bg-slate-600/70 transition-colors duration-200`
  } onClick={onClick}>
    {nav === 0 ? <FiChevronLeft /> : <FiChevronRight />}
  </div>;

const WelcomeCarousel = ({ carouselData, apiURL }) => {
  if (carouselData) {
    return (<Carousel
      className="h-4/6 my-1 mx-0.5 md:my-4 md:mx-0 overflow-hidden shadow-lg border border-slate-100"
      prevArrow={({ handlePrev }) => (
        <CarouselButton onClick={handlePrev} nav={0} />
      )}
      nextArrow={({ handleNext }) => (
        <CarouselButton onClick={handleNext} nav={1} />
      )}
      autoplay={true}
      loop={true}
      navigation={() => false}
    >
      {carouselData.map(carousel => <CarouselCard title={carousel.title} tags={carousel.tags} text={carousel.text}
        buttonLink={carousel.link} buttonText={carousel.button} image={`${apiURL}${carousel.image}`} />)}
    </Carousel>);
  } else {
    return (<Carousel
      className="h-4/6 my-1 mx-0.5 md:my-4 md:mx-0 overflow-hidden shadow-lg border border-slate-100"
      prevArrow={({ handlePrev }) => (
        <CarouselButton onClick={handlePrev} nav={0} />
      )}
      nextArrow={({ handleNext }) => (
        <CarouselButton onClick={handleNext} nav={1} />
      )}
      autoplay={true}
      loop={true}
      navigation={() => false}
    >
      <CarouselPlaceholder />
    </Carousel>);
  }
};

const Welcome = ({ carouselData, apiURL }) => {
  return (
    <WelcomeCarousel />
  );
};

export default Welcome;