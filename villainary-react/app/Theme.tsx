import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        background: {
            default: '#262626',
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
            light: '#ff0000',
            main: '#b10000',
            dark: '#990000',
            contrastText: '#fff',
        },
    },
});
