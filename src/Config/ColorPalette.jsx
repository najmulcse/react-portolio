import { createMuiTheme } from '@material-ui/core';

const COLOR_THEME = createMuiTheme({
        palette : {
            primary: {
                main: "#ffffff"
            },
            secondary: {
                main: "#faa61a",
                dark: "#d2890e"
            },
            error: {
                main: "#b00020",
                dark: "#7b0218"
            }
        }
});

export default COLOR_THEME;