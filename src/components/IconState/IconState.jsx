import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm,
    WiDayHaze,
    WiDayFog,
    WiFog,
    WiSmoke,
    WiDust } from 'react-icons/wi'
import { deepOrange } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box'

export const validValues = [
        "clouds",
        "clear",
        "rain",
        "snow",
        "drizzle",
        "thunderstorm",
        "haze",
        "fog",
        "mist",
        "smoke",
        "dust"
]

const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    haze: WiDayHaze,
    fog:WiDayFog,
    mist: WiFog,
    smoke: WiSmoke,
    dust: WiDust,
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <Box sx={{ color: deepOrange[500], pr: 1, pl: 1}}>
            <StateByName />
        </Box>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState