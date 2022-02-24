import React from 'react'

import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { ColorModeContext } from '../theme/colorContext'
import CustomTooltip from './CustomTooltip'

const ToggleThemeIcon = () => {
    const theme = useTheme()
    const colorMode = React.useContext(ColorModeContext)

    return (
        <>
            {theme.palette.mode === 'dark' ? (
                <CustomTooltip title={'Dark Mode: On'} arrow placement='right'>
                    <Brightness4Icon
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '2.5em',
                            '& .MuiIconButton-root': {
                                padding: 0,
                            },
                            [`${theme.breakpoints.down('md')}`]: {
                                fontSize: '1.5em',
                            },
                        }}
                        onClick={colorMode.toggleColorMode}
                        color='inherit'
                    />
                </CustomTooltip>
            ) : (
                <CustomTooltip title={'Dark Mode: Off'} arrow placement='right'>
                    <Brightness7Icon
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '2.5em',
                            '& .MuiIconButton-root': {
                                padding: 0,
                            },
                            [`${theme.breakpoints.down('md')}`]: {
                                fontSize: '1.5em',
                            },
                        }}
                        onClick={colorMode.toggleColorMode}
                        color='inherit'
                    />
                </CustomTooltip>
            )}
        </>
    )
}

export default ToggleThemeIcon
