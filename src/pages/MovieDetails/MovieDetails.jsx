import css from '../MovieDetails/movieDetails.module.css';
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'shared/api/movies';

import { GoBackBtn } from 'shared/GoBackBtn/GoBackBtn';

const MovieDetails = () => {
  // const { id } = useParams();
  const params = useParams();
  const { id } = params;

  const location = useLocation();
  const from = location.state?.from || '/';

  const [movieD, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //   return <Link to={`${movieId}`}>MovieDetails</Link>;
  //   return <Link to="/1">MovieDetails</Link>;

  useEffect(() => {
    const fetchMovie = async () => {
      // setState({ ...state, loading: true });
      try {
        setIsLoading(true);
        const { result } = await getMovieDetails(id);
        // setState(prevState => {
        //   return {
        //     ...prevState,
        //   };
        // });
        setMovie(result);
        // setIsLoading(false);
      } catch (error) {
        console.log(error);
        // setState({
        //   ...state,
        //   error,
        // });
      } finally {
        setIsLoading(false);
      }
      // } finally {
      //   setState(prevState => {
      //     return { ...prevState, loading: false };
      //   });
      // }
    };
    fetchMovie();
    console.log(movieD);
  }, [movieD, id]);

  // const { title, name, overview, backdrop_path, genre_ids, popularity } = movie;
  // const { title } = movieD;
  // const { overview } = movie;

  return (
    <>
      <GoBackBtn />
      <h2></h2>
      <p>User score:%</p>
      <h2>Overview</h2>
      <p></p>
      <h2>Genres</h2>
      <p>Genres list</p>
      <h2>Additional Information:</h2>
      <ul>
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
  );
};

export default MovieDetails;
