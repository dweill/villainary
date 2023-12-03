import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#000',
    },
    text: {
      primary: '#fff',
    },
    primary: {
      light: '#555555',
      main: '#262626',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff200c',
      main: '#ff0000',
      dark: '#da0000',
      contrastText: '#000',
    },
  },
});
