import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import GA4React from "ga-4-react";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

try {
  setTimeout(() => {
    const ga4react = new GA4React(process.env.REACT_APP_GA_TAG);
    ga4react.initialize().catch(err => console.error(err));
  }, 4000);
} catch (err) {
  console.error(err);
}