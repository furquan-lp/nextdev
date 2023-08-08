import axios from 'axios';

const API = process.env.REACT_APP_API_URL;
const STATIC_API = `${API}static/`;

const initCarousel = (setCarousel) => {
  axios.get(API + 'db/carousel').then(response => setCarousel(response.data));
};

const initPortfolio = (setPortfolio) => {
  axios.get(API + 'db/portfolio').then(response => setPortfolio(response.data));
};

const initBackendInfo = (setBackendInfo) => {
  axios.get(API + 'backend').then(response => setBackendInfo(response.data));
};

const postMessage = (message) =>
  axios.post(API + 'mail/send', message).catch(err => console.debug('Error while sending message: ', err));

export default { initCarousel, initPortfolio, initBackendInfo, postMessage, API, STATIC_API };