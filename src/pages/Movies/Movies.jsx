import css from '../Movies/movies.module.css';
import { Link } from 'react-router-dom';
import { GoBackBtn } from 'shared/GoBackBtn';

// import { Outlet } from 'react';

const Movies = () => {
  return (
    <>
      <div>Movies</div>
      <Link to="/movies/1">MovieDetails</Link>
      <input type="text" placeholder="Enter the movie you are looking for!" />
      <button>Search</button>
      <GoBackBtn />
    </>
  );
};

export default Movies;
