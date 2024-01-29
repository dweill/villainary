import { createTheme } from '@mui/material/styles';

const darkPurple = '#21073a';
const purpleShade = '#4d3961';
const jokerGreen = '#4F7F13';

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
            light: purpleShade,
            main: darkPurple,
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#551382',
            main: jokerGreen,
            dark: '#990000',
            contrastText: '#ffffff',
        },
    },
    components: {
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: jokerGreen,
                },
            },
        },
    },
});
