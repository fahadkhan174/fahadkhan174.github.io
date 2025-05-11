import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

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
            <AnimatedText>Sprinboot, Microservices</AnimatedText> and
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
                        <AnimatedText>ReactJS</AnimatedText>&nbsp;
                    </>
                ),
            },
            {
                title: 'Client Side Technologies',
                text: (
                    <>
                        HTML, CSS, Bootstrap,{' '}
                        <AnimatedText>Material UI</AnimatedText>, Ant Design,&nbsp;
                        <AnimatedText>TailwindCSS</AnimatedText>
                    </>
                ),
            },
            {
                title: 'Databases',
                text: (
                    <>
                        <AnimatedText>MongoDB</AnimatedText>,
                        MySQL, Couchbase,&nbsp;
                        <AnimatedText>IBM Cloudant</AnimatedText>&nbsp;
                    </>
                ),
            },
            {
                title: 'Server Side Technologies',
                text: 'Servlet, JSP’s, Maven, Gradle',
            },

            {
                title: 'Software & Tools',
                text: (
                    <>
                        <AnimatedText>IntelliJ IDEA</AnimatedText>, Eclipse, Oracle SQL Developer, Visual Studio Code
                    </>
                ),
            },
        ],
    },
    experience: {
        title: 'Experience',
        items: [
            {
                title: 'IBM (AMEX) (Dec-2022 To Present)',
                description: (
                    <ul>
                        <li>
                            Enhancing and maintaining a number of platform repos that are consumed
                            by other teams as dependencies ex- kafka-client, rest-client etc.
                        </li>
                        <li>
                            Worked on creating <AnimatedText>scheduler scripts</AnimatedText> for
                            cleaning up db, redundant data or data fixes.
                        </li>
                        <li>
                            <AnimatedText>Version upgrades</AnimatedText> for platform repos dependencies,
                            troubleshoot issues, code reviews etc.
                        </li>
                        <li>
                            Involved in all phases of SDLC from analysis, design, developement, testing, implementation
                            and maintenance.
                        </li>
                        <li>
                            Trained new members on application functionalities and troubleshooting errors.
                        </li>
                    </ul>
                ),
            },
            {
                title: 'TCS (Microsoft) (Apr-2022 To Aug-2022)',
                description: (
                    <ul>
                        <li>
                            Worked on <AnimatedText>migrating a monolith</AnimatedText> application to Springboot based {' '}
                            <AnimatedText>microservices</AnimatedText> architecture with frontend built in ReactJS.
                        </li>
                        <li>Created a feature where we use docfx tool to create blobs for
                            repo, store in Azure storage and serve content through webapp
                            deployed over <AnimatedText>Azure</AnimatedText> webservices.
                        </li>
                        <li>
                            Involved in all phases of SDLC from {' '}
                            <AnimatedText>analysis, design, developement, testing, implementation
                                and maintenance</AnimatedText>.
                        </li>
                        <li>
                            Trained new members on application functionalities and troubleshooting errors.
                        </li>
                    </ul>
                ),
            },
            {
                title: 'TCS (Motorola Solutions Interprise) (Jan-2020 To Feb-2022)',
                description: (
                    <ul>
                        <li>Involved in the Requirement Analysis for features,
                            discussions on{' '}
                            <AnimatedText > Design and Development</AnimatedText>.
                        </li>
                        <li>
                            Implementation of business logic and frontend components using{' '}
                            <AnimatedText>
                                Springboot, Microservices, ReactJS, Redux Thunk,
                                Material UI framework{' '}
                            </AnimatedText>
                            etc.
                        </li>
                    </ul>
                ),
            },
            {
                title: 'TCS (Royal Bank of Scotland) (Jan-2019 To Dec-2020)',
                description: (
                    <ul>
                        <li>Created web application components using React Along
                            with customer WebSDK, used third party libraries like{' '}
                            <AnimatedText>
                                Redux, React Bootstrap, React-Table
                            </AnimatedText>{' '}
                            etc.
                        </li >
                        <li>
                            Worked on design documents based on the features
                            and functionalities to provide with the migrated
                            application on newer technology stack.
                        </li>
                    </ul>
                ),
            },
            {
                title: 'TCS (Astellas Pharma) (Sep-2017 To Dec-2018)',
                description: (
                    <ul>
                        <li>Worked on <AnimatedText>Spring MVC</AnimatedText> for
                            development and act as first level support for customer
                            problems, prepared various POCs build on{' '}
                            <AnimatedText>Java, Spring</AnimatedText> and{' '}
                            <AnimatedText>MongoDB</AnimatedText>.
                        </li>
                        <li>Involved in
                            analysis and requirement gathering for new features
                        </li>
                    </ul>
                ),
            },
            {
                title: 'TCS (Projects and Development India Ltd.) (Aug-2016 To Aug-2017)',
                description: (
                    <ul>
                        <li>Involved in Development Support activities, worked
                            extensively on java to create custom actions in
                            Documentum.
                        </li>
                        <li>
                            Creating <AnimatedText>cronjobs</AnimatedText> running java scripts to create periodic
                            reports & prepared management reports and perform
                            daily/weekly checklists.
                        </li>
                    </ul>
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
                desc: 'mailto:fahadkhan174@gmail.com',
            },
            {
                icon: (
                    <GitHubIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: '1.5em',
                        }}
                    />
                ),
                desc: 'https://github.com/fahadkhan174',
            },
            {
                icon: (
                    <InstagramIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: '1.5em',
                            color: '#D62976',
                        }}
                    />
                ),
                desc: 'https://instagram.com/fahadkhan174',
            },
            {
                icon: (
                    <TwitterIcon
                        sx={{
                            cursor: 'pointer',
                            fontSize: '1.5em',
                            color: '#1DA1F2',
                        }}
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
                    />
                ),
                desc: 'https://www.facebook.com/profile.php?id=100001866601467',
            },
        ],
    },
}

export default details
