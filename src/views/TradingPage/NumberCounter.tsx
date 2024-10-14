import React from 'react'
import { useSpring, animated } from 'react-spring'

interface NumberCounterProps {
    startValue: number
    endValue: number
    duration?: number
}

const NumberCounter: React.FC<NumberCounterProps> = ({
    startValue,
    endValue,
    duration = 1000,
}) => {
    const { number } = useSpring({
        from: { number: startValue },
        to: { number: endValue },
        config: { duration }, // Adjust duration as needed
    })

    return (
        <animated.span>
            {endValue > 0 ? number.to((value) => value.toFixed(2)) : '0.00'}
        </animated.span>
    )
}

export default NumberCounter
