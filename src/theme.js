import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette : {
        primary: {
            main: "#334556",
            dark: "#002c5c",
            light: "#c2d0df"
        },
        secondary: {
            main: "#5d7fa3",
            light: "#7ca9d9",
        },
        background: {
            default: "#eee"
        },
        text: {
            primary: "#222"
        }
    }
})

export default theme
