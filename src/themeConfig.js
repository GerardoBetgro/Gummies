import { createTheme } from "@mui/material/styles";
import { orange, indigo } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[500],
            contrastText: '#fff',
        },
        secondary: {
            main: orange[500],
            contrastText: '#fff',
        },
        tree: {
            main: '#69f0ae',
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

export default theme;