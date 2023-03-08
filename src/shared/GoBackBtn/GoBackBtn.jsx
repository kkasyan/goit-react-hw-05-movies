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
