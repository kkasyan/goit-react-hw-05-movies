import UserRoutes from 'UserRoutes';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../shared/colorTheme';
import Box from '@mui/material/Box';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" color="secondary">
          <Box sx={{ backgroundColor: 'secondary' }} color="secondary">
            <UserRoutes />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
