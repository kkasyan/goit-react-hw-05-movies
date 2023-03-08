import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'd0cbba0e8b5863a2012bf39c965ec970';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/all/day?api_key=${KEY}`);
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const searchMovie = async q => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${q}`
  );
  return response.data;
};
