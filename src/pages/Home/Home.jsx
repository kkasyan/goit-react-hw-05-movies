import css from '../Home/home.module.css';
import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/api/movies';
import { Link } from 'react-router-dom';

const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [state, setState] = useState({
  //   movies: [],
  //   loading: false,
  //   error: null,
  // });

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      // setState({ ...state, loading: true });
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        // setState(prevState => {
        //   return {
        //     ...prevState,
        //   };
        // });
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        // setState({
        //   ...state,
        //   error,
        // });
      }
      // } finally {
      //   setState(prevState => {
      //     return { ...prevState, loading: false };
      //   });
      // }
    };
    fetchTrendingMovies();
  }, []);

  // const { loading, error } = state;

  //   const elements = movies.map(({ id, title }) => (
  //     <li key={id}>
  //       <Link to={`/movies/${id}`}>{title}</Link>
  //     </li>
  //   ));

  return (
    <div>
      <h2>Trending today</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <p>Loading...</p>}
      {/* {error && <p>Error!</p>} */}
    </div>
  );
  // return (
  //   <>
  //     <h2>Trending today</h2>
  //     <MoviesList />
  //   </>
  // );
};

export default Home;

Home.defaultProps = { movies: [] };
