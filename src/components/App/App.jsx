import css from '../App/app.module.css';
import UserRoutes from 'UserRoutes';

export const App = () => {
  return (
    <div className={css.app}>
      <UserRoutes />
    </div>
  );
};
