import { Link } from 'react-router-dom';
import css from '../GoBackBtn/goBackBtn.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export const GoBackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  return (
    <button className={css.btn} onClick={goBack}>
      Back
    </button>
  );
};

{
  /* <Link className={css.backBtn} to="/">
        To the <br />
        main page
      </Link> */
}
