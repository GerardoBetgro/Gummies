import { createTheme } from "@mui/material/styles";
import { orange, indigo } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[500],
            contrastText: '#fff',
        },
        secondary: {
            main: orange[800],
            contrastText: '#fff',
        },
        tree: {
            main: '#2e7d32',
            contrastText: '#fff',
        },
        star: {
            main: '#aeea00',
            constrastText: '#fff',
        },
        light: {
            main: '#fff',
            constrastText: '#000',
        },
        dark: {
            main: '#121858',
            contrastText: '#fff',
        },
        cereza: {
            main: '#ab003c',
            contrastText: '#fff',
        }
    },
})

theme.typography.h1 = {
    fontSize: '3rem',
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '5rem',
    },
};

theme.typography.h2 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
    },
};

export default theme;