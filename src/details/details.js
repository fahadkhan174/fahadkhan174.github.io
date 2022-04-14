import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

import AnimatedText from '../theme/AnimatedText'

const details = {
    heroSection: (
        <>
            Hi, I'm{' '}
            <strong
                style={{
                    fontFamily: 'Averia Serif Libre',
                    fontWeight: '100 ',
                }}
            >
                Fahad
            </strong>
            . I specialize in building data‑intensive software systems using{' '}
            <AnimatedText>Sprinboot, JPA, Microservices</AnimatedText> and
            complex <AnimatedText>ReactJS</AnimatedText> user interfaces
        </>
    ),
    skills: {
        title: 'My Skills',
        items: [
            {
                title: 'Languages',
                text: (
                    <>
                        <AnimatedText>Java</AnimatedText> and{' '}
                        <AnimatedText>JavaScript</AnimatedText>
                    </>
                ),
            },
            {
                title: 'Frameworks',
                text: (
                    <>
                        <AnimatedText>SpringBoot</AnimatedText>,&nbsp;
                        <AnimatedText>Microservices</AnimatedText>,&nbsp;
                        <AnimatedText>JPA</AnimatedText>,&nbsp;
                        <AnimatedText>ReactJS</AnimatedText>&nbsp;
                    </>
                ),
            },
            {
                title: 'Server Side Technologies',
                text: 'Servlet, JSP’s, Maven',
            },
            {
                title: 'Client Side Technologies',
                text: (
                    <>
                        HTML, CSS, Bootstrap,{' '}
                        <AnimatedText>Material UI</AnimatedText>, Ant Design
                    </>
                ),
            },
            {
                title: 'Software & Tools',
                text: 'Eclipse, Oracle SQL Developer, Visual Studio Code',
            },
        ],
    },
    experience: {
        title: 'Experience',
        items: [
            {
                title: 'Motorola Solutions Interprise (TCS) (01-Jan-2021 To 28-Feb-2022)',
                description: (
                    <>
                        Involved in the Requirement Analysis for features,
                        discussions on{' '}
                        <AnimatedText>Design and Development</AnimatedText>.
                        Implementation of business logic and frontend components using{' '}
                        <AnimatedText>
                            Springboot, Microservices, ReactJS, Redux Thunk,
                            Material UI framework{' '}
                        </AnimatedText>
                        etc.
                    </>
                ),
            },
            {
                title: 'Royal Bank of Scotland (TCS) (01-Jan-2019 To 11-Dec-2020)',
                description: (
                    <>
                        Created web application components using React Along
                        with customer WebSDK, used third party libraries like{' '}
                        <AnimatedText>
                            Redux, React Bootstrap, React-Table
                        </AnimatedText>{' '}
                        etc., worked on design documents based on the features
                        and functionalities to provide with the migrated
                        application on newer technology stack
                    </>
                ),
            },
            {
                title: 'Astellas Pharma (TCS) (22-Sep-2017 To 31-Dec-2018)',
                description: (
                    <>
                        Worked on <AnimatedText>Spring MVC</AnimatedText> for
                        development and act as first level support for customer
                        problems, prepared various POCs build on{' '}
                        <AnimatedText>Java, Spring</AnimatedText> and{' '}
                        <AnimatedText>MongoDB</AnimatedText> and involved in
                        analysis and requirement gathering for new features
                    </>
                ),
            },
            {
                title: 'Projects and Development India Ltd. (TCS) (29-Aug-2016 To 31-Aug-2017)',
                description: (
                    <>
                        Involved in Development Support activities, worked
                        extensively on java to create custom actions in
                        Documentum and creating jobs in java to create periodic
                        reports & prepared management reports and perform
                        daily/weekly checklists
                    </>
                ),
            },
        ],
    },
    socials: {
        title: 'Socials',
        items: [
            {
                icon: (
                    <AlternateEmailIcon
                        sx={{ cursor: 'pointer', fontSize: '1.5em' }}
                    />
                ),
                desc: 'fahadkhan174@gmail.com',
            },
            {
                icon: (
                    <GitHubIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: '1.5em',
                        }}
                        onClick={() =>
                            window.open(
                                'https://github.com/fahadkhan174',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }
                    />
                ),
                desc: 'https://github.com/fahadkhan174',
            },
            {
                icon: (
                    <TwitterIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: '1.5em',
                            color: '#1DA1F2',
                        }}
                        onClick={() =>
                            window.open(
                                'https://twitter.com/fahadkhan174',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }
                    />
                ),
                desc: 'https://twitter.com/fahadkhan174',
            },
            {
                icon: (
                    <FacebookIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: '1.5em',
                            color: '#4267B2',
                        }}
                        onClick={() =>
                            window.open(
                                'https://www.facebook.com/profile.php?id=100001866601467',
                                '_blank',
                                'noopener,noreferrer'
                            )
                        }
                    />
                ),
                desc: 'https://www.facebook.com/profile.php?id=100001866601467',
            },
        ],
    },
}

export default details
