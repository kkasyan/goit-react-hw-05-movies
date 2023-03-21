import css from '../SharedLayout/sharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

export const SharedLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LocalMoviesIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="menu"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <List sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <ListItem>
                  <NavLink className={getClassName} to="/">
                    Home
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink className={getClassName} to="/movies">
                    Movies
                  </NavLink>
                </ListItem>
              </List>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
