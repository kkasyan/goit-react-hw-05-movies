import css from '../NotFound/notFound.module.css';
import { GoBackBtn } from '../../shared/GoBackBtn';

const NotFound = () => {
  return (
    <>
      <div>
        The page is not Found! Hope the next time you will find what you are
        looking for!
      </div>
      <GoBackBtn />
    </>
  );
};

export default NotFound;
