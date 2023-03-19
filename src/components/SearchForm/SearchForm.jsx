import css from '../SearchForm/searchForm.module.css';
import { useState } from 'react';

import TextField from '@mui/material/TextField';

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
      <TextField
        variant="standard"
        name="search"
        value={state.search}
        onChange={handleChange}
        size="normal"
        margin="normal"
        type="text"
        fullWidth
        required
        label="Enter the movie name"
      />
      <button className={css.btn}>Search</button>
    </form>
  );
};

export default SearchForm;
