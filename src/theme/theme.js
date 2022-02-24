import { createTheme } from '@mui/material/styles'

export default {
    dark: createTheme({
        palette: {
            mode: 'dark',
            text: {
                primary: '#fbfbfb',
            },
            background: {
                primary: '#040404',
            },
        },
    }),
    light: createTheme({
        palette: {
            mode: 'light',
            text: {
                primary: '#010101',
            },
            background: {
                primary: '#fdfbfb',
            },
        },
    }),
}
