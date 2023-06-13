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

  useEffect(() => { service.initCarousel(setCarousel) }, []);
  service.getBackendVersion();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home carouselData={carousel} apiURL={service.API} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<BlogComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
