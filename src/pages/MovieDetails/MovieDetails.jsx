import css from '../MovieDetails/movieDetails.module.css';
import { Link, NavLink, useParams, Outlet } from 'react-router-dom';
import { GoBackBtn } from 'shared/GoBackBtn';

const MovieDetails = () => {
  //   const { movieId } = useParams();
  //   return <Link to={`${movieId}`}>MovieDetails</Link>;
  //   return <Link to="/1">MovieDetails</Link>;

  return (
    <>
      <GoBackBtn />
      <div>Details</div>
      <h2>Movie name</h2>
      <p>User score: %</p>
      <h2>Overview</h2>
      <p>Overview text</p>
      <h2>Genres</h2>
      <p>Genres list</p>
      <h2>Additional Information:</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
