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
            constrastText: '#fff',
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
        },
    },
})

export default theme;