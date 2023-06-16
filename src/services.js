import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const initCarousel = (setCarousel) => {
  axios.get(API + 'db/carousel').then(response => setCarousel(response.data));
};

const initPortfolio = (setPortfolio) => {
  axios.get(API + 'db/portfolio').then(response => setPortfolio(response.data));
};

const initBackendVersion = (setBackendVersion) =>
  axios.get(API + 'version').then(response => setBackendVersion(response.data));

export default { initCarousel, initPortfolio, initBackendVersion, API };