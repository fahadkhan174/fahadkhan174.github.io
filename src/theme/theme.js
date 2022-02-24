import { createTheme } from '@mui/material/styles'

const theme = {
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

export default theme
