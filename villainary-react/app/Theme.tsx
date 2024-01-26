import { createTheme } from '@mui/material/styles';

const darkPurple = '#21073a';

export const theme = createTheme({
    palette: {
        background: {
            default: darkPurple,
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000',
        },
        primary: {
            light: '#555555',
            main: darkPurple,
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#551382',
            main: '#4F7F13',
            dark: '#990000',
            contrastText: '#ffffff',
        },
    },
});
