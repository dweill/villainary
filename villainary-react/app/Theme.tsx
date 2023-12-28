import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
        default: '#21073a',
    },
    text: {
        primary: '#fff',
        secondary: '#000000',
    },
    primary: {
        light: '#555555',
        main: '#21073a',
        dark: '#000000',
        contrastText: '#fff',
    },
    secondary: {
        light: '#551382',
        main: '#4F7F13',
        dark: '#990000',
        contrastText: '#fff',
    },
  },
});
