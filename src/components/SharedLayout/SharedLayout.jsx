import css from '../SharedLayout/sharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};

export const SharedLayout = () => {
  return (
    <>
      <div className={css.layoutWrap}>
        <nav className={css.linkWrap}>
          <ul className={css.menu}>
            <li>
              <NavLink className={getClassName} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={getClassName} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
};
