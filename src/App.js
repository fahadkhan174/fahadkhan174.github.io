import React, { useState } from 'react'

import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import { ColorModeContext } from './theme/colorContext'
import { theme as customTheme } from './theme'
import Home from './components/Home'

function App() {
    const [mode, setMode] = useState('dark')

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        []
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={customTheme[mode]}>
                <Home />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
