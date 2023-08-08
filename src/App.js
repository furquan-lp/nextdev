import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

import Home from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { BlogComingSoon } from './pages/BlogComingSoon';
import service from './services';

const App = () => {
  const [carousel, setCarousel] = useState();
  const [portfolio, setPortfolio] = useState();
  const [backendInfo, setBackendInfo] = useState({ version: "unknown", backendName: undefined });

  useEffect(() => {
    service.initCarousel(setCarousel);
    service.initPortfolio(setPortfolio);
    service.initBackendInfo(setBackendInfo);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home carouselData={carousel} apiURL={service.STATIC_API}
          backendInfo={backendInfo} />} />
        <Route path="*" element={<NotFound backendInfo={backendInfo} />} />
        <Route path="about" element={<About backendInfo={backendInfo} />} />
        <Route path="portfolio" element={<Portfolio portfolio={portfolio} apiURL={service.STATIC_API}
          backendInfo={backendInfo} />} />
        <Route path="contact" element={<Contact backendInfo={backendInfo} />} />
        <Route path="blog" element={<BlogComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
