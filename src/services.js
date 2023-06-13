import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const initCarousel = (setCarousel) => {
  console.log('API is ', API)
  axios.get(API + 'db/carousel').then(response => setCarousel(response.data));
};

export default { initCarousel, API };