import css from '../MoviesList/moviesList.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(movie => (
    <li key={movie.id}>
      <Link
        className={css.movieLink}
        state={{ from: location }}
        to={`/movies/${movie.id}`}
      >
        {movie.title ?? movie.name}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  movies: [],
};
