import React from 'react'

import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import InfoIcon from '@mui/icons-material/Info'
import CodeIcon from '@mui/icons-material/Code'
import ArticleIcon from '@mui/icons-material/Article'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'

import ToggleThemeIcon from './ToggleThemeIcon'
import CustomTooltip from './CustomTooltip'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer)(({ theme }) => ({
    width: 100,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
        border: 0,
        padding: 0,
        background: 'inherit',
        color: theme.palette.text.primary,
    },
}))

const SideNavbar = ({
    props,
    aboutRef,
    skillsRef,
    experienceRef,
    socialsRef,
}) => {
    const theme = useTheme()

    const getIcon = (link) => {
        if (link === 'About') {
            return (
                <CustomTooltip title={link} arrow placement='right'>
                    <InfoIcon
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '2.5em',
                            cursor: 'pointer',
                            [`${theme.breakpoints.down('md')}`]: {
                                fontSize: '1.5em',
                            },
                        }}
                        onClick={() =>
                            aboutRef.current.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                    />
                </CustomTooltip>
            )
        } else if (link === 'Skills') {
            return (
                <CustomTooltip title={link} arrow placement='right'>
                    <CodeIcon
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '2.5em',
                            cursor: 'pointer',
                            [`${theme.breakpoints.down('md')}`]: {
                                fontSize: '1.5em',
                            },
                        }}
                        onClick={() =>
                            skillsRef.current.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                    />
                </CustomTooltip>
            )
        } else if (link === 'Experience') {
            return (
                <CustomTooltip title={link} arrow placement='right'>
                    <ArticleIcon
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '2.5em',
                            cursor: 'pointer',
                            [`${theme.breakpoints.down('md')}`]: {
                                fontSize: '1.5em',
                            },
                        }}
                        onClick={() =>
                            experienceRef.current.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                    />
                </CustomTooltip>
            )
        } else if (link === 'Socials') {
            return (
                <CustomTooltip title={link} arrow placement='right'>
                    <ConnectWithoutContactIcon
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: '2.5em',
                            cursor: 'pointer',
                            [`${theme.breakpoints.down('md')}`]: {
                                fontSize: '1.5em',
                            },
                        }}
                        onClick={() =>
                            socialsRef.current.scrollIntoView({
                                behavior: 'smooth',
                            })
                        }
                    />
                </CustomTooltip>
            )
        }
    }

    return (
        <Drawer variant='permanent'>
            <DrawerHeader></DrawerHeader>
            <List>
                <ListItem key={'theme'}>
                    <ListItemIcon>
                        <ToggleThemeIcon />
                    </ListItemIcon>
                </ListItem>
                {['About', 'Skills', 'Experience', 'Socials'].map((link, index) => (
                    <ListItem key={link}>
                        <ListItemIcon>{getIcon(link)}</ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideNavbar
