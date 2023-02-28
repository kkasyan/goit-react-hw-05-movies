import css from '../SharedLayout/sharedLayout.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <div className="layout-wrap">
        <div>
          <nav className="link-wrap">
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
            <NavLink className={css.link} to="/movies">
              Movies
            </NavLink>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  );
};
