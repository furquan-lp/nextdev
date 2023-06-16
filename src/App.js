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
  const [backendVersion, setBackendVersion] = useState({ version: "unknown" });

  useEffect(() => {
    service.initCarousel(setCarousel);
    service.initPortfolio(setPortfolio);
    service.initBackendVersion(setBackendVersion);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home carouselData={carousel} apiURL={service.API} backendVersion={backendVersion} />} />
        <Route path="*" element={<NotFound backendVersion={backendVersion} />} />
        <Route path="about" element={<About backendVersion={backendVersion} />} />
        <Route path="portfolio" element={<Portfolio portfolio={portfolio} apiURL={service.API}
          backendVersion={backendVersion} />} />
        <Route path="contact" element={<Contact backendVersion={backendVersion} />} />
        <Route path="blog" element={<BlogComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
