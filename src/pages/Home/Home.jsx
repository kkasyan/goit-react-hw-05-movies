import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/api/movies';

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import Alert from '@mui/material/Alert';

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
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <Typography
        variant="h2"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Trending today
      </Typography>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <CircularProgress color="secondary" />}
      {error && (
        <Alert severity="error">
          Ohh... Something went wrong! Let's try again later!
        </Alert>
      )}
    </div>
  );
};

export default Home;

Home.defaultProps = { movies: [] };
