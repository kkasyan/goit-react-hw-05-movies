import css from '../MovieDetails/movieDetails.module.css';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'shared/api/movies';
import { ErrorBoundary } from 'shared/ErrorBoundary/ErrorBoundary';
import useFetch from 'hooks/useFetch';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

import { GoBackBtn } from 'shared/GoBackBtn/GoBackBtn';

const imgURL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const params = useParams();
  const { id } = params;

  const location = useLocation();
  const from = location.state?.from || '/';

  const { movie, isLoading, error } = useFetch({
    fetchData: getMovieDetails,
    dependencies: [id],
  });

  // const { title, overview, poster_path, genres, vote_average } = movie;

  return (
    <>
      <GoBackBtn />
      <ErrorBoundary>
        <Box sx={{ display: 'flex' }}>
          {movie.poster_path && (
            <img src={`${imgURL}${movie.poster_path}`} alt="movie poster" />
          )}
          {!movie.poster_path && (
            <img
              src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
              alt="no movie poster!"
            />
          )}
          <Box ml={2} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="title" sx={{ mr: 2 }}>
              {movie.title}
            </Typography>
            <Typography variant="userScore" sx={{ pt: 2 }} noWrap>
              User score: {Math.floor(movie.vote_average * 10)}%
            </Typography>
            <Typography variant="descriptionTitle" sx={{ p: 2, mr: 2 }} noWrap>
              Overview
            </Typography>
            <Typography variant="list">{movie.overview}</Typography>
            <Typography variant="descriptionTitle" sx={{ p: 2, mr: 2 }} noWrap>
              Genres
            </Typography>
            <Typography variant="list">
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </Typography>
          </Box>
        </Box>

        <Typography variant="addInfoTitle" noWrap>
          Additional Information:
        </Typography>
        <List>
          <ListItem>
            <NavLink className={css.link} state={{ from }} to="cast">
              <Typography variant="addInfoTitle" noWrap>
                Cast
              </Typography>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink className={css.link} state={{ from }} to="reviews">
              <Typography variant="addInfoTitle" noWrap>
                Reviews
              </Typography>
            </NavLink>
          </ListItem>
        </List>
        <Outlet />
      </ErrorBoundary>
      {isLoading && <p>...Loading...</p>}
      {error && <p>Error!</p>}
    </>
  );
};

export default MovieDetails;
