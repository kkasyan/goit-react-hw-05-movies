import { useState, useEffect, lazy } from 'react';
import { getTrendingMovies } from 'shared/api/movies';
import { ErrorNotification } from 'shared/ErrorNotification/ErrorNotification';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <Box>
      <Typography
        variant="trending"
        noWrap
        sx={{
          mt: 2,
          mr: 2,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        Trending today
      </Typography>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <CircularProgress color="secondary" />}
      {error && <ErrorNotification />}
    </Box>
  );
};

export default Home;

Home.defaultProps = { movies: [] };
