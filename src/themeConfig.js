import { createTheme } from "@mui/material/styles";
import { teal, indigo } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[700],
            contrastText: '#fff',
        },
        secondary: {
            main: teal[600],
            contrastText: '#fff',
        },
    },
})

export default theme;