import css from '../SearchForm/searchForm.module.css';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({ search: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={state.search}
        onChange={handleChange}
        type="text"
        placeholder="Enter the movie you are looking for!"
        required
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
