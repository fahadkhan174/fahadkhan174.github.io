import React from 'react'

import styled from '@emotion/styled'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.background.primary,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[1],
        fontSize: 16
    },
}))

export default CustomTooltip
