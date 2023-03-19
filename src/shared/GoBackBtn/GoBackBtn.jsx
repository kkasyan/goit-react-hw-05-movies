import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';

export const GoBackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  return (
    <Button
      variant="contained"
      onClick={goBack}
      startIcon={<ArrowBackIosIcon />}
      sx={{ m: 2 }}
    >
      <Typography
        variant="h2"
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 500,
          color: 'inherit',
          fontSize: 20,
        }}
      >
        Back
      </Typography>
    </Button>
  );
};
