import axios from 'axios';

// const instance = axios.create({
//   baseURL:
//     'https://api.themoviedb.org/3/trending/all/day?api_key=d0cbba0e8b5863a2012bf39c965ec970',
// });
axios.defaults.baseURL = 'https://api.themoviedb.org';
// const KEY = 'd0cbba0e8b5863a2012bf39c965ec970';

// axios.defaults.params = {
//   // media_type: 'all', time_window: 'day',
//   api_key: KEY,
// };

export const getTrendingMovies = async () => {
  const response = await axios.get(
    '3/trending/all/day?api_key=d0cbba0e8b5863a2012bf39c965ec970'
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `3/movie/${id}?api_key=d0cbba0e8b5863a2012bf39c965ec970&language=en-US`
  );
  return response.data;
};

export const searchMovie = async q => {
  const response = await axios.get(
    `3/search/movie?api_key=d0cbba0e8b5863a2012bf39c965ec970&language=en-US&page=1&include_adult=false&query=${q}`
  );
  return response.data;
};

// export const getTrendingMovies = async () => {
//   const response = await axios.get(`3/trending/all/day?api_key=${API_KEY}`);
//   return response.data;
// };
// export const getTrendingMovies = async () => {
//   const { data } =
//     await 'https://api.themoviedb.org/3/trending/all/day?api_key=d0cbba0e8b5863a2012bf39c965ec970';
//   return data;
// };

//   (axios.defaults.params = {
//     key: KEY,
//     orientation: 'horizontal',
//     image_type: 'photo',
//     safesearch: 'true',
//     per_page: 12,
//   });

// export const getPhotos = async (query, page) => {
//   const config = {
//     params: {
//       q: query,
//       page: page,
//     },
//   };
//   const response = await axios.get('', config);
//   return response.data;
// };
