import css from '../MovieDetails/movieDetails.module.css';
import { NavLink, useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'shared/api/movies';
import useFetch from 'hooks/useFetch';

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
              <h2>{title}</h2>
              <p>User score: {Math.floor(vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <h2>Additional Information:</h2>
          <ul className={css.list}>
            <li>
              <NavLink className={css.link} state={{ from }} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} state={{ from }} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
      {isLoading && <p>...Loading...</p>}
      {error && <p>Error!</p>}
    </>
  );
};

export default MovieDetails;
