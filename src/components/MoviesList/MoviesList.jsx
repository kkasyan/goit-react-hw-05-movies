import css from '../MoviesList/moviesList.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(movie => (
    <Typography
      variant="h4"
      noWrap
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 400,
        fontSize: 16,
        color: 'inherit',
      }}
      key={movie.id}
    >
      <ListItem>
        <Link
          className={css.movieLink}
          state={{ from: location }}
          to={`/movies/${movie.id}`}
        >
          {movie.title ?? movie.name}
        </Link>
      </ListItem>
    </Typography>
  ));

  return <List>{elements}</List>;
};

export default MoviesList;

MoviesList.defaultProps = {
  movies: [],
};
