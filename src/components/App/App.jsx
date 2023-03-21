import UserRoutes from 'UserRoutes';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../shared/theme';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            fontFamily: theme.typography,
          }}
        >
          <UserRoutes />
        </Container>
      </ThemeProvider>
    </>
  );
};
