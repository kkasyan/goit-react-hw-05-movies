import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/api/movies';

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
      <h2>Trending today</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
    </div>
  );
};

export default Home;

Home.defaultProps = { movies: [] };
