import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import webenvImg from '../assets/webenv-screenshot.webp';
import tctpImg from '../assets/tctp-screenshot-chrome.webp';
import iotImg from '../assets/device.gif';
import githubImg from '../assets/github-screenshot.webp';

const CarouselCard = ({ title, text, buttonLink, buttonText, image }) =>
  <div className="flex mx-px my-px">
    <img className="md:w-6/12 w-full h-96" src={image}
      alt={`${title} screenshot"`} />
    <div className="flex flex-col items-center m-4">
      <span className="font-cardtitle text-4xl font-bold">{title}</span>
    </div>
  </div>;

/**
 * TODO: Fetch the project data from a databse and map it to a series of CarouselCards
 * @returns a Flowbite Carousel with a number of CarouselCards

const WelcomeCarousel = () =>
  <div className="h-96 mt-4">
    <Flowbite theme={{ theme: customTheme }}>
      <Carousel slideInterval={4000} color="primary">
        <CarouselCard title="Check out my blog!"
          text="TCTP.xyz (The Chip Tinker Project) is my blog written using Gatsby and Tailwind CSS, and hosted on a
         Netlify backend. Thanks to Tailwind CSS it has a mobile first design and it uses Netlify CMS which helps me
         push out blog posts without having to mess with the internal Markdown."
          buttonLink="https://tctp.xyz"
          buttonText="Visit site"
          image={tctpImg}
        />
        <CarouselCard title="Check out my app!"
          text="WebEnv is a React Native app which connects to an IoT backend to monitor and log environment data.
         Available for Android, iOS and the web. The IoT backend is powered by an ESP32 microcontroller which exposes a
         JSON API over an HTTP server (hosted on the microcontroller itself!)."
          buttonLink="http://webenv.simpledev.site"
          buttonText="Check out the live demo"
          image={webenvImg}
        />
        <CarouselCard title="Check out my GitHub!"
          text="If you want to check the source code for all my projects and want to see what I'm up to then head over
         here. I commit frequently but no guarantees regarding documentation ;-)"
          buttonLink="https://github.com/furquan-lp"
          buttonText="Visit my GitHub"
          image={githubImg}
        />
        <CarouselCard title="Arduino and IoT stuff"
          text="Two years ago I was working on a project to log environmental data (air quality, temperature, humidity,
         etc.) and display it to an LCD screen. Later on I ported the code over to an ESP32 board which served the
         data over LAN WiFi called 'envmon'. A minimal version which forwarded the data over the Internet to a JSON
         database was used as the backend for WebEnv."
          buttonLink="https://github.com/furquan-lp/environment-monitor"
          buttonText="Check out the source code"
          image={iotImg}
        />
      </Carousel>
    </Flowbite>
  </div >;
*/

const MyCarousel = () => {
  return (
    <Carousel
      className="h-4/6 my-4 overflow-hidden"
      prevArrow={({ handlePrev }) => (

        <CarouselButton onClick={handlePrev} nav={0} />
      )}
      nextArrow={({ handleNext }) => (
        <CarouselButton onClick={handleNext} nav={1} />
      )}
      autoplay={true}
      loop={true}
      navigation={false}
    >
      <CarouselCard title="The Chip Tinker Project - A Gatsby Blog"
        text="TCTP.xyz (The Chip Tinker Project) is my blog written using Gatsby and Tailwind CSS, and hosted on a
         Netlify backend. Thanks to Tailwind CSS it has a mobile first design and it uses Netlify CMS which helps me
         push out blog posts without having to mess with the internal Markdown."
        buttonLink="https://tctp.xyz"
        buttonText="Visit site"
        image={tctpImg}
      />
      <CarouselCard title="Webenv - A React Native App on an Iot Backend"
        text="WebEnv is a React Native app which connects to an IoT backend to monitor and log environment data.
         Available for Android, iOS and the web. The IoT backend is powered by an ESP32 microcontroller which exposes a
         JSON API over an HTTP server (hosted on the microcontroller itself!)."
        buttonLink="http://webenv.simpledev.site"
        buttonText="Check out the live demo"
        image={webenvImg}
      />
      <CarouselCard title="Arduino, Microcontrollers and Other Iot Stuff"
        text="Two years ago I was working on a project to log environmental data (air quality, temperature, humidity,
         etc.) and display it to an LCD screen. Later on I ported the code over to an ESP32 board which served the
         data over LAN WiFi called 'envmon'. A minimal version which forwarded the data over the Internet to a JSON
         database was used as the backend for WebEnv."
        buttonLink="https://github.com/furquan-lp/environment-monitor"
        buttonText="Check out the source code"
        image={iotImg}
      />
      <CarouselCard title="Check Out My Github for More Updates"
        text="If you want to check the source code for all my projects and want to see what I'm up to then head over
         here. I commit frequently but no guarantees regarding documentation ;-)"
        buttonLink="https://github.com/furquan-lp"
        buttonText="Visit my GitHub"
        image={githubImg}
      />
    </Carousel>
  )
}

const CarouselButton = ({ onClick, nav }) =>
  <div className={`${nav === 0 ? '!absolute top-2/4 -translate-y-2/4 left-1' :
    '!absolute top-2/4 -translate-y-2/4 !right-1'} p-2 md:p-3 rounded-full text-xl text-slate-100 cursor-pointer
    bg-slate-600/50 hover:text-blue-200 hover:bg-slate-600/70 transition-colors duration-100`} onClick={onClick}>
    {nav === 0 ? <FiChevronLeft /> : <FiChevronRight />}
  </div>;


const Welcome = () => {
  return (
    <MyCarousel />
  );
};

export default Welcome;