import React, { useRef } from 'react'

import { useTheme } from '@emotion/react'
import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'

import SideNavbar from './SideNavbar'
import details from '../details/details'

const HeroSection = styled('div')(({ theme }) => ({
    padding: '4.5em 2em 0 2em',
    textAlign: 'left',
    ...theme.typography.body2,
    fontFamily: 'Inter',
    fontSize: '4.5em',
    fontWeight: '200',
    color: theme.palette.text.primary,
    [`${theme.breakpoints.down('lg')}`]: {
        fontSize: '3.5em',
    },
    [`${theme.breakpoints.down('md')}`]: {
        fontSize: '2em',
    },
}))

const Item = styled('div')(({ theme }) => ({
    padding: '4.5em 2em 2em 2em',
    textAlign: 'left',
    ...theme.typography.body2,
    fontFamily: 'Inter',
    fontSize: '4.5em',
    fontWeight: '200',
    color: theme.palette.text.primary,
    [`${theme.breakpoints.down('lg')}`]: {
        fontSize: '3.5em',
    },
    [`${theme.breakpoints.down('md')}`]: {
        fontSize: '2em',
    },
}))

const Home = () => {
    const theme = useTheme()
    const aboutRef = useRef()
    const skillsRef = useRef()
    const experienceRef = useRef()
    const socialsRef = useRef()

    return (
        <Grid
            container
            sx={{
                background:
                    theme.palette.mode === 'dark'
                        ? 'linear-gradient(to right, #282828, #111010, #040404, #010101)'
                        : 'linear-gradient(to right, #fdf9f6, #fdf9f7, #fdf9f8, #fdfbfb)',
                color: theme.palette.text.primary,
            }}
        >
            <SideNavbar
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                experienceRef={experienceRef}
                socialsRef={socialsRef}
            />
            <Grid container>
                <Grid item xs={12} ref={aboutRef}>
                    <HeroSection>{details.heroSection}</HeroSection>
                </Grid>
                <Grid item xs={12} ref={skillsRef}>
                    <Item>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                            sx={{ fontFamily: 'Inter' }}
                        >
                            <Grid item xs={12} sx={{ paddingBottom: '0.5em' }}>
                                {details.skills.title}
                            </Grid>
                            <Grid item xs={12}>
                                {details.skills.items.map((item, index) => (
                                    <Grid
                                        container
                                        spacing={1}
                                        sx={{
                                            fontSize: '0.5em',
                                            marginBottom: '0.75em',
                                        }}
                                        key={item.title}
                                    >
                                        <Grid item md={6} xs={12}>
                                            {item.title}
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            {item.text}
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
                <Grid item xs={12} ref={experienceRef}>
                    <Item>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                            sx={{ fontFamily: 'Inter' }}
                        >
                            <Grid item xs={12} sx={{ paddingBottom: '0.5em' }}>
                                {details.experience.title}
                            </Grid>
                            {details.experience.items.map((item) => (
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        fontSize: '0.75em',
                                        marginBottom: '1em',
                                    }}
                                    key={item.title}
                                >
                                    <Grid container>
                                        <Grid item xs={12}>
                                            {item.title}
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sx={{
                                                fontSize: '0.5em',
                                                [`${theme.breakpoints.down(
                                                    'md'
                                                )}`]: {
                                                    fontSize: '0.75em',
                                                },
                                            }}
                                        >
                                            {item.description}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Item>
                </Grid>
                <Grid item xs={12} ref={socialsRef}>
                    <Item>
                        <Grid
                            container
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                            sx={{ fontFamily: 'Inter' }}
                        >
                            <Grid item xs={12} sx={{ paddingBottom: '0.1em' }}>
                                {details.socials.title}
                            </Grid>
                            {details.socials.items.map((item, index) => (
                                <Grid item xs={12} key={index}>
                                    <Grid
                                        container
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Grid item md={3} xs={12}>
                                            {item.icon}{' '}
                                        </Grid>
                                        <Grid
                                            item
                                            md={9}
                                            xs={12}
                                            sx={{
                                                fontSize: '0.5em',
                                                [`${theme.breakpoints.down(
                                                    'md'
                                                )}`]: {
                                                    fontSize: '0.75em',
                                                },
                                            }}
                                        >
                                            {item.desc}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home
