import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const textAnimation = keyframes({
    '0%, 100%': { backgroundPositionX: '0%', backgroundPositionY: '0%' },
    '50%': { backgroundPositionX: '100%', backgroundPositionY: '50%' },
})

const AnimatedText = styled('span')(({ theme }) => ({
    fontWeight: 400,
    WebkitTextFillColor: 'transparent',
    WebkitBoxDecorationBreak: 'clone',
    background:
        'linear-gradient(135deg, rgb(254, 210, 206) 0%, rgb(255, 169, 164) 24%, rgb(230, 129, 216) 61%, rgb(139, 159, 232) 80%, rgb(53, 195, 243) 100%) 0% 0% / 400% 200%',
    WebkitBackgroundClip: 'text',
    animation: `7.5s ease-in-out infinite normal none running ${textAnimation}`,
}))

export default AnimatedText
