import css from '../MovieDetails/movieDetails.module.css';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'shared/api/movies';
import useFetch from 'hooks/useFetch';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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

  const { title, overview, poster_path, genres, vote_average } = movie;

  return (
    <>
      <GoBackBtn />
      {movie && (
        <>
          <div className={css.wrap}>
            {poster_path && (
              <img src={`${imgURL}${poster_path}`} alt="movie poster" />
            )}
            {!poster_path && (
              <img
                src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                alt="no movie poster!"
              />
            )}
            <div className={css.infoWrap}>
              <Typography
                variant="h2"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 400,
                  color: 'inherit',
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h2"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontSize: 18,
                  fontWeight: 400,
                  color: 'inherit',
                }}
              >
                User score: {Math.floor(vote_average * 10)}%
              </Typography>
              <Typography
                variant="h2"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 500,
                  color: 'inherit',
                  fontSize: 20,
                  p: 2,
                }}
              >
                Overview
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: 16,
                  fontWeight: 400,
                  color: 'inherit',
                }}
              >
                {overview}
              </Typography>
              <Typography
                variant="h2"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 500,
                  color: 'inherit',
                  fontSize: 20,
                  p: 2,
                }}
              >
                Genres
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: 16,
                  fontWeight: 400,
                  color: 'inherit',
                }}
              >
                {genres && genres.map(genre => genre.name).join(', ')}
              </Typography>
            </div>
          </div>
          <Typography
            variant="h2"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              color: 'inherit',
              fontSize: 20,
            }}
          >
            Additional Information:
          </Typography>
          <List>
            <ListItem>
              <NavLink className={css.link} state={{ from }} to="cast">
                <Typography
                  variant="h3"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    color: 'inherit',
                    fontSize: 20,
                  }}
                >
                  Cast
                </Typography>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink className={css.link} state={{ from }} to="reviews">
                <Typography
                  variant="h3"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    color: 'inherit',
                    fontSize: 20,
                  }}
                >
                  Reviews
                </Typography>
              </NavLink>
            </ListItem>
          </List>
          <Outlet />
        </>
      )}
      {isLoading && <p>...Loading...</p>}
      {error && <p>Error!</p>}
    </>
  );
};

export default MovieDetails;
