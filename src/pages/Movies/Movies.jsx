import css from '../Movies/movies.module.css';
import { GoBackBtn } from 'shared/GoBackBtn/GoBackBtn';
import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'shared/api/movies';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  // const [search, setSearch] = useState('');

  useEffect(() => {
    const findMovie = async () => {
      try {
        const { results } = await searchMovie(search);
        setState({ items: results });
      } catch (error) {
        console.log(error);
      }
    };
    if (search) {
      findMovie();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  const { items } = state;

  return (
    <>
      <SearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MoviesList movies={items} />}
      <GoBackBtn />
    </>
  );
};

export default Movies;
