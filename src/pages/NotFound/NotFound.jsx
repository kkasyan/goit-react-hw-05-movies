import { GoBackBtn } from '../../shared/GoBackBtn/GoBackBtn';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant="list">
          The page is not found!💀
          <br />
          Hope the next time you will find what you are looking for!
        </Typography>
      </Box>
      <GoBackBtn />
    </>
  );
};

export default NotFound;
