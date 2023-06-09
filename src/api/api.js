import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const APIKEY = `a438b3320e0856ef78f03a44c35f6579`;

const getMoviesDay = async () => {
  const data = await axios.get(
    `trending/movie/day?api_key=${APIKEY}&language=en-US`
  );
  return data;
};

const getMoviesQuery = async query => {
  const data = await axios.get(
    `search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false&include_adult=false`
  );
  return data;
};

const getMoviesDetails = async id => {
  const data = await axios.get(`/movie/${id}?api_key=${APIKEY}&language=en-US`);
  return data;
};

const getMoviesCast = async id => {
  const data = await axios.get(
    `/movie/${id}/credits?api_key=${APIKEY}&language=en-US&page=1`
  );
  return data;
};

const getMoviesReviews = async id => {
  const data = await axios.get(
    `/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  );
  return data;
};

const api = {
  getMoviesDay,
  getMoviesQuery,
  getMoviesDetails,
  getMoviesCast,
  getMoviesReviews,
};

export default api;
