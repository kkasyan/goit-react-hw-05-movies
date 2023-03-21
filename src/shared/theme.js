import { createTheme } from '@mui/material/styles';
import { blue, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
  typography: {
    fontFamily: ['monospace'],
    button: { fontSize: 20, fontWeight: 500, color: 'inherit' },
    list: { fontSize: 16, fontWeight: 400, color: 'inherit' },
    reviewAutor: { fontSize: 20, fontWeight: 500, color: 'inherit' },
    menu: {
      fontSize: 32,
      fontWeight: 700,
      color: 'inherit',
      letterSpacing: '.3rem',
      textDecoration: 'none',
    },
    trending: {
      fontSize: 25,
      fontWeight: 700,
      color: 'inherit',
      textDecoration: 'none',
      letterSpacing: '.3rem',
    },
    title: {
      fontSize: 30,
      fontWeight: 400,
      color: 'inherit',
      display: { xs: 'none', md: 'flex' },
    },
    userScore: { fontSize: 18, fontWeight: 400, color: 'inherit' },
    descriptionTitle: {
      display: { xs: 'none', md: 'flex' },
      fontWeight: 500,
      color: 'inherit',
      fontSize: 20,
    },
    addInfoTitle: {
      fontWeight: 500,
      color: 'inherit',
      fontSize: 20,
      display: { xs: 'none', md: 'flex' },
    },
  },
});
