import Alert from '@mui/material/Alert';

export const ErrorNotification = () => {
  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      Ohh... Something went wrong! Let's try again later!
    </Alert>
  );
};
