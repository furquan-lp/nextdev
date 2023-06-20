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

const postMessage = (message) =>
  axios.post(API + 'mail/send', message).catch(err => console.debug('Error while sending message: ', err));

export default { initCarousel, initPortfolio, initBackendVersion, postMessage, API };