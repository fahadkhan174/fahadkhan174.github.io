import { useRef } from 'react'

import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import Grid from '@mui/material/Grid'

import details from '../details/details'
import SideNavbar from './SideNavbar'
import SvelteSvg from './SvelteSvg'

const HeroSection = styled('div')(({ theme }) => ({
    height: '100vh',
    padding: '2.5em 2em 0 2em',
    textAlign: 'left',
    ...theme.typography.body2,
    fontFamily: 'Inter',
    fontSize: '3.5em',
    fontWeight: '200',
    color: theme.palette.text.primary,
    [`${theme.breakpoints.down('lg')}`]: {
        fontSize: '2.5em',
    },
    [`${theme.breakpoints.down('md')}`]: {
        fontSize: '1em',
    },
}))

const Item = styled('div')(({ theme }) => ({
    padding: '1em 2em 2em 2em',
    textAlign: 'left',
    ...theme.typography.body2,
    fontFamily: 'Inter',
    fontSize: '3.5em',
    fontWeight: '200',
    color: theme.palette.text.primary,
    [`${theme.breakpoints.down('lg')}`]: {
        fontSize: '2.5em',
    },
    [`${theme.breakpoints.down('md')}`]: {
        fontSize: '1em',
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
                                                marginLeft: '1em',
                                                [`${theme.breakpoints.down(
                                                    'md'
                                                )}`]: {
                                                    fontSize: '0.75em',
                                                    marginLeft: '1em'
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
                            {details.socials.items.map((item) => (
                                <Grid
                                    item xs={12}
                                    key={item.desc}
                                >
                                    <Grid
                                        container
                                        justifyContent='center'
                                        alignItems='center'
                                        sx={{
                                            fontSize: '0.75em'
                                        }}
                                    >
                                        <Grid
                                            item
                                            md={1}
                                            xs={12}
                                        >
                                            {item.icon}{' '}
                                        </Grid>
                                        <Grid
                                            item
                                            md={11}
                                            xs={12}
                                            sx={{
                                                fontSize: '0.5em',
                                                [`${theme.breakpoints.down(
                                                    'md'
                                                )}`]: {
                                                    fontSize: '0.75em',
                                                    wordBreak: 'break-word',
                                                },
                                            }}

                                        >
                                            <span
                                                style={{
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() =>
                                                    window.open(
                                                        `${item.desc}`,
                                                        '_blank',
                                                        'noopener,noreferrer'
                                                    )
                                                }
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        window.open(
                                                            `${item.desc}`,
                                                            '_blank',
                                                            'noopener,noreferrer'
                                                        );
                                                    }
                                                }}
                                            >
                                                {item.desc}
                                            </span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                            <Grid
                                item xs={12}
                                key={`svelte-app`}
                            >
                                <Grid
                                    container
                                    justifyContent='center'
                                    alignItems='center'
                                    sx={{
                                        fontSize: '0.75em'
                                    }}
                                >
                                    <Grid
                                        item
                                        md={1}
                                        xs={12}
                                    >
                                        <SvelteSvg />
                                    </Grid>
                                    <Grid
                                        item
                                        md={11}
                                        xs={12}
                                        sx={{
                                            fontSize: '0.5em',
                                            [`${theme.breakpoints.down(
                                                'md'
                                            )}`]: {
                                                fontSize: '0.75em',
                                                wordBreak: 'break-word',
                                            },
                                        }}

                                    >
                                        <a
                                            href='https://fahadkhan174.github.io/svelte'
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white'
                                            }}>
                                            https://fahadkhan174.github.io/svelte
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home
