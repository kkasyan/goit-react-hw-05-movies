import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const lang = 'en-US';
const page = '1';
const KEY = 'd0cbba0e8b5863a2012bf39c965ec970';

axios.defaults.params = { api_key: KEY, landuage: lang, page: page };

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?`);
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}?`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?`);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`movie/${id}/credits?`);
  return response.data;
};

export const searchMovie = async q => {
  const response = await axios.get(
    `search/movie?&include_adult=false&query=${q}`
  );
  return response.data;
};
